import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
// export const config = {
//     matcher:  ['//:path*'],
// }

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/admin")) {
    return NextResponse.rewrite(new URL("/admin", request.url));
  }

  if (request.nextUrl.pathname.startsWith("/dashboard")) {
    return NextResponse.rewrite(new URL("/dashboard/user", request.url));
  }
}
