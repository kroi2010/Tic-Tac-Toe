export default class ComputerAI {
  constructor() {
    this.allWinningCombos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    this.computerMove = 'o';
  }

  makeMove = (board) => {
    let move = this.winningMove(board);

    if (!move) move = this.randomMove(board);

    return move;
  };

  winningMove = (board) => {
    for (let i = 0; i < this.allWinningCombos.length; i++) {
      let winningLine = 0;
      let move = null;

      for (let j = 0; j < this.allWinningCombos[i].length; j++) {
        if (board[this.allWinningCombos[i][j]] === this.computerMove) {
          winningLine++;
        } else {
          move = this.allWinningCombos[i][j];
        }
      }

      if (winningLine === 2 && !board[move]) {
        return move;
      }
    }

    return null;
  };

  randomMove = (board) => {
    const move = Math.floor(Math.random() * board.length);

    if (board[move]) {
      return this.randomMove(board);
    }

    return move;
  };
}
