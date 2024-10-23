'use client'

import Logo from "@/components/logo";
import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import Image from "next/image";
import BlogCard from "@/components/blog-card";
import CalenderCard from "@/components/calender-card";
import Footer from "@/components/footer";

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


      <div className="px-7 py-28 lg:px-36">
        <h2 className=" text-[40px] text-[#00385E]">
          Lorem ipsum dolor sit amet, consectetur adipiscing
        </h2>
        <div className=" w-36 lg:w-44 h-1 bg-[#1B80C4] mt-2" />

        <div className=" mt-12">
          <p className=" text-black text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <br />
          <p className=" text-black text-xl">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <Image src="/images/demo.avif" width={100} height={167} className=" w-full h-40 object-cover mt-12 lg:h-[470px]" alt="image" />
      </div>

      <div className="px-7 pb-28 lg:px-36">
        <div className="h-fit flex items-center justify-between">
          <div>
            <h2 className=" text-[36px] text-[#00385E]">
              Blog
            </h2>
            <div className=" w-[80px] h-1 bg-[#1B80C4] mt-2" />
          </div>
          <Link href="/" className="text-lg lg:text-3xl underline text-[#1B80C4]">
            View More
          </Link>
        </div>

        <div className=" w-full grid lg:grid-rows-2 gap-4 lg:grid-cols-2 mt-12 lg:mt-24">
          <div className=" lg:row-span-2">
            <BlogCard index={1} />
          </div>
          <div>
            <BlogCard index={2} />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <BlogCard index={3} />
            <BlogCard index={4} />
          </div>
        </div>
      </div>


      <div className="px-7 pb-28 lg:px-36">
        <div className="h-fit flex items-center justify-between">
          <div>
            <h2 className=" text-[36px] text-[#00385E]">
            College calendar
            </h2>
            <div className=" w-[80px] h-1 bg-[#1B80C4] mt-2" />
          </div>
          <Link href="/" className="text-lg lg:text-3xl underline text-[#1B80C4]">
            View More
          </Link>
        </div>

        <div className="mt-20 lg:mt-24">
          <CalenderCard/>
          <CalenderCard/>
          <CalenderCard/>
          <CalenderCard/>
        </div>
      </div>


      <div className="px-7 pb-28 lg:px-36">
        <Image src="/images/demo.avif" width={100} height={167} className=" w-full h-40 object-cover mt-12 lg:h-[470px]" alt="image" />
      </div>

      <Footer/>

    </div>
  );
}
