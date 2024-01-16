import React from 'react';
import { useDrop } from 'react-dnd';
const EnemyDropTarget = ({ onDrop }) => {
  const [{ isOver }, drop] = useDrop({
    accept: 'CARD', // Specify the type that this drop target accepts
    drop: (item) => onDrop(item.card), // Handle the drop event
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  return (
    <div
      ref={drop}
      style={{
        border: `2px solid ${isOver ? 'red' : 'black'}`, // Highlight border when card is over
        padding: '10px',
        margin: '10px',
      }}
    >
      <h2>Enemy</h2>
    </div>
  );
};

export default EnemyDropTarget;
