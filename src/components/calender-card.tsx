import { MapPin, Clock } from 'lucide-react'
import React from 'react'

const CalenderCard = ({
  day = "31",
  month = "July",
  weekday = "Thursday",
  eventName = "Web3 Workshop",
  location = "IT211",
  time = "12:00 PM",
  onViewMore = () => { }
}) => {
  return (
    <div>
      <div className='flex justify-between my-6'>
        <div className='flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-around lg:flex-1'>
          <div className='flex h-fit items-center gap-3 lg:gap-4'>
            <h3 className="text-4xl lg:text-5xl text-[#00385E]">
              {day}
            </h3>
            <div>
              <p className='text-base lg:text-2xl'>{month}</p>
              <p className='text-base lg:text-2xl font-semibold'>{weekday}</p>
            </div>
          </div>
          <h4 className='font-semibold text-2xl lg:text-3xl'>
            {eventName}
          </h4>

          <div className='h-fit items-center flex gap-2'>
            <MapPin size={25} className='text-lg' />
            <p className='text-xl lg:text-2xl'>{location}</p>
          </div>
        </div>

        <div className='flex flex-col justify-between lg:items-center lg:flex-1 lg:justify-around lg:flex-row-reverse'>
          <button
            onClick={onViewMore}
            className='text-[#1B80C4] border border-[#1B80C4] px-6 py-3 hover:bg-[#1B80C4] hover:text-white transition-colors'
          >
            View more
          </button>

          <div>
            <div className='h-fit items-center flex gap-2'>
              <Clock size={25} />
              <p className='text-xl lg:text-2xl'>{time}</p>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full h-[0.5px] bg-black' />
    </div>
  )
}

export default CalenderCard