"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { X } from 'lucide-react';

const Page = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [selectedCard, setSelectedCard] = useState<number | null>(null);

  const activities = [
    {
      title: "Inauguration of IT Association",
      date: "14th Nov 2023",
      description:
        "The IT Association was officially inaugurated by Dr. Sangeetha U., Head of the IT department, marking the beginning of our journey towards promoting collaboration and innovation within the IT community.",
      image: "/images/achivements/1.jpg",
    },
    {
      title: "Christmas and New Year Celebration",
      date: "20th Dec 2023",
      description:
        "The IT Association organized a festive celebration for Christmas and New Year. Dr. Dhanya K.M, Associate Professor, inaugurated the event by cutting the cake, bringing students together to strengthen bonds.",
      image: "/images/achivements/2.jpg",
    },
    {
      title: "Interaction Programme with Alumni",
      date: "29th Jan 2024",
      description:
        "Alumni members, Mr. Arshaque Mohammed and Ms. Angel Anto from the 2017-21 batch, shared valuable insights and professional experiences, providing mentorship to the current students.",
      image: "/images/achivements/3.jpg",
    },
    {
      title: "C-Tsunami: C Programming Training",
      date: "Ongoing",
      description:
        "A daily training session on C programming, led by Mr. Anoop S.K.M, Assistant Professor, and selected students. This initiative aims to improve the programming skills of students from all branches.",
      image: "/images/achivements/4.jpg",
    },
    {
      title: "Programme for CSE/IT Girls",
      date: "17th Mar 2024",
      description:
        "A Python training programme exclusively for girls in the IT and CSE departments, organized in collaboration with the SHE cell. The session will be handled by Karthik A., AI Engineer at Litmus7.",
      image: "/images/achivements/5.jpg",
    },
  ];

  const EventCard = ({ activity, index }: { activity: typeof activities[0], index: number }) => {
    return (
      <>
        <div
          className="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white border border-gray-200 h-full transition-all duration-300 hover:shadow-xl cursor-pointer"
          onMouseEnter={() => setHoveredCard(index)}
          onMouseLeave={() => setHoveredCard(null)}
          onClick={() => setSelectedCard(index)}
        >
          <div className="h-48 relative">
            <Image
              src={activity.image}
              alt={activity.title}
              fill
              className="object-cover"
            />
          </div>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 line-clamp-2">
              {activity.title}
            </div>
            <p className="text-gray-600 text-sm mb-2">{activity.date}</p>
            <p className="text-gray-700 text-base line-clamp-3">
              {activity.description}
            </p>
          </div>
        </div>

        {/* Desktop Hover Popup - Only shows on larger screens */}
        {hoveredCard === index && (
          <div className="absolute z-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2 w-[120%] bg-white rounded-lg shadow-2xl border border-gray-200 p-6 transition-all duration-300 hidden lg:block">
            <div className="relative h-56">
              <Image
                src={activity.image}
                alt={activity.title}
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <div className="mt-4">
              <h3 className="font-bold text-xl mb-2">{activity.title}</h3>
              <p className="text-gray-600 text-sm mb-3">{activity.date}</p>
              <p className="text-gray-700 text-base">
                {activity.description}
              </p>
            </div>
          </div>
        )}
      </>
    );
  };

  return (
    <div>
      <div className="px-7 py-28 lg:px-36">
        <h2 className="text-[40px] text-[#00385E]">Events</h2>
        <div className="w-36 lg:w-44 h-1 bg-[#1B80C4] mt-2" />
      </div>

      <div className="px-7 pb-28 lg:px-36 grid grid-cols-1 gap-5 lg:grid-cols-4">
        {activities.map((activity, index) => (
          <div key={index} className="relative group">
            <EventCard activity={activity} index={index} />
          </div>
        ))}
      </div>

      {/* Custom Modal for Mobile */}
      {selectedCard !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 lg:hidden flex items-center justify-center p-4">
          <div className="bg-white rounded-lg w-full max-w-md max-h-[90vh] overflow-y-auto relative">
            <button 
              onClick={() => setSelectedCard(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-white shadow-lg hover:bg-gray-100"
            >
              <X size={20} />
            </button>
            
            <div className="relative h-56 w-full">
              <Image
                src={activities[selectedCard].image}
                alt={activities[selectedCard].title}
                fill
                className="object-cover rounded-t-lg"
              />
            </div>
            
            <div className="p-6">
              <h3 className="font-bold text-xl mb-2">
                {activities[selectedCard].title}
              </h3>
              <p className="text-gray-600 text-sm mb-3">
                {activities[selectedCard].date}
              </p>
              <p className="text-gray-700 text-base">
                {activities[selectedCard].description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;