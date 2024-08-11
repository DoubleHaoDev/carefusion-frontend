"use client";

import Image from "next/image";
import Link from "next/link";
import PasskeyModal from "@/components/ui/PasskeyModal";
import UserRegisterForm from "@/components/forms/UserRegisterForm";
import AlertModal from "@/components/AlertModal";
import {useState} from "react";
import {UserRegisterFormValidation} from "@/lib/validation";
import {registerUser} from "@/lib/actions/user.actions";
import {z} from "zod";
import {useRouter} from "next/navigation";


export default function UserRegister({searchParams}: SearchParamProps) {
    const [isRegisterFailed, setIsRegisterFailed] = useState(false);
    const router = useRouter();

    async function registerSubmitHandler({username: email, password}: RequestUserDto) {

        const signUpResponse: Response = await registerUser({username: email, password});
        if (!signUpResponse) {
            console.log("Signup failed")
            //Signup failed
            //Show failed modal
            setIsRegisterFailed(true);
            return;
        }
        setIsRegisterFailed(false);
        console.log("Going to email-confirmation")
        router.push(`/users/email-confirmation`);
        //Redirect to email confirmation page
    }

    return (
        <div className="flex h-screen max-h-screen">
            {isRegisterFailed &&
                <AlertModal dialogTitle={"Registration Failed"} dialogContent={"Please try again later"}/>}
            <section className="remove-scrollbar container my-auto">
                <div className="sub-container max-w-[496px]">
                    <Image
                        src="/assets/icons/logo-full.svg"
                        height={1000}
                        width={1000}
                        alt="Patient"
                        className="mb-12 h-10 w-fit"
                    />
                    <UserRegisterForm isRegister={true} submitRegister={registerSubmitHandler}/>
                    <div className="text-14-regular mt-20 flex justify-between">
                        <p className="justify-items-end text-dark-600 xl:text-left">© 2024 CareFusion</p>
                        <Link href="/public?admin=true" className="text-green-500">Admin</Link>
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
