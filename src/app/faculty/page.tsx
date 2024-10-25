import AchivementCard from "@/components/achivement-card";
import React from "react";
import { faculties } from "@/data/faculty";

const page = () => {
  return (
    <div>
      {/* <div className="px-7 py-28 lg:px-36">
        <h2 className="text-4xl lg:text-[40px] text-[#00385E]">
          Lorem ipsum dolor sit amet, consectetur adipiscing
        </h2>
        <div className=" w-36 lg:w-44 h-1 bg-[#1B80C4] mt-2" />

        <div className=" mt-12">
          <p className=" text-black text-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <br />
          <p className=" text-black text-xl">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident, sunt in culpa qui officia deserunt mollit
            anim id est laborum.
          </p>
        </div>
      </div> */}

      <div className="mt-9 px-7 pb-28 lg:px-36 flex flex-col lg:gap-36 gap-24">
        {faculties.map((faculty, index) => (
          <div key={index}>
            <h2 className="text-4xl lg:text-[40px] text-[#00385E]">
              {faculty.title}
            </h2>
            <div className=" w-36 lg:w-44 h-1 bg-[#1B80C4] mt-2" />

            <div className=" mt-24 flex flex-row flex-wrap gap-5">
              {faculty.faculties.map((f, index) => (
                <AchivementCard email={f.email} image={f.image} name={f.name} key={index}/>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
