import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  const { pathname } = req.nextUrl;

  if (!token && pathname.startsWith("/user-account"))
    return NextResponse.redirect(new URL("/", req.url));

  // Prevent signed-in users from accessing /login or /signup
  if (token && (pathname === "/login" || pathname === "/signup")) {
    return NextResponse.redirect(new URL("/", req.url)); // redirect to homepage
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/login", "/signup", "/user-account/:path*"], // match only login and signup routes
};
