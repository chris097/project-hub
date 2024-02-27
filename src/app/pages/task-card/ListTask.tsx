import React, { useEffect, useState } from 'react';
import { useDrag, useDrop } from 'react-dnd';

const ListTasks = ({ tasks, setTasks }) => {
    const [todos, setTodos] = useState([]);
    const [inProgress, setInProgress] = useState([]);
    const [closed, setClosed] = useState([]);
    
    useEffect(() => {
        const fTodos = tasks.filter((task) => task.status === "todo");
        const fInProgress = tasks.filter((task) => task.status === "inprogress");
        const fullClosed = tasks.filter((task) => task.status === "closed");

        setTodos(fTodos);
        setInProgress(fInProgress);
        setClosed(fullClosed);

    }, [tasks]);

    const statuses = ["todo", "inprogress", "closed"];

    return (
        <div className=" flex gap-16">
            {statuses.map((status, index) => (
                <Section
                    key={index}
                    status={status}
                    tasks={tasks}
                    setTasks={setTasks}
                    todos={todos}
                    inProgress={inProgress}
                    closed={closed}
                />
            ))}
        </div>
    );
};

export default ListTasks;

const Section = ({
    status,
    tasks,
    setTasks,
    todos,
    inProgress,
    closed
}) => {
    const [{ isOver }, drop] = useDrop(() => ({
        accept: "task",
        drop: (item) => addItemToSelection(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        })
    }));

    let text = "Todo";
    let bg = "bg-gray-500"
    let taskToMap = todos

    if (status === "inprogress") {
        text = "In Progress";
        bg = "bg-purple-500";
        taskToMap = inProgress;
    }
    if (status === "closed") {
        text = "Closed";
        bg = "bg-green-500";
        taskToMap = closed;
    }

    const addItemToSelection = (id) => {

        setTasks((prev) => {
            const mTasks = prev.map(t => {
                if (t.id === id) {
                    return { ...t, status: status }
                }
                return t;
            });

            localStorage.setItem('tasks', JSON.stringify(mTasks));
            return mTasks;
        })
    };
    
    return (
        <div ref={drop} className={`w-64 rounded-md p-2 ${isOver ? "bg-slate-200": ""}`}>
           <Header text={text} bg={bg} count={taskToMap.length} />
            {taskToMap.length > 0 && taskToMap.map(task => <Task task={task} tasks={tasks} setTasks={setTasks} key={task.id} />)}
        </div>
    );
};

const Header = ({text, bg, count }) => {
    return (
        <div className={`${bg} flex items-center h-12 pl-4 rounded-md uppercase text-sm text-white`}>{text}
            <div className={`ml-2 bg-white w-5 h-5 text-black flex rounded-full fLex items-center justify-center`}>{count}</div>
        </div>
    );
};

const Task = ({ task, tasks, setTasks }) => {

    const [{ isDragging }, drag] = useDrag(() => ({
        type: "task",
        item: {id: task.id},
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    }));

    console.log(isDragging)

    const handleRemove = (id) => {
        console.log(id)

        const fTask = tasks.filter((t) => t.id !== id);
        localStorage.setItem('tasks',JSON.stringify(fTask))
        setTasks(fTask)
        console.log("Task removed", {icon: ""})
    };

    return (
        <div ref={drag} className={`relative p-4 mt-8 shadow-md ${isDragging ? "opacity-25" : "opacity-100"} rounded-md cursor-grab`}>
            {task.name}
            <button
                onClick={() => handleRemove(task.id)}
                className="absolute bottom-1 right-1 Otext-slate-400"
            >
                X
            </button>
        </div>
    );
};
