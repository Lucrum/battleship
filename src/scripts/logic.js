const { Gameboard } = require("./gameboard");
const { Ship } = require("./ship");

const game = new Gameboard();
const shipOne = new Ship(3);
game.placePiece(shipOne, 0, 0, false);

console.log(game.board);

const shipTwo = new Ship(4);
game.placePiece(shipTwo, 0, 1, true);

// console.log(game.board);
