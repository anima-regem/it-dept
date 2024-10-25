import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Red_Hat_Display } from 'next/font/google'
import Footer from "@/components/footer";
import { Menu } from "lucide-react";
import Logo from "@/components/logo";
import NavLinks from "@/components/nav-links";


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const redHatDisplay = Red_Hat_Display({
  subsets: ["latin"],
  variable: "--font-red-hat",
  weight: ["300", "400", "500", "600", "700", "800", "900"]
})

export const metadata: Metadata = {
  title: "Department of Information Technology",
  description: "The department of Information Technology offering B.Tech in Information Technology . Later the programme has been affiliated to APJ Abdul Kalam Technological University since its inception from 2015 onwards.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${redHatDisplay.variable} antialiased`}
      >
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

          <NavLinks />
          {children}
          <Footer />
        </div>

      </body>
    </html>
  );
}
