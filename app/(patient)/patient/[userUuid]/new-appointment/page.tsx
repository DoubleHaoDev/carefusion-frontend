import Image from "next/image";
import AppointmentForm from "@/components/forms/AppointmentForm";
import { getPatient } from "@/lib/actions/patient.actions";
import CareFusionLogoCard from "@/components/CareFusionLogoCard";

export default async function NewAppointment({
  params: { userUuid },
}: Readonly<SearchParamProps>) {
  const patient = await getPatient(userUuid);
  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[860px] flex-1 justify-between">
          <CareFusionLogoCard />
          <AppointmentForm
            type="create"
            userId={userUuid}
            patientId={patient.$id}
            setOpen={() => {}}
          />
          <p className="copyright mt-10 py-12">© 2024 CareFusion</p>
        </div>
      </section>
      <Image
        src="/assets/images/appointment-img.png"
        height={1000}
        width={1000}
        alt="appointment"
        className="side-img max-w-[390px] bg-bottom"
      />
    </div>
  );
}
