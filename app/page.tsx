import Image from "next/image";
import UserLoginForm from "@/components/forms/UserLoginForm";
import Link from "next/link";
import PasskeyModal from "@/components/ui/PasskeyModal";
import {Button} from "@/components/ui/button";


export default function Home({searchParams}: SearchParamProps) {
    const isAdmin = searchParams.admin === "true";
    return (
        <div className="h-screen max-h-screen  content-center">
            <div className="flex justify-center m-2">
                <h1>
                    Welcome to CareFusion <br/>
                </h1>
            </div>

            <div className="flex justify-center flex-row">
                <div>
                    <Button className="shad-primary-btn m-3">
                        <Link href="/patients/login">Patient Login</Link>
                    </Button>
                </div>
                <div>
                    <Button className="shad-provider-primary-btn m-3">
                        <Link href="/provider/login">Provider Login</Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}
