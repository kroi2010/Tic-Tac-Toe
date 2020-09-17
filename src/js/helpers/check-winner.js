const WINNING_COMBOS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

export function checkWinner(boardLayout) {
  for (let i = 0; i < WINNING_COMBOS.length; i++) {
    const [a, b, c] = WINNING_COMBOS[i];
    if (
      boardLayout[a] &&
      boardLayout[a] === boardLayout[b] &&
      boardLayout[a] === boardLayout[c]
    ) {
      return boardLayout[a];
    }
  }

  return null;
}
