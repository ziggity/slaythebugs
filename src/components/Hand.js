import React, { useState } from "react";
import Card from "./Card";
import Firewall from "../cards/firewall";
import Hackertools from "../cards/hackertools";

const DeckOfCards = () => {
  const cardList = [Firewall, Hackertools];

  const [deckOfCards, setDeckOfCards] = useState(generateDeck());
  const [hand, setHand] = useState([]);

  function generateDeck() {
    const deck = [];
    for (let i = 0; i < 12; i++) {
      const card = cardList[i % cardList.length];
      deck.push(card);
    }
    return deck;
  }

  const drawHand = () => {
    const drawnCards = deckOfCards.slice(0, 5);
    const remainingDeck = deckOfCards.slice(5);
    setHand(drawnCards);
    setDeckOfCards(remainingDeck);
  };

  return (
    <div>
      <div className="hand">
        <h2>Your Hand</h2>
        <div
          className="hand-cards"
          style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
        >
          {hand.map((card, index) => (
            <Card key={index} card={card} />
          ))}
        </div>
        <button onClick={drawHand}>Draw Hand</button>
      </div>
      <h2>Your Deck</h2>
      <div
        className="deck-cards"
        style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
      >
        {deckOfCards.map((card, index) => (
          <Card key={index} card={card} />
        ))}
      </div>
    </div>
  );
};

export default DeckOfCards;
