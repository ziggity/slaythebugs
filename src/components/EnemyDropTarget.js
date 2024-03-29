import React from 'react';
import { useDrop } from 'react-dnd';
const EnemyDropTarget = ({ onDrop }) => {
  const [{ isOver }, drop] = useDrop({
    accept: 'CARD', 
    drop: (item) => onDrop(item.card), 
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  return (
    <div
      ref={drop}
      style={{
        border: `8px dotted ${isOver ? 'red' : 'black'}`, 
        padding: '1px',
        margin: '1px',
      }}
    >
      <h2>Enemy virus</h2>
    </div>
  );
};

export default EnemyDropTarget;
