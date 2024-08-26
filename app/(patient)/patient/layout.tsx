import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "../../globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "next-themes";
import { CareFusionNavigationMenu } from "@/components/CareFusionNavigationMenu";
import { AppUserType } from "@/constants/AppUserTypes";
import { ReactNode } from "react";

const fontSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "CareFusion Patient",
  description: "A Healthcare Appointment Booking System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn("bg-dark-300 font-sans antialiased", fontSans.variable)}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <CareFusionNavigationMenu appUserType={AppUserType.PATIENT} />
          <div className="flex-1 h-[calc(100vh-56px)]">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  );
}
