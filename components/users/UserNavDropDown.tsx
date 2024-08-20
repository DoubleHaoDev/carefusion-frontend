import {
    DropdownMenu,
    DropdownMenuContent, DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {AppUserType} from "@/constants/AppUserTypes";


export const UserNavDropDown = () => {
    return (<DropdownMenu>
        <DropdownMenuTrigger className="focus:outline-none outline-none">
            <Avatar>
                <AvatarImage src="https://github.com/shadcn.png"/>
                <AvatarFallback className="text-green-500">CN</AvatarFallback>
            </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-primary dark:bg-stone-900 text-white border-black border-2">
            <DropdownMenuLabel>
                <h2>Andy Chang</h2>
                <br/><h2>a12345678@gmail.com</h2>
            </DropdownMenuLabel>
            <DropdownMenuSeparator/>
            <DropdownMenuItem>
                <Image
                    src="/assets/icons/circle-user-round.svg"
                    height={10}
                    width={10}
                    alt="Logout"
                    className="size-6 w-fit pr-2 color dark:invert"
                />
                <Link href="/users/profile">Profile</Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
                <Image
                    src="/assets/icons/log-out.svg"
                    height={10}
                    width={10}
                    alt="Logout"
                    className="size-6 w-fit pr-2 dark:invert"
                />
                Logout
            </DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>)
}
