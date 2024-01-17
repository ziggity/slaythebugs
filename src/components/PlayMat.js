import Avatar from "../assets/images/avatar1.png";
import Baddie from "../assets/images/wormvirus.png";
import backgroundImage from "/Users/eva/Desktop/my-game/src/assets/images/serverbackground.jpeg";
import React, { useState, useEffect } from "react";
import EnemyDropTarget from "./EnemyDropTarget";
import PlayerDropTarget from "./PlayerDropTarget";
import GameModal from "./GameModal";

const appStyle = {
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  maxHeight: "75vh",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  padding: "5px",
};
// set the health of player and energy to 3,  and enemy health 
const PlayMat = ({ energy, setEnergy, handleEndTurn, updateDeck }) => {
  const [health, setHealth] = useState(Math.floor(Math.random(15) * 12));
  const [playerHealth, setPlayerHealth] = useState(
    Math.floor(Math.random() * 55)
  );
  const HandlePlayerCardDrop = (card) => {
    console.log("Card dropped on Player:", card);
    if (energy <= 0) {
      return console.log("out of energy dude, time for new round!");
    } else {
      setEnergy((prevEnergy) => prevEnergy - 1);
      setPlayerHealth((prevPHealth) => prevPHealth + 5);
    }
  };

  const handleEnemyDefeat = () => {
    if (health > 0) {
      setHealth(0);
    }
  };

  useEffect(() => {
    if (health <= 0) {
      setHealth(Math.floor(Math.random() * 12) + 1);
    }
  }, [health]);

  const handleCardSelection = (selectedCard) => {
    console.log("Selected Card:", selectedCard);
    updateDeck((prevDeck) => [...prevDeck, selectedCard]);
  }

  const HandleCardDrop = (card) => {
    console.log("Card dropped on Enemy:", card);
    if (energy <= 0) {
      return console.log("out of energy");
    } else {
      setEnergy((prevEnergy) => prevEnergy - 1);
      setHealth((prevHealth) => prevHealth - 6);
    }
    if (health <= 0) return console.log("you defeated the virus worm");
  };

  useEffect(() => {
    if (energy <= 0) {
      handleEndTurn();
    }
  }, [energy, handleEndTurn]);

  return (
    <div style={appStyle}>
      <main className="flex-container">
        <div className="player" id="player1">
          <div className="health-bar-container"></div>
          <img src={Avatar} alt="player" className="player-img" />

          <div>
            <h2>
              Energy: {energy} Health: {playerHealth}{" "}
            </h2>
            <PlayerDropTarget onDrop={HandlePlayerCardDrop} />
          </div>
        </div>
        <div className="enemy" id="enemy">
          <div className="health-bar-container"></div>
          <img src={Baddie} alt="enemy" className="player-img" />
          <div>
            {" "}
            <h2>Health: {health} </h2>
            <EnemyDropTarget onDrop={HandleCardDrop} />
          </div>
        </div>
        <button onClick={handleEnemyDefeat}>End battle</button>
        <GameModal cardList={ ["PhishingAttempt",
            "AFK",
            "WipedownPC"]} handleCardSelection={handleCardSelection} />
      </main>
    </div>
  );
};

export default PlayMat;
