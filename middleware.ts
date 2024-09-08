import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtDecode } from "jwt-decode";
import { AppUserType } from "@/constants/AppUserTypes";
// export const config = {
//     matcher:  ['//:path*'],
// }

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  if (pathname.startsWith("/patient")) {
    return handlePatientRequests(request);
  } else if (pathname.startsWith("/provider")) {
    return handleProviderRequests(request);
  } else if (pathname.startsWith("/admin")) {
    return handleAdminRequests(request);
  }
}

function handlePatientRequests(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const userJwtCookie = request.cookies.get("accessToken");
  if (
    !userJwtCookie &&
    (pathname.startsWith("/patient/login") ||
      pathname.startsWith("/patient/register"))
  ) {
    console.log("pathname2", pathname);
    return NextResponse.next();
  }

  if (
    !userJwtCookie &&
    (!pathname.startsWith("/patient/login") ||
      !pathname.startsWith("/patient/register"))
  ) {
    return NextResponse.redirect(new URL("/patient/login", request.url));
  }

  if (
    userJwtCookie &&
    (pathname.startsWith("/patient/login") ||
      pathname.startsWith("/patient/register"))
  ) {
    return NextResponse.redirect(new URL("/patient/dashboard", request.url));
  }

  const userJwt: UserResponseJwt = jwtDecode(userJwtCookie!.value);
  if (userJwt.userType.toLowerCase() !== AppUserType.PATIENT.toLowerCase()) {
    return NextResponse.redirect(
      new URL(`/${userJwt.userType}/dashboard`, request.url)
    );
  }
}

function handleProviderRequests(request: NextRequest) {
  //TODO implement provider routing middleware here
}

function handleAdminRequests(request: NextRequest) {
  //TODO implement admin routing middleware here
}
