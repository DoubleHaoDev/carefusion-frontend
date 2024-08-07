import Image from "next/image";
import PatientForm from "@/components/forms/PatientForm";
import Link from "next/link";
import PasskeyModal from "@/components/ui/PasskeyModal";
import RegisterForm from "@/components/forms/RegisterForm";


export default function UserRegister({searchParams}: SearchParamProps) {
    const isAdmin = searchParams.admin === "true";
    return (
        <div className="flex h-screen max-h-screen">
            {isAdmin && <PasskeyModal/>}
            <section className="remove-scrollbar container my-auto">
                <div className="sub-container max-w-[496px]">
                    <Image
                        src="/assets/icons/logo-full.svg"
                        height={1000}
                        width={1000}
                        alt="Patient"
                        className="mb-12 h-10 w-fit"
                    />
                    <RegisterForm isRegister = {true} />
                    <div className="text-14-regular mt-20 flex justify-between">
                        <p className="justify-items-end text-dark-600 xl:text-left">© 2024 CarePulse</p>
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
