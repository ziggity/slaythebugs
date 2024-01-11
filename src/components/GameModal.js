import React, { useState } from 'react';

function GameModal() {
  const [showModal, setShowModal] = useState(false);

  const handlePlayClick = () => {
    setShowModal(true);
  };

  const handleCloseClick = () => {
    setShowModal(false);
  };

  return (
    <div>
      <button onClick={handlePlayClick}>Play Game</button>
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <button onClick={handleCloseClick}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default GameModal;