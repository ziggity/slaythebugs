import React, { useState } from "react";
import Firewall from "../cards/firewall";
import Hackertools from "../cards/hackertools";
import { useDrop } from "react-dnd";
import DraggableCard from "./DraggableCard";
import PhishingAttempt from "../cards/phishingattempt";
import AFK from "../cards/afk";
import Wipedown from "../cards/wipedown";
import DeployZeroDay from "../cards/deployZeroDay";
const DeckOfCards = () => {
  const cardList = [Firewall, Hackertools, PhishingAttempt, AFK,DeployZeroDay, Wipedown];

  const [deckOfCards, setDeckOfCards] = useState(() => generateDeck());
  const [handOfCards, setHand] = useState([]);

  function generateDeck() {
    const deck = [];
    for (let i = 0; i < 12; i++) {
      const card = cardList[i % cardList.length];
      deck.push(card);
    }
    return deck;
  }
  const [{ isOver }, drop] = useDrop({
    accept: "CARD",
    drop: (item) => {
      console.log("Card dropped:", item.card.name);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  const drawHand = () => {
    setHand(deckOfCards.slice(0, 5));
    setDeckOfCards((prevDeck) => prevDeck.slice(5));
  };

  return (
    <div>
      <div className="hand">
        <h2>Your Hand</h2>
        <div
          className="hand-cards"
          style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
        >
          {handOfCards.map((card) => (
            <DraggableCard key={card.id} card={card} />
          ))}
        </div>
        <button onClick={drawHand}>Draw Hand</button>
      </div>
      <h2>Your Deck</h2>
      <div
        className="deck-cards"
        style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
      >
        {handOfCards.map((card) => (
          <DraggableCard key={card.id} card={card} />
        ))}
      </div>
      <div
        className="drop-target"
        ref={drop}
        style={{
          width: "75px",
          height: "125px",
          border: isOver ? "15px dashed green" : "15px dashed blue",
        }}
      >
      </div>
    </div>
  );
};

export default DeckOfCards;
