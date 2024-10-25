import Image from 'next/image'
import React from 'react'

type AchivementCardProps = {
    image:string,
    name:string,
    email:string
}

const AchivementCard = ({ email, image, name }:AchivementCardProps) => {
    return (
        <div className=' w-44 h-60 lg:w-[350px] lg:h-[450px] bg-gray-300 relative'>

            <Image src={image} width={100} height={240} alt='achivement' className=' w-full h-full object-cover' />

            <div className=' absolute bottom-0 lg:w-full bg-gradient-to-t from-black px-5 pb-5 gap-2'>
                <h3 className=' text-base font-normal text-white lg:text-3xl'>
                    {name}
                </h3>
                <p className=' text-white text-[10px] lg:text-xl'>{email}</p>
            </div>
        </div>
    )
}

export default AchivementCard