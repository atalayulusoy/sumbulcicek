import bcrypt from "bcryptjs";
import { cookies } from "next/headers";
import { SignJWT, jwtVerify, type JWTPayload } from "jose";
import { NextResponse } from "next/server";

import { getJwtSecretValue, getRequiredEnv } from "@/lib/env";

export const ADMIN_TOKEN_COOKIE = "sumbul-garden-admin-token";

export interface AdminTokenPayload extends JWTPayload {
  adminId: string;
  email: string;
  role: "admin";
}

function getJwtSecret() {
  const secret = getJwtSecretValue() ?? getRequiredEnv("jwtSecret");
  return new TextEncoder().encode(secret);
}

export async function hashPassword(password: string) {
  return bcrypt.hash(password, 12);
}

export async function verifyPassword(password: string, hash: string) {
  return bcrypt.compare(password, hash);
}

export async function signAdminToken(payload: Omit<AdminTokenPayload, keyof JWTPayload>) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(getJwtSecret());
}

export async function verifyAdminToken(token: string) {
  const { payload } = await jwtVerify(token, getJwtSecret());
  return payload as AdminTokenPayload;
}

export async function getAdminFromCookies() {
  const token = cookies().get(ADMIN_TOKEN_COOKIE)?.value;

  if (!token) {
    return null;
  }

  try {
    return await verifyAdminToken(token);
  } catch {
    return null;
  }
}

export function setAdminCookie(response: NextResponse, token: string) {
  response.cookies.set({
    name: ADMIN_TOKEN_COOKIE,
    value: token,
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });
}

export function clearAdminCookie(response: NextResponse) {
  response.cookies.set({
    name: ADMIN_TOKEN_COOKIE,
    value: "",
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 0,
  });
}
