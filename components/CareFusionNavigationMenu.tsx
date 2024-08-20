import Image from "next/image";
import Link from "next/link";
import React from "react";
import {UserNavDropDown} from "@/components/users/UserNavDropDown";
import {AppUserType} from "@/constants/AppUserTypes";

export function CareFusionNavigationMenu({appUserType}: {appUserType: AppUserType}) {

    let navBarColor : string = "dark:bg-slate-900";
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

    return (
        <div className={`bg-primary ${navBarColor} text-green-500 py-2 px-5 flex justify-between`}>
            <Link href={"/"}>
                <Image
                    src="/assets/icons/logo-full.svg"
                    height={1000}
                    width={1000}
                    alt="Patient"
                    className="w-fit"
                />
            </Link>
            {appUserType != AppUserType.NONE && <UserNavDropDown/>}
        </div>

    )
}
