import React, { useState } from 'react';
import Header from '../Shared/Header';
import ModeChoice from './ModeChoice';
import PlayerInput from './PlayerInput';

const Intro = () => {
  const maxNumberOfSteps = 2;
  const maxNumberOfPlayers = 2;
  const [numberOfPlayers, setNumberOfPlayers] = useState(1); // by default number of players is 1
  const [step, setStep] = useState(1);

  const handleSingleModeClick = () => {
    nextStep();
  };

  const handleMultipleModeClick = () => {
    setNumberOfPlayers((prev) => {
      if (prev < maxNumberOfPlayers) {
        return prev + 1;
      }
    });

    nextStep();
  };

  const nextStep = () => {
    setStep((prev) => {
      if (prev < maxNumberOfSteps) {
        return prev + 1;
      }
    });
  };

  return (
    <div className="intro">
      <Header
        value={
          <>
            Welcome to
            <br />
            <span className="intro__accent-font">Tic Tac Toe!</span>
          </>
        }
      />

      {step === 1 ? (
        <ModeChoice
          multipleMode={handleMultipleModeClick}
          singleMode={handleSingleModeClick}
        />
      ) : null}

      {step === 2 ? <PlayerInput players={numberOfPlayers} /> : null}
    </div>
  );
};

export default Intro;
