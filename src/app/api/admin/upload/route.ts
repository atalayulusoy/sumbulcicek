import { promises as fs } from "fs";
import path from "path";
import { NextResponse } from "next/server";

import { uploadImageToCloudinary } from "@/lib/cloudinary";
import { isCloudinaryConfigured } from "@/lib/env";
import { checkRateLimit, getRequestIp } from "@/lib/rate-limit";

function isUploadFile(value: unknown): value is File {
  return (
    typeof value === "object" &&
    value !== null &&
    typeof (value as File).arrayBuffer === "function" &&
    typeof (value as File).name === "string"
  );
}

export async function POST(request: Request) {
  const ip = getRequestIp(request);
  const limiter = checkRateLimit({
    key: `upload:${ip}`,
    limit: 15,
    windowMs: 60_000,
  });

  if (!limiter.success) {
    return NextResponse.json(
      { error: "Cok fazla gorsel yukleme denemesi yapildi." },
      { status: 429 },
    );
  }

  const formData = await request.formData();
  const file = formData.get("file");

  if (!isUploadFile(file)) {
    return NextResponse.json({ error: "Gecerli bir dosya secin." }, { status: 400 });
  }

  if (isCloudinaryConfigured) {
    try {
      const url = await uploadImageToCloudinary(file);
      return NextResponse.json({ url });
    } catch (error) {
      console.error("[admin:upload:cloudinary]", error);
      return NextResponse.json(
        { error: "Cloudinary yukleme basarisiz oldu. Vercel ortam degiskenlerini kontrol edin." },
        { status: 500 },
      );
    }
  }

  if (process.env.NODE_ENV === "production" || process.env.VERCEL) {
    return NextResponse.json(
      {
        error:
          "Vercel uzerinde gorsel yuklemek icin CLOUDINARY_CLOUD_NAME, CLOUDINARY_API_KEY ve CLOUDINARY_API_SECRET gerekli.",
      },
      { status: 503 },
    );
  }

  const uploadsDir = path.join(process.cwd(), "public", "uploads");
  await fs.mkdir(uploadsDir, { recursive: true });

  const sanitizedFileName = file.name.replace(/[^a-zA-Z0-9.-]/g, "_");
  const fileName = `${Date.now()}-${sanitizedFileName}`;
  const targetPath = path.join(uploadsDir, fileName);
  const buffer = Buffer.from(await file.arrayBuffer());

  await fs.writeFile(targetPath, buffer);

  const url = `/uploads/${fileName}`;
  return NextResponse.json({ url });
}
