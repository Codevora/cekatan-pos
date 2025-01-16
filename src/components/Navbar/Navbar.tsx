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
      className="w-20 mt-1"
     />
    </Link>
   </ul>
   <ul className="flex space-x-10 hover:cursor-pointer ">
    <FlyoutLink FlyoutContent={Service}>Layanan</FlyoutLink>
    <Link href="/">Harga</Link>
    <Link href="/">Tentang Kami</Link>
    <FlyoutLink FlyoutContent={Consultation}>Konsultasi</FlyoutLink>
    <FlyoutLink FlyoutContent={Other}>Lainnya</FlyoutLink>
   </ul>
   <button className="rounded-lg px-3 py-1 bg-white ">
    <Link
     href="/login"
     className="bg-gradient-to-r from-yellow-400 to-yellow-800 bg-clip-text text-transparent">
     Masuk
    </Link>
   </button>
  </header>
 );
};

export default Navbar;
