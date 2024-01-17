import React, { useState }from "react";
import PlayMat from "./components/PlayMat";
import "./App.css";
import DeckOfCards from "./components/DeckOfCards";
import GameModal from "./components/GameModal";
import Hackertools from "./cards/hackertools";
import PhishingAttempt from "./cards/phishingattempt";
import AFK from "./cards/afk";
import DeployZeroDay from "./cards/deployZeroDay";
import Wipedown from "./cards/wipedown";
import Firewall from "./cards/firewall";
function App() {
  const [energy, setEnergy] = useState(3);
  const cardList = [Firewall, Hackertools, PhishingAttempt, AFK,DeployZeroDay, Wipedown];
  const [deckOfCards, setDeckOfCards] = useState(() => generateDeck());
 

  function generateDeck() {
    const deck = [];
    for (let i = 0; i < 12; i++) {
      const card = cardList[i % 2];
      deck.push(card);
    }
    return deck;
  }
  const handleCardSelection = (selectedCard) => {
    // Add the selected card to the player's deck or perform other actions
    // You can customize this based on your game logic
    console.log("Selected card:", selectedCard);
    setDeckOfCards((prevDeck) => prevDeck.push(selectedCard))  };
  const drawHand = () => {
   
    console.log('Drawing hand...');
  };
  const handleEndTurn = () => {
    console.log('Ending turn...');
    setEnergy(3); // Reset energy to 3 for the next turn
    drawHand();
  };

  return (
    <div className="App">
      <PlayMat  energy={energy} setEnergy={setEnergy} handleEndTurn={handleEndTurn} updateDeck={setDeckOfCards} />
      <DeckOfCards drawHand={drawHand} updateDeck={setDeckOfCards} />
      <GameModal cards={cardList} onSelect={handleCardSelection} />
    </div>
  );
}

export default App;
