import CalenderCard from '@/components/calender-card'
import React from 'react'

const page = () => {
    return (
        <div>
            <div className="px-7 py-28 lg:px-36">
                <h2 className=" text-[40px] text-[#00385E]">
                    Avishkar
                </h2>
                <div className=" w-36 lg:w-44 h-1 bg-[#1B80C4] mt-2" />

                <div className=" mt-12">
                    <p className=" text-black text-xl">
                        Avishkar 4.0 was the fourth edition of the Information Technology department fest at Government Engineering College Palakkad. It was a one-day event organized by the students of the department, filled with innovative and creative ideas put forward by young minds. The event created a vibrant platform where students could showcase their projects, applying the knowledge and skills they had gained in the classroom to real-world challenges.
                    </p>
                    <br />
                    <p className=" text-black text-xl">
                        The main objective of the event was to foster collaboration and teamwork among students. By working together on various projects, participants not only honed their technical abilities but also developed valuable interpersonal and leadership skills. Avishkar 4.0 served as a testament to the students’ dedication and enthusiasm, making it a significant part of the department’s academic calendar.
                    </p>
                </div>
            </div>



            <div className="px-7 pb-28 lg:px-36 flex flex-col">
                <CalenderCard />
                <CalenderCard />
                <CalenderCard />
                <CalenderCard />
                <CalenderCard />
                <CalenderCard />
            </div>
        </div>
    )
}

export default page