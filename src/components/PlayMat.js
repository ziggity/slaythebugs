import React from "react";
import ControlledHealthBar from "./ControlledHealthBar";
import Avatar from "../assets/images/avatar1.png";
import Baddie from "../assets/images/wormvirus.png";
import Shield from "/Users/eva/Desktop/my-game/src/assets/images/shield.png";
import backgroundImage from '/Users/eva/Desktop/my-game/src/assets/images/serverbackground.jpeg';
const appStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    minHeight: '100vh', 
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '5px', 
  };

const PlayMat = () => {
  return (
    <div style={appStyle}>

      <header>
        <nav >
        <span className="logo" style={{
  position: "absolute",  // Use absolute positioning
  top: "8px",
  left: 0,
  color: "white",
  fontFamily: "Helvetica",
  textAlign: "center",
}}>
  Slay the hacker - inspired by Slay the Spire
</span>
          <div>
            <span>
              Player Block value: <span id="playerItems"> <img src={Shield} alt="player" className="player-block" /></span>
            </span>
          </div>
          <div>
            <span>
              Player Relics: <span id="playerItems"></span>
            </span>
          </div>
        </nav>
      </header>
      <main className="flex-container">
        <section className="arena">
          <div className="player" id="player1">
            <h2>Player 1</h2>
            <div className="health-bar-container">
              <ControlledHealthBar />
            </div>
            <img src={Avatar} alt="player" className="player-img" />
          </div>
        </section>

        <section className="arena">
          <div className="enemy" id="enemy">
            <h2>Enemy</h2>
            <div className="health-bar-container">
              <ControlledHealthBar />{" "}
            </div>
            <img src={Baddie} alt="enemy" className="player-img" />
          </div>
        </section>

        <section className="hand">
          <h2>Your Hand</h2>
          <div id="hand"></div>
        </section>
      </main>
    </div>
  );
};

export default PlayMat;
