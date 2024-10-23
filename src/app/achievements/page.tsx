import AchivementCard from '@/components/achivement-card'
import React from 'react'

const page = () => {
  return (
    <div>
      <div className="px-7 py-28 lg:px-36">
        <h2 className=" text-[40px] text-[#00385E]">
          Lorem ipsum dolor sit amet, consectetur adipiscing
        </h2>
        <div className=" w-36 lg:w-44 h-1 bg-[#1B80C4] mt-2" />

        <div className=" mt-12">
          <p className=" text-black text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <br />
          <p className=" text-black text-xl">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>



      <div className="px-7 pb-28 lg:px-36 grid grid-cols-2 gap-5 lg:grid-cols-4">
        <AchivementCard />
        <AchivementCard />
        <AchivementCard />
        <AchivementCard />
        <AchivementCard />
        <AchivementCard />
      </div>



    </div>
  )
}

export default page