import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "../../globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "next-themes";
import { CareFusionNavigationMenu } from "@/components/CareFusionNavigationMenu";
import { AppUserType } from "@/constants/AppUserTypes";
import React from "react";

const fontSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "CareFusion Admin",
  description: "A Healthcare Management System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-dark-300 font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <CareFusionNavigationMenu appUserType={AppUserType.ADMIN} />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
