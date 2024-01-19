import { Gameboard } from "./gameboard";
import { Player } from "./player";
import { getRandomInt } from "./utils";
import { Ship } from "./ship";
import {
  renderBoards,
  renderMessage,
  updateCellAttack,
  updateCellMiss,
} from "./ui";
import "../styles/board.css";
import "../styles/general.css";

let playerTurn = false;
let gameStarted = false;

const randomNames = ["SAM", "The Annihilator", "Conversation PGT-9000", "Nino"];
const newBoardButton = document.querySelector("button#new-board");
newBoardButton.addEventListener("click", () => {
  resetBoard();
});

let ai = new Player(randomNames[getRandomInt(randomNames.length)], true);
let aiBoard = generateBoard(ai, new Gameboard());
let playerBoard = generateBoard(ai, new Gameboard());

function placePiece(cell) {
  console.log(cell);
}

function aiTurn() {
  let [row, col, hit] = ai.randomMove(playerBoard);
  const cell = document.querySelector(
    `div.cell[data-row="${row}"][data-col="${col}"]`
  );
  if (hit) {
    updateCellAttack(cell);
    if (playerBoard.allSunk()) {
      renderMessage("You lose!");
    } else {
      aiTurn();
    }
  } else {
    updateCellMiss(cell);
    playerTurn = true;
  }
}

function playerAttackPosition(cell) {
  if (playerTurn && cell.dataset.hit == undefined) {
    newBoardButton.textContent = "New game";
    const hitStatus = aiBoard.receiveAttack(cell.dataset.row, cell.dataset.col);
    if (hitStatus[0]) {
      updateCellAttack(cell);
      if (aiBoard.allSunk()) {
        renderMessage("You win!");
        playerTurn = false;
      } else if (hitStatus[1]) {
        renderMessage("SHIP SUNKEN");
      } else {
        renderMessage(`${cell.dataset.row},${cell.dataset.col} HIT`);
      }
    } else {
      renderMessage(`${cell.dataset.row},${cell.dataset.col} MISS`);
      updateCellMiss(cell);
      playerTurn = false;
      aiTurn();
    }
    cell.dataset.hit = true;
  }
}

function startGame() {
  playerTurn = true;
  gameStarted = true;
}

function resetBoard() {
  if (gameStarted) {
    newGame();
  } else {
    playerBoard = generateBoard(ai, new Gameboard());
    renderBoards(playerBoard, aiBoard, placePiece, playerAttackPosition);
  }
}

function newGame() {
  aiBoard = generateBoard(ai, new Gameboard());
  playerBoard = generateBoard(ai, new Gameboard());

  renderBoards(playerBoard, aiBoard, placePiece, playerAttackPosition);
  newBoardButton.textContent = "New board";
  startGame();
}

function generateBoard(ai, board) {
  const pieces = [
    new Ship(4),
    new Ship(3),
    new Ship(3),
    new Ship(2),
    new Ship(2),
    new Ship(2),
    new Ship(1),
    new Ship(1),
    new Ship(1),
    new Ship(1),
  ];

  ai.randomPlacement(pieces, board);
  return board;
}

newGame();
