import ControlledHealthBar from "./ControlledHealthBar";
import Avatar from "../assets/images/avatar1.png";
import Baddie from "../assets/images/wormvirus.png";
import backgroundImage from "/Users/eva/Desktop/my-game/src/assets/images/serverbackground.jpeg";
import React, { useState } from 'react';
import EnemyDropTarget from './EnemyDropTarget';
import DraggableCard from "./DraggableCard";

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

const PlayMat = () => {
  const [energy, setEnergy] = useState(3);
 const HandleCardDrop = (card) => {
  
    console.log('Card dropped on Enemy:', card);
     setEnergy((prevEnergy) => prevEnergy - 1);
  
  }
  return (
    <div style={appStyle}>
      <main className="flex-container">
          <div className="player" id="player1">
            <div className="health-bar-container">
              <ControlledHealthBar />
            </div>
            <img src={Avatar} alt="player" className="player-img" />
            <h2>Player 1</h2>
            <div>
        <h2>Energy: {energy}</h2>
      </div>

          </div>
          <div className="enemy" id="enemy">
            <div className="health-bar-container">
              <ControlledHealthBar />{" "}
            </div>
            <img src={Baddie} alt="enemy" className="player-img" />
            <div>
            <EnemyDropTarget onDrop={HandleCardDrop} />
    </div>
          </div>  
      </main>
    </div>
  );
};

export default PlayMat;
