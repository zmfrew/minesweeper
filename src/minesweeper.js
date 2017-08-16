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
    while (numberOfBombsPlaced < numberOfBombs) {
      // Generate a random row index
      randomRowIndex = Math.floor(Math.random() * numberOfRows);
      // Generate a random column index
      randomColumnIndex = Math.floor(Math.random() * numberOfColumns);
      // Place the bomb at that row and columns
      board[randomRowIndex][randomColumnIndex] = 'B';
      // Increment numberOfBombsPlaced
      if (board[randomRowIndex][randomColumnIndex] !== 'B') {
        board[randomRowIndex][randomColumnIndex] = 'B';
        numberOfBombsPlaced++;
      }
    }

  // Return the board array
  return board;
};
