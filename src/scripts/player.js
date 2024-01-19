const { getRandomInt } = require("./utils");

class Player {
  constructor(name) {
    this.name = name;
  }

  // ai will randomly choose a spot on the board to attack
  randomMove(board) {
    let [y, x] = this.randomCoordinates();
    let hit = board.receiveAttack(y, x);
    while (hit == undefined) {
      [y, x] = this.randomCoordinates();
      hit = board.receiveAttack(y, x);
    }
    return [y, x, hit[0]];
  }

  randomPlacement(pieces, board) {
    let [x, y] = this.randomCoordinates();
    let vertical = getRandomInt(2) ? true : false; // if 0, false, if 1, true
    for (let i = 0; i < pieces.length; i += 1) {
      while (board.placePiece(pieces[i], x, y, vertical) !== true) {
        [x, y] = this.randomCoordinates();
        vertical = getRandomInt(2) ? true : false;
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
