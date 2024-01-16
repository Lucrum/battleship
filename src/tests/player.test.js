const player = require("../scripts/player");
const ship = require("../scripts/ship");

describe("ai", () => {
  const mockAttackFunction = jest.fn();
  const mockPlaceFunction = jest.fn();
  mockAttackFunction.mockReturnValueOnce(false).mockReturnValueOnce(true);
  mockPlaceFunction
    .mockReturnValueOnce(false)
    .mockReturnValueOnce(false)
    .mockReturnValueOnce(true);
  beforeEach(() => {
    computerPlayer = new player.Player("SAM", true);
  });
  test("ai plays a move until the move is valid", () => {
    computerPlayer.takeTurn(mockAttackFunction);
    expect(mockAttackFunction.mock.calls.length).toBe(2);
  });

  test("ai places pieces until placement is valid", () => {
    const sampleShip = new ship.Ship(3);
    computerPlayer.randomPlacement(sampleShip, mockPlaceFunction);
    expect(mockPlaceFunction.mock.calls[0][0]).toBe(sampleShip);
    expect(mockPlaceFunction.mock.calls.length).toBe(3);
  });
});
