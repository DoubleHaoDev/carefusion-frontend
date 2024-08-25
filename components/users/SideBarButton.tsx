import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export enum SideBarButtonType {
  APPOINTMENTS = "View Appointments",
  BOOK_APPOINTMENT = "Book Appointment",
  LOGOUT = "Logout",
}
interface SideBarBtn {
  text: string;
  href: string;
  icon: string;
}

const SideBarButton = ({
  sideBarBtnType,
}: {
  sideBarBtnType: SideBarButtonType;
}) => {
  let sideBarBtnDetail: SideBarBtn;
  switch (sideBarBtnType) {
    case SideBarButtonType.APPOINTMENTS:
      sideBarBtnDetail = {
        text: "View Appointments",
        href: "/patients/login",
        icon: "/assets/icons/calendar-days.svg",
      };
      break;
    case SideBarButtonType.BOOK_APPOINTMENT:
      sideBarBtnDetail = {
        text: "Book Appointment",
        href: "/patients/login",
        icon: "/assets/icons/calendar-plus.svg",
      };
      break;
    case SideBarButtonType.LOGOUT:
      sideBarBtnDetail = {
        text: "Logout",
        href: "/patients/login",
        icon: "/assets/icons/log-out.svg",
      };
      break;
  }

  return (
    <Button
      variant="ghost"
      className="bg-gray-700 w-full m-1 justify-start hover:bg-gray-500"
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
