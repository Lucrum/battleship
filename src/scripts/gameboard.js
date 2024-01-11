class Gameboard {
  constructor() {
    this.dimensions = 10; // standard Battleship board size
    this.board = new Array(this.dimensions)
      .fill(undefined)
      .map(() => new Array(this.dimensions).fill(undefined));
    this.ships = [];
  }

  // placing a piece horizontally always goes from left -> right
  // vertical placements will place top -> bottom
  placePiece(piece, y, x, vertical) {
    let validCoordinates = this.validatePlacement(piece.length, y, x, vertical);

    if (!validCoordinates) {
      return false;
    }
    this.ships.push(piece);
    let shipIndex = this.ships.length - 1;
    validCoordinates.forEach(([yCoord, xCoord]) => {
      this.board[yCoord][xCoord] = shipIndex;
    });
  }

  receiveAttack(x, y) {
    const shipIndex = this.checkPositions([[x, y]]);
    if (shipIndex !== undefined) {
      this.ships[shipIndex].hit();
      return true;
    } else {
      return false;
    }
  }

  allSunk() {
    for (const ship of this.ships) {
      if (!ship.isSunk()) {
        return false;
      }
    }
    return true;
  }

  // generates coordinates based on placement
  generateCoords(length, y, x, vertical) {
    let coords = [];

    for (let i = 0; i < length; i += 1) {
      if (vertical) {
        coords.push([y + i, x]);
      } else {
        coords.push([y, x + i]);
      }
    }
    return coords;
  }

  // checks a list of coordinates to see if there's a piece
  // returns the piece's index if so
  checkPositions(coords) {
    for (const [y, x] of coords) {
      if (this.board[y][x] !== undefined) {
        return this.board[y][x];
      }
    }
    return undefined;
  }

  // checks if a given coordinate will be out of bounds or overlap another piece
  // returns coordinates if it's valid
  validatePlacement(length, y, x, vertical) {
    // out of bounds
    if (vertical && (y + length >= this.dimensions || x >= this.dimensions)) {
      return false;
    } else if (x + length >= this.dimensions || y >= this.dimensions) {
      return false;
    }

    // checking for existing pieces by 'allocating' the space and checking each coord
    let coordinateList = this.generateCoords(length, y, x, vertical);

    if (this.checkPositions(coordinateList) === undefined) {
      return coordinateList;
    } else {
      return false;
    }
  }
}

module.exports = { Gameboard };
