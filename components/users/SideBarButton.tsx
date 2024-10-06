"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";
import { SideBarButtonType } from "@/types";

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
  const router = useRouter();
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
        href: `/patient/${userUuid}/book-appointment`,
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
    case "Dashboard":
      sideBarBtnDetail = {
        text: "Dashboard",
        href: `/patient/${userUuid}`,
        icon: "/assets/icons/layout-dashboard.svg",
      };
      break;
  }
  function handleOnClick() {
    if (sideBarBtnType === "Logout") {
      signOut();
    } else {
      router.push(sideBarBtnDetail.href);
    }
  }

  return (
    <Button
      variant="ghost"
      className="bg-gray-700 w-full m-1 justify-start hover:bg-gray-500"
      onClick={handleOnClick}
    >
      <Image
        src={sideBarBtnDetail.icon}
        height={24}
        width={24}
        alt="calendar"
        className="mr-2 dark:invert"
      />
      <p>{sideBarBtnDetail.text}</p>
    </Button>
  );
};

export default SideBarButton;
