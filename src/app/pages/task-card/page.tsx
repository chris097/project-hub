'use client'
import React, { useEffect, useState } from 'react';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import CreateTask from './CreateTask';
import ListTasks from './ListTask';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Task = () => {
    const [tasks, setTasks] = useState([]);
    console.log('task:', tasks);

    useEffect(() => {
        setTasks(JSON.parse(localStorage.getItem('tasks')));
    }, []);

    const CustomPrevArrow = ({ onClick }) => (
    <button className="absolute top-1/2 right-14 transform -translate-y-1/2 bg-gray-500 text-white rounded-full w-10 h-10 flex items-center justify-center z-10" onClick={onClick}>
            {/* <img src={arrowPrevIcon} alt="Previous" className="w-6 h-6" /> */}
            prev
    </button>
  );

  const CustomNextArrow = ({ onClick }) => (
    <button className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-500 text-white rounded-full w-10 h-10 flex items-center justify-center z-10" onClick={onClick}>
          {/* <img src={arrowNextIcon} alt="Next" className="w-6 h-6" /> */}
          next
    </button>
  );

     const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 2000,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };


    return (
        <>
        <DndProvider backend={HTML5Backend}>
            <CreateTask tasks={tasks} setTasks={setTasks} />
        <ListTasks tasks={tasks} setTasks={setTasks} />
            </DndProvider>
            <div className='w-[400px] h-64 border'>
                <Slider {...settings}>
      <div>
        <img src="/path/to/image1.jpg" alt="Image 1" />
      </div>
      <div>
        <img src="/path/to/image2.jpg" alt="Image 2" />
      </div>
      <div>
        <img src="/path/to/image3.jpg" alt="Image 3" />
      </div>
      {/* Add more image slides as needed */}
    </Slider>
            </div>
            </>
    );
};

export default Task;