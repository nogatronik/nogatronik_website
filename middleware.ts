import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  const { pathname } = req.nextUrl;
  const protectedRoutes = ["/user-account", "/create-request"];
  console.log(pathname);
  if (
    !token &&
    protectedRoutes.some(
      (path) => pathname.startsWith(path) || pathname.includes(path)
    )
  )
    return NextResponse.redirect(new URL("/", req.url));

  // Prevent signed-in users from accessing /login or /signup
  if (token && (pathname === "/login" || pathname === "/signup")) {
    return NextResponse.redirect(new URL("/", req.url)); // redirect to homepage
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/login", "/signup", "/user-account/:path*", "/engineering/:path*"],
};
