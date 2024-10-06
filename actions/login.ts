"use server";

import { LoginSchema } from "@/schemas";
import { z } from "zod";
import { signIn } from "@/auth";
import { AuthError } from "next-auth";

export const login = async (values: z.infer<typeof LoginSchema>) => {
  const validatedFields = LoginSchema.safeParse(values);
  if (validatedFields.success) {
    const { email, password, code } = validatedFields.data;
    try {
      await signIn("credentials", {
        email: email,
        password: password,
        redirectTo: `/patient/54521`,
      });
      return {
        success: "Logged in",
        error: "",
      };
    } catch (error) {
      if (error instanceof AuthError) {
        switch (error.type) {
          case "CredentialsSignin":
            return { error: "Invalid credentials", success: "" };
          default:
            return { error: "An error occurred", success: "" };
        }
      }
      throw error;
    }
  }
  return {
    success: "",
    error: "Error logging in",
  };
};
