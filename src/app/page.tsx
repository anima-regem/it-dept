'use client'

import Logo from "@/components/logo";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function Home() {

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Achievements", href: "/achievements" },
    { name: "Gallery", href: "/gallery" },
    { name: "Faculty", href: "/faculty" },
    { name: "Login", href: "/login" },
  ]

  const pathname = usePathname();

  return (

    <div>
      <div className="bg-[url('/images/hero.png')] w-full h-screen bg-cover bg-center py-7 lg:py-[50px] flex flex-col justify-between">

        <nav className="w-full flex justify-around">
          <button className="lg:hidden">
            <Menu color="#fff" size={30} />
          </button>
          <Logo />
          <div className="lg:hidden" />
        </nav>

        <div className=" px-7 lg:px-44">
          <p className=" text-white font-normal text-2xl lg:text-3xl">Welcome to</p>
          <h2 className=" text-white font-medium text-[40px] lg:text-[52px]">
            Department of <br />
            Information Technology
          </h2>
          <div className=" w-36 lg:w-44 h-1 bg-[#1B80C4] mt-2" />
        </div>
        <div />
      </div>

      <div className="hidden w-full lg:flex">
        {navLinks.map((link, index) => {
          return (
            <Link className={cn(
              "bg-[#00385E] flex-1 py-5 text-center uppercase text-white text-2xl",
              pathname === link.href && "bg-[#1B80C4]"
            )} href={link.href}>
              {link.name}
            </Link>
          )
        })}
      </div>

    </div>
  );
}
