const gameboard = require("../scripts/gameboard");
const ships = require("../scripts/ship");

describe("gameboard", () => {
  beforeEach(() => {
    board = new gameboard.Gameboard();
    shipOne = new ships.Ship(3);
    board.placePiece(shipOne, 0, 0, false);
  });

  test("cannot place invalid pieces", () => {
    shipOverlap = new ships.Ship(2);
    shipOutOfY = new ships.Ship(4);
    shipOutOfX = new ships.Ship(3);
    expect(board.placePiece(shipOverlap, 0, 1, true)).toBe(false);
    expect(board.placePiece(shipOutOfY, 7, 5, true)).toBe(false);
    expect(board.placePiece(shipOutOfX, 3, 8, false)).toBe(false);
  });

  test("can receive attacks", () => {
    expect(board.receiveAttack(1, 2)).toBe(false);
    expect(board.receiveAttack(0, 0)).toBe(true);
  });

  test("cannot receive repeated attacks", () => {
    expect(board.receiveAttack(0, 0)).toBe(true);
    expect(board.receiveAttack(0, 0)).toBe(false);
  });

  test("reports on whether all ships have been sunk", () => {
    expect(board.allSunk()).toBe(false);
    board.receiveAttack(0, 0);
    board.receiveAttack(0, 1);
    board.receiveAttack(0, 2);
    expect(board.allSunk()).toBe(true);
  });
});
