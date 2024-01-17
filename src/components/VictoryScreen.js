import React from "react";

const VictoryScreen = ({ cardOptions, onCardSelection }) => {
  return (
    <div className="victory-screen">
      <h2>Victory!</h2>
      <p>Congratulations! Choose a card to add to your deck:</p>
      <div className="card-options">
        {cardOptions.map((card) => (
          <div key={card.id} onClick={() => onCardSelection(card)}>
            {/* Render card information */}
            <p>{card.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VictoryScreen;