import { NextResponse } from "next/server";

import { setAdminCookie, signAdminToken, verifyPassword } from "@/lib/auth";
import { isDatabaseConfigured } from "@/lib/env";
import { prisma } from "@/lib/prisma";
import { checkRateLimit, getRequestIp } from "@/lib/rate-limit";
import { adminLoginSchema } from "@/lib/validators";

export async function POST(request: Request) {
  try {
    const ip = getRequestIp(request);
    const limiter = checkRateLimit({
      key: `admin-login:${ip}`,
      limit: 5,
      windowMs: 60_000,
    });

    if (!limiter.success) {
      return NextResponse.json(
        { error: "Cok fazla giris denemesi yapildi. Lutfen biraz bekleyin." },
        { status: 429 },
      );
    }

    const json = await request.json();
    const parsed = adminLoginSchema.safeParse(json);

    if (!parsed.success) {
      return NextResponse.json({ error: parsed.error.issues[0]?.message }, { status: 400 });
    }

    if (!isDatabaseConfigured) {
      const demoEmail = process.env.ADMIN_EMAIL ?? "admin@sumbulgarden.com";
      const demoPassword = process.env.ADMIN_PASSWORD ?? "Admin123!";
      const acceptedEmails = [demoEmail, "admin@sumbulgarden.com"];

      if (!acceptedEmails.includes(parsed.data.email) || parsed.data.password !== demoPassword) {
        return NextResponse.json({ error: "Gecersiz giris bilgileri." }, { status: 401 });
      }

      const token = await signAdminToken({
        adminId: "demo-admin",
        email: parsed.data.email,
        role: "admin",
      });

      const response = NextResponse.json({
        success: true,
        demoMode: true,
        message: "Demo admin oturumu acildi. Kaydetme islemleri icin DATABASE_URL gereklidir.",
      });
      setAdminCookie(response, token);

      return response;
    }

    const admin = await prisma.admin.findUnique({
      where: { email: parsed.data.email },
    });

    if (!admin) {
      return NextResponse.json({ error: "Gecersiz giris bilgileri." }, { status: 401 });
    }

    const validPassword = await verifyPassword(parsed.data.password, admin.passwordHash);

    if (!validPassword) {
      return NextResponse.json({ error: "Gecersiz giris bilgileri." }, { status: 401 });
    }

    const token = await signAdminToken({
      adminId: admin.id,
      email: admin.email,
      role: "admin",
    });

    const response = NextResponse.json({ success: true });
    setAdminCookie(response, token);

    return response;
  } catch (error) {
    console.error("[admin-login]", error);
    return NextResponse.json(
      { error: "Admin girisi sirasinda beklenmeyen bir hata olustu." },
      { status: 500 },
    );
  }
}
