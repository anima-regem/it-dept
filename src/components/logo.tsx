import React from 'react'
import Image from 'next/image'

const Logo = () => {
    return (
        <div className=' h-fit flex gap-4 lg:gap-8 items-center'>
            <Image src="/icons/it.png" width={90} height={100} alt='it-logo' className=' object-contain w-12 lg:w-24' />
            <div className=' w-[3px] h-12 lg:h-24 bg-white' />
            <p className='text-white text-base font-medium lg:text-3xl'>
                Department of <br />
                Information Technology
            </p>
        </div>
    )
}

export default Logo