'use client'
import React, { useState } from 'react';
import dayjs from 'dayjs';
import CalendarHeader from '@/components/Calendar/CalendarHeader';
import Sidebar from '@/components/Calendar/Sidebar';
import Month from '@/components/Calendar/Month';

const getMonth = (month= dayjs().month()) => {
  const year = dayjs().year();
  const firstDayOfTheMonth = dayjs(new Date(year, month, -1)).day();
  let currentMonthCount = 0 - firstDayOfTheMonth;
  const dayMatrix = new Array(5).fill([]).map(() => {
    return new Array(7).fill(null).map(() => {
      currentMonthCount++;
      return dayjs(new Date(year, month, currentMonthCount))
    })
  });

  return dayMatrix;
}

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(getMonth());
  return (
    <div>
      <CalendarHeader />
      <div>
        <Sidebar />
        <Month month={currentMonth} />
      </div>
    </div>
  );
};

export default Calendar;