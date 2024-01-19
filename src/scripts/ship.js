class Ship {
  constructor(length) {
    this.length = length;
    this.sunk = false;
    this.hits = 0;
  }

  hit() {
    this.hits += 1;
  }

  isSunk() {
    return this.hits === this.length;
  }
}

module.exports = {
  Ship,
};