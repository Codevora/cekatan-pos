"use client";
import FlyoutLink from "./FlyoutLink";
import PricingContent from "./(PricingContent)/service";
import Link from "next/link";
import Consultation from "./(PricingContent)/consultation";
import Service from "./(PricingContent)/service";
import Other from "./(PricingContent)/other";
const Navbar = () => {
 return (
  <header className="flex p-6 justify-between bg-gradient-to-r from-yellow-800 to-yellow-400  text-white px-56">
   <ul>
    <Link href="/">
     <img
      src="/logo.png"
      alt=""
      className="w-20"
     />
    </Link>
   </ul>
   <ul className="flex space-x-10 hover:cursor-pointer ">
    <FlyoutLink FlyoutContent={Service}>Layanan</FlyoutLink>
    <Link href="/">Harga</Link>
    <Link href="/">Tentang Kami</Link>
    <FlyoutLink FlyoutContent={Consultation}>Konsultasi Bisnis</FlyoutLink>
    <FlyoutLink FlyoutContent={Other}>Lainnya</FlyoutLink>
   </ul>
   <ul>
    <Link href="/login">
     <li>Sign-in</li>
    </Link>
   </ul>
  </header>
 );
};

export default Navbar;
