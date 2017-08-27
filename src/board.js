// create a Board class
export class Board {
  constructor(numberOfRows, numberOfColumns, numberOfBombs) {
    this._numberOfBombs = numberOfBombs;
    this._numberOfTiles = numberOfRows * numberOfColumns;
    this._playerBoard = Board.generatePlayerBoard(numberOfRows, numberOfColumns);
    this._bombBoard = Board.generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs);
  }

  get playerBoard() {
    return this._playerBoard;
  }

  // Adds tile flipping ability
  flipTile(rowIndex, columnIndex) {
    if (this._playerBoard[rowIndex][columnIndex] !== ' ') {
      console.log('This tile has already been flipped!');
      return;
    } else if (this._bombBoard[rowIndex][columnIndex] === 'B') {
      this._playerBoard[rowIndex][columnIndex] = 'B';
    } else {
      this._playerBoard[rowIndex][columnIndex] = this.getNumberOfNeighborBombs(rowIndex, columnIndex);
    }
    this._numberOfTiles--;
  }

  // Add counter for how many bombs are around the flipped tile
  getNumberOfNeighborBombs(rowIndex, columnIndex) {
    // adds offset for each neighboring tile
    const neighborOffsets = [
      [-1, -1],
      [-1, 0],
      [-1, 1],
      [0, -1],
      [0, 1],
      [1, -1],
      [1, 0],
      [1, 1],
    ];
    const numberOfRows = this._bombBoard.length;
    const numberOfColumns = this._bombBoard[0].length;
    let numberOfBombs = 0;
    neighborOffsets.forEach(offset => {
      const neighborRowIndex = rowIndex + offset[0];
      const neighborColumnIndex = columnIndex + offset[1];
      if (neighborRowIndex >= 0 && neighborRowIndex < numberOfRows && neighborColumnIndex >=0 && neighborColumnIndex < numberOfColumns) {
        if (this._bombBoard[neighborRowIndex][neighborColumnIndex] === 'B') {
          numberOfBombs++;
        }
      }
    });
    return numberOfBombs;
  }

  // add method to inform user they won
  hasSafeTiles() {
    return this._numberOfTiles !== this._numberOfBombs;
  }

  // dynamically creates board
  print() {
    console.log(  this._playerBoard.map(row => row.join(' | ')).join('\n') );
  }

  // Dynamically Generate a Player Board
  static generatePlayerBoard(numberOfRows, numberOfColumns) {
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
  }

  // Dynamically Generate a Bomb Board
  static generateBombBoard(numberOfRows, numberOfColumns, numberOfBombs) {
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
  }
}
