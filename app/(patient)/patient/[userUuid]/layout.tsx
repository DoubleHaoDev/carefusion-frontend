import UserSideBar from "@/components/users/UserSideBar";
import { ReactNode } from "react";

export default function PatientUserLayout({
  params,
  children,
}: Readonly<{
  params: { userUuid: string };
  children: ReactNode;
}>) {
  return (
    <div className="flex h-full">
      <UserSideBar userUuid={params.userUuid} />
      <div className="flex-1 h-full">{children}</div>
    </div>
  );
}
