import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

interface TaskProps {
  task: {
    id: string;
    content: string;
  };
  index: number;
}

const Task: React.FC<TaskProps> = ({ task, index }:any) => {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          style={{
            ...provided.draggableProps.style,
            border: '1px solid #ccc',
            borderRadius: '4px',
            padding: '8px',
            marginBottom: '8px',
            backgroundColor: '#fff',
          }}
        >
          {task.content}
        </div>
      )}
    </Draggable>
  );
};

export default Task;