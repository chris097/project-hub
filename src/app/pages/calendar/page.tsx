'use client'
import React, { useState, useContext, useEffect } from 'react';
import CalendarHeader from '@/components/Calendar/CalendarHeader';
import Sidebar from '@/components/Calendar/Sidebar';
import Month from '@/components/Calendar/Month';
import GlobalContext from '@/context/GlobalContext';
import { getMonth } from '@/utils/getMonth';

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  const { monthIndex } = useContext(GlobalContext);

  console.log(currentMonth)
  
  useEffect(() => { 
    setCurrentMonth(getMonth(monthIndex))
  }, [monthIndex]);


  return (
    <div className='flex h-screen flex-col'>
      <CalendarHeader />
      <div className='flex flex-1 n'>
        <Sidebar />
        <Month month={currentMonth} />
      </div>
    </div>
  );
};

export default Calendar;