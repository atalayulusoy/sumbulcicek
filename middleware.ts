import { jwtVerify } from "jose";
import { NextResponse, type NextRequest } from "next/server";

const ADMIN_TOKEN_COOKIE = "sumbul-garden-admin-token";
const DEFAULT_JWT_SECRET = "sumbul-garden-local-dev-secret";

async function hasValidAdminToken(token: string | undefined) {
  if (!token) {
    return false;
  }

  try {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET || DEFAULT_JWT_SECRET);
    const { payload } = await jwtVerify(token, secret);
    return payload.role === "admin";
  } catch {
    return false;
  }
}

function unauthorizedAdminResponse(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith("/api/admin")) {
    const response = NextResponse.json({ error: "Yetkisiz erisim." }, { status: 401 });
    response.cookies.delete(ADMIN_TOKEN_COOKIE);
    return response;
  }

  const response = NextResponse.redirect(new URL("/secret-admin-login", request.url));
  response.cookies.delete(ADMIN_TOKEN_COOKIE);
  return response;
}

export async function middleware(request: NextRequest) {
  const token = request.cookies.get(ADMIN_TOKEN_COOKIE)?.value;
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/dashboard-admin") ||
    pathname.startsWith("/api/admin")
  ) {
    if (!(await hasValidAdminToken(token))) {
      return unauthorizedAdminResponse(request);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard-admin/:path*",
    "/api/admin/:path*",
  ],
};
