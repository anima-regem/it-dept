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
  const blogPosts = [
    {
      id: 1,
      title: "Department Magazine 2021",
      date: "2021-12-31",
      imageUrl: "/images/0.png",
    },
    {
      id: 2,
      title: "Web Development Trends in 2024",
      date: "2024-08-05",
      imageUrl: "/images/blog2.jpg",
    },
    // ... more posts
  ];

  const events = [
    {
      day: "25",
      month: "October",
      weekday: "Friday",
      eventName: "Aavishkar Inaguration",
      location: "Seminar Hall",
      time: "10:00 AM",
    },
    {
      day: "25",
      month: "October",
      weekday: "Friday",
      eventName: "21 ways to stay alive in Crypto",
      location: "-",
      time: "11:00 AM",
    },
    {
      day: "25",
      month: "October",
      weekday: "Friday",
      eventName: "Web3 Workshop",
      location: "-",
      time: "02:00 PM",
    },

    {
      day: "25",
      month: "October",
      weekday: "Friday",
      eventName: "Typathon",
      location: "IT211",
      time: "02:30 PM",
    },
    {
      day: "25",
      month: "October",
      weekday: "Friday",
      eventName: "Figma faceoff",
      location: "IT213",
      time: "02:30 PM",
    },
    {
      day: "25",
      month: "October",
      weekday: "Friday",
      eventName: "Best or Bust",
      location: "IT234",
      time: "02:30 PM",
    },
  ];

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
                <td className="p-4 border">
                  M.Tech Artificial Intelligence and Data Science (AIDS)
                </td>
                <td className="p-4 border">2024</td>
                <td className="p-4 border">18</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-16 mb-16">
          <h2 className="text-[32px] text-[#00385E]">HOD's Message</h2>
          <div className="w-32 h-1 bg-[#1B80C4] mt-2 mb-8" />

          <div className="flex flex-col lg:flex-row gap-8 items-start">
            <div className="w-full lg:w-[300px] flex flex-col items-center">
              <div className="w-[200px] h-[200px] lg:w-[280px] lg:h-[280px] relative overflow-hidden rounded-lg border-4 border-[#1B80C4]">
                <Image
                  src="https://gecskp.ac.in/images/safeerbabu.jpg" // You'll need to add the HOD's photo
                  fill
                  className="object-cover"
                  alt="HOD"
                />
              </div>
              <div className="text-center mt-4">
                <h3 className="text-xl lg:text-2xl font-semibold text-[#00385E]">Dr. Safeer Babu T</h3>
                <p className="text-lg text-gray-600">Head of Department</p>
                <p className="text-lg text-gray-600">Information Technology</p>
              </div>
            </div>

            <div className="flex-1">
              <div className="bg-gray-50 p-6 lg:p-8 rounded-lg border-l-4 border-[#1B80C4]">
                <p className="text-lg lg:text-xl leading-relaxed text-gray-800">
                  "It gives me immense pleasure to lead the Department of Information Technology at Government Engineering College, Sreekrishnapuram. Our department strives for excellence in education and research while fostering innovation and entrepreneurship among our students.
                  <br/><br/>
                  We are committed to providing quality technical education and producing competent professionals who can meet the evolving needs of the industry. Our curriculum is regularly updated to incorporate the latest technological advancements, and our faculty members are dedicated to nurturing the talents of our students.
                  <br/><br/>
                  The department maintains strong industry connections and promotes research activities, ensuring our students are well-prepared for their professional careers. We encourage our students to participate in various technical events, workshops, and internships to enhance their practical knowledge and skills.
                  <br/><br/>
                  I welcome you to explore the opportunities our department offers and join us in our journey towards academic excellence and technological innovation."
                </p>
              </div>
            </div>
          </div>
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
                    To nurture and develop students as competent IT
                    professionals capable of undertaking challenging and
                    innovative programmes.
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

        {/* <Image
          src="/images/demo.avif"
          width={100}
          height={167}
          className="w-full h-40 object-cover mt-12 lg:h-[470px]"
          alt="image"
        /> */}
      </div>

      <div className="px-7 pb-28 lg:px-36">
        <div className="h-fit flex items-center justify-between">
          <div>
            <h2 className="text-[36px] text-[#00385E]">
              Magazine & Newsletter
            </h2>
            <div className="w-[80px] h-1 bg-[#1B80C4] mt-2" />
          </div>
          <Link
            href="/"
            className="text-lg lg:text-3xl underline text-[#1B80C4]"
          >
            View More
          </Link>
        </div>

        <div className="w-full grid lg:grid-rows-1 gap-4 lg:grid-cols-2 mt-12 lg:mt-24">
          {
            // Add two newsletter cards
            // https://gecskp.ac.in/pdf/it/newsletter/NEWSLETTER_IT_Jan%20-%20Jun%202021.pdf
          }
          <BlogCard
            index={1}
            title="Department Magazine 2021"
            date="2021-12-31"
            imageUrl="/images/0.png"
            onClick={() => {
              // Open the magazine
              window.open(
                "https://drive.google.com/file/d/1pTirwBurNrElNbVxgvnxHiXOOaSxXWoV/view?usp=sharing"
              );
            }}
          />
          {
            // Add the second newsletter card
            // https://gecskp.ac.in/pdf/it/newsletter/NEWSLETTER_IT_Jan%20-%20Jun%2021.pdf
          }
          <div className="w-full h-96 bg-gray-300 flex gap-2 flex-col" >

          <BlogCard
            index={2}
            title="Department Newsletter Jan-Jun 2021"
            date="2021-06-30"
            imageUrl="/images/1.png"
            onClick={() => {
              // Open the newsletter
              window.open(
                "https://gecskp.ac.in/pdf/it/newsletter/NEWSLETTER_IT_Jan%20-%20Jun%202021.pdf"
              );
            }}
          />
          <BlogCard
            index={2}
            title="Department Newsletter July-Dec 2021"
            date="2021-12-30"
            imageUrl="/images/1.png"
            onClick={() => {
              // Open the newsletter
              window.open(
                "https://gecskp.ac.in/pdf/it/newsletter/NEWSLETTER_IT_July%20-%20Dec%202021.pdf"
              );
            }}
          />
          </div>
        </div>
      </div>

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
          {events.map((event, index) => (
            <CalenderCard key={index} {...event} />
          ))}
        </div>
      </div>

      <div className="px-7 pb-28 lg:px-36">
        {/* <Image
          src="/images/demo.avif"
          width={100}
          height={167}
          className="w-full h-40 object-cover mt-12 lg:h-[470px]"
          alt="image"
        /> */}
      </div>
    </div>
  );
}
