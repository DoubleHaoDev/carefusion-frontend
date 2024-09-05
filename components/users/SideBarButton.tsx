"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { clearAccessToken } from "@/lib/actions/user.actions";

interface SideBarBtn {
  text: string;
  href: string;
  icon: string;
}

const SideBarButton = ({
  sideBarBtnType,
  userUuid,
}: {
  sideBarBtnType: SideBarButtonType;
  userUuid: string;
}) => {
  let sideBarBtnDetail: SideBarBtn;

  switch (sideBarBtnType) {
    case "View Appointments":
      sideBarBtnDetail = {
        text: "View Appointments",
        href: `/patient/${userUuid}/appointments`,
        icon: "/assets/icons/calendar-days.svg",
      };
      break;
    case "Book Appointment":
      sideBarBtnDetail = {
        text: "Book Appointment",
        href: `/patient/${userUuid}/new-appointment`,
        icon: "/assets/icons/calendar-plus.svg",
      };
      break;
    case "Logout":
      sideBarBtnDetail = {
        text: "Logout",
        href: "/patient/login",
        icon: "/assets/icons/log-out.svg",
      };
      break;
  }

  return (
    <Button
      variant="ghost"
      className="bg-gray-700 w-full m-1 justify-start hover:bg-gray-500"
      onClick={
        sideBarBtnType === "Logout"
          ? async () => {
              await clearAccessToken();
            }
          : () => {}
      }
    >
      <Image
        src={sideBarBtnDetail.icon}
        height={24}
        width={24}
        alt="calendar"
        className="mr-2 dark:invert"
      />
      <Link href={sideBarBtnDetail.href}>{sideBarBtnDetail.text}</Link>
    </Button>
  );
};

export default SideBarButton;
