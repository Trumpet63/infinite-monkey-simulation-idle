var exports;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/button.ts":
/*!***********************!*\
  !*** ./src/button.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Button": () => (/* binding */ Button)
/* harmony export */ });
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./global */ "./src/global.ts");

var Button = /** @class */ (function () {
    function Button(topLeftX, topLeftY, width, height, text, color, hoveredColor, onClick, update) {
        this.disabledColor = "gray";
        this.isHovered = false;
        this.isDisabled = false;
        this.isMouseDowned = false;
        this.topLeftX = topLeftX;
        this.topLeftY = topLeftY;
        this.width = width;
        this.height = height;
        this.bottomRightX = topLeftX + width;
        this.bottomRightY = topLeftY + height;
        this.text = text;
        this.color = color;
        this.hoveredColor = hoveredColor;
        this.onClick = onClick;
        this.update = update;
        this.id = _global__WEBPACK_IMPORTED_MODULE_0__.g.idCounter;
        _global__WEBPACK_IMPORTED_MODULE_0__.g.idCounter += 1;
        _global__WEBPACK_IMPORTED_MODULE_0__.drawables.push(this);
        _global__WEBPACK_IMPORTED_MODULE_0__.collideables.push(this);
        _global__WEBPACK_IMPORTED_MODULE_0__.updateables.push(this);
    }
    Button.prototype.draw = function () {
        var topLeftX = this.topLeftX;
        var topLeftY = this.topLeftY;
        var width = this.width;
        var height = this.height;
        var fontSize = 15;
        var color;
        if (this.isMouseDowned
            && !this.isDisabled) {
            var shrink = 0.1;
            var shrinkX = width * shrink;
            var shrinkY = height * shrink;
            width -= shrinkX;
            height -= shrinkY;
            topLeftX += shrinkX / 2;
            topLeftY += shrinkY / 2;
            fontSize *= (1 - shrink);
        }
        if (this.isDisabled) {
            color = this.disabledColor;
        }
        else {
            if (this.isHovered) {
                color = this.color;
            }
            else {
                color = this.hoveredColor;
            }
        }
        _global__WEBPACK_IMPORTED_MODULE_0__.ctx.save();
        _global__WEBPACK_IMPORTED_MODULE_0__.ctx.fillStyle = color;
        _global__WEBPACK_IMPORTED_MODULE_0__.ctx.font = fontSize + "px Arial";
        _global__WEBPACK_IMPORTED_MODULE_0__.ctx.fillRect(topLeftX, topLeftY, width, height);
        _global__WEBPACK_IMPORTED_MODULE_0__.ctx.textAlign = "center";
        _global__WEBPACK_IMPORTED_MODULE_0__.ctx.fillStyle = "black";
        _global__WEBPACK_IMPORTED_MODULE_0__.ctx.fillText(this.text, topLeftX + width / 2, topLeftY + height / 2 + fontSize / 2.4);
        _global__WEBPACK_IMPORTED_MODULE_0__.ctx.restore();
    };
    Button.prototype.collide = function (pointX, pointY) {
        return this.topLeftX <= pointX
            && pointX <= this.bottomRightX
            && this.topLeftY <= pointY
            && pointY <= this.bottomRightY;
    };
    Button.prototype.delete = function () {
        for (var i = 0; i < _global__WEBPACK_IMPORTED_MODULE_0__.drawables.length; i++) {
            if (_global__WEBPACK_IMPORTED_MODULE_0__.drawables[i].id === this.id) {
                _global__WEBPACK_IMPORTED_MODULE_0__.drawables.splice(i, 1);
            }
        }
        for (var i = 0; i < _global__WEBPACK_IMPORTED_MODULE_0__.collideables.length; i++) {
            if (_global__WEBPACK_IMPORTED_MODULE_0__.collideables[i].id === this.id) {
                _global__WEBPACK_IMPORTED_MODULE_0__.collideables.splice(i, 1);
            }
        }
        for (var i = 0; i < _global__WEBPACK_IMPORTED_MODULE_0__.updateables.length; i++) {
            if (_global__WEBPACK_IMPORTED_MODULE_0__.updateables[i].id === this.id) {
                _global__WEBPACK_IMPORTED_MODULE_0__.updateables.splice(i, 1);
            }
        }
    };
    return Button;
}());



/***/ }),

/***/ "./src/global.ts":
/*!***********************!*\
  !*** ./src/global.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "canvas": () => (/* binding */ canvas),
/* harmony export */   "collideables": () => (/* binding */ collideables),
/* harmony export */   "ctx": () => (/* binding */ ctx),
/* harmony export */   "drawables": () => (/* binding */ drawables),
/* harmony export */   "g": () => (/* binding */ g),
/* harmony export */   "height": () => (/* binding */ height),
/* harmony export */   "updateables": () => (/* binding */ updateables),
/* harmony export */   "width": () => (/* binding */ width)
/* harmony export */ });
/* harmony import */ var _targets__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./targets */ "./src/targets.ts");

var width = 1000;
var height = 700;
var ctx;
var canvas = document.createElement("canvas");
canvas.width = width;
canvas.height = height;
ctx = canvas.getContext("2d");
var drawables = [];
var collideables = [];
var updateables = [];
// Put any global variables that you want to be able to reassign here
var g = {
    bananas: 0,
    monkeys: 0,
    // lettersToTypeRemainder: 0,
    lettersPerSecond: 0,
    mouseX: -1,
    mouseY: -1,
    idCounter: 0,
    currentTargetIndex: 0,
    currentTarget: _targets__WEBPACK_IMPORTED_MODULE_0__.targets[0],
    keyboardKeys: ["A"],
    maxKeyboardKeys: 1,
    targetOwned: [true],
    additivePercentBonus: 0,
    additiveFlatBonus: 0,
    charactersToChooseFrom: [],
    incomeAccumulator: 0,
};
for (var i = 1; i < _targets__WEBPACK_IMPORTED_MODULE_0__.targets.length; i++) {
    g.targetOwned.push(false);
}


/***/ }),

/***/ "./src/local_storage.ts":
/*!******************************!*\
  !*** ./src/local_storage.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "eraseSave": () => (/* binding */ eraseSave),
/* harmony export */   "exportSaveToString": () => (/* binding */ exportSaveToString),
/* harmony export */   "loadFromLocalStorage": () => (/* binding */ loadFromLocalStorage),
/* harmony export */   "loadFromString": () => (/* binding */ loadFromString),
/* harmony export */   "save": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./global */ "./src/global.ts");
/* harmony import */ var _save_file__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./save_file */ "./src/save_file.ts");
/* harmony import */ var _targets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./targets */ "./src/targets.ts");



var saveKey = "infine-monkey-idle-game";
function save() {
    var saveFile = getSaveFile();
    var saveFileString = JSON.stringify(saveFile);
    localStorage.setItem(saveKey, saveFileString);
    console.log("Saved!");
    console.log(saveFileString);
}
function getSaveFile() {
    return new _save_file__WEBPACK_IMPORTED_MODULE_1__.SaveFile(_global__WEBPACK_IMPORTED_MODULE_0__.g.bananas, _global__WEBPACK_IMPORTED_MODULE_0__.g.monkeys, _global__WEBPACK_IMPORTED_MODULE_0__.g.currentTargetIndex, _global__WEBPACK_IMPORTED_MODULE_0__.g.keyboardKeys, _global__WEBPACK_IMPORTED_MODULE_0__.g.maxKeyboardKeys, _global__WEBPACK_IMPORTED_MODULE_0__.g.targetOwned);
}
function loadFromLocalStorage() {
    var saveFileString = localStorage.getItem(saveKey);
    if (saveFileString === undefined
        || saveFileString === null) {
        console.error("Could not load save");
        return;
    }
    else {
        console.log("Save found", saveFileString);
    }
    loadFromString(saveFileString);
}
// I should be able to call this whether I'm loading from
// local storage or from a user-provided save import string
function loadFromString(importString) {
    var loadedSave = JSON.parse(importString);
    if (loadedSave === undefined
        || loadedSave === null) {
        console.error("Failed to load save from local storage: JSON parse error");
        return;
    }
    else if (loadedSave.version !== _save_file__WEBPACK_IMPORTED_MODULE_1__.saveFileVersion) {
        console.error("Failed to load save from local storage: Version mismatch");
        return;
    }
    console.log("Loaded save");
    console.log(loadedSave);
    _global__WEBPACK_IMPORTED_MODULE_0__.g.bananas = loadedSave.bananas;
    _global__WEBPACK_IMPORTED_MODULE_0__.g.monkeys = loadedSave.monkeys;
    _global__WEBPACK_IMPORTED_MODULE_0__.g.lettersPerSecond = _global__WEBPACK_IMPORTED_MODULE_0__.g.monkeys;
    _global__WEBPACK_IMPORTED_MODULE_0__.g.currentTargetIndex = loadedSave.targetIndex;
    _global__WEBPACK_IMPORTED_MODULE_0__.g.currentTarget = _targets__WEBPACK_IMPORTED_MODULE_2__.targets[loadedSave.targetIndex];
    _global__WEBPACK_IMPORTED_MODULE_0__.g.keyboardKeys = loadedSave.keyboardKeys;
    _global__WEBPACK_IMPORTED_MODULE_0__.g.maxKeyboardKeys = loadedSave.maxKeyboardKeys;
    _global__WEBPACK_IMPORTED_MODULE_0__.g.targetOwned = loadedSave.targetOwned;
}
function exportSaveToString() {
    return JSON.stringify(getSaveFile());
}
function eraseSave() {
    console.log("Save Erased!");
    localStorage.removeItem(saveKey);
}


/***/ }),

/***/ "./src/save_file.ts":
/*!**************************!*\
  !*** ./src/save_file.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SaveFile": () => (/* binding */ SaveFile),
/* harmony export */   "saveFileVersion": () => (/* binding */ saveFileVersion)
/* harmony export */ });
var saveFileVersion = 3;
var SaveFile = /** @class */ (function () {
    function SaveFile(bananas, monkeys, targetIndex, keyboardKeys, maxKeyboardKeys, targetOwned) {
        this.version = saveFileVersion;
        this.bananas = bananas;
        this.monkeys = monkeys;
        this.targetIndex = targetIndex;
        this.keyboardKeys = keyboardKeys;
        this.maxKeyboardKeys = maxKeyboardKeys;
        this.targetOwned = targetOwned;
    }
    return SaveFile;
}());



/***/ }),

/***/ "./src/target.ts":
/*!***********************!*\
  !*** ./src/target.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Target": () => (/* binding */ Target)
/* harmony export */ });
var Target = /** @class */ (function () {
    function Target(letters, displayString, rewards, price) {
        this.letters = letters;
        this.displayString = displayString;
        this.rewards = rewards;
        this.price = price;
    }
    return Target;
}());



/***/ }),

/***/ "./src/targets.ts":
/*!************************!*\
  !*** ./src/targets.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "targets": () => (/* binding */ targets)
/* harmony export */ });
/* harmony import */ var _target__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./target */ "./src/target.ts");

var targets = [
    new _target__WEBPACK_IMPORTED_MODULE_0__.Target(["C", "A", "T"], "CAT", [1, 8, 40], 0),
    new _target__WEBPACK_IMPORTED_MODULE_0__.Target(["H", "O", "O", "T"], "HOOT", [5, 10, 40, 180], 2000),
    new _target__WEBPACK_IMPORTED_MODULE_0__.Target(["R", "E", "F", "E", "R", "E", "E"], "REFEREE", [5, 5, 5, 20, 400, 2400, 15000], 30000),
    // new Target(
    //     [],
    //     "",
    //     [],
    //     0,
    // ),
];


/***/ }),

/***/ "./src/text_display.ts":
/*!*****************************!*\
  !*** ./src/text_display.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TextDisplay": () => (/* binding */ TextDisplay),
/* harmony export */   "alignTextDisplaysToGrid": () => (/* binding */ alignTextDisplaysToGrid)
/* harmony export */ });
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./global */ "./src/global.ts");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ "./src/util.ts");


var textDisplays = [];
var TextDisplay = /** @class */ (function () {
    function TextDisplay(
    // x: number,
    // y: number,
    // height: number,
    ) {
        // this.x = x;
        // this.y = y;
        // this.height = height;
        this.lettersToTypeRemainder = 0;
        this.currentString = [];
        this.correctColor = (0,_util__WEBPACK_IMPORTED_MODULE_1__.rgbString)(255, 187, 0);
        this.id = _global__WEBPACK_IMPORTED_MODULE_0__.g.idCounter;
        _global__WEBPACK_IMPORTED_MODULE_0__.g.idCounter += 1;
        _global__WEBPACK_IMPORTED_MODULE_0__.drawables.push(this);
        _global__WEBPACK_IMPORTED_MODULE_0__.updateables.push(this);
        textDisplays.push(this);
        alignTextDisplaysToGrid();
    }
    TextDisplay.prototype.update = function (currentTimeMillis, elapsedTimeMillis) {
        this.lettersToTypeRemainder += elapsedTimeMillis / 1000 * _global__WEBPACK_IMPORTED_MODULE_0__.g.lettersPerSecond;
        // Make a finished word stay on screen for 500ms, or until
        // another letter is typed
        if ((this.lastWordFinishTimeMillis !== undefined
            && (currentTimeMillis - this.lastWordFinishTimeMillis) > 500) || (this.lettersToTypeRemainder >= 1
            && this.currentString.length >= _global__WEBPACK_IMPORTED_MODULE_0__.g.currentTarget.letters.length)) {
            this.currentString = [];
            this.lastWordFinishTimeMillis = undefined;
        }
        // Generate the needed characters and award bananas
        while (this.lettersToTypeRemainder >= 1) {
            this.lettersToTypeRemainder -= 1;
            if (_global__WEBPACK_IMPORTED_MODULE_0__.g.charactersToChooseFrom.length === 0) {
                continue;
            }
            var character = (0,_util__WEBPACK_IMPORTED_MODULE_1__.getRandomCharacter)();
            this.currentString.push(character);
            if (this.currentString.length >= _global__WEBPACK_IMPORTED_MODULE_0__.g.currentTarget.letters.length) {
                this.lastWordFinishTimeMillis = currentTimeMillis;
                var matchingLetters = (0,_util__WEBPACK_IMPORTED_MODULE_1__.countMatchingLetters)(this.currentString, _global__WEBPACK_IMPORTED_MODULE_0__.g.currentTarget.letters);
                if (matchingLetters > 0) {
                    var bananasToAdd = (_global__WEBPACK_IMPORTED_MODULE_0__.g.currentTarget.rewards[matchingLetters - 1]
                        + _global__WEBPACK_IMPORTED_MODULE_0__.g.additiveFlatBonus) * (1 + _global__WEBPACK_IMPORTED_MODULE_0__.g.additivePercentBonus);
                    _global__WEBPACK_IMPORTED_MODULE_0__.g.bananas += bananasToAdd;
                    _global__WEBPACK_IMPORTED_MODULE_0__.g.incomeAccumulator += bananasToAdd;
                }
                if (this.lettersToTypeRemainder >= 1) {
                    this.currentString = [];
                }
            }
        }
    };
    TextDisplay.prototype.draw = function () {
        var currentString = this.currentString;
        var fontSize = this.height * 4 / 7;
        // let width = g.currentTarget.letters.length * fontSize;
        _global__WEBPACK_IMPORTED_MODULE_0__.ctx.save();
        _global__WEBPACK_IMPORTED_MODULE_0__.ctx.strokeStyle = "black";
        _global__WEBPACK_IMPORTED_MODULE_0__.ctx.strokeRect(this.x, this.y, this.width, this.height);
        _global__WEBPACK_IMPORTED_MODULE_0__.ctx.font = fontSize + "px Arial";
        for (var i = 0; i < _global__WEBPACK_IMPORTED_MODULE_0__.g.currentTarget.letters.length; i++) {
            var character = void 0;
            if (i >= currentString.length) {
                character = "_";
            }
            else {
                character = currentString[i];
            }
            if (character === "_") {
                _global__WEBPACK_IMPORTED_MODULE_0__.ctx.fillStyle = "black";
            }
            else if (character === _global__WEBPACK_IMPORTED_MODULE_0__.g.currentTarget.letters[i]) {
                _global__WEBPACK_IMPORTED_MODULE_0__.ctx.fillStyle = this.correctColor;
            }
            else {
                _global__WEBPACK_IMPORTED_MODULE_0__.ctx.fillStyle = "black";
            }
            _global__WEBPACK_IMPORTED_MODULE_0__.ctx.fillText(character, this.x + fontSize * 0.15 + fontSize * i, this.y + fontSize * 1.2);
        }
        _global__WEBPACK_IMPORTED_MODULE_0__.ctx.restore();
    };
    return TextDisplay;
}());

function alignTextDisplaysToGrid() {
    var numDisplays = textDisplays.length;
    var xOffset = 30;
    var yOffset = 150;
    var maxWidth = 680;
    var maxHeight = 270;
    var width;
    var numColumns;
    var nonEmptyRows;
    var height = 53;
    do {
        width = _global__WEBPACK_IMPORTED_MODULE_0__.g.currentTarget.letters.length * height * 4 / 7;
        numColumns = Math.floor(maxWidth / width);
        nonEmptyRows = Math.ceil(numDisplays / numColumns);
        if (height * nonEmptyRows <= maxHeight) {
            break;
        }
        height -= 1;
    } while (true);
    for (var i = 0; i < numDisplays; i++) {
        var row = Math.floor(i / numColumns);
        var column = i % numColumns;
        var x = column * width + xOffset;
        var y = row * height + yOffset;
        textDisplays[i].x = x;
        textDisplays[i].y = y;
        textDisplays[i].height = height;
        textDisplays[i].width = width;
    }
}


/***/ }),

/***/ "./src/util.ts":
/*!*********************!*\
  !*** ./src/util.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "countMatchingLetters": () => (/* binding */ countMatchingLetters),
/* harmony export */   "getRandomCharacter": () => (/* binding */ getRandomCharacter),
/* harmony export */   "getRandomNumbers": () => (/* binding */ getRandomNumbers),
/* harmony export */   "rgbString": () => (/* binding */ rgbString)
/* harmony export */ });
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./global */ "./src/global.ts");

function countMatchingLetters(s1, s2) {
    var matching = 0;
    var minLength = Math.min(s1.length, s2.length);
    for (var i = 0; i < minLength; i++) {
        if (s1[i] === s2[i]) {
            matching++;
        }
    }
    return matching;
}
// Buffer the random characters we get from crypto to improve
// the speed. Also, I tested it, and it's faster than using
// Math.random, and hopefully has better randomness
var bufferSize = 10000;
var numberBuffer = getRandomNumbers(bufferSize);
var numberBufferIndex = -1;
function getRandomCharacter() {
    numberBufferIndex += 1;
    if (numberBufferIndex >= bufferSize) {
        numberBufferIndex = 0;
        numberBuffer = getRandomNumbers(bufferSize);
    }
    var randomNumber = numberBuffer[numberBufferIndex];
    return _global__WEBPACK_IMPORTED_MODULE_0__.g.charactersToChooseFrom[randomNumber];
}
function getRandomNumbers(n) {
    var randomNumbers = new Uint16Array(n);
    randomNumbers = crypto.getRandomValues(randomNumbers);
    return randomNumbers;
}
function rgbString(red, green, blue) {
    return "rgb(" + red + "," + green + "," + blue + ")";
}


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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button */ "./src/button.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./global */ "./src/global.ts");
/* harmony import */ var _local_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./local_storage */ "./src/local_storage.ts");
/* harmony import */ var _targets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./targets */ "./src/targets.ts");
/* harmony import */ var _text_display__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./text_display */ "./src/text_display.ts");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./util */ "./src/util.ts");
// TODO:
// Auto-save every 10 seconds
// Prevent catchup lag after tab-out
// Auto-calculate true average bananas per word
// recruit multiple monkeys at a time (10x, 100x)
// do some kind of visual effect to indicate the quality of 
//    the matches, e.g. turn gold and pause on perfect match
// use a blinking underline animation for the next letter on
//    any text display - like an old command line
// color the letters based on whther they're correct
// visually indicate the number of letters your keyboard can fit
// Have text fit within the bounds of the buttons
// The save should be encrypted
// The erase save button should have a confirmation step
// The erase save button should also reset the game (probably will rename the button)
// There should be an import/export option to let the player back up their save
// There are balance issues
// There should be upgrades
// adjustable update rate for bananas per second display
// compressed notation for large numbers
// How many screens can I display at once?
//    can I get to like 100k?
//    probably not unless I figure out a way to summarize visually
//    how high can I get without considering visuals?
// What if instead of picking one target word at a time, the player built up a dictionary?
//    AND, what if, they earned bananas for every matching letter in their dictionary?
//    (rather than for just the letters they matched with a particular word?)
// This implies one feature where you can upgrade a particular slot to award more bananas
//    e.g. double all bananas earned from matches in the second letter
// What if, at the same time, words also awarded different amounts for different numbers of matches?
// What if the game was structured kind of like a deck-builder?
// What if the words you could add to your dictionary were chosen at random?
// What if we brought back the idea of limiting how the player customized their keyboard?
// What if you can upgrade words?






// let report1 = generatePermutations(
//     ["H", "O", "T"],
//     ["H", "O", "O", "T"],
// );
// download("hot-hoot-permutations.csv", report1);
// let report2 = generatePermutations(
//     ["H", "O", "O", "T"],
//     ["H", "O", "O", "T"],
// );
// download("hoot-hoot-permutations.csv", report2);
(0,_local_storage__WEBPACK_IMPORTED_MODULE_2__.loadFromLocalStorage)();
var buttonColor = (0,_util__WEBPACK_IMPORTED_MODULE_5__.rgbString)(200, 200, 255);
var buttonHoverColor = (0,_util__WEBPACK_IMPORTED_MODULE_5__.rgbString)(180, 180, 230);
var eraseButtonColor = (0,_util__WEBPACK_IMPORTED_MODULE_5__.rgbString)(255, 50, 50);
var eraseButtonHoverColor = (0,_util__WEBPACK_IMPORTED_MODULE_5__.rgbString)(225, 20, 20);
// Make buttons out of all possible keyboard keys
// let allKeyboardKeys = [" ", "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var allKeyboardKeys = ["⎵", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var _loop_1 = function (i) {
    var key = allKeyboardKeys[i];
    var button = new _button__WEBPACK_IMPORTED_MODULE_0__.Button(20 + 30 * i, 550, 25, 25, key, buttonColor, buttonHoverColor, function () {
        createCurrentKeyboardKeyButton(_global__WEBPACK_IMPORTED_MODULE_1__.g.keyboardKeys.length, key);
        _global__WEBPACK_IMPORTED_MODULE_1__.g.keyboardKeys.push(key);
        updateCharactersToChooseFrom();
        // not sure if I will want to clear all the current
        // strings when the player changes the keyboard
        // currentString = [];
    }, function () {
        if (_global__WEBPACK_IMPORTED_MODULE_1__.g.keyboardKeys.length < _global__WEBPACK_IMPORTED_MODULE_1__.g.maxKeyboardKeys) {
            button.isDisabled = false;
        }
        else {
            button.isDisabled = true;
        }
    });
};
for (var i = 0; i < allKeyboardKeys.length; i++) {
    _loop_1(i);
}
var randomNumberSize = 65536;
updateCharactersToChooseFrom();
var keyboardKeyButtons = [];
for (var i = 0; i < _global__WEBPACK_IMPORTED_MODULE_1__.g.keyboardKeys.length; i++) {
    createCurrentKeyboardKeyButton(i, _global__WEBPACK_IMPORTED_MODULE_1__.g.keyboardKeys[i]);
}
var targetButtons = [];
var _loop_2 = function (i) {
    var buttonText = _targets__WEBPACK_IMPORTED_MODULE_3__.targets[i].displayString;
    if (!_global__WEBPACK_IMPORTED_MODULE_1__.g.targetOwned[i]) {
        buttonText += " " + _targets__WEBPACK_IMPORTED_MODULE_3__.targets[i].price;
    }
    var button = new _button__WEBPACK_IMPORTED_MODULE_0__.Button(510, 15 + 35 * i, 80, 30, buttonText, buttonColor, buttonHoverColor, function () {
        if (!_global__WEBPACK_IMPORTED_MODULE_1__.g.targetOwned[i]) {
            _global__WEBPACK_IMPORTED_MODULE_1__.g.bananas -= _targets__WEBPACK_IMPORTED_MODULE_3__.targets[i].price;
            button.text = _targets__WEBPACK_IMPORTED_MODULE_3__.targets[i].displayString;
            _global__WEBPACK_IMPORTED_MODULE_1__.g.targetOwned[i] = true;
        }
        _global__WEBPACK_IMPORTED_MODULE_1__.g.currentTarget = _targets__WEBPACK_IMPORTED_MODULE_3__.targets[i];
        _global__WEBPACK_IMPORTED_MODULE_1__.g.currentTargetIndex = i;
        targetButtons[i].isDisabled = true;
        (0,_text_display__WEBPACK_IMPORTED_MODULE_4__.alignTextDisplaysToGrid)();
    }, function () {
        if ((_targets__WEBPACK_IMPORTED_MODULE_3__.targets[i].price > _global__WEBPACK_IMPORTED_MODULE_1__.g.bananas
            && !_global__WEBPACK_IMPORTED_MODULE_1__.g.targetOwned[i])
            || _targets__WEBPACK_IMPORTED_MODULE_3__.targets[i].displayString === _global__WEBPACK_IMPORTED_MODULE_1__.g.currentTarget.displayString) {
            button.isDisabled = true;
        }
        else {
            button.isDisabled = false;
        }
    });
    targetButtons.push(button);
};
for (var i = 0; i < _targets__WEBPACK_IMPORTED_MODULE_3__.targets.length; i++) {
    _loop_2(i);
}
document.body.appendChild(_global__WEBPACK_IMPORTED_MODULE_1__.canvas);
var recruitPrice = 10 + 2 * _global__WEBPACK_IMPORTED_MODULE_1__.g.monkeys;
var button1 = new _button__WEBPACK_IMPORTED_MODULE_0__.Button(100, 100, 80, 30, "Recruit Monkey " + recruitPrice, buttonColor, buttonHoverColor, function () {
    _global__WEBPACK_IMPORTED_MODULE_1__.g.monkeys += 1;
    new _text_display__WEBPACK_IMPORTED_MODULE_4__.TextDisplay();
    _global__WEBPACK_IMPORTED_MODULE_1__.g.lettersPerSecond = 1;
    _global__WEBPACK_IMPORTED_MODULE_1__.g.bananas -= recruitPrice;
    recruitPrice = 10 + 2 * _global__WEBPACK_IMPORTED_MODULE_1__.g.monkeys;
    button1.text = "Recruit Monkey " + recruitPrice;
}, function () {
    if (recruitPrice > _global__WEBPACK_IMPORTED_MODULE_1__.g.bananas) {
        button1.isDisabled = true;
    }
    else {
        button1.isDisabled = false;
    }
});
var lastClickedTimeMillis;
var button2 = new _button__WEBPACK_IMPORTED_MODULE_0__.Button(100, 480, 80, 30, "Type", buttonColor, buttonHoverColor, function (currentTimeMillis) {
    if (currentTimeMillis !== undefined
        && (currentTimeMillis - lastClickedTimeMillis) < 50) {
        return;
    }
    textDisplay.lettersToTypeRemainder += 1;
    lastClickedTimeMillis = currentTimeMillis;
}, function () { });
var upgradeKeyboardPrice = Math.pow(10, _global__WEBPACK_IMPORTED_MODULE_1__.g.maxKeyboardKeys + 1);
var button3 = new _button__WEBPACK_IMPORTED_MODULE_0__.Button(250, 480, 80, 30, "Upgrade Keyboard " + upgradeKeyboardPrice, buttonColor, buttonHoverColor, function () {
    _global__WEBPACK_IMPORTED_MODULE_1__.g.bananas -= upgradeKeyboardPrice;
    _global__WEBPACK_IMPORTED_MODULE_1__.g.maxKeyboardKeys += 1;
    updateCharactersToChooseFrom();
    upgradeKeyboardPrice = Math.pow(10, _global__WEBPACK_IMPORTED_MODULE_1__.g.maxKeyboardKeys + 1);
    button3.text = "Upgrade Keyboard " + upgradeKeyboardPrice;
}, function () {
    if (upgradeKeyboardPrice > _global__WEBPACK_IMPORTED_MODULE_1__.g.bananas) {
        button3.isDisabled = true;
    }
    else {
        button3.isDisabled = false;
    }
});
var saveButton = new _button__WEBPACK_IMPORTED_MODULE_0__.Button(10, 600, 100, 30, "Save", buttonColor, buttonHoverColor, function () { (0,_local_storage__WEBPACK_IMPORTED_MODULE_2__.save)(); }, function () { });
var eraseButton = new _button__WEBPACK_IMPORTED_MODULE_0__.Button(10, 640, 100, 30, "Erase Save", eraseButtonColor, eraseButtonHoverColor, function () { (0,_local_storage__WEBPACK_IMPORTED_MODULE_2__.eraseSave)(); }, function () { });
// Comment out the upgrade buttons for now
// let upgradeButtons: Button[] = [];
// createUpgradeButtons();
var textDisplay = new _text_display__WEBPACK_IMPORTED_MODULE_4__.TextDisplay();
// let incomeAccumulator: number = 0;
var lastIncomeUpdateTimeMillis = performance.now();
var millisPerIncomeUpdate = 2000;
var lastBananasPerSecond = 0;
// store the mouse xy in case it gets executed faster than
// once every frame, which would be useless since hover is
// handled only once every frame
_global__WEBPACK_IMPORTED_MODULE_1__.canvas.onmousemove = function (ev) {
    var bounds = _global__WEBPACK_IMPORTED_MODULE_1__.canvas.getBoundingClientRect();
    _global__WEBPACK_IMPORTED_MODULE_1__.g.mouseX = ev.x - bounds.left;
    _global__WEBPACK_IMPORTED_MODULE_1__.g.mouseY = ev.y - bounds.top;
};
// assume for simplicity that you can't have two mousedown
// events without a mouseup
_global__WEBPACK_IMPORTED_MODULE_1__.canvas.onmousedown = function (ev) {
    var bounds = _global__WEBPACK_IMPORTED_MODULE_1__.canvas.getBoundingClientRect();
    var mouseX = ev.x - bounds.left;
    var mouseY = ev.y - bounds.top;
    var collideable = getCollidingEntity(mouseX, mouseY);
    if (collideable !== undefined) {
        collideable.isMouseDowned = true;
        currentMouseDowned = collideable;
    }
    else {
        currentMouseDowned = undefined;
    }
};
_global__WEBPACK_IMPORTED_MODULE_1__.canvas.onmouseup = function (ev) {
    var bounds = _global__WEBPACK_IMPORTED_MODULE_1__.canvas.getBoundingClientRect();
    var mouseX = ev.x - bounds.left;
    var mouseY = ev.y - bounds.top;
    var collideable = getCollidingEntity(mouseX, mouseY);
    if (collideable !== undefined) {
        if (collideable.isMouseDowned
            && !collideable.isDisabled) {
            collideable.onClick(ev.timeStamp);
        }
    }
    if (currentMouseDowned !== undefined) {
        currentMouseDowned.isMouseDowned = false;
    }
};
var previousTimeMillis;
var previousHovered;
var currentMouseDowned;
// let lastWordFinishTimeMillis: number;
window.requestAnimationFrame(draw);
function draw(currentTimeMillis) {
    var elapsedTimeMillis = 0;
    if (previousTimeMillis !== undefined) {
        elapsedTimeMillis = currentTimeMillis - previousTimeMillis;
    }
    _global__WEBPACK_IMPORTED_MODULE_1__.ctx.clearRect(0, 0, _global__WEBPACK_IMPORTED_MODULE_1__.canvas.width, _global__WEBPACK_IMPORTED_MODULE_1__.canvas.height);
    _global__WEBPACK_IMPORTED_MODULE_1__.ctx.fillStyle = "white";
    _global__WEBPACK_IMPORTED_MODULE_1__.ctx.fillRect(0, 0, _global__WEBPACK_IMPORTED_MODULE_1__.canvas.width, _global__WEBPACK_IMPORTED_MODULE_1__.canvas.height);
    if (previousHovered !== undefined) {
        previousHovered.isHovered = false;
    }
    for (var i = 0; i < _global__WEBPACK_IMPORTED_MODULE_1__.collideables.length; i++) {
        var isColliding = _global__WEBPACK_IMPORTED_MODULE_1__.collideables[i].collide(_global__WEBPACK_IMPORTED_MODULE_1__.g.mouseX, _global__WEBPACK_IMPORTED_MODULE_1__.g.mouseY);
        if (isColliding) {
            var currentHovered = _global__WEBPACK_IMPORTED_MODULE_1__.collideables[i];
            currentHovered.isHovered = true;
            previousHovered = currentHovered;
            break; // only one thing can be hovered over at a time
        }
    }
    // Call update on everything just before draw
    for (var i = 0; i < _global__WEBPACK_IMPORTED_MODULE_1__.drawables.length; i++) {
        _global__WEBPACK_IMPORTED_MODULE_1__.updateables[i].update(currentTimeMillis, elapsedTimeMillis);
    }
    // Update the income per second if it's time to
    var elapsedSinceLastIncomeUpdate = currentTimeMillis - lastIncomeUpdateTimeMillis;
    if (elapsedSinceLastIncomeUpdate >= millisPerIncomeUpdate) {
        lastBananasPerSecond = _global__WEBPACK_IMPORTED_MODULE_1__.g.incomeAccumulator / (elapsedSinceLastIncomeUpdate / 1000);
        _global__WEBPACK_IMPORTED_MODULE_1__.g.incomeAccumulator = 0;
        lastIncomeUpdateTimeMillis = currentTimeMillis;
    }
    // Draw values at the end of the frame so they're as up
    // to date as they can be
    _global__WEBPACK_IMPORTED_MODULE_1__.ctx.save();
    _global__WEBPACK_IMPORTED_MODULE_1__.ctx.fillStyle = "black";
    _global__WEBPACK_IMPORTED_MODULE_1__.ctx.font = "20px Arial";
    _global__WEBPACK_IMPORTED_MODULE_1__.ctx.textAlign = "center";
    _global__WEBPACK_IMPORTED_MODULE_1__.ctx.fillText(bananasPerSecond(lastBananasPerSecond), 140, 30);
    _global__WEBPACK_IMPORTED_MODULE_1__.ctx.fillText(bananas(_global__WEBPACK_IMPORTED_MODULE_1__.g.bananas), 140, 55);
    _global__WEBPACK_IMPORTED_MODULE_1__.ctx.fillText(monkeys(_global__WEBPACK_IMPORTED_MODULE_1__.g.monkeys), 140, 80);
    _global__WEBPACK_IMPORTED_MODULE_1__.ctx.textAlign = "left";
    _global__WEBPACK_IMPORTED_MODULE_1__.ctx.fillText("Target String: "
        + _global__WEBPACK_IMPORTED_MODULE_1__.g.currentTarget.displayString, 280, 30);
    for (var i = 0; i < _global__WEBPACK_IMPORTED_MODULE_1__.g.currentTarget.rewards.length; i++) {
        var reward = (_global__WEBPACK_IMPORTED_MODULE_1__.g.currentTarget.rewards[i]
            + _global__WEBPACK_IMPORTED_MODULE_1__.g.additiveFlatBonus) * (1 + _global__WEBPACK_IMPORTED_MODULE_1__.g.additivePercentBonus);
        var line = (i + 1) + ": " + bananas(reward);
        _global__WEBPACK_IMPORTED_MODULE_1__.ctx.fillText(line, 280, 55 + 20 * i);
    }
    _global__WEBPACK_IMPORTED_MODULE_1__.ctx.textAlign = "right";
    _global__WEBPACK_IMPORTED_MODULE_1__.ctx.fillText("Keyboard Keys:", 160, 450);
    _global__WEBPACK_IMPORTED_MODULE_1__.ctx.restore();
    for (var i = 0; i < _global__WEBPACK_IMPORTED_MODULE_1__.drawables.length; i++) {
        _global__WEBPACK_IMPORTED_MODULE_1__.drawables[i].draw(currentTimeMillis);
    }
    previousTimeMillis = currentTimeMillis;
    window.requestAnimationFrame(draw);
}
// Make a button out of the a keyboard key so you
// can click to remove it from your keyboard.
// i is the index in the keyboardKeys array
// On click it deletes and remakes all the buttons
function createCurrentKeyboardKeyButton(i, key) {
    var button = new _button__WEBPACK_IMPORTED_MODULE_0__.Button(180 + 30 * i, 430, 25, 25, key, buttonColor, buttonHoverColor, function () {
        _global__WEBPACK_IMPORTED_MODULE_1__.g.keyboardKeys.splice(i, 1);
        updateCharactersToChooseFrom();
        for (var j = 0; j < keyboardKeyButtons.length; j++) {
            keyboardKeyButtons[j].delete();
        }
        for (var j = 0; j < _global__WEBPACK_IMPORTED_MODULE_1__.g.keyboardKeys.length; j++) {
            var key_1 = _global__WEBPACK_IMPORTED_MODULE_1__.g.keyboardKeys[j];
            createCurrentKeyboardKeyButton(j, key_1);
        }
        // not sure if I will want to clear all the current
        // strings when the player changes the keyboard
        // currentString = [];
    }, function () { });
    keyboardKeyButtons.push(button);
}
function updateCharactersToChooseFrom() {
    _global__WEBPACK_IMPORTED_MODULE_1__.g.charactersToChooseFrom = [];
    if (_global__WEBPACK_IMPORTED_MODULE_1__.g.keyboardKeys.length === 0) {
        return;
    }
    for (var i = 0; i < randomNumberSize; i++) {
        _global__WEBPACK_IMPORTED_MODULE_1__.g.charactersToChooseFrom.push(_global__WEBPACK_IMPORTED_MODULE_1__.g.keyboardKeys[i % _global__WEBPACK_IMPORTED_MODULE_1__.g.keyboardKeys.length]);
    }
}
// function createUpgradeButtons() {
//     let sortedUpgrades: Upgrade[] = sorted(upgrades, (a: Upgrade, b: Upgrade) => {
//         return a.price - b.price;
//     });
//     for (let i = 0; i < sortedUpgrades.length; i++) {
//         let upgrade = sortedUpgrades[i];
//         let button: Button = new Button(
//             500,
//             300 + 35 * i,
//             80,
//             30,
//             upgrade.text + " " + upgrade.price,
//             buttonColor,
//             buttonHoverColor,
//             () => {
//                 upgrade.buy();
//                 for (let j = 0; j < upgradeButtons.length; j++) {
//                     upgradeButtons[j].delete();
//                 }
//                 createUpgradeButtons();
//             },
//             () => {
//                 if (upgrade.price > g.bananas) {
//                     button.isDisabled = true;
//                 } else {
//                     button.isDisabled = false;
//                 }
//             },
//         );
//         upgradeButtons.push(button);
//     }
// }
function getCollidingEntity(pointX, pointY) {
    for (var i = 0; i < _global__WEBPACK_IMPORTED_MODULE_1__.collideables.length; i++) {
        var isColliding = _global__WEBPACK_IMPORTED_MODULE_1__.collideables[i].collide(_global__WEBPACK_IMPORTED_MODULE_1__.g.mouseX, _global__WEBPACK_IMPORTED_MODULE_1__.g.mouseY);
        if (isColliding) {
            return _global__WEBPACK_IMPORTED_MODULE_1__.collideables[i];
        }
    }
    return undefined;
}
function bananas(number) {
    number = Math.round(number);
    if (number === 1) {
        return number + " banana";
    }
    else {
        return number + " bananas";
    }
}
function monkeys(number) {
    if (number === 1) {
        return number + " monkey";
    }
    else {
        return number + " monkeys";
    }
}
function bananasPerSecond(number) {
    number = Math.round(number);
    if (number === 1) {
        return number + " banana per second";
    }
    else {
        return number + " bananas per second";
    }
}
function sorted(array, compareFn) {
    return array.slice().sort(compareFn);
}
function roundToNPlaces(x, numPlaces) {
    var scale = Math.pow(10, numPlaces);
    return Math.round(x * scale) / scale;
}

})();

exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUM7QUFDekMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4cG9ydHMvLi9zcmMvYnV0dG9uLnRzIiwid2VicGFjazovL2V4cG9ydHMvLi9zcmMvZ2xvYmFsLnRzIiwid2VicGFjazovL2V4cG9ydHMvLi9zcmMvbG9jYWxfc3RvcmFnZS50cyIsIndlYnBhY2s6Ly9leHBvcnRzLy4vc3JjL3NhdmVfZmlsZS50cyIsIndlYnBhY2s6Ly9leHBvcnRzLy4vc3JjL3RhcmdldC50cyIsIndlYnBhY2s6Ly9leHBvcnRzLy4vc3JjL3RhcmdldHMudHMiLCJ3ZWJwYWNrOi8vZXhwb3J0cy8uL3NyYy90ZXh0X2Rpc3BsYXkudHMiLCJ3ZWJwYWNrOi8vZXhwb3J0cy8uL3NyYy91dGlsLnRzIiwid2VicGFjazovL2V4cG9ydHMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXhwb3J0cy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhwb3J0cy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4cG9ydHMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leHBvcnRzLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbGxpZGVhYmxlcywgY3R4LCBkcmF3YWJsZXMsIGcsIHVwZGF0ZWFibGVzIH0gZnJvbSBcIi4vZ2xvYmFsXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQnV0dG9uIHtcclxuICAgIHB1YmxpYyBpZDogbnVtYmVyO1xyXG4gICAgcHVibGljIHRvcExlZnRYOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgdG9wTGVmdFk6IG51bWJlcjtcclxuICAgIHB1YmxpYyB3aWR0aDogbnVtYmVyO1xyXG4gICAgcHVibGljIGhlaWdodDogbnVtYmVyO1xyXG4gICAgcHVibGljIGJvdHRvbVJpZ2h0WDogbnVtYmVyO1xyXG4gICAgcHVibGljIGJvdHRvbVJpZ2h0WTogbnVtYmVyO1xyXG4gICAgcHVibGljIHRleHQ6IHN0cmluZztcclxuICAgIHB1YmxpYyBjb2xvcjogc3RyaW5nO1xyXG4gICAgcHVibGljIGhvdmVyZWRDb2xvcjogc3RyaW5nO1xyXG4gICAgcHVibGljIGRpc2FibGVkQ29sb3I6IHN0cmluZyA9IFwiZ3JheVwiO1xyXG4gICAgcHVibGljIGlzSG92ZXJlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHVibGljIGlzRGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHB1YmxpYyBpc01vdXNlRG93bmVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwdWJsaWMgb25DbGljazogKGN1cnJlbnRUaW1lTWlsbGlzPzogbnVtYmVyKSA9PiB2b2lkO1xyXG4gICAgcHVibGljIHVwZGF0ZTogKCkgPT4gdm9pZDtcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoXHJcbiAgICAgICAgdG9wTGVmdFg6IG51bWJlcixcclxuICAgICAgICB0b3BMZWZ0WTogbnVtYmVyLFxyXG4gICAgICAgIHdpZHRoOiBudW1iZXIsXHJcbiAgICAgICAgaGVpZ2h0OiBudW1iZXIsXHJcbiAgICAgICAgdGV4dDogc3RyaW5nLFxyXG4gICAgICAgIGNvbG9yOiBzdHJpbmcsXHJcbiAgICAgICAgaG92ZXJlZENvbG9yOiBzdHJpbmcsXHJcbiAgICAgICAgb25DbGljazogKGN1cnJlbnRUaW1lTWlsbGlzPzogbnVtYmVyKSA9PiB2b2lkLFxyXG4gICAgICAgIHVwZGF0ZTogKCkgPT4gdm9pZCxcclxuICAgICkge1xyXG4gICAgICAgIHRoaXMudG9wTGVmdFggPSB0b3BMZWZ0WDtcclxuICAgICAgICB0aGlzLnRvcExlZnRZID0gdG9wTGVmdFk7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMuYm90dG9tUmlnaHRYID0gdG9wTGVmdFggKyB3aWR0aDtcclxuICAgICAgICB0aGlzLmJvdHRvbVJpZ2h0WSA9IHRvcExlZnRZICsgaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMudGV4dCA9IHRleHQ7XHJcbiAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yO1xyXG4gICAgICAgIHRoaXMuaG92ZXJlZENvbG9yID0gaG92ZXJlZENvbG9yO1xyXG4gICAgICAgIHRoaXMub25DbGljayA9IG9uQ2xpY2s7XHJcbiAgICAgICAgdGhpcy51cGRhdGUgPSB1cGRhdGU7XHJcblxyXG4gICAgICAgIHRoaXMuaWQgPSBnLmlkQ291bnRlcjtcclxuICAgICAgICBnLmlkQ291bnRlciArPSAxO1xyXG4gICAgICAgIGRyYXdhYmxlcy5wdXNoKHRoaXMpO1xyXG4gICAgICAgIGNvbGxpZGVhYmxlcy5wdXNoKHRoaXMpO1xyXG4gICAgICAgIHVwZGF0ZWFibGVzLnB1c2godGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRyYXcoKSB7XHJcbiAgICAgICAgbGV0IHRvcExlZnRYID0gdGhpcy50b3BMZWZ0WDtcclxuICAgICAgICBsZXQgdG9wTGVmdFkgPSB0aGlzLnRvcExlZnRZO1xyXG4gICAgICAgIGxldCB3aWR0aCA9IHRoaXMud2lkdGg7XHJcbiAgICAgICAgbGV0IGhlaWdodCA9IHRoaXMuaGVpZ2h0O1xyXG4gICAgICAgIGxldCBmb250U2l6ZSA9IDE1O1xyXG4gICAgICAgIGxldCBjb2xvcjogc3RyaW5nO1xyXG4gICAgICAgIGlmICh0aGlzLmlzTW91c2VEb3duZWRcclxuICAgICAgICAgICAgJiYgIXRoaXMuaXNEaXNhYmxlZCkge1xyXG4gICAgICAgICAgICBsZXQgc2hyaW5rID0gMC4xO1xyXG4gICAgICAgICAgICBsZXQgc2hyaW5rWCA9IHdpZHRoICogc2hyaW5rO1xyXG4gICAgICAgICAgICBsZXQgc2hyaW5rWSA9IGhlaWdodCAqIHNocmluaztcclxuICAgICAgICAgICAgd2lkdGggLT0gc2hyaW5rWDtcclxuICAgICAgICAgICAgaGVpZ2h0IC09IHNocmlua1k7XHJcbiAgICAgICAgICAgIHRvcExlZnRYICs9IHNocmlua1ggLyAyO1xyXG4gICAgICAgICAgICB0b3BMZWZ0WSArPSBzaHJpbmtZIC8gMjtcclxuICAgICAgICAgICAgZm9udFNpemUgKj0gKDEgLSBzaHJpbmspO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5pc0Rpc2FibGVkKSB7XHJcbiAgICAgICAgICAgIGNvbG9yID0gdGhpcy5kaXNhYmxlZENvbG9yXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNIb3ZlcmVkKSB7XHJcbiAgICAgICAgICAgICAgICBjb2xvciA9IHRoaXMuY29sb3I7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb2xvciA9IHRoaXMuaG92ZXJlZENvbG9yO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjdHguc2F2ZSgpO1xyXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBjb2xvcjtcclxuICAgICAgICBjdHguZm9udCA9IGZvbnRTaXplICsgXCJweCBBcmlhbFwiO1xyXG4gICAgICAgIGN0eC5maWxsUmVjdCh0b3BMZWZ0WCwgdG9wTGVmdFksIHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgICAgIGN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xyXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcImJsYWNrXCI7XHJcbiAgICAgICAgY3R4LmZpbGxUZXh0KFxyXG4gICAgICAgICAgICB0aGlzLnRleHQsXHJcbiAgICAgICAgICAgIHRvcExlZnRYICsgd2lkdGggLyAyLFxyXG4gICAgICAgICAgICB0b3BMZWZ0WSArIGhlaWdodCAvIDIgKyBmb250U2l6ZSAvIDIuNFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY3R4LnJlc3RvcmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY29sbGlkZShwb2ludFg6IG51bWJlciwgcG9pbnRZOiBudW1iZXIpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50b3BMZWZ0WCA8PSBwb2ludFhcclxuICAgICAgICAgICAgJiYgcG9pbnRYIDw9IHRoaXMuYm90dG9tUmlnaHRYXHJcbiAgICAgICAgICAgICYmIHRoaXMudG9wTGVmdFkgPD0gcG9pbnRZXHJcbiAgICAgICAgICAgICYmIHBvaW50WSA8PSB0aGlzLmJvdHRvbVJpZ2h0WTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGVsZXRlKCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZHJhd2FibGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChkcmF3YWJsZXNbaV0uaWQgPT09IHRoaXMuaWQpIHtcclxuICAgICAgICAgICAgICAgIGRyYXdhYmxlcy5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2xsaWRlYWJsZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGNvbGxpZGVhYmxlc1tpXS5pZCA9PT0gdGhpcy5pZCkge1xyXG4gICAgICAgICAgICAgICAgY29sbGlkZWFibGVzLnNwbGljZShpLCAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHVwZGF0ZWFibGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh1cGRhdGVhYmxlc1tpXS5pZCA9PT0gdGhpcy5pZCkge1xyXG4gICAgICAgICAgICAgICAgdXBkYXRlYWJsZXMuc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IHRhcmdldHMgfSBmcm9tIFwiLi90YXJnZXRzXCI7XHJcbmltcG9ydCB7IENvbGxpZGVhYmxlLCBEcmF3YWJsZSwgVXBkYXRlYWJsZSB9IGZyb20gXCIuL3R5cGVzXCI7XHJcblxyXG5leHBvcnQgbGV0IHdpZHRoOiBudW1iZXIgPSAxMDAwO1xyXG5leHBvcnQgbGV0IGhlaWdodDogbnVtYmVyID0gNzAwO1xyXG5leHBvcnQgbGV0IGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xyXG5leHBvcnQgbGV0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XHJcbmNhbnZhcy53aWR0aCA9IHdpZHRoO1xyXG5jYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG5jdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG5leHBvcnQgbGV0IGRyYXdhYmxlczogRHJhd2FibGVbXSA9IFtdO1xyXG5leHBvcnQgbGV0IGNvbGxpZGVhYmxlczogQ29sbGlkZWFibGVbXSA9IFtdO1xyXG5leHBvcnQgbGV0IHVwZGF0ZWFibGVzOiBVcGRhdGVhYmxlW10gPSBbXTtcclxuXHJcbi8vIFB1dCBhbnkgZ2xvYmFsIHZhcmlhYmxlcyB0aGF0IHlvdSB3YW50IHRvIGJlIGFibGUgdG8gcmVhc3NpZ24gaGVyZVxyXG5leHBvcnQgbGV0IGcgPSB7XHJcbiAgICBiYW5hbmFzOiAwLFxyXG4gICAgbW9ua2V5czogMCxcclxuICAgIC8vIGxldHRlcnNUb1R5cGVSZW1haW5kZXI6IDAsXHJcbiAgICBsZXR0ZXJzUGVyU2Vjb25kOiAwLFxyXG4gICAgbW91c2VYOiAtMSxcclxuICAgIG1vdXNlWTogLTEsXHJcbiAgICBpZENvdW50ZXI6IDAsXHJcbiAgICBjdXJyZW50VGFyZ2V0SW5kZXg6IDAsXHJcbiAgICBjdXJyZW50VGFyZ2V0OiB0YXJnZXRzWzBdLFxyXG4gICAga2V5Ym9hcmRLZXlzOiBbXCJBXCJdLFxyXG4gICAgbWF4S2V5Ym9hcmRLZXlzOiAxLFxyXG4gICAgdGFyZ2V0T3duZWQ6IFt0cnVlXSxcclxuICAgIGFkZGl0aXZlUGVyY2VudEJvbnVzOiAwLFxyXG4gICAgYWRkaXRpdmVGbGF0Qm9udXM6IDAsXHJcbiAgICBjaGFyYWN0ZXJzVG9DaG9vc2VGcm9tOiA8c3RyaW5nW10+W10sXHJcbiAgICBpbmNvbWVBY2N1bXVsYXRvcjogMCxcclxufTtcclxuXHJcbmZvcihsZXQgaSA9IDE7IGkgPCB0YXJnZXRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBnLnRhcmdldE93bmVkLnB1c2goZmFsc2UpO1xyXG59XHJcbiIsImltcG9ydCB7IGcgfSBmcm9tIFwiLi9nbG9iYWxcIjtcclxuaW1wb3J0IHsgU2F2ZUZpbGUsIHNhdmVGaWxlVmVyc2lvbiB9IGZyb20gXCIuL3NhdmVfZmlsZVwiO1xyXG5pbXBvcnQgeyB0YXJnZXRzIH0gZnJvbSBcIi4vdGFyZ2V0c1wiO1xyXG5cclxubGV0IHNhdmVLZXk6IHN0cmluZyA9IFwiaW5maW5lLW1vbmtleS1pZGxlLWdhbWVcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzYXZlKCkge1xyXG4gICAgbGV0IHNhdmVGaWxlOiBTYXZlRmlsZSA9IGdldFNhdmVGaWxlKCk7XHJcbiAgICBsZXQgc2F2ZUZpbGVTdHJpbmc6IHN0cmluZyA9IEpTT04uc3RyaW5naWZ5KHNhdmVGaWxlKTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHNhdmVLZXksIHNhdmVGaWxlU3RyaW5nKTtcclxuICAgIGNvbnNvbGUubG9nKFwiU2F2ZWQhXCIpO1xyXG4gICAgY29uc29sZS5sb2coc2F2ZUZpbGVTdHJpbmcpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRTYXZlRmlsZSgpOiBTYXZlRmlsZSB7XHJcbiAgICByZXR1cm4gbmV3IFNhdmVGaWxlKFxyXG4gICAgICAgIGcuYmFuYW5hcyxcclxuICAgICAgICBnLm1vbmtleXMsXHJcbiAgICAgICAgZy5jdXJyZW50VGFyZ2V0SW5kZXgsXHJcbiAgICAgICAgZy5rZXlib2FyZEtleXMsXHJcbiAgICAgICAgZy5tYXhLZXlib2FyZEtleXMsXHJcbiAgICAgICAgZy50YXJnZXRPd25lZCxcclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBsb2FkRnJvbUxvY2FsU3RvcmFnZSgpIHtcclxuICAgIGxldCBzYXZlRmlsZVN0cmluZyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHNhdmVLZXkpO1xyXG4gICAgaWYgKHNhdmVGaWxlU3RyaW5nID09PSB1bmRlZmluZWRcclxuICAgICAgICB8fCBzYXZlRmlsZVN0cmluZyA9PT0gbnVsbCkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJDb3VsZCBub3QgbG9hZCBzYXZlXCIpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJTYXZlIGZvdW5kXCIsIHNhdmVGaWxlU3RyaW5nKTtcclxuICAgIH1cclxuICAgIGxvYWRGcm9tU3RyaW5nKHNhdmVGaWxlU3RyaW5nKTtcclxufVxyXG5cclxuLy8gSSBzaG91bGQgYmUgYWJsZSB0byBjYWxsIHRoaXMgd2hldGhlciBJJ20gbG9hZGluZyBmcm9tXHJcbi8vIGxvY2FsIHN0b3JhZ2Ugb3IgZnJvbSBhIHVzZXItcHJvdmlkZWQgc2F2ZSBpbXBvcnQgc3RyaW5nXHJcbmV4cG9ydCBmdW5jdGlvbiBsb2FkRnJvbVN0cmluZyhpbXBvcnRTdHJpbmc6IHN0cmluZykge1xyXG4gICAgbGV0IGxvYWRlZFNhdmU6IFNhdmVGaWxlID0gSlNPTi5wYXJzZShpbXBvcnRTdHJpbmcpO1xyXG4gICAgaWYgKGxvYWRlZFNhdmUgPT09IHVuZGVmaW5lZFxyXG4gICAgICAgIHx8IGxvYWRlZFNhdmUgPT09IG51bGwpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGxvYWQgc2F2ZSBmcm9tIGxvY2FsIHN0b3JhZ2U6IEpTT04gcGFyc2UgZXJyb3JcIik7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfSBlbHNlIGlmIChsb2FkZWRTYXZlLnZlcnNpb24gIT09IHNhdmVGaWxlVmVyc2lvbikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBzYXZlIGZyb20gbG9jYWwgc3RvcmFnZTogVmVyc2lvbiBtaXNtYXRjaFwiKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyhcIkxvYWRlZCBzYXZlXCIpO1xyXG4gICAgY29uc29sZS5sb2cobG9hZGVkU2F2ZSk7XHJcbiAgICBnLmJhbmFuYXMgPSBsb2FkZWRTYXZlLmJhbmFuYXM7XHJcbiAgICBnLm1vbmtleXMgPSBsb2FkZWRTYXZlLm1vbmtleXM7XHJcbiAgICBnLmxldHRlcnNQZXJTZWNvbmQgPSBnLm1vbmtleXM7XHJcbiAgICBnLmN1cnJlbnRUYXJnZXRJbmRleCA9IGxvYWRlZFNhdmUudGFyZ2V0SW5kZXg7XHJcbiAgICBnLmN1cnJlbnRUYXJnZXQgPSB0YXJnZXRzW2xvYWRlZFNhdmUudGFyZ2V0SW5kZXhdO1xyXG4gICAgZy5rZXlib2FyZEtleXMgPSBsb2FkZWRTYXZlLmtleWJvYXJkS2V5cztcclxuICAgIGcubWF4S2V5Ym9hcmRLZXlzID0gbG9hZGVkU2F2ZS5tYXhLZXlib2FyZEtleXM7XHJcbiAgICBnLnRhcmdldE93bmVkID0gbG9hZGVkU2F2ZS50YXJnZXRPd25lZDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGV4cG9ydFNhdmVUb1N0cmluZygpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGdldFNhdmVGaWxlKCkpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZXJhc2VTYXZlKCkge1xyXG4gICAgY29uc29sZS5sb2coXCJTYXZlIEVyYXNlZCFcIik7XHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShzYXZlS2V5KTtcclxufVxyXG4iLCJleHBvcnQgbGV0IHNhdmVGaWxlVmVyc2lvbjogbnVtYmVyID0gMztcclxuXHJcbmV4cG9ydCBjbGFzcyBTYXZlRmlsZSB7XHJcbiAgICAvLyBVc2UgdGhlIHZlcnNpb24gbnVtYmVyIHRvIGRldGVjdCBhbmQgaW52YWxpZGF0ZVxyXG4gICAgLy8gb2xkIGFuZCBpbmNvbXBhdGlibGUgc2F2ZSBmaWxlc1xyXG4gICAgcHVibGljIHZlcnNpb246IG51bWJlcjtcclxuXHJcbiAgICBwdWJsaWMgYmFuYW5hczogbnVtYmVyO1xyXG4gICAgcHVibGljIG1vbmtleXM6IG51bWJlcjtcclxuICAgIHB1YmxpYyB0YXJnZXRJbmRleDogbnVtYmVyO1xyXG4gICAgcHVibGljIGtleWJvYXJkS2V5czogc3RyaW5nW107XHJcbiAgICBwdWJsaWMgbWF4S2V5Ym9hcmRLZXlzOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgdGFyZ2V0T3duZWQ6IGJvb2xlYW5bXTtcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoXHJcbiAgICAgICAgYmFuYW5hczogbnVtYmVyLFxyXG4gICAgICAgIG1vbmtleXM6IG51bWJlcixcclxuICAgICAgICB0YXJnZXRJbmRleDogbnVtYmVyLFxyXG4gICAgICAgIGtleWJvYXJkS2V5czogc3RyaW5nW10sXHJcbiAgICAgICAgbWF4S2V5Ym9hcmRLZXlzOiBudW1iZXIsXHJcbiAgICAgICAgdGFyZ2V0T3duZWQ6IGJvb2xlYW5bXSxcclxuICAgICkge1xyXG4gICAgICAgIHRoaXMudmVyc2lvbiA9IHNhdmVGaWxlVmVyc2lvbjtcclxuICAgICAgICB0aGlzLmJhbmFuYXMgPSBiYW5hbmFzO1xyXG4gICAgICAgIHRoaXMubW9ua2V5cyA9IG1vbmtleXM7XHJcbiAgICAgICAgdGhpcy50YXJnZXRJbmRleCA9IHRhcmdldEluZGV4O1xyXG4gICAgICAgIHRoaXMua2V5Ym9hcmRLZXlzID0ga2V5Ym9hcmRLZXlzO1xyXG4gICAgICAgIHRoaXMubWF4S2V5Ym9hcmRLZXlzID0gbWF4S2V5Ym9hcmRLZXlzO1xyXG4gICAgICAgIHRoaXMudGFyZ2V0T3duZWQgPSB0YXJnZXRPd25lZDtcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgY2xhc3MgVGFyZ2V0IHtcclxuICAgIHB1YmxpYyBsZXR0ZXJzOiBzdHJpbmdbXTtcclxuICAgIHB1YmxpYyBkaXNwbGF5U3RyaW5nOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgcmV3YXJkczogbnVtYmVyW107XHJcbiAgICBwdWJsaWMgcHJpY2U6IG51bWJlcjtcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoXHJcbiAgICAgICAgbGV0dGVyczogc3RyaW5nW10sXHJcbiAgICAgICAgZGlzcGxheVN0cmluZzogc3RyaW5nLFxyXG4gICAgICAgIHJld2FyZHM6IG51bWJlcltdLFxyXG4gICAgICAgIHByaWNlOiBudW1iZXIsXHJcbiAgICApIHtcclxuICAgICAgICB0aGlzLmxldHRlcnMgPSBsZXR0ZXJzO1xyXG4gICAgICAgIHRoaXMuZGlzcGxheVN0cmluZyA9IGRpc3BsYXlTdHJpbmc7XHJcbiAgICAgICAgdGhpcy5yZXdhcmRzID0gcmV3YXJkcztcclxuICAgICAgICB0aGlzLnByaWNlID0gcHJpY2U7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgVGFyZ2V0IH0gZnJvbSBcIi4vdGFyZ2V0XCI7XHJcblxyXG5leHBvcnQgbGV0IHRhcmdldHM6IFRhcmdldFtdID0gW1xyXG4gICAgbmV3IFRhcmdldChcclxuICAgICAgICBbXCJDXCIsIFwiQVwiLCBcIlRcIl0sXHJcbiAgICAgICAgXCJDQVRcIixcclxuICAgICAgICBbMSwgOCwgNDBdLFxyXG4gICAgICAgIDAsXHJcbiAgICApLFxyXG4gICAgbmV3IFRhcmdldChcclxuICAgICAgICBbXCJIXCIsIFwiT1wiLCBcIk9cIiwgXCJUXCJdLFxyXG4gICAgICAgIFwiSE9PVFwiLFxyXG4gICAgICAgIFs1LCAxMCwgNDAsIDE4MF0sXHJcbiAgICAgICAgMjAwMCxcclxuICAgICksXHJcbiAgICBuZXcgVGFyZ2V0KFxyXG4gICAgICAgIFtcIlJcIiwgXCJFXCIsIFwiRlwiLCBcIkVcIiwgXCJSXCIsIFwiRVwiLCBcIkVcIl0sXHJcbiAgICAgICAgXCJSRUZFUkVFXCIsXHJcbiAgICAgICAgWzUsIDUsIDUsIDIwLCA0MDAsIDI0MDAsIDE1MDAwXSxcclxuICAgICAgICAzMDAwMCxcclxuICAgICksXHJcbiAgICAvLyBuZXcgVGFyZ2V0KFxyXG4gICAgLy8gICAgIFtdLFxyXG4gICAgLy8gICAgIFwiXCIsXHJcbiAgICAvLyAgICAgW10sXHJcbiAgICAvLyAgICAgMCxcclxuICAgIC8vICksXHJcbl07XHJcbiIsImltcG9ydCB7IGN0eCwgZHJhd2FibGVzLCBnLCB1cGRhdGVhYmxlcyB9IGZyb20gXCIuL2dsb2JhbFwiO1xyXG5pbXBvcnQgeyBjb3VudE1hdGNoaW5nTGV0dGVycywgZ2V0UmFuZG9tQ2hhcmFjdGVyLCByZ2JTdHJpbmcgfSBmcm9tIFwiLi91dGlsXCI7XHJcblxyXG5sZXQgdGV4dERpc3BsYXlzOiBUZXh0RGlzcGxheVtdID0gW107XHJcbmV4cG9ydCBjbGFzcyBUZXh0RGlzcGxheSB7XHJcbiAgICBwdWJsaWMgeDogbnVtYmVyO1xyXG4gICAgcHVibGljIHk6IG51bWJlcjtcclxuICAgIHB1YmxpYyBoZWlnaHQ6IG51bWJlcjtcclxuICAgIHB1YmxpYyB3aWR0aDogbnVtYmVyO1xyXG4gICAgcHVibGljIGlkOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgbGV0dGVyc1RvVHlwZVJlbWFpbmRlcjogbnVtYmVyID0gMDtcclxuICAgIHB1YmxpYyBsYXN0V29yZEZpbmlzaFRpbWVNaWxsaXM6IG51bWJlcjtcclxuICAgIHB1YmxpYyBjdXJyZW50U3RyaW5nOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgcHVibGljIGNvcnJlY3RDb2xvcjogc3RyaW5nID0gcmdiU3RyaW5nKDI1NSwgMTg3LCAwKTtcclxuICAgIFxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIC8vIHg6IG51bWJlcixcclxuICAgICAgICAvLyB5OiBudW1iZXIsXHJcbiAgICAgICAgLy8gaGVpZ2h0OiBudW1iZXIsXHJcbiAgICApIHtcclxuICAgICAgICAvLyB0aGlzLnggPSB4O1xyXG4gICAgICAgIC8vIHRoaXMueSA9IHk7XHJcbiAgICAgICAgLy8gdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XHJcblxyXG4gICAgICAgIHRoaXMuaWQgPSBnLmlkQ291bnRlcjtcclxuICAgICAgICBnLmlkQ291bnRlciArPSAxO1xyXG4gICAgICAgIGRyYXdhYmxlcy5wdXNoKHRoaXMpO1xyXG4gICAgICAgIHVwZGF0ZWFibGVzLnB1c2godGhpcyk7XHJcbiAgICAgICAgdGV4dERpc3BsYXlzLnB1c2godGhpcyk7XHJcbiAgICAgICAgYWxpZ25UZXh0RGlzcGxheXNUb0dyaWQoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdXBkYXRlKGN1cnJlbnRUaW1lTWlsbGlzOiBudW1iZXIsIGVsYXBzZWRUaW1lTWlsbGlzOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmxldHRlcnNUb1R5cGVSZW1haW5kZXIgKz0gZWxhcHNlZFRpbWVNaWxsaXMgLyAxMDAwICogZy5sZXR0ZXJzUGVyU2Vjb25kO1xyXG5cclxuICAgICAgICAvLyBNYWtlIGEgZmluaXNoZWQgd29yZCBzdGF5IG9uIHNjcmVlbiBmb3IgNTAwbXMsIG9yIHVudGlsXHJcbiAgICAgICAgLy8gYW5vdGhlciBsZXR0ZXIgaXMgdHlwZWRcclxuICAgICAgICBpZiAoKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5sYXN0V29yZEZpbmlzaFRpbWVNaWxsaXMgIT09IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICAgICAgJiYgKGN1cnJlbnRUaW1lTWlsbGlzIC0gdGhpcy5sYXN0V29yZEZpbmlzaFRpbWVNaWxsaXMpID4gNTAwXHJcbiAgICAgICAgICAgICkgfHwgKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5sZXR0ZXJzVG9UeXBlUmVtYWluZGVyID49IDFcclxuICAgICAgICAgICAgICAgICYmIHRoaXMuY3VycmVudFN0cmluZy5sZW5ndGggPj0gZy5jdXJyZW50VGFyZ2V0LmxldHRlcnMubGVuZ3RoXHJcbiAgICAgICAgICAgICkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFN0cmluZyA9IFtdO1xyXG4gICAgICAgICAgICB0aGlzLmxhc3RXb3JkRmluaXNoVGltZU1pbGxpcyA9IHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gR2VuZXJhdGUgdGhlIG5lZWRlZCBjaGFyYWN0ZXJzIGFuZCBhd2FyZCBiYW5hbmFzXHJcbiAgICAgICAgd2hpbGUgKHRoaXMubGV0dGVyc1RvVHlwZVJlbWFpbmRlciA+PSAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGV0dGVyc1RvVHlwZVJlbWFpbmRlciAtPSAxO1xyXG4gICAgICAgICAgICBpZiAoZy5jaGFyYWN0ZXJzVG9DaG9vc2VGcm9tLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IGNoYXJhY3RlciA9IGdldFJhbmRvbUNoYXJhY3RlcigpO1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTdHJpbmcucHVzaChjaGFyYWN0ZXIpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50U3RyaW5nLmxlbmd0aCA+PSBnLmN1cnJlbnRUYXJnZXQubGV0dGVycy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubGFzdFdvcmRGaW5pc2hUaW1lTWlsbGlzID0gY3VycmVudFRpbWVNaWxsaXM7XHJcbiAgICAgICAgICAgICAgICBsZXQgbWF0Y2hpbmdMZXR0ZXJzOiBudW1iZXIgPSBjb3VudE1hdGNoaW5nTGV0dGVycyhcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRTdHJpbmcsIGcuY3VycmVudFRhcmdldC5sZXR0ZXJzKTtcclxuICAgICAgICAgICAgICAgIGlmIChtYXRjaGluZ0xldHRlcnMgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGJhbmFuYXNUb0FkZCA9IChnLmN1cnJlbnRUYXJnZXQucmV3YXJkc1ttYXRjaGluZ0xldHRlcnMgLSAxXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICArIGcuYWRkaXRpdmVGbGF0Qm9udXMpICogKDEgKyBnLmFkZGl0aXZlUGVyY2VudEJvbnVzKTtcclxuICAgICAgICAgICAgICAgICAgICBnLmJhbmFuYXMgKz0gYmFuYW5hc1RvQWRkO1xyXG4gICAgICAgICAgICAgICAgICAgIGcuaW5jb21lQWNjdW11bGF0b3IgKz0gYmFuYW5hc1RvQWRkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubGV0dGVyc1RvVHlwZVJlbWFpbmRlciA+PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50U3RyaW5nID0gW107XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBkcmF3KCkge1xyXG4gICAgICAgIGxldCBjdXJyZW50U3RyaW5nID0gdGhpcy5jdXJyZW50U3RyaW5nO1xyXG4gICAgICAgIGxldCBmb250U2l6ZTogbnVtYmVyID0gdGhpcy5oZWlnaHQgKiA0IC8gNztcclxuICAgICAgICAvLyBsZXQgd2lkdGggPSBnLmN1cnJlbnRUYXJnZXQubGV0dGVycy5sZW5ndGggKiBmb250U2l6ZTtcclxuICAgICAgICBjdHguc2F2ZSgpO1xyXG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IFwiYmxhY2tcIjtcclxuICAgICAgICBjdHguc3Ryb2tlUmVjdChcclxuICAgICAgICAgICAgdGhpcy54LFxyXG4gICAgICAgICAgICB0aGlzLnksXHJcbiAgICAgICAgICAgIHRoaXMud2lkdGgsXHJcbiAgICAgICAgICAgIHRoaXMuaGVpZ2h0XHJcbiAgICAgICAgKTtcclxuICAgICAgICBjdHguZm9udCA9IGZvbnRTaXplICsgXCJweCBBcmlhbFwiO1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBnLmN1cnJlbnRUYXJnZXQubGV0dGVycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgY2hhcmFjdGVyOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGlmIChpID49IGN1cnJlbnRTdHJpbmcubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBjaGFyYWN0ZXIgPSBcIl9cIjtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNoYXJhY3RlciA9IGN1cnJlbnRTdHJpbmdbaV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGNoYXJhY3RlciA9PT0gXCJfXCIpIHtcclxuICAgICAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBcImJsYWNrXCI7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY2hhcmFjdGVyID09PSBnLmN1cnJlbnRUYXJnZXQubGV0dGVyc1tpXSkge1xyXG4gICAgICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IHRoaXMuY29ycmVjdENvbG9yO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwiYmxhY2tcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjdHguZmlsbFRleHQoXHJcbiAgICAgICAgICAgICAgICBjaGFyYWN0ZXIsXHJcbiAgICAgICAgICAgICAgICB0aGlzLnggKyBmb250U2l6ZSAqIDAuMTUgKyBmb250U2l6ZSAqIGksXHJcbiAgICAgICAgICAgICAgICB0aGlzLnkgKyBmb250U2l6ZSAqIDEuMlxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjdHgucmVzdG9yZSgpO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYWxpZ25UZXh0RGlzcGxheXNUb0dyaWQoKSB7XHJcbiAgICBsZXQgbnVtRGlzcGxheXMgPSB0ZXh0RGlzcGxheXMubGVuZ3RoO1xyXG4gICAgbGV0IHhPZmZzZXQgPSAzMDtcclxuICAgIGxldCB5T2Zmc2V0ID0gMTUwO1xyXG4gICAgbGV0IG1heFdpZHRoID0gNjgwO1xyXG4gICAgbGV0IG1heEhlaWdodCA9IDI3MDtcclxuICAgIGxldCB3aWR0aDtcclxuICAgIGxldCBudW1Db2x1bW5zO1xyXG4gICAgbGV0IG5vbkVtcHR5Um93cztcclxuICAgIGxldCBoZWlnaHQgPSA1MztcclxuICAgIGRvIHtcclxuICAgICAgICB3aWR0aCA9IGcuY3VycmVudFRhcmdldC5sZXR0ZXJzLmxlbmd0aCAqIGhlaWdodCAqIDQgLyA3O1xyXG4gICAgICAgIG51bUNvbHVtbnMgPSBNYXRoLmZsb29yKG1heFdpZHRoIC8gd2lkdGgpO1xyXG4gICAgICAgIG5vbkVtcHR5Um93cyA9IE1hdGguY2VpbChudW1EaXNwbGF5cyAvIG51bUNvbHVtbnMpO1xyXG4gICAgICAgIGlmIChoZWlnaHQgKiBub25FbXB0eVJvd3MgPD0gbWF4SGVpZ2h0KSB7XHJcbiAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGhlaWdodCAtPSAxO1xyXG4gICAgfSB3aGlsZSh0cnVlKTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bURpc3BsYXlzOyBpKyspIHtcclxuICAgICAgICBsZXQgcm93ID0gTWF0aC5mbG9vcihpIC8gbnVtQ29sdW1ucyk7XHJcbiAgICAgICAgbGV0IGNvbHVtbiA9IGkgJSBudW1Db2x1bW5zO1xyXG4gICAgICAgIGxldCB4ID0gY29sdW1uICogd2lkdGggKyB4T2Zmc2V0O1xyXG4gICAgICAgIGxldCB5ID0gcm93ICogaGVpZ2h0ICsgeU9mZnNldDtcclxuICAgICAgICB0ZXh0RGlzcGxheXNbaV0ueCA9IHg7XHJcbiAgICAgICAgdGV4dERpc3BsYXlzW2ldLnkgPSB5O1xyXG4gICAgICAgIHRleHREaXNwbGF5c1tpXS5oZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICAgICAgdGV4dERpc3BsYXlzW2ldLndpZHRoID0gd2lkdGg7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgZyB9IGZyb20gXCIuL2dsb2JhbFwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvdW50TWF0Y2hpbmdMZXR0ZXJzKHMxOiBzdHJpbmdbXSwgczI6IHN0cmluZ1tdKSB7XHJcbiAgICBsZXQgbWF0Y2hpbmcgPSAwO1xyXG4gICAgbGV0IG1pbkxlbmd0aCA9IE1hdGgubWluKHMxLmxlbmd0aCwgczIubGVuZ3RoKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWluTGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAoczFbaV0gPT09IHMyW2ldKSB7XHJcbiAgICAgICAgICAgIG1hdGNoaW5nKys7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG1hdGNoaW5nO1xyXG59XHJcblxyXG4vLyBCdWZmZXIgdGhlIHJhbmRvbSBjaGFyYWN0ZXJzIHdlIGdldCBmcm9tIGNyeXB0byB0byBpbXByb3ZlXHJcbi8vIHRoZSBzcGVlZC4gQWxzbywgSSB0ZXN0ZWQgaXQsIGFuZCBpdCdzIGZhc3RlciB0aGFuIHVzaW5nXHJcbi8vIE1hdGgucmFuZG9tLCBhbmQgaG9wZWZ1bGx5IGhhcyBiZXR0ZXIgcmFuZG9tbmVzc1xyXG5sZXQgYnVmZmVyU2l6ZSA9IDEwMDAwO1xyXG5sZXQgbnVtYmVyQnVmZmVyOiBVaW50MTZBcnJheSA9IGdldFJhbmRvbU51bWJlcnMoYnVmZmVyU2l6ZSk7XHJcbmxldCBudW1iZXJCdWZmZXJJbmRleCA9IC0xO1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmFuZG9tQ2hhcmFjdGVyKCkge1xyXG4gICAgbnVtYmVyQnVmZmVySW5kZXggKz0gMTtcclxuICAgIGlmIChudW1iZXJCdWZmZXJJbmRleCA+PSBidWZmZXJTaXplKSB7XHJcbiAgICAgICAgbnVtYmVyQnVmZmVySW5kZXggPSAwO1xyXG4gICAgICAgIG51bWJlckJ1ZmZlciA9IGdldFJhbmRvbU51bWJlcnMoYnVmZmVyU2l6ZSk7XHJcbiAgICB9XHJcbiAgICBsZXQgcmFuZG9tTnVtYmVyID0gbnVtYmVyQnVmZmVyW251bWJlckJ1ZmZlckluZGV4XTtcclxuICAgIHJldHVybiBnLmNoYXJhY3RlcnNUb0Nob29zZUZyb21bcmFuZG9tTnVtYmVyXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFJhbmRvbU51bWJlcnMobjogbnVtYmVyKSB7XHJcbiAgICBsZXQgcmFuZG9tTnVtYmVycyA9IG5ldyBVaW50MTZBcnJheShuKTtcclxuICAgIHJhbmRvbU51bWJlcnMgPSBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKHJhbmRvbU51bWJlcnMpO1xyXG4gICAgcmV0dXJuIHJhbmRvbU51bWJlcnM7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZ2JTdHJpbmcocmVkOiBudW1iZXIsIGdyZWVuOiBudW1iZXIsIGJsdWU6IG51bWJlcikge1xyXG4gICAgcmV0dXJuIFwicmdiKFwiICsgcmVkICsgXCIsXCIgKyBncmVlbiArIFwiLFwiICsgYmx1ZSArIFwiKVwiO1xyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gVE9ETzpcclxuLy8gQXV0by1zYXZlIGV2ZXJ5IDEwIHNlY29uZHNcclxuLy8gUHJldmVudCBjYXRjaHVwIGxhZyBhZnRlciB0YWItb3V0XHJcbi8vIEF1dG8tY2FsY3VsYXRlIHRydWUgYXZlcmFnZSBiYW5hbmFzIHBlciB3b3JkXHJcbi8vIHJlY3J1aXQgbXVsdGlwbGUgbW9ua2V5cyBhdCBhIHRpbWUgKDEweCwgMTAweClcclxuLy8gZG8gc29tZSBraW5kIG9mIHZpc3VhbCBlZmZlY3QgdG8gaW5kaWNhdGUgdGhlIHF1YWxpdHkgb2YgXHJcbi8vICAgIHRoZSBtYXRjaGVzLCBlLmcuIHR1cm4gZ29sZCBhbmQgcGF1c2Ugb24gcGVyZmVjdCBtYXRjaFxyXG4vLyB1c2UgYSBibGlua2luZyB1bmRlcmxpbmUgYW5pbWF0aW9uIGZvciB0aGUgbmV4dCBsZXR0ZXIgb25cclxuLy8gICAgYW55IHRleHQgZGlzcGxheSAtIGxpa2UgYW4gb2xkIGNvbW1hbmQgbGluZVxyXG4vLyBjb2xvciB0aGUgbGV0dGVycyBiYXNlZCBvbiB3aHRoZXIgdGhleSdyZSBjb3JyZWN0XHJcbi8vIHZpc3VhbGx5IGluZGljYXRlIHRoZSBudW1iZXIgb2YgbGV0dGVycyB5b3VyIGtleWJvYXJkIGNhbiBmaXRcclxuXHJcbi8vIEhhdmUgdGV4dCBmaXQgd2l0aGluIHRoZSBib3VuZHMgb2YgdGhlIGJ1dHRvbnNcclxuLy8gVGhlIHNhdmUgc2hvdWxkIGJlIGVuY3J5cHRlZFxyXG4vLyBUaGUgZXJhc2Ugc2F2ZSBidXR0b24gc2hvdWxkIGhhdmUgYSBjb25maXJtYXRpb24gc3RlcFxyXG4vLyBUaGUgZXJhc2Ugc2F2ZSBidXR0b24gc2hvdWxkIGFsc28gcmVzZXQgdGhlIGdhbWUgKHByb2JhYmx5IHdpbGwgcmVuYW1lIHRoZSBidXR0b24pXHJcbi8vIFRoZXJlIHNob3VsZCBiZSBhbiBpbXBvcnQvZXhwb3J0IG9wdGlvbiB0byBsZXQgdGhlIHBsYXllciBiYWNrIHVwIHRoZWlyIHNhdmVcclxuLy8gVGhlcmUgYXJlIGJhbGFuY2UgaXNzdWVzXHJcbi8vIFRoZXJlIHNob3VsZCBiZSB1cGdyYWRlc1xyXG4vLyBhZGp1c3RhYmxlIHVwZGF0ZSByYXRlIGZvciBiYW5hbmFzIHBlciBzZWNvbmQgZGlzcGxheVxyXG4vLyBjb21wcmVzc2VkIG5vdGF0aW9uIGZvciBsYXJnZSBudW1iZXJzXHJcblxyXG4vLyBIb3cgbWFueSBzY3JlZW5zIGNhbiBJIGRpc3BsYXkgYXQgb25jZT9cclxuLy8gICAgY2FuIEkgZ2V0IHRvIGxpa2UgMTAwaz9cclxuLy8gICAgcHJvYmFibHkgbm90IHVubGVzcyBJIGZpZ3VyZSBvdXQgYSB3YXkgdG8gc3VtbWFyaXplIHZpc3VhbGx5XHJcbi8vICAgIGhvdyBoaWdoIGNhbiBJIGdldCB3aXRob3V0IGNvbnNpZGVyaW5nIHZpc3VhbHM/XHJcblxyXG4vLyBXaGF0IGlmIGluc3RlYWQgb2YgcGlja2luZyBvbmUgdGFyZ2V0IHdvcmQgYXQgYSB0aW1lLCB0aGUgcGxheWVyIGJ1aWx0IHVwIGEgZGljdGlvbmFyeT9cclxuLy8gICAgQU5ELCB3aGF0IGlmLCB0aGV5IGVhcm5lZCBiYW5hbmFzIGZvciBldmVyeSBtYXRjaGluZyBsZXR0ZXIgaW4gdGhlaXIgZGljdGlvbmFyeT9cclxuLy8gICAgKHJhdGhlciB0aGFuIGZvciBqdXN0IHRoZSBsZXR0ZXJzIHRoZXkgbWF0Y2hlZCB3aXRoIGEgcGFydGljdWxhciB3b3JkPylcclxuLy8gVGhpcyBpbXBsaWVzIG9uZSBmZWF0dXJlIHdoZXJlIHlvdSBjYW4gdXBncmFkZSBhIHBhcnRpY3VsYXIgc2xvdCB0byBhd2FyZCBtb3JlIGJhbmFuYXNcclxuLy8gICAgZS5nLiBkb3VibGUgYWxsIGJhbmFuYXMgZWFybmVkIGZyb20gbWF0Y2hlcyBpbiB0aGUgc2Vjb25kIGxldHRlclxyXG4vLyBXaGF0IGlmLCBhdCB0aGUgc2FtZSB0aW1lLCB3b3JkcyBhbHNvIGF3YXJkZWQgZGlmZmVyZW50IGFtb3VudHMgZm9yIGRpZmZlcmVudCBudW1iZXJzIG9mIG1hdGNoZXM/XHJcbi8vIFdoYXQgaWYgdGhlIGdhbWUgd2FzIHN0cnVjdHVyZWQga2luZCBvZiBsaWtlIGEgZGVjay1idWlsZGVyP1xyXG4vLyBXaGF0IGlmIHRoZSB3b3JkcyB5b3UgY291bGQgYWRkIHRvIHlvdXIgZGljdGlvbmFyeSB3ZXJlIGNob3NlbiBhdCByYW5kb20/XHJcbi8vIFdoYXQgaWYgd2UgYnJvdWdodCBiYWNrIHRoZSBpZGVhIG9mIGxpbWl0aW5nIGhvdyB0aGUgcGxheWVyIGN1c3RvbWl6ZWQgdGhlaXIga2V5Ym9hcmQ/XHJcbi8vIFdoYXQgaWYgeW91IGNhbiB1cGdyYWRlIHdvcmRzP1xyXG5cclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIi4vYnV0dG9uXCI7XHJcbmltcG9ydCB7IGNhbnZhcywgY29sbGlkZWFibGVzLCBjdHgsIGRyYXdhYmxlcywgZywgdXBkYXRlYWJsZXMgfSBmcm9tIFwiLi9nbG9iYWxcIjtcclxuaW1wb3J0IHsgZXJhc2VTYXZlLCBsb2FkRnJvbUxvY2FsU3RvcmFnZSwgc2F2ZSB9IGZyb20gXCIuL2xvY2FsX3N0b3JhZ2VcIjtcclxuaW1wb3J0IHsgdGFyZ2V0cyB9IGZyb20gXCIuL3RhcmdldHNcIjtcclxuaW1wb3J0IHsgZG93bmxvYWQsIGdlbmVyYXRlUGVybXV0YXRpb25zIH0gZnJvbSBcIi4vdGVzdF9wZXJtdXRhdGlvbnNcIjtcclxuaW1wb3J0IHsgYWxpZ25UZXh0RGlzcGxheXNUb0dyaWQsIFRleHREaXNwbGF5IH0gZnJvbSBcIi4vdGV4dF9kaXNwbGF5XCI7XHJcbmltcG9ydCB7IENvbGxpZGVhYmxlIH0gZnJvbSBcIi4vdHlwZXNcIjtcclxuaW1wb3J0IHsgVXBncmFkZSB9IGZyb20gXCIuL3VwZ3JhZGVcIjtcclxuaW1wb3J0IHsgdXBncmFkZXMgfSBmcm9tIFwiLi91cGdyYWRlc1wiO1xyXG5pbXBvcnQgeyBjb3VudE1hdGNoaW5nTGV0dGVycywgZ2V0UmFuZG9tQ2hhcmFjdGVyLCByZ2JTdHJpbmcgfSBmcm9tIFwiLi91dGlsXCI7XHJcblxyXG4vLyBsZXQgcmVwb3J0MSA9IGdlbmVyYXRlUGVybXV0YXRpb25zKFxyXG4vLyAgICAgW1wiSFwiLCBcIk9cIiwgXCJUXCJdLFxyXG4vLyAgICAgW1wiSFwiLCBcIk9cIiwgXCJPXCIsIFwiVFwiXSxcclxuLy8gKTtcclxuLy8gZG93bmxvYWQoXCJob3QtaG9vdC1wZXJtdXRhdGlvbnMuY3N2XCIsIHJlcG9ydDEpO1xyXG5cclxuLy8gbGV0IHJlcG9ydDIgPSBnZW5lcmF0ZVBlcm11dGF0aW9ucyhcclxuLy8gICAgIFtcIkhcIiwgXCJPXCIsIFwiT1wiLCBcIlRcIl0sXHJcbi8vICAgICBbXCJIXCIsIFwiT1wiLCBcIk9cIiwgXCJUXCJdLFxyXG4vLyApO1xyXG4vLyBkb3dubG9hZChcImhvb3QtaG9vdC1wZXJtdXRhdGlvbnMuY3N2XCIsIHJlcG9ydDIpO1xyXG5cclxubG9hZEZyb21Mb2NhbFN0b3JhZ2UoKTtcclxuXHJcbmxldCBidXR0b25Db2xvcjogc3RyaW5nID0gcmdiU3RyaW5nKDIwMCwgMjAwLCAyNTUpO1xyXG5sZXQgYnV0dG9uSG92ZXJDb2xvcjogc3RyaW5nID0gcmdiU3RyaW5nKDE4MCwgMTgwLCAyMzApO1xyXG5sZXQgZXJhc2VCdXR0b25Db2xvcjogc3RyaW5nID0gcmdiU3RyaW5nKDI1NSwgNTAsIDUwKTtcclxubGV0IGVyYXNlQnV0dG9uSG92ZXJDb2xvcjogc3RyaW5nID0gcmdiU3RyaW5nKDIyNSwgMjAsIDIwKTtcclxuXHJcbi8vIE1ha2UgYnV0dG9ucyBvdXQgb2YgYWxsIHBvc3NpYmxlIGtleWJvYXJkIGtleXNcclxuLy8gbGV0IGFsbEtleWJvYXJkS2V5cyA9IFtcIiBcIiwgXCJBXCIsXCJCXCIsXCJDXCIsXCJEXCIsXCJFXCIsXCJGXCIsXCJHXCIsXCJIXCIsXCJJXCIsXCJKXCIsXCJLXCIsXCJMXCIsXCJNXCIsXCJOXCIsXCJPXCIsXCJQXCIsXCJRXCIsXCJSXCIsXCJTXCIsXCJUXCIsXCJVXCIsXCJWXCIsXCJXXCIsXCJYXCIsXCJZXCIsXCJaXCJdO1xyXG5sZXQgYWxsS2V5Ym9hcmRLZXlzID0gW1wi4o61XCIsIFwiQVwiLFwiQlwiLFwiQ1wiLFwiRFwiLFwiRVwiLFwiRlwiLFwiR1wiLFwiSFwiLFwiSVwiLFwiSlwiLFwiS1wiLFwiTFwiLFwiTVwiLFwiTlwiLFwiT1wiLFwiUFwiLFwiUVwiLFwiUlwiLFwiU1wiLFwiVFwiLFwiVVwiLFwiVlwiLFwiV1wiLFwiWFwiLFwiWVwiLFwiWlwiXTtcclxuZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxLZXlib2FyZEtleXMubGVuZ3RoOyBpKyspIHtcclxuICAgIGxldCBrZXkgPSBhbGxLZXlib2FyZEtleXNbaV07XHJcbiAgICBsZXQgYnV0dG9uID0gbmV3IEJ1dHRvbihcclxuICAgICAgICAyMCArIDMwICogaSxcclxuICAgICAgICA1NTAsXHJcbiAgICAgICAgMjUsXHJcbiAgICAgICAgMjUsXHJcbiAgICAgICAga2V5LFxyXG4gICAgICAgIGJ1dHRvbkNvbG9yLFxyXG4gICAgICAgIGJ1dHRvbkhvdmVyQ29sb3IsXHJcbiAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICBjcmVhdGVDdXJyZW50S2V5Ym9hcmRLZXlCdXR0b24oZy5rZXlib2FyZEtleXMubGVuZ3RoLCBrZXkpO1xyXG4gICAgICAgICAgICBnLmtleWJvYXJkS2V5cy5wdXNoKGtleSk7XHJcbiAgICAgICAgICAgIHVwZGF0ZUNoYXJhY3RlcnNUb0Nob29zZUZyb20oKTtcclxuXHJcbiAgICAgICAgICAgIC8vIG5vdCBzdXJlIGlmIEkgd2lsbCB3YW50IHRvIGNsZWFyIGFsbCB0aGUgY3VycmVudFxyXG4gICAgICAgICAgICAvLyBzdHJpbmdzIHdoZW4gdGhlIHBsYXllciBjaGFuZ2VzIHRoZSBrZXlib2FyZFxyXG4gICAgICAgICAgICAvLyBjdXJyZW50U3RyaW5nID0gW107XHJcbiAgICAgICAgfSxcclxuICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChnLmtleWJvYXJkS2V5cy5sZW5ndGggPCBnLm1heEtleWJvYXJkS2V5cykge1xyXG4gICAgICAgICAgICAgICAgYnV0dG9uLmlzRGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGJ1dHRvbi5pc0Rpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICApO1xyXG59XHJcblxyXG5sZXQgcmFuZG9tTnVtYmVyU2l6ZSA9IDY1NTM2O1xyXG51cGRhdGVDaGFyYWN0ZXJzVG9DaG9vc2VGcm9tKCk7XHJcbmxldCBrZXlib2FyZEtleUJ1dHRvbnM6IEJ1dHRvbltdID0gW11cclxuXHJcbmZvciAobGV0IGkgPSAwOyBpIDwgZy5rZXlib2FyZEtleXMubGVuZ3RoOyBpKyspIHtcclxuICAgIGNyZWF0ZUN1cnJlbnRLZXlib2FyZEtleUJ1dHRvbihpLCBnLmtleWJvYXJkS2V5c1tpXSk7XHJcbn1cclxuXHJcbmxldCB0YXJnZXRCdXR0b25zOiBCdXR0b25bXSA9IFtdO1xyXG5mb3IgKGxldCBpID0gMDsgaSA8IHRhcmdldHMubGVuZ3RoOyBpKyspIHtcclxuICAgIGxldCBidXR0b25UZXh0OiBzdHJpbmcgPSB0YXJnZXRzW2ldLmRpc3BsYXlTdHJpbmc7XHJcbiAgICBpZiAoIWcudGFyZ2V0T3duZWRbaV0pIHtcclxuICAgICAgICBidXR0b25UZXh0ICs9IFwiIFwiICsgdGFyZ2V0c1tpXS5wcmljZTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgYnV0dG9uID0gbmV3IEJ1dHRvbihcclxuICAgICAgICA1MTAsXHJcbiAgICAgICAgMTUgKyAzNSAqIGksXHJcbiAgICAgICAgODAsXHJcbiAgICAgICAgMzAsXHJcbiAgICAgICAgYnV0dG9uVGV4dCxcclxuICAgICAgICBidXR0b25Db2xvcixcclxuICAgICAgICBidXR0b25Ib3ZlckNvbG9yLFxyXG4gICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKCFnLnRhcmdldE93bmVkW2ldKSB7XHJcbiAgICAgICAgICAgICAgICBnLmJhbmFuYXMgLT0gdGFyZ2V0c1tpXS5wcmljZTtcclxuICAgICAgICAgICAgICAgIGJ1dHRvbi50ZXh0ID0gdGFyZ2V0c1tpXS5kaXNwbGF5U3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZy50YXJnZXRPd25lZFtpXSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGcuY3VycmVudFRhcmdldCA9IHRhcmdldHNbaV07XHJcbiAgICAgICAgICAgIGcuY3VycmVudFRhcmdldEluZGV4ID0gaTtcclxuICAgICAgICAgICAgdGFyZ2V0QnV0dG9uc1tpXS5pc0Rpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgYWxpZ25UZXh0RGlzcGxheXNUb0dyaWQoKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldHNbaV0ucHJpY2UgPiBnLmJhbmFuYXNcclxuICAgICAgICAgICAgICAgICAgICAmJiAhZy50YXJnZXRPd25lZFtpXVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfHwgdGFyZ2V0c1tpXS5kaXNwbGF5U3RyaW5nID09PSBnLmN1cnJlbnRUYXJnZXQuZGlzcGxheVN0cmluZ1xyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIGJ1dHRvbi5pc0Rpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGJ1dHRvbi5pc0Rpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgKTtcclxuICAgIHRhcmdldEJ1dHRvbnMucHVzaChidXR0b24pO1xyXG59XHJcblxyXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNhbnZhcyk7XHJcblxyXG5sZXQgcmVjcnVpdFByaWNlID0gMTAgKyAyICogZy5tb25rZXlzO1xyXG5sZXQgYnV0dG9uMSA9IG5ldyBCdXR0b24oXHJcbiAgICAxMDAsXHJcbiAgICAxMDAsXHJcbiAgICA4MCxcclxuICAgIDMwLFxyXG4gICAgXCJSZWNydWl0IE1vbmtleSBcIiArIHJlY3J1aXRQcmljZSxcclxuICAgIGJ1dHRvbkNvbG9yLFxyXG4gICAgYnV0dG9uSG92ZXJDb2xvcixcclxuICAgICgpID0+IHtcclxuICAgICAgICBnLm1vbmtleXMgKz0gMTtcclxuICAgICAgICBuZXcgVGV4dERpc3BsYXkoKTtcclxuICAgICAgICBnLmxldHRlcnNQZXJTZWNvbmQgPSAxO1xyXG4gICAgICAgIGcuYmFuYW5hcyAtPSByZWNydWl0UHJpY2U7XHJcbiAgICAgICAgcmVjcnVpdFByaWNlID0gMTAgKyAyICogZy5tb25rZXlzO1xyXG4gICAgICAgIGJ1dHRvbjEudGV4dCA9IFwiUmVjcnVpdCBNb25rZXkgXCIgKyByZWNydWl0UHJpY2U7XHJcbiAgICB9LFxyXG4gICAgKCkgPT4ge1xyXG4gICAgICAgIGlmIChyZWNydWl0UHJpY2UgPiBnLmJhbmFuYXMpIHtcclxuICAgICAgICAgICAgYnV0dG9uMS5pc0Rpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBidXR0b24xLmlzRGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4pO1xyXG5cclxubGV0IGxhc3RDbGlja2VkVGltZU1pbGxpczogbnVtYmVyO1xyXG5sZXQgYnV0dG9uMiA9IG5ldyBCdXR0b24oXHJcbiAgICAxMDAsXHJcbiAgICA0ODAsXHJcbiAgICA4MCxcclxuICAgIDMwLFxyXG4gICAgXCJUeXBlXCIsXHJcbiAgICBidXR0b25Db2xvcixcclxuICAgIGJ1dHRvbkhvdmVyQ29sb3IsXHJcbiAgICAoY3VycmVudFRpbWVNaWxsaXM6IG51bWJlcikgPT4ge1xyXG4gICAgICAgIGlmIChjdXJyZW50VGltZU1pbGxpcyAhPT0gdW5kZWZpbmVkXHJcbiAgICAgICAgICAgICYmIChjdXJyZW50VGltZU1pbGxpcyAtIGxhc3RDbGlja2VkVGltZU1pbGxpcykgPCA1MCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRleHREaXNwbGF5LmxldHRlcnNUb1R5cGVSZW1haW5kZXIgKz0gMTtcclxuICAgICAgICBsYXN0Q2xpY2tlZFRpbWVNaWxsaXMgPSBjdXJyZW50VGltZU1pbGxpcztcclxuICAgIH0sXHJcbiAgICAoKSA9PiB7fVxyXG4pO1xyXG5cclxubGV0IHVwZ3JhZGVLZXlib2FyZFByaWNlID0gTWF0aC5wb3coMTAsIGcubWF4S2V5Ym9hcmRLZXlzICsgMSk7XHJcbmxldCBidXR0b24zID0gbmV3IEJ1dHRvbihcclxuICAgIDI1MCxcclxuICAgIDQ4MCxcclxuICAgIDgwLFxyXG4gICAgMzAsXHJcbiAgICBcIlVwZ3JhZGUgS2V5Ym9hcmQgXCIgKyB1cGdyYWRlS2V5Ym9hcmRQcmljZSxcclxuICAgIGJ1dHRvbkNvbG9yLFxyXG4gICAgYnV0dG9uSG92ZXJDb2xvcixcclxuICAgICgpID0+IHtcclxuICAgICAgICBnLmJhbmFuYXMgLT0gdXBncmFkZUtleWJvYXJkUHJpY2U7XHJcbiAgICAgICAgZy5tYXhLZXlib2FyZEtleXMgKz0gMTtcclxuICAgICAgICB1cGRhdGVDaGFyYWN0ZXJzVG9DaG9vc2VGcm9tKCk7XHJcbiAgICAgICAgdXBncmFkZUtleWJvYXJkUHJpY2UgPSBNYXRoLnBvdygxMCwgZy5tYXhLZXlib2FyZEtleXMgKyAxKTtcclxuICAgICAgICBidXR0b24zLnRleHQgPSBcIlVwZ3JhZGUgS2V5Ym9hcmQgXCIgKyB1cGdyYWRlS2V5Ym9hcmRQcmljZTtcclxuICAgIH0sXHJcbiAgICAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHVwZ3JhZGVLZXlib2FyZFByaWNlID4gZy5iYW5hbmFzKSB7XHJcbiAgICAgICAgICAgIGJ1dHRvbjMuaXNEaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYnV0dG9uMy5pc0Rpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4pO1xyXG5cclxubGV0IHNhdmVCdXR0b246IEJ1dHRvbiA9IG5ldyBCdXR0b24oXHJcbiAgICAxMCxcclxuICAgIDYwMCxcclxuICAgIDEwMCxcclxuICAgIDMwLFxyXG4gICAgXCJTYXZlXCIsXHJcbiAgICBidXR0b25Db2xvcixcclxuICAgIGJ1dHRvbkhvdmVyQ29sb3IsXHJcbiAgICAoKSA9PiB7c2F2ZSgpfSxcclxuICAgICgpID0+IHt9LFxyXG4pO1xyXG5cclxubGV0IGVyYXNlQnV0dG9uOiBCdXR0b24gPSBuZXcgQnV0dG9uKFxyXG4gICAgMTAsXHJcbiAgICA2NDAsXHJcbiAgICAxMDAsXHJcbiAgICAzMCxcclxuICAgIFwiRXJhc2UgU2F2ZVwiLFxyXG4gICAgZXJhc2VCdXR0b25Db2xvcixcclxuICAgIGVyYXNlQnV0dG9uSG92ZXJDb2xvcixcclxuICAgICgpID0+IHtlcmFzZVNhdmUoKX0sXHJcbiAgICAoKSA9PiB7fSxcclxuKTtcclxuXHJcbi8vIENvbW1lbnQgb3V0IHRoZSB1cGdyYWRlIGJ1dHRvbnMgZm9yIG5vd1xyXG4vLyBsZXQgdXBncmFkZUJ1dHRvbnM6IEJ1dHRvbltdID0gW107XHJcbi8vIGNyZWF0ZVVwZ3JhZGVCdXR0b25zKCk7XHJcblxyXG5sZXQgdGV4dERpc3BsYXkgPSBuZXcgVGV4dERpc3BsYXkoKTtcclxuXHJcbi8vIGxldCBpbmNvbWVBY2N1bXVsYXRvcjogbnVtYmVyID0gMDtcclxubGV0IGxhc3RJbmNvbWVVcGRhdGVUaW1lTWlsbGlzOiBudW1iZXIgPSBwZXJmb3JtYW5jZS5ub3coKTtcclxubGV0IG1pbGxpc1BlckluY29tZVVwZGF0ZTogbnVtYmVyID0gMjAwMDtcclxubGV0IGxhc3RCYW5hbmFzUGVyU2Vjb25kOiBudW1iZXIgPSAwO1xyXG5cclxuLy8gc3RvcmUgdGhlIG1vdXNlIHh5IGluIGNhc2UgaXQgZ2V0cyBleGVjdXRlZCBmYXN0ZXIgdGhhblxyXG4vLyBvbmNlIGV2ZXJ5IGZyYW1lLCB3aGljaCB3b3VsZCBiZSB1c2VsZXNzIHNpbmNlIGhvdmVyIGlzXHJcbi8vIGhhbmRsZWQgb25seSBvbmNlIGV2ZXJ5IGZyYW1lXHJcbmNhbnZhcy5vbm1vdXNlbW92ZSA9IChldjogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgbGV0IGJvdW5kczogRE9NUmVjdCA9IGNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIGcubW91c2VYID0gZXYueCAtIGJvdW5kcy5sZWZ0O1xyXG4gICAgZy5tb3VzZVkgPSBldi55IC0gYm91bmRzLnRvcDtcclxufTtcclxuXHJcbi8vIGFzc3VtZSBmb3Igc2ltcGxpY2l0eSB0aGF0IHlvdSBjYW4ndCBoYXZlIHR3byBtb3VzZWRvd25cclxuLy8gZXZlbnRzIHdpdGhvdXQgYSBtb3VzZXVwXHJcbmNhbnZhcy5vbm1vdXNlZG93biA9IChldjogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgbGV0IGJvdW5kczogRE9NUmVjdCA9IGNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIGxldCBtb3VzZVggPSBldi54IC0gYm91bmRzLmxlZnQ7XHJcbiAgICBsZXQgbW91c2VZID0gZXYueSAtIGJvdW5kcy50b3A7XHJcbiAgICBsZXQgY29sbGlkZWFibGU6IENvbGxpZGVhYmxlID0gZ2V0Q29sbGlkaW5nRW50aXR5KG1vdXNlWCwgbW91c2VZKTtcclxuICAgIGlmIChjb2xsaWRlYWJsZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgY29sbGlkZWFibGUuaXNNb3VzZURvd25lZCA9IHRydWU7XHJcbiAgICAgICAgY3VycmVudE1vdXNlRG93bmVkID0gY29sbGlkZWFibGU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGN1cnJlbnRNb3VzZURvd25lZCA9IHVuZGVmaW5lZDtcclxuICAgIH1cclxufVxyXG5cclxuY2FudmFzLm9ubW91c2V1cCA9IChldjogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgbGV0IGJvdW5kczogRE9NUmVjdCA9IGNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIGxldCBtb3VzZVggPSBldi54IC0gYm91bmRzLmxlZnQ7XHJcbiAgICBsZXQgbW91c2VZID0gZXYueSAtIGJvdW5kcy50b3A7XHJcbiAgICBsZXQgY29sbGlkZWFibGU6IENvbGxpZGVhYmxlID0gZ2V0Q29sbGlkaW5nRW50aXR5KG1vdXNlWCwgbW91c2VZKTtcclxuICAgIGlmIChjb2xsaWRlYWJsZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgaWYgKGNvbGxpZGVhYmxlLmlzTW91c2VEb3duZWRcclxuICAgICAgICAgICAgJiYgIWNvbGxpZGVhYmxlLmlzRGlzYWJsZWQpIHtcclxuICAgICAgICAgICAgY29sbGlkZWFibGUub25DbGljayhldi50aW1lU3RhbXApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChjdXJyZW50TW91c2VEb3duZWQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGN1cnJlbnRNb3VzZURvd25lZC5pc01vdXNlRG93bmVkID0gZmFsc2U7XHJcbiAgICB9XHJcbn1cclxuXHJcbmxldCBwcmV2aW91c1RpbWVNaWxsaXM6IG51bWJlcjtcclxubGV0IHByZXZpb3VzSG92ZXJlZDogQ29sbGlkZWFibGU7XHJcbmxldCBjdXJyZW50TW91c2VEb3duZWQ6IENvbGxpZGVhYmxlO1xyXG4vLyBsZXQgbGFzdFdvcmRGaW5pc2hUaW1lTWlsbGlzOiBudW1iZXI7XHJcblxyXG53aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGRyYXcpO1xyXG5cclxuZnVuY3Rpb24gZHJhdyhjdXJyZW50VGltZU1pbGxpczogbnVtYmVyKSB7XHJcbiAgICBsZXQgZWxhcHNlZFRpbWVNaWxsaXM6IG51bWJlciA9IDA7XHJcbiAgICBpZiAocHJldmlvdXNUaW1lTWlsbGlzICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBlbGFwc2VkVGltZU1pbGxpcyA9IGN1cnJlbnRUaW1lTWlsbGlzIC0gcHJldmlvdXNUaW1lTWlsbGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcclxuICAgIGN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XHJcbiAgICBjdHguZmlsbFJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcclxuXHJcbiAgICBpZiAocHJldmlvdXNIb3ZlcmVkICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBwcmV2aW91c0hvdmVyZWQuaXNIb3ZlcmVkID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbGxpZGVhYmxlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGxldCBpc0NvbGxpZGluZyA9IGNvbGxpZGVhYmxlc1tpXS5jb2xsaWRlKGcubW91c2VYLCBnLm1vdXNlWSk7XHJcbiAgICAgICAgaWYgKGlzQ29sbGlkaW5nKSB7XHJcbiAgICAgICAgICAgIGxldCBjdXJyZW50SG92ZXJlZCA9IGNvbGxpZGVhYmxlc1tpXTtcclxuICAgICAgICAgICAgY3VycmVudEhvdmVyZWQuaXNIb3ZlcmVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgcHJldmlvdXNIb3ZlcmVkID0gY3VycmVudEhvdmVyZWQ7XHJcbiAgICAgICAgICAgIGJyZWFrOyAvLyBvbmx5IG9uZSB0aGluZyBjYW4gYmUgaG92ZXJlZCBvdmVyIGF0IGEgdGltZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBDYWxsIHVwZGF0ZSBvbiBldmVyeXRoaW5nIGp1c3QgYmVmb3JlIGRyYXdcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZHJhd2FibGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgdXBkYXRlYWJsZXNbaV0udXBkYXRlKGN1cnJlbnRUaW1lTWlsbGlzLCBlbGFwc2VkVGltZU1pbGxpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVXBkYXRlIHRoZSBpbmNvbWUgcGVyIHNlY29uZCBpZiBpdCdzIHRpbWUgdG9cclxuICAgIGxldCBlbGFwc2VkU2luY2VMYXN0SW5jb21lVXBkYXRlID0gY3VycmVudFRpbWVNaWxsaXMgLSBsYXN0SW5jb21lVXBkYXRlVGltZU1pbGxpcztcclxuICAgIGlmIChlbGFwc2VkU2luY2VMYXN0SW5jb21lVXBkYXRlID49IG1pbGxpc1BlckluY29tZVVwZGF0ZSkge1xyXG4gICAgICAgIGxhc3RCYW5hbmFzUGVyU2Vjb25kID0gZy5pbmNvbWVBY2N1bXVsYXRvciAvIChlbGFwc2VkU2luY2VMYXN0SW5jb21lVXBkYXRlIC8gMTAwMCk7XHJcbiAgICAgICAgZy5pbmNvbWVBY2N1bXVsYXRvciA9IDA7XHJcbiAgICAgICAgbGFzdEluY29tZVVwZGF0ZVRpbWVNaWxsaXMgPSBjdXJyZW50VGltZU1pbGxpcztcclxuICAgIH1cclxuXHJcbiAgICAvLyBEcmF3IHZhbHVlcyBhdCB0aGUgZW5kIG9mIHRoZSBmcmFtZSBzbyB0aGV5J3JlIGFzIHVwXHJcbiAgICAvLyB0byBkYXRlIGFzIHRoZXkgY2FuIGJlXHJcbiAgICBjdHguc2F2ZSgpO1xyXG4gICAgY3R4LmZpbGxTdHlsZSA9IFwiYmxhY2tcIjtcclxuICAgIGN0eC5mb250ID0gXCIyMHB4IEFyaWFsXCI7XHJcblxyXG4gICAgY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XHJcbiAgICBjdHguZmlsbFRleHQoYmFuYW5hc1BlclNlY29uZChsYXN0QmFuYW5hc1BlclNlY29uZCksIDE0MCwgMzApO1xyXG4gICAgY3R4LmZpbGxUZXh0KGJhbmFuYXMoZy5iYW5hbmFzKSwgMTQwLCA1NSk7XHJcbiAgICBjdHguZmlsbFRleHQobW9ua2V5cyhnLm1vbmtleXMpLCAxNDAsIDgwKTtcclxuXHJcbiAgICBjdHgudGV4dEFsaWduID0gXCJsZWZ0XCI7XHJcbiAgICBjdHguZmlsbFRleHQoXCJUYXJnZXQgU3RyaW5nOiBcIlxyXG4gICAgICAgICsgZy5jdXJyZW50VGFyZ2V0LmRpc3BsYXlTdHJpbmcsIDI4MCwgMzApO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBnLmN1cnJlbnRUYXJnZXQucmV3YXJkcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGxldCByZXdhcmQgPSAoZy5jdXJyZW50VGFyZ2V0LnJld2FyZHNbaV1cclxuICAgICAgICAgICAgKyBnLmFkZGl0aXZlRmxhdEJvbnVzKSAqICgxICsgZy5hZGRpdGl2ZVBlcmNlbnRCb251cyk7XHJcbiAgICAgICAgbGV0IGxpbmUgPSAoaSArIDEpICsgXCI6IFwiICsgYmFuYW5hcyhyZXdhcmQpO1xyXG4gICAgICAgIGN0eC5maWxsVGV4dChsaW5lLCAyODAsIDU1ICsgMjAgKiBpKTtcclxuICAgIH1cclxuXHJcbiAgICBjdHgudGV4dEFsaWduID0gXCJyaWdodFwiO1xyXG4gICAgY3R4LmZpbGxUZXh0KFwiS2V5Ym9hcmQgS2V5czpcIiwgMTYwLCA0NTApO1xyXG5cclxuICAgIGN0eC5yZXN0b3JlKCk7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkcmF3YWJsZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBkcmF3YWJsZXNbaV0uZHJhdyhjdXJyZW50VGltZU1pbGxpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJldmlvdXNUaW1lTWlsbGlzID0gY3VycmVudFRpbWVNaWxsaXM7XHJcbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGRyYXcpO1xyXG59XHJcblxyXG4vLyBNYWtlIGEgYnV0dG9uIG91dCBvZiB0aGUgYSBrZXlib2FyZCBrZXkgc28geW91XHJcbi8vIGNhbiBjbGljayB0byByZW1vdmUgaXQgZnJvbSB5b3VyIGtleWJvYXJkLlxyXG4vLyBpIGlzIHRoZSBpbmRleCBpbiB0aGUga2V5Ym9hcmRLZXlzIGFycmF5XHJcbi8vIE9uIGNsaWNrIGl0IGRlbGV0ZXMgYW5kIHJlbWFrZXMgYWxsIHRoZSBidXR0b25zXHJcbmZ1bmN0aW9uIGNyZWF0ZUN1cnJlbnRLZXlib2FyZEtleUJ1dHRvbihpOiBudW1iZXIsIGtleTogc3RyaW5nKSB7XHJcbiAgICBsZXQgYnV0dG9uID0gbmV3IEJ1dHRvbihcclxuICAgICAgICAxODAgKyAzMCAqIGksXHJcbiAgICAgICAgNDMwLFxyXG4gICAgICAgIDI1LFxyXG4gICAgICAgIDI1LFxyXG4gICAgICAgIGtleSxcclxuICAgICAgICBidXR0b25Db2xvcixcclxuICAgICAgICBidXR0b25Ib3ZlckNvbG9yLFxyXG4gICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgZy5rZXlib2FyZEtleXMuc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICB1cGRhdGVDaGFyYWN0ZXJzVG9DaG9vc2VGcm9tKCk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwga2V5Ym9hcmRLZXlCdXR0b25zLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBrZXlib2FyZEtleUJ1dHRvbnNbal0uZGVsZXRlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBnLmtleWJvYXJkS2V5cy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGtleSA9IGcua2V5Ym9hcmRLZXlzW2pdO1xyXG4gICAgICAgICAgICAgICAgY3JlYXRlQ3VycmVudEtleWJvYXJkS2V5QnV0dG9uKGosIGtleSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gbm90IHN1cmUgaWYgSSB3aWxsIHdhbnQgdG8gY2xlYXIgYWxsIHRoZSBjdXJyZW50XHJcbiAgICAgICAgICAgIC8vIHN0cmluZ3Mgd2hlbiB0aGUgcGxheWVyIGNoYW5nZXMgdGhlIGtleWJvYXJkXHJcbiAgICAgICAgICAgIC8vIGN1cnJlbnRTdHJpbmcgPSBbXTtcclxuICAgICAgICB9LFxyXG4gICAgICAgICgpID0+IHt9LFxyXG4gICAgKTtcclxuICAgIGtleWJvYXJkS2V5QnV0dG9ucy5wdXNoKGJ1dHRvbik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZUNoYXJhY3RlcnNUb0Nob29zZUZyb20oKSB7XHJcbiAgICBnLmNoYXJhY3RlcnNUb0Nob29zZUZyb20gPSBbXTtcclxuICAgIGlmIChnLmtleWJvYXJkS2V5cy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJhbmRvbU51bWJlclNpemU7IGkrKykge1xyXG4gICAgICAgIGcuY2hhcmFjdGVyc1RvQ2hvb3NlRnJvbS5wdXNoKFxyXG4gICAgICAgICAgICBnLmtleWJvYXJkS2V5c1tpICUgZy5rZXlib2FyZEtleXMubGVuZ3RoXVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIGZ1bmN0aW9uIGNyZWF0ZVVwZ3JhZGVCdXR0b25zKCkge1xyXG4vLyAgICAgbGV0IHNvcnRlZFVwZ3JhZGVzOiBVcGdyYWRlW10gPSBzb3J0ZWQodXBncmFkZXMsIChhOiBVcGdyYWRlLCBiOiBVcGdyYWRlKSA9PiB7XHJcbi8vICAgICAgICAgcmV0dXJuIGEucHJpY2UgLSBiLnByaWNlO1xyXG4vLyAgICAgfSk7XHJcbi8vICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNvcnRlZFVwZ3JhZGVzLmxlbmd0aDsgaSsrKSB7XHJcbi8vICAgICAgICAgbGV0IHVwZ3JhZGUgPSBzb3J0ZWRVcGdyYWRlc1tpXTtcclxuLy8gICAgICAgICBsZXQgYnV0dG9uOiBCdXR0b24gPSBuZXcgQnV0dG9uKFxyXG4vLyAgICAgICAgICAgICA1MDAsXHJcbi8vICAgICAgICAgICAgIDMwMCArIDM1ICogaSxcclxuLy8gICAgICAgICAgICAgODAsXHJcbi8vICAgICAgICAgICAgIDMwLFxyXG4vLyAgICAgICAgICAgICB1cGdyYWRlLnRleHQgKyBcIiBcIiArIHVwZ3JhZGUucHJpY2UsXHJcbi8vICAgICAgICAgICAgIGJ1dHRvbkNvbG9yLFxyXG4vLyAgICAgICAgICAgICBidXR0b25Ib3ZlckNvbG9yLFxyXG4vLyAgICAgICAgICAgICAoKSA9PiB7XHJcbi8vICAgICAgICAgICAgICAgICB1cGdyYWRlLmJ1eSgpO1xyXG4vLyAgICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB1cGdyYWRlQnV0dG9ucy5sZW5ndGg7IGorKykge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIHVwZ3JhZGVCdXR0b25zW2pdLmRlbGV0ZSgpO1xyXG4vLyAgICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICAgICAgY3JlYXRlVXBncmFkZUJ1dHRvbnMoKTtcclxuLy8gICAgICAgICAgICAgfSxcclxuLy8gICAgICAgICAgICAgKCkgPT4ge1xyXG4vLyAgICAgICAgICAgICAgICAgaWYgKHVwZ3JhZGUucHJpY2UgPiBnLmJhbmFuYXMpIHtcclxuLy8gICAgICAgICAgICAgICAgICAgICBidXR0b24uaXNEaXNhYmxlZCA9IHRydWU7XHJcbi8vICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbi5pc0Rpc2FibGVkID0gZmFsc2U7XHJcbi8vICAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgIH0sXHJcbi8vICAgICAgICAgKTtcclxuLy8gICAgICAgICB1cGdyYWRlQnV0dG9ucy5wdXNoKGJ1dHRvbik7XHJcbi8vICAgICB9XHJcbi8vIH1cclxuXHJcbmZ1bmN0aW9uIGdldENvbGxpZGluZ0VudGl0eShwb2ludFg6IG51bWJlciwgcG9pbnRZOiBudW1iZXIpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29sbGlkZWFibGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgbGV0IGlzQ29sbGlkaW5nID0gY29sbGlkZWFibGVzW2ldLmNvbGxpZGUoZy5tb3VzZVgsIGcubW91c2VZKTtcclxuICAgICAgICBpZiAoaXNDb2xsaWRpbmcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNvbGxpZGVhYmxlc1tpXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG59XHJcblxyXG5mdW5jdGlvbiBiYW5hbmFzKG51bWJlcjogbnVtYmVyKSB7XHJcbiAgICBudW1iZXIgPSBNYXRoLnJvdW5kKG51bWJlcik7XHJcbiAgICBpZiAobnVtYmVyID09PSAxKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bWJlciArIFwiIGJhbmFuYVwiO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gbnVtYmVyICsgXCIgYmFuYW5hc1wiO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBtb25rZXlzKG51bWJlcjogbnVtYmVyKSB7IFxyXG4gICAgaWYgKG51bWJlciA9PT0gMSkge1xyXG4gICAgICAgIHJldHVybiBudW1iZXIgKyBcIiBtb25rZXlcIjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIG51bWJlciArIFwiIG1vbmtleXNcIjtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gYmFuYW5hc1BlclNlY29uZChudW1iZXI6IG51bWJlcikge1xyXG4gICAgbnVtYmVyID0gTWF0aC5yb3VuZChudW1iZXIpO1xyXG4gICAgaWYgKG51bWJlciA9PT0gMSkge1xyXG4gICAgICAgIHJldHVybiBudW1iZXIgKyBcIiBiYW5hbmEgcGVyIHNlY29uZFwiO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gbnVtYmVyICsgXCIgYmFuYW5hcyBwZXIgc2Vjb25kXCI7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNvcnRlZChhcnJheTogYW55W10sIGNvbXBhcmVGbj86IChhOiBhbnksIGI6IGFueSkgPT4gbnVtYmVyKSB7XHJcbiAgICByZXR1cm4gYXJyYXkuc2xpY2UoKS5zb3J0KGNvbXBhcmVGbik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJvdW5kVG9OUGxhY2VzKHg6IG51bWJlciwgbnVtUGxhY2VzOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgbGV0IHNjYWxlOiBudW1iZXIgPSBNYXRoLnBvdygxMCwgbnVtUGxhY2VzKTtcclxuICAgIHJldHVybiBNYXRoLnJvdW5kKHggKiBzY2FsZSkgLyBzY2FsZTtcclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=