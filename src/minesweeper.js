// dynamically creates board
const printBoard = board => {
  console.log( board.map(row => row.join(' | ')).join('\n') );
};

// Dynamically Generate a Player Board
const generatePlayerBoard = (numberOfRows, numberOfColumns) => {
  let board = [];

  // for loop iterating through numberOfRows
  for (let generateRows = 0; generateRows < numberOfRows; generateRows++) {
    // Create an empty row array
    let row = [];
    // for loop iterating through numberOfColumns
    for (let generateColumns = 0; generateColumns < numberOfColumns; generateColumns++) {
      // Push the empty spaces onto the row array
      row.push(' ');
    }
    // Push the row onto the board array
    board.push(row);
  }
  // Return the board array
  return board;
};

// Dynamically Generate a Bomb Board
const generateBombBoard = (numberOfRows, numberOfColumns, numberOfBombs) => {
  let board = [];

  // for loop iterating through numberOfRows
  for (let generateRows = 0; generateRows < numberOfRows; generateRows++) {
    // Create an empty row array
    let row = [];
    // for loop iterating through numberOfColumns
    for (let generateColumns = 0; generateColumns < numberOfColumns; generateColumns++) {
      // Push the empty spaces onto the row array
      row.push(null);
    }
    // Push the row onto the board array
    board.push(row);
  }

  let numberOfBombsPlaced = 0;
  // An important note: The code in your while loop has the potential to place bombs on top of already existing bombs. This will be fixed when you learn about control flow.
    while (numberOfBombsPlaced < numberOfBombs) {
      // Generate a random row index
      let randomRowIndex = Math.floor(Math.random() * numberOfRows);
      // Generate a random column index
      let randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
      // Place bomb at random row and column index and ncrement numberOfBombsPlaced
      if (board[randomRowIndex][randomColumnIndex] !== 'B') {
        board[randomRowIndex][randomColumnIndex] = 'B';
        numberOfBombsPlaced++;
      }
    }

  // Return the board array
  return board;
};

// Add counter for bombs between tiles
const getNumberOfNeighborBombs = () => {

};

// Test the playerBoard function
let playerBoard = generatePlayerBoard(3, 4);

// Test the bombBoard function
let bombBoard = generateBombBoard(3, 4, 5);

console.log('Player Board: ');
printBoard(playerBoard);
console.log('Bomb Board: ');
printBoard(bombBoard);
