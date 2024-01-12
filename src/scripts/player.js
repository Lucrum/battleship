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
