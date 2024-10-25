"use client";

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
  return (
    <div>
      <div className="px-7 py-28 lg:px-36">
        <h2 className="text-[40px] text-[#00385E]">About the Department</h2>
        <div className="w-36 lg:w-44 h-1 bg-[#1B80C4] mt-2" />

        <div className="mt-12">
          <p className="text-black text-xl">
            The department of Information Technology offering B.Tech in
            Information Technology . Later the programme has been affiliated to
            APJ Abdul Kalam Technological University since its inception from
            2015 onwards.
          </p>
        </div>

        <div className="mt-12 overflow-x-auto">
          <table className="w-full border-collapse bg-white shadow-sm rounded-lg">
            <thead>
              <tr className="bg-[#00385E] text-white">
                <th className="p-4 text-left border">Course Offered</th>
                <th className="p-4 text-left border">Year of starting</th>
                <th className="p-4 text-left border">Approved Intake</th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-50">
                <td className="p-4 border">B.Tech Information Technology</td>
                <td className="p-4 border">1999</td>
                <td className="p-4 border">63 + 6 LET</td>
              </tr>
              <tr className="hover:bg-gray-50">
                <td className="p-4 border">M.Tech Artificial Intelligence and Data Science (AIDS)</td>
                <td className="p-4 border">2024</td>
                <td className="p-4 border">18</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="p-6 border-2 border-[#1B80C4] rounded-lg">
            <h2 className="text-[25px] text-[#00385E]">Vision</h2>
            <div className="w-24 lg:w-28 h-1 bg-[#1B80C4] mt-2" />

            <div className="mt-6">
              <p className="text-black text-xl">
                "To achieve excellent standards in IT education and research by
                keeping abreast of innovations in Information Technology."
              </p>
            </div>
          </div>

          <div className="p-6 border-2 border-[#1B80C4] rounded-lg">
            <h2 className="text-[25px] text-[#00385E]">Mission</h2>
            <div className="w-24 lg:w-28 h-1 bg-[#1B80C4] mt-2" />

            <div className="mt-6">
              <p className="text-black text-xl">
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    To nurture and develop students as competent IT professionals
                    capable of undertaking challenging and innovative programmes.
                  </li>
                  <li>
                    To foster self disciplined and socially committed
                    entrepreneurs.
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div>

        <Image
          src="/images/demo.avif"
          width={100}
          height={167}
          className="w-full h-40 object-cover mt-12 lg:h-[470px]"
          alt="image"
        />
      </div>
{/* 
      <div className="px-7 pb-28 lg:px-36">
        <div className="h-fit flex items-center justify-between">
          <div>
            <h2 className="text-[36px] text-[#00385E]">Blog</h2>
            <div className="w-[80px] h-1 bg-[#1B80C4] mt-2" />
          </div>
          <Link
            href="/"
            className="text-lg lg:text-3xl underline text-[#1B80C4]"
          >
            View More
          </Link>
        </div>

        <div className="w-full grid lg:grid-rows-2 gap-4 lg:grid-cols-2 mt-12 lg:mt-24">
          <div className="lg:row-span-2">
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
      </div> */}

      <div className="px-7 pb-28 lg:px-36">
        <div className="h-fit flex items-center justify-between">
          <div>
            <h2 className="text-[36px] text-[#00385E]">College calendar</h2>
            <div className="w-[80px] h-1 bg-[#1B80C4] mt-2" />
          </div>
          <Link
            href="/"
            className="text-lg lg:text-3xl underline text-[#1B80C4]"
          >
            View More
          </Link>
        </div>

        <div className="mt-20 lg:mt-24">
          <CalenderCard />
          <CalenderCard />
          <CalenderCard />
          <CalenderCard />
        </div>
      </div>

      <div className="px-7 pb-28 lg:px-36">
        <Image
          src="/images/demo.avif"
          width={100}
          height={167}
          className="w-full h-40 object-cover mt-12 lg:h-[470px]"
          alt="image"
        />
      </div>
    </div>
  );
}