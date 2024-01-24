import React from 'react';
import Image from 'next/image';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import calendar from "@/assets/calendar.png";

const CalendarHeader = () => {
    return (
        <header className='px-4 py-2 flex items-center font-openSans'>
            <Image src={calendar} alt="calendar" className='mr-4 ml-4 w-12 h-12' />
            <h1 className='mr-10 text-xl text-gray-500 font-bold'>Calendar</h1>
            <button className="px-4 py-2 border text-gray-800 rounded mr-10">Today</button>
            <button>
                <span className='text-gray-600 mx-10 cursor-pointer'>
                   <FaChevronLeft />
                </span>
            </button>
            <button>
                <span className='text-gray-600 mx-7 cursor-pointer'>
                   <FaChevronRight />
                </span>
            </button>
        </header>
    );
};

export default CalendarHeader;