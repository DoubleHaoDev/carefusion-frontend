import Image from "next/image";
import EmailConfirmationForm from "@/components/forms/EmailConfirmationForm";
import CareFusionLogoCard from "@/components/CareFusionLogoCard";

export default function EmailConfirmation() {
  return (
    <div className="flex h-full">
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[496px]">
          <CareFusionLogoCard />
          <EmailConfirmationForm isRegister={false} />
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
