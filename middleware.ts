import { NextResponse, type NextRequest } from "next/server";

const ADMIN_TOKEN_COOKIE = "sumbul-garden-admin-token";

export function middleware(request: NextRequest) {
  const token = request.cookies.get(ADMIN_TOKEN_COOKIE)?.value;
  const { pathname } = request.nextUrl;

  if (
    pathname.startsWith("/dashboard-admin") ||
    pathname.startsWith("/api/admin")
  ) {
    if (!token) {
      if (pathname.startsWith("/api/admin")) {
        return NextResponse.json(
          { error: "Yetkisiz erisim." },
          { status: 401 }
        );
      }

      return NextResponse.redirect(
        new URL("/secret-admin-login", request.url)
      );
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