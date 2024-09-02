import Image from "next/image";
import UserLoginForm from "@/components/forms/UserLoginForm";
import Link from "next/link";
import CareFusionLogoCard from "@/components/CareFusionLogoCard";

const UserLogin = ({ isPatient }: { isPatient: boolean }) => {
  const backgroundImage: string = isPatient
    ? "/assets/images/patient-login.png"
    : "/assets/images/onboarding-img.png";

  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496px]">
          <CareFusionLogoCard />
          <UserLoginForm isPatient={isPatient} />
          {isPatient && (
            <div className="mt-2 justify-items-end text-dark-600 xl:text-right">
              <Link href="/patient/register" className="text-green-500">
                Signup
              </Link>
            </div>
          )}
          <div className="text-14-regular mt-20 flex justify-between">
            <p className="justify-items-end text-dark-600 xl:text-left">
              © 2024 CareFusion
            </p>
          </div>
        </div>
      </section>
      <Image
        src={backgroundImage}
        height={1000}
        width={1000}
        alt="patient"
        className="side-img max-w-[50%]"
      />
    </div>
  );
};

export default UserLogin;
