import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const CreateTask = ({ tasks, setTasks }) => {
    const [task, setTask] = useState({
        id: "",
        name: "",
        status: "todo",
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        if (task.name.length < 3) return console.log("A task must have more than 3 characters");

        if (task.name.length > 100) return console.error("A task must not be more than 100 characters");

        setTasks((prev) => {
            const list = [...prev, task];
            localStorage.setItem("tasks", JSON.stringify(list));
            return list;
        });

        console.log("Task Created!")
        setTask({
            id: "",
            name: "",
            status: "todo",
        });
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={task.name}
                className=' border border-slate-400 bg-slate-100 rounded-md mr-4 h-8 w-64 px-1'
                onChange={(e) => setTask({ ...task, id: uuidv4(), name: e.target.value })}
            />
            <button className="bg-cyan-500 rounded-md px-4 h-12 text-white">Create</button>
        </form>
        </div>
    );
};

export default CreateTask;
