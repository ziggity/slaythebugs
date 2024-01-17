import React, { useState }from "react";
import PlayMat from "./components/PlayMat";
import "./App.css";
import DeckOfCards from "./components/DeckOfCards";

function App() {
  const [energy, setEnergy] = useState(3);

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
      <PlayMat  energy={energy} setEnergy={setEnergy} handleEndTurn={handleEndTurn} />
      <DeckOfCards drawHand={drawHand} />
    </div>
  );
}

export default App;
