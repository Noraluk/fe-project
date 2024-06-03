import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

const publicRoutes = ["/"];

export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;
  const isPublicRoute = publicRoutes.includes(path);

  const token = req.cookies.get("token")?.value;

  const prevPath = req.headers.get("referer")?.replace(process.env.HOST!, "");
  if (
    !!!prevPath?.startsWith("/pokemon") &&
    path.startsWith("/pokemon") &&
    prevPath != "/portforlio/project/pokemon/web"
  ) {
    return NextResponse.redirect(
      new URL("/portforlio/project/pokemon/web", req.nextUrl)
    );
  }else if (
    !!!prevPath?.startsWith("/messenger") &&
    path.startsWith("/messenger") &&
    prevPath != "/portforlio/project/messenger"
  ) {
    return NextResponse.redirect(
      new URL("/portforlio/project/messenger", req.nextUrl)
    );
  }

  return NextResponse.next();
}

// Routes Middleware should not run on
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
