"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "@/components/ui/form";
import CustomFormField from "@/components/CustomFormField";
import SubmitButton from "@/components/SubmitButton";
import { useState } from "react";
import { UserRegisterFormValidation } from "@/lib/validation";
import { useRouter } from "next/navigation";
import { FormFieldType } from "@/constants/FormFieldTypes";

const UserRegisterForm = ({
  isRegister,
  submitRegister,
}: {
  isRegister: boolean;
  submitRegister: (requestUserDto: RequestUserSignupDto) => void;
}) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [isRegisterFailed, setIsRegisterFailed] = useState(false);
  const form = useForm<z.infer<typeof UserRegisterFormValidation>>({
    resolver: zodResolver(UserRegisterFormValidation),
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  async function onSubmit({
    firstname,
    lastname,
    email,
    password,
    confirmPassword,
  }: z.infer<typeof UserRegisterFormValidation>) {
    setIsLoading(true);
    submitRegister({
      firstname: firstname,
      lastname: lastname,
      username: email,
      password,
    });
    setIsLoading(false);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
        <section className="mb-12 space-y-4">
          <h1 className="header">Hi There</h1>
          <p className="text-dark-700">Schedule your first appointment.</p>
        </section>
        <div className="flex flex-col gap-6 xl:flex-row">
          <CustomFormField
            fieldType={FormFieldType.INPUT}
            control={form.control}
            name="firstname"
            label="First Name"
            placeholder="John"
            iconSrc="/assets/icons/user.svg"
            iconAlt="firstname"
          />
          <CustomFormField
            fieldType={FormFieldType.INPUT}
            control={form.control}
            name="lastname"
            label="Last Name"
            placeholder="Doe"
            iconSrc="/assets/icons/user.svg"
            iconAlt="lastname"
          />
        </div>
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
        <CustomFormField
          fieldType={FormFieldType.PASSWORD}
          control={form.control}
          name="confirmPassword"
          label="Confirm Password"
          placeholder="Confirm Password"
          iconSrc="/assets/icons/password.svg"
          iconAlt="user"
        />
        <SubmitButton isLoading={isLoading} isPatient={true}>
          Register
        </SubmitButton>
      </form>
    </Form>
  );
};

export default UserRegisterForm;
