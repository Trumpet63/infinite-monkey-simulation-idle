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
    function TextDisplay(x, y, height) {
        this.lettersToTypeRemainder = 0;
        this.currentString = [];
        this.x = x;
        this.y = y;
        this.height = height;
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
        var fontSize = this.height * 4 / 7;
        var width = _global__WEBPACK_IMPORTED_MODULE_0__.g.currentTarget.letters.length * fontSize;
        _global__WEBPACK_IMPORTED_MODULE_0__.ctx.save();
        _global__WEBPACK_IMPORTED_MODULE_0__.ctx.strokeStyle = "black";
        _global__WEBPACK_IMPORTED_MODULE_0__.ctx.strokeRect(this.x, this.y, width, this.height);
        _global__WEBPACK_IMPORTED_MODULE_0__.ctx.fillStyle = "black";
        _global__WEBPACK_IMPORTED_MODULE_0__.ctx.font = fontSize + "px Arial";
        for (var i = 0; i < _global__WEBPACK_IMPORTED_MODULE_0__.g.currentTarget.letters.length; i++) {
            var character = void 0;
            if (i >= currentString.length) {
                character = "_";
            }
            else {
                character = currentString[i];
            }
            _global__WEBPACK_IMPORTED_MODULE_0__.ctx.fillText(character, this.x + fontSize * 0.15 + fontSize * i, this.y + fontSize * 1.2);
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
    var shrink = _global__WEBPACK_IMPORTED_MODULE_1__.g.monkeys * 1.2;
    var height = 35 - shrink;
    // let numRows = 14
    // let row = g.monkeys % numRows;
    // let column = Math.floor(g.monkeys / numRows);
    // let x = 100 + 100 * column;
    // let y = 165 + 35 * row - (g.monkeys * (g.monkeys - 1) / 2);
    var x = 50 + _global__WEBPACK_IMPORTED_MODULE_1__.g.monkeys * _global__WEBPACK_IMPORTED_MODULE_1__.g.currentTarget.letters.length * 35 * 4 / 7 - (shrink * (shrink - 1) / 2) * 7 / 4;
    var y = 165 + _global__WEBPACK_IMPORTED_MODULE_1__.g.monkeys * 10;
    new _text_display__WEBPACK_IMPORTED_MODULE_4__.TextDisplay(x, y, height);
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
var textDisplay = new _text_display__WEBPACK_IMPORTED_MODULE_4__.TextDisplay(50, 165, 35);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQyxNQUFNLENBQUMsQ0FBQztJQUM1QixJQUFJLE1BQU0sS0FBSyxDQUFDLEVBQUU7UUFDZCxPQUFPLE1BQU0sR0FBRyxTQUFTLENBQUM7S0FDN0I7U0FBTTtRQUNILE9BQU8sTUFBTSxHQUFHLFVBQVUsQ0FBQztLQUM5QjtBQUNMLENBQUM7QUFFRCxTQUFTLE9BQU8sQ0FBQyxNQUFjO0lBQzNCLElBQUksTUFBTSxLQUFLLENBQUMsRUFBRTtRQUNkLE9BQU8sTUFBTSxHQUFHLFNBQVMsQ0FBQztLQUM3QjtTQUFNO1FBQ0gsT0FBTyxNQUFNLEdBQUcsVUFBVSxDQUFDO0tBQzlCO0FBQ0wsQ0FBQztBQUVELFNBQVMsZ0JBQWdCLENBQUMsTUFBYztJQUNwQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM1QixJQUFJLE1BQU0sS0FBSyxDQUFDLEVBQUU7UUFDZCxPQUFPLE1BQU0sR0FBRyxvQkFBb0IsQ0FBQztLQUN4QztTQUFNO1FBQ0gsT0FBTyxNQUFNLEdBQUcscUJBQXFCLENBQUM7S0FDekM7QUFDTCxDQUFDO0FBRUQsU0FBUyxNQUFNLENBQUMsS0FBWSxFQUFFLFNBQXNDO0lBQ2hFLE9BQU8sS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUN6QyxDQUFDO0FBRUQsU0FBUyxjQUFjLENBQUMsQ0FBUyxFQUFFLFNBQWlCO0lBQ2hELElBQUksS0FBSyxHQUFXLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQzVDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFDO0FBQ3pDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leHBvcnRzLy4vc3JjL2J1dHRvbi50cyIsIndlYnBhY2s6Ly9leHBvcnRzLy4vc3JjL2dsb2JhbC50cyIsIndlYnBhY2s6Ly9leHBvcnRzLy4vc3JjL2xvY2FsX3N0b3JhZ2UudHMiLCJ3ZWJwYWNrOi8vZXhwb3J0cy8uL3NyYy9zYXZlX2ZpbGUudHMiLCJ3ZWJwYWNrOi8vZXhwb3J0cy8uL3NyYy90YXJnZXQudHMiLCJ3ZWJwYWNrOi8vZXhwb3J0cy8uL3NyYy90YXJnZXRzLnRzIiwid2VicGFjazovL2V4cG9ydHMvLi9zcmMvdGV4dF9kaXNwbGF5LnRzIiwid2VicGFjazovL2V4cG9ydHMvLi9zcmMvdXRpbC50cyIsIndlYnBhY2s6Ly9leHBvcnRzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2V4cG9ydHMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2V4cG9ydHMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9leHBvcnRzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXhwb3J0cy8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb2xsaWRlYWJsZXMsIGN0eCwgZHJhd2FibGVzLCBnLCB1cGRhdGVhYmxlcyB9IGZyb20gXCIuL2dsb2JhbFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEJ1dHRvbiB7XHJcbiAgICBwdWJsaWMgaWQ6IG51bWJlcjtcclxuICAgIHB1YmxpYyB0b3BMZWZ0WDogbnVtYmVyO1xyXG4gICAgcHVibGljIHRvcExlZnRZOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgd2lkdGg6IG51bWJlcjtcclxuICAgIHB1YmxpYyBoZWlnaHQ6IG51bWJlcjtcclxuICAgIHB1YmxpYyBib3R0b21SaWdodFg6IG51bWJlcjtcclxuICAgIHB1YmxpYyBib3R0b21SaWdodFk6IG51bWJlcjtcclxuICAgIHB1YmxpYyB0ZXh0OiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgY29sb3I6IHN0cmluZztcclxuICAgIHB1YmxpYyBob3ZlcmVkQ29sb3I6IHN0cmluZztcclxuICAgIHB1YmxpYyBkaXNhYmxlZENvbG9yOiBzdHJpbmcgPSBcImdyYXlcIjtcclxuICAgIHB1YmxpYyBpc0hvdmVyZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHB1YmxpYyBpc0Rpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwdWJsaWMgaXNNb3VzZURvd25lZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHVibGljIG9uQ2xpY2s6IChjdXJyZW50VGltZU1pbGxpcz86IG51bWJlcikgPT4gdm9pZDtcclxuICAgIHB1YmxpYyB1cGRhdGU6ICgpID0+IHZvaWQ7XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHRvcExlZnRYOiBudW1iZXIsXHJcbiAgICAgICAgdG9wTGVmdFk6IG51bWJlcixcclxuICAgICAgICB3aWR0aDogbnVtYmVyLFxyXG4gICAgICAgIGhlaWdodDogbnVtYmVyLFxyXG4gICAgICAgIHRleHQ6IHN0cmluZyxcclxuICAgICAgICBjb2xvcjogc3RyaW5nLFxyXG4gICAgICAgIGhvdmVyZWRDb2xvcjogc3RyaW5nLFxyXG4gICAgICAgIG9uQ2xpY2s6IChjdXJyZW50VGltZU1pbGxpcz86IG51bWJlcikgPT4gdm9pZCxcclxuICAgICAgICB1cGRhdGU6ICgpID0+IHZvaWQsXHJcbiAgICApIHtcclxuICAgICAgICB0aGlzLnRvcExlZnRYID0gdG9wTGVmdFg7XHJcbiAgICAgICAgdGhpcy50b3BMZWZ0WSA9IHRvcExlZnRZO1xyXG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcclxuICAgICAgICB0aGlzLmJvdHRvbVJpZ2h0WCA9IHRvcExlZnRYICsgd2lkdGg7XHJcbiAgICAgICAgdGhpcy5ib3R0b21SaWdodFkgPSB0b3BMZWZ0WSArIGhlaWdodDtcclxuICAgICAgICB0aGlzLnRleHQgPSB0ZXh0O1xyXG4gICAgICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcclxuICAgICAgICB0aGlzLmhvdmVyZWRDb2xvciA9IGhvdmVyZWRDb2xvcjtcclxuICAgICAgICB0aGlzLm9uQ2xpY2sgPSBvbkNsaWNrO1xyXG4gICAgICAgIHRoaXMudXBkYXRlID0gdXBkYXRlO1xyXG5cclxuICAgICAgICB0aGlzLmlkID0gZy5pZENvdW50ZXI7XHJcbiAgICAgICAgZy5pZENvdW50ZXIgKz0gMTtcclxuICAgICAgICBkcmF3YWJsZXMucHVzaCh0aGlzKTtcclxuICAgICAgICBjb2xsaWRlYWJsZXMucHVzaCh0aGlzKTtcclxuICAgICAgICB1cGRhdGVhYmxlcy5wdXNoKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkcmF3KCkge1xyXG4gICAgICAgIGxldCB0b3BMZWZ0WCA9IHRoaXMudG9wTGVmdFg7XHJcbiAgICAgICAgbGV0IHRvcExlZnRZID0gdGhpcy50b3BMZWZ0WTtcclxuICAgICAgICBsZXQgd2lkdGggPSB0aGlzLndpZHRoO1xyXG4gICAgICAgIGxldCBoZWlnaHQgPSB0aGlzLmhlaWdodDtcclxuICAgICAgICBsZXQgZm9udFNpemUgPSAxNTtcclxuICAgICAgICBsZXQgY29sb3I6IHN0cmluZztcclxuICAgICAgICBpZiAodGhpcy5pc01vdXNlRG93bmVkXHJcbiAgICAgICAgICAgICYmICF0aGlzLmlzRGlzYWJsZWQpIHtcclxuICAgICAgICAgICAgbGV0IHNocmluayA9IDAuMTtcclxuICAgICAgICAgICAgbGV0IHNocmlua1ggPSB3aWR0aCAqIHNocmluaztcclxuICAgICAgICAgICAgbGV0IHNocmlua1kgPSBoZWlnaHQgKiBzaHJpbms7XHJcbiAgICAgICAgICAgIHdpZHRoIC09IHNocmlua1g7XHJcbiAgICAgICAgICAgIGhlaWdodCAtPSBzaHJpbmtZO1xyXG4gICAgICAgICAgICB0b3BMZWZ0WCArPSBzaHJpbmtYIC8gMjtcclxuICAgICAgICAgICAgdG9wTGVmdFkgKz0gc2hyaW5rWSAvIDI7XHJcbiAgICAgICAgICAgIGZvbnRTaXplICo9ICgxIC0gc2hyaW5rKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuaXNEaXNhYmxlZCkge1xyXG4gICAgICAgICAgICBjb2xvciA9IHRoaXMuZGlzYWJsZWRDb2xvclxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzSG92ZXJlZCkge1xyXG4gICAgICAgICAgICAgICAgY29sb3IgPSB0aGlzLmNvbG9yO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29sb3IgPSB0aGlzLmhvdmVyZWRDb2xvcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY3R4LnNhdmUoKTtcclxuICAgICAgICBjdHguZmlsbFN0eWxlID0gY29sb3I7XHJcbiAgICAgICAgY3R4LmZvbnQgPSBmb250U2l6ZSArIFwicHggQXJpYWxcIjtcclxuICAgICAgICBjdHguZmlsbFJlY3QodG9wTGVmdFgsIHRvcExlZnRZLCB3aWR0aCwgaGVpZ2h0KTtcclxuICAgICAgICBjdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcclxuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJibGFja1wiO1xyXG4gICAgICAgIGN0eC5maWxsVGV4dChcclxuICAgICAgICAgICAgdGhpcy50ZXh0LFxyXG4gICAgICAgICAgICB0b3BMZWZ0WCArIHdpZHRoIC8gMixcclxuICAgICAgICAgICAgdG9wTGVmdFkgKyBoZWlnaHQgLyAyICsgZm9udFNpemUgLyAyLjRcclxuICAgICAgICApO1xyXG4gICAgICAgIGN0eC5yZXN0b3JlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNvbGxpZGUocG9pbnRYOiBudW1iZXIsIHBvaW50WTogbnVtYmVyKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudG9wTGVmdFggPD0gcG9pbnRYXHJcbiAgICAgICAgICAgICYmIHBvaW50WCA8PSB0aGlzLmJvdHRvbVJpZ2h0WFxyXG4gICAgICAgICAgICAmJiB0aGlzLnRvcExlZnRZIDw9IHBvaW50WVxyXG4gICAgICAgICAgICAmJiBwb2ludFkgPD0gdGhpcy5ib3R0b21SaWdodFk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRlbGV0ZSgpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRyYXdhYmxlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZHJhd2FibGVzW2ldLmlkID09PSB0aGlzLmlkKSB7XHJcbiAgICAgICAgICAgICAgICBkcmF3YWJsZXMuc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29sbGlkZWFibGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChjb2xsaWRlYWJsZXNbaV0uaWQgPT09IHRoaXMuaWQpIHtcclxuICAgICAgICAgICAgICAgIGNvbGxpZGVhYmxlcy5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB1cGRhdGVhYmxlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodXBkYXRlYWJsZXNbaV0uaWQgPT09IHRoaXMuaWQpIHtcclxuICAgICAgICAgICAgICAgIHVwZGF0ZWFibGVzLnNwbGljZShpLCAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyB0YXJnZXRzIH0gZnJvbSBcIi4vdGFyZ2V0c1wiO1xyXG5pbXBvcnQgeyBDb2xsaWRlYWJsZSwgRHJhd2FibGUsIFVwZGF0ZWFibGUgfSBmcm9tIFwiLi90eXBlc1wiO1xyXG5cclxuZXhwb3J0IGxldCB3aWR0aDogbnVtYmVyID0gMTAwMDtcclxuZXhwb3J0IGxldCBoZWlnaHQ6IG51bWJlciA9IDcwMDtcclxuZXhwb3J0IGxldCBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcclxuZXhwb3J0IGxldCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xyXG5jYW52YXMud2lkdGggPSB3aWR0aDtcclxuY2FudmFzLmhlaWdodCA9IGhlaWdodDtcclxuY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuZXhwb3J0IGxldCBkcmF3YWJsZXM6IERyYXdhYmxlW10gPSBbXTtcclxuZXhwb3J0IGxldCBjb2xsaWRlYWJsZXM6IENvbGxpZGVhYmxlW10gPSBbXTtcclxuZXhwb3J0IGxldCB1cGRhdGVhYmxlczogVXBkYXRlYWJsZVtdID0gW107XHJcblxyXG4vLyBQdXQgYW55IGdsb2JhbCB2YXJpYWJsZXMgdGhhdCB5b3Ugd2FudCB0byBiZSBhYmxlIHRvIHJlYXNzaWduIGhlcmVcclxuZXhwb3J0IGxldCBnID0ge1xyXG4gICAgYmFuYW5hczogMCxcclxuICAgIG1vbmtleXM6IDAsXHJcbiAgICAvLyBsZXR0ZXJzVG9UeXBlUmVtYWluZGVyOiAwLFxyXG4gICAgbGV0dGVyc1BlclNlY29uZDogMCxcclxuICAgIG1vdXNlWDogLTEsXHJcbiAgICBtb3VzZVk6IC0xLFxyXG4gICAgaWRDb3VudGVyOiAwLFxyXG4gICAgY3VycmVudFRhcmdldEluZGV4OiAwLFxyXG4gICAgY3VycmVudFRhcmdldDogdGFyZ2V0c1swXSxcclxuICAgIGtleWJvYXJkS2V5czogW1wiQVwiXSxcclxuICAgIG1heEtleWJvYXJkS2V5czogMSxcclxuICAgIHRhcmdldE93bmVkOiBbdHJ1ZV0sXHJcbiAgICBhZGRpdGl2ZVBlcmNlbnRCb251czogMCxcclxuICAgIGFkZGl0aXZlRmxhdEJvbnVzOiAwLFxyXG4gICAgY2hhcmFjdGVyc1RvQ2hvb3NlRnJvbTogPHN0cmluZ1tdPltdLFxyXG4gICAgaW5jb21lQWNjdW11bGF0b3I6IDAsXHJcbn07XHJcblxyXG5mb3IobGV0IGkgPSAxOyBpIDwgdGFyZ2V0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgZy50YXJnZXRPd25lZC5wdXNoKGZhbHNlKTtcclxufVxyXG4iLCJpbXBvcnQgeyBnIH0gZnJvbSBcIi4vZ2xvYmFsXCI7XHJcbmltcG9ydCB7IFNhdmVGaWxlLCBzYXZlRmlsZVZlcnNpb24gfSBmcm9tIFwiLi9zYXZlX2ZpbGVcIjtcclxuaW1wb3J0IHsgdGFyZ2V0cyB9IGZyb20gXCIuL3RhcmdldHNcIjtcclxuXHJcbmxldCBzYXZlS2V5OiBzdHJpbmcgPSBcImluZmluZS1tb25rZXktaWRsZS1nYW1lXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2F2ZSgpIHtcclxuICAgIGxldCBzYXZlRmlsZTogU2F2ZUZpbGUgPSBnZXRTYXZlRmlsZSgpO1xyXG4gICAgbGV0IHNhdmVGaWxlU3RyaW5nOiBzdHJpbmcgPSBKU09OLnN0cmluZ2lmeShzYXZlRmlsZSk7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShzYXZlS2V5LCBzYXZlRmlsZVN0cmluZyk7XHJcbiAgICBjb25zb2xlLmxvZyhcIlNhdmVkIVwiKTtcclxuICAgIGNvbnNvbGUubG9nKHNhdmVGaWxlU3RyaW5nKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0U2F2ZUZpbGUoKTogU2F2ZUZpbGUge1xyXG4gICAgcmV0dXJuIG5ldyBTYXZlRmlsZShcclxuICAgICAgICBnLmJhbmFuYXMsXHJcbiAgICAgICAgZy5tb25rZXlzLFxyXG4gICAgICAgIGcuY3VycmVudFRhcmdldEluZGV4LFxyXG4gICAgICAgIGcua2V5Ym9hcmRLZXlzLFxyXG4gICAgICAgIGcubWF4S2V5Ym9hcmRLZXlzLFxyXG4gICAgICAgIGcudGFyZ2V0T3duZWQsXHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbG9hZEZyb21Mb2NhbFN0b3JhZ2UoKSB7XHJcbiAgICBsZXQgc2F2ZUZpbGVTdHJpbmcgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShzYXZlS2V5KTtcclxuICAgIGlmIChzYXZlRmlsZVN0cmluZyA9PT0gdW5kZWZpbmVkXHJcbiAgICAgICAgfHwgc2F2ZUZpbGVTdHJpbmcgPT09IG51bGwpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiQ291bGQgbm90IGxvYWQgc2F2ZVwiKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiU2F2ZSBmb3VuZFwiLCBzYXZlRmlsZVN0cmluZyk7XHJcbiAgICB9XHJcbiAgICBsb2FkRnJvbVN0cmluZyhzYXZlRmlsZVN0cmluZyk7XHJcbn1cclxuXHJcbi8vIEkgc2hvdWxkIGJlIGFibGUgdG8gY2FsbCB0aGlzIHdoZXRoZXIgSSdtIGxvYWRpbmcgZnJvbVxyXG4vLyBsb2NhbCBzdG9yYWdlIG9yIGZyb20gYSB1c2VyLXByb3ZpZGVkIHNhdmUgaW1wb3J0IHN0cmluZ1xyXG5leHBvcnQgZnVuY3Rpb24gbG9hZEZyb21TdHJpbmcoaW1wb3J0U3RyaW5nOiBzdHJpbmcpIHtcclxuICAgIGxldCBsb2FkZWRTYXZlOiBTYXZlRmlsZSA9IEpTT04ucGFyc2UoaW1wb3J0U3RyaW5nKTtcclxuICAgIGlmIChsb2FkZWRTYXZlID09PSB1bmRlZmluZWRcclxuICAgICAgICB8fCBsb2FkZWRTYXZlID09PSBudWxsKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBsb2FkIHNhdmUgZnJvbSBsb2NhbCBzdG9yYWdlOiBKU09OIHBhcnNlIGVycm9yXCIpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH0gZWxzZSBpZiAobG9hZGVkU2F2ZS52ZXJzaW9uICE9PSBzYXZlRmlsZVZlcnNpb24pIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGxvYWQgc2F2ZSBmcm9tIGxvY2FsIHN0b3JhZ2U6IFZlcnNpb24gbWlzbWF0Y2hcIik7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2coXCJMb2FkZWQgc2F2ZVwiKTtcclxuICAgIGNvbnNvbGUubG9nKGxvYWRlZFNhdmUpO1xyXG4gICAgZy5iYW5hbmFzID0gbG9hZGVkU2F2ZS5iYW5hbmFzO1xyXG4gICAgZy5tb25rZXlzID0gbG9hZGVkU2F2ZS5tb25rZXlzO1xyXG4gICAgZy5sZXR0ZXJzUGVyU2Vjb25kID0gZy5tb25rZXlzO1xyXG4gICAgZy5jdXJyZW50VGFyZ2V0SW5kZXggPSBsb2FkZWRTYXZlLnRhcmdldEluZGV4O1xyXG4gICAgZy5jdXJyZW50VGFyZ2V0ID0gdGFyZ2V0c1tsb2FkZWRTYXZlLnRhcmdldEluZGV4XTtcclxuICAgIGcua2V5Ym9hcmRLZXlzID0gbG9hZGVkU2F2ZS5rZXlib2FyZEtleXM7XHJcbiAgICBnLm1heEtleWJvYXJkS2V5cyA9IGxvYWRlZFNhdmUubWF4S2V5Ym9hcmRLZXlzO1xyXG4gICAgZy50YXJnZXRPd25lZCA9IGxvYWRlZFNhdmUudGFyZ2V0T3duZWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBleHBvcnRTYXZlVG9TdHJpbmcoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShnZXRTYXZlRmlsZSgpKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGVyYXNlU2F2ZSgpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiU2F2ZSBFcmFzZWQhXCIpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oc2F2ZUtleSk7XHJcbn1cclxuIiwiZXhwb3J0IGxldCBzYXZlRmlsZVZlcnNpb246IG51bWJlciA9IDM7XHJcblxyXG5leHBvcnQgY2xhc3MgU2F2ZUZpbGUge1xyXG4gICAgLy8gVXNlIHRoZSB2ZXJzaW9uIG51bWJlciB0byBkZXRlY3QgYW5kIGludmFsaWRhdGVcclxuICAgIC8vIG9sZCBhbmQgaW5jb21wYXRpYmxlIHNhdmUgZmlsZXNcclxuICAgIHB1YmxpYyB2ZXJzaW9uOiBudW1iZXI7XHJcblxyXG4gICAgcHVibGljIGJhbmFuYXM6IG51bWJlcjtcclxuICAgIHB1YmxpYyBtb25rZXlzOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgdGFyZ2V0SW5kZXg6IG51bWJlcjtcclxuICAgIHB1YmxpYyBrZXlib2FyZEtleXM6IHN0cmluZ1tdO1xyXG4gICAgcHVibGljIG1heEtleWJvYXJkS2V5czogbnVtYmVyO1xyXG4gICAgcHVibGljIHRhcmdldE93bmVkOiBib29sZWFuW107XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIGJhbmFuYXM6IG51bWJlcixcclxuICAgICAgICBtb25rZXlzOiBudW1iZXIsXHJcbiAgICAgICAgdGFyZ2V0SW5kZXg6IG51bWJlcixcclxuICAgICAgICBrZXlib2FyZEtleXM6IHN0cmluZ1tdLFxyXG4gICAgICAgIG1heEtleWJvYXJkS2V5czogbnVtYmVyLFxyXG4gICAgICAgIHRhcmdldE93bmVkOiBib29sZWFuW10sXHJcbiAgICApIHtcclxuICAgICAgICB0aGlzLnZlcnNpb24gPSBzYXZlRmlsZVZlcnNpb247XHJcbiAgICAgICAgdGhpcy5iYW5hbmFzID0gYmFuYW5hcztcclxuICAgICAgICB0aGlzLm1vbmtleXMgPSBtb25rZXlzO1xyXG4gICAgICAgIHRoaXMudGFyZ2V0SW5kZXggPSB0YXJnZXRJbmRleDtcclxuICAgICAgICB0aGlzLmtleWJvYXJkS2V5cyA9IGtleWJvYXJkS2V5cztcclxuICAgICAgICB0aGlzLm1heEtleWJvYXJkS2V5cyA9IG1heEtleWJvYXJkS2V5cztcclxuICAgICAgICB0aGlzLnRhcmdldE93bmVkID0gdGFyZ2V0T3duZWQ7XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIFRhcmdldCB7XHJcbiAgICBwdWJsaWMgbGV0dGVyczogc3RyaW5nW107XHJcbiAgICBwdWJsaWMgZGlzcGxheVN0cmluZzogc3RyaW5nO1xyXG4gICAgcHVibGljIHJld2FyZHM6IG51bWJlcltdO1xyXG4gICAgcHVibGljIHByaWNlOiBudW1iZXI7XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIGxldHRlcnM6IHN0cmluZ1tdLFxyXG4gICAgICAgIGRpc3BsYXlTdHJpbmc6IHN0cmluZyxcclxuICAgICAgICByZXdhcmRzOiBudW1iZXJbXSxcclxuICAgICAgICBwcmljZTogbnVtYmVyLFxyXG4gICAgKSB7XHJcbiAgICAgICAgdGhpcy5sZXR0ZXJzID0gbGV0dGVycztcclxuICAgICAgICB0aGlzLmRpc3BsYXlTdHJpbmcgPSBkaXNwbGF5U3RyaW5nO1xyXG4gICAgICAgIHRoaXMucmV3YXJkcyA9IHJld2FyZHM7XHJcbiAgICAgICAgdGhpcy5wcmljZSA9IHByaWNlO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IFRhcmdldCB9IGZyb20gXCIuL3RhcmdldFwiO1xyXG5cclxuZXhwb3J0IGxldCB0YXJnZXRzOiBUYXJnZXRbXSA9IFtcclxuICAgIG5ldyBUYXJnZXQoXHJcbiAgICAgICAgW1wiQ1wiLCBcIkFcIiwgXCJUXCJdLFxyXG4gICAgICAgIFwiQ0FUXCIsXHJcbiAgICAgICAgWzEsIDgsIDQwXSxcclxuICAgICAgICAwLFxyXG4gICAgKSxcclxuICAgIG5ldyBUYXJnZXQoXHJcbiAgICAgICAgW1wiSFwiLCBcIk9cIiwgXCJPXCIsIFwiVFwiXSxcclxuICAgICAgICBcIkhPT1RcIixcclxuICAgICAgICBbNSwgMTAsIDQwLCAxODBdLFxyXG4gICAgICAgIDIwMDAsXHJcbiAgICApLFxyXG4gICAgbmV3IFRhcmdldChcclxuICAgICAgICBbXCJSXCIsIFwiRVwiLCBcIkZcIiwgXCJFXCIsIFwiUlwiLCBcIkVcIiwgXCJFXCJdLFxyXG4gICAgICAgIFwiUkVGRVJFRVwiLFxyXG4gICAgICAgIFs1LCA1LCA1LCAyMCwgNDAwLCAyNDAwLCAxNTAwMF0sXHJcbiAgICAgICAgMzAwMDAsXHJcbiAgICApLFxyXG4gICAgLy8gbmV3IFRhcmdldChcclxuICAgIC8vICAgICBbXSxcclxuICAgIC8vICAgICBcIlwiLFxyXG4gICAgLy8gICAgIFtdLFxyXG4gICAgLy8gICAgIDAsXHJcbiAgICAvLyApLFxyXG5dO1xyXG4iLCJpbXBvcnQgeyBjdHgsIGRyYXdhYmxlcywgZywgdXBkYXRlYWJsZXMgfSBmcm9tIFwiLi9nbG9iYWxcIjtcclxuaW1wb3J0IHsgY291bnRNYXRjaGluZ0xldHRlcnMsIGdldFJhbmRvbUNoYXJhY3RlciB9IGZyb20gXCIuL3V0aWxcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBUZXh0RGlzcGxheSB7XHJcbiAgICBwdWJsaWMgeDogbnVtYmVyO1xyXG4gICAgcHVibGljIHk6IG51bWJlcjtcclxuICAgIHB1YmxpYyBoZWlnaHQ6IG51bWJlcjtcclxuICAgIHB1YmxpYyBpZDogbnVtYmVyO1xyXG4gICAgcHVibGljIGxldHRlcnNUb1R5cGVSZW1haW5kZXI6IG51bWJlciA9IDA7XHJcbiAgICBwdWJsaWMgbGFzdFdvcmRGaW5pc2hUaW1lTWlsbGlzOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgY3VycmVudFN0cmluZzogc3RyaW5nW10gPSBbXTtcclxuICAgIFxyXG4gICAgLy8gcHJvYmFibHkgdGhpcyB3aWxsIGJlIHRoZSBzYW1lIGFjcm9zcyBhbGwgZGlzcGxheXNcclxuICAgIC8vIHNvIEkgZG9uJ3QgbmVlZCB0aGlzIHZhcmlhYmxlXHJcbiAgICAvLyBwdWJsaWMgbGV0dGVyc1BlclNlY29uZDogbnVtYmVyO1xyXG4gICAgXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoXHJcbiAgICAgICAgeDogbnVtYmVyLFxyXG4gICAgICAgIHk6IG51bWJlcixcclxuICAgICAgICBoZWlnaHQ6IG51bWJlcixcclxuICAgICkge1xyXG4gICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgICAgdGhpcy55ID0geTtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcclxuXHJcbiAgICAgICAgdGhpcy5pZCA9IGcuaWRDb3VudGVyO1xyXG4gICAgICAgIGcuaWRDb3VudGVyICs9IDE7XHJcbiAgICAgICAgZHJhd2FibGVzLnB1c2godGhpcyk7XHJcbiAgICAgICAgdXBkYXRlYWJsZXMucHVzaCh0aGlzKTtcclxuICAgICAgICAvLyBjb2xsaWRlYWJsZXMucHVzaCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdXBkYXRlKGN1cnJlbnRUaW1lTWlsbGlzOiBudW1iZXIsIGVsYXBzZWRUaW1lTWlsbGlzOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmxldHRlcnNUb1R5cGVSZW1haW5kZXIgKz0gZWxhcHNlZFRpbWVNaWxsaXMgLyAxMDAwICogZy5sZXR0ZXJzUGVyU2Vjb25kO1xyXG5cclxuICAgICAgICAvLyBNYWtlIGEgZmluaXNoZWQgd29yZCBzdGF5IG9uIHNjcmVlbiBmb3IgNTAwbXMsIG9yIHVudGlsXHJcbiAgICAgICAgLy8gYW5vdGhlciBsZXR0ZXIgaXMgdHlwZWRcclxuICAgICAgICBpZiAoKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5sYXN0V29yZEZpbmlzaFRpbWVNaWxsaXMgIT09IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICAgICAgJiYgKGN1cnJlbnRUaW1lTWlsbGlzIC0gdGhpcy5sYXN0V29yZEZpbmlzaFRpbWVNaWxsaXMpID4gNTAwXHJcbiAgICAgICAgICAgICkgfHwgKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5sZXR0ZXJzVG9UeXBlUmVtYWluZGVyID49IDFcclxuICAgICAgICAgICAgICAgICYmIHRoaXMuY3VycmVudFN0cmluZy5sZW5ndGggPj0gZy5jdXJyZW50VGFyZ2V0LmxldHRlcnMubGVuZ3RoXHJcbiAgICAgICAgICAgICkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFN0cmluZyA9IFtdO1xyXG4gICAgICAgICAgICB0aGlzLmxhc3RXb3JkRmluaXNoVGltZU1pbGxpcyA9IHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gR2VuZXJhdGUgdGhlIG5lZWRlZCBjaGFyYWN0ZXJzIGFuZCBhd2FyZCBiYW5hbmFzXHJcbiAgICAgICAgd2hpbGUgKHRoaXMubGV0dGVyc1RvVHlwZVJlbWFpbmRlciA+PSAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGV0dGVyc1RvVHlwZVJlbWFpbmRlciAtPSAxO1xyXG4gICAgICAgICAgICBpZiAoZy5jaGFyYWN0ZXJzVG9DaG9vc2VGcm9tLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IGNoYXJhY3RlciA9IGdldFJhbmRvbUNoYXJhY3RlcigpO1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTdHJpbmcucHVzaChjaGFyYWN0ZXIpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50U3RyaW5nLmxlbmd0aCA+PSBnLmN1cnJlbnRUYXJnZXQubGV0dGVycy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubGFzdFdvcmRGaW5pc2hUaW1lTWlsbGlzID0gY3VycmVudFRpbWVNaWxsaXM7XHJcbiAgICAgICAgICAgICAgICBsZXQgbWF0Y2hpbmdMZXR0ZXJzOiBudW1iZXIgPSBjb3VudE1hdGNoaW5nTGV0dGVycyhcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRTdHJpbmcsIGcuY3VycmVudFRhcmdldC5sZXR0ZXJzKTtcclxuICAgICAgICAgICAgICAgIGlmIChtYXRjaGluZ0xldHRlcnMgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGJhbmFuYXNUb0FkZCA9IChnLmN1cnJlbnRUYXJnZXQucmV3YXJkc1ttYXRjaGluZ0xldHRlcnMgLSAxXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICArIGcuYWRkaXRpdmVGbGF0Qm9udXMpICogKDEgKyBnLmFkZGl0aXZlUGVyY2VudEJvbnVzKTtcclxuICAgICAgICAgICAgICAgICAgICBnLmJhbmFuYXMgKz0gYmFuYW5hc1RvQWRkO1xyXG4gICAgICAgICAgICAgICAgICAgIGcuaW5jb21lQWNjdW11bGF0b3IgKz0gYmFuYW5hc1RvQWRkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubGV0dGVyc1RvVHlwZVJlbWFpbmRlciA+PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50U3RyaW5nID0gW107XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBkcmF3KCkge1xyXG4gICAgICAgIGxldCBjdXJyZW50U3RyaW5nID0gdGhpcy5jdXJyZW50U3RyaW5nO1xyXG4gICAgICAgIGxldCBmb250U2l6ZTogbnVtYmVyID0gdGhpcy5oZWlnaHQgKiA0IC8gNztcclxuICAgICAgICBsZXQgd2lkdGggPSBnLmN1cnJlbnRUYXJnZXQubGV0dGVycy5sZW5ndGggKiBmb250U2l6ZTtcclxuICAgICAgICBjdHguc2F2ZSgpO1xyXG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IFwiYmxhY2tcIjtcclxuICAgICAgICBjdHguc3Ryb2tlUmVjdChcclxuICAgICAgICAgICAgdGhpcy54LFxyXG4gICAgICAgICAgICB0aGlzLnksXHJcbiAgICAgICAgICAgIHdpZHRoLFxyXG4gICAgICAgICAgICB0aGlzLmhlaWdodFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwiYmxhY2tcIjtcclxuICAgICAgICBjdHguZm9udCA9IGZvbnRTaXplICsgXCJweCBBcmlhbFwiO1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBnLmN1cnJlbnRUYXJnZXQubGV0dGVycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgY2hhcmFjdGVyOiBzdHJpbmc7XHJcbiAgICAgICAgICAgIGlmIChpID49IGN1cnJlbnRTdHJpbmcubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBjaGFyYWN0ZXIgPSBcIl9cIjtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNoYXJhY3RlciA9IGN1cnJlbnRTdHJpbmdbaV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY3R4LmZpbGxUZXh0KFxyXG4gICAgICAgICAgICAgICAgY2hhcmFjdGVyLFxyXG4gICAgICAgICAgICAgICAgdGhpcy54ICsgZm9udFNpemUgKiAwLjE1ICsgZm9udFNpemUgKiBpLFxyXG4gICAgICAgICAgICAgICAgdGhpcy55ICsgZm9udFNpemUgKiAxLjJcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY3R4LnJlc3RvcmUoKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBnIH0gZnJvbSBcIi4vZ2xvYmFsXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY291bnRNYXRjaGluZ0xldHRlcnMoczE6IHN0cmluZ1tdLCBzMjogc3RyaW5nW10pIHtcclxuICAgIGxldCBtYXRjaGluZyA9IDA7XHJcbiAgICBsZXQgbWluTGVuZ3RoID0gTWF0aC5taW4oczEubGVuZ3RoLCBzMi5sZW5ndGgpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtaW5MZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmIChzMVtpXSA9PT0gczJbaV0pIHtcclxuICAgICAgICAgICAgbWF0Y2hpbmcrKztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbWF0Y2hpbmc7XHJcbn1cclxuXHJcbi8vIEJ1ZmZlciB0aGUgcmFuZG9tIGNoYXJhY3RlcnMgd2UgZ2V0IGZyb20gY3J5cHRvIHRvIGltcHJvdmVcclxuLy8gdGhlIHNwZWVkLiBBbHNvLCBJIHRlc3RlZCBpdCwgYW5kIGl0J3MgZmFzdGVyIHRoYW4gdXNpbmdcclxuLy8gTWF0aC5yYW5kb20sIGFuZCBob3BlZnVsbHkgaGFzIGJldHRlciByYW5kb21uZXNzXHJcbmxldCBidWZmZXJTaXplID0gMTAwMDA7XHJcbmxldCBudW1iZXJCdWZmZXI6IFVpbnQxNkFycmF5ID0gZ2V0UmFuZG9tTnVtYmVycyhidWZmZXJTaXplKTtcclxubGV0IG51bWJlckJ1ZmZlckluZGV4ID0gLTE7XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRSYW5kb21DaGFyYWN0ZXIoKSB7XHJcbiAgICBudW1iZXJCdWZmZXJJbmRleCArPSAxO1xyXG4gICAgaWYgKG51bWJlckJ1ZmZlckluZGV4ID49IGJ1ZmZlclNpemUpIHtcclxuICAgICAgICBudW1iZXJCdWZmZXJJbmRleCA9IDA7XHJcbiAgICAgICAgbnVtYmVyQnVmZmVyID0gZ2V0UmFuZG9tTnVtYmVycyhidWZmZXJTaXplKTtcclxuICAgIH1cclxuICAgIGxldCByYW5kb21OdW1iZXIgPSBudW1iZXJCdWZmZXJbbnVtYmVyQnVmZmVySW5kZXhdO1xyXG4gICAgcmV0dXJuIGcuY2hhcmFjdGVyc1RvQ2hvb3NlRnJvbVtyYW5kb21OdW1iZXJdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmFuZG9tTnVtYmVycyhuOiBudW1iZXIpIHtcclxuICAgIGxldCByYW5kb21OdW1iZXJzID0gbmV3IFVpbnQxNkFycmF5KG4pO1xyXG4gICAgcmFuZG9tTnVtYmVycyA9IGNyeXB0by5nZXRSYW5kb21WYWx1ZXMocmFuZG9tTnVtYmVycyk7XHJcbiAgICByZXR1cm4gcmFuZG9tTnVtYmVycztcclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIFRPRE86XHJcbi8vIEF1dG8tc2F2ZSBldmVyeSAxMCBzZWNvbmRzXHJcbi8vIFByZXZlbnQgY2F0Y2h1cCBsYWcgYWZ0ZXIgdGFiLW91dFxyXG4vLyBBdXRvLWNhbGN1bGF0ZSB0cnVlIGF2ZXJhZ2UgYmFuYW5hcyBwZXIgd29yZFxyXG4vLyByZWNydWl0IG11bHRpcGxlIG1vbmtleXMgYXQgYSB0aW1lICgxMHgsIDEwMHgpXHJcbi8vIGRvIHNvbWUga2luZCBvZiB2aXN1YWwgZWZmZWN0IHRvIGluZGljYXRlIHRoZSBxdWFsaXR5IG9mIFxyXG4vLyAgICB0aGUgbWF0Y2hlcywgZS5nLiB0dXJuIGdvbGQgYW5kIHBhdXNlIG9uIHBlcmZlY3QgbWF0Y2hcclxuXHJcbi8vIFRoZSBVSSBpcyBhIGNvbXBsZXRlIG1lc3MhXHJcbi8vIEhhdmUgdGV4dCBmaXQgd2l0aGluIHRoZSBib3VuZHMgb2YgdGhlIGJ1dHRvbnNcclxuLy8gVGhlIHNhdmUgc2hvdWxkIGJlIGVuY3J5cHRlZFxyXG4vLyBUaGUgZXJhc2Ugc2F2ZSBidXR0b24gc2hvdWxkIGhhdmUgYSBjb25maXJtYXRpb24gc3RlcFxyXG4vLyBUaGUgZXJhc2Ugc2F2ZSBidXR0b24gc2hvdWxkIGFsc28gcmVzZXQgdGhlIGdhbWUgKHByb2JhYmx5IHdpbGwgcmVuYW1lIHRoZSBidXR0b24pXHJcbi8vIFRoZXJlIHNob3VsZCBiZSBhbiBpbXBvcnQvZXhwb3J0IG9wdGlvbiB0byBsZXQgdGhlIHBsYXllciBiYWNrIHVwIHRoZWlyIHNhdmVcclxuLy8gVGhlcmUgYXJlIGJhbGFuY2UgaXNzdWVzXHJcbi8vIFRoZXJlIHNob3VsZCBiZSB1cGdyYWRlc1xyXG4vLyBhZGp1c3RhYmxlIHVwZGF0ZSByYXRlIGZvciBiYW5hbmFzIHBlciBzZWNvbmQgZGlzcGxheVxyXG4vLyBjb21wcmVzc2VkIG5vdGF0aW9uIGZvciBsYXJnZSBudW1iZXJzXHJcblxyXG4vLyBXaGF0IGlmIGVhY2ggbW9ua2V5IGhhZCB0aGVpciBvd24ga2V5Ym9hcmQgYW5kIGNvbXB1dGVyP1xyXG4vLyBUaGUgdmlzdWFscyBvZiB0aGlzIHdvdWxkIGJlIHByZXR0eSBjb29sXHJcbi8vIElmIGVhY2ggbW9ua2V5IHJlbWFpbmVkIHJlbGF0aXZlbHkgc2xvdywgdGhlbiBpdCB3b3VsZCBiZVxyXG4vLyAgICBlYXNpZXIgdG8gY29tbXVuaWNhdGUgd2hlbiBlYWNoIG9mIHRoZW0gZ2V0IG1hdGNoZXNcclxuLy8gSG93IG1hbnkgc2NyZWVucyBjYW4gSSBkaXNwbGF5IGF0IG9uY2U/XHJcbi8vICAgIGNhbiBJIGdldCB0byBsaWtlIDEwMGs/XHJcbi8vICAgIHByb2JhYmx5IG5vdCB1bmxlc3MgSSBmaWd1cmUgb3V0IGEgd2F5IHRvIHN1bW1hcml6ZSB2aXN1YWxseVxyXG4vLyAgICBob3cgaGlnaCBjYW4gSSBnZXQgd2l0aG91dCBjb25zaWRlcmluZyB2aXN1YWxzP1xyXG5cclxuLy8gV2hhdCBpZiBpbnN0ZWFkIG9mIHBpY2tpbmcgb25lIHRhcmdldCB3b3JkIGF0IGEgdGltZSwgdGhlIHBsYXllciBidWlsdCB1cCBhIGRpY3Rpb25hcnk/XHJcbi8vICAgIEFORCwgd2hhdCBpZiwgdGhleSBlYXJuZWQgYmFuYW5hcyBmb3IgZXZlcnkgbWF0Y2hpbmcgbGV0dGVyIGluIHRoZWlyIGRpY3Rpb25hcnk/XHJcbi8vICAgIChyYXRoZXIgdGhhbiBmb3IganVzdCB0aGUgbGV0dGVycyB0aGV5IG1hdGNoZWQgd2l0aCBhIHBhcnRpY3VsYXIgd29yZD8pXHJcbi8vIFRoaXMgaW1wbGllcyBvbmUgZmVhdHVyZSB3aGVyZSB5b3UgY2FuIHVwZ3JhZGUgYSBwYXJ0aWN1bGFyIHNsb3QgdG8gYXdhcmQgbW9yZSBiYW5hbmFzXHJcbi8vICAgIGUuZy4gZG91YmxlIGFsbCBiYW5hbmFzIGVhcm5lZCBmcm9tIG1hdGNoZXMgaW4gdGhlIHNlY29uZCBsZXR0ZXJcclxuLy8gV2hhdCBpZiwgYXQgdGhlIHNhbWUgdGltZSwgd29yZHMgYWxzbyBhd2FyZGVkIGRpZmZlcmVudCBhbW91bnRzIGZvciBkaWZmZXJlbnQgbnVtYmVycyBvZiBtYXRjaGVzP1xyXG4vLyBXaGF0IGlmIHRoZSBnYW1lIHdhcyBzdHJ1Y3R1cmVkIGtpbmQgb2YgbGlrZSBhIGRlY2stYnVpbGRlcj9cclxuLy8gV2hhdCBpZiB0aGUgd29yZHMgeW91IGNvdWxkIGFkZCB0byB5b3VyIGRpY3Rpb25hcnkgd2VyZSBjaG9zZW4gYXQgcmFuZG9tP1xyXG4vLyBXaGF0IGlmIHdlIGJyb3VnaHQgYmFjayB0aGUgaWRlYSBvZiBsaW1pdGluZyBob3cgdGhlIHBsYXllciBjdXN0b21pemVkIHRoZWlyIGtleWJvYXJkP1xyXG4vLyBXaGF0IGlmIHlvdSBjYW4gdXBncmFkZSB3b3Jkcz9cclxuXHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCIuL2J1dHRvblwiO1xyXG5pbXBvcnQgeyBjYW52YXMsIGNvbGxpZGVhYmxlcywgY3R4LCBkcmF3YWJsZXMsIGcsIHVwZGF0ZWFibGVzIH0gZnJvbSBcIi4vZ2xvYmFsXCI7XHJcbmltcG9ydCB7IGVyYXNlU2F2ZSwgbG9hZEZyb21Mb2NhbFN0b3JhZ2UsIHNhdmUgfSBmcm9tIFwiLi9sb2NhbF9zdG9yYWdlXCI7XHJcbmltcG9ydCB7IHRhcmdldHMgfSBmcm9tIFwiLi90YXJnZXRzXCI7XHJcbmltcG9ydCB7IGRvd25sb2FkLCBnZW5lcmF0ZVBlcm11dGF0aW9ucyB9IGZyb20gXCIuL3Rlc3RfcGVybXV0YXRpb25zXCI7XHJcbmltcG9ydCB7IFRleHREaXNwbGF5IH0gZnJvbSBcIi4vdGV4dF9kaXNwbGF5XCI7XHJcbmltcG9ydCB7IENvbGxpZGVhYmxlIH0gZnJvbSBcIi4vdHlwZXNcIjtcclxuaW1wb3J0IHsgVXBncmFkZSB9IGZyb20gXCIuL3VwZ3JhZGVcIjtcclxuaW1wb3J0IHsgdXBncmFkZXMgfSBmcm9tIFwiLi91cGdyYWRlc1wiO1xyXG5pbXBvcnQgeyBjb3VudE1hdGNoaW5nTGV0dGVycywgZ2V0UmFuZG9tQ2hhcmFjdGVyIH0gZnJvbSBcIi4vdXRpbFwiO1xyXG5cclxuLy8gbGV0IHJlcG9ydDEgPSBnZW5lcmF0ZVBlcm11dGF0aW9ucyhcclxuLy8gICAgIFtcIkhcIiwgXCJPXCIsIFwiVFwiXSxcclxuLy8gICAgIFtcIkhcIiwgXCJPXCIsIFwiT1wiLCBcIlRcIl0sXHJcbi8vICk7XHJcbi8vIGRvd25sb2FkKFwiaG90LWhvb3QtcGVybXV0YXRpb25zLmNzdlwiLCByZXBvcnQxKTtcclxuXHJcbi8vIGxldCByZXBvcnQyID0gZ2VuZXJhdGVQZXJtdXRhdGlvbnMoXHJcbi8vICAgICBbXCJIXCIsIFwiT1wiLCBcIk9cIiwgXCJUXCJdLFxyXG4vLyAgICAgW1wiSFwiLCBcIk9cIiwgXCJPXCIsIFwiVFwiXSxcclxuLy8gKTtcclxuLy8gZG93bmxvYWQoXCJob290LWhvb3QtcGVybXV0YXRpb25zLmNzdlwiLCByZXBvcnQyKTtcclxuXHJcbmxvYWRGcm9tTG9jYWxTdG9yYWdlKCk7XHJcblxyXG5sZXQgYnV0dG9uQ29sb3I6IHN0cmluZyA9IHJnYlN0cmluZygyMDAsIDIwMCwgMjU1KTtcclxubGV0IGJ1dHRvbkhvdmVyQ29sb3I6IHN0cmluZyA9IHJnYlN0cmluZygxODAsIDE4MCwgMjMwKTtcclxubGV0IGVyYXNlQnV0dG9uQ29sb3I6IHN0cmluZyA9IHJnYlN0cmluZygyNTUsIDUwLCA1MCk7XHJcbmxldCBlcmFzZUJ1dHRvbkhvdmVyQ29sb3I6IHN0cmluZyA9IHJnYlN0cmluZygyMjUsIDIwLCAyMCk7XHJcblxyXG4vLyBNYWtlIGJ1dHRvbnMgb3V0IG9mIGFsbCBwb3NzaWJsZSBrZXlib2FyZCBrZXlzXHJcbi8vIGxldCBhbGxLZXlib2FyZEtleXMgPSBbXCIgXCIsIFwiQVwiLFwiQlwiLFwiQ1wiLFwiRFwiLFwiRVwiLFwiRlwiLFwiR1wiLFwiSFwiLFwiSVwiLFwiSlwiLFwiS1wiLFwiTFwiLFwiTVwiLFwiTlwiLFwiT1wiLFwiUFwiLFwiUVwiLFwiUlwiLFwiU1wiLFwiVFwiLFwiVVwiLFwiVlwiLFwiV1wiLFwiWFwiLFwiWVwiLFwiWlwiXTtcclxubGV0IGFsbEtleWJvYXJkS2V5cyA9IFtcIuKOtVwiLCBcIkFcIixcIkJcIixcIkNcIixcIkRcIixcIkVcIixcIkZcIixcIkdcIixcIkhcIixcIklcIixcIkpcIixcIktcIixcIkxcIixcIk1cIixcIk5cIixcIk9cIixcIlBcIixcIlFcIixcIlJcIixcIlNcIixcIlRcIixcIlVcIixcIlZcIixcIldcIixcIlhcIixcIllcIixcIlpcIl07XHJcbmZvciAobGV0IGkgPSAwOyBpIDwgYWxsS2V5Ym9hcmRLZXlzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBsZXQga2V5ID0gYWxsS2V5Ym9hcmRLZXlzW2ldO1xyXG4gICAgbGV0IGJ1dHRvbiA9IG5ldyBCdXR0b24oXHJcbiAgICAgICAgNDAgKyAzMCAqIGksXHJcbiAgICAgICAgNDUwLFxyXG4gICAgICAgIDI1LFxyXG4gICAgICAgIDI1LFxyXG4gICAgICAgIGtleSxcclxuICAgICAgICBidXR0b25Db2xvcixcclxuICAgICAgICBidXR0b25Ib3ZlckNvbG9yLFxyXG4gICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgY3JlYXRlQ3VycmVudEtleWJvYXJkS2V5QnV0dG9uKGcua2V5Ym9hcmRLZXlzLmxlbmd0aCwga2V5KTtcclxuICAgICAgICAgICAgZy5rZXlib2FyZEtleXMucHVzaChrZXkpO1xyXG4gICAgICAgICAgICB1cGRhdGVDaGFyYWN0ZXJzVG9DaG9vc2VGcm9tKCk7XHJcblxyXG4gICAgICAgICAgICAvLyBub3Qgc3VyZSBpZiBJIHdpbGwgd2FudCB0byBjbGVhciBhbGwgdGhlIGN1cnJlbnRcclxuICAgICAgICAgICAgLy8gc3RyaW5ncyB3aGVuIHRoZSBwbGF5ZXIgY2hhbmdlcyB0aGUga2V5Ym9hcmRcclxuICAgICAgICAgICAgLy8gY3VycmVudFN0cmluZyA9IFtdO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZy5rZXlib2FyZEtleXMubGVuZ3RoIDwgZy5tYXhLZXlib2FyZEtleXMpIHtcclxuICAgICAgICAgICAgICAgIGJ1dHRvbi5pc0Rpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBidXR0b24uaXNEaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgKTtcclxufVxyXG5cclxubGV0IHJhbmRvbU51bWJlclNpemUgPSA2NTUzNjtcclxudXBkYXRlQ2hhcmFjdGVyc1RvQ2hvb3NlRnJvbSgpO1xyXG5sZXQga2V5Ym9hcmRLZXlCdXR0b25zOiBCdXR0b25bXSA9IFtdXHJcblxyXG5mb3IgKGxldCBpID0gMDsgaSA8IGcua2V5Ym9hcmRLZXlzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBjcmVhdGVDdXJyZW50S2V5Ym9hcmRLZXlCdXR0b24oaSwgZy5rZXlib2FyZEtleXNbaV0pO1xyXG59XHJcblxyXG5sZXQgdGFyZ2V0QnV0dG9uczogQnV0dG9uW10gPSBbXTtcclxuZm9yIChsZXQgaSA9IDA7IGkgPCB0YXJnZXRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBsZXQgYnV0dG9uVGV4dDogc3RyaW5nID0gdGFyZ2V0c1tpXS5kaXNwbGF5U3RyaW5nO1xyXG4gICAgaWYgKCFnLnRhcmdldE93bmVkW2ldKSB7XHJcbiAgICAgICAgYnV0dG9uVGV4dCArPSBcIiBcIiArIHRhcmdldHNbaV0ucHJpY2U7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGJ1dHRvbiA9IG5ldyBCdXR0b24oXHJcbiAgICAgICAgNTAwLFxyXG4gICAgICAgIDUwICsgMzUgKiBpLFxyXG4gICAgICAgIDgwLFxyXG4gICAgICAgIDMwLFxyXG4gICAgICAgIGJ1dHRvblRleHQsXHJcbiAgICAgICAgYnV0dG9uQ29sb3IsXHJcbiAgICAgICAgYnV0dG9uSG92ZXJDb2xvcixcclxuICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghZy50YXJnZXRPd25lZFtpXSkge1xyXG4gICAgICAgICAgICAgICAgZy5iYW5hbmFzIC09IHRhcmdldHNbaV0ucHJpY2U7XHJcbiAgICAgICAgICAgICAgICBidXR0b24udGV4dCA9IHRhcmdldHNbaV0uZGlzcGxheVN0cmluZztcclxuICAgICAgICAgICAgICAgIGcudGFyZ2V0T3duZWRbaV0gPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBnLmN1cnJlbnRUYXJnZXQgPSB0YXJnZXRzW2ldO1xyXG4gICAgICAgICAgICBnLmN1cnJlbnRUYXJnZXRJbmRleCA9IGk7XHJcbiAgICAgICAgICAgIHRhcmdldEJ1dHRvbnNbaV0uaXNEaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgIChcclxuICAgICAgICAgICAgICAgICAgICB0YXJnZXRzW2ldLnByaWNlID4gZy5iYW5hbmFzXHJcbiAgICAgICAgICAgICAgICAgICAgJiYgIWcudGFyZ2V0T3duZWRbaV1cclxuICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIHx8IHRhcmdldHNbaV0uZGlzcGxheVN0cmluZyA9PT0gZy5jdXJyZW50VGFyZ2V0LmRpc3BsYXlTdHJpbmdcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICBidXR0b24uaXNEaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBidXR0b24uaXNEaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICk7XHJcbiAgICB0YXJnZXRCdXR0b25zLnB1c2goYnV0dG9uKTtcclxufVxyXG5cclxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjYW52YXMpO1xyXG5cclxubGV0IHJlY3J1aXRQcmljZSA9IDEwICsgMiAqIGcubW9ua2V5cztcclxubGV0IGJ1dHRvbjEgPSBuZXcgQnV0dG9uKFxyXG4gICAgMTAwLFxyXG4gICAgMTAwLFxyXG4gICAgODAsXHJcbiAgICAzMCxcclxuICAgIFwiUmVjcnVpdCBNb25rZXkgXCIgKyByZWNydWl0UHJpY2UsXHJcbiAgICBidXR0b25Db2xvcixcclxuICAgIGJ1dHRvbkhvdmVyQ29sb3IsXHJcbiAgICAoKSA9PiB7XHJcbiAgICAgICAgZy5tb25rZXlzICs9IDE7XHJcbiAgICAgICAgbGV0IHNocmluayA9IGcubW9ua2V5cyAqIDEuMlxyXG4gICAgICAgIGxldCBoZWlnaHQgPSAzNSAtIHNocmluaztcclxuICAgICAgICAvLyBsZXQgbnVtUm93cyA9IDE0XHJcbiAgICAgICAgLy8gbGV0IHJvdyA9IGcubW9ua2V5cyAlIG51bVJvd3M7XHJcbiAgICAgICAgLy8gbGV0IGNvbHVtbiA9IE1hdGguZmxvb3IoZy5tb25rZXlzIC8gbnVtUm93cyk7XHJcbiAgICAgICAgLy8gbGV0IHggPSAxMDAgKyAxMDAgKiBjb2x1bW47XHJcbiAgICAgICAgLy8gbGV0IHkgPSAxNjUgKyAzNSAqIHJvdyAtIChnLm1vbmtleXMgKiAoZy5tb25rZXlzIC0gMSkgLyAyKTtcclxuICAgICAgICBsZXQgeCA9IDUwICsgZy5tb25rZXlzICogZy5jdXJyZW50VGFyZ2V0LmxldHRlcnMubGVuZ3RoICogMzUgKiA0IC8gNyAtIChzaHJpbmsgKiAoc2hyaW5rIC0gMSkgLyAyKSAqIDcgLyA0O1xyXG4gICAgICAgIGxldCB5ID0gMTY1ICsgZy5tb25rZXlzICogMTA7XHJcbiAgICAgICAgbmV3IFRleHREaXNwbGF5KHgsIHksIGhlaWdodCk7XHJcbiAgICAgICAgLy8gZy5sZXR0ZXJzUGVyU2Vjb25kICs9IDE7XHJcbiAgICAgICAgZy5sZXR0ZXJzUGVyU2Vjb25kID0gMTtcclxuICAgICAgICBnLmJhbmFuYXMgLT0gcmVjcnVpdFByaWNlO1xyXG4gICAgICAgIHJlY3J1aXRQcmljZSA9IDEwICsgMiAqIGcubW9ua2V5cztcclxuICAgICAgICBidXR0b24xLnRleHQgPSBcIlJlY3J1aXQgTW9ua2V5IFwiICsgcmVjcnVpdFByaWNlO1xyXG4gICAgfSxcclxuICAgICgpID0+IHtcclxuICAgICAgICBpZiAocmVjcnVpdFByaWNlID4gZy5iYW5hbmFzKSB7XHJcbiAgICAgICAgICAgIGJ1dHRvbjEuaXNEaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYnV0dG9uMS5pc0Rpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuKTtcclxuXHJcbmxldCBsYXN0Q2xpY2tlZFRpbWVNaWxsaXM6IG51bWJlcjtcclxubGV0IGJ1dHRvbjIgPSBuZXcgQnV0dG9uKFxyXG4gICAgMTAwLFxyXG4gICAgMzUwLFxyXG4gICAgODAsXHJcbiAgICAzMCxcclxuICAgIFwiVHlwZVwiLFxyXG4gICAgYnV0dG9uQ29sb3IsXHJcbiAgICBidXR0b25Ib3ZlckNvbG9yLFxyXG4gICAgKGN1cnJlbnRUaW1lTWlsbGlzOiBudW1iZXIpID0+IHtcclxuICAgICAgICBpZiAoY3VycmVudFRpbWVNaWxsaXMgIT09IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICAmJiAoY3VycmVudFRpbWVNaWxsaXMgLSBsYXN0Q2xpY2tlZFRpbWVNaWxsaXMpIDwgNTApIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0ZXh0RGlzcGxheS5sZXR0ZXJzVG9UeXBlUmVtYWluZGVyICs9IDE7XHJcbiAgICAgICAgbGFzdENsaWNrZWRUaW1lTWlsbGlzID0gY3VycmVudFRpbWVNaWxsaXM7XHJcbiAgICB9LFxyXG4gICAgKCkgPT4ge31cclxuKTtcclxuXHJcbmxldCB1cGdyYWRlS2V5Ym9hcmRQcmljZSA9IE1hdGgucG93KDEwLCBnLm1heEtleWJvYXJkS2V5cyArIDEpO1xyXG5sZXQgYnV0dG9uMyA9IG5ldyBCdXR0b24oXHJcbiAgICAyNTAsXHJcbiAgICA0MDAsXHJcbiAgICA4MCxcclxuICAgIDMwLFxyXG4gICAgXCJVcGdyYWRlIEtleWJvYXJkIFwiICsgdXBncmFkZUtleWJvYXJkUHJpY2UsXHJcbiAgICBidXR0b25Db2xvcixcclxuICAgIGJ1dHRvbkhvdmVyQ29sb3IsXHJcbiAgICAoKSA9PiB7XHJcbiAgICAgICAgZy5iYW5hbmFzIC09IHVwZ3JhZGVLZXlib2FyZFByaWNlO1xyXG4gICAgICAgIGcubWF4S2V5Ym9hcmRLZXlzICs9IDE7XHJcbiAgICAgICAgdXBkYXRlQ2hhcmFjdGVyc1RvQ2hvb3NlRnJvbSgpO1xyXG4gICAgICAgIHVwZ3JhZGVLZXlib2FyZFByaWNlID0gTWF0aC5wb3coMTAsIGcubWF4S2V5Ym9hcmRLZXlzICsgMSk7XHJcbiAgICAgICAgYnV0dG9uMy50ZXh0ID0gXCJVcGdyYWRlIEtleWJvYXJkIFwiICsgdXBncmFkZUtleWJvYXJkUHJpY2U7XHJcbiAgICB9LFxyXG4gICAgKCkgPT4ge1xyXG4gICAgICAgIGlmICh1cGdyYWRlS2V5Ym9hcmRQcmljZSA+IGcuYmFuYW5hcykge1xyXG4gICAgICAgICAgICBidXR0b24zLmlzRGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGJ1dHRvbjMuaXNEaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuKTtcclxuXHJcbmxldCBzYXZlQnV0dG9uOiBCdXR0b24gPSBuZXcgQnV0dG9uKFxyXG4gICAgMTAsXHJcbiAgICA2MDAsXHJcbiAgICAxMDAsXHJcbiAgICAzMCxcclxuICAgIFwiU2F2ZVwiLFxyXG4gICAgYnV0dG9uQ29sb3IsXHJcbiAgICBidXR0b25Ib3ZlckNvbG9yLFxyXG4gICAgKCkgPT4ge3NhdmUoKX0sXHJcbiAgICAoKSA9PiB7fSxcclxuKTtcclxuXHJcbmxldCBlcmFzZUJ1dHRvbjogQnV0dG9uID0gbmV3IEJ1dHRvbihcclxuICAgIDEwLFxyXG4gICAgNjQwLFxyXG4gICAgMTAwLFxyXG4gICAgMzAsXHJcbiAgICBcIkVyYXNlIFNhdmVcIixcclxuICAgIGVyYXNlQnV0dG9uQ29sb3IsXHJcbiAgICBlcmFzZUJ1dHRvbkhvdmVyQ29sb3IsXHJcbiAgICAoKSA9PiB7ZXJhc2VTYXZlKCl9LFxyXG4gICAgKCkgPT4ge30sXHJcbik7XHJcblxyXG4vLyBDb21tZW50IG91dCB0aGUgdXBncmFkZSBidXR0b25zIGZvciBub3dcclxuLy8gbGV0IHVwZ3JhZGVCdXR0b25zOiBCdXR0b25bXSA9IFtdO1xyXG4vLyBjcmVhdGVVcGdyYWRlQnV0dG9ucygpO1xyXG5cclxubGV0IHRleHREaXNwbGF5ID0gbmV3IFRleHREaXNwbGF5KDUwLCAxNjUsIDM1KTtcclxuXHJcbi8vIGxldCBpbmNvbWVBY2N1bXVsYXRvcjogbnVtYmVyID0gMDtcclxubGV0IGxhc3RJbmNvbWVVcGRhdGVUaW1lTWlsbGlzOiBudW1iZXIgPSBwZXJmb3JtYW5jZS5ub3coKTtcclxubGV0IG1pbGxpc1BlckluY29tZVVwZGF0ZTogbnVtYmVyID0gMjAwMDtcclxubGV0IGxhc3RCYW5hbmFzUGVyU2Vjb25kOiBudW1iZXIgPSAwO1xyXG5cclxuLy8gc3RvcmUgdGhlIG1vdXNlIHh5IGluIGNhc2UgaXQgZ2V0cyBleGVjdXRlZCBmYXN0ZXIgdGhhblxyXG4vLyBvbmNlIGV2ZXJ5IGZyYW1lLCB3aGljaCB3b3VsZCBiZSB1c2VsZXNzIHNpbmNlIGhvdmVyIGlzXHJcbi8vIGhhbmRsZWQgb25seSBvbmNlIGV2ZXJ5IGZyYW1lXHJcbmNhbnZhcy5vbm1vdXNlbW92ZSA9IChldjogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgbGV0IGJvdW5kczogRE9NUmVjdCA9IGNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIGcubW91c2VYID0gZXYueCAtIGJvdW5kcy5sZWZ0O1xyXG4gICAgZy5tb3VzZVkgPSBldi55IC0gYm91bmRzLnRvcDtcclxufTtcclxuXHJcbi8vIGFzc3VtZSBmb3Igc2ltcGxpY2l0eSB0aGF0IHlvdSBjYW4ndCBoYXZlIHR3byBtb3VzZWRvd25cclxuLy8gZXZlbnRzIHdpdGhvdXQgYSBtb3VzZXVwXHJcbmNhbnZhcy5vbm1vdXNlZG93biA9IChldjogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgbGV0IGJvdW5kczogRE9NUmVjdCA9IGNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIGxldCBtb3VzZVggPSBldi54IC0gYm91bmRzLmxlZnQ7XHJcbiAgICBsZXQgbW91c2VZID0gZXYueSAtIGJvdW5kcy50b3A7XHJcbiAgICBsZXQgY29sbGlkZWFibGU6IENvbGxpZGVhYmxlID0gZ2V0Q29sbGlkaW5nRW50aXR5KG1vdXNlWCwgbW91c2VZKTtcclxuICAgIGlmIChjb2xsaWRlYWJsZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgY29sbGlkZWFibGUuaXNNb3VzZURvd25lZCA9IHRydWU7XHJcbiAgICAgICAgY3VycmVudE1vdXNlRG93bmVkID0gY29sbGlkZWFibGU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGN1cnJlbnRNb3VzZURvd25lZCA9IHVuZGVmaW5lZDtcclxuICAgIH1cclxufVxyXG5cclxuY2FudmFzLm9ubW91c2V1cCA9IChldjogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgbGV0IGJvdW5kczogRE9NUmVjdCA9IGNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIGxldCBtb3VzZVggPSBldi54IC0gYm91bmRzLmxlZnQ7XHJcbiAgICBsZXQgbW91c2VZID0gZXYueSAtIGJvdW5kcy50b3A7XHJcbiAgICBsZXQgY29sbGlkZWFibGU6IENvbGxpZGVhYmxlID0gZ2V0Q29sbGlkaW5nRW50aXR5KG1vdXNlWCwgbW91c2VZKTtcclxuICAgIGlmIChjb2xsaWRlYWJsZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgaWYgKGNvbGxpZGVhYmxlLmlzTW91c2VEb3duZWRcclxuICAgICAgICAgICAgJiYgIWNvbGxpZGVhYmxlLmlzRGlzYWJsZWQpIHtcclxuICAgICAgICAgICAgY29sbGlkZWFibGUub25DbGljayhldi50aW1lU3RhbXApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChjdXJyZW50TW91c2VEb3duZWQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGN1cnJlbnRNb3VzZURvd25lZC5pc01vdXNlRG93bmVkID0gZmFsc2U7XHJcbiAgICB9XHJcbn1cclxuXHJcbmxldCBwcmV2aW91c1RpbWVNaWxsaXM6IG51bWJlcjtcclxubGV0IHByZXZpb3VzSG92ZXJlZDogQ29sbGlkZWFibGU7XHJcbmxldCBjdXJyZW50TW91c2VEb3duZWQ6IENvbGxpZGVhYmxlO1xyXG4vLyBsZXQgbGFzdFdvcmRGaW5pc2hUaW1lTWlsbGlzOiBudW1iZXI7XHJcblxyXG53aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGRyYXcpO1xyXG5cclxuZnVuY3Rpb24gZHJhdyhjdXJyZW50VGltZU1pbGxpczogbnVtYmVyKSB7XHJcbiAgICBsZXQgZWxhcHNlZFRpbWVNaWxsaXM6IG51bWJlciA9IDA7XHJcbiAgICBpZiAocHJldmlvdXNUaW1lTWlsbGlzICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBlbGFwc2VkVGltZU1pbGxpcyA9IGN1cnJlbnRUaW1lTWlsbGlzIC0gcHJldmlvdXNUaW1lTWlsbGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcclxuICAgIGN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XHJcbiAgICBjdHguZmlsbFJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcclxuXHJcbiAgICBpZiAocHJldmlvdXNIb3ZlcmVkICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBwcmV2aW91c0hvdmVyZWQuaXNIb3ZlcmVkID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbGxpZGVhYmxlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGxldCBpc0NvbGxpZGluZyA9IGNvbGxpZGVhYmxlc1tpXS5jb2xsaWRlKGcubW91c2VYLCBnLm1vdXNlWSk7XHJcbiAgICAgICAgaWYgKGlzQ29sbGlkaW5nKSB7XHJcbiAgICAgICAgICAgIGxldCBjdXJyZW50SG92ZXJlZCA9IGNvbGxpZGVhYmxlc1tpXTtcclxuICAgICAgICAgICAgY3VycmVudEhvdmVyZWQuaXNIb3ZlcmVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgcHJldmlvdXNIb3ZlcmVkID0gY3VycmVudEhvdmVyZWQ7XHJcbiAgICAgICAgICAgIGJyZWFrOyAvLyBvbmx5IG9uZSB0aGluZyBjYW4gYmUgaG92ZXJlZCBvdmVyIGF0IGEgdGltZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBnLmxldHRlcnNUb1R5cGVSZW1haW5kZXIgKz0gZWxhcHNlZFRpbWVNaWxsaXMgLyAxMDAwICogZy5sZXR0ZXJzUGVyU2Vjb25kO1xyXG4gICAgXHJcbiAgICAvLyBNYWtlIGEgZmluaXNoZWQgd29yZCBzdGF5IG9uIHNjcmVlbiBmb3IgNTAwbXMsIG9yIHVudGlsXHJcbiAgICAvLyBhbm90aGVyIGxldHRlciBpcyB0eXBlZFxyXG4gICAgLy8gaWYgKChcclxuICAgIC8vICAgICAgICAgbGFzdFdvcmRGaW5pc2hUaW1lTWlsbGlzICE9PSB1bmRlZmluZWRcclxuICAgIC8vICAgICAgICAgJiYgKGN1cnJlbnRUaW1lTWlsbGlzIC0gbGFzdFdvcmRGaW5pc2hUaW1lTWlsbGlzKSA+IDUwMFxyXG4gICAgLy8gICAgICkgfHwgKFxyXG4gICAgLy8gICAgICAgICBnLmxldHRlcnNUb1R5cGVSZW1haW5kZXIgPj0gMVxyXG4gICAgLy8gICAgICAgICAmJiBjdXJyZW50U3RyaW5nLmxlbmd0aCA+PSBnLmN1cnJlbnRUYXJnZXQubGV0dGVycy5sZW5ndGhcclxuICAgIC8vICAgICApKSB7XHJcbiAgICAvLyAgICAgY3VycmVudFN0cmluZyA9IFtdO1xyXG4gICAgLy8gICAgIGxhc3RXb3JkRmluaXNoVGltZU1pbGxpcyA9IHVuZGVmaW5lZDtcclxuICAgIC8vIH1cclxuICAgIFxyXG4gICAgLy8gR2VuZXJhdGUgdGhlIG5lZWRlZCBjaGFyYWN0ZXJzIGFuZCBhd2FyZCBiYW5hbmFzXHJcbiAgICAvLyB3aGlsZSAoZy5sZXR0ZXJzVG9UeXBlUmVtYWluZGVyID49IDEpIHtcclxuICAgIC8vICAgICBnLmxldHRlcnNUb1R5cGVSZW1haW5kZXIgLT0gMTtcclxuICAgIC8vICAgICBpZiAoZy5jaGFyYWN0ZXJzVG9DaG9vc2VGcm9tLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgLy8gICAgICAgICBjb250aW51ZTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgbGV0IGNoYXJhY3RlciA9IGdldFJhbmRvbUNoYXJhY3RlcigpO1xyXG4gICAgLy8gICAgIGN1cnJlbnRTdHJpbmcucHVzaChjaGFyYWN0ZXIpO1xyXG4gICAgLy8gICAgIGlmIChjdXJyZW50U3RyaW5nLmxlbmd0aCA+PSBnLmN1cnJlbnRUYXJnZXQubGV0dGVycy5sZW5ndGgpIHtcclxuICAgIC8vICAgICAgICAgbGFzdFdvcmRGaW5pc2hUaW1lTWlsbGlzID0gY3VycmVudFRpbWVNaWxsaXM7XHJcbiAgICAvLyAgICAgICAgIGxldCBtYXRjaGluZ0xldHRlcnM6IG51bWJlciA9IGNvdW50TWF0Y2hpbmdMZXR0ZXJzKFxyXG4gICAgLy8gICAgICAgICAgICAgY3VycmVudFN0cmluZywgZy5jdXJyZW50VGFyZ2V0LmxldHRlcnMpO1xyXG4gICAgLy8gICAgICAgICBpZiAobWF0Y2hpbmdMZXR0ZXJzID4gMCkge1xyXG4gICAgLy8gICAgICAgICAgICAgbGV0IGJhbmFuYXNUb0FkZCA9IChnLmN1cnJlbnRUYXJnZXQucmV3YXJkc1ttYXRjaGluZ0xldHRlcnMgLSAxXVxyXG4gICAgLy8gICAgICAgICAgICAgICAgICsgZy5hZGRpdGl2ZUZsYXRCb251cykgKiAoMSArIGcuYWRkaXRpdmVQZXJjZW50Qm9udXMpO1xyXG4gICAgLy8gICAgICAgICAgICAgZy5iYW5hbmFzICs9IGJhbmFuYXNUb0FkZDtcclxuICAgIC8vICAgICAgICAgICAgIGcuaW5jb21lQWNjdW11bGF0b3IgKz0gYmFuYW5hc1RvQWRkO1xyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgIGlmIChnLmxldHRlcnNUb1R5cGVSZW1haW5kZXIgPj0gMSkge1xyXG4gICAgLy8gICAgICAgICAgICAgY3VycmVudFN0cmluZyA9IFtdO1xyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIERyYXcgdGhlIGN1cnJlbnQgc3RyaW5nIG9uIHNjcmVlblxyXG4gICAgLy8gY3R4LnNhdmUoKTtcclxuICAgIC8vIGN0eC5maWxsU3R5bGUgPSBcImJsYWNrXCI7XHJcbiAgICAvLyBjdHguZm9udCA9IFwiMjBweCBBcmlhbFwiO1xyXG4gICAgLy8gZm9yKGxldCBpID0gMDsgaSA8IGcuY3VycmVudFRhcmdldC5sZXR0ZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAvLyAgICAgbGV0IGNoYXJhY3Rlcjogc3RyaW5nO1xyXG4gICAgLy8gICAgIGlmIChpID49IGN1cnJlbnRTdHJpbmcubGVuZ3RoKSB7XHJcbiAgICAvLyAgICAgICAgIGNoYXJhY3RlciA9IFwiX1wiO1xyXG4gICAgLy8gICAgIH0gZWxzZSB7XHJcbiAgICAvLyAgICAgICAgIGNoYXJhY3RlciA9IGN1cnJlbnRTdHJpbmdbaV07XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIGN0eC5maWxsVGV4dChcclxuICAgIC8vICAgICAgICAgY2hhcmFjdGVyLFxyXG4gICAgLy8gICAgICAgICAxMDAgKyAyMCAqIGksXHJcbiAgICAvLyAgICAgICAgIDIwMFxyXG4gICAgLy8gICAgICk7XHJcbiAgICAvLyB9XHJcbiAgICAvLyBjdHgucmVzdG9yZSgpO1xyXG5cclxuICAgIC8vIENhbGwgdXBkYXRlIG9uIGV2ZXJ5dGhpbmcganVzdCBiZWZvcmUgZHJhd1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkcmF3YWJsZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICB1cGRhdGVhYmxlc1tpXS51cGRhdGUoY3VycmVudFRpbWVNaWxsaXMsIGVsYXBzZWRUaW1lTWlsbGlzKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBVcGRhdGUgdGhlIGluY29tZSBwZXIgc2Vjb25kIGlmIGl0J3MgdGltZSB0b1xyXG4gICAgbGV0IGVsYXBzZWRTaW5jZUxhc3RJbmNvbWVVcGRhdGUgPSBjdXJyZW50VGltZU1pbGxpcyAtIGxhc3RJbmNvbWVVcGRhdGVUaW1lTWlsbGlzO1xyXG4gICAgaWYgKGVsYXBzZWRTaW5jZUxhc3RJbmNvbWVVcGRhdGUgPj0gbWlsbGlzUGVySW5jb21lVXBkYXRlKSB7XHJcbiAgICAgICAgbGFzdEJhbmFuYXNQZXJTZWNvbmQgPSBnLmluY29tZUFjY3VtdWxhdG9yIC8gKGVsYXBzZWRTaW5jZUxhc3RJbmNvbWVVcGRhdGUgLyAxMDAwKTtcclxuICAgICAgICBnLmluY29tZUFjY3VtdWxhdG9yID0gMDtcclxuICAgICAgICBsYXN0SW5jb21lVXBkYXRlVGltZU1pbGxpcyA9IGN1cnJlbnRUaW1lTWlsbGlzO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIERyYXcgdmFsdWVzIGF0IHRoZSBlbmQgb2YgdGhlIGZyYW1lIHNvIHRoZXkncmUgYXMgdXBcclxuICAgIC8vIHRvIGRhdGUgYXMgdGhleSBjYW4gYmVcclxuICAgIGN0eC5zYXZlKCk7XHJcbiAgICBjdHguZmlsbFN0eWxlID0gXCJibGFja1wiO1xyXG4gICAgY3R4LmZvbnQgPSBcIjIwcHggQXJpYWxcIjtcclxuXHJcbiAgICBjdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcclxuICAgIGN0eC5maWxsVGV4dChiYW5hbmFzUGVyU2Vjb25kKGxhc3RCYW5hbmFzUGVyU2Vjb25kKSwgMTQwLCAzMCk7XHJcbiAgICBjdHguZmlsbFRleHQoYmFuYW5hcyhnLmJhbmFuYXMpLCAxNDAsIDU1KTtcclxuICAgIGN0eC5maWxsVGV4dChtb25rZXlzKGcubW9ua2V5cyksIDE0MCwgODApO1xyXG5cclxuICAgIGN0eC50ZXh0QWxpZ24gPSBcImxlZnRcIjtcclxuICAgIGN0eC5maWxsVGV4dChcIlRhcmdldCBTdHJpbmc6IFwiXHJcbiAgICAgICAgKyBnLmN1cnJlbnRUYXJnZXQuZGlzcGxheVN0cmluZywgMjUwLCAxMjApO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBnLmN1cnJlbnRUYXJnZXQucmV3YXJkcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGxldCByZXdhcmQgPSAoZy5jdXJyZW50VGFyZ2V0LnJld2FyZHNbaV1cclxuICAgICAgICAgICAgKyBnLmFkZGl0aXZlRmxhdEJvbnVzKSAqICgxICsgZy5hZGRpdGl2ZVBlcmNlbnRCb251cyk7XHJcbiAgICAgICAgbGV0IGxpbmUgPSAoaSArIDEpICsgXCI6IFwiICsgYmFuYW5hcyhyZXdhcmQpO1xyXG4gICAgICAgIGN0eC5maWxsVGV4dChsaW5lLCAyODAsIDE0MCArIDIwICogaSk7XHJcbiAgICB9XHJcblxyXG4gICAgY3R4LnRleHRBbGlnbiA9IFwicmlnaHRcIjtcclxuICAgIGN0eC5maWxsVGV4dChcIktleWJvYXJkIEtleXM6XCIsIDE2MCwgMzAwKTtcclxuXHJcbiAgICBjdHgucmVzdG9yZSgpO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZHJhd2FibGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgZHJhd2FibGVzW2ldLmRyYXcoY3VycmVudFRpbWVNaWxsaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByZXZpb3VzVGltZU1pbGxpcyA9IGN1cnJlbnRUaW1lTWlsbGlzO1xyXG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShkcmF3KTtcclxufVxyXG5cclxuLy8gTWFrZSBhIGJ1dHRvbiBvdXQgb2YgdGhlIGEga2V5Ym9hcmQga2V5IHNvIHlvdVxyXG4vLyBjYW4gY2xpY2sgdG8gcmVtb3ZlIGl0IGZyb20geW91ciBrZXlib2FyZC5cclxuLy8gaSBpcyB0aGUgaW5kZXggaW4gdGhlIGtleWJvYXJkS2V5cyBhcnJheVxyXG4vLyBPbiBjbGljayBpdCBkZWxldGVzIGFuZCByZW1ha2VzIGFsbCB0aGUgYnV0dG9uc1xyXG5mdW5jdGlvbiBjcmVhdGVDdXJyZW50S2V5Ym9hcmRLZXlCdXR0b24oaTogbnVtYmVyLCBrZXk6IHN0cmluZykge1xyXG4gICAgbGV0IGJ1dHRvbiA9IG5ldyBCdXR0b24oXHJcbiAgICAgICAgMTgwICsgMzAgKiBpLFxyXG4gICAgICAgIDI4MCxcclxuICAgICAgICAyNSxcclxuICAgICAgICAyNSxcclxuICAgICAgICBrZXksXHJcbiAgICAgICAgYnV0dG9uQ29sb3IsXHJcbiAgICAgICAgYnV0dG9uSG92ZXJDb2xvcixcclxuICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgIGcua2V5Ym9hcmRLZXlzLnNwbGljZShpLCAxKTtcclxuICAgICAgICAgICAgdXBkYXRlQ2hhcmFjdGVyc1RvQ2hvb3NlRnJvbSgpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGtleWJvYXJkS2V5QnV0dG9ucy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAga2V5Ym9hcmRLZXlCdXR0b25zW2pdLmRlbGV0ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgZy5rZXlib2FyZEtleXMubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBrZXkgPSBnLmtleWJvYXJkS2V5c1tqXTtcclxuICAgICAgICAgICAgICAgIGNyZWF0ZUN1cnJlbnRLZXlib2FyZEtleUJ1dHRvbihqLCBrZXkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIG5vdCBzdXJlIGlmIEkgd2lsbCB3YW50IHRvIGNsZWFyIGFsbCB0aGUgY3VycmVudFxyXG4gICAgICAgICAgICAvLyBzdHJpbmdzIHdoZW4gdGhlIHBsYXllciBjaGFuZ2VzIHRoZSBrZXlib2FyZFxyXG4gICAgICAgICAgICAvLyBjdXJyZW50U3RyaW5nID0gW107XHJcbiAgICAgICAgfSxcclxuICAgICAgICAoKSA9PiB7fSxcclxuICAgICk7XHJcbiAgICBrZXlib2FyZEtleUJ1dHRvbnMucHVzaChidXR0b24pO1xyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVDaGFyYWN0ZXJzVG9DaG9vc2VGcm9tKCkge1xyXG4gICAgZy5jaGFyYWN0ZXJzVG9DaG9vc2VGcm9tID0gW107XHJcbiAgICBpZiAoZy5rZXlib2FyZEtleXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByYW5kb21OdW1iZXJTaXplOyBpKyspIHtcclxuICAgICAgICBnLmNoYXJhY3RlcnNUb0Nob29zZUZyb20ucHVzaChcclxuICAgICAgICAgICAgZy5rZXlib2FyZEtleXNbaSAlIGcua2V5Ym9hcmRLZXlzLmxlbmd0aF1cclxuICAgICAgICApO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBmdW5jdGlvbiBjcmVhdGVVcGdyYWRlQnV0dG9ucygpIHtcclxuLy8gICAgIGxldCBzb3J0ZWRVcGdyYWRlczogVXBncmFkZVtdID0gc29ydGVkKHVwZ3JhZGVzLCAoYTogVXBncmFkZSwgYjogVXBncmFkZSkgPT4ge1xyXG4vLyAgICAgICAgIHJldHVybiBhLnByaWNlIC0gYi5wcmljZTtcclxuLy8gICAgIH0pO1xyXG4vLyAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzb3J0ZWRVcGdyYWRlcy5sZW5ndGg7IGkrKykge1xyXG4vLyAgICAgICAgIGxldCB1cGdyYWRlID0gc29ydGVkVXBncmFkZXNbaV07XHJcbi8vICAgICAgICAgbGV0IGJ1dHRvbjogQnV0dG9uID0gbmV3IEJ1dHRvbihcclxuLy8gICAgICAgICAgICAgNTAwLFxyXG4vLyAgICAgICAgICAgICAzMDAgKyAzNSAqIGksXHJcbi8vICAgICAgICAgICAgIDgwLFxyXG4vLyAgICAgICAgICAgICAzMCxcclxuLy8gICAgICAgICAgICAgdXBncmFkZS50ZXh0ICsgXCIgXCIgKyB1cGdyYWRlLnByaWNlLFxyXG4vLyAgICAgICAgICAgICBidXR0b25Db2xvcixcclxuLy8gICAgICAgICAgICAgYnV0dG9uSG92ZXJDb2xvcixcclxuLy8gICAgICAgICAgICAgKCkgPT4ge1xyXG4vLyAgICAgICAgICAgICAgICAgdXBncmFkZS5idXkoKTtcclxuLy8gICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdXBncmFkZUJ1dHRvbnMubGVuZ3RoOyBqKyspIHtcclxuLy8gICAgICAgICAgICAgICAgICAgICB1cGdyYWRlQnV0dG9uc1tqXS5kZWxldGUoKTtcclxuLy8gICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgICAgIGNyZWF0ZVVwZ3JhZGVCdXR0b25zKCk7XHJcbi8vICAgICAgICAgICAgIH0sXHJcbi8vICAgICAgICAgICAgICgpID0+IHtcclxuLy8gICAgICAgICAgICAgICAgIGlmICh1cGdyYWRlLnByaWNlID4gZy5iYW5hbmFzKSB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgYnV0dG9uLmlzRGlzYWJsZWQgPSB0cnVlO1xyXG4vLyAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuLy8gICAgICAgICAgICAgICAgICAgICBidXR0b24uaXNEaXNhYmxlZCA9IGZhbHNlO1xyXG4vLyAgICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICB9LFxyXG4vLyAgICAgICAgICk7XHJcbi8vICAgICAgICAgdXBncmFkZUJ1dHRvbnMucHVzaChidXR0b24pO1xyXG4vLyAgICAgfVxyXG4vLyB9XHJcblxyXG5mdW5jdGlvbiBnZXRDb2xsaWRpbmdFbnRpdHkocG9pbnRYOiBudW1iZXIsIHBvaW50WTogbnVtYmVyKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbGxpZGVhYmxlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGxldCBpc0NvbGxpZGluZyA9IGNvbGxpZGVhYmxlc1tpXS5jb2xsaWRlKGcubW91c2VYLCBnLm1vdXNlWSk7XHJcbiAgICAgICAgaWYgKGlzQ29sbGlkaW5nKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjb2xsaWRlYWJsZXNbaV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcclxufVxyXG5cclxuZnVuY3Rpb24gcmdiU3RyaW5nKHJlZDogbnVtYmVyLCBncmVlbjogbnVtYmVyLCBibHVlOiBudW1iZXIpIHtcclxuICAgIHJldHVybiBcInJnYihcIiArIHJlZCArIFwiLFwiICsgZ3JlZW4gKyBcIixcIiArIGJsdWUgKyBcIilcIjtcclxufVxyXG5cclxuZnVuY3Rpb24gYmFuYW5hcyhudW1iZXI6IG51bWJlcikge1xyXG4gICAgbnVtYmVyID0gTWF0aC5yb3VuZChudW1iZXIpO1xyXG4gICAgaWYgKG51bWJlciA9PT0gMSkge1xyXG4gICAgICAgIHJldHVybiBudW1iZXIgKyBcIiBiYW5hbmFcIjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIG51bWJlciArIFwiIGJhbmFuYXNcIjtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbW9ua2V5cyhudW1iZXI6IG51bWJlcikgeyBcclxuICAgIGlmIChudW1iZXIgPT09IDEpIHtcclxuICAgICAgICByZXR1cm4gbnVtYmVyICsgXCIgbW9ua2V5XCI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBudW1iZXIgKyBcIiBtb25rZXlzXCI7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGJhbmFuYXNQZXJTZWNvbmQobnVtYmVyOiBudW1iZXIpIHtcclxuICAgIG51bWJlciA9IE1hdGgucm91bmQobnVtYmVyKTtcclxuICAgIGlmIChudW1iZXIgPT09IDEpIHtcclxuICAgICAgICByZXR1cm4gbnVtYmVyICsgXCIgYmFuYW5hIHBlciBzZWNvbmRcIjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIG51bWJlciArIFwiIGJhbmFuYXMgcGVyIHNlY29uZFwiO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzb3J0ZWQoYXJyYXk6IGFueVtdLCBjb21wYXJlRm4/OiAoYTogYW55LCBiOiBhbnkpID0+IG51bWJlcikge1xyXG4gICAgcmV0dXJuIGFycmF5LnNsaWNlKCkuc29ydChjb21wYXJlRm4pO1xyXG59XHJcblxyXG5mdW5jdGlvbiByb3VuZFRvTlBsYWNlcyh4OiBudW1iZXIsIG51bVBsYWNlczogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIGxldCBzY2FsZTogbnVtYmVyID0gTWF0aC5wb3coMTAsIG51bVBsYWNlcyk7XHJcbiAgICByZXR1cm4gTWF0aC5yb3VuZCh4ICogc2NhbGUpIC8gc2NhbGU7XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9