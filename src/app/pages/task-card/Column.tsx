import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import Task from './Task';

interface Task {
  id: string;
  content: string;
}

interface ColumnProps {
  columnId: string;
  title: string;
  tasks: Task[];
}

const Column: React.FC<ColumnProps> = ({ columnId, title, tasks }:any) => {
  return (
    <div
      style={{
        border: '1px solid #ccc',
        borderRadius: '4px',
        padding: '16px',
        backgroundColor: '#f9f9f9',
        marginRight: '16px',
        minHeight: '200px',
      }}
    >
      <h3>{title}</h3>
      <Droppable droppableId={columnId}>
        {(provided) => (
          <div ref={provided.innerRef} {...provided.droppableProps}>
            {tasks.map((task:any, index:any) => (
              <Task key={task.id} task={task} index={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default Column;

