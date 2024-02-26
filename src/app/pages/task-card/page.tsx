'use client'
import React, { useState } from 'react'
import CreateTask from './CreateTask';
import ListTasks from './ListTask';

const Task = () => {
    const [tasks, setTasks] = useState([]);
    return (
        <div>
            <CreateTask tasks={tasks} setTasks={setTasks} />
        <ListTasks tasks={tasks} setTasks={setTasks} />
        </div>
    );
};

export default Task;