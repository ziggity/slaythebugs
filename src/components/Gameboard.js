import React, { useState, useEffect } from 'react';
import Card from './Card';

const GameBoard = () => {
  const [deck, setDeck] = useState(initializeDeck());
  const [hand, setHand] = useState([]);
  const [discardPile, setDiscardPile] = useState([]);

  useEffect(() => {
    drawCards(5);
  }, []); // Draw 5 cards at the start

  const initializeDeck = () => {
  
  };

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
        {/* Display deck information */}
      </div>
      <div>
        <h2>Discard Pile</h2>
        {/* Display discard pile information */}
      </div>
      <button onClick={endTurn}>End Turn</button>
    </div>
  );
};

export default GameBoard;
