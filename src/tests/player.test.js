const player = require("../scripts/player");

describe("ai", () => {
  const mockGameboard = jest.fn();
  mockAttackFunction.mockReturnValueOnce(false).mockReturnValueOnce(true);
  beforeEach(() => {
    computerPlayer = new player.Player(true);
  });
  test("ai plays a move until the move is valid", () => {
    computerPlayer.takeTurn(mockAttackFunction);
    expect(mockAttackFunction.mock.calls.length).toBe(2);
  });
});
