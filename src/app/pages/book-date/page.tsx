'use client';
import React, { useState } from 'react';
import dayjs from 'dayjs';

import { getBookedMonth } from '@/utils/getBookedMonth';

const Day = ({ day, rowIdx }: any) => {
    const getCurrentDayClass = () => {
        return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY") ?
            'bg-blue-600 text-white rounded-full w-7' :
            ''
    }

    return (
        <div className='flex flex-col'>
            <header className='flex flex-col items-center'>
                {rowIdx === 0 && <p className='text-sm mt-1'>{day.format('ddd')}</p>}
                <p className={`text-sm p-1 my-1 text-center ${getCurrentDayClass()}`}>
                    {day.format("DD")}
                </p>
            </header>
        </div>
    );
};


const Month = ({ month }: any) => {
    
    return (
        <div className='flex-1 grid grid-cols-7 grid-rows-5'>
            {month.map((row: any, i: number) => (
                <React.Fragment key={i}>
                    {row.map((day: any, idx: number) => (
                        <Day day={day} key={idx} rowIdx={i} />
                        // <p>Day</p>
                    ))}
                </React.Fragment>
            ))}
        </div>
    );
};


const BookDate = () => {
    const [currentMonth, setCurrentMonth] = useState(getBookedMonth());
    console.log(currentMonth)

    const [formLists, setFormLists] = useState([true]); 

   const handleAddFormList = () => {
    setFormLists([...formLists, true]); 
  };

  const handleDeleteFormList = (index: any) => {
    const updatedFormLists = [...formLists];
    updatedFormLists.splice(index, 1);
    setFormLists(updatedFormLists);
  };
    
    return (
        <div className='border h-[366px] w-[444px] m-10 p-5'>
            <p>Select your booking date</p>
            <div className='flex justify-between items-center pt-3'>
                <p><svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.49985 1L2.20696 6.29289C1.81643 6.68342 1.81643 7.31658 2.20696 7.70711L7.49985 13" stroke="#E5E5E7" strokeWidth="2" strokeLinecap="round" />
                </svg>
                </p>
                <p>December 2023</p>
                <p className='cursor-pointer'>
                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.5 6L15.7929 11.2929C16.1834 11.6834 16.1834 12.3166 15.7929 12.7071L10.5 18" stroke="#323539" stroke-width="2" strokeLinecap="round" />
                    </svg>
                </p>
            </div>
            <Month month={currentMonth} />

             
            <div>
      <button onClick={handleAddFormList}>Add Form</button>
      {/* Render form lists based on the state array */}
      {formLists.map((showFormList, index:number) => (
        <div key={index}>
          {showFormList && (
            <form>
              {/* Your form elements here */}
              <label>
                Name:
                <input type="text" name="name" />
              </label>
              <label>
                Email:
                <input type="email" name="emai" />
              </label>
              {/* Add more form fields as needed */}
              <button onClick={() => handleDeleteFormList(index)}>Delete Form</button>
            </form>
          )}
        </div>
      ))}
    </div>

export default MyComponent;


        </div>
    );
};

export default BookDate;