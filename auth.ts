import NextAuth from "next-auth";
import authConfig from "@/auth.config";
import { UserResponseJwt } from "@/types";

declare module "next-auth" {
  interface Session {
    user: UserResponseJwt;
  }
  interface JWT {
    user: UserResponseJwt;
  }
}

declare module "@auth/core/jwt" {
  interface JWT {
    // user: UserResponseJwt;
  }
}

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  pages: {
    signIn: "/patient/login",
  },
  events: {
    async linkAccount({ user }) {},
  },
  callbacks: {
    async signIn({ user, account }) {
      return true;
    },
    async session({ token, session, user }) {
      // console.log(token.user);
      session.user = token.user;
      // session.user = token.name;
      // console.log(session.user.userUuid);
      return session;
    },
    async jwt({ token, user, session }) {
      // console.log({ token, session, user });
      if (user) {
        token.user = user;
      }
      return token;
    },
  },
  session: { strategy: "jwt" },
  ...authConfig,
});
