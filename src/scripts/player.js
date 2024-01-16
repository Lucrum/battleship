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

  randomMove(attackFunction) {
    let [x, y] = this.randomCoordinates();
    while (attackFunction(x, y) !== true) {
      [x, y] = this.randomCoordinates();
    }
  }

  randomPlacement(piece, placePiece) {
    let [x, y] = this.randomCoordinates();
    let vertical = getRandomInt(2) ? true : false; // if 0, false, if 1, true

    while (placePiece(piece, x, y, vertical) !== true) {
      [x, y] = this.randomCoordinates();
      vertical = getRandomInt(2) ? true : false;
    }
  }

  randomCoordinates() {
    return [getRandomInt(10), getRandomInt(10)];
  }
}

module.exports = {
  Player,
};
