import Image from "next/image";
import RegisterFrom from "@/components/forms/RegisterFrom";
import { getUser } from "@/lib/actions/patient.actions";
import CareFusionLogoCard from "@/components/CareFusionLogoCard";

const Register = async ({ params: { userId } }: SearchParamProps) => {
  const user = await getUser(userId);

  return (
    <div className="flex h-screen max-h-screen">
      {/*TODO: OPT verification here*/}
      <section className="remove-scrollbar container">
        <div className="sub-container max-w-[860] flex-1 flex-col py-10">
          <CareFusionLogoCard />
          <RegisterFrom user={user} />
          <p className="copyright py-12">© 2024 CareFusion</p>
        </div>
      </section>
      <Image
        src="/assets/images/register-img.png"
        height={1000}
        width={1000}
        alt="patient"
        className="side-img max-w-[390px]"
      />
    </div>
  );
};

export default Register;
