import Image from 'next/image'
import React from 'react'

const AchivementCard = () => {
    return (
        <div className=' w-44 h-60 lg:w-[350px] lg:h-[450px] bg-gray-300 relative'>

            <Image src="/images/demo.avif" width={100} height={240} alt='achivement' className=' w-full h-full' />

            <div className=' absolute bottom-0 lg:w-full bg-gradient-to-t from-black px-5 pb-5 gap-2'>
                <h3 className=' text-base font-normal text-white lg:text-3xl'>
                    Lorem ipsum dolor sit amet
                </h3>
                <p className=' text-white text-[10px] lg:text-xl'>August 7, 2024</p>
            </div>
        </div>
    )
}

export default AchivementCard