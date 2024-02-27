'use client'
import React, { useEffect, useState } from 'react';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import CreateTask from './CreateTask';
import ListTasks from './ListTask';

const Task = () => {
    const [tasks, setTasks] = useState([]);
    console.log('task:', tasks);

    useEffect(() => {
        setTasks(JSON.parse(localStorage.getItem('tasks')));
    }, []);

    return (
        <DndProvider backend={HTML5Backend}>
            <CreateTask tasks={tasks} setTasks={setTasks} />
        <ListTasks tasks={tasks} setTasks={setTasks} />
        </DndProvider>
    );
};

export default Task;