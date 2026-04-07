import { getToken } from "next-auth/jwt";
import { NextFetchEvent, NextMiddleware, NextRequest, NextResponse } from "next/server";

const hanyaAdmin = ["/admin"];
const hanyaEditor = ["/editor"];

export default function withAuth(
  middleware: NextMiddleware,
  requireAuth: string[] = [],
) {
  return async (req: NextRequest, next: NextFetchEvent) => {
    const pathname = req.nextUrl.pathname;

    if (requireAuth.includes(pathname)) {
      const token = await getToken({
        req,
        secret: process.env.NEXTAUTH_SECRET,
      });

      if (!token) {
        const url = new URL("/auth/login", req.url);
        url.searchParams.set("callbackUrl", req.url);
        return NextResponse.redirect(url);
      }

      if (hanyaAdmin.includes(pathname) && token.role !== "admin") {
        return NextResponse.redirect(new URL("/", req.url));
      }

      if (hanyaEditor.includes(pathname) && token.role !== "editor") {
        return NextResponse.redirect(new URL("/", req.url));
      }
    }
    return middleware(req, next);
  }
}