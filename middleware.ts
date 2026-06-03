import { NextResponse, type NextRequest } from "next/server";

import { verifyAdminToken, ADMIN_TOKEN_COOKIE } from "@/lib/auth";

export async function middleware(request: NextRequest) {
  const token = request.cookies.get(ADMIN_TOKEN_COOKIE)?.value;
  const { pathname } = request.nextUrl;

  if (pathname === "/secret-admin-login" && token) {
    try {
      await verifyAdminToken(token);
      return NextResponse.redirect(new URL("/dashboard-admin", request.url));
    } catch {
      return NextResponse.next();
    }
  }

  if (pathname.startsWith("/dashboard-admin") || pathname.startsWith("/api/admin")) {
    if (!token) {
      if (pathname.startsWith("/api/admin")) {
        return NextResponse.json({ error: "Yetkisiz erisim." }, { status: 401 });
      }

      return NextResponse.redirect(new URL("/secret-admin-login", request.url));
    }

    try {
      await verifyAdminToken(token);
      return NextResponse.next();
    } catch {
      if (pathname.startsWith("/api/admin")) {
        return NextResponse.json({ error: "Yetkisiz erisim." }, { status: 401 });
      }

      return NextResponse.redirect(new URL("/secret-admin-login", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/secret-admin-login", "/dashboard-admin/:path*", "/api/admin/:path*"],
};
