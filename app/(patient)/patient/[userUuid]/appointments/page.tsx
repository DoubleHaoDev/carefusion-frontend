"use client";
import React from "react";
import { useSession } from "next-auth/react";

const AppointmentsPage = () => {
  const session = useSession();
  return (
    <div>
      <h1>{session.data?.user.userUuid}</h1>
      <h1>Appointments Page</h1>
    </div>
  );
};

export default AppointmentsPage;
