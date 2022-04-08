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
/* harmony export */   "TextDisplay": () => (/* binding */ TextDisplay)
/* harmony export */ });
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./global */ "./src/global.ts");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ "./src/util.ts");


var TextDisplay = /** @class */ (function () {
    // probably this will be the same across all displays
    // so I don't need this variable
    // public lettersPerSecond: number;
    function TextDisplay(x, y) {
        this.lettersToTypeRemainder = 0;
        this.currentString = [];
        this.x = x;
        this.y = y;
        this.id = _global__WEBPACK_IMPORTED_MODULE_0__.g.idCounter;
        _global__WEBPACK_IMPORTED_MODULE_0__.g.idCounter += 1;
        _global__WEBPACK_IMPORTED_MODULE_0__.drawables.push(this);
        _global__WEBPACK_IMPORTED_MODULE_0__.updateables.push(this);
        // collideables.push(this);
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
        _global__WEBPACK_IMPORTED_MODULE_0__.ctx.save();
        _global__WEBPACK_IMPORTED_MODULE_0__.ctx.fillStyle = "black";
        _global__WEBPACK_IMPORTED_MODULE_0__.ctx.font = "20px Arial";
        for (var i = 0; i < _global__WEBPACK_IMPORTED_MODULE_0__.g.currentTarget.letters.length; i++) {
            var character = void 0;
            if (i >= currentString.length) {
                character = "_";
            }
            else {
                character = currentString[i];
            }
            _global__WEBPACK_IMPORTED_MODULE_0__.ctx.fillText(character, this.x + 20 * i, this.y);
        }
        _global__WEBPACK_IMPORTED_MODULE_0__.ctx.restore();
    };
    return TextDisplay;
}());



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
/* harmony export */   "getRandomNumbers": () => (/* binding */ getRandomNumbers)
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
// TODO:
// Auto-save every 10 seconds
// Prevent catchup lag after tab-out
// Auto-calculate true average bananas per word
// recruit multiple monkeys at a time (10x, 100x)
// do some kind of visual effect to indicate the quality of 
//    the matches, e.g. turn gold and pause on perfect match
// The UI is a complete mess!
// Have text fit within the bounds of the buttons
// The save should be encrypted
// The erase save button should have a confirmation step
// The erase save button should also reset the game (probably will rename the button)
// There should be an import/export option to let the player back up their save
// There are balance issues
// There should be upgrades
// adjustable update rate for bananas per second display
// compressed notation for large numbers
// What if each monkey had their own keyboard and computer?
// The visuals of this would be pretty cool
// If each monkey remained relatively slow, then it would be
//    easier to communicate when each of them get matches
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
var buttonColor = rgbString(200, 200, 255);
var buttonHoverColor = rgbString(180, 180, 230);
var eraseButtonColor = rgbString(255, 50, 50);
var eraseButtonHoverColor = rgbString(225, 20, 20);
// Make buttons out of all possible keyboard keys
// let allKeyboardKeys = [" ", "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var allKeyboardKeys = ["⎵", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var _loop_1 = function (i) {
    var key = allKeyboardKeys[i];
    var button = new _button__WEBPACK_IMPORTED_MODULE_0__.Button(40 + 30 * i, 450, 25, 25, key, buttonColor, buttonHoverColor, function () {
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
    var button = new _button__WEBPACK_IMPORTED_MODULE_0__.Button(500, 50 + 35 * i, 80, 30, buttonText, buttonColor, buttonHoverColor, function () {
        if (!_global__WEBPACK_IMPORTED_MODULE_1__.g.targetOwned[i]) {
            _global__WEBPACK_IMPORTED_MODULE_1__.g.bananas -= _targets__WEBPACK_IMPORTED_MODULE_3__.targets[i].price;
            button.text = _targets__WEBPACK_IMPORTED_MODULE_3__.targets[i].displayString;
            _global__WEBPACK_IMPORTED_MODULE_1__.g.targetOwned[i] = true;
        }
        _global__WEBPACK_IMPORTED_MODULE_1__.g.currentTarget = _targets__WEBPACK_IMPORTED_MODULE_3__.targets[i];
        _global__WEBPACK_IMPORTED_MODULE_1__.g.currentTargetIndex = i;
        targetButtons[i].isDisabled = true;
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
    var numRows = 14;
    var row = _global__WEBPACK_IMPORTED_MODULE_1__.g.monkeys % numRows;
    var column = Math.floor(_global__WEBPACK_IMPORTED_MODULE_1__.g.monkeys / numRows);
    new _text_display__WEBPACK_IMPORTED_MODULE_4__.TextDisplay(100 + 100 * column, 200 + 35 * row);
    // g.lettersPerSecond += 1;
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
var button2 = new _button__WEBPACK_IMPORTED_MODULE_0__.Button(100, 350, 80, 30, "Type", buttonColor, buttonHoverColor, function (currentTimeMillis) {
    if (currentTimeMillis !== undefined
        && (currentTimeMillis - lastClickedTimeMillis) < 50) {
        return;
    }
    textDisplay.lettersToTypeRemainder += 1;
    lastClickedTimeMillis = currentTimeMillis;
}, function () { });
var upgradeKeyboardPrice = Math.pow(10, _global__WEBPACK_IMPORTED_MODULE_1__.g.maxKeyboardKeys + 1);
var button3 = new _button__WEBPACK_IMPORTED_MODULE_0__.Button(250, 400, 80, 30, "Upgrade Keyboard " + upgradeKeyboardPrice, buttonColor, buttonHoverColor, function () {
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
var textDisplay = new _text_display__WEBPACK_IMPORTED_MODULE_4__.TextDisplay(100, 200);
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
    // g.lettersToTypeRemainder += elapsedTimeMillis / 1000 * g.lettersPerSecond;
    // Make a finished word stay on screen for 500ms, or until
    // another letter is typed
    // if ((
    //         lastWordFinishTimeMillis !== undefined
    //         && (currentTimeMillis - lastWordFinishTimeMillis) > 500
    //     ) || (
    //         g.lettersToTypeRemainder >= 1
    //         && currentString.length >= g.currentTarget.letters.length
    //     )) {
    //     currentString = [];
    //     lastWordFinishTimeMillis = undefined;
    // }
    // Generate the needed characters and award bananas
    // while (g.lettersToTypeRemainder >= 1) {
    //     g.lettersToTypeRemainder -= 1;
    //     if (g.charactersToChooseFrom.length === 0) {
    //         continue;
    //     }
    //     let character = getRandomCharacter();
    //     currentString.push(character);
    //     if (currentString.length >= g.currentTarget.letters.length) {
    //         lastWordFinishTimeMillis = currentTimeMillis;
    //         let matchingLetters: number = countMatchingLetters(
    //             currentString, g.currentTarget.letters);
    //         if (matchingLetters > 0) {
    //             let bananasToAdd = (g.currentTarget.rewards[matchingLetters - 1]
    //                 + g.additiveFlatBonus) * (1 + g.additivePercentBonus);
    //             g.bananas += bananasToAdd;
    //             g.incomeAccumulator += bananasToAdd;
    //         }
    //         if (g.lettersToTypeRemainder >= 1) {
    //             currentString = [];
    //         }
    //     }
    // }
    // Draw the current string on screen
    // ctx.save();
    // ctx.fillStyle = "black";
    // ctx.font = "20px Arial";
    // for(let i = 0; i < g.currentTarget.letters.length; i++) {
    //     let character: string;
    //     if (i >= currentString.length) {
    //         character = "_";
    //     } else {
    //         character = currentString[i];
    //     }
    //     ctx.fillText(
    //         character,
    //         100 + 20 * i,
    //         200
    //     );
    // }
    // ctx.restore();
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
        + _global__WEBPACK_IMPORTED_MODULE_1__.g.currentTarget.displayString, 250, 120);
    for (var i = 0; i < _global__WEBPACK_IMPORTED_MODULE_1__.g.currentTarget.rewards.length; i++) {
        var reward = (_global__WEBPACK_IMPORTED_MODULE_1__.g.currentTarget.rewards[i]
            + _global__WEBPACK_IMPORTED_MODULE_1__.g.additiveFlatBonus) * (1 + _global__WEBPACK_IMPORTED_MODULE_1__.g.additivePercentBonus);
        var line = (i + 1) + ": " + bananas(reward);
        _global__WEBPACK_IMPORTED_MODULE_1__.ctx.fillText(line, 280, 140 + 20 * i);
    }
    _global__WEBPACK_IMPORTED_MODULE_1__.ctx.textAlign = "right";
    _global__WEBPACK_IMPORTED_MODULE_1__.ctx.fillText("Keyboard Keys:", 160, 300);
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
    var button = new _button__WEBPACK_IMPORTED_MODULE_0__.Button(180 + 30 * i, 280, 25, 25, key, buttonColor, buttonHoverColor, function () {
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
function rgbString(red, green, blue) {
    return "rgb(" + red + "," + green + "," + blue + ")";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFPLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDekMsQ0FBQztBQUVELFNBQVMsY0FBYyxDQUFDLENBQVMsRUFBRSxTQUFpQjtJQUNoRCxJQUFJLEtBQUssR0FBVyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUM1QyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxHQUFHLEtBQUssQ0FBQztBQUN6QyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhwb3J0cy8uL3NyYy9idXR0b24udHMiLCJ3ZWJwYWNrOi8vZXhwb3J0cy8uL3NyYy9nbG9iYWwudHMiLCJ3ZWJwYWNrOi8vZXhwb3J0cy8uL3NyYy9sb2NhbF9zdG9yYWdlLnRzIiwid2VicGFjazovL2V4cG9ydHMvLi9zcmMvc2F2ZV9maWxlLnRzIiwid2VicGFjazovL2V4cG9ydHMvLi9zcmMvdGFyZ2V0LnRzIiwid2VicGFjazovL2V4cG9ydHMvLi9zcmMvdGFyZ2V0cy50cyIsIndlYnBhY2s6Ly9leHBvcnRzLy4vc3JjL3RleHRfZGlzcGxheS50cyIsIndlYnBhY2s6Ly9leHBvcnRzLy4vc3JjL3V0aWwudHMiLCJ3ZWJwYWNrOi8vZXhwb3J0cy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9leHBvcnRzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9leHBvcnRzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZXhwb3J0cy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2V4cG9ydHMvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29sbGlkZWFibGVzLCBjdHgsIGRyYXdhYmxlcywgZywgdXBkYXRlYWJsZXMgfSBmcm9tIFwiLi9nbG9iYWxcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBCdXR0b24ge1xyXG4gICAgcHVibGljIGlkOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgdG9wTGVmdFg6IG51bWJlcjtcclxuICAgIHB1YmxpYyB0b3BMZWZ0WTogbnVtYmVyO1xyXG4gICAgcHVibGljIHdpZHRoOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgaGVpZ2h0OiBudW1iZXI7XHJcbiAgICBwdWJsaWMgYm90dG9tUmlnaHRYOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgYm90dG9tUmlnaHRZOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgdGV4dDogc3RyaW5nO1xyXG4gICAgcHVibGljIGNvbG9yOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgaG92ZXJlZENvbG9yOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgZGlzYWJsZWRDb2xvcjogc3RyaW5nID0gXCJncmF5XCI7XHJcbiAgICBwdWJsaWMgaXNIb3ZlcmVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwdWJsaWMgaXNEaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHVibGljIGlzTW91c2VEb3duZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHB1YmxpYyBvbkNsaWNrOiAoY3VycmVudFRpbWVNaWxsaXM/OiBudW1iZXIpID0+IHZvaWQ7XHJcbiAgICBwdWJsaWMgdXBkYXRlOiAoKSA9PiB2b2lkO1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihcclxuICAgICAgICB0b3BMZWZ0WDogbnVtYmVyLFxyXG4gICAgICAgIHRvcExlZnRZOiBudW1iZXIsXHJcbiAgICAgICAgd2lkdGg6IG51bWJlcixcclxuICAgICAgICBoZWlnaHQ6IG51bWJlcixcclxuICAgICAgICB0ZXh0OiBzdHJpbmcsXHJcbiAgICAgICAgY29sb3I6IHN0cmluZyxcclxuICAgICAgICBob3ZlcmVkQ29sb3I6IHN0cmluZyxcclxuICAgICAgICBvbkNsaWNrOiAoY3VycmVudFRpbWVNaWxsaXM/OiBudW1iZXIpID0+IHZvaWQsXHJcbiAgICAgICAgdXBkYXRlOiAoKSA9PiB2b2lkLFxyXG4gICAgKSB7XHJcbiAgICAgICAgdGhpcy50b3BMZWZ0WCA9IHRvcExlZnRYO1xyXG4gICAgICAgIHRoaXMudG9wTGVmdFkgPSB0b3BMZWZ0WTtcclxuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGg7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5ib3R0b21SaWdodFggPSB0b3BMZWZ0WCArIHdpZHRoO1xyXG4gICAgICAgIHRoaXMuYm90dG9tUmlnaHRZID0gdG9wTGVmdFkgKyBoZWlnaHQ7XHJcbiAgICAgICAgdGhpcy50ZXh0ID0gdGV4dDtcclxuICAgICAgICB0aGlzLmNvbG9yID0gY29sb3I7XHJcbiAgICAgICAgdGhpcy5ob3ZlcmVkQ29sb3IgPSBob3ZlcmVkQ29sb3I7XHJcbiAgICAgICAgdGhpcy5vbkNsaWNrID0gb25DbGljaztcclxuICAgICAgICB0aGlzLnVwZGF0ZSA9IHVwZGF0ZTtcclxuXHJcbiAgICAgICAgdGhpcy5pZCA9IGcuaWRDb3VudGVyO1xyXG4gICAgICAgIGcuaWRDb3VudGVyICs9IDE7XHJcbiAgICAgICAgZHJhd2FibGVzLnB1c2godGhpcyk7XHJcbiAgICAgICAgY29sbGlkZWFibGVzLnB1c2godGhpcyk7XHJcbiAgICAgICAgdXBkYXRlYWJsZXMucHVzaCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZHJhdygpIHtcclxuICAgICAgICBsZXQgdG9wTGVmdFggPSB0aGlzLnRvcExlZnRYO1xyXG4gICAgICAgIGxldCB0b3BMZWZ0WSA9IHRoaXMudG9wTGVmdFk7XHJcbiAgICAgICAgbGV0IHdpZHRoID0gdGhpcy53aWR0aDtcclxuICAgICAgICBsZXQgaGVpZ2h0ID0gdGhpcy5oZWlnaHQ7XHJcbiAgICAgICAgbGV0IGZvbnRTaXplID0gMTU7XHJcbiAgICAgICAgbGV0IGNvbG9yOiBzdHJpbmc7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNNb3VzZURvd25lZFxyXG4gICAgICAgICAgICAmJiAhdGhpcy5pc0Rpc2FibGVkKSB7XHJcbiAgICAgICAgICAgIGxldCBzaHJpbmsgPSAwLjE7XHJcbiAgICAgICAgICAgIGxldCBzaHJpbmtYID0gd2lkdGggKiBzaHJpbms7XHJcbiAgICAgICAgICAgIGxldCBzaHJpbmtZID0gaGVpZ2h0ICogc2hyaW5rO1xyXG4gICAgICAgICAgICB3aWR0aCAtPSBzaHJpbmtYO1xyXG4gICAgICAgICAgICBoZWlnaHQgLT0gc2hyaW5rWTtcclxuICAgICAgICAgICAgdG9wTGVmdFggKz0gc2hyaW5rWCAvIDI7XHJcbiAgICAgICAgICAgIHRvcExlZnRZICs9IHNocmlua1kgLyAyO1xyXG4gICAgICAgICAgICBmb250U2l6ZSAqPSAoMSAtIHNocmluayk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmlzRGlzYWJsZWQpIHtcclxuICAgICAgICAgICAgY29sb3IgPSB0aGlzLmRpc2FibGVkQ29sb3JcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc0hvdmVyZWQpIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yID0gdGhpcy5jb2xvcjtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yID0gdGhpcy5ob3ZlcmVkQ29sb3I7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGN0eC5zYXZlKCk7XHJcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xyXG4gICAgICAgIGN0eC5mb250ID0gZm9udFNpemUgKyBcInB4IEFyaWFsXCI7XHJcbiAgICAgICAgY3R4LmZpbGxSZWN0KHRvcExlZnRYLCB0b3BMZWZ0WSwgd2lkdGgsIGhlaWdodCk7XHJcbiAgICAgICAgY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XHJcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwiYmxhY2tcIjtcclxuICAgICAgICBjdHguZmlsbFRleHQoXHJcbiAgICAgICAgICAgIHRoaXMudGV4dCxcclxuICAgICAgICAgICAgdG9wTGVmdFggKyB3aWR0aCAvIDIsXHJcbiAgICAgICAgICAgIHRvcExlZnRZICsgaGVpZ2h0IC8gMiArIGZvbnRTaXplIC8gMi40XHJcbiAgICAgICAgKTtcclxuICAgICAgICBjdHgucmVzdG9yZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjb2xsaWRlKHBvaW50WDogbnVtYmVyLCBwb2ludFk6IG51bWJlcikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRvcExlZnRYIDw9IHBvaW50WFxyXG4gICAgICAgICAgICAmJiBwb2ludFggPD0gdGhpcy5ib3R0b21SaWdodFhcclxuICAgICAgICAgICAgJiYgdGhpcy50b3BMZWZ0WSA8PSBwb2ludFlcclxuICAgICAgICAgICAgJiYgcG9pbnRZIDw9IHRoaXMuYm90dG9tUmlnaHRZO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkZWxldGUoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkcmF3YWJsZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGRyYXdhYmxlc1tpXS5pZCA9PT0gdGhpcy5pZCkge1xyXG4gICAgICAgICAgICAgICAgZHJhd2FibGVzLnNwbGljZShpLCAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbGxpZGVhYmxlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoY29sbGlkZWFibGVzW2ldLmlkID09PSB0aGlzLmlkKSB7XHJcbiAgICAgICAgICAgICAgICBjb2xsaWRlYWJsZXMuc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdXBkYXRlYWJsZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHVwZGF0ZWFibGVzW2ldLmlkID09PSB0aGlzLmlkKSB7XHJcbiAgICAgICAgICAgICAgICB1cGRhdGVhYmxlcy5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgdGFyZ2V0cyB9IGZyb20gXCIuL3RhcmdldHNcIjtcclxuaW1wb3J0IHsgQ29sbGlkZWFibGUsIERyYXdhYmxlLCBVcGRhdGVhYmxlIH0gZnJvbSBcIi4vdHlwZXNcIjtcclxuXHJcbmV4cG9ydCBsZXQgd2lkdGg6IG51bWJlciA9IDEwMDA7XHJcbmV4cG9ydCBsZXQgaGVpZ2h0OiBudW1iZXIgPSA3MDA7XHJcbmV4cG9ydCBsZXQgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XHJcbmV4cG9ydCBsZXQgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcclxuY2FudmFzLndpZHRoID0gd2lkdGg7XHJcbmNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XHJcbmN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XHJcbmV4cG9ydCBsZXQgZHJhd2FibGVzOiBEcmF3YWJsZVtdID0gW107XHJcbmV4cG9ydCBsZXQgY29sbGlkZWFibGVzOiBDb2xsaWRlYWJsZVtdID0gW107XHJcbmV4cG9ydCBsZXQgdXBkYXRlYWJsZXM6IFVwZGF0ZWFibGVbXSA9IFtdO1xyXG5cclxuLy8gUHV0IGFueSBnbG9iYWwgdmFyaWFibGVzIHRoYXQgeW91IHdhbnQgdG8gYmUgYWJsZSB0byByZWFzc2lnbiBoZXJlXHJcbmV4cG9ydCBsZXQgZyA9IHtcclxuICAgIGJhbmFuYXM6IDAsXHJcbiAgICBtb25rZXlzOiAwLFxyXG4gICAgLy8gbGV0dGVyc1RvVHlwZVJlbWFpbmRlcjogMCxcclxuICAgIGxldHRlcnNQZXJTZWNvbmQ6IDAsXHJcbiAgICBtb3VzZVg6IC0xLFxyXG4gICAgbW91c2VZOiAtMSxcclxuICAgIGlkQ291bnRlcjogMCxcclxuICAgIGN1cnJlbnRUYXJnZXRJbmRleDogMCxcclxuICAgIGN1cnJlbnRUYXJnZXQ6IHRhcmdldHNbMF0sXHJcbiAgICBrZXlib2FyZEtleXM6IFtcIkFcIl0sXHJcbiAgICBtYXhLZXlib2FyZEtleXM6IDEsXHJcbiAgICB0YXJnZXRPd25lZDogW3RydWVdLFxyXG4gICAgYWRkaXRpdmVQZXJjZW50Qm9udXM6IDAsXHJcbiAgICBhZGRpdGl2ZUZsYXRCb251czogMCxcclxuICAgIGNoYXJhY3RlcnNUb0Nob29zZUZyb206IDxzdHJpbmdbXT5bXSxcclxuICAgIGluY29tZUFjY3VtdWxhdG9yOiAwLFxyXG59O1xyXG5cclxuZm9yKGxldCBpID0gMTsgaSA8IHRhcmdldHMubGVuZ3RoOyBpKyspIHtcclxuICAgIGcudGFyZ2V0T3duZWQucHVzaChmYWxzZSk7XHJcbn1cclxuIiwiaW1wb3J0IHsgZyB9IGZyb20gXCIuL2dsb2JhbFwiO1xyXG5pbXBvcnQgeyBTYXZlRmlsZSwgc2F2ZUZpbGVWZXJzaW9uIH0gZnJvbSBcIi4vc2F2ZV9maWxlXCI7XHJcbmltcG9ydCB7IHRhcmdldHMgfSBmcm9tIFwiLi90YXJnZXRzXCI7XHJcblxyXG5sZXQgc2F2ZUtleTogc3RyaW5nID0gXCJpbmZpbmUtbW9ua2V5LWlkbGUtZ2FtZVwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNhdmUoKSB7XHJcbiAgICBsZXQgc2F2ZUZpbGU6IFNhdmVGaWxlID0gZ2V0U2F2ZUZpbGUoKTtcclxuICAgIGxldCBzYXZlRmlsZVN0cmluZzogc3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoc2F2ZUZpbGUpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oc2F2ZUtleSwgc2F2ZUZpbGVTdHJpbmcpO1xyXG4gICAgY29uc29sZS5sb2coXCJTYXZlZCFcIik7XHJcbiAgICBjb25zb2xlLmxvZyhzYXZlRmlsZVN0cmluZyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFNhdmVGaWxlKCk6IFNhdmVGaWxlIHtcclxuICAgIHJldHVybiBuZXcgU2F2ZUZpbGUoXHJcbiAgICAgICAgZy5iYW5hbmFzLFxyXG4gICAgICAgIGcubW9ua2V5cyxcclxuICAgICAgICBnLmN1cnJlbnRUYXJnZXRJbmRleCxcclxuICAgICAgICBnLmtleWJvYXJkS2V5cyxcclxuICAgICAgICBnLm1heEtleWJvYXJkS2V5cyxcclxuICAgICAgICBnLnRhcmdldE93bmVkLFxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRGcm9tTG9jYWxTdG9yYWdlKCkge1xyXG4gICAgbGV0IHNhdmVGaWxlU3RyaW5nID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oc2F2ZUtleSk7XHJcbiAgICBpZiAoc2F2ZUZpbGVTdHJpbmcgPT09IHVuZGVmaW5lZFxyXG4gICAgICAgIHx8IHNhdmVGaWxlU3RyaW5nID09PSBudWxsKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkNvdWxkIG5vdCBsb2FkIHNhdmVcIik7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlNhdmUgZm91bmRcIiwgc2F2ZUZpbGVTdHJpbmcpO1xyXG4gICAgfVxyXG4gICAgbG9hZEZyb21TdHJpbmcoc2F2ZUZpbGVTdHJpbmcpO1xyXG59XHJcblxyXG4vLyBJIHNob3VsZCBiZSBhYmxlIHRvIGNhbGwgdGhpcyB3aGV0aGVyIEknbSBsb2FkaW5nIGZyb21cclxuLy8gbG9jYWwgc3RvcmFnZSBvciBmcm9tIGEgdXNlci1wcm92aWRlZCBzYXZlIGltcG9ydCBzdHJpbmdcclxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRGcm9tU3RyaW5nKGltcG9ydFN0cmluZzogc3RyaW5nKSB7XHJcbiAgICBsZXQgbG9hZGVkU2F2ZTogU2F2ZUZpbGUgPSBKU09OLnBhcnNlKGltcG9ydFN0cmluZyk7XHJcbiAgICBpZiAobG9hZGVkU2F2ZSA9PT0gdW5kZWZpbmVkXHJcbiAgICAgICAgfHwgbG9hZGVkU2F2ZSA9PT0gbnVsbCkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBzYXZlIGZyb20gbG9jYWwgc3RvcmFnZTogSlNPTiBwYXJzZSBlcnJvclwiKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9IGVsc2UgaWYgKGxvYWRlZFNhdmUudmVyc2lvbiAhPT0gc2F2ZUZpbGVWZXJzaW9uKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBsb2FkIHNhdmUgZnJvbSBsb2NhbCBzdG9yYWdlOiBWZXJzaW9uIG1pc21hdGNoXCIpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKFwiTG9hZGVkIHNhdmVcIik7XHJcbiAgICBjb25zb2xlLmxvZyhsb2FkZWRTYXZlKTtcclxuICAgIGcuYmFuYW5hcyA9IGxvYWRlZFNhdmUuYmFuYW5hcztcclxuICAgIGcubW9ua2V5cyA9IGxvYWRlZFNhdmUubW9ua2V5cztcclxuICAgIGcubGV0dGVyc1BlclNlY29uZCA9IGcubW9ua2V5cztcclxuICAgIGcuY3VycmVudFRhcmdldEluZGV4ID0gbG9hZGVkU2F2ZS50YXJnZXRJbmRleDtcclxuICAgIGcuY3VycmVudFRhcmdldCA9IHRhcmdldHNbbG9hZGVkU2F2ZS50YXJnZXRJbmRleF07XHJcbiAgICBnLmtleWJvYXJkS2V5cyA9IGxvYWRlZFNhdmUua2V5Ym9hcmRLZXlzO1xyXG4gICAgZy5tYXhLZXlib2FyZEtleXMgPSBsb2FkZWRTYXZlLm1heEtleWJvYXJkS2V5cztcclxuICAgIGcudGFyZ2V0T3duZWQgPSBsb2FkZWRTYXZlLnRhcmdldE93bmVkO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZXhwb3J0U2F2ZVRvU3RyaW5nKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoZ2V0U2F2ZUZpbGUoKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBlcmFzZVNhdmUoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIlNhdmUgRXJhc2VkIVwiKTtcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKHNhdmVLZXkpO1xyXG59XHJcbiIsImV4cG9ydCBsZXQgc2F2ZUZpbGVWZXJzaW9uOiBudW1iZXIgPSAzO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNhdmVGaWxlIHtcclxuICAgIC8vIFVzZSB0aGUgdmVyc2lvbiBudW1iZXIgdG8gZGV0ZWN0IGFuZCBpbnZhbGlkYXRlXHJcbiAgICAvLyBvbGQgYW5kIGluY29tcGF0aWJsZSBzYXZlIGZpbGVzXHJcbiAgICBwdWJsaWMgdmVyc2lvbjogbnVtYmVyO1xyXG5cclxuICAgIHB1YmxpYyBiYW5hbmFzOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgbW9ua2V5czogbnVtYmVyO1xyXG4gICAgcHVibGljIHRhcmdldEluZGV4OiBudW1iZXI7XHJcbiAgICBwdWJsaWMga2V5Ym9hcmRLZXlzOiBzdHJpbmdbXTtcclxuICAgIHB1YmxpYyBtYXhLZXlib2FyZEtleXM6IG51bWJlcjtcclxuICAgIHB1YmxpYyB0YXJnZXRPd25lZDogYm9vbGVhbltdO1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihcclxuICAgICAgICBiYW5hbmFzOiBudW1iZXIsXHJcbiAgICAgICAgbW9ua2V5czogbnVtYmVyLFxyXG4gICAgICAgIHRhcmdldEluZGV4OiBudW1iZXIsXHJcbiAgICAgICAga2V5Ym9hcmRLZXlzOiBzdHJpbmdbXSxcclxuICAgICAgICBtYXhLZXlib2FyZEtleXM6IG51bWJlcixcclxuICAgICAgICB0YXJnZXRPd25lZDogYm9vbGVhbltdLFxyXG4gICAgKSB7XHJcbiAgICAgICAgdGhpcy52ZXJzaW9uID0gc2F2ZUZpbGVWZXJzaW9uO1xyXG4gICAgICAgIHRoaXMuYmFuYW5hcyA9IGJhbmFuYXM7XHJcbiAgICAgICAgdGhpcy5tb25rZXlzID0gbW9ua2V5cztcclxuICAgICAgICB0aGlzLnRhcmdldEluZGV4ID0gdGFyZ2V0SW5kZXg7XHJcbiAgICAgICAgdGhpcy5rZXlib2FyZEtleXMgPSBrZXlib2FyZEtleXM7XHJcbiAgICAgICAgdGhpcy5tYXhLZXlib2FyZEtleXMgPSBtYXhLZXlib2FyZEtleXM7XHJcbiAgICAgICAgdGhpcy50YXJnZXRPd25lZCA9IHRhcmdldE93bmVkO1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBUYXJnZXQge1xyXG4gICAgcHVibGljIGxldHRlcnM6IHN0cmluZ1tdO1xyXG4gICAgcHVibGljIGRpc3BsYXlTdHJpbmc6IHN0cmluZztcclxuICAgIHB1YmxpYyByZXdhcmRzOiBudW1iZXJbXTtcclxuICAgIHB1YmxpYyBwcmljZTogbnVtYmVyO1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihcclxuICAgICAgICBsZXR0ZXJzOiBzdHJpbmdbXSxcclxuICAgICAgICBkaXNwbGF5U3RyaW5nOiBzdHJpbmcsXHJcbiAgICAgICAgcmV3YXJkczogbnVtYmVyW10sXHJcbiAgICAgICAgcHJpY2U6IG51bWJlcixcclxuICAgICkge1xyXG4gICAgICAgIHRoaXMubGV0dGVycyA9IGxldHRlcnM7XHJcbiAgICAgICAgdGhpcy5kaXNwbGF5U3RyaW5nID0gZGlzcGxheVN0cmluZztcclxuICAgICAgICB0aGlzLnJld2FyZHMgPSByZXdhcmRzO1xyXG4gICAgICAgIHRoaXMucHJpY2UgPSBwcmljZTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBUYXJnZXQgfSBmcm9tIFwiLi90YXJnZXRcIjtcclxuXHJcbmV4cG9ydCBsZXQgdGFyZ2V0czogVGFyZ2V0W10gPSBbXHJcbiAgICBuZXcgVGFyZ2V0KFxyXG4gICAgICAgIFtcIkNcIiwgXCJBXCIsIFwiVFwiXSxcclxuICAgICAgICBcIkNBVFwiLFxyXG4gICAgICAgIFsxLCA4LCA0MF0sXHJcbiAgICAgICAgMCxcclxuICAgICksXHJcbiAgICBuZXcgVGFyZ2V0KFxyXG4gICAgICAgIFtcIkhcIiwgXCJPXCIsIFwiT1wiLCBcIlRcIl0sXHJcbiAgICAgICAgXCJIT09UXCIsXHJcbiAgICAgICAgWzUsIDEwLCA0MCwgMTgwXSxcclxuICAgICAgICAyMDAwLFxyXG4gICAgKSxcclxuICAgIG5ldyBUYXJnZXQoXHJcbiAgICAgICAgW1wiUlwiLCBcIkVcIiwgXCJGXCIsIFwiRVwiLCBcIlJcIiwgXCJFXCIsIFwiRVwiXSxcclxuICAgICAgICBcIlJFRkVSRUVcIixcclxuICAgICAgICBbNSwgNSwgNSwgMjAsIDQwMCwgMjQwMCwgMTUwMDBdLFxyXG4gICAgICAgIDMwMDAwLFxyXG4gICAgKSxcclxuICAgIC8vIG5ldyBUYXJnZXQoXHJcbiAgICAvLyAgICAgW10sXHJcbiAgICAvLyAgICAgXCJcIixcclxuICAgIC8vICAgICBbXSxcclxuICAgIC8vICAgICAwLFxyXG4gICAgLy8gKSxcclxuXTtcclxuIiwiaW1wb3J0IHsgY3R4LCBkcmF3YWJsZXMsIGcsIHVwZGF0ZWFibGVzIH0gZnJvbSBcIi4vZ2xvYmFsXCI7XHJcbmltcG9ydCB7IGNvdW50TWF0Y2hpbmdMZXR0ZXJzLCBnZXRSYW5kb21DaGFyYWN0ZXIgfSBmcm9tIFwiLi91dGlsXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVGV4dERpc3BsYXkge1xyXG4gICAgcHVibGljIHg6IG51bWJlcjtcclxuICAgIHB1YmxpYyB5OiBudW1iZXI7XHJcbiAgICBwdWJsaWMgaWQ6IG51bWJlcjtcclxuICAgIHB1YmxpYyBsZXR0ZXJzVG9UeXBlUmVtYWluZGVyOiBudW1iZXIgPSAwO1xyXG4gICAgcHVibGljIGxhc3RXb3JkRmluaXNoVGltZU1pbGxpczogbnVtYmVyO1xyXG4gICAgcHVibGljIGN1cnJlbnRTdHJpbmc6IHN0cmluZ1tdID0gW107XHJcbiAgICBcclxuICAgIC8vIHByb2JhYmx5IHRoaXMgd2lsbCBiZSB0aGUgc2FtZSBhY3Jvc3MgYWxsIGRpc3BsYXlzXHJcbiAgICAvLyBzbyBJIGRvbid0IG5lZWQgdGhpcyB2YXJpYWJsZVxyXG4gICAgLy8gcHVibGljIGxldHRlcnNQZXJTZWNvbmQ6IG51bWJlcjtcclxuICAgIFxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHg6IG51bWJlcixcclxuICAgICAgICB5OiBudW1iZXIsXHJcbiAgICApIHtcclxuICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgIHRoaXMueSA9IHk7XHJcblxyXG4gICAgICAgIHRoaXMuaWQgPSBnLmlkQ291bnRlcjtcclxuICAgICAgICBnLmlkQ291bnRlciArPSAxO1xyXG4gICAgICAgIGRyYXdhYmxlcy5wdXNoKHRoaXMpO1xyXG4gICAgICAgIHVwZGF0ZWFibGVzLnB1c2godGhpcyk7XHJcbiAgICAgICAgLy8gY29sbGlkZWFibGVzLnB1c2godGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHVwZGF0ZShjdXJyZW50VGltZU1pbGxpczogbnVtYmVyLCBlbGFwc2VkVGltZU1pbGxpczogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5sZXR0ZXJzVG9UeXBlUmVtYWluZGVyICs9IGVsYXBzZWRUaW1lTWlsbGlzIC8gMTAwMCAqIGcubGV0dGVyc1BlclNlY29uZDtcclxuXHJcbiAgICAgICAgLy8gTWFrZSBhIGZpbmlzaGVkIHdvcmQgc3RheSBvbiBzY3JlZW4gZm9yIDUwMG1zLCBvciB1bnRpbFxyXG4gICAgICAgIC8vIGFub3RoZXIgbGV0dGVyIGlzIHR5cGVkXHJcbiAgICAgICAgaWYgKChcclxuICAgICAgICAgICAgICAgIHRoaXMubGFzdFdvcmRGaW5pc2hUaW1lTWlsbGlzICE9PSB1bmRlZmluZWRcclxuICAgICAgICAgICAgICAgICYmIChjdXJyZW50VGltZU1pbGxpcyAtIHRoaXMubGFzdFdvcmRGaW5pc2hUaW1lTWlsbGlzKSA+IDUwMFxyXG4gICAgICAgICAgICApIHx8IChcclxuICAgICAgICAgICAgICAgIHRoaXMubGV0dGVyc1RvVHlwZVJlbWFpbmRlciA+PSAxXHJcbiAgICAgICAgICAgICAgICAmJiB0aGlzLmN1cnJlbnRTdHJpbmcubGVuZ3RoID49IGcuY3VycmVudFRhcmdldC5sZXR0ZXJzLmxlbmd0aFxyXG4gICAgICAgICAgICApKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRTdHJpbmcgPSBbXTtcclxuICAgICAgICAgICAgdGhpcy5sYXN0V29yZEZpbmlzaFRpbWVNaWxsaXMgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIEdlbmVyYXRlIHRoZSBuZWVkZWQgY2hhcmFjdGVycyBhbmQgYXdhcmQgYmFuYW5hc1xyXG4gICAgICAgIHdoaWxlICh0aGlzLmxldHRlcnNUb1R5cGVSZW1haW5kZXIgPj0gMSkge1xyXG4gICAgICAgICAgICB0aGlzLmxldHRlcnNUb1R5cGVSZW1haW5kZXIgLT0gMTtcclxuICAgICAgICAgICAgaWYgKGcuY2hhcmFjdGVyc1RvQ2hvb3NlRnJvbS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBjaGFyYWN0ZXIgPSBnZXRSYW5kb21DaGFyYWN0ZXIoKTtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50U3RyaW5nLnB1c2goY2hhcmFjdGVyKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudFN0cmluZy5sZW5ndGggPj0gZy5jdXJyZW50VGFyZ2V0LmxldHRlcnMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxhc3RXb3JkRmluaXNoVGltZU1pbGxpcyA9IGN1cnJlbnRUaW1lTWlsbGlzO1xyXG4gICAgICAgICAgICAgICAgbGV0IG1hdGNoaW5nTGV0dGVyczogbnVtYmVyID0gY291bnRNYXRjaGluZ0xldHRlcnMoXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50U3RyaW5nLCBnLmN1cnJlbnRUYXJnZXQubGV0dGVycyk7XHJcbiAgICAgICAgICAgICAgICBpZiAobWF0Y2hpbmdMZXR0ZXJzID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBiYW5hbmFzVG9BZGQgPSAoZy5jdXJyZW50VGFyZ2V0LnJld2FyZHNbbWF0Y2hpbmdMZXR0ZXJzIC0gMV1cclxuICAgICAgICAgICAgICAgICAgICAgICAgKyBnLmFkZGl0aXZlRmxhdEJvbnVzKSAqICgxICsgZy5hZGRpdGl2ZVBlcmNlbnRCb251cyk7XHJcbiAgICAgICAgICAgICAgICAgICAgZy5iYW5hbmFzICs9IGJhbmFuYXNUb0FkZDtcclxuICAgICAgICAgICAgICAgICAgICBnLmluY29tZUFjY3VtdWxhdG9yICs9IGJhbmFuYXNUb0FkZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmxldHRlcnNUb1R5cGVSZW1haW5kZXIgPj0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFN0cmluZyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwdWJsaWMgZHJhdygpIHtcclxuICAgICAgICBsZXQgY3VycmVudFN0cmluZyA9IHRoaXMuY3VycmVudFN0cmluZztcclxuICAgICAgICBjdHguc2F2ZSgpO1xyXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcImJsYWNrXCI7XHJcbiAgICAgICAgY3R4LmZvbnQgPSBcIjIwcHggQXJpYWxcIjtcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgZy5jdXJyZW50VGFyZ2V0LmxldHRlcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGNoYXJhY3Rlcjogc3RyaW5nO1xyXG4gICAgICAgICAgICBpZiAoaSA+PSBjdXJyZW50U3RyaW5nLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgY2hhcmFjdGVyID0gXCJfXCI7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjaGFyYWN0ZXIgPSBjdXJyZW50U3RyaW5nW2ldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGN0eC5maWxsVGV4dChcclxuICAgICAgICAgICAgICAgIGNoYXJhY3RlcixcclxuICAgICAgICAgICAgICAgIHRoaXMueCArIDIwICogaSxcclxuICAgICAgICAgICAgICAgIHRoaXMueVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjdHgucmVzdG9yZSgpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IGcgfSBmcm9tIFwiLi9nbG9iYWxcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb3VudE1hdGNoaW5nTGV0dGVycyhzMTogc3RyaW5nW10sIHMyOiBzdHJpbmdbXSkge1xyXG4gICAgbGV0IG1hdGNoaW5nID0gMDtcclxuICAgIGxldCBtaW5MZW5ndGggPSBNYXRoLm1pbihzMS5sZW5ndGgsIHMyLmxlbmd0aCk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1pbkxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKHMxW2ldID09PSBzMltpXSkge1xyXG4gICAgICAgICAgICBtYXRjaGluZysrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBtYXRjaGluZztcclxufVxyXG5cclxuLy8gQnVmZmVyIHRoZSByYW5kb20gY2hhcmFjdGVycyB3ZSBnZXQgZnJvbSBjcnlwdG8gdG8gaW1wcm92ZVxyXG4vLyB0aGUgc3BlZWQuIEFsc28sIEkgdGVzdGVkIGl0LCBhbmQgaXQncyBmYXN0ZXIgdGhhbiB1c2luZ1xyXG4vLyBNYXRoLnJhbmRvbSwgYW5kIGhvcGVmdWxseSBoYXMgYmV0dGVyIHJhbmRvbW5lc3NcclxubGV0IGJ1ZmZlclNpemUgPSAxMDAwMDtcclxubGV0IG51bWJlckJ1ZmZlcjogVWludDE2QXJyYXkgPSBnZXRSYW5kb21OdW1iZXJzKGJ1ZmZlclNpemUpO1xyXG5sZXQgbnVtYmVyQnVmZmVySW5kZXggPSAtMTtcclxuZXhwb3J0IGZ1bmN0aW9uIGdldFJhbmRvbUNoYXJhY3RlcigpIHtcclxuICAgIG51bWJlckJ1ZmZlckluZGV4ICs9IDE7XHJcbiAgICBpZiAobnVtYmVyQnVmZmVySW5kZXggPj0gYnVmZmVyU2l6ZSkge1xyXG4gICAgICAgIG51bWJlckJ1ZmZlckluZGV4ID0gMDtcclxuICAgICAgICBudW1iZXJCdWZmZXIgPSBnZXRSYW5kb21OdW1iZXJzKGJ1ZmZlclNpemUpO1xyXG4gICAgfVxyXG4gICAgbGV0IHJhbmRvbU51bWJlciA9IG51bWJlckJ1ZmZlcltudW1iZXJCdWZmZXJJbmRleF07XHJcbiAgICByZXR1cm4gZy5jaGFyYWN0ZXJzVG9DaG9vc2VGcm9tW3JhbmRvbU51bWJlcl07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRSYW5kb21OdW1iZXJzKG46IG51bWJlcikge1xyXG4gICAgbGV0IHJhbmRvbU51bWJlcnMgPSBuZXcgVWludDE2QXJyYXkobik7XHJcbiAgICByYW5kb21OdW1iZXJzID0gY3J5cHRvLmdldFJhbmRvbVZhbHVlcyhyYW5kb21OdW1iZXJzKTtcclxuICAgIHJldHVybiByYW5kb21OdW1iZXJzO1xyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gVE9ETzpcclxuLy8gQXV0by1zYXZlIGV2ZXJ5IDEwIHNlY29uZHNcclxuLy8gUHJldmVudCBjYXRjaHVwIGxhZyBhZnRlciB0YWItb3V0XHJcbi8vIEF1dG8tY2FsY3VsYXRlIHRydWUgYXZlcmFnZSBiYW5hbmFzIHBlciB3b3JkXHJcbi8vIHJlY3J1aXQgbXVsdGlwbGUgbW9ua2V5cyBhdCBhIHRpbWUgKDEweCwgMTAweClcclxuLy8gZG8gc29tZSBraW5kIG9mIHZpc3VhbCBlZmZlY3QgdG8gaW5kaWNhdGUgdGhlIHF1YWxpdHkgb2YgXHJcbi8vICAgIHRoZSBtYXRjaGVzLCBlLmcuIHR1cm4gZ29sZCBhbmQgcGF1c2Ugb24gcGVyZmVjdCBtYXRjaFxyXG5cclxuLy8gVGhlIFVJIGlzIGEgY29tcGxldGUgbWVzcyFcclxuLy8gSGF2ZSB0ZXh0IGZpdCB3aXRoaW4gdGhlIGJvdW5kcyBvZiB0aGUgYnV0dG9uc1xyXG4vLyBUaGUgc2F2ZSBzaG91bGQgYmUgZW5jcnlwdGVkXHJcbi8vIFRoZSBlcmFzZSBzYXZlIGJ1dHRvbiBzaG91bGQgaGF2ZSBhIGNvbmZpcm1hdGlvbiBzdGVwXHJcbi8vIFRoZSBlcmFzZSBzYXZlIGJ1dHRvbiBzaG91bGQgYWxzbyByZXNldCB0aGUgZ2FtZSAocHJvYmFibHkgd2lsbCByZW5hbWUgdGhlIGJ1dHRvbilcclxuLy8gVGhlcmUgc2hvdWxkIGJlIGFuIGltcG9ydC9leHBvcnQgb3B0aW9uIHRvIGxldCB0aGUgcGxheWVyIGJhY2sgdXAgdGhlaXIgc2F2ZVxyXG4vLyBUaGVyZSBhcmUgYmFsYW5jZSBpc3N1ZXNcclxuLy8gVGhlcmUgc2hvdWxkIGJlIHVwZ3JhZGVzXHJcbi8vIGFkanVzdGFibGUgdXBkYXRlIHJhdGUgZm9yIGJhbmFuYXMgcGVyIHNlY29uZCBkaXNwbGF5XHJcbi8vIGNvbXByZXNzZWQgbm90YXRpb24gZm9yIGxhcmdlIG51bWJlcnNcclxuXHJcbi8vIFdoYXQgaWYgZWFjaCBtb25rZXkgaGFkIHRoZWlyIG93biBrZXlib2FyZCBhbmQgY29tcHV0ZXI/XHJcbi8vIFRoZSB2aXN1YWxzIG9mIHRoaXMgd291bGQgYmUgcHJldHR5IGNvb2xcclxuLy8gSWYgZWFjaCBtb25rZXkgcmVtYWluZWQgcmVsYXRpdmVseSBzbG93LCB0aGVuIGl0IHdvdWxkIGJlXHJcbi8vICAgIGVhc2llciB0byBjb21tdW5pY2F0ZSB3aGVuIGVhY2ggb2YgdGhlbSBnZXQgbWF0Y2hlc1xyXG4vLyBIb3cgbWFueSBzY3JlZW5zIGNhbiBJIGRpc3BsYXkgYXQgb25jZT9cclxuLy8gICAgY2FuIEkgZ2V0IHRvIGxpa2UgMTAwaz9cclxuLy8gICAgcHJvYmFibHkgbm90IHVubGVzcyBJIGZpZ3VyZSBvdXQgYSB3YXkgdG8gc3VtbWFyaXplIHZpc3VhbGx5XHJcbi8vICAgIGhvdyBoaWdoIGNhbiBJIGdldCB3aXRob3V0IGNvbnNpZGVyaW5nIHZpc3VhbHM/XHJcblxyXG4vLyBXaGF0IGlmIGluc3RlYWQgb2YgcGlja2luZyBvbmUgdGFyZ2V0IHdvcmQgYXQgYSB0aW1lLCB0aGUgcGxheWVyIGJ1aWx0IHVwIGEgZGljdGlvbmFyeT9cclxuLy8gICAgQU5ELCB3aGF0IGlmLCB0aGV5IGVhcm5lZCBiYW5hbmFzIGZvciBldmVyeSBtYXRjaGluZyBsZXR0ZXIgaW4gdGhlaXIgZGljdGlvbmFyeT9cclxuLy8gICAgKHJhdGhlciB0aGFuIGZvciBqdXN0IHRoZSBsZXR0ZXJzIHRoZXkgbWF0Y2hlZCB3aXRoIGEgcGFydGljdWxhciB3b3JkPylcclxuLy8gVGhpcyBpbXBsaWVzIG9uZSBmZWF0dXJlIHdoZXJlIHlvdSBjYW4gdXBncmFkZSBhIHBhcnRpY3VsYXIgc2xvdCB0byBhd2FyZCBtb3JlIGJhbmFuYXNcclxuLy8gICAgZS5nLiBkb3VibGUgYWxsIGJhbmFuYXMgZWFybmVkIGZyb20gbWF0Y2hlcyBpbiB0aGUgc2Vjb25kIGxldHRlclxyXG4vLyBXaGF0IGlmLCBhdCB0aGUgc2FtZSB0aW1lLCB3b3JkcyBhbHNvIGF3YXJkZWQgZGlmZmVyZW50IGFtb3VudHMgZm9yIGRpZmZlcmVudCBudW1iZXJzIG9mIG1hdGNoZXM/XHJcbi8vIFdoYXQgaWYgdGhlIGdhbWUgd2FzIHN0cnVjdHVyZWQga2luZCBvZiBsaWtlIGEgZGVjay1idWlsZGVyP1xyXG4vLyBXaGF0IGlmIHRoZSB3b3JkcyB5b3UgY291bGQgYWRkIHRvIHlvdXIgZGljdGlvbmFyeSB3ZXJlIGNob3NlbiBhdCByYW5kb20/XHJcbi8vIFdoYXQgaWYgd2UgYnJvdWdodCBiYWNrIHRoZSBpZGVhIG9mIGxpbWl0aW5nIGhvdyB0aGUgcGxheWVyIGN1c3RvbWl6ZWQgdGhlaXIga2V5Ym9hcmQ/XHJcbi8vIFdoYXQgaWYgeW91IGNhbiB1cGdyYWRlIHdvcmRzP1xyXG5cclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIi4vYnV0dG9uXCI7XHJcbmltcG9ydCB7IGNhbnZhcywgY29sbGlkZWFibGVzLCBjdHgsIGRyYXdhYmxlcywgZywgdXBkYXRlYWJsZXMgfSBmcm9tIFwiLi9nbG9iYWxcIjtcclxuaW1wb3J0IHsgZXJhc2VTYXZlLCBsb2FkRnJvbUxvY2FsU3RvcmFnZSwgc2F2ZSB9IGZyb20gXCIuL2xvY2FsX3N0b3JhZ2VcIjtcclxuaW1wb3J0IHsgdGFyZ2V0cyB9IGZyb20gXCIuL3RhcmdldHNcIjtcclxuaW1wb3J0IHsgZG93bmxvYWQsIGdlbmVyYXRlUGVybXV0YXRpb25zIH0gZnJvbSBcIi4vdGVzdF9wZXJtdXRhdGlvbnNcIjtcclxuaW1wb3J0IHsgVGV4dERpc3BsYXkgfSBmcm9tIFwiLi90ZXh0X2Rpc3BsYXlcIjtcclxuaW1wb3J0IHsgQ29sbGlkZWFibGUgfSBmcm9tIFwiLi90eXBlc1wiO1xyXG5pbXBvcnQgeyBVcGdyYWRlIH0gZnJvbSBcIi4vdXBncmFkZVwiO1xyXG5pbXBvcnQgeyB1cGdyYWRlcyB9IGZyb20gXCIuL3VwZ3JhZGVzXCI7XHJcbmltcG9ydCB7IGNvdW50TWF0Y2hpbmdMZXR0ZXJzLCBnZXRSYW5kb21DaGFyYWN0ZXIgfSBmcm9tIFwiLi91dGlsXCI7XHJcblxyXG4vLyBsZXQgcmVwb3J0MSA9IGdlbmVyYXRlUGVybXV0YXRpb25zKFxyXG4vLyAgICAgW1wiSFwiLCBcIk9cIiwgXCJUXCJdLFxyXG4vLyAgICAgW1wiSFwiLCBcIk9cIiwgXCJPXCIsIFwiVFwiXSxcclxuLy8gKTtcclxuLy8gZG93bmxvYWQoXCJob3QtaG9vdC1wZXJtdXRhdGlvbnMuY3N2XCIsIHJlcG9ydDEpO1xyXG5cclxuLy8gbGV0IHJlcG9ydDIgPSBnZW5lcmF0ZVBlcm11dGF0aW9ucyhcclxuLy8gICAgIFtcIkhcIiwgXCJPXCIsIFwiT1wiLCBcIlRcIl0sXHJcbi8vICAgICBbXCJIXCIsIFwiT1wiLCBcIk9cIiwgXCJUXCJdLFxyXG4vLyApO1xyXG4vLyBkb3dubG9hZChcImhvb3QtaG9vdC1wZXJtdXRhdGlvbnMuY3N2XCIsIHJlcG9ydDIpO1xyXG5cclxubG9hZEZyb21Mb2NhbFN0b3JhZ2UoKTtcclxuXHJcbmxldCBidXR0b25Db2xvcjogc3RyaW5nID0gcmdiU3RyaW5nKDIwMCwgMjAwLCAyNTUpO1xyXG5sZXQgYnV0dG9uSG92ZXJDb2xvcjogc3RyaW5nID0gcmdiU3RyaW5nKDE4MCwgMTgwLCAyMzApO1xyXG5sZXQgZXJhc2VCdXR0b25Db2xvcjogc3RyaW5nID0gcmdiU3RyaW5nKDI1NSwgNTAsIDUwKTtcclxubGV0IGVyYXNlQnV0dG9uSG92ZXJDb2xvcjogc3RyaW5nID0gcmdiU3RyaW5nKDIyNSwgMjAsIDIwKTtcclxuXHJcbi8vIE1ha2UgYnV0dG9ucyBvdXQgb2YgYWxsIHBvc3NpYmxlIGtleWJvYXJkIGtleXNcclxuLy8gbGV0IGFsbEtleWJvYXJkS2V5cyA9IFtcIiBcIiwgXCJBXCIsXCJCXCIsXCJDXCIsXCJEXCIsXCJFXCIsXCJGXCIsXCJHXCIsXCJIXCIsXCJJXCIsXCJKXCIsXCJLXCIsXCJMXCIsXCJNXCIsXCJOXCIsXCJPXCIsXCJQXCIsXCJRXCIsXCJSXCIsXCJTXCIsXCJUXCIsXCJVXCIsXCJWXCIsXCJXXCIsXCJYXCIsXCJZXCIsXCJaXCJdO1xyXG5sZXQgYWxsS2V5Ym9hcmRLZXlzID0gW1wi4o61XCIsIFwiQVwiLFwiQlwiLFwiQ1wiLFwiRFwiLFwiRVwiLFwiRlwiLFwiR1wiLFwiSFwiLFwiSVwiLFwiSlwiLFwiS1wiLFwiTFwiLFwiTVwiLFwiTlwiLFwiT1wiLFwiUFwiLFwiUVwiLFwiUlwiLFwiU1wiLFwiVFwiLFwiVVwiLFwiVlwiLFwiV1wiLFwiWFwiLFwiWVwiLFwiWlwiXTtcclxuZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxLZXlib2FyZEtleXMubGVuZ3RoOyBpKyspIHtcclxuICAgIGxldCBrZXkgPSBhbGxLZXlib2FyZEtleXNbaV07XHJcbiAgICBsZXQgYnV0dG9uID0gbmV3IEJ1dHRvbihcclxuICAgICAgICA0MCArIDMwICogaSxcclxuICAgICAgICA0NTAsXHJcbiAgICAgICAgMjUsXHJcbiAgICAgICAgMjUsXHJcbiAgICAgICAga2V5LFxyXG4gICAgICAgIGJ1dHRvbkNvbG9yLFxyXG4gICAgICAgIGJ1dHRvbkhvdmVyQ29sb3IsXHJcbiAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICBjcmVhdGVDdXJyZW50S2V5Ym9hcmRLZXlCdXR0b24oZy5rZXlib2FyZEtleXMubGVuZ3RoLCBrZXkpO1xyXG4gICAgICAgICAgICBnLmtleWJvYXJkS2V5cy5wdXNoKGtleSk7XHJcbiAgICAgICAgICAgIHVwZGF0ZUNoYXJhY3RlcnNUb0Nob29zZUZyb20oKTtcclxuXHJcbiAgICAgICAgICAgIC8vIG5vdCBzdXJlIGlmIEkgd2lsbCB3YW50IHRvIGNsZWFyIGFsbCB0aGUgY3VycmVudFxyXG4gICAgICAgICAgICAvLyBzdHJpbmdzIHdoZW4gdGhlIHBsYXllciBjaGFuZ2VzIHRoZSBrZXlib2FyZFxyXG4gICAgICAgICAgICAvLyBjdXJyZW50U3RyaW5nID0gW107XHJcbiAgICAgICAgfSxcclxuICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChnLmtleWJvYXJkS2V5cy5sZW5ndGggPCBnLm1heEtleWJvYXJkS2V5cykge1xyXG4gICAgICAgICAgICAgICAgYnV0dG9uLmlzRGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGJ1dHRvbi5pc0Rpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICApO1xyXG59XHJcblxyXG5sZXQgcmFuZG9tTnVtYmVyU2l6ZSA9IDY1NTM2O1xyXG51cGRhdGVDaGFyYWN0ZXJzVG9DaG9vc2VGcm9tKCk7XHJcbmxldCBrZXlib2FyZEtleUJ1dHRvbnM6IEJ1dHRvbltdID0gW11cclxuXHJcbmZvciAobGV0IGkgPSAwOyBpIDwgZy5rZXlib2FyZEtleXMubGVuZ3RoOyBpKyspIHtcclxuICAgIGNyZWF0ZUN1cnJlbnRLZXlib2FyZEtleUJ1dHRvbihpLCBnLmtleWJvYXJkS2V5c1tpXSk7XHJcbn1cclxuXHJcbmxldCB0YXJnZXRCdXR0b25zOiBCdXR0b25bXSA9IFtdO1xyXG5mb3IgKGxldCBpID0gMDsgaSA8IHRhcmdldHMubGVuZ3RoOyBpKyspIHtcclxuICAgIGxldCBidXR0b25UZXh0OiBzdHJpbmcgPSB0YXJnZXRzW2ldLmRpc3BsYXlTdHJpbmc7XHJcbiAgICBpZiAoIWcudGFyZ2V0T3duZWRbaV0pIHtcclxuICAgICAgICBidXR0b25UZXh0ICs9IFwiIFwiICsgdGFyZ2V0c1tpXS5wcmljZTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgYnV0dG9uID0gbmV3IEJ1dHRvbihcclxuICAgICAgICA1MDAsXHJcbiAgICAgICAgNTAgKyAzNSAqIGksXHJcbiAgICAgICAgODAsXHJcbiAgICAgICAgMzAsXHJcbiAgICAgICAgYnV0dG9uVGV4dCxcclxuICAgICAgICBidXR0b25Db2xvcixcclxuICAgICAgICBidXR0b25Ib3ZlckNvbG9yLFxyXG4gICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKCFnLnRhcmdldE93bmVkW2ldKSB7XHJcbiAgICAgICAgICAgICAgICBnLmJhbmFuYXMgLT0gdGFyZ2V0c1tpXS5wcmljZTtcclxuICAgICAgICAgICAgICAgIGJ1dHRvbi50ZXh0ID0gdGFyZ2V0c1tpXS5kaXNwbGF5U3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZy50YXJnZXRPd25lZFtpXSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGcuY3VycmVudFRhcmdldCA9IHRhcmdldHNbaV07XHJcbiAgICAgICAgICAgIGcuY3VycmVudFRhcmdldEluZGV4ID0gaTtcclxuICAgICAgICAgICAgdGFyZ2V0QnV0dG9uc1tpXS5pc0Rpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgKFxyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldHNbaV0ucHJpY2UgPiBnLmJhbmFuYXNcclxuICAgICAgICAgICAgICAgICAgICAmJiAhZy50YXJnZXRPd25lZFtpXVxyXG4gICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgfHwgdGFyZ2V0c1tpXS5kaXNwbGF5U3RyaW5nID09PSBnLmN1cnJlbnRUYXJnZXQuZGlzcGxheVN0cmluZ1xyXG4gICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgIGJ1dHRvbi5pc0Rpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGJ1dHRvbi5pc0Rpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgKTtcclxuICAgIHRhcmdldEJ1dHRvbnMucHVzaChidXR0b24pO1xyXG59XHJcblxyXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNhbnZhcyk7XHJcblxyXG5sZXQgcmVjcnVpdFByaWNlID0gMTAgKyAyICogZy5tb25rZXlzO1xyXG5sZXQgYnV0dG9uMSA9IG5ldyBCdXR0b24oXHJcbiAgICAxMDAsXHJcbiAgICAxMDAsXHJcbiAgICA4MCxcclxuICAgIDMwLFxyXG4gICAgXCJSZWNydWl0IE1vbmtleSBcIiArIHJlY3J1aXRQcmljZSxcclxuICAgIGJ1dHRvbkNvbG9yLFxyXG4gICAgYnV0dG9uSG92ZXJDb2xvcixcclxuICAgICgpID0+IHtcclxuICAgICAgICBnLm1vbmtleXMgKz0gMTtcclxuICAgICAgICBsZXQgbnVtUm93cyA9IDE0XHJcbiAgICAgICAgbGV0IHJvdyA9IGcubW9ua2V5cyAlIG51bVJvd3M7XHJcbiAgICAgICAgbGV0IGNvbHVtbiA9IE1hdGguZmxvb3IoZy5tb25rZXlzIC8gbnVtUm93cyk7XHJcbiAgICAgICAgbmV3IFRleHREaXNwbGF5KDEwMCArIDEwMCAqIGNvbHVtbiwgMjAwICsgMzUgKiByb3cpO1xyXG4gICAgICAgIC8vIGcubGV0dGVyc1BlclNlY29uZCArPSAxO1xyXG4gICAgICAgIGcubGV0dGVyc1BlclNlY29uZCA9IDE7XHJcbiAgICAgICAgZy5iYW5hbmFzIC09IHJlY3J1aXRQcmljZTtcclxuICAgICAgICByZWNydWl0UHJpY2UgPSAxMCArIDIgKiBnLm1vbmtleXM7XHJcbiAgICAgICAgYnV0dG9uMS50ZXh0ID0gXCJSZWNydWl0IE1vbmtleSBcIiArIHJlY3J1aXRQcmljZTtcclxuICAgIH0sXHJcbiAgICAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHJlY3J1aXRQcmljZSA+IGcuYmFuYW5hcykge1xyXG4gICAgICAgICAgICBidXR0b24xLmlzRGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGJ1dHRvbjEuaXNEaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbik7XHJcblxyXG5sZXQgbGFzdENsaWNrZWRUaW1lTWlsbGlzOiBudW1iZXI7XHJcbmxldCBidXR0b24yID0gbmV3IEJ1dHRvbihcclxuICAgIDEwMCxcclxuICAgIDM1MCxcclxuICAgIDgwLFxyXG4gICAgMzAsXHJcbiAgICBcIlR5cGVcIixcclxuICAgIGJ1dHRvbkNvbG9yLFxyXG4gICAgYnV0dG9uSG92ZXJDb2xvcixcclxuICAgIChjdXJyZW50VGltZU1pbGxpczogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgaWYgKGN1cnJlbnRUaW1lTWlsbGlzICE9PSB1bmRlZmluZWRcclxuICAgICAgICAgICAgJiYgKGN1cnJlbnRUaW1lTWlsbGlzIC0gbGFzdENsaWNrZWRUaW1lTWlsbGlzKSA8IDUwKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGV4dERpc3BsYXkubGV0dGVyc1RvVHlwZVJlbWFpbmRlciArPSAxO1xyXG4gICAgICAgIGxhc3RDbGlja2VkVGltZU1pbGxpcyA9IGN1cnJlbnRUaW1lTWlsbGlzO1xyXG4gICAgfSxcclxuICAgICgpID0+IHt9XHJcbik7XHJcblxyXG5sZXQgdXBncmFkZUtleWJvYXJkUHJpY2UgPSBNYXRoLnBvdygxMCwgZy5tYXhLZXlib2FyZEtleXMgKyAxKTtcclxubGV0IGJ1dHRvbjMgPSBuZXcgQnV0dG9uKFxyXG4gICAgMjUwLFxyXG4gICAgNDAwLFxyXG4gICAgODAsXHJcbiAgICAzMCxcclxuICAgIFwiVXBncmFkZSBLZXlib2FyZCBcIiArIHVwZ3JhZGVLZXlib2FyZFByaWNlLFxyXG4gICAgYnV0dG9uQ29sb3IsXHJcbiAgICBidXR0b25Ib3ZlckNvbG9yLFxyXG4gICAgKCkgPT4ge1xyXG4gICAgICAgIGcuYmFuYW5hcyAtPSB1cGdyYWRlS2V5Ym9hcmRQcmljZTtcclxuICAgICAgICBnLm1heEtleWJvYXJkS2V5cyArPSAxO1xyXG4gICAgICAgIHVwZGF0ZUNoYXJhY3RlcnNUb0Nob29zZUZyb20oKTtcclxuICAgICAgICB1cGdyYWRlS2V5Ym9hcmRQcmljZSA9IE1hdGgucG93KDEwLCBnLm1heEtleWJvYXJkS2V5cyArIDEpO1xyXG4gICAgICAgIGJ1dHRvbjMudGV4dCA9IFwiVXBncmFkZSBLZXlib2FyZCBcIiArIHVwZ3JhZGVLZXlib2FyZFByaWNlO1xyXG4gICAgfSxcclxuICAgICgpID0+IHtcclxuICAgICAgICBpZiAodXBncmFkZUtleWJvYXJkUHJpY2UgPiBnLmJhbmFuYXMpIHtcclxuICAgICAgICAgICAgYnV0dG9uMy5pc0Rpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBidXR0b24zLmlzRGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbik7XHJcblxyXG5sZXQgc2F2ZUJ1dHRvbjogQnV0dG9uID0gbmV3IEJ1dHRvbihcclxuICAgIDEwLFxyXG4gICAgNjAwLFxyXG4gICAgMTAwLFxyXG4gICAgMzAsXHJcbiAgICBcIlNhdmVcIixcclxuICAgIGJ1dHRvbkNvbG9yLFxyXG4gICAgYnV0dG9uSG92ZXJDb2xvcixcclxuICAgICgpID0+IHtzYXZlKCl9LFxyXG4gICAgKCkgPT4ge30sXHJcbik7XHJcblxyXG5sZXQgZXJhc2VCdXR0b246IEJ1dHRvbiA9IG5ldyBCdXR0b24oXHJcbiAgICAxMCxcclxuICAgIDY0MCxcclxuICAgIDEwMCxcclxuICAgIDMwLFxyXG4gICAgXCJFcmFzZSBTYXZlXCIsXHJcbiAgICBlcmFzZUJ1dHRvbkNvbG9yLFxyXG4gICAgZXJhc2VCdXR0b25Ib3ZlckNvbG9yLFxyXG4gICAgKCkgPT4ge2VyYXNlU2F2ZSgpfSxcclxuICAgICgpID0+IHt9LFxyXG4pO1xyXG5cclxuLy8gQ29tbWVudCBvdXQgdGhlIHVwZ3JhZGUgYnV0dG9ucyBmb3Igbm93XHJcbi8vIGxldCB1cGdyYWRlQnV0dG9uczogQnV0dG9uW10gPSBbXTtcclxuLy8gY3JlYXRlVXBncmFkZUJ1dHRvbnMoKTtcclxuXHJcbmxldCB0ZXh0RGlzcGxheSA9IG5ldyBUZXh0RGlzcGxheSgxMDAsIDIwMCk7XHJcblxyXG4vLyBsZXQgaW5jb21lQWNjdW11bGF0b3I6IG51bWJlciA9IDA7XHJcbmxldCBsYXN0SW5jb21lVXBkYXRlVGltZU1pbGxpczogbnVtYmVyID0gcGVyZm9ybWFuY2Uubm93KCk7XHJcbmxldCBtaWxsaXNQZXJJbmNvbWVVcGRhdGU6IG51bWJlciA9IDIwMDA7XHJcbmxldCBsYXN0QmFuYW5hc1BlclNlY29uZDogbnVtYmVyID0gMDtcclxuXHJcbi8vIHN0b3JlIHRoZSBtb3VzZSB4eSBpbiBjYXNlIGl0IGdldHMgZXhlY3V0ZWQgZmFzdGVyIHRoYW5cclxuLy8gb25jZSBldmVyeSBmcmFtZSwgd2hpY2ggd291bGQgYmUgdXNlbGVzcyBzaW5jZSBob3ZlciBpc1xyXG4vLyBoYW5kbGVkIG9ubHkgb25jZSBldmVyeSBmcmFtZVxyXG5jYW52YXMub25tb3VzZW1vdmUgPSAoZXY6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgIGxldCBib3VuZHM6IERPTVJlY3QgPSBjYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICBnLm1vdXNlWCA9IGV2LnggLSBib3VuZHMubGVmdDtcclxuICAgIGcubW91c2VZID0gZXYueSAtIGJvdW5kcy50b3A7XHJcbn07XHJcblxyXG4vLyBhc3N1bWUgZm9yIHNpbXBsaWNpdHkgdGhhdCB5b3UgY2FuJ3QgaGF2ZSB0d28gbW91c2Vkb3duXHJcbi8vIGV2ZW50cyB3aXRob3V0IGEgbW91c2V1cFxyXG5jYW52YXMub25tb3VzZWRvd24gPSAoZXY6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgIGxldCBib3VuZHM6IERPTVJlY3QgPSBjYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICBsZXQgbW91c2VYID0gZXYueCAtIGJvdW5kcy5sZWZ0O1xyXG4gICAgbGV0IG1vdXNlWSA9IGV2LnkgLSBib3VuZHMudG9wO1xyXG4gICAgbGV0IGNvbGxpZGVhYmxlOiBDb2xsaWRlYWJsZSA9IGdldENvbGxpZGluZ0VudGl0eShtb3VzZVgsIG1vdXNlWSk7XHJcbiAgICBpZiAoY29sbGlkZWFibGUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGNvbGxpZGVhYmxlLmlzTW91c2VEb3duZWQgPSB0cnVlO1xyXG4gICAgICAgIGN1cnJlbnRNb3VzZURvd25lZCA9IGNvbGxpZGVhYmxlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjdXJyZW50TW91c2VEb3duZWQgPSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNhbnZhcy5vbm1vdXNldXAgPSAoZXY6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgIGxldCBib3VuZHM6IERPTVJlY3QgPSBjYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICBsZXQgbW91c2VYID0gZXYueCAtIGJvdW5kcy5sZWZ0O1xyXG4gICAgbGV0IG1vdXNlWSA9IGV2LnkgLSBib3VuZHMudG9wO1xyXG4gICAgbGV0IGNvbGxpZGVhYmxlOiBDb2xsaWRlYWJsZSA9IGdldENvbGxpZGluZ0VudGl0eShtb3VzZVgsIG1vdXNlWSk7XHJcbiAgICBpZiAoY29sbGlkZWFibGUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGlmIChjb2xsaWRlYWJsZS5pc01vdXNlRG93bmVkXHJcbiAgICAgICAgICAgICYmICFjb2xsaWRlYWJsZS5pc0Rpc2FibGVkKSB7XHJcbiAgICAgICAgICAgIGNvbGxpZGVhYmxlLm9uQ2xpY2soZXYudGltZVN0YW1wKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoY3VycmVudE1vdXNlRG93bmVkICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBjdXJyZW50TW91c2VEb3duZWQuaXNNb3VzZURvd25lZCA9IGZhbHNlO1xyXG4gICAgfVxyXG59XHJcblxyXG5sZXQgcHJldmlvdXNUaW1lTWlsbGlzOiBudW1iZXI7XHJcbmxldCBwcmV2aW91c0hvdmVyZWQ6IENvbGxpZGVhYmxlO1xyXG5sZXQgY3VycmVudE1vdXNlRG93bmVkOiBDb2xsaWRlYWJsZTtcclxuLy8gbGV0IGxhc3RXb3JkRmluaXNoVGltZU1pbGxpczogbnVtYmVyO1xyXG5cclxud2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShkcmF3KTtcclxuXHJcbmZ1bmN0aW9uIGRyYXcoY3VycmVudFRpbWVNaWxsaXM6IG51bWJlcikge1xyXG4gICAgbGV0IGVsYXBzZWRUaW1lTWlsbGlzOiBudW1iZXIgPSAwO1xyXG4gICAgaWYgKHByZXZpb3VzVGltZU1pbGxpcyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgZWxhcHNlZFRpbWVNaWxsaXMgPSBjdXJyZW50VGltZU1pbGxpcyAtIHByZXZpb3VzVGltZU1pbGxpcztcclxuICAgIH1cclxuXHJcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XHJcbiAgICBjdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xyXG4gICAgY3R4LmZpbGxSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XHJcblxyXG4gICAgaWYgKHByZXZpb3VzSG92ZXJlZCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgcHJldmlvdXNIb3ZlcmVkLmlzSG92ZXJlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2xsaWRlYWJsZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBsZXQgaXNDb2xsaWRpbmcgPSBjb2xsaWRlYWJsZXNbaV0uY29sbGlkZShnLm1vdXNlWCwgZy5tb3VzZVkpO1xyXG4gICAgICAgIGlmIChpc0NvbGxpZGluZykge1xyXG4gICAgICAgICAgICBsZXQgY3VycmVudEhvdmVyZWQgPSBjb2xsaWRlYWJsZXNbaV07XHJcbiAgICAgICAgICAgIGN1cnJlbnRIb3ZlcmVkLmlzSG92ZXJlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHByZXZpb3VzSG92ZXJlZCA9IGN1cnJlbnRIb3ZlcmVkO1xyXG4gICAgICAgICAgICBicmVhazsgLy8gb25seSBvbmUgdGhpbmcgY2FuIGJlIGhvdmVyZWQgb3ZlciBhdCBhIHRpbWVcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZy5sZXR0ZXJzVG9UeXBlUmVtYWluZGVyICs9IGVsYXBzZWRUaW1lTWlsbGlzIC8gMTAwMCAqIGcubGV0dGVyc1BlclNlY29uZDtcclxuICAgIFxyXG4gICAgLy8gTWFrZSBhIGZpbmlzaGVkIHdvcmQgc3RheSBvbiBzY3JlZW4gZm9yIDUwMG1zLCBvciB1bnRpbFxyXG4gICAgLy8gYW5vdGhlciBsZXR0ZXIgaXMgdHlwZWRcclxuICAgIC8vIGlmICgoXHJcbiAgICAvLyAgICAgICAgIGxhc3RXb3JkRmluaXNoVGltZU1pbGxpcyAhPT0gdW5kZWZpbmVkXHJcbiAgICAvLyAgICAgICAgICYmIChjdXJyZW50VGltZU1pbGxpcyAtIGxhc3RXb3JkRmluaXNoVGltZU1pbGxpcykgPiA1MDBcclxuICAgIC8vICAgICApIHx8IChcclxuICAgIC8vICAgICAgICAgZy5sZXR0ZXJzVG9UeXBlUmVtYWluZGVyID49IDFcclxuICAgIC8vICAgICAgICAgJiYgY3VycmVudFN0cmluZy5sZW5ndGggPj0gZy5jdXJyZW50VGFyZ2V0LmxldHRlcnMubGVuZ3RoXHJcbiAgICAvLyAgICAgKSkge1xyXG4gICAgLy8gICAgIGN1cnJlbnRTdHJpbmcgPSBbXTtcclxuICAgIC8vICAgICBsYXN0V29yZEZpbmlzaFRpbWVNaWxsaXMgPSB1bmRlZmluZWQ7XHJcbiAgICAvLyB9XHJcbiAgICBcclxuICAgIC8vIEdlbmVyYXRlIHRoZSBuZWVkZWQgY2hhcmFjdGVycyBhbmQgYXdhcmQgYmFuYW5hc1xyXG4gICAgLy8gd2hpbGUgKGcubGV0dGVyc1RvVHlwZVJlbWFpbmRlciA+PSAxKSB7XHJcbiAgICAvLyAgICAgZy5sZXR0ZXJzVG9UeXBlUmVtYWluZGVyIC09IDE7XHJcbiAgICAvLyAgICAgaWYgKGcuY2hhcmFjdGVyc1RvQ2hvb3NlRnJvbS5sZW5ndGggPT09IDApIHtcclxuICAgIC8vICAgICAgICAgY29udGludWU7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIGxldCBjaGFyYWN0ZXIgPSBnZXRSYW5kb21DaGFyYWN0ZXIoKTtcclxuICAgIC8vICAgICBjdXJyZW50U3RyaW5nLnB1c2goY2hhcmFjdGVyKTtcclxuICAgIC8vICAgICBpZiAoY3VycmVudFN0cmluZy5sZW5ndGggPj0gZy5jdXJyZW50VGFyZ2V0LmxldHRlcnMubGVuZ3RoKSB7XHJcbiAgICAvLyAgICAgICAgIGxhc3RXb3JkRmluaXNoVGltZU1pbGxpcyA9IGN1cnJlbnRUaW1lTWlsbGlzO1xyXG4gICAgLy8gICAgICAgICBsZXQgbWF0Y2hpbmdMZXR0ZXJzOiBudW1iZXIgPSBjb3VudE1hdGNoaW5nTGV0dGVycyhcclxuICAgIC8vICAgICAgICAgICAgIGN1cnJlbnRTdHJpbmcsIGcuY3VycmVudFRhcmdldC5sZXR0ZXJzKTtcclxuICAgIC8vICAgICAgICAgaWYgKG1hdGNoaW5nTGV0dGVycyA+IDApIHtcclxuICAgIC8vICAgICAgICAgICAgIGxldCBiYW5hbmFzVG9BZGQgPSAoZy5jdXJyZW50VGFyZ2V0LnJld2FyZHNbbWF0Y2hpbmdMZXR0ZXJzIC0gMV1cclxuICAgIC8vICAgICAgICAgICAgICAgICArIGcuYWRkaXRpdmVGbGF0Qm9udXMpICogKDEgKyBnLmFkZGl0aXZlUGVyY2VudEJvbnVzKTtcclxuICAgIC8vICAgICAgICAgICAgIGcuYmFuYW5hcyArPSBiYW5hbmFzVG9BZGQ7XHJcbiAgICAvLyAgICAgICAgICAgICBnLmluY29tZUFjY3VtdWxhdG9yICs9IGJhbmFuYXNUb0FkZDtcclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICBpZiAoZy5sZXR0ZXJzVG9UeXBlUmVtYWluZGVyID49IDEpIHtcclxuICAgIC8vICAgICAgICAgICAgIGN1cnJlbnRTdHJpbmcgPSBbXTtcclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBEcmF3IHRoZSBjdXJyZW50IHN0cmluZyBvbiBzY3JlZW5cclxuICAgIC8vIGN0eC5zYXZlKCk7XHJcbiAgICAvLyBjdHguZmlsbFN0eWxlID0gXCJibGFja1wiO1xyXG4gICAgLy8gY3R4LmZvbnQgPSBcIjIwcHggQXJpYWxcIjtcclxuICAgIC8vIGZvcihsZXQgaSA9IDA7IGkgPCBnLmN1cnJlbnRUYXJnZXQubGV0dGVycy5sZW5ndGg7IGkrKykge1xyXG4gICAgLy8gICAgIGxldCBjaGFyYWN0ZXI6IHN0cmluZztcclxuICAgIC8vICAgICBpZiAoaSA+PSBjdXJyZW50U3RyaW5nLmxlbmd0aCkge1xyXG4gICAgLy8gICAgICAgICBjaGFyYWN0ZXIgPSBcIl9cIjtcclxuICAgIC8vICAgICB9IGVsc2Uge1xyXG4gICAgLy8gICAgICAgICBjaGFyYWN0ZXIgPSBjdXJyZW50U3RyaW5nW2ldO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICBjdHguZmlsbFRleHQoXHJcbiAgICAvLyAgICAgICAgIGNoYXJhY3RlcixcclxuICAgIC8vICAgICAgICAgMTAwICsgMjAgKiBpLFxyXG4gICAgLy8gICAgICAgICAyMDBcclxuICAgIC8vICAgICApO1xyXG4gICAgLy8gfVxyXG4gICAgLy8gY3R4LnJlc3RvcmUoKTtcclxuXHJcbiAgICAvLyBDYWxsIHVwZGF0ZSBvbiBldmVyeXRoaW5nIGp1c3QgYmVmb3JlIGRyYXdcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZHJhd2FibGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgdXBkYXRlYWJsZXNbaV0udXBkYXRlKGN1cnJlbnRUaW1lTWlsbGlzLCBlbGFwc2VkVGltZU1pbGxpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVXBkYXRlIHRoZSBpbmNvbWUgcGVyIHNlY29uZCBpZiBpdCdzIHRpbWUgdG9cclxuICAgIGxldCBlbGFwc2VkU2luY2VMYXN0SW5jb21lVXBkYXRlID0gY3VycmVudFRpbWVNaWxsaXMgLSBsYXN0SW5jb21lVXBkYXRlVGltZU1pbGxpcztcclxuICAgIGlmIChlbGFwc2VkU2luY2VMYXN0SW5jb21lVXBkYXRlID49IG1pbGxpc1BlckluY29tZVVwZGF0ZSkge1xyXG4gICAgICAgIGxhc3RCYW5hbmFzUGVyU2Vjb25kID0gZy5pbmNvbWVBY2N1bXVsYXRvciAvIChlbGFwc2VkU2luY2VMYXN0SW5jb21lVXBkYXRlIC8gMTAwMCk7XHJcbiAgICAgICAgZy5pbmNvbWVBY2N1bXVsYXRvciA9IDA7XHJcbiAgICAgICAgbGFzdEluY29tZVVwZGF0ZVRpbWVNaWxsaXMgPSBjdXJyZW50VGltZU1pbGxpcztcclxuICAgIH1cclxuXHJcbiAgICAvLyBEcmF3IHZhbHVlcyBhdCB0aGUgZW5kIG9mIHRoZSBmcmFtZSBzbyB0aGV5J3JlIGFzIHVwXHJcbiAgICAvLyB0byBkYXRlIGFzIHRoZXkgY2FuIGJlXHJcbiAgICBjdHguc2F2ZSgpO1xyXG4gICAgY3R4LmZpbGxTdHlsZSA9IFwiYmxhY2tcIjtcclxuICAgIGN0eC5mb250ID0gXCIyMHB4IEFyaWFsXCI7XHJcblxyXG4gICAgY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XHJcbiAgICBjdHguZmlsbFRleHQoYmFuYW5hc1BlclNlY29uZChsYXN0QmFuYW5hc1BlclNlY29uZCksIDE0MCwgMzApO1xyXG4gICAgY3R4LmZpbGxUZXh0KGJhbmFuYXMoZy5iYW5hbmFzKSwgMTQwLCA1NSk7XHJcbiAgICBjdHguZmlsbFRleHQobW9ua2V5cyhnLm1vbmtleXMpLCAxNDAsIDgwKTtcclxuXHJcbiAgICBjdHgudGV4dEFsaWduID0gXCJsZWZ0XCI7XHJcbiAgICBjdHguZmlsbFRleHQoXCJUYXJnZXQgU3RyaW5nOiBcIlxyXG4gICAgICAgICsgZy5jdXJyZW50VGFyZ2V0LmRpc3BsYXlTdHJpbmcsIDI1MCwgMTIwKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZy5jdXJyZW50VGFyZ2V0LnJld2FyZHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBsZXQgcmV3YXJkID0gKGcuY3VycmVudFRhcmdldC5yZXdhcmRzW2ldXHJcbiAgICAgICAgICAgICsgZy5hZGRpdGl2ZUZsYXRCb251cykgKiAoMSArIGcuYWRkaXRpdmVQZXJjZW50Qm9udXMpO1xyXG4gICAgICAgIGxldCBsaW5lID0gKGkgKyAxKSArIFwiOiBcIiArIGJhbmFuYXMocmV3YXJkKTtcclxuICAgICAgICBjdHguZmlsbFRleHQobGluZSwgMjgwLCAxNDAgKyAyMCAqIGkpO1xyXG4gICAgfVxyXG5cclxuICAgIGN0eC50ZXh0QWxpZ24gPSBcInJpZ2h0XCI7XHJcbiAgICBjdHguZmlsbFRleHQoXCJLZXlib2FyZCBLZXlzOlwiLCAxNjAsIDMwMCk7XHJcblxyXG4gICAgY3R4LnJlc3RvcmUoKTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRyYXdhYmxlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGRyYXdhYmxlc1tpXS5kcmF3KGN1cnJlbnRUaW1lTWlsbGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwcmV2aW91c1RpbWVNaWxsaXMgPSBjdXJyZW50VGltZU1pbGxpcztcclxuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZHJhdyk7XHJcbn1cclxuXHJcbi8vIE1ha2UgYSBidXR0b24gb3V0IG9mIHRoZSBhIGtleWJvYXJkIGtleSBzbyB5b3VcclxuLy8gY2FuIGNsaWNrIHRvIHJlbW92ZSBpdCBmcm9tIHlvdXIga2V5Ym9hcmQuXHJcbi8vIGkgaXMgdGhlIGluZGV4IGluIHRoZSBrZXlib2FyZEtleXMgYXJyYXlcclxuLy8gT24gY2xpY2sgaXQgZGVsZXRlcyBhbmQgcmVtYWtlcyBhbGwgdGhlIGJ1dHRvbnNcclxuZnVuY3Rpb24gY3JlYXRlQ3VycmVudEtleWJvYXJkS2V5QnV0dG9uKGk6IG51bWJlciwga2V5OiBzdHJpbmcpIHtcclxuICAgIGxldCBidXR0b24gPSBuZXcgQnV0dG9uKFxyXG4gICAgICAgIDE4MCArIDMwICogaSxcclxuICAgICAgICAyODAsXHJcbiAgICAgICAgMjUsXHJcbiAgICAgICAgMjUsXHJcbiAgICAgICAga2V5LFxyXG4gICAgICAgIGJ1dHRvbkNvbG9yLFxyXG4gICAgICAgIGJ1dHRvbkhvdmVyQ29sb3IsXHJcbiAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICBnLmtleWJvYXJkS2V5cy5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgIHVwZGF0ZUNoYXJhY3RlcnNUb0Nob29zZUZyb20oKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBrZXlib2FyZEtleUJ1dHRvbnMubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGtleWJvYXJkS2V5QnV0dG9uc1tqXS5kZWxldGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGcua2V5Ym9hcmRLZXlzLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQga2V5ID0gZy5rZXlib2FyZEtleXNbal07XHJcbiAgICAgICAgICAgICAgICBjcmVhdGVDdXJyZW50S2V5Ym9hcmRLZXlCdXR0b24oaiwga2V5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBub3Qgc3VyZSBpZiBJIHdpbGwgd2FudCB0byBjbGVhciBhbGwgdGhlIGN1cnJlbnRcclxuICAgICAgICAgICAgLy8gc3RyaW5ncyB3aGVuIHRoZSBwbGF5ZXIgY2hhbmdlcyB0aGUga2V5Ym9hcmRcclxuICAgICAgICAgICAgLy8gY3VycmVudFN0cmluZyA9IFtdO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgKCkgPT4ge30sXHJcbiAgICApO1xyXG4gICAga2V5Ym9hcmRLZXlCdXR0b25zLnB1c2goYnV0dG9uKTtcclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlQ2hhcmFjdGVyc1RvQ2hvb3NlRnJvbSgpIHtcclxuICAgIGcuY2hhcmFjdGVyc1RvQ2hvb3NlRnJvbSA9IFtdO1xyXG4gICAgaWYgKGcua2V5Ym9hcmRLZXlzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmFuZG9tTnVtYmVyU2l6ZTsgaSsrKSB7XHJcbiAgICAgICAgZy5jaGFyYWN0ZXJzVG9DaG9vc2VGcm9tLnB1c2goXHJcbiAgICAgICAgICAgIGcua2V5Ym9hcmRLZXlzW2kgJSBnLmtleWJvYXJkS2V5cy5sZW5ndGhdXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuLy8gZnVuY3Rpb24gY3JlYXRlVXBncmFkZUJ1dHRvbnMoKSB7XHJcbi8vICAgICBsZXQgc29ydGVkVXBncmFkZXM6IFVwZ3JhZGVbXSA9IHNvcnRlZCh1cGdyYWRlcywgKGE6IFVwZ3JhZGUsIGI6IFVwZ3JhZGUpID0+IHtcclxuLy8gICAgICAgICByZXR1cm4gYS5wcmljZSAtIGIucHJpY2U7XHJcbi8vICAgICB9KTtcclxuLy8gICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc29ydGVkVXBncmFkZXMubGVuZ3RoOyBpKyspIHtcclxuLy8gICAgICAgICBsZXQgdXBncmFkZSA9IHNvcnRlZFVwZ3JhZGVzW2ldO1xyXG4vLyAgICAgICAgIGxldCBidXR0b246IEJ1dHRvbiA9IG5ldyBCdXR0b24oXHJcbi8vICAgICAgICAgICAgIDUwMCxcclxuLy8gICAgICAgICAgICAgMzAwICsgMzUgKiBpLFxyXG4vLyAgICAgICAgICAgICA4MCxcclxuLy8gICAgICAgICAgICAgMzAsXHJcbi8vICAgICAgICAgICAgIHVwZ3JhZGUudGV4dCArIFwiIFwiICsgdXBncmFkZS5wcmljZSxcclxuLy8gICAgICAgICAgICAgYnV0dG9uQ29sb3IsXHJcbi8vICAgICAgICAgICAgIGJ1dHRvbkhvdmVyQ29sb3IsXHJcbi8vICAgICAgICAgICAgICgpID0+IHtcclxuLy8gICAgICAgICAgICAgICAgIHVwZ3JhZGUuYnV5KCk7XHJcbi8vICAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHVwZ3JhZGVCdXR0b25zLmxlbmd0aDsgaisrKSB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgdXBncmFkZUJ1dHRvbnNbal0uZGVsZXRlKCk7XHJcbi8vICAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgICAgICBjcmVhdGVVcGdyYWRlQnV0dG9ucygpO1xyXG4vLyAgICAgICAgICAgICB9LFxyXG4vLyAgICAgICAgICAgICAoKSA9PiB7XHJcbi8vICAgICAgICAgICAgICAgICBpZiAodXBncmFkZS5wcmljZSA+IGcuYmFuYW5hcykge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbi5pc0Rpc2FibGVkID0gdHJ1ZTtcclxuLy8gICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgYnV0dG9uLmlzRGlzYWJsZWQgPSBmYWxzZTtcclxuLy8gICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgfSxcclxuLy8gICAgICAgICApO1xyXG4vLyAgICAgICAgIHVwZ3JhZGVCdXR0b25zLnB1c2goYnV0dG9uKTtcclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuZnVuY3Rpb24gZ2V0Q29sbGlkaW5nRW50aXR5KHBvaW50WDogbnVtYmVyLCBwb2ludFk6IG51bWJlcikge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2xsaWRlYWJsZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBsZXQgaXNDb2xsaWRpbmcgPSBjb2xsaWRlYWJsZXNbaV0uY29sbGlkZShnLm1vdXNlWCwgZy5tb3VzZVkpO1xyXG4gICAgICAgIGlmIChpc0NvbGxpZGluZykge1xyXG4gICAgICAgICAgICByZXR1cm4gY29sbGlkZWFibGVzW2ldO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJnYlN0cmluZyhyZWQ6IG51bWJlciwgZ3JlZW46IG51bWJlciwgYmx1ZTogbnVtYmVyKSB7XHJcbiAgICByZXR1cm4gXCJyZ2IoXCIgKyByZWQgKyBcIixcIiArIGdyZWVuICsgXCIsXCIgKyBibHVlICsgXCIpXCI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGJhbmFuYXMobnVtYmVyOiBudW1iZXIpIHtcclxuICAgIG51bWJlciA9IE1hdGgucm91bmQobnVtYmVyKTtcclxuICAgIGlmIChudW1iZXIgPT09IDEpIHtcclxuICAgICAgICByZXR1cm4gbnVtYmVyICsgXCIgYmFuYW5hXCI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBudW1iZXIgKyBcIiBiYW5hbmFzXCI7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1vbmtleXMobnVtYmVyOiBudW1iZXIpIHsgXHJcbiAgICBpZiAobnVtYmVyID09PSAxKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bWJlciArIFwiIG1vbmtleVwiO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gbnVtYmVyICsgXCIgbW9ua2V5c1wiO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBiYW5hbmFzUGVyU2Vjb25kKG51bWJlcjogbnVtYmVyKSB7XHJcbiAgICBudW1iZXIgPSBNYXRoLnJvdW5kKG51bWJlcik7XHJcbiAgICBpZiAobnVtYmVyID09PSAxKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bWJlciArIFwiIGJhbmFuYSBwZXIgc2Vjb25kXCI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBudW1iZXIgKyBcIiBiYW5hbmFzIHBlciBzZWNvbmRcIjtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc29ydGVkKGFycmF5OiBhbnlbXSwgY29tcGFyZUZuPzogKGE6IGFueSwgYjogYW55KSA9PiBudW1iZXIpIHtcclxuICAgIHJldHVybiBhcnJheS5zbGljZSgpLnNvcnQoY29tcGFyZUZuKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcm91bmRUb05QbGFjZXMoeDogbnVtYmVyLCBudW1QbGFjZXM6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICBsZXQgc2NhbGU6IG51bWJlciA9IE1hdGgucG93KDEwLCBudW1QbGFjZXMpO1xyXG4gICAgcmV0dXJuIE1hdGgucm91bmQoeCAqIHNjYWxlKSAvIHNjYWxlO1xyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==