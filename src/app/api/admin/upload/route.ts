import { NextResponse } from "next/server";

import { uploadImageToCloudinary } from "@/lib/cloudinary";
import { isCloudinaryConfigured } from "@/lib/env";
import { checkRateLimit, getRequestIp } from "@/lib/rate-limit";

export async function POST(request: Request) {
  if (!isCloudinaryConfigured) {
    return NextResponse.json(
      { error: "Cloudinary ayarlanmadigi icin gorsel yukleme kapali." },
      { status: 503 },
    );
  }

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

  if (!(file instanceof File)) {
    return NextResponse.json({ error: "Gecerli bir dosya secin." }, { status: 400 });
  }

  const url = await uploadImageToCloudinary(file);
  return NextResponse.json({ url });
}
