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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/board.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/board.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `div.board {\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n}\n\ndiv#boards {\n  display: flex;\n  justify-content: space-between;\n  margin: 100px;\n  gap: 50px;\n  flex-wrap: wrap;\n}\n\ndiv.cell {\n  height: 40px;\n  width: 40px;\n  border: 1px solid black;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\ndiv.cell.empty {\n  background-color: whitesmoke;\n}\n\ndiv.cell.occupied {\n  background-color: lightblue;\n}\n\ndiv.cell.hit {\n  background-color: red;\n}\n\ndiv.cell.miss {\n  background-color: lightseagreen;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-template/./src/styles/board.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/general.css":
/*!**********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/general.css ***!
  \**********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `body {\n  margin: 0px;\n}\n\ndiv#info {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\nh1,\np#messages {\n  text-align: center;\n}\n\np#messages {\n  height: 1rem;\n  overflow: hidden;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-template/./src/styles/general.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://webpack-template/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack-template/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/board.css":
/*!******************************!*\
  !*** ./src/styles/board.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_board_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./board.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/board.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_board_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_board_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_board_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_board_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack-template/./src/styles/board.css?");

/***/ }),

/***/ "./src/styles/general.css":
/*!********************************!*\
  !*** ./src/styles/general.css ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_general_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./general.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/general.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_general_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_general_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_general_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_general_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack-template/./src/styles/general.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack-template/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack-template/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack-template/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack-template/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack-template/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack-template/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/scripts/gameboard.js":
/*!**********************************!*\
  !*** ./src/scripts/gameboard.js ***!
  \**********************************/
/***/ ((module) => {

eval("class Gameboard {\n  constructor() {\n    this.dimensions = 10; // standard Battleship board size\n    this.board = new Array(this.dimensions)\n      .fill(undefined)\n      .map(() => new Array(this.dimensions).fill(undefined));\n    this.ships = [];\n    this.hitPositions = [];\n  }\n\n  // placing a piece horizontally always goes from left -> right\n  // vertical placements will place top -> bottom\n  placePiece(piece, y, x, vertical) {\n    let validCoordinates = this.validatePlacement(piece.length, y, x, vertical);\n\n    if (!validCoordinates) {\n      return false;\n    }\n    this.ships.push(piece);\n    let shipIndex = this.ships.length - 1;\n\n    for (const [[yCoord, xCoord], real] of validCoordinates) {\n      if (real) {\n        this.board[yCoord][xCoord] = shipIndex;\n      }\n    }\n    return true;\n  }\n\n  // checks if coordinates were already hit\n  searchCoords(y, x) {\n    for (const [a, b] of this.hitPositions) {\n      if (a === y && b === x) {\n        return true;\n      }\n    }\n    return false;\n  }\n\n  // add valid attacks to hit positions, reject duplicate ones\n  // returns true for hit, false for miss, undefined for duplicates\n  // returns [hit status, sink status]\n  receiveAttack(y, x) {\n    if (this.searchCoords(y, x)) {\n      return undefined;\n    } else {\n      this.hitPositions.push([y, x]);\n    }\n    const shipIndex = this.checkPosition(y, x);\n    if (shipIndex !== undefined) {\n      this.ships[shipIndex].hit();\n      if (this.ships[shipIndex].isSunk()) {\n        return [true, true];\n      }\n      return [true, false];\n    } else {\n      return [false, false];\n    }\n  }\n\n  allSunk() {\n    for (const ship of this.ships) {\n      if (!ship.isSunk()) {\n        return false;\n      }\n    }\n    return true;\n  }\n\n  addEndcaps(length, y, x, vertical) {\n    const coords = [];\n    if (vertical) {\n      if (y > 0) {\n        // checking before the ship\n        coords.push([[y - 1, x], false]);\n        if (x > 0) {\n          coords.push([[y - 1, x - 1], false]);\n        }\n        if (x < 9) {\n          coords.push([[y - 1, x + 1], false]);\n        }\n      }\n      if (y < 9) {\n        // checking after the ship\n        coords.push([[y + length, x], false]);\n        if (x > 0) {\n          coords.push([[y + length, x - 1], false]);\n        }\n        if (x < 9) {\n          coords.push([[y + length, x + 1], false]);\n        }\n      }\n    } else {\n      if (x > 0) {\n        // checking before the ship\n        coords.push([[y, x - 1], false]);\n        if (y > 0) {\n          coords.push([[y - 1, x - 1], false]);\n        }\n        if (y < 9) {\n          coords.push([[y + 1, x - 1], false]);\n        }\n      }\n      if (x < 9) {\n        // checking after the ship\n        coords.push([[y, x + length], false]);\n        if (y > 0) {\n          coords.push([[y - 1, x + length], false]);\n        }\n        if (y < 9) {\n          coords.push([[y + 1, x + length], false]);\n        }\n      }\n    }\n    return coords;\n  }\n\n  // generates coordinates based on placement\n  // coordinates in the format [[row, column], <adjacency check boolean>]\n  generateCoords(length, y, x, vertical) {\n    let coords = [];\n\n    for (let i = 0; i < length; i += 1) {\n      if (vertical) {\n        coords.push([[y + i, x], true]);\n        if (x > 0) {\n          coords.push([[y + i, x - 1], false]);\n        }\n        if (x < 9) {\n          coords.push([[y + i, x + 1], false]);\n        }\n      } else {\n        coords.push([[y, x + i], true]);\n        if (y > 0) {\n          coords.push([[y - 1, x + i], false]);\n        }\n        if (y < 9) {\n          coords.push([[y + 1, x + i], false]);\n        }\n      }\n    }\n    coords.push(...this.addEndcaps(length, y, x, vertical));\n    return coords;\n  }\n\n  // checks a single coordinate point\n  // returns piece's index if success\n  checkPosition(y, x) {\n    return this.board[y][x];\n  }\n\n  // checks a list of coordinates to see if there's a piece\n  // returns the piece's index if so\n  checkPositions(coords) {\n    for (const [[y, x], _] of coords) {\n      if (this.board[y][x] !== undefined) {\n        return this.board[y][x];\n      }\n    }\n    return undefined;\n  }\n\n  // checks if a given coordinate will be out of bounds or overlap another piece\n  // returns coordinates if it's valid\n  validatePlacement(length, y, x, vertical) {\n    // out of bounds\n    if (vertical && (y + length >= this.dimensions || x >= this.dimensions)) {\n      return false;\n    } else if (x + length >= this.dimensions || y >= this.dimensions) {\n      return false;\n    }\n\n    // checking for existing pieces by 'allocating' the space and checking each coord\n    let coordinateList = this.generateCoords(length, y, x, vertical);\n\n    if (this.checkPositions(coordinateList) === undefined) {\n      return coordinateList;\n    } else {\n      return false;\n    }\n  }\n}\n\nmodule.exports = { Gameboard };\n\n\n//# sourceURL=webpack://webpack-template/./src/scripts/gameboard.js?");

/***/ }),

/***/ "./src/scripts/logic.js":
/*!******************************!*\
  !*** ./src/scripts/logic.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ \"./src/scripts/gameboard.js\");\n/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_gameboard__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ \"./src/scripts/player.js\");\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_player__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ \"./src/scripts/utils.js\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_utils__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ship */ \"./src/scripts/ship.js\");\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ship__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui */ \"./src/scripts/ui.js\");\n/* harmony import */ var _styles_board_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/board.css */ \"./src/styles/board.css\");\n/* harmony import */ var _styles_general_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/general.css */ \"./src/styles/general.css\");\n\n\n\n\n\n\n\n\nlet playerTurn = false;\nlet gameStarted = false;\n\nconst randomNames = [\"SAM\", \"The Annihilator\", \"Conversation PGT-9000\", \"Nino\"];\nconst newBoardButton = document.querySelector(\"button#new-board\");\nnewBoardButton.addEventListener(\"click\", () => {\n  resetBoard();\n});\n\nlet ai = new _player__WEBPACK_IMPORTED_MODULE_1__.Player(randomNames[(0,_utils__WEBPACK_IMPORTED_MODULE_2__.getRandomInt)(randomNames.length)], true);\nlet aiBoard = generateBoard(ai, new _gameboard__WEBPACK_IMPORTED_MODULE_0__.Gameboard());\nlet playerBoard = generateBoard(ai, new _gameboard__WEBPACK_IMPORTED_MODULE_0__.Gameboard());\n\nfunction placePiece(cell) {\n  console.log(cell);\n}\n\nfunction aiTurn() {\n  let [row, col, hit] = ai.randomMove(playerBoard);\n  const cell = document.querySelector(\n    `div.cell[data-row=\"${row}\"][data-col=\"${col}\"]`\n  );\n  if (hit) {\n    (0,_ui__WEBPACK_IMPORTED_MODULE_4__.updateCellAttack)(cell);\n    if (playerBoard.allSunk()) {\n      (0,_ui__WEBPACK_IMPORTED_MODULE_4__.renderMessage)(\"You lose!\");\n    } else {\n      aiTurn();\n    }\n  } else {\n    (0,_ui__WEBPACK_IMPORTED_MODULE_4__.updateCellMiss)(cell);\n    playerTurn = true;\n  }\n}\n\nfunction playerAttackPosition(cell) {\n  if (playerTurn && cell.dataset.hit == undefined) {\n    newBoardButton.textContent = \"New game\";\n    const hitStatus = aiBoard.receiveAttack(cell.dataset.row, cell.dataset.col);\n    if (hitStatus[0]) {\n      (0,_ui__WEBPACK_IMPORTED_MODULE_4__.updateCellAttack)(cell);\n      if (aiBoard.allSunk()) {\n        (0,_ui__WEBPACK_IMPORTED_MODULE_4__.renderMessage)(\"You win!\");\n        playerTurn = false;\n      } else if (hitStatus[1]) {\n        (0,_ui__WEBPACK_IMPORTED_MODULE_4__.renderMessage)(\"SHIP SUNKEN\");\n      } else {\n        (0,_ui__WEBPACK_IMPORTED_MODULE_4__.renderMessage)(`${cell.dataset.row},${cell.dataset.col} HIT`);\n      }\n    } else {\n      (0,_ui__WEBPACK_IMPORTED_MODULE_4__.renderMessage)(`${cell.dataset.row},${cell.dataset.col} MISS`);\n      (0,_ui__WEBPACK_IMPORTED_MODULE_4__.updateCellMiss)(cell);\n      playerTurn = false;\n      aiTurn();\n    }\n    cell.dataset.hit = true;\n  }\n}\n\nfunction startGame() {\n  playerTurn = true;\n  gameStarted = true;\n}\n\nfunction resetBoard() {\n  if (gameStarted) {\n    newGame();\n  } else {\n    playerBoard = generateBoard(ai, new _gameboard__WEBPACK_IMPORTED_MODULE_0__.Gameboard());\n    (0,_ui__WEBPACK_IMPORTED_MODULE_4__.renderBoards)(playerBoard, aiBoard, placePiece, playerAttackPosition);\n  }\n}\n\nfunction newGame() {\n  aiBoard = generateBoard(ai, new _gameboard__WEBPACK_IMPORTED_MODULE_0__.Gameboard());\n  playerBoard = generateBoard(ai, new _gameboard__WEBPACK_IMPORTED_MODULE_0__.Gameboard());\n\n  (0,_ui__WEBPACK_IMPORTED_MODULE_4__.renderBoards)(playerBoard, aiBoard, placePiece, playerAttackPosition);\n  newBoardButton.textContent = \"New board\";\n  startGame();\n}\n\nfunction generateBoard(ai, board) {\n  const pieces = [\n    new _ship__WEBPACK_IMPORTED_MODULE_3__.Ship(4),\n    new _ship__WEBPACK_IMPORTED_MODULE_3__.Ship(3),\n    new _ship__WEBPACK_IMPORTED_MODULE_3__.Ship(3),\n    new _ship__WEBPACK_IMPORTED_MODULE_3__.Ship(2),\n    new _ship__WEBPACK_IMPORTED_MODULE_3__.Ship(2),\n    new _ship__WEBPACK_IMPORTED_MODULE_3__.Ship(2),\n    new _ship__WEBPACK_IMPORTED_MODULE_3__.Ship(1),\n    new _ship__WEBPACK_IMPORTED_MODULE_3__.Ship(1),\n    new _ship__WEBPACK_IMPORTED_MODULE_3__.Ship(1),\n    new _ship__WEBPACK_IMPORTED_MODULE_3__.Ship(1),\n  ];\n\n  ai.randomPlacement(pieces, board);\n  return board;\n}\n\nnewGame();\n\n\n//# sourceURL=webpack://webpack-template/./src/scripts/logic.js?");

/***/ }),

/***/ "./src/scripts/player.js":
/*!*******************************!*\
  !*** ./src/scripts/player.js ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const { getRandomInt } = __webpack_require__(/*! ./utils */ \"./src/scripts/utils.js\");\n\nclass Player {\n  constructor(name) {\n    this.name = name;\n  }\n\n  // ai will randomly choose a spot on the board to attack\n  randomMove(board) {\n    let [y, x] = this.randomCoordinates();\n    let hit = board.receiveAttack(y, x);\n    while (hit == undefined) {\n      [y, x] = this.randomCoordinates();\n      hit = board.receiveAttack(y, x);\n    }\n    return [y, x, hit[0]];\n  }\n\n  randomPlacement(pieces, board) {\n    let [x, y] = this.randomCoordinates();\n    let vertical = getRandomInt(2) ? true : false; // if 0, false, if 1, true\n    for (let i = 0; i < pieces.length; i += 1) {\n      while (board.placePiece(pieces[i], x, y, vertical) !== true) {\n        [x, y] = this.randomCoordinates();\n        vertical = getRandomInt(2) ? true : false;\n      }\n    }\n  }\n\n  randomCoordinates() {\n    return [getRandomInt(10), getRandomInt(10)];\n  }\n}\n\nmodule.exports = {\n  Player,\n};\n\n\n//# sourceURL=webpack://webpack-template/./src/scripts/player.js?");

/***/ }),

/***/ "./src/scripts/ship.js":
/*!*****************************!*\
  !*** ./src/scripts/ship.js ***!
  \*****************************/
/***/ ((module) => {

eval("class Ship {\n  constructor(length) {\n    this.length = length;\n    this.sunk = false;\n    this.hits = 0;\n  }\n\n  hit() {\n    this.hits += 1;\n  }\n\n  isSunk() {\n    return this.hits === this.length;\n  }\n}\n\nmodule.exports = {\n  Ship,\n};\n\n\n//# sourceURL=webpack://webpack-template/./src/scripts/ship.js?");

/***/ }),

/***/ "./src/scripts/ui.js":
/*!***************************!*\
  !*** ./src/scripts/ui.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   renderBoards: () => (/* binding */ renderBoards),\n/* harmony export */   renderMessage: () => (/* binding */ renderMessage),\n/* harmony export */   updateCellAttack: () => (/* binding */ updateCellAttack),\n/* harmony export */   updateCellMiss: () => (/* binding */ updateCellMiss)\n/* harmony export */ });\nconst playerBoardArea = document.querySelector(\"div#player-board\");\nconst enemyBoardArea = document.querySelector(\"div#enemy-board\");\n\nfunction generateBoard(gameboard, player, playerClickFunction) {\n  const cellList = [];\n  for (let i = 0; i < gameboard.dimensions; i += 1) {\n    for (let j = 0; j < gameboard.dimensions; j += 1) {\n      const cell = document.createElement(\"div\");\n      cell.classList.add(\"cell\");\n      if (player) {\n        cell.classList.add(\n          gameboard.board[i][j] === undefined ? \"empty\" : \"occupied\"\n        );\n      } else {\n        // render as enemy\n      }\n      cell.dataset.row = i;\n      cell.dataset.col = j;\n      // cell.textContent = gameboard.board[i][j];\n      cell.addEventListener(\"click\", (e) => playerClickFunction(e.target));\n      cellList.push(cell);\n    }\n  }\n  return cellList;\n}\n\nfunction renderMessage(message) {\n  const messageArea = document.querySelector(\"p#messages\");\n  messageArea.textContent = message;\n}\n\nfunction updateCellAttack(cell) {\n  cell.classList.add(\"hit\");\n  cell.textContent = \"X\";\n}\n\nfunction updateCellMiss(cell) {\n  cell.classList.add(\"miss\");\n  cell.textContent = \".\";\n}\n\nfunction renderBoards(\n  playerBoard,\n  enemyBoard,\n  playerSelfFunction,\n  playerEnemyFunction\n) {\n  const player = generateBoard(playerBoard, true, playerSelfFunction);\n  const enemy = generateBoard(enemyBoard, false, playerEnemyFunction);\n\n  playerBoardArea.replaceChildren(...player);\n  enemyBoardArea.replaceChildren(...enemy);\n}\n\n\n//# sourceURL=webpack://webpack-template/./src/scripts/ui.js?");

/***/ }),

/***/ "./src/scripts/utils.js":
/*!******************************!*\
  !*** ./src/scripts/utils.js ***!
  \******************************/
/***/ ((module) => {

eval("function getRandomInt(max) {\n  return Math.floor(Math.random() * max);\n}\n\nmodule.exports = {\n  getRandomInt,\n};\n\n\n//# sourceURL=webpack://webpack-template/./src/scripts/utils.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
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