import React from 'react';
import Cards from 'public/assets/cards'
const Grid = () => {

  return (
    <div className="grid-container">
 
      {data.map((item) => (
        <div key={item.id} className="grid-item">
          {item.name}
        </div>
      ))}
    </div>
  );
}   


export default Grid;