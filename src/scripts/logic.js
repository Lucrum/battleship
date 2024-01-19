import { Gameboard } from "./gameboard";
import { Player } from "./player";
import { getRandomInt } from "./utils";
import { Ship } from "./ship";
import { renderBoards, updateCellAttack, updateCellMiss } from "./ui";
import "../styles/board.css";
import "../styles/general.css";

let playerTurn = false;

const randomNames = ["SAM", "The Annihilator", "Conversation PGT-9000", "Nino"];
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
  } else {
    updateCellMiss(cell);
  }
  playerTurn = true;
}

function playerAttackPosition(cell) {
  console.log(cell, cell.dataset.row, cell.dataset.col);
  if (playerTurn && cell.dataset.hit == undefined) {
    console.log("attacking");
    if (aiBoard.receiveAttack(cell.dataset.row, cell.dataset.col)) {
      updateCellAttack(cell);
    } else {
      updateCellMiss(cell);
    }
    cell.dataset.hit = true;
    playerTurn = false;
    aiTurn();
  }
}

function startGame() {
  playerTurn = true;
  console.log(playerTurn);
}

function newGame() {
  ai = new Player(randomNames[getRandomInt(randomNames.length)], true);
  aiBoard = generateBoard(ai, new Gameboard());
  playerBoard = generateBoard(ai, new Gameboard());

  renderBoards(playerBoard, aiBoard, placePiece, playerAttackPosition);
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
