'use client'

import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Events", href: "/events" },
    { name: "Gallery", href: "/gallery" },
    { name: "Faculty", href: "/faculty" },
];

const moreLinks = [
    // { name: "Events", href: "/events" },
    { name: "Avishkar", href: "/avishkar " },
    { name: "Contact", href: "/contact" },
    { name: "Placement", href: "/placement" },
];

const NavLinks = () => {
    const pathname = usePathname();
    const [showDropdown, setShowDropdown] = useState(false);

    return (
        <div className="hidden w-full lg:flex">
            {navLinks.map((link, index) => (
                <Link
                    key={index}
                    className={cn(
                        "bg-[#00385E] flex-1 py-5 text-center uppercase text-white text-2xl",
                        pathname === link.href && "bg-[#1B80C4]"
                    )}
                    href={link.href}
                >
                    {link.name}
                </Link>
            ))}

            {/* "More" button with dropdown */}
            <div
                className="relative bg-[#00385E] flex-1 py-5 text-center uppercase text-white text-2xl cursor-pointer"
                onMouseEnter={() => setShowDropdown(true)}
                onMouseLeave={() => setShowDropdown(false)}
            >
                More
                {showDropdown && (
                    <div className="absolute top-full left-0 w-full bg-[#1B80C4] text-white text-xl">
                        {moreLinks.map((link, index) => (
                            <Link
                                key={index}
                                className="block py-3 text-center hover:bg-[#005c89]"
                                href={link.href}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default NavLinks;
