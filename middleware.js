import { NextResponse } from "next/server";

const COOKIE_NAME = "bf_admin";

export function middleware(request) {
  const { pathname } = request.nextUrl;
  if (pathname === "/admin/login") return NextResponse.next();
  if (pathname.startsWith("/admin")) {
    const cookie = request.cookies.get(COOKIE_NAME);
    if (!cookie || cookie.value !== process.env.ADMIN_PASSWORD) {
      const url = request.nextUrl.clone();
      url.pathname = "/admin/login";
      return NextResponse.redirect(url);
    }
  }
  return NextResponse.next();
}

export const config = { matcher: ["/admin/:path*"] };
