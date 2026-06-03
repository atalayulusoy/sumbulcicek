import { DEFAULT_JWT_SECRET, DEFAULT_SITE_URL } from "@/lib/constants";

const env = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || process.env.SITE_URL || DEFAULT_SITE_URL,
  databaseUrl: process.env.DATABASE_URL,
  jwtSecret: process.env.JWT_SECRET,
  cloudinaryCloudName: process.env.CLOUDINARY_CLOUD_NAME,
  cloudinaryApiKey: process.env.CLOUDINARY_API_KEY,
  cloudinaryApiSecret: process.env.CLOUDINARY_API_SECRET,
};

const placeholderDatabaseFragments = [
  "username:password",
  "postgres://USER:PASSWORD",
  "postgresql://USER:PASSWORD",
];

export const isDatabaseConfigured = Boolean(
  env.databaseUrl &&
    !placeholderDatabaseFragments.some((fragment) => env.databaseUrl?.includes(fragment)),
);

export const isCloudinaryConfigured = Boolean(
  env.cloudinaryCloudName && env.cloudinaryApiKey && env.cloudinaryApiSecret,
);

export const appEnv = env;

export function getJwtSecretValue() {
  return env.jwtSecret || (process.env.NODE_ENV !== "production" ? DEFAULT_JWT_SECRET : undefined);
}

export function getRequiredEnv(key: keyof typeof env) {
  const value = env[key];

  if (!value) {
    throw new Error(`Missing environment variable: ${key}`);
  }

  return value;
}
