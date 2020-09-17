import React from 'react';

const Overlay = ({ msg, player }) => {
  const overlayClasses = ['overlay'];

  if (msg) overlayClasses.push('overlay--show');

  // to refresh everything we just refresh our page
  const handleStartNewGame = () => {
    window.location.reload();
  };

  return (
    <div className={overlayClasses.join(' ')}>
      <h2>
        {player ? <p className="overlay__accent-font">{player}</p> : null}

        {msg}
      </h2>

      <button className="overlay__user-btn" onClick={handleStartNewGame}>
        Play Again?
      </button>
    </div>
  );
};

export default Overlay;
