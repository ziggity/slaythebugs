import React from 'react';
import Card from './Card'; 
import Firewall from '../cards/firewall';
import Hackertools from '../cards/hackertools';

const Hand = () => {
  const cardList = [
    
    Firewall, Hackertools
   
  ];

  // Generate a hand of 12 cards
  const handOfCards = [];
  for (let i = 0; i < 12; i++) {
    // Assuming you want to repeat the cards in a loop
    const card = cardList[i % cardList.length];
    handOfCards.push(card);
  }

  return (
    <div className="hand">
      <h2>Your Hand</h2>
      <div className="hand-cards">
        {handOfCards.map((card, index) => (
          <Card key={index} card={card} />
        ))}
      </div>
    </div>
  );
};

export default Hand;