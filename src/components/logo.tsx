import React from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

type LogoProps = {
    isFooter?:boolean
}

const Logo = ({ isFooter }:LogoProps) => {
    return (
        <div className={cn(
            "h-fit flex gap-4 lg:gap-8 items-center",
            isFooter && "flex-col items-start lg:flex-row lg:items-center"
        )}>
            <Image src="/icons/it.png" width={90} height={100} alt='it-logo' className=' object-contain w-12 lg:w-24' />
            <div className={cn(
                "w-[3px] h-12 lg:h-24 bg-white",
                isFooter && "w-12 h-[3px] lg:w-[3px] lg:h-24"
            )} />
            <p className={cn(
                "text-white text-base font-medium lg:text-3xl",
                isFooter && "text-3xl font-normal"
            )}>
                Department of <br />
                Information Technology
            </p>
        </div>
    )
}

export default Logo