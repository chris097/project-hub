'use client'
import React, { useState } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import Column from './Column';

const initialTasks = {
  progress: [
    { id: 'task-1', text: 'Task 1' },
    { id: 'task-2', text: 'Task 2' },
    { id: 'task-3', text: 'Task 3' },
  ],
  pending: [],
  success: [],
};

const Kanban: React.FC = () => {
  const [tasks, setTasks] = useState(initialTasks);

  const onDragEnd = (result: any) => {
    const { destination, source, draggableId } = result;

    if (!destination) return;

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const startColumn = tasks[source.droppableId];
    const endColumn = tasks[destination.droppableId];

    if (startColumn === endColumn) {
      const newTaskIds = Array.from(startColumn);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = { ...startColumn, taskIds: newTaskIds };

      const newTasks = { ...tasks, [newColumn.id]: newColumn };

      setTasks(newTasks);
    } else {
      const startTaskIds = Array.from(startColumn);
      startTaskIds.splice(source.index, 1);
      const newStartColumn = { ...startColumn, taskIds: startTaskIds };

      const endTaskIds = Array.from(endColumn);
      endTaskIds.splice(destination.index, 0, draggableId);
      const newEndColumn = { ...endColumn, taskIds: endTaskIds };

      const newTasks = {
        ...tasks,
        [startColumn.id]: newStartColumn,
        [endColumn.id]: newEndColumn,
      };

      setTasks(newTasks);
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Column title="progress" tasks={tasks.progress} />
        <Column title="pending" tasks={tasks.pending} />
        <Column title="success" tasks={tasks.success} />
      </div>
    </DragDropContext>
  );
};

export default Kanban;
