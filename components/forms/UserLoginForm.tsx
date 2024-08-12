"use client"

import {zodResolver} from "@hookform/resolvers/zod"
import {useForm} from "react-hook-form"
import {z} from "zod";
import {Form} from "@/components/ui/form"
import CustomFormField from "@/components/CustomFormField";
import SubmitButton from "@/components/SubmitButton";
import {useState} from "react";
import {UserLoginFormValidation} from "@/lib/validation";
import {useRouter} from "next/navigation";
import {createUser} from "@/lib/actions/patient.actions";
import {FormFieldType} from "@/constants/FormFieldTypes";
import {loginUser, registerUser} from "@/lib/actions/user.actions";

const UserLoginForm = () => {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const form = useForm<z.infer<typeof UserLoginFormValidation>>({
        resolver: zodResolver(UserLoginFormValidation),
        defaultValues: {
            email: "",
            password: "",
        },
    })

    async function onSubmit({email, password}: z.infer<typeof UserLoginFormValidation>) {
        setIsLoading(true);
        const signUpResponse: boolean = await loginUser({username: email, password});
        console.log(signUpResponse);

        if (!signUpResponse) {
            console.log("Login failed")
            //Signup failed
            //Show failed modal
            setIsLoading(false);
            return;
        }
        setIsLoading(false);
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
                <section className="mb-12 space-y-4">
                    <h1 className="header">Hi There</h1>
                    <p className="text-dark-700">Schedule your first appointment.</p>
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
                <SubmitButton isLoading={isLoading}>Login</SubmitButton>
            </form>
        </Form>
    )
}

export default UserLoginForm;
