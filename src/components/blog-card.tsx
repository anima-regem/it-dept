import React from 'react'
import { cn } from '@/lib/utils'
import Image from 'next/image'

type BlogCardProps = {
    index: number;
    title: string;
    date: string;
    imageUrl: string;
    className?: string;
    onClick?: () => void;
}

const BlogCard = ({ 
    index, 
    title, 
    date, 
    imageUrl, 
    className,
    onClick 
}: BlogCardProps) => {
    // Format the date
    const formattedDate = new Date(date).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    });

    return (
        <div 
            onClick={onClick}
            className={cn(
                "w-full min-h-[200px] lg:min-h-[275px] bg-gray-300 overflow-hidden relative cursor-pointer group",
                index === 1 && "lg:h-[570px]",
                className
            )}
        >
            <Image 
                height={50} 
                width={50} 
                alt={title} 
                src={imageUrl}
                className={cn(
                    "h-[200px] lg:h-[275px] object-cover object-center w-full group-hover:scale-110 transition-transform duration-300",
                    index === 1 && "lg:h-[570px]"
                )} 
            />

            <div className="absolute w-full bottom-0 left-0 bg-gradient-to-t from-black px-7 pb-7 flex flex-col gap-1 lg:gap-3">
                <h3 className="text-white text-base lg:text-3xl line-clamp-2">
                    {title}
                </h3>
                <p className="text-white text-[10px] lg:text-xl">
                    {formattedDate}
                </p>
            </div>
        </div>
    )
}

export default BlogCard