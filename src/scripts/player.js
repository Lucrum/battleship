class Player {
  constructor(computer) {
    this.computer = computer;
  }

  takeTurn(attackFunction) {
    // ai will randomly choose a spot on the board to attack
    if (this.computer) {
      this.randomMove(attackFunction);
      return true;
    } else {
      // wait for player to pick
      // probably activate the board somehow
      gameBoard.allowPlayerInput();
    }
  }

  randomMove(attackFunction) {
    let x = this.getRandomInt(10);
    let y = this.getRandomInt(10);
    while (attackFunction(x, y) !== true) {
      x = this.getRandomInt(10);
      y = this.getRandomInt(10);
    }
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
}

module.exports = {
  Player,
};
