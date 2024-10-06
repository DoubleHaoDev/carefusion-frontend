import Image from "next/image";
import Link from "next/link";
import { UserNavDropDown } from "@/components/users/UserNavDropDown";
import { AppUserType } from "@/constants/AppUserTypes";
import { auth } from "@/auth";

export async function CareFusionNavigationMenu({
  appUserType,
}: {
  appUserType: AppUserType;
}) {
  let navBarColor: string = "dark:bg-slate-900";
  switch (appUserType) {
    case AppUserType.NONE:
    case AppUserType.PATIENT:
      navBarColor = "dark:bg-teal-600";
      break;
    case AppUserType.ADMIN:
      navBarColor = "dark:bg-amber-900";
      break;
    case AppUserType.PROVIDER:
      navBarColor = "dark:bg-slate-900";
      break;
  }
  // const session = useSession();
  const session = await auth();
  return (
    <div
      className={`bg-primary ${navBarColor} text-green-500 py-2 px-5 flex justify-between`}
    >
      <Link href={"/"} className="flex flex-row">
        <Image
          src="/assets/icons/logo-icon.svg"
          height={1000}
          width={1000}
          alt="Patient"
          className="w-fit flex-1"
        />
        &nbsp;
        <h1 className="flex-1 text-white font-bold text-2xl pt-0.5">
          CareFusion
        </h1>
      </Link>
      {session?.user && appUserType != AppUserType.NONE && <UserNavDropDown />}
    </div>
  );
}
