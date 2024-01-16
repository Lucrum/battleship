const { Gameboard } = require("./gameboard");
const { Player } = require("./player");
const { renderBoards } = require("./ui");
const { getRandomInt } = require("./utils");
import "../styles/board.css";
import "../styles/general.css";

let gameStart = false;

const randomNames = ["SAM", "The Annihilator", "Conversation PGT-9000", "Nino"];

function newGame() {
  const playerBoard = new Gameboard();
  const aiBoard = new Gameboard();
  const ai = new Player(randomNames[getRandomInt(randomNames.length)], true);
  renderBoards(playerBoard, aiBoard);
}

newGame();
