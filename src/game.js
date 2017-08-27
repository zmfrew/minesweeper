// create a Game class
class Game {
  constructor(numberOfRows, numberOfColumns, numberOfBombs) {
  this._board = new Board(numberOfRows, numberOfColumns, numberOfBombs)
  }

  playMove(rowIndex, columnIndex) {
    this._board.flipTile(rowIndex, columnIndex);
    if (this._board.playerBoard[rowIndex][columnIndex] === 'B') {
      console.log('Bomb! Game over! Try again.');
      this._board.print();
    } else if (!this._board.hasSafeTiles()) {
      console.log('Congratulations, you won!');
      this._board.print();
    } else {
      console.log('Current board:');
      this._board.print();
    }
  }

}
