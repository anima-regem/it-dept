import React from 'react'
import { cn } from '@/lib/utils'
import Image from 'next/image'

type BlogCardProps = {
    index: number
}

const BlogCard = ({ index }: BlogCardProps) => {
    return (
        <div className={cn(
            "w-full min-h-[200px] lg:min-h-[275px] bg-gray-300 overflow-hidden relative cursor-pointer group",
            index === 1 && "lg:h-[570px]"
        )}>
            <Image height={50} alt='image' width={50} src="/images/demo.avif"
                className={cn(
                    " h-[200px] lg:h-[275px] object-cover object-center w-full group-hover:scale-110 transition-transform duration-300",
                    index === 1 && "lg:h-[570px]"
                )} />

            <div className=' absolute w-full bottom-0 left-0 bg-gradient-to-t from-black px-7 pb-7 flex flex-col gap-1 lg:gap-3'>
                <h3 className=' text-white text-base lg:text-3xl'>
                    Lorem ipsum dolor sit amet
                </h3>
                <p className=' text-white text-[10px] lg:text-xl'>August 7, 2024</p>
            </div>
        </div>
    )
}

export default BlogCard