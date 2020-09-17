import React from 'react';
import InputSet from '../Shared/InputSet';
import { connect } from 'react-redux';

const PlayerInput = ({ players, setPlayers, startGame }) => {
  const inputSettings = [];

  const playerNames = {
    x: null,
    o: null,
  };

  const sharedSettings = {
    type: 'text',
    minLength: 1,
    maxLength: 20,
    required: true,
    placeholder: 'Your name...',
    pattern: '.*\\S.*',
    msg: 'Please enter your name',
  };

  for (let i = 0; i < players; i++) {
    const customSetting = {
      ...sharedSettings,
      label: `Player ${i + 1}`,
      name: i === 0 ? 'x' : 'o',
    };

    inputSettings.push(customSetting);
  }

  const handleInput = (e) => {
    e.preventDefault();
    playerNames[e.target.name] = e.target.value;
  };

  const handleStartGame = (e) => {
    e.preventDefault();
    setPlayers(playerNames);
    startGame();
  };

  return (
    <form onSubmit={handleStartGame}>
      {inputSettings.map((settings, index) => (
        <InputSet settings={settings} key={index} onChange={handleInput} />
      ))}

      <button className="user-btn start-game-btn">Start Game</button>
    </form>
  );
};

function mapDispatchToProps(dispatch) {
  return {
    setPlayers: (playerNames) =>
      dispatch({ type: 'SET_PLAYERS', payload: playerNames }),
    startGame: () => dispatch({ type: 'START_GAME' }),
  };
}

export default connect(null, mapDispatchToProps)(PlayerInput);
