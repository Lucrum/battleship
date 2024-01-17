import { Gameboard } from "./gameboard";
import { Player } from "./player";
import { getRandomInt } from "./utils";
import { Ship } from "./ship";
import { renderBoards } from "./ui";
import "../styles/board.css";
import "../styles/general.css";

let gameStart = false;

const randomNames = ["SAM", "The Annihilator", "Conversation PGT-9000", "Nino"];

function newGame() {
  const playerBoard = new Gameboard();
  const ai = new Player(randomNames[getRandomInt(randomNames.length)], true);
  let aiBoard = generateBoard(ai, new Gameboard());

  renderBoards(playerBoard, aiBoard);
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
