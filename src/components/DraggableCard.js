import React from 'react';
import { useDrag } from 'react-dnd';

const DraggableCard = ({ card }) => {
  const [{ isDragging }, drag] = useDrag({
    type: 'CARD', 
    item: { type: 'CARD', card },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        cursor: 'move',
        border: '1px solid #ccc',
        padding: '10px',
        margin: '10px',
        width: '150px',
      }}
    >
      <img src={card.image} alt={card.name} style={{ maxWidth: '100%' }} />
      <h3>{card.name}</h3>
      <p>{card.description}</p>
      <p>Energy cost: {card.energy}</p>
    </div>
  );
};

export default DraggableCard;
