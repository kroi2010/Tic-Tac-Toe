import React from 'react';

const Square = ({ value, onClick }) => {
  const squareClasses = ['square'];

  if (value) {
    squareClasses.push(`square--${value}`);
  }

  return (
    <button className={squareClasses.join(' ')} onClick={onClick}></button>
  );
};

export default Square;
