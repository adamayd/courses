import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
// import { getSessionCookie } from "better-auth/cookies";

export async function proxy(request: NextRequest) {
  // This is the sample code from Better Auth docs.
  // It works but isn't secure and doesn't show verifying
  // the session.  Keep for now in case issues with demo.

  // const sessionCookie = getSessionCookie(request);

  // // THIS IS NOT SECURE!
  // // This is the recommended approach to optimistically redirect users
  // // We recommend handling auth checks in each page/route
  // if (!sessionCookie) {
  //   return NextResponse.redirect(new URL("/", request.url));
  // }

  const session = await auth.api.getSession({ headers: request.headers });

  const pathname = request.nextUrl.pathname;
  const isPublicRoute =
    pathname === "/" ||
    pathname.startsWith("/api/auth") ||
    pathname.startsWith("/login");

  if (!session && !isPublicRoute) {
    // Redirect unauthorized users to home or login page
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  // Specify the routes the proxy applies to
  matcher: [
    "/dashboard/:path*",
    // "/account/:path*",
    "/settings/:path*",
    "/api/private/:path*",
  ],
};
