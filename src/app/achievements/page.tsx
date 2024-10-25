import AchivementCard from '@/components/achivement-card'
import React from 'react'

const page = () => {

  const activities = [
    {
      title: "Inauguration of IT Association",
      date: "14th Nov 2023",
      description:
        "The IT Association was officially inaugurated by Dr. Sangeetha U., Head of the IT department, marking the beginning of our journey towards promoting collaboration and innovation within the IT community.",
        image: "/images/achivements/1.jpg", // Replace with your image URL
      },
    {
      title: "Christmas and New Year Celebration",
      date: "20th Dec 2023",
      description:
        "The IT Association organized a festive celebration for Christmas and New Year. Dr. Dhanya K.M, Associate Professor, inaugurated the event by cutting the cake, bringing students together to strengthen bonds.",
      image: "/images/achivements/2.jpg", // Replace with your image URL
    },
    {
      title: "Interaction Programme with Alumni",
      date: "29th Jan 2024",
      description:
        "Alumni members, Mr. Arshaque Mohammed and Ms. Angel Anto from the 2017-21 batch, shared valuable insights and professional experiences, providing mentorship to the current students.",
        image: "/images/achivements/3.jpg", // Replace with your image URL
      },
    {
      title: "C-Tsunami: C Programming Training",
      date: "Ongoing",
      description:
        "A daily training session on C programming, led by Mr. Anoop S.K.M, Assistant Professor, and selected students. This initiative aims to improve the programming skills of students from all branches.",
        image: "/images/achivements/4.jpg", // Replace with your image URL
      },
    {
      title: "Programme for CSE/IT Girls",
      date: "17th Mar 2024",
      description:
        "A Python training programme exclusively for girls in the IT and CSE departments, organized in collaboration with the SHE cell. The session will be handled by Karthik A., AI Engineer at Litmus7.",
        image: "/images/achivements/5.jpg", // Replace with your image URL
      },
  ];

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


      <div className="px-7 pb-28 lg:px-36 grid grid-cols-1 gap-5 lg:grid-cols-4">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="max-w-sm rounded overflow-hidden shadow-lg bg-white border border-gray-200"
          >
            <img
              className="w-full h-48 object-cover"
              src={activity.image}
              alt={activity.title}
            />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{activity.title}</div>
              <p className="text-gray-600 text-sm mb-2">{activity.date}</p>
              <p className="text-gray-700 text-base">{activity.description}</p>
            </div>
          </div>
        ))}
      </div>

    </div>
  )
}

export default page