import NextAuth from "next-auth";
import authConfig from "@/auth.config";
import {
  apiAdminPrefix,
  apiAuthPrefix,
  apiPatientPrefix,
  apiProviderPrefix,
  authRoutes, DEFAULT_ADMIN_LOGIN_REDIRECT,
  DEFAULT_LOGIN_REDIRECT,
  DEFAULT_PATIENT_LOGIN_REDIRECT,
  DEFAULT_PROVIDER_LOGIN_REDIRECT,
  publicRoutes,
} from "@/routes";
import { getToken } from "next-auth/jwt";
import { UserResponseJwt } from "@/types";

const { auth } = NextAuth(authConfig);

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};

export default auth(async (req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;

  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);
  const isPatientRoute = nextUrl.pathname.startsWith(apiPatientPrefix);
  const isProviderRoute = nextUrl.pathname.startsWith(apiProviderPrefix);
  const isAdminRoute = nextUrl.pathname.startsWith(apiAdminPrefix);
  const session = await getToken({
    req,
    secret: process.env.AUTH_SECRET,
  });

  if (isApiAuthRoute) {
    return null;
  }

  if (isAuthRoute) {
    if (isLoggedIn && session) {
      const user: UserResponseJwt = session.user as UserResponseJwt;
      if (isPatientRoute && user.userType === "patient") {
        return Response.redirect(
          new URL(DEFAULT_PATIENT_LOGIN_REDIRECT, nextUrl)
        );
      } else if (isProviderRoute && user.userType === "provider") {
        Response.redirect(new URL(DEFAULT_PROVIDER_LOGIN_REDIRECT, nextUrl));
      } else if (isAdminRoute && user.userType === "admin") {
        Response.redirect(new URL(DEFAULT_ADMIN_LOGIN_REDIRECT, nextUrl));
      }
      return Response.redirect(new URL(user.userType, nextUrl));
    }
    return null;
  }

  if (!isLoggedIn && !isPublicRoute) {
    if (req.nextUrl.pathname.startsWith("/patient")) {
      return Response.redirect(new URL("/patient/login", nextUrl));
    } else if (req.nextUrl.pathname.startsWith("/provider")) {
      return Response.redirect(new URL("/provider/login", nextUrl));
    } else {
      return Response.redirect(new URL("/", nextUrl));
    }
  }

  return null;
});
