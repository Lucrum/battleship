class Gameboard {
  constructor() {
    this.dimensions = 10; // standard Battleship board size
    this.board = new Array(this.dimensions)
      .fill(undefined)
      .map(() => new Array(this.dimensions).fill(undefined));
    this.ships = [];
    this.hitPositions = [];
  }

  // placing a piece horizontally always goes from left -> right
  // vertical placements will place top -> bottom
  placePiece(piece, y, x, vertical) {
    let validCoordinates = this.validatePlacement(piece.length, y, x, vertical);

    if (!validCoordinates) {
      console.log("reject piece");
      return false;
    }
    this.ships.push(piece);
    let shipIndex = this.ships.length - 1;

    for (const [[yCoord, xCoord], real] of validCoordinates) {
      if (real) {
        this.board[yCoord][xCoord] = shipIndex;
      }
    }
    console.log("placed piece");
    return true;
  }

  // checks if coordinates were already hit
  searchCoords(y, x) {
    for (const [a, b] of this.hitPositions) {
      if (a === y && b === x) {
        return true;
      }
    }
    return false;
  }

  // add valid attacks to hit positions, reject duplicate ones
  // only returns true if it hits a ship
  receiveAttack(y, x) {
    if (this.searchCoords(y, x)) {
      return false;
    } else {
      this.hitPositions.push([y, x]);
    }
    const shipIndex = this.checkPositions([[y, x]]);
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

  addEndcaps(length, y, x, vertical) {
    const coords = [];
    if (vertical) {
      if (y > 0) {
        // checking before the ship
        coords.push([[y - 1, x], false]);
        if (x > 0) {
          coords.push([[y - 1, x - 1], false]);
        }
        if (x < 9) {
          coords.push([[y - 1, x + 1], false]);
        }
      }
      if (y < 9) {
        // checking after the ship
        coords.push([[y + length, x], false]);
        if (x > 0) {
          coords.push([[y + length, x - 1], false]);
        }
        if (x < 9) {
          coords.push([[y + length, x + 1], false]);
        }
      }
    } else {
      if (x > 0) {
        // checking before the ship
        coords.push([[y, x - 1], false]);
        if (y > 0) {
          coords.push([[y - 1, x - 1], false]);
        }
        if (y < 9) {
          coords.push([[y + 1, x - 1], false]);
        }
      }
      if (x < 9) {
        // checking after the ship
        coords.push([[y, x + length], false]);
        if (y > 0) {
          coords.push([[y - 1, x + length], false]);
        }
        if (y < 9) {
          coords.push([[y + 1, x + length], false]);
        }
      }
    }
    console.log("endcaps", coords);
    return coords;
  }

  // generates coordinates based on placement
  // coordinates in the format [[row, column], <adjacency check boolean>]
  generateCoords(length, y, x, vertical) {
    let coords = [];

    for (let i = 0; i < length; i += 1) {
      if (vertical) {
        coords.push([[y + i, x], true]);
        if (x > 0) {
          coords.push([[y + i, x - 1], false]);
        }
        if (x < 9) {
          coords.push([[y + i, x + 1], false]);
        }
      } else {
        coords.push([[y, x + i], true]);
        if (y > 0) {
          coords.push([[y - 1, x + i], false]);
        }
        if (y < 9) {
          coords.push([[y + 1, x + i], false]);
        }
      }
    }
    coords.push(...this.addEndcaps(length, y, x, vertical));
    return coords;
  }

  // checks a list of coordinates to see if there's a piece
  // returns the piece's index if so
  checkPositions(coords) {
    for (const [[y, x], _] of coords) {
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
    console.log(coordinateList);

    if (this.checkPositions(coordinateList) === undefined) {
      return coordinateList;
    } else {
      return false;
    }
  }
}

module.exports = { Gameboard };
