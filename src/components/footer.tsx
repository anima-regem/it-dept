import React from 'react'
import Logo from './logo'

const Footer = () => {
    return (
        <div className='w-full bg-[#00385E] pt-24 pb-10 px-7 lg:px-36 lg:flex'>

            <div className=' flex-1'>
                <Logo isFooter={true} />
                <p className='text-lg lg:text-3xl lg:font-medium text-white mt-5 lg:mt-10'>
                    Government Engineering College, <br />
                    Sreekrishnapuram, Palakkad
                </p>
            </div>
            <div className=' mt-36 lg:mt-0 flex flex-col justify-end flex-1'>
                <p className=' text-white font-medium text-xl'>Links</p>
                <div className=' w-full h-[2px] bg-white my-3'/>
                <p className=' text-white font-medium text-xl mt-1'>Library</p>
                <p className=' text-white font-medium text-xl mt-1'>Achievements</p>
                <p className=' text-white font-medium text-xl mt-1'>Gallery</p>
                <p className=' text-white font-medium text-xl mt-1'>Faculty</p>
            </div>

            <div className=' w-full h-[2px] bg-white my-3 mt-32 lg:hidden'/>

        </div>
    )
}

export default Footer