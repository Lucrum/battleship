const playerBoardArea = document.querySelector("div#player-board");
const enemyBoardArea = document.querySelector("div#enemy-board");

function generateBoard(gameboard, player, playerClickFunction) {
  const cellList = [];
  for (let i = 0; i < gameboard.dimensions; i += 1) {
    for (let j = 0; j < gameboard.dimensions; j += 1) {
      const cell = document.createElement("div");
      cell.classList.add("cell");
      if (player) {
        cell.classList.add(
          gameboard.board[i][j] === undefined ? "empty" : "occupied"
        );
      } else {
        // render as enemy
      }
      cell.dataset.row = i;
      cell.dataset.col = j;
      cell.textContent = gameboard.board[i][j];
      cell.addEventListener("click", (e) => playerClickFunction(e.target));
      cellList.push(cell);
    }
  }
  return cellList;
}

export function updateCellAttack(cell) {
  cell.classList.add("hit");
  cell.textContent = "X";
}

export function updateCellMiss(cell) {
  cell.classList.add("miss");
  cell.textContent = ".";
}

export function renderBoards(
  playerBoard,
  enemyBoard,
  playerSelfFunction,
  playerEnemyFunction
) {
  const player = generateBoard(playerBoard, true, playerSelfFunction);
  const enemy = generateBoard(enemyBoard, false, playerEnemyFunction);

  playerBoardArea.replaceChildren(...player);
  enemyBoardArea.replaceChildren(...enemy);
}
