import React from 'react';

const Card = ({ card, onClick }) => {
  const { name, type, energy, target, block, description, image } = card;

  return (
    <div
      style={{
        border: '1px solid #ccc',
        padding: '10px',
        margin: '10px',
        width: '150px',
        cursor: 'pointer',
      }}
      onClick={onClick}
    >
      <img src={image} alt={name} style={{ maxWidth: '100%' }} />
      <h3>{name}</h3>
      <p>Type: {type}</p>
      <p>Energy: {energy}</p>
      <p>Target: {target}</p>
      <p>Block: {block}</p>
      <p>Description: {description}</p>
    </div>
  );
};

export default Card;
