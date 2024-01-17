const { getRandomInt } = require("./utils");

class Player {
  constructor(name, computer) {
    this.name = name;
    this.computer = computer;
  }

  takeTurn(attackFunction) {
    // ai will randomly choose a spot on the board to attack
    if (this.computer) {
      this.randomMove(attackFunction);
      return true;
    }
  }

  randomMove(board) {
    let [x, y] = this.randomCoordinates();
    while (board.receiveAttack(x, y) !== true) {
      [x, y] = this.randomCoordinates();
    }
  }

  randomPlacement(pieces, board) {
    let [x, y] = this.randomCoordinates();
    let vertical = getRandomInt(2) ? true : false; // if 0, false, if 1, true
    for (let i = 0; i < pieces.length; i += 1) {
      console.log("placing piece", pieces[i], "on board", board);
      while (board.placePiece(pieces[i], x, y, vertical) !== true) {
        [x, y] = this.randomCoordinates();
        vertical = getRandomInt(2) ? true : false;
        console.log("placing piece at", x, y, vertical);
      }
    }
  }

  randomCoordinates() {
    return [getRandomInt(10), getRandomInt(10)];
  }
}

module.exports = {
  Player,
};
