import React, { useState, useEffect } from 'react';
import Card from './Card';

const initializeDeck = () => {
    const card1 = {
      name: 'Firewall',
      type: 'skill',
      energy: 1,
      target: 'player',
      block: 5,
      description: 'Gain 5 Block.',
      image: 'src/assets/images/firewall.jpeg',
    };
};

const GameBoard = () => {
  const [deck, setDeck] = useState(initializeDeck());
  const [hand, setHand] = useState([]);
  const [discardPile, setDiscardPile] = useState([]);

  useEffect(() => {
    drawCards(5);
  }, []); // Draw 5 cards at the start

    

  const shuffleDeck = () => {

  };

  const drawCards = (count) => {
   
  };

  const playCard = (card) => {
   
  };

  const endTurn = () => {
  
  };

  return (
    <div>
      <div>
        <h2>Player's Hand</h2>
        {hand.map((card) => (
          <Card key={card.name} card={card} onClick={() => playCard(card)} />
        ))}
      </div>
      <div>
        <h2>Deck</h2>
      </div>
      <div>
        <h2>Discard Pile</h2>
      </div>
      <button onClick={endTurn}>End Turn</button>
    </div>
  );
};

export default GameBoard;
