"use client";

import {Geist, Geist_Mono} from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar/Navbar";
import {usePathname} from "next/navigation";

const disableNavbar = ["/login", "/register", "forgot-password"];

export default function RootLayout({
 children,
}: Readonly<{
 children: React.ReactNode;
}>) {
 const pathname = usePathname();
 return (
  <html lang="en">
   <body>
    {!disableNavbar.includes(pathname) && <Navbar />}
    {children}
   </body>
  </html>
 );
}
