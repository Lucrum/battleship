const ship = require("../scripts/ship");

describe("ship", () => {
  beforeEach(() => {
    testShip = new ship.Ship(2);
  });
  test("ship can sink", () => {
    testShip.hit();
    testShip.hit();
    expect(testShip.isSunk()).toBe(true);
  });
});
