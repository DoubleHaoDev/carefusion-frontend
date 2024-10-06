"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "@/components/ui/form";
import CustomFormField from "@/components/CustomFormField";
import SubmitButton from "@/components/SubmitButton";
import { useState } from "react";
import { UserLoginFormValidation } from "@/lib/validation";
import { useRouter } from "next/navigation";
import { FormFieldType } from "@/constants/FormFieldTypes";
import { loginUser } from "@/lib/actions/user.actions";
import { useToast } from "@/hooks/use-toast";
import { LoginSchema } from "@/schemas";
import { UserResponseJwt } from "@/types";
import { login } from "@/actions/login";

const UserLoginForm = ({ isPatient }: { isPatient: boolean }) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const form = useForm<z.infer<typeof UserLoginFormValidation>>({
    resolver: zodResolver(UserLoginFormValidation),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { toast } = useToast();

  const greetingText: string = isPatient
    ? "Schedule your first appointment"
    : "Manage your appointments";

  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    login(values)
      .then((data) => {
        if (data?.error) {
          form.reset();
          toast({ title: "Login failed, please try again" });
        }

        if (data?.success) {
          form.reset();
        }
      })
      .catch(() => {
        toast({ title: "Login failed, please try again" });
      });
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
        <section className="mb-12 space-y-4">
          <h1 className="header">Welcome Back</h1>
          <p className="text-dark-700">{greetingText}</p>
        </section>
        <CustomFormField
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name="email"
          label="Email"
          placeholder="johndoe@gmail.com"
          iconSrc="/assets/icons/email.svg"
          iconAlt="email"
        />
        <CustomFormField
          fieldType={FormFieldType.PASSWORD}
          control={form.control}
          name="password"
          label="Password"
          placeholder="Password"
          iconSrc="/assets/icons/password.svg"
          iconAlt="user"
        />
        <SubmitButton isLoading={isLoading} isPatient={isPatient}>
          Login
        </SubmitButton>
      </form>
    </Form>
  );
};

export default UserLoginForm;
