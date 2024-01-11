/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/gameboard.js":
/*!**********************************!*\
  !*** ./src/scripts/gameboard.js ***!
  \**********************************/
/***/ ((module) => {

eval("class Gameboard {\n  constructor() {\n    this.dimensions = 10; // standard Battleship board size\n    this.board = new Array(this.dimensions)\n      .fill(undefined)\n      .map(() => new Array(this.dimensions).fill(undefined));\n    this.ships = [];\n  }\n\n  // placing a piece horizontally always goes from left -> right\n  // vertical placements will place top -> bottom\n  placePiece(piece, y, x, vertical) {\n    let validCoordinates = this.validatePlacement(piece.length, y, x, vertical);\n\n    if (!validCoordinates) {\n      return false;\n    }\n    this.ships.push(piece);\n    let shipIndex = this.ships.length - 1;\n    validCoordinates.forEach(([yCoord, xCoord]) => {\n      this.board[yCoord][xCoord] = shipIndex;\n    });\n  }\n\n  receiveAttack(x, y) {\n    const shipIndex = this.checkPositions([[x, y]]);\n    if (shipIndex !== undefined) {\n      this.ships[shipIndex].hit();\n      return true;\n    } else {\n      return false;\n    }\n  }\n\n  // generates coordinates based on placement\n  generateCoords(length, y, x, vertical) {\n    let coords = [];\n\n    for (let i = 0; i < length; i += 1) {\n      if (vertical) {\n        coords.push([y + i, x]);\n      } else {\n        coords.push([y, x + i]);\n      }\n    }\n    return coords;\n  }\n\n  // checks a list of coordinates to see if there's a piece\n  // returns the piece's index if so\n  checkPositions(coords) {\n    for (const [y, x] of coords) {\n      if (this.board[y][x] !== undefined) {\n        return this.board[y][x];\n      }\n    }\n    return undefined;\n  }\n\n  // checks if a given coordinate will be out of bounds or overlap another piece\n  // returns coordinates if it's valid\n  validatePlacement(length, y, x, vertical) {\n    // out of bounds\n    if (vertical && (y + length >= this.dimensions || x >= this.dimensions)) {\n      return false;\n    } else if (x + length >= this.dimensions || y >= this.dimensions) {\n      return false;\n    }\n\n    // checking for existing pieces by 'allocating' the space and checking each coord\n    let coordinateList = this.generateCoords(length, y, x, vertical);\n\n    if (this.checkPositions(coordinateList) === undefined) {\n      return coordinateList;\n    } else {\n      return false;\n    }\n  }\n}\n\nmodule.exports = { Gameboard };\n\n\n//# sourceURL=webpack://webpack-template/./src/scripts/gameboard.js?");

/***/ }),

/***/ "./src/scripts/logic.js":
/*!******************************!*\
  !*** ./src/scripts/logic.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const { Gameboard } = __webpack_require__(/*! ./gameboard */ \"./src/scripts/gameboard.js\");\nconst { Ship } = __webpack_require__(/*! ./ship */ \"./src/scripts/ship.js\");\n\nconst game = new Gameboard();\n\n// console.log(game.board);\n\n\n//# sourceURL=webpack://webpack-template/./src/scripts/logic.js?");

/***/ }),

/***/ "./src/scripts/ship.js":
/*!*****************************!*\
  !*** ./src/scripts/ship.js ***!
  \*****************************/
/***/ ((module) => {

eval("class Ship {\n  constructor(length) {\n    this.length = length;\n    this.sunk = false;\n    this.hits = 0;\n  }\n\n  hit() {\n    this.hits += 1;\n  }\n\n  isSunk() {\n    return this.hits === this.length;\n  }\n}\n\nmodule.exports = {\n  Ship,\n};\n\n\n//# sourceURL=webpack://webpack-template/./src/scripts/ship.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/logic.js");
/******/ 	
/******/ })()
;