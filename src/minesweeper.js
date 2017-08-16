const printBoard = board => {
  console.log('Current Board:');
  console.log(board[0].join(' | ')); // adds the | character between ' ' for the first row
  console.log(board[1].join(' | ')); // adds the | character between ' ' for the second row
  console.log(board[2].join(' | ')); // adds the | character between ' ' for the third row
};

// blank minesweeper board
const board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];

printBoard(board);

// change second element of first nested array to '1' representing a player's guess
board[0][1] = '1';

// change the third element of the third array to 'B' representing a bomb on the board
board[2][2] = 'B';

printBoard(board);
