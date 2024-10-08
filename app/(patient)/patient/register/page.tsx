"use client";

import Image from "next/image";
import Link from "next/link";
import UserRegisterForm from "@/components/forms/UserRegisterForm";
import AlertModal from "@/components/AlertModal";
import { useState } from "react";
import { registerUser } from "@/lib/actions/user.actions";
import { useRouter } from "next/navigation";
import CareFusionLogoCard from "@/components/CareFusionLogoCard";

export default function UserRegister() {
  const [isRegisterFailed, setIsRegisterFailed] = useState(false);
  const router = useRouter();

  async function registerSubmitHandler({
    firstname,
    lastname,
    username: email,
    password,
  }: RequestUserSignupDto) {
    const signUpResponse: UserResponseJwt | null = await registerUser({
      firstname: firstname,
      lastname: lastname,
      username: email,
      password,
    });
    if (!signUpResponse) {
      setIsRegisterFailed(true);
      return;
    }

    setIsRegisterFailed(false);

    router.push(`/patient/${signUpResponse.userUuid}/email-confirmation`);
  }

  return (
    <div className="flex h-screen max-h-screen">
      {isRegisterFailed && (
        <AlertModal
          dialogTitle={"Registration Failed"}
          dialogContent={"Please try again later"}
        />
      )}
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496px]">
          <CareFusionLogoCard />
          <UserRegisterForm
            isRegister={true}
            submitRegister={registerSubmitHandler}
          />
          <div className="text-14-regular mt-20 flex justify-between">
            <p className="justify-items-end text-dark-600 xl:text-left">
              © 2024 CareFusion
            </p>
            <Link href="/public?admin=true" className="text-green-500">
              Admin
            </Link>
          </div>
        </div>
      </section>
      <Image
        src="/assets/images/onboarding-img.png"
        height={1000}
        width={1000}
        alt="patient"
        className="side-img max-w-[50%]"
      />
    </div>
  );
}
