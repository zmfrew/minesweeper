
// variable showing a blank line in a board
const blankLine = '  |   |  ';

// title of blank game
console.log("This is what an empty board would look like:");

// creates a blank board by logging the blank line 3 times
console.log(blankLine);
console.log(blankLine);
console.log(blankLine);

// adds a guessline simulating a random guess clicking the first square in minesweeper
const guessLine = '1 |   |  ';

// adds a bomb (mine) line simulating a click on a bomb
const bombLine = '  | B |  ';

// title of simulated game with guess and bomb
console.log("This is what a board with a guess and a bomb on it would look like:");

// creates board with a guess and bomb
console.log(guessLine);
console.log(bombLine);
console.log(blankLine);
