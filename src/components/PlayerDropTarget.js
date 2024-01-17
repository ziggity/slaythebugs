import React from 'react';
import { useDrop } from 'react-dnd';
const PlayerDropTarget = ({ onDrop }) => {
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
        border: `8px dotted ${isOver ? 'red' : 'white'}`, 
        padding: '1px',
        margin: '1px',
      }}
    >
      <h2>Player 1</h2>
    </div>
  );
};

export default PlayerDropTarget;
