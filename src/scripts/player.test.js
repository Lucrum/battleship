const player = require("./player");

describe("ai", () => {
  const mockGameboard = jest.fn();
  mockGameboard.mockReturnValueOnce(false).mockReturnValueOnce(true);
  beforeEach(() => {
    computerPlayer = new player.Player(true);
  });
  test("ai plays a move until the move is valid", () => {
    computerPlayer.takeTurn(mockGameboard);
    expect(mockGameboard.mock.calls.length).toBe(2);
  });
});
