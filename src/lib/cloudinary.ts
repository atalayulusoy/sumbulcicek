import { v2 as cloudinary } from "cloudinary";

import { appEnv, isCloudinaryConfigured } from "@/lib/env";

if (isCloudinaryConfigured) {
  cloudinary.config({
    cloud_name: appEnv.cloudinaryCloudName,
    api_key: appEnv.cloudinaryApiKey,
    api_secret: appEnv.cloudinaryApiSecret,
    secure: true,
  });
}

export async function uploadImageToCloudinary(file: File, folder = "sumbul-garden") {
  if (!isCloudinaryConfigured) {
    throw new Error("Cloudinary is not configured.");
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  const dataUri = `data:${file.type};base64,${buffer.toString("base64")}`;

  const response = await cloudinary.uploader.upload(dataUri, {
    folder,
    resource_type: "image",
  });

  return response.secure_url;
}
