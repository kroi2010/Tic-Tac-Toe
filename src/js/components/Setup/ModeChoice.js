import React from 'react';

const ModeChoice = ({ multipleMode, singleMode }) => {
  return (
    <section>
      <button className="user-btn" onClick={multipleMode}>
        Player VS Player
      </button>

      <p>or</p>

      <button className="user-btn" onClick={singleMode}>
        Player VS Computer
      </button>
    </section>
  );
};

export default ModeChoice;
