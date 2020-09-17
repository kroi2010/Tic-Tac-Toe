import React from 'react';
import Square from './Square';

const Board = ({ squares, onClick, disabled }) => {
  const boardClasses = ['board'];

  if (disabled) {
    boardClasses.push('board--disabled');
  }

  return (
    <div className={boardClasses.join(' ')}>
      {squares.map((square, i) => (
        <Square key={i} value={square} onClick={() => onClick(i)} />
      ))}
    </div>
  );
};

export default Board;
