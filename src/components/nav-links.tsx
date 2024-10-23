'use client'

import { usePathname } from 'next/navigation';
import React from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils';

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Achievements", href: "/achievements" },
    { name: "Gallery", href: "/gallery" },
    { name: "Faculty", href: "/faculty" },
    { name: "Login", href: "/login" },
]


const NavLinks = () => {
    const pathname = usePathname();
    return (
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
    )
}

export default NavLinks