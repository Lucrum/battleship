const playerBoardArea = document.querySelector("div#player-board");
const enemyBoardArea = document.querySelector("div#enemy-board");

function generatePlayerBoard(gameboard) {
  const cellList = [];
  for (let i = 0; i < gameboard.dimensions; i += 1) {
    for (let j = 0; j < gameboard.dimensions; j += 1) {
      const cell = document.createElement("div");
      cell.classList.add(
        "cell",
        gameboard.board[i][j] === undefined ? "empty" : "occupied"
      );
      cellList.push(cell);
    }
  }
  return cellList;
}

function generateEnemyBoard(gameboard) {
  const cellList = [];
  for (let i = 0; i < gameboard.dimensions; i += 1) {
    for (let j = 0; j < gameboard.dimensions; j += 1) {
      const cell = document.createElement("div");
      cell.classList.add(
        "cell",
        gameboard.board[i][j] === undefined ? "empty" : "hit"
      );
      cellList.push(cell);
    }
  }
  return cellList;
}

export function renderBoards(playerBoard, enemyBoard) {
  const player = generatePlayerBoard(playerBoard);
  const enemy = generateEnemyBoard(enemyBoard);

  playerBoardArea.replaceChildren(...player);
  enemyBoardArea.replaceChildren(...enemy);
}
