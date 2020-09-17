import React, { useState, useEffect } from 'react';
import { checkWinner } from '../../helpers/check-winner';
import Header from '../Shared/Header';
import Board from './Board';
import Overlay from './Overlay';
import { connect } from 'react-redux';
import ComputerAI from '../../helpers/computer-logic';

const Game = ({ players }) => {
  /**************************
   * Multiple Mode / Shared *
   **************************/

  const [boardLayout, setBoardLayout] = useState(Array(9).fill(null));
  const [activePlayerIsX, setActivePlayerIsX] = useState(true);
  const [movesMade, setMovesMade] = useState(0);
  const currentSymbol = activePlayerIsX ? 'x' : 'o';

  const winner = checkWinner(boardLayout)
    ? players[checkWinner(boardLayout)]
      ? players[checkWinner(boardLayout)]
      : 'Computer'
    : null;

  const currentPlayer = players[currentSymbol]
    ? players[currentSymbol]
    : 'Computer';

  const winningMsg = {
    won: ' won!',
    draw: "It's a draw!",
  };

  const endGameMsg =
    winner || movesMade === 9
      ? winner
        ? winningMsg.won
        : winningMsg.draw
      : null;

  const handleClick = (i) => {
    if (boardLayout[i] || movesMade === 9) return;
    const updateLayout = [...boardLayout];
    updateLayout[i] = currentSymbol;
    setBoardLayout(updateLayout);
    setMovesMade((prev) => prev + 1);
    setActivePlayerIsX(!activePlayerIsX);
  };

  /***************************
   *        Solo Mode        *
   ***************************/

  const computerAI = new ComputerAI();

  const disableBoard = players[currentSymbol] ? false : true;

  useEffect(() => {
    let timer;
    if (!players[currentSymbol] && movesMade < 9 && !winner) {
      timer = setTimeout(() => computerMove(), 1000);
    }
    return () => clearTimeout(timer);
  });

  const computerMove = () => {
    const move = computerAI.makeMove(boardLayout);
    handleClick(move);
  };

  return (
    <>
      <Header
        value={
          endGameMsg ? null : disableBoard ? (
            'Waiting for computer to make a move...'
          ) : (
            <>
              <span className="accent-font">{currentPlayer}</span> , it's your
              turn!
            </>
          )
        }
      />

      <Board
        squares={boardLayout}
        onClick={handleClick}
        disabled={disableBoard}
      />

      <Overlay
        msg={endGameMsg}
        player={endGameMsg !== winningMsg.draw ? winner : null}
      />
    </>
  );
};

function mapStateToProps(state) {
  return {
    players: state.players,
  };
}

export default connect(mapStateToProps)(Game);
