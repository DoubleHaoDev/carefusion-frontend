import type { NextAuthConfig } from "next-auth";
import Credentials from "@auth/core/providers/credentials";
import { LoginSchema } from "@/schemas";
import { loginUser } from "@/lib/actions/user.actions";
import { UserResponseJwt } from "@/types";

// Notice this is only an object, not a full Auth.js instance
export default {
  providers: [
    Credentials({
      async authorize(credentials) {
        const validatedFields = LoginSchema.safeParse(credentials);
        if (validatedFields.success) {
          const { email, password } = validatedFields.data;
          const loginResponse: UserResponseJwt | null = await loginUser({
            username: email,
            password,
          });
          return loginResponse;
        }
        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;
