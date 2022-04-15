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

/***/ "./src/dictionary_view.ts":
/*!********************************!*\
  !*** ./src/dictionary_view.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DictionaryView": () => (/* binding */ DictionaryView)
/* harmony export */ });
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./global */ "./src/global.ts");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ "./src/util.ts");


var DictionaryView = /** @class */ (function () {
    function DictionaryView(bottomLeftX, bottomLeftY) {
        this.backgroundColor = (0,_util__WEBPACK_IMPORTED_MODULE_1__.rgbString)(200, 200, 200);
        this.bottomLeftX = bottomLeftX;
        this.bottomLeftY = bottomLeftY;
        this.id = _global__WEBPACK_IMPORTED_MODULE_0__.g.idCounter;
        _global__WEBPACK_IMPORTED_MODULE_0__.g.idCounter += 1;
        _global__WEBPACK_IMPORTED_MODULE_0__.foregroundDrawables.push(this);
    }
    DictionaryView.prototype.draw = function () {
        var width = 100;
        var heightPerWord = 21;
        var spacing = 5;
        var height = _global__WEBPACK_IMPORTED_MODULE_0__.playerDictionary.length * (heightPerWord + spacing) + spacing;
        var x = this.bottomLeftX;
        var y = this.bottomLeftY - height - 10;
        var textX = x + spacing;
        _global__WEBPACK_IMPORTED_MODULE_0__.ctx.save();
        _global__WEBPACK_IMPORTED_MODULE_0__.ctx.fillStyle = this.backgroundColor;
        _global__WEBPACK_IMPORTED_MODULE_0__.ctx.fillRect(x, y, width, height);
        _global__WEBPACK_IMPORTED_MODULE_0__.ctx.fillStyle = "black";
        _global__WEBPACK_IMPORTED_MODULE_0__.ctx.font = "16px Arial";
        _global__WEBPACK_IMPORTED_MODULE_0__.ctx.textAlign = "left";
        for (var i = 0; i < _global__WEBPACK_IMPORTED_MODULE_0__.playerDictionary.length; i++) {
            _global__WEBPACK_IMPORTED_MODULE_0__.ctx.fillText(_global__WEBPACK_IMPORTED_MODULE_0__.playerDictionary[i].join(""), textX, this.bottomLeftY - (heightPerWord + spacing) * i - spacing - 15);
        }
        _global__WEBPACK_IMPORTED_MODULE_0__.ctx.restore();
    };
    DictionaryView.prototype.delete = function () {
        for (var i = 0; i < _global__WEBPACK_IMPORTED_MODULE_0__.foregroundDrawables.length; i++) {
            if (_global__WEBPACK_IMPORTED_MODULE_0__.foregroundDrawables[i].id === this.id) {
                _global__WEBPACK_IMPORTED_MODULE_0__.foregroundDrawables.splice(i, 1);
            }
        }
    };
    return DictionaryView;
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
/* harmony export */   "foregroundDrawables": () => (/* binding */ foregroundDrawables),
/* harmony export */   "g": () => (/* binding */ g),
/* harmony export */   "height": () => (/* binding */ height),
/* harmony export */   "playerDictionary": () => (/* binding */ playerDictionary),
/* harmony export */   "updateables": () => (/* binding */ updateables),
/* harmony export */   "width": () => (/* binding */ width)
/* harmony export */ });
var width = 1000;
var height = 700;
var ctx;
var canvas = document.createElement("canvas");
canvas.width = width;
canvas.height = height;
ctx = canvas.getContext("2d");
var drawables = [];
var foregroundDrawables = [];
var collideables = [];
var updateables = [];
var playerDictionary = [["C", "A", "T"]];
// Put any global variables that you want to be able to reassign here
var g = {
    bananas: 0,
    monkeys: 0,
    lettersPerSecond: 0,
    mouseX: -1,
    mouseY: -1,
    idCounter: 0,
    currentTargetIndex: 0,
    keyboardKeys: ["A"],
    maxKeyboardKeys: 1,
    targetOwned: [true],
    additivePercentBonus: 0,
    additiveFlatBonus: 0,
    charactersToChooseFrom: [],
    incomeAccumulator: 0,
    textDisplayLetters: 3,
};


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
/* harmony import */ var _word_particle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./word_particle */ "./src/word_particle.ts");



var textDisplays = [];
var TextDisplay = /** @class */ (function () {
    function TextDisplay() {
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
            && this.currentString.length >= _global__WEBPACK_IMPORTED_MODULE_0__.g.textDisplayLetters)) {
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
            var evaluation = this.evaluate(this.currentString, _global__WEBPACK_IMPORTED_MODULE_0__.playerDictionary);
            if (this.currentString.length >= _global__WEBPACK_IMPORTED_MODULE_0__.g.textDisplayLetters) {
                this.lastWordFinishTimeMillis = currentTimeMillis;
                var bananasToAdd = 0;
                for (var i = 0; i < evaluation.matchCounts.length; i++) {
                    var matchCount = evaluation.matchCounts[i];
                    bananasToAdd += this.getScore(matchCount);
                }
                _global__WEBPACK_IMPORTED_MODULE_0__.g.bananas += bananasToAdd;
                _global__WEBPACK_IMPORTED_MODULE_0__.g.incomeAccumulator += bananasToAdd;
                if (this.lettersToTypeRemainder >= 1) {
                    this.currentString = [];
                }
                for (var i = 0; i < evaluation.matchCounts.length; i++) {
                    var matchCount = evaluation.matchCounts[i];
                    var color = void 0;
                    if (matchCount < 1) {
                        continue;
                    }
                    else {
                        color = this.getColor(matchCount);
                    }
                    new _word_particle__WEBPACK_IMPORTED_MODULE_2__.WordParticle(_global__WEBPACK_IMPORTED_MODULE_0__.playerDictionary[i].join(""), color, this.x + this.width / 2, this.y + this.height / 2, currentTimeMillis);
                }
            }
            this.previousEvaluation = evaluation;
        }
    };
    TextDisplay.prototype.draw = function () {
        var currentString = this.currentString;
        var fontSize = this.height * 4 / 7;
        _global__WEBPACK_IMPORTED_MODULE_0__.ctx.save();
        _global__WEBPACK_IMPORTED_MODULE_0__.ctx.strokeStyle = "black";
        _global__WEBPACK_IMPORTED_MODULE_0__.ctx.strokeRect(this.x, this.y, this.width, this.height);
        _global__WEBPACK_IMPORTED_MODULE_0__.ctx.font = fontSize + "px Arial";
        for (var i = 0; i < _global__WEBPACK_IMPORTED_MODULE_0__.g.textDisplayLetters; i++) {
            var character = void 0;
            if (i >= currentString.length) {
                character = "_";
            }
            else {
                character = currentString[i];
            }
            var gradeForLetter = 0;
            if (this.previousEvaluation !== undefined) {
                gradeForLetter = this.previousEvaluation.maxGradePerLetter[i];
            }
            if (character === "_") {
                _global__WEBPACK_IMPORTED_MODULE_0__.ctx.fillStyle = "black";
            }
            else if (gradeForLetter >= 1) {
                _global__WEBPACK_IMPORTED_MODULE_0__.ctx.fillStyle = this.getColor(gradeForLetter);
            }
            else {
                _global__WEBPACK_IMPORTED_MODULE_0__.ctx.fillStyle = "black";
            }
            _global__WEBPACK_IMPORTED_MODULE_0__.ctx.fillText(character, this.x + fontSize * 0.15 + fontSize * i, this.y + fontSize * 1.2);
        }
        _global__WEBPACK_IMPORTED_MODULE_0__.ctx.restore();
    };
    TextDisplay.prototype.evaluate = function (letters, dictionary) {
        var gradeMatrix = [];
        var matchCounts = [];
        for (var i = 0; i < dictionary.length; i++) {
            var targetLetters = dictionary[i];
            var grades = [];
            var matchCount = 0;
            for (var j = 0; j < targetLetters.length; j++) {
                var grade = targetLetters[j] === letters[j] ? 1 : 0;
                grades.push(grade);
                matchCount += grade;
            }
            matchCounts.push(matchCount);
            for (var j = 0; j < targetLetters.length; j++) {
                grades[j] *= matchCount;
            }
            gradeMatrix.push(grades);
        }
        var maxGradePerLetter = [];
        for (var i = 0; i < letters.length; i++) {
            var max = 0;
            for (var j = 0; j < gradeMatrix.length; j++) {
                if (gradeMatrix[j][i] > max) {
                    max = gradeMatrix[j][i];
                }
            }
            maxGradePerLetter.push(max);
        }
        return {
            gradeMatrix: gradeMatrix,
            matchCounts: matchCounts,
            maxGradePerLetter: maxGradePerLetter,
        };
    };
    TextDisplay.prototype.getScore = function (numMatches) {
        if (numMatches === 0) {
            return 0;
        }
        return Math.pow(5, numMatches - 1);
    };
    TextDisplay.prototype.getColor = function (numMatches) {
        if (numMatches === 0) {
            return "black";
        }
        else if (numMatches === 1) {
            return this.correctColor;
        }
        else if (numMatches === 2) {
            return "red";
        }
        else if (numMatches >= 3) {
            return "blue";
        }
        throw new Error("Undefined color for numMatches = " + numMatches);
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
        width = _global__WEBPACK_IMPORTED_MODULE_0__.g.textDisplayLetters * height * 4 / 7;
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
/* harmony export */   "getRandomInt": () => (/* binding */ getRandomInt),
/* harmony export */   "getRandomNumbers": () => (/* binding */ getRandomNumbers),
/* harmony export */   "mapLinear": () => (/* binding */ mapLinear),
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
// source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}
function mapLinear(fromValue, fromStart, fromEnd, toStart, toEnd) {
    return (fromValue - fromEnd) * (toStart - toEnd) / (fromStart - fromEnd) + toEnd;
}


/***/ }),

/***/ "./src/word_particle.ts":
/*!******************************!*\
  !*** ./src/word_particle.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WordParticle": () => (/* binding */ WordParticle)
/* harmony export */ });
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./global */ "./src/global.ts");

var WordParticle = /** @class */ (function () {
    function WordParticle(text, color, startX, startY, currentTimeMillis) {
        this.text = text;
        this.color = color;
        this.startX = startX;
        this.startY = startY;
        this.animationStartMillis = currentTimeMillis;
        this.animationEndMillis = currentTimeMillis + 2000;
        var angle = Math.PI * 2 * Math.random();
        this.velocityX = Math.cos(angle) / 20;
        this.velocityY = Math.sin(angle) / 20;
        this.id = _global__WEBPACK_IMPORTED_MODULE_0__.g.idCounter;
        _global__WEBPACK_IMPORTED_MODULE_0__.g.idCounter += 1;
        _global__WEBPACK_IMPORTED_MODULE_0__.drawables.push(this);
    }
    WordParticle.prototype.draw = function (currentTimeMillis) {
        if (currentTimeMillis >= this.animationEndMillis) {
            this.delete();
            return;
        }
        var elapsedTimeMillis = currentTimeMillis - this.animationStartMillis;
        var currentX = this.startX + elapsedTimeMillis * this.velocityX;
        var currentY = this.startY + elapsedTimeMillis * this.velocityY;
        _global__WEBPACK_IMPORTED_MODULE_0__.ctx.save();
        _global__WEBPACK_IMPORTED_MODULE_0__.ctx.textAlign = "center";
        _global__WEBPACK_IMPORTED_MODULE_0__.ctx.fillStyle = this.color;
        _global__WEBPACK_IMPORTED_MODULE_0__.ctx.font = "20px Arial";
        _global__WEBPACK_IMPORTED_MODULE_0__.ctx.fillText(this.text, currentX, currentY);
        _global__WEBPACK_IMPORTED_MODULE_0__.ctx.restore();
    };
    WordParticle.prototype.delete = function () {
        for (var i = 0; i < _global__WEBPACK_IMPORTED_MODULE_0__.drawables.length; i++) {
            if (_global__WEBPACK_IMPORTED_MODULE_0__.drawables[i].id === this.id) {
                _global__WEBPACK_IMPORTED_MODULE_0__.drawables.splice(i, 1);
            }
        }
    };
    return WordParticle;
}());



/***/ }),

/***/ "./src/words.ts":
/*!**********************!*\
  !*** ./src/words.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "words": () => (/* binding */ words)
/* harmony export */ });
// source = https://simple.wikipedia.org/wiki/Wikipedia:Basic_English_combined_wordlist
var words = [
    [
        "ACT",
        "AGE",
        "AGO",
        "AIR",
        "ALL",
        "AND",
        "ANT",
        "ANY",
        "ARC",
        "ARM",
        "ART",
        "ASH",
        "BAD",
        "BAG",
        "BAR",
        "BED",
        "BEE",
        "BET",
        "BIT",
        "BOX",
        "BOY",
        "BUD",
        "BUT",
        "CAT",
        "COW",
        "CRY",
        "CUP",
        "CUT",
        "DAY",
        "DEW",
        "DIP",
        "DOG",
        "DRY",
        "EAR",
        "EGG",
        "END",
        "EYE",
        "FAN",
        "FAR",
        "FAT",
        "FIN",
        "FLY",
        "FOR",
        "FUR",
        "GAS",
        "GET",
        "GOD",
        "GUM",
        "GUN",
        "HAT",
        "HOW",
        "ICE",
        "ILL",
        "INK",
        "JAM",
        "JAW",
        "JUG",
        "KEY",
        "LAG",
        "LAW",
        "LEG",
        "LET",
        "LID",
        "LIP",
        "LOW",
        "MAN",
        "MAP",
        "MAY",
        "MUD",
        "NET",
        "NEW",
        "NOT",
        "NOW",
        "NUT",
        "OFF",
        "OIL",
        "OLD",
        "ONE",
        "ORE",
        "OUT",
        "OWN",
        "PAD",
        "PAN",
        "PEN",
        "PIG",
        "PIN",
        "POT",
        "PUT",
        "RAT",
        "RAY",
        "RED",
        "ROD",
        "ROT",
        "RUB",
        "RUM",
        "RUN",
        "SAC",
        "SAD",
        "SAY",
        "SEA",
        "SEE",
        "SET",
        "SEX",
        "SIR",
        "SIX",
        "SKY",
        "SON",
        "SUM",
        "SUN",
        "TAP",
        "TAX",
        "TEA",
        "TEN",
        "THE",
        "TIE",
        "TIN",
        "TOE",
        "TOO",
        "TOP",
        "TWO",
        "USE",
        "WAR",
        "WAX",
        "WAY",
        "WET",
        "WHO",
        "WHY",
        "YES",
        "YOU",
    ],
    [
        "ABLE",
        "ACID",
        "ALSO",
        "ARCH",
        "AREA",
        "ARMY",
        "AXIS",
        "BABY",
        "BACK",
        "BALE",
        "BALL",
        "BAND",
        "BANG",
        "BANK",
        "BARK",
        "BASE",
        "BATH",
        "BEAK",
        "BEAT",
        "BEEF",
        "BEER",
        "BELL",
        "BELT",
        "BENT",
        "BILL",
        "BIRD",
        "BITE",
        "BLOW",
        "BLUE",
        "BOAT",
        "BODY",
        "BOMB",
        "BONE",
        "BOOK",
        "BOOT",
        "BOTH",
        "BULB",
        "BURN",
        "BUSY",
        "CAFE",
        "CAKE",
        "CALL",
        "CARD",
        "CARE",
        "CART",
        "CASE",
        "CAST",
        "CAVE",
        "CELL",
        "CHIN",
        "CLAW",
        "CLAY",
        "CLIP",
        "CLUB",
        "COAL",
        "COAT",
        "CODE",
        "COIL",
        "COLD",
        "COMB",
        "COME",
        "COOK",
        "COOL",
        "COPY",
        "CORD",
        "CORK",
        "COST",
        "CROP",
        "CUSP",
        "DARK",
        "DATE",
        "DEAD",
        "DEAR",
        "DEBT",
        "DECK",
        "DEEP",
        "DIKE",
        "DIVE",
        "DOLL",
        "DOOR",
        "DOWN",
        "DROP",
        "DUCT",
        "DULL",
        "DUST",
        "DUTY",
        "EACH",
        "EAST",
        "EASY",
        "EDGE",
        "ENVY",
        "EVEN",
        "EVER",
        "FACE",
        "FACT",
        "FAIR",
        "FALL",
        "FARM",
        "FEAR",
        "FIRE",
        "FISH",
        "FIVE",
        "FLAG",
        "FLAT",
        "FLOW",
        "FOLD",
        "FOOD",
        "FOOT",
        "FORK",
        "FORM",
        "FOUR",
        "FOWL",
        "FREE",
        "FROM",
        "FULL",
        "FUME",
        "GATE",
        "GERM",
        "GILL",
        "GIRL",
        "GIVE",
        "GOAT",
        "GOLD",
        "GOOD",
        "GRAM",
        "GRAY",
        "GREY",
        "GRIP",
        "HAIR",
        "HALF",
        "HAND",
        "HARD",
        "HATE",
        "HAVE",
        "HEAD",
        "HEAT",
        "HELP",
        "HERE",
        "HIGH",
        "HILL",
        "HIRE",
        "HISS",
        "HOLD",
        "HOLE",
        "HOME",
        "HOOF",
        "HOOK",
        "HOPE",
        "HORN",
        "HOST",
        "HOUR",
        "HUNT",
        "HURT",
        "IDEA",
        "INTO",
        "IRON",
        "JAZZ",
        "JERK",
        "JOIN",
        "JULY",
        "JUMP",
        "JUNE",
        "JURY",
        "KEEP",
        "KICK",
        "KIND",
        "KING",
        "KISS",
        "KNEE",
        "KNOT",
        "LACE",
        "LAKE",
        "LAME",
        "LAMP",
        "LAND",
        "LAST",
        "LATE",
        "LAVA",
        "LAZY",
        "LEAD",
        "LEAF",
        "LEFT",
        "LENS",
        "LESS",
        "LIFE",
        "LIFT",
        "LIKE",
        "LIME",
        "LINE",
        "LINK",
        "LIST",
        "LOAD",
        "LOAN",
        "LOCK",
        "LONG",
        "LOOK",
        "LOSS",
        "LOUD",
        "LOVE",
        "LUCK",
        "LUMP",
        "LUNG",
        "MAKE",
        "MALE",
        "MANY",
        "MARK",
        "MASS",
        "MAST",
        "MEAL",
        "MEAN",
        "MEAT",
        "MELT",
        "MEOW",
        "MESS",
        "MILK",
        "MILL",
        "MIND",
        "MINE",
        "MIST",
        "MOOD",
        "MOON",
        "MORE",
        "MOST",
        "MOVE",
        "MUCH",
        "NAIL",
        "NAME",
        "NAVY",
        "NEAR",
        "NEAT",
        "NECK",
        "NEED",
        "NEST",
        "NEWS",
        "NEXT",
        "NICE",
        "NINE",
        "NODE",
        "NOSE",
        "NOTE",
        "ONCE",
        "ONLY",
        "ONTO",
        "OPEN",
        "OVAL",
        "OVEN",
        "OVER",
        "PAGE",
        "PAIN",
        "PAIR",
        "PARK",
        "PART",
        "PAST",
        "PATH",
        "PIPE",
        "PLAN",
        "PLAY",
        "PLOW",
        "PLUG",
        "POOL",
        "POOR",
        "POST",
        "PULL",
        "PUMP",
        "PURE",
        "PURR",
        "PUSH",
        "RACE",
        "RAIL",
        "RAIN",
        "RATE",
        "REAL",
        "RENT",
        "REST",
        "RICE",
        "RICH",
        "RING",
        "RISE",
        "ROAD",
        "ROCK",
        "ROLL",
        "ROOF",
        "ROOM",
        "ROOT",
        "RUDE",
        "RULE",
        "RUST",
        "SAFE",
        "SAIL",
        "SALE",
        "SALT",
        "SAME",
        "SAND",
        "SEAL",
        "SEAT",
        "SEED",
        "SEEM",
        "SELF",
        "SEND",
        "SHIP",
        "SHOE",
        "SHOW",
        "SHUT",
        "SIDE",
        "SIGN",
        "SILK",
        "SILL",
        "SIZE",
        "SKIN",
        "SLIP",
        "SLOW",
        "SNOW",
        "SOAP",
        "SOCK",
        "SOFT",
        "SOIL",
        "SOME",
        "SONG",
        "SORT",
        "SOUP",
        "SPIT",
        "SPOT",
        "STAR",
        "STEM",
        "STEP",
        "STOP",
        "SUCH",
        "SWIM",
        "TAIL",
        "TAKE",
        "TALK",
        "TALL",
        "TAME",
        "TAXI",
        "TEAR",
        "TENT",
        "TERM",
        "TEST",
        "THAN",
        "THAT",
        "THEN",
        "THIN",
        "THIS",
        "TIDE",
        "TILL",
        "TIME",
        "TOWN",
        "TRAP",
        "TRAY",
        "TREE",
        "TRUE",
        "TUBE",
        "TUNE",
        "TURN",
        "TWIN",
        "UGLY",
        "UNDO",
        "UNIT",
        "UPON",
        "USED",
        "VERY",
        "VIEW",
        "VISA",
        "VOLT",
        "VOTE",
        "WALK",
        "WALL",
        "WARM",
        "WASH",
        "WAVE",
        "WEAK",
        "WEEK",
        "WELL",
        "WEST",
        "WHAT",
        "WHEN",
        "WHIP",
        "WIDE",
        "WIFE",
        "WILD",
        "WILL",
        "WIND",
        "WINE",
        "WING",
        "WIRE",
        "WISE",
        "WITH",
        "WOOD",
        "WOOL",
        "WORD",
        "WORK",
        "WORM",
        "YAWN",
        "YEAR",
        "ZINC",
    ],
    [
        "ABOUT",
        "ACTOR",
        "AFTER",
        "AGAIN",
        "AGENT",
        "ALONG",
        "AMONG",
        "ANGLE",
        "ANGRY",
        "ANKLE",
        "APPLE",
        "APRIL",
        "ASSET",
        "AWAKE",
        "BASED",
        "BASIN",
        "BEARD",
        "BERRY",
        "BIRTH",
        "BLACK",
        "BLADE",
        "BLAME",
        "BLOOD",
        "BOARD",
        "BRAIN",
        "BRAKE",
        "BRASS",
        "BRAVE",
        "BREAD",
        "BREAK",
        "BRICK",
        "BROWN",
        "BRUSH",
        "BUNCH",
        "BURST",
        "CAUSE",
        "CHAIN",
        "CHAIR",
        "CHALK",
        "CHEAP",
        "CHECK",
        "CHEST",
        "CHIEF",
        "CHILD",
        "CHINA",
        "CLAIM",
        "CLEAN",
        "CLEAR",
        "CLOCK",
        "CLOTH",
        "CLOUD",
        "COLOR",
        "COUGH",
        "COURT",
        "COVER",
        "CRACK",
        "CRIME",
        "CROSS",
        "CRUEL",
        "CRUSH",
        "CURVE",
        "DANCE",
        "DEATH",
        "DEBIT",
        "DIRTY",
        "DITCH",
        "DOUBT",
        "DRAIN",
        "DREAM",
        "DRESS",
        "DRIFT",
        "DRINK",
        "EARLY",
        "EARTH",
        "EIGHT",
        "EMPTY",
        "ENEMY",
        "EQUAL",
        "ERROR",
        "EVENT",
        "EVERY",
        "EXACT",
        "FALSE",
        "FAULT",
        "FEVER",
        "FIBER",
        "FIELD",
        "FIFTH",
        "FIFTY",
        "FIGHT",
        "FIRED",
        "FIRST",
        "FIXED",
        "FLAME",
        "FLASH",
        "FLASK",
        "FLESH",
        "FLINT",
        "FLOOD",
        "FLOOR",
        "FLOUR",
        "FOCUS",
        "FORCE",
        "FORTY",
        "FRAME",
        "FRESH",
        "FRONT",
        "FROST",
        "FRUIT",
        "FUNNY",
        "GLAND",
        "GLASS",
        "GLOVE",
        "GRAIN",
        "GRAND",
        "GRASS",
        "GREAT",
        "GREEN",
        "GRIEF",
        "GROSS",
        "GROUP",
        "GUARD",
        "GUESS",
        "GUIDE",
        "HABIT",
        "HAPPY",
        "HEART",
        "HEAVY",
        "HEDGE",
        "HINGE",
        "HONEY",
        "HORSE",
        "HOTEL",
        "HOUSE",
        "HUMAN",
        "HUMOR",
        "HURRY",
        "HYENA",
        "IMAGE",
        "INDEX",
        "INLET",
        "INNER",
        "INPUT",
        "JELLY",
        "JEWEL",
        "JOINT",
        "JUDGE",
        "JUICE",
        "KNIFE",
        "KNOCK",
        "LARGE",
        "LAUGH",
        "LAYER",
        "LEAST",
        "LEGAL",
        "LEVEL",
        "LEVER",
        "LIGHT",
        "LIMIT",
        "LINEN",
        "LITER",
        "LIVER",
        "LOCAL",
        "LOCUS",
        "LOOSE",
        "LUNCH",
        "MADAM",
        "MAGIC",
        "MANIA",
        "MARCH",
        "MATCH",
        "METAL",
        "METER",
        "MINER",
        "MIXED",
        "MODEL",
        "MONEY",
        "MONTH",
        "MORAL",
        "MOUTH",
        "MUSIC",
        "NASTY",
        "NERVE",
        "NIGHT",
        "NOISE",
        "NORTH",
        "NOTED",
        "NURSE",
        "OFFER",
        "OLIVE",
        "OPERA",
        "OPIUM",
        "ORDER",
        "ORGAN",
        "OTHER",
        "OUTER",
        "OWNER",
        "PAINT",
        "PAPER",
        "PARTY",
        "PASTE",
        "PEACE",
        "PEDAL",
        "PETAL",
        "PIANO",
        "PLACE",
        "PLAIN",
        "PLANE",
        "PLANT",
        "PLATE",
        "POINT",
        "POWER",
        "PRICE",
        "PRICK",
        "PRIME",
        "PRINT",
        "PROOF",
        "PROSE",
        "PROUD",
        "PUPIL",
        "QUACK",
        "QUEEN",
        "QUICK",
        "QUIET",
        "QUITE",
        "RADIO",
        "RANGE",
        "RATIO",
        "READY",
        "RIGHT",
        "RIVAL",
        "RIVER",
        "ROUGH",
        "ROUND",
        "ROYAL",
        "RULER",
        "SALAD",
        "SCALE",
        "SCARP",
        "SCREW",
        "SENSE",
        "SEPAL",
        "SERUM",
        "SEVEN",
        "SHADE",
        "SHAKE",
        "SHALE",
        "SHAME",
        "SHARE",
        "SHARP",
        "SHAVE",
        "SHEAR",
        "SHEEP",
        "SHEET",
        "SHELF",
        "SHELL",
        "SHIRT",
        "SHOCK",
        "SHORE",
        "SHORT",
        "SIGHT",
        "SINCE",
        "SKIRT",
        "SKULL",
        "SLATE",
        "SLEEP",
        "SLIDE",
        "SLOPE",
        "SMALL",
        "SMASH",
        "SMELL",
        "SMILE",
        "SMOKE",
        "SNAKE",
        "SOLID",
        "SORRY",
        "SOUND",
        "SOUTH",
        "SPACE",
        "SPADE",
        "SPARK",
        "SPOON",
        "SPORT",
        "STAGE",
        "STAIN",
        "STAIR",
        "STALK",
        "STAMP",
        "START",
        "STEAM",
        "STEEL",
        "STICK",
        "STIFF",
        "STILL",
        "STONE",
        "STORE",
        "STORM",
        "STORY",
        "STRAW",
        "STUDY",
        "SUGAR",
        "SWEET",
        "SWING",
        "TABLE",
        "TASTE",
        "THERE",
        "THICK",
        "THIEF",
        "THING",
        "THIRD",
        "THREE",
        "THUMB",
        "TIGHT",
        "TIRED",
        "TOAST",
        "TODAY",
        "TONGS",
        "TOOTH",
        "TOTAL",
        "TOUCH",
        "TOWEL",
        "TOWER",
        "TRADE",
        "TRAIN",
        "TRICK",
        "TRUCK",
        "TWICE",
        "TWIST",
        "UNDER",
        "VALUE",
        "VALVE",
        "VAPOR",
        "VERSE",
        "VODKA",
        "VOICE",
        "WASTE",
        "WATCH",
        "WATER",
        "WEDGE",
        "WHEEL",
        "WHERE",
        "WHICH",
        "WHILE",
        "WHITE",
        "WIDOW",
        "WOMAN",
        "WORLD",
        "WOUND",
        "WRECK",
        "WRIST",
        "WRONG",
        "YOUNG",
        "ZEBRA",
    ],
    [
        "ACROSS",
        "ACTING",
        "ACTIVE",
        "ADVICE",
        "AGENCY",
        "ALMOST",
        "ALWAYS",
        "AMOUNT",
        "ANCHOR",
        "ANIMAL",
        "ANSWER",
        "ANYHOW",
        "ANYONE",
        "ATTACK",
        "AUGUST",
        "BALLET",
        "BARREL",
        "BASING",
        "BASKET",
        "BEAKER",
        "BECOME",
        "BEFORE",
        "BEHIND",
        "BELIEF",
        "BITTER",
        "BOTTLE",
        "BOTTOM",
        "BRANCH",
        "BREAST",
        "BREATH",
        "BRIDGE",
        "BRIGHT",
        "BROKEN",
        "BROKER",
        "BUBBLE",
        "BUCKET",
        "BUDGET",
        "BURIAL",
        "BURNED",
        "BURNER",
        "BUTTER",
        "BUTTON",
        "CAMERA",
        "CANVAS",
        "CARPET",
        "CARTER",
        "CAVITY",
        "CHANCE",
        "CHANGE",
        "CHARGE",
        "CHEESE",
        "CHOICE",
        "CHORUS",
        "CHURCH",
        "CIRCLE",
        "CIRCUS",
        "CITRON",
        "CLEVER",
        "CLIENT",
        "COFFEE",
        "COGNAC",
        "COLLAR",
        "COLONY",
        "COLUMN",
        "COMMON",
        "COOKED",
        "COOKER",
        "COPPER",
        "CORNER",
        "COTTON",
        "CREDIT",
        "CRYING",
        "DAMAGE",
        "DANCER",
        "DANGER",
        "DEFECT",
        "DEGREE",
        "DEMAND",
        "DESERT",
        "DESIGN",
        "DESIRE",
        "DETAIL",
        "DINNER",
        "DIRECT",
        "DRAWER",
        "DRIVER",
        "DUSTER",
        "EFFECT",
        "EFFORT",
        "EITHER",
        "ELEVEN",
        "EMPIRE",
        "ENGINE",
        "ENOUGH",
        "EXPERT",
        "EXPORT",
        "FACTOR",
        "FAMILY",
        "FAMOUS",
        "FARMER",
        "FATHER",
        "FEEBLE",
        "FEMALE",
        "FIGURE",
        "FINGER",
        "FIRING",
        "FISHER",
        "FLIGHT",
        "FLOWER",
        "FOLDER",
        "FOURTH",
        "FRIDAY",
        "FRIEND",
        "FROZEN",
        "FUNNEL",
        "FUSION",
        "FUTURE",
        "GARDEN",
        "GRAVEL",
        "GREASE",
        "GROOVE",
        "GROUND",
        "GROWTH",
        "HAMMER",
        "HANDLE",
        "HANGER",
        "HARBOR",
        "HEATED",
        "HEATER",
        "HOLLOW",
        "HONEST",
        "IMPORT",
        "INCOME",
        "INLAND",
        "INSECT",
        "INSIDE",
        "INSTEP",
        "ISLAND",
        "ITSELF",
        "JOINER",
        "KEEPER",
        "KENNEL",
        "KETTLE",
        "KIDNEY",
        "LAWYER",
        "LENGTH",
        "LESSON",
        "LETTER",
        "LIQUID",
        "LITTLE",
        "LIVING",
        "LOCKER",
        "MANNER",
        "MARBLE",
        "MARGIN",
        "MARKED",
        "MARKET",
        "MATURE",
        "MEDIUM",
        "MEMBER",
        "MEMORY",
        "MIDDLE",
        "MINUTE",
        "MODERN",
        "MODEST",
        "MONDAY",
        "MONKEY",
        "MOTHER",
        "MOTION",
        "MURDER",
        "MUSCLE",
        "MUSEUM",
        "MYSELF",
        "NARROW",
        "NATION",
        "NATURE",
        "NEARER",
        "NEEDLE",
        "NICKEL",
        "NOBODY",
        "NORMAL",
        "NUMBER",
        "OFFICE",
        "OMELET",
        "ORANGE",
        "ORIGIN",
        "OUTCRY",
        "OUTLAW",
        "OUTLET",
        "OUTPUT",
        "OVERDO",
        "PARCEL",
        "PARENT",
        "PATENT",
        "PENCIL",
        "PEOPLE",
        "PERSON",
        "PISTON",
        "PLAYED",
        "PLEASE",
        "PLOUGH",
        "POCKET",
        "POETRY",
        "POISON",
        "POLICE",
        "POLISH",
        "POLLEN",
        "PORTER",
        "POTASH",
        "POTATO",
        "POTTER",
        "POWDER",
        "PRAISE",
        "PRAYER",
        "PRIEST",
        "PRINCE",
        "PRISON",
        "PROFIT",
        "PUBLIC",
        "PULLEY",
        "RADIUM",
        "READER",
        "REASON",
        "RECORD",
        "REFLUX",
        "REGRET",
        "REMARK",
        "REMEDY",
        "REPAIR",
        "RESULT",
        "RETAIL",
        "REWARD",
        "RHYTHM",
        "ROLLER",
        "RUBBER",
        "SAILOR",
        "SAMPLE",
        "SAUCER",
        "SAVING",
        "SCHIST",
        "SCHOOL",
        "SCREEN",
        "SEAMAN",
        "SEARCH",
        "SECOND",
        "SECRET",
        "SHADOW",
        "SILVER",
        "SIMPLE",
        "SISTER",
        "SLEEVE",
        "SMOOTH",
        "SNEEZE",
        "SOCIAL",
        "SPIRIT",
        "SPLASH",
        "SPONGE",
        "SPRING",
        "SQUARE",
        "STABLE",
        "STAMEN",
        "STEADY",
        "STICKY",
        "STITCH",
        "STRAIN",
        "STREAM",
        "STREET",
        "STRESS",
        "STRIKE",
        "STRING",
        "STRONG",
        "SUCKER",
        "SUDDEN",
        "SUMMER",
        "SUNDAY",
        "SUPPLY",
        "SWITCH",
        "SYSTEM",
        "TAILOR",
        "THEORY",
        "THIRTY",
        "THORAX",
        "THOUGH",
        "THREAD",
        "THREAT",
        "THROAT",
        "THRUST",
        "TICKET",
        "TISSUE",
        "TONGUE",
        "TRADER",
        "TRAVEL",
        "TUNNEL",
        "TWELVE",
        "TWENTY",
        "TYPIST",
        "UPKEEP",
        "UPLIFT",
        "UPTAKE",
        "VALLEY",
        "VESSEL",
        "VICTIM",
        "VIOLIN",
        "VOLUME",
        "VORTEX",
        "WAITER",
        "WASTED",
        "WEIGHT",
        "WHISKY",
        "WINDOW",
        "WINTER",
        "WITHIN",
        "WORKER",
        "WRITER",
        "YELLOW",
    ],
    [
        "ABSENCE",
        "ACCOUNT",
        "ADDRESS",
        "AGAINST",
        "ALCOHOL",
        "ALGEBRA",
        "AMMONIA",
        "ANOTHER",
        "ANYBODY",
        "ATTEMPT",
        "AUTOBUS",
        "AVERAGE",
        "AWKWARD",
        "BALANCE",
        "BALCONY",
        "BECAUSE",
        "BEDROOM",
        "BEESWAX",
        "BETWEEN",
        "BIOLOGY",
        "BLANKET",
        "BOILING",
        "BROTHER",
        "BUILDER",
        "BURNING",
        "CAPITAL",
        "CATARRH",
        "CERTAIN",
        "CHEMIST",
        "CHIMNEY",
        "CIRCUIT",
        "CLIMBER",
        "COLLEGE",
        "COMBINE",
        "COMFORT",
        "COMPANY",
        "COMPLEX",
        "CONCEPT",
        "CONTOUR",
        "CONTROL",
        "COOKING",
        "COUNTRY",
        "CREEPER",
        "CUNNING",
        "CURRENT",
        "CURTAIN",
        "CUSHION",
        "CUSTOMS",
        "DAMPING",
        "DANCING",
        "DENSITY",
        "DEPOSIT",
        "DISEASE",
        "DISGUST",
        "DISLIKE",
        "DIVISOR",
        "DIVORCE",
        "DRIVING",
        "DROPPED",
        "DROPPER",
        "EARRING",
        "ECONOMY",
        "ELASTIC",
        "EMBASSY",
        "EROSION",
        "EVENING",
        "EXAMPLE",
        "EYEBALL",
        "EYEBROW",
        "EYELASH",
        "FAILURE",
        "FEATHER",
        "FEELING",
        "FERMENT",
        "FERTILE",
        "FICTION",
        "FIFTEEN",
        "FIREARM",
        "FIREFLY",
        "FIREMAN",
        "FOOLISH",
        "FOOTMAN",
        "FOREIGN",
        "FORWARD",
        "FURNACE",
        "GENERAL",
        "GEOLOGY",
        "GLACIER",
        "GRATING",
        "GROCERY",
        "GUNBOAT",
        "HANGING",
        "HARMONY",
        "HEADWAY",
        "HEALTHY",
        "HEARING",
        "HEATING",
        "HIGHWAY",
        "HIMSELF",
        "HISTORY",
        "HOLIDAY",
        "HOWEVER",
        "HUNDRED",
        "HUSBAND",
        "HYGIENE",
        "IGNEOUS",
        "IMPULSE",
        "INDOORS",
        "INFERNO",
        "INTEGER",
        "INVERSE",
        "JANUARY",
        "JEALOUS",
        "JEWELER",
        "JOURNEY",
        "JUSTICE",
        "KITCHEN",
        "LEARNER",
        "LEATHER",
        "LECTURE",
        "LIBRARY",
        "LICENSE",
        "LIQUEUR",
        "LOCKING",
        "MACHINE",
        "MALARIA",
        "MANAGER",
        "MANHOLE",
        "MARRIED",
        "MEANING",
        "MEASURE",
        "MEDICAL",
        "MEETING",
        "MESSAGE",
        "MILLION",
        "MINERAL",
        "MIXTURE",
        "MORNING",
        "NATURAL",
        "NEGLECT",
        "NETWORK",
        "NEUTRON",
        "NOSTRIL",
        "NOTHING",
        "NOWHERE",
        "NUCLEUS",
        "OCTOBER",
        "OFFICER",
        "ONESELF",
        "OPINION",
        "OUTCOME",
        "OUTCROP",
        "OUTDOOR",
        "OUTLIER",
        "OUTLINE",
        "OUTLOOK",
        "OUTSIDE",
        "OVERALL",
        "OVERLAP",
        "OVERUSE",
        "PACKING",
        "PAINTER",
        "PAJAMAS",
        "PARTING",
        "PARTNER",
        "PASSAGE",
        "PAYMENT",
        "PENGUIN",
        "PENSION",
        "PERFECT",
        "PHYSICS",
        "PICTURE",
        "PLASTER",
        "PLAYING",
        "PLEASED",
        "POINTER",
        "POSTMAN",
        "PRESENT",
        "PRINTER",
        "PRIVATE",
        "PROCESS",
        "PRODUCE",
        "PRODUCT",
        "PROGRAM",
        "PROMISE",
        "PROTEST",
        "PURPOSE",
        "PYRAMID",
        "QUALITY",
        "QUARTER",
        "QUININE",
        "RAINING",
        "READING",
        "REAGENT",
        "RECEIPT",
        "REGULAR",
        "REQUEST",
        "RESIDUE",
        "RESPECT",
        "REVENGE",
        "RUNAWAY",
        "SARDINE",
        "SCIENCE",
        "SCRATCH",
        "SECTION",
        "SELFISH",
        "SERIOUS",
        "SERVANT",
        "SERVICE",
        "SHOCKED",
        "SIXTEEN",
        "SNOWING",
        "SOCIETY",
        "SOLDIER",
        "SOLVENT",
        "SOMEDAY",
        "SOMEHOW",
        "SOMEONE",
        "SPECIAL",
        "STATION",
        "STEAMER",
        "STOMACH",
        "STOPPER",
        "STRANGE",
        "STRETCH",
        "SUBJECT",
        "SUCCESS",
        "SUNBURN",
        "SUPPORT",
        "SURFACE",
        "SURGEON",
        "TALKING",
        "TAPIOCA",
        "TEACHER",
        "TERRACE",
        "TEXTURE",
        "THEATER",
        "THIMBLE",
        "THOUGHT",
        "THROUGH",
        "THUNDER",
        "TOBACCO",
        "TONIGHT",
        "TORPEDO",
        "TRAFFIC",
        "TRAGEDY",
        "TRAINER",
        "TROUBLE",
        "TUESDAY",
        "TURBINE",
        "TURNING",
        "UNDERGO",
        "UNKNOWN",
        "UPRIGHT",
        "VALENCY",
        "VANILLA",
        "VICTORY",
        "VIOLENT",
        "VITAMIN",
        "WAITING",
        "WEATHER",
        "WEEKEND",
        "WELCOME",
        "WHEREAS",
        "WHEREBY",
        "WHETHER",
        "WHISTLE",
        "WHOEVER",
        "WITHOUT",
        "WORKING",
        "WRITING",
        "ZOOLOGY",
    ],
    [
        "ACCIDENT",
        "ADDITION",
        "ADJACENT",
        "AIRPLANE",
        "AMBITION",
        "ANYTHING",
        "ANYWHERE",
        "APPROVAL",
        "ARGUMENT",
        "ASBESTOS",
        "BACKBONE",
        "BANKRUPT",
        "BEHAVIOR",
        "BIRTHDAY",
        "BLUEBELL",
        "BUILDING",
        "BUOYANCY",
        "BUSINESS",
        "CALENDAR",
        "CAPACITY",
        "CAREFREE",
        "CARRIAGE",
        "CEREMONY",
        "CHEMICAL",
        "CLEAVAGE",
        "CLOTHIER",
        "CLOTHING",
        "COCKTAIL",
        "COMPLETE",
        "COMPOUND",
        "CONCRETE",
        "CONSTANT",
        "CONSUMER",
        "CUPBOARD",
        "DAUGHTER",
        "DAYLIGHT",
        "DECEMBER",
        "DECISION",
        "DECREASE",
        "DELICATE",
        "DELIVERY",
        "DESIGNER",
        "DIAMETER",
        "DILUTION",
        "DISCOUNT",
        "DISGRACE",
        "DISTANCE",
        "DIVISION",
        "DOMINION",
        "DOWNFALL",
        "DREADFUL",
        "DRESSING",
        "DYNAMITE",
        "ELECTRIC",
        "EMPLOYER",
        "ENGINEER",
        "ENVELOPE",
        "EQUATION",
        "ERUPTION",
        "EVERYDAY",
        "EVERYONE",
        "EXCHANGE",
        "EXERCISE",
        "FEBRUARY",
        "FIREWORK",
        "FOOTBALL",
        "FOOTNOTE",
        "FOOTSTEP",
        "FORECAST",
        "FOREHEAD",
        "FOURTEEN",
        "FRACTION",
        "FRACTURE",
        "FREQUENT",
        "FRICTION",
        "GARDENER",
        "GASWORKS",
        "GEOMETRY",
        "GLYCERIN",
        "GOLDFISH",
        "GRATEFUL",
        "GUNMETAL",
        "HANDBOOK",
        "HEADLAND",
        "HEREWITH",
        "HOSPITAL",
        "HYSTERIA",
        "IMPERIAL",
        "IMPURITY",
        "INASMUCH",
        "INCREASE",
        "INDUSTRY",
        "INFINITY",
        "INNOCENT",
        "INTEREST",
        "LANDMARK",
        "LANDSLIP",
        "LANGUAGE",
        "LATITUDE",
        "LAUGHING",
        "LEARNING",
        "MACARONI",
        "MAGNETIC",
        "MARRIAGE",
        "MATERIAL",
        "MATTRESS",
        "MEDICINE",
        "MILITARY",
        "MOMENTUM",
        "MONOPOLY",
        "MOUNTAIN",
        "MULTIPLE",
        "NEIGHBOR",
        "NICOTINE",
        "NOVEMBER",
        "OBEDIENT",
        "ONCOMING",
        "ONLOOKER",
        "OPPOSITE",
        "ORGANISM",
        "ORNAMENT",
        "OUTBURST",
        "OUTGOING",
        "OUTHOUSE",
        "OVERCOAT",
        "OVERCOME",
        "OVERFULL",
        "OVERHEAD",
        "OVERLAND",
        "OVERLEAF",
        "OVERLOUD",
        "OVERSEAS",
        "OVERSEER",
        "OVERSHOE",
        "OVERTAKE",
        "OVERTIME",
        "PAINTING",
        "PARADISE",
        "PARAFFIN",
        "PARALLEL",
        "PARTICLE",
        "PASSPORT",
        "PATIENCE",
        "PENDULUM",
        "PHYSICAL",
        "PLATINUM",
        "PLEASURE",
        "POINTING",
        "POSITION",
        "POSSIBLE",
        "POSTMARK",
        "PRACTICE",
        "PRESSURE",
        "PRINCESS",
        "PRISONER",
        "PROBABLE",
        "PRODUCER",
        "PROGRESS",
        "PROPERTY",
        "PURCHASE",
        "QUANTITY",
        "QUESTION",
        "QUOTIENT",
        "REACTION",
        "RECEIVER",
        "RELATION",
        "RELATIVE",
        "RELIGION",
        "RIGIDITY",
        "ROTATION",
        "SATURDAY",
        "SCISSORS",
        "SECURITY",
        "SENTENCE",
        "SEPARATE",
        "SHOCKING",
        "SHOULDER",
        "SIDEWALK",
        "SOLUTION",
        "SOMEBODY",
        "SOMETIME",
        "SOMEWHAT",
        "SPECIMEN",
        "STIMULUS",
        "STOCKING",
        "STOPPING",
        "STRAIGHT",
        "STRENGTH",
        "SUCHLIKE",
        "SUNLIGHT",
        "SUNSHADE",
        "SURPRISE",
        "SWELLING",
        "TEACHING",
        "TELEGRAM",
        "TENDENCY",
        "THIRTEEN",
        "THOUSAND",
        "THURSDAY",
        "TOGETHER",
        "TOMORROW",
        "TOUCHING",
        "TRAINING",
        "TRIANGLE",
        "TROUBLED",
        "TROUSERS",
        "UMBRELLA",
        "UNIVERSE",
        "VARIABLE",
        "VASCULAR",
        "VELOCITY",
        "WHATEVER",
        "WHENEVER",
        "WHEREVER",
        "WINDPIPE",
        "WOODWORK",
        "YEARBOOK",
        "YOURSELF",
    ],
    [
        "ACCESSORY",
        "ADVENTURE",
        "AGREEMENT",
        "ALLOWANCE",
        "ALUMINIUM",
        "AMPLITUDE",
        "AMUSEMENT",
        "APPARATUS",
        "APPENDAGE",
        "ARBITRARY",
        "ASSISTANT",
        "ATTENTION",
        "AUTHORITY",
        "AUTOMATIC",
        "BACKWOODS",
        "BEAUTIFUL",
        "BLACKBIRD",
        "BREAKFAST",
        "BRUSHWOOD",
        "BUTTERCUP",
        "CARDBOARD",
        "CARETAKER",
        "CARTILAGE",
        "CHAMPAGNE",
        "CHARACTER",
        "CHAUFFEUR",
        "CHEMISTRY",
        "CHOCOLATE",
        "CIGARETTE",
        "CLOCKWORK",
        "COLLISION",
        "COMMITTEE",
        "COMPLAINT",
        "COMPONENT",
        "CONDITION",
        "CONDUCTOR",
        "CONGRUENT",
        "CONSCIOUS",
        "COPYRIGHT",
        "CORROSION",
        "DEFLATION",
        "DEPENDENT",
        "DIFFERENT",
        "DIGESTION",
        "DIRECTION",
        "DISCHARGE",
        "DISCOVERY",
        "EARTHWORK",
        "EDUCATION",
        "EVERGREEN",
        "EVERYBODY",
        "EXISTENCE",
        "EXPANSION",
        "EXPLOSION",
        "FASTENING",
        "FINANCIAL",
        "FIREPLACE",
        "FISHERMAN",
        "FOLIATION",
        "FOOTPRINT",
        "FURNITURE",
        "GEOGRAPHY",
        "GOODNIGHT",
        "GUARANTEE",
        "GUNPOWDER",
        "HEADDRESS",
        "HEADSTONE",
        "HEREAFTER",
        "HIGHLANDS",
        "HORSEPLAY",
        "HOURGLASS",
        "HOUSEBOAT",
        "IMPORTANT",
        "INCLUSION",
        "INFLATION",
        "INFLUENZA",
        "INSULATOR",
        "INSURANCE",
        "INTERCEPT",
        "INTRUSION",
        "INVENTION",
        "KNOWLEDGE",
        "LIABILITY",
        "LIMESTONE",
        "LONGITUDE",
        "MAGNITUDE",
        "MOUSTACHE",
        "NECESSARY",
        "NEWSPAPER",
        "NUMERATOR",
        "OFFSPRING",
        "OPERATION",
        "ORCHESTRA",
        "OUTSKIRTS",
        "OVERTAXED",
        "OXIDATION",
        "PARAGRAPH",
        "PETROLEUM",
        "PLAYTHING",
        "POLICEMAN",
        "POLITICAL",
        "PORCELAIN",
        "PRESIDENT",
        "RADIATION",
        "RECTANGLE",
        "RECURRING",
        "REFERENCE",
        "REPULSION",
        "SATURATED",
        "SECRETARY",
        "SECRETION",
        "SELECTION",
        "SEPTEMBER",
        "SHORTHAND",
        "SIDEBOARD",
        "SOMETHING",
        "SOMEWHERE",
        "STATEMENT",
        "STRETCHER",
        "STRUCTURE",
        "SUBSTANCE",
        "TELEPHONE",
        "THICKNESS",
        "TRADESMAN",
        "TRANSPORT",
        "TREATMENT",
        "TROUBLING",
        "UNDERTAKE",
        "VEGETABLE",
        "VESTIGIAL",
        "VIEWPOINT",
        "WATERFALL",
        "WEDNESDAY",
        "WHICHEVER",
        "WHITEWASH",
        "WHOLESALE",
        "WORKHOUSE",
        "YESTERDAY",
        "ZOOKEEPER",
    ],
];


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
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cheat": () => (/* binding */ cheat)
/* harmony export */ });
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button */ "./src/button.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./global */ "./src/global.ts");
/* harmony import */ var _local_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./local_storage */ "./src/local_storage.ts");
/* harmony import */ var _text_display__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./text_display */ "./src/text_display.ts");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./util */ "./src/util.ts");
/* harmony import */ var _words__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./words */ "./src/words.ts");
/* harmony import */ var _dictionary_view__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dictionary_view */ "./src/dictionary_view.ts");
// TODO:
// Auto-save every 10 seconds
// Prevent catchup lag after tab-out
// Auto-calculate true average bananas per word
// recruit multiple monkeys at a time (10x, 100x)
// use a blinking underline animation for the next letter on
//    any text display - like an old command line
// visually indicate the number of letters your keyboard can fit
// optimize the display of many text displays at once
// good, but small-ish word list: https://simple.wikipedia.org/wiki/Wikipedia:Basic_English_combined_wordlist
// source: https://en.wiktionary.org/wiki/Wiktionary:Frequency_lists#Top_English_words_lists
// make it so you can't pull two of the same words
// start the game with a random word
// display the player's dictionary to them somehow
// last-second counters of one letter, two letter, etc. matches
// be able to turn off one letter match text
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
// 3k is about the limit right now
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
var buttonColor = (0,_util__WEBPACK_IMPORTED_MODULE_4__.rgbString)(200, 200, 255);
var buttonHoverColor = (0,_util__WEBPACK_IMPORTED_MODULE_4__.rgbString)(180, 180, 230);
var eraseButtonColor = (0,_util__WEBPACK_IMPORTED_MODULE_4__.rgbString)(255, 50, 50);
var eraseButtonHoverColor = (0,_util__WEBPACK_IMPORTED_MODULE_4__.rgbString)(225, 20, 20);
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
document.body.appendChild(_global__WEBPACK_IMPORTED_MODULE_1__.canvas);
var recruitPrice = 10 * (_global__WEBPACK_IMPORTED_MODULE_1__.g.monkeys + 1) * (_global__WEBPACK_IMPORTED_MODULE_1__.g.monkeys + 1);
var button1 = new _button__WEBPACK_IMPORTED_MODULE_0__.Button(100, 100, 80, 30, "Recruit Monkey " + recruitPrice, buttonColor, buttonHoverColor, function () {
    _global__WEBPACK_IMPORTED_MODULE_1__.g.monkeys += 1;
    new _text_display__WEBPACK_IMPORTED_MODULE_3__.TextDisplay();
    _global__WEBPACK_IMPORTED_MODULE_1__.g.lettersPerSecond = 1;
    _global__WEBPACK_IMPORTED_MODULE_1__.g.bananas -= recruitPrice;
    recruitPrice = 10 * (_global__WEBPACK_IMPORTED_MODULE_1__.g.monkeys + 1) * (_global__WEBPACK_IMPORTED_MODULE_1__.g.monkeys + 1);
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
var button2 = new _button__WEBPACK_IMPORTED_MODULE_0__.Button(100, 480, 80, 30, "Gather Bananas", buttonColor, buttonHoverColor, function (currentTimeMillis) {
    if (currentTimeMillis !== undefined
        && (currentTimeMillis - lastClickedTimeMillis) < 50) {
        return;
    }
    _global__WEBPACK_IMPORTED_MODULE_1__.g.bananas += 1;
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
var wordButtons = [];
var newWordPrice = 1;
var newWordButton = new _button__WEBPACK_IMPORTED_MODULE_0__.Button(350, 480, 80, 30, "Buy New Word " + newWordPrice, buttonColor, buttonHoverColor, function () {
    _global__WEBPACK_IMPORTED_MODULE_1__.g.bananas -= newWordPrice;
    newWordPrice = (_global__WEBPACK_IMPORTED_MODULE_1__.playerDictionary.length + 1) * (_global__WEBPACK_IMPORTED_MODULE_1__.playerDictionary.length + 1);
    newWordButton.text = "Buy New Word " + newWordPrice;
    var _loop_2 = function (i) {
        var wordIndex = (0,_util__WEBPACK_IMPORTED_MODULE_4__.getRandomInt)(0, _words__WEBPACK_IMPORTED_MODULE_5__.words[0].length);
        var word = _words__WEBPACK_IMPORTED_MODULE_5__.words[0][wordIndex];
        var wordButton = new _button__WEBPACK_IMPORTED_MODULE_0__.Button(440, 445 + 35 * i, 80, 30, word, buttonColor, buttonHoverColor, function () {
            for (var j = 0; j < wordButtons.length; j++) {
                wordButtons[j].delete();
            }
            wordButtons = [];
            _global__WEBPACK_IMPORTED_MODULE_1__.playerDictionary.push(word.split(""));
            _words__WEBPACK_IMPORTED_MODULE_5__.words[0].splice(wordIndex, 1);
        }, function () { });
        wordButtons.push(wordButton);
    };
    for (var i = 0; i < 3; i++) {
        _loop_2(i);
    }
}, function () {
    if (newWordPrice > _global__WEBPACK_IMPORTED_MODULE_1__.g.bananas
        || wordButtons.length > 0) {
        newWordButton.isDisabled = true;
    }
    else {
        newWordButton.isDisabled = false;
    }
});
var dictionaryButtonState = "Show";
var dictionaryView;
var showDictionaryButton = new _button__WEBPACK_IMPORTED_MODULE_0__.Button(540, 480, 80, 30, dictionaryButtonState + " Dictionary", buttonColor, buttonHoverColor, function () {
    if (dictionaryButtonState === "Show") {
        dictionaryButtonState = "Hide";
        dictionaryView = new _dictionary_view__WEBPACK_IMPORTED_MODULE_6__.DictionaryView(540, 480);
    }
    else {
        dictionaryButtonState = "Show";
        dictionaryView.delete();
    }
    showDictionaryButton.text = dictionaryButtonState + " Dictionary";
}, function () { });
// Comment out the upgrade buttons for now
// let upgradeButtons: Button[] = [];
// createUpgradeButtons();
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
    for (var i = 0; i < _global__WEBPACK_IMPORTED_MODULE_1__.updateables.length; i++) {
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
    _global__WEBPACK_IMPORTED_MODULE_1__.ctx.textAlign = "right";
    _global__WEBPACK_IMPORTED_MODULE_1__.ctx.fillText("Keyboard Keys:", 160, 450);
    _global__WEBPACK_IMPORTED_MODULE_1__.ctx.restore();
    for (var i = 0; i < _global__WEBPACK_IMPORTED_MODULE_1__.drawables.length; i++) {
        _global__WEBPACK_IMPORTED_MODULE_1__.drawables[i].draw(currentTimeMillis);
    }
    for (var i = 0; i < _global__WEBPACK_IMPORTED_MODULE_1__.foregroundDrawables.length; i++) {
        _global__WEBPACK_IMPORTED_MODULE_1__.foregroundDrawables[i].draw(currentTimeMillis);
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
        return number + " banana last second";
    }
    else {
        return number + " bananas last second";
    }
}
function sorted(array, compareFn) {
    return array.slice().sort(compareFn);
}
function roundToNPlaces(x, numPlaces) {
    var scale = Math.pow(10, numPlaces);
    return Math.round(x * scale) / scale;
}
function cheat() {
    _global__WEBPACK_IMPORTED_MODULE_1__.g.bananas = 1000000000;
}

})();

exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7S0FDUjtJQUNEO1FBQ0ksTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07S0FDVDtJQUNEO1FBQ0ksT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87S0FDVjtJQUNEO1FBQ0ksUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO0tBQ1g7SUFDRDtRQUNJLFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO0tBQ1o7SUFDRDtRQUNJLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO0tBQ2I7SUFDRDtRQUNJLFdBQVc7UUFDWCxXQUFXO1FBQ1gsV0FBVztRQUNYLFdBQVc7UUFDWCxXQUFXO1FBQ1gsV0FBVztRQUNYLFdBQVc7UUFDWCxXQUFXO1FBQ1gsV0FBVztRQUNYLFdBQVc7UUFDWCxXQUFXO1FBQ1gsV0FBVztRQUNYLFdBQVc7UUFDWCxXQUFXO1FBQ1gsV0FBVztRQUNYLFdBQVc7UUFDWCxXQUFXO1FBQ1gsV0FBVztRQUNYLFdBQVc7UUFDWCxXQUFXO1FBQ1gsV0FBVztRQUNYLFdBQVc7UUFDWCxXQUFXO1FBQ1gsV0FBVztRQUNYLFdBQVc7UUFDWCxXQUFXO1FBQ1gsV0FBVztRQUNYLFdBQVc7UUFDWCxXQUFXO1FBQ1gsV0FBVztRQUNYLFdBQVc7UUFDWCxXQUFXO1FBQ1gsV0FBVztRQUNYLFdBQVc7UUFDWCxXQUFXO1FBQ1gsV0FBVztRQUNYLFdBQVc7UUFDWCxXQUFXO1FBQ1gsV0FBVztRQUNYLFdBQVc7UUFDWCxXQUFXO1FBQ1gsV0FBVztRQUNYLFdBQVc7UUFDWCxXQUFXO1FBQ1gsV0FBVztRQUNYLFdBQVc7UUFDWCxXQUFXO1FBQ1gsV0FBVztRQUNYLFdBQVc7UUFDWCxXQUFXO1FBQ1gsV0FBVztRQUNYLFdBQVc7UUFDWCxXQUFXO1FBQ1gsV0FBVztRQUNYLFdBQVc7UUFDWCxXQUFXO1FBQ1gsV0FBVztRQUNYLFdBQVc7UUFDWCxXQUFXO1FBQ1gsV0FBVztRQUNYLFdBQVc7UUFDWCxXQUFXO1FBQ1gsV0FBVztRQUNYLFdBQVc7UUFDWCxXQUFXO1FBQ1gsV0FBVztRQUNYLFdBQVc7UUFDWCxXQUFXO1FBQ1gsV0FBVztRQUNYLFdBQVc7UUFDWCxXQUFXO1FBQ1gsV0FBVztRQUNYLFdBQVc7UUFDWCxXQUFXO1FBQ1gsV0FBVztRQUNYLFdBQVc7UUFDWCxXQUFXO1FBQ1gsV0FBVztRQUNYLFdBQVc7UUFDWCxXQUFXO1FBQ1gsV0FBVztRQUNYLFdBQVc7UUFDWCxXQUFXO1FBQ1gsV0FBVztRQUNYLFdBQVc7UUFDWCxXQUFXO1FBQ1gsV0FBVztRQUNYLFdBQVc7UUFDWCxXQUFXO1FBQ1gsV0FBVztRQUNYLFdBQVc7UUFDWCxXQUFXO1FBQ1gsV0FBVztRQUNYLFdBQVc7UUFDWCxXQUFXO1FBQ1gsV0FBVztRQUNYLFdBQVc7UUFDWCxXQUFXO1FBQ1gsV0FBVztRQUNYLFdBQVc7UUFDWCxXQUFXO1FBQ1gsV0FBVztRQUNYLFdBQVc7UUFDWCxXQUFXO1FBQ1gsV0FBVztRQUNYLFdBQVc7UUFDWCxXQUFXO1FBQ1gsV0FBVztRQUNYLFdBQVc7UUFDWCxXQUFXO1FBQ1gsV0FBVztRQUNYLFdBQVc7UUFDWCxXQUFXO1FBQ1gsV0FBVztRQUNYLFdBQVc7UUFDWCxXQUFXO1FBQ1gsV0FBVztRQUNYLFdBQVc7UUFDWCxXQUFXO1FBQ1gsV0FBVztRQUNYLFdBQVc7UUFDWCxXQUFXO1FBQ1gsV0FBVztRQUNYLFdBQVc7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QU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFDO0FBQ3pDLENBQUM7QUFFTSxTQUFTLEtBQUs7SUFDakIsOENBQVMsR0FBRyxVQUFVLENBQUM7QUFDM0IsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4cG9ydHMvLi9zcmMvYnV0dG9uLnRzIiwid2VicGFjazovL2V4cG9ydHMvLi9zcmMvZGljdGlvbmFyeV92aWV3LnRzIiwid2VicGFjazovL2V4cG9ydHMvLi9zcmMvZ2xvYmFsLnRzIiwid2VicGFjazovL2V4cG9ydHMvLi9zcmMvbG9jYWxfc3RvcmFnZS50cyIsIndlYnBhY2s6Ly9leHBvcnRzLy4vc3JjL3NhdmVfZmlsZS50cyIsIndlYnBhY2s6Ly9leHBvcnRzLy4vc3JjL3RleHRfZGlzcGxheS50cyIsIndlYnBhY2s6Ly9leHBvcnRzLy4vc3JjL3V0aWwudHMiLCJ3ZWJwYWNrOi8vZXhwb3J0cy8uL3NyYy93b3JkX3BhcnRpY2xlLnRzIiwid2VicGFjazovL2V4cG9ydHMvLi9zcmMvd29yZHMudHMiLCJ3ZWJwYWNrOi8vZXhwb3J0cy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9leHBvcnRzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9leHBvcnRzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZXhwb3J0cy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2V4cG9ydHMvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29sbGlkZWFibGVzLCBjdHgsIGRyYXdhYmxlcywgZywgdXBkYXRlYWJsZXMgfSBmcm9tIFwiLi9nbG9iYWxcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBCdXR0b24ge1xyXG4gICAgcHVibGljIGlkOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgdG9wTGVmdFg6IG51bWJlcjtcclxuICAgIHB1YmxpYyB0b3BMZWZ0WTogbnVtYmVyO1xyXG4gICAgcHVibGljIHdpZHRoOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgaGVpZ2h0OiBudW1iZXI7XHJcbiAgICBwdWJsaWMgYm90dG9tUmlnaHRYOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgYm90dG9tUmlnaHRZOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgdGV4dDogc3RyaW5nO1xyXG4gICAgcHVibGljIGNvbG9yOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgaG92ZXJlZENvbG9yOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgZGlzYWJsZWRDb2xvcjogc3RyaW5nID0gXCJncmF5XCI7XHJcbiAgICBwdWJsaWMgaXNIb3ZlcmVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwdWJsaWMgaXNEaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHVibGljIGlzTW91c2VEb3duZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHB1YmxpYyBvbkNsaWNrOiAoY3VycmVudFRpbWVNaWxsaXM/OiBudW1iZXIpID0+IHZvaWQ7XHJcbiAgICBwdWJsaWMgdXBkYXRlOiAoKSA9PiB2b2lkO1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihcclxuICAgICAgICB0b3BMZWZ0WDogbnVtYmVyLFxyXG4gICAgICAgIHRvcExlZnRZOiBudW1iZXIsXHJcbiAgICAgICAgd2lkdGg6IG51bWJlcixcclxuICAgICAgICBoZWlnaHQ6IG51bWJlcixcclxuICAgICAgICB0ZXh0OiBzdHJpbmcsXHJcbiAgICAgICAgY29sb3I6IHN0cmluZyxcclxuICAgICAgICBob3ZlcmVkQ29sb3I6IHN0cmluZyxcclxuICAgICAgICBvbkNsaWNrOiAoY3VycmVudFRpbWVNaWxsaXM/OiBudW1iZXIpID0+IHZvaWQsXHJcbiAgICAgICAgdXBkYXRlOiAoKSA9PiB2b2lkLFxyXG4gICAgKSB7XHJcbiAgICAgICAgdGhpcy50b3BMZWZ0WCA9IHRvcExlZnRYO1xyXG4gICAgICAgIHRoaXMudG9wTGVmdFkgPSB0b3BMZWZ0WTtcclxuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGg7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5ib3R0b21SaWdodFggPSB0b3BMZWZ0WCArIHdpZHRoO1xyXG4gICAgICAgIHRoaXMuYm90dG9tUmlnaHRZID0gdG9wTGVmdFkgKyBoZWlnaHQ7XHJcbiAgICAgICAgdGhpcy50ZXh0ID0gdGV4dDtcclxuICAgICAgICB0aGlzLmNvbG9yID0gY29sb3I7XHJcbiAgICAgICAgdGhpcy5ob3ZlcmVkQ29sb3IgPSBob3ZlcmVkQ29sb3I7XHJcbiAgICAgICAgdGhpcy5vbkNsaWNrID0gb25DbGljaztcclxuICAgICAgICB0aGlzLnVwZGF0ZSA9IHVwZGF0ZTtcclxuXHJcbiAgICAgICAgdGhpcy5pZCA9IGcuaWRDb3VudGVyO1xyXG4gICAgICAgIGcuaWRDb3VudGVyICs9IDE7XHJcbiAgICAgICAgZHJhd2FibGVzLnB1c2godGhpcyk7XHJcbiAgICAgICAgY29sbGlkZWFibGVzLnB1c2godGhpcyk7XHJcbiAgICAgICAgdXBkYXRlYWJsZXMucHVzaCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZHJhdygpIHtcclxuICAgICAgICBsZXQgdG9wTGVmdFggPSB0aGlzLnRvcExlZnRYO1xyXG4gICAgICAgIGxldCB0b3BMZWZ0WSA9IHRoaXMudG9wTGVmdFk7XHJcbiAgICAgICAgbGV0IHdpZHRoID0gdGhpcy53aWR0aDtcclxuICAgICAgICBsZXQgaGVpZ2h0ID0gdGhpcy5oZWlnaHQ7XHJcbiAgICAgICAgbGV0IGZvbnRTaXplID0gMTU7XHJcbiAgICAgICAgbGV0IGNvbG9yOiBzdHJpbmc7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNNb3VzZURvd25lZFxyXG4gICAgICAgICAgICAmJiAhdGhpcy5pc0Rpc2FibGVkKSB7XHJcbiAgICAgICAgICAgIGxldCBzaHJpbmsgPSAwLjE7XHJcbiAgICAgICAgICAgIGxldCBzaHJpbmtYID0gd2lkdGggKiBzaHJpbms7XHJcbiAgICAgICAgICAgIGxldCBzaHJpbmtZID0gaGVpZ2h0ICogc2hyaW5rO1xyXG4gICAgICAgICAgICB3aWR0aCAtPSBzaHJpbmtYO1xyXG4gICAgICAgICAgICBoZWlnaHQgLT0gc2hyaW5rWTtcclxuICAgICAgICAgICAgdG9wTGVmdFggKz0gc2hyaW5rWCAvIDI7XHJcbiAgICAgICAgICAgIHRvcExlZnRZICs9IHNocmlua1kgLyAyO1xyXG4gICAgICAgICAgICBmb250U2l6ZSAqPSAoMSAtIHNocmluayk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmlzRGlzYWJsZWQpIHtcclxuICAgICAgICAgICAgY29sb3IgPSB0aGlzLmRpc2FibGVkQ29sb3JcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc0hvdmVyZWQpIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yID0gdGhpcy5jb2xvcjtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yID0gdGhpcy5ob3ZlcmVkQ29sb3I7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGN0eC5zYXZlKCk7XHJcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xyXG4gICAgICAgIGN0eC5mb250ID0gZm9udFNpemUgKyBcInB4IEFyaWFsXCI7XHJcbiAgICAgICAgY3R4LmZpbGxSZWN0KHRvcExlZnRYLCB0b3BMZWZ0WSwgd2lkdGgsIGhlaWdodCk7XHJcbiAgICAgICAgY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XHJcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwiYmxhY2tcIjtcclxuICAgICAgICBjdHguZmlsbFRleHQoXHJcbiAgICAgICAgICAgIHRoaXMudGV4dCxcclxuICAgICAgICAgICAgdG9wTGVmdFggKyB3aWR0aCAvIDIsXHJcbiAgICAgICAgICAgIHRvcExlZnRZICsgaGVpZ2h0IC8gMiArIGZvbnRTaXplIC8gMi40XHJcbiAgICAgICAgKTtcclxuICAgICAgICBjdHgucmVzdG9yZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjb2xsaWRlKHBvaW50WDogbnVtYmVyLCBwb2ludFk6IG51bWJlcikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRvcExlZnRYIDw9IHBvaW50WFxyXG4gICAgICAgICAgICAmJiBwb2ludFggPD0gdGhpcy5ib3R0b21SaWdodFhcclxuICAgICAgICAgICAgJiYgdGhpcy50b3BMZWZ0WSA8PSBwb2ludFlcclxuICAgICAgICAgICAgJiYgcG9pbnRZIDw9IHRoaXMuYm90dG9tUmlnaHRZO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkZWxldGUoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkcmF3YWJsZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGRyYXdhYmxlc1tpXS5pZCA9PT0gdGhpcy5pZCkge1xyXG4gICAgICAgICAgICAgICAgZHJhd2FibGVzLnNwbGljZShpLCAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbGxpZGVhYmxlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoY29sbGlkZWFibGVzW2ldLmlkID09PSB0aGlzLmlkKSB7XHJcbiAgICAgICAgICAgICAgICBjb2xsaWRlYWJsZXMuc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdXBkYXRlYWJsZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHVwZGF0ZWFibGVzW2ldLmlkID09PSB0aGlzLmlkKSB7XHJcbiAgICAgICAgICAgICAgICB1cGRhdGVhYmxlcy5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgY3R4LCBmb3JlZ3JvdW5kRHJhd2FibGVzLCBnLCBwbGF5ZXJEaWN0aW9uYXJ5IH0gZnJvbSBcIi4vZ2xvYmFsXCI7XHJcbmltcG9ydCB7IHJnYlN0cmluZyB9IGZyb20gXCIuL3V0aWxcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBEaWN0aW9uYXJ5VmlldyB7XHJcbiAgICBwdWJsaWMgaWQ6IG51bWJlcjtcclxuICAgIHB1YmxpYyBib3R0b21MZWZ0WDogbnVtYmVyO1xyXG4gICAgcHVibGljIGJvdHRvbUxlZnRZOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgYmFja2dyb3VuZENvbG9yOiBzdHJpbmcgPSByZ2JTdHJpbmcoMjAwLCAyMDAsIDIwMCk7XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIGJvdHRvbUxlZnRYOiBudW1iZXIsXHJcbiAgICAgICAgYm90dG9tTGVmdFk6IG51bWJlcixcclxuICAgICkge1xyXG4gICAgICAgIHRoaXMuYm90dG9tTGVmdFggPSBib3R0b21MZWZ0WDtcclxuICAgICAgICB0aGlzLmJvdHRvbUxlZnRZID0gYm90dG9tTGVmdFk7XHJcblxyXG4gICAgICAgIHRoaXMuaWQgPSBnLmlkQ291bnRlcjtcclxuICAgICAgICBnLmlkQ291bnRlciArPSAxO1xyXG4gICAgICAgIGZvcmVncm91bmREcmF3YWJsZXMucHVzaCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZHJhdygpIHtcclxuICAgICAgICBsZXQgd2lkdGggPSAxMDA7XHJcbiAgICAgICAgbGV0IGhlaWdodFBlcldvcmQgPSAyMTtcclxuICAgICAgICBsZXQgc3BhY2luZyA9IDU7XHJcbiAgICAgICAgbGV0IGhlaWdodCA9IHBsYXllckRpY3Rpb25hcnkubGVuZ3RoICogKGhlaWdodFBlcldvcmQgKyBzcGFjaW5nKSArIHNwYWNpbmc7XHJcbiAgICAgICAgbGV0IHggPSB0aGlzLmJvdHRvbUxlZnRYO1xyXG4gICAgICAgIGxldCB5ID0gdGhpcy5ib3R0b21MZWZ0WSAtIGhlaWdodCAtIDEwO1xyXG4gICAgICAgIGxldCB0ZXh0WCA9IHggKyBzcGFjaW5nO1xyXG4gICAgICAgIGN0eC5zYXZlKCk7XHJcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IHRoaXMuYmFja2dyb3VuZENvbG9yO1xyXG4gICAgICAgIGN0eC5maWxsUmVjdCh4LCB5LCB3aWR0aCwgaGVpZ2h0KTtcclxuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJibGFja1wiO1xyXG4gICAgICAgIGN0eC5mb250ID0gXCIxNnB4IEFyaWFsXCI7XHJcbiAgICAgICAgY3R4LnRleHRBbGlnbiA9IFwibGVmdFwiO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGxheWVyRGljdGlvbmFyeS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjdHguZmlsbFRleHQoXHJcbiAgICAgICAgICAgICAgICBwbGF5ZXJEaWN0aW9uYXJ5W2ldLmpvaW4oXCJcIiksXHJcbiAgICAgICAgICAgICAgICB0ZXh0WCxcclxuICAgICAgICAgICAgICAgIHRoaXMuYm90dG9tTGVmdFkgLSAoaGVpZ2h0UGVyV29yZCArIHNwYWNpbmcpICogaSAtIHNwYWNpbmcgLSAxNVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjdHgucmVzdG9yZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkZWxldGUoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmb3JlZ3JvdW5kRHJhd2FibGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChmb3JlZ3JvdW5kRHJhd2FibGVzW2ldLmlkID09PSB0aGlzLmlkKSB7XHJcbiAgICAgICAgICAgICAgICBmb3JlZ3JvdW5kRHJhd2FibGVzLnNwbGljZShpLCAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCB7IENvbGxpZGVhYmxlLCBEcmF3YWJsZSwgVXBkYXRlYWJsZSB9IGZyb20gXCIuL3R5cGVzXCI7XHJcblxyXG5leHBvcnQgbGV0IHdpZHRoOiBudW1iZXIgPSAxMDAwO1xyXG5leHBvcnQgbGV0IGhlaWdodDogbnVtYmVyID0gNzAwO1xyXG5leHBvcnQgbGV0IGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xyXG5leHBvcnQgbGV0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XHJcbmNhbnZhcy53aWR0aCA9IHdpZHRoO1xyXG5jYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG5jdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG5leHBvcnQgbGV0IGRyYXdhYmxlczogRHJhd2FibGVbXSA9IFtdO1xyXG5leHBvcnQgbGV0IGZvcmVncm91bmREcmF3YWJsZXM6IERyYXdhYmxlW10gPSBbXTtcclxuZXhwb3J0IGxldCBjb2xsaWRlYWJsZXM6IENvbGxpZGVhYmxlW10gPSBbXTtcclxuZXhwb3J0IGxldCB1cGRhdGVhYmxlczogVXBkYXRlYWJsZVtdID0gW107XHJcbmV4cG9ydCBsZXQgcGxheWVyRGljdGlvbmFyeSA9IFtbXCJDXCIsIFwiQVwiLCBcIlRcIl1dO1xyXG5cclxuLy8gUHV0IGFueSBnbG9iYWwgdmFyaWFibGVzIHRoYXQgeW91IHdhbnQgdG8gYmUgYWJsZSB0byByZWFzc2lnbiBoZXJlXHJcbmV4cG9ydCBsZXQgZyA9IHtcclxuICAgIGJhbmFuYXM6IDAsXHJcbiAgICBtb25rZXlzOiAwLFxyXG4gICAgbGV0dGVyc1BlclNlY29uZDogMCxcclxuICAgIG1vdXNlWDogLTEsXHJcbiAgICBtb3VzZVk6IC0xLFxyXG4gICAgaWRDb3VudGVyOiAwLFxyXG4gICAgY3VycmVudFRhcmdldEluZGV4OiAwLFxyXG4gICAga2V5Ym9hcmRLZXlzOiBbXCJBXCJdLFxyXG4gICAgbWF4S2V5Ym9hcmRLZXlzOiAxLFxyXG4gICAgdGFyZ2V0T3duZWQ6IFt0cnVlXSxcclxuICAgIGFkZGl0aXZlUGVyY2VudEJvbnVzOiAwLFxyXG4gICAgYWRkaXRpdmVGbGF0Qm9udXM6IDAsXHJcbiAgICBjaGFyYWN0ZXJzVG9DaG9vc2VGcm9tOiA8c3RyaW5nW10+W10sXHJcbiAgICBpbmNvbWVBY2N1bXVsYXRvcjogMCxcclxuICAgIHRleHREaXNwbGF5TGV0dGVyczogMyxcclxufTtcclxuIiwiaW1wb3J0IHsgZyB9IGZyb20gXCIuL2dsb2JhbFwiO1xyXG5pbXBvcnQgeyBTYXZlRmlsZSwgc2F2ZUZpbGVWZXJzaW9uIH0gZnJvbSBcIi4vc2F2ZV9maWxlXCI7XHJcblxyXG5sZXQgc2F2ZUtleTogc3RyaW5nID0gXCJpbmZpbmUtbW9ua2V5LWlkbGUtZ2FtZVwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNhdmUoKSB7XHJcbiAgICBsZXQgc2F2ZUZpbGU6IFNhdmVGaWxlID0gZ2V0U2F2ZUZpbGUoKTtcclxuICAgIGxldCBzYXZlRmlsZVN0cmluZzogc3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoc2F2ZUZpbGUpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oc2F2ZUtleSwgc2F2ZUZpbGVTdHJpbmcpO1xyXG4gICAgY29uc29sZS5sb2coXCJTYXZlZCFcIik7XHJcbiAgICBjb25zb2xlLmxvZyhzYXZlRmlsZVN0cmluZyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFNhdmVGaWxlKCk6IFNhdmVGaWxlIHtcclxuICAgIHJldHVybiBuZXcgU2F2ZUZpbGUoXHJcbiAgICAgICAgZy5iYW5hbmFzLFxyXG4gICAgICAgIGcubW9ua2V5cyxcclxuICAgICAgICBnLmN1cnJlbnRUYXJnZXRJbmRleCxcclxuICAgICAgICBnLmtleWJvYXJkS2V5cyxcclxuICAgICAgICBnLm1heEtleWJvYXJkS2V5cyxcclxuICAgICAgICBnLnRhcmdldE93bmVkLFxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRGcm9tTG9jYWxTdG9yYWdlKCkge1xyXG4gICAgbGV0IHNhdmVGaWxlU3RyaW5nID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oc2F2ZUtleSk7XHJcbiAgICBpZiAoc2F2ZUZpbGVTdHJpbmcgPT09IHVuZGVmaW5lZFxyXG4gICAgICAgIHx8IHNhdmVGaWxlU3RyaW5nID09PSBudWxsKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkNvdWxkIG5vdCBsb2FkIHNhdmVcIik7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlNhdmUgZm91bmRcIiwgc2F2ZUZpbGVTdHJpbmcpO1xyXG4gICAgfVxyXG4gICAgbG9hZEZyb21TdHJpbmcoc2F2ZUZpbGVTdHJpbmcpO1xyXG59XHJcblxyXG4vLyBJIHNob3VsZCBiZSBhYmxlIHRvIGNhbGwgdGhpcyB3aGV0aGVyIEknbSBsb2FkaW5nIGZyb21cclxuLy8gbG9jYWwgc3RvcmFnZSBvciBmcm9tIGEgdXNlci1wcm92aWRlZCBzYXZlIGltcG9ydCBzdHJpbmdcclxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRGcm9tU3RyaW5nKGltcG9ydFN0cmluZzogc3RyaW5nKSB7XHJcbiAgICBsZXQgbG9hZGVkU2F2ZTogU2F2ZUZpbGUgPSBKU09OLnBhcnNlKGltcG9ydFN0cmluZyk7XHJcbiAgICBpZiAobG9hZGVkU2F2ZSA9PT0gdW5kZWZpbmVkXHJcbiAgICAgICAgfHwgbG9hZGVkU2F2ZSA9PT0gbnVsbCkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBzYXZlIGZyb20gbG9jYWwgc3RvcmFnZTogSlNPTiBwYXJzZSBlcnJvclwiKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9IGVsc2UgaWYgKGxvYWRlZFNhdmUudmVyc2lvbiAhPT0gc2F2ZUZpbGVWZXJzaW9uKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBsb2FkIHNhdmUgZnJvbSBsb2NhbCBzdG9yYWdlOiBWZXJzaW9uIG1pc21hdGNoXCIpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKFwiTG9hZGVkIHNhdmVcIik7XHJcbiAgICBjb25zb2xlLmxvZyhsb2FkZWRTYXZlKTtcclxuICAgIGcuYmFuYW5hcyA9IGxvYWRlZFNhdmUuYmFuYW5hcztcclxuICAgIGcubW9ua2V5cyA9IGxvYWRlZFNhdmUubW9ua2V5cztcclxuICAgIGcubGV0dGVyc1BlclNlY29uZCA9IGcubW9ua2V5cztcclxuICAgIGcuY3VycmVudFRhcmdldEluZGV4ID0gbG9hZGVkU2F2ZS50YXJnZXRJbmRleDtcclxuICAgIGcua2V5Ym9hcmRLZXlzID0gbG9hZGVkU2F2ZS5rZXlib2FyZEtleXM7XHJcbiAgICBnLm1heEtleWJvYXJkS2V5cyA9IGxvYWRlZFNhdmUubWF4S2V5Ym9hcmRLZXlzO1xyXG4gICAgZy50YXJnZXRPd25lZCA9IGxvYWRlZFNhdmUudGFyZ2V0T3duZWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBleHBvcnRTYXZlVG9TdHJpbmcoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShnZXRTYXZlRmlsZSgpKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGVyYXNlU2F2ZSgpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiU2F2ZSBFcmFzZWQhXCIpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oc2F2ZUtleSk7XHJcbn1cclxuIiwiZXhwb3J0IGxldCBzYXZlRmlsZVZlcnNpb246IG51bWJlciA9IDM7XHJcblxyXG5leHBvcnQgY2xhc3MgU2F2ZUZpbGUge1xyXG4gICAgLy8gVXNlIHRoZSB2ZXJzaW9uIG51bWJlciB0byBkZXRlY3QgYW5kIGludmFsaWRhdGVcclxuICAgIC8vIG9sZCBhbmQgaW5jb21wYXRpYmxlIHNhdmUgZmlsZXNcclxuICAgIHB1YmxpYyB2ZXJzaW9uOiBudW1iZXI7XHJcblxyXG4gICAgcHVibGljIGJhbmFuYXM6IG51bWJlcjtcclxuICAgIHB1YmxpYyBtb25rZXlzOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgdGFyZ2V0SW5kZXg6IG51bWJlcjtcclxuICAgIHB1YmxpYyBrZXlib2FyZEtleXM6IHN0cmluZ1tdO1xyXG4gICAgcHVibGljIG1heEtleWJvYXJkS2V5czogbnVtYmVyO1xyXG4gICAgcHVibGljIHRhcmdldE93bmVkOiBib29sZWFuW107XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIGJhbmFuYXM6IG51bWJlcixcclxuICAgICAgICBtb25rZXlzOiBudW1iZXIsXHJcbiAgICAgICAgdGFyZ2V0SW5kZXg6IG51bWJlcixcclxuICAgICAgICBrZXlib2FyZEtleXM6IHN0cmluZ1tdLFxyXG4gICAgICAgIG1heEtleWJvYXJkS2V5czogbnVtYmVyLFxyXG4gICAgICAgIHRhcmdldE93bmVkOiBib29sZWFuW10sXHJcbiAgICApIHtcclxuICAgICAgICB0aGlzLnZlcnNpb24gPSBzYXZlRmlsZVZlcnNpb247XHJcbiAgICAgICAgdGhpcy5iYW5hbmFzID0gYmFuYW5hcztcclxuICAgICAgICB0aGlzLm1vbmtleXMgPSBtb25rZXlzO1xyXG4gICAgICAgIHRoaXMudGFyZ2V0SW5kZXggPSB0YXJnZXRJbmRleDtcclxuICAgICAgICB0aGlzLmtleWJvYXJkS2V5cyA9IGtleWJvYXJkS2V5cztcclxuICAgICAgICB0aGlzLm1heEtleWJvYXJkS2V5cyA9IG1heEtleWJvYXJkS2V5cztcclxuICAgICAgICB0aGlzLnRhcmdldE93bmVkID0gdGFyZ2V0T3duZWQ7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgY3R4LCBkcmF3YWJsZXMsIGcsIHBsYXllckRpY3Rpb25hcnksIHVwZGF0ZWFibGVzIH0gZnJvbSBcIi4vZ2xvYmFsXCI7XHJcbmltcG9ydCB7IGNvdW50TWF0Y2hpbmdMZXR0ZXJzLCBnZXRSYW5kb21DaGFyYWN0ZXIsIHJnYlN0cmluZyB9IGZyb20gXCIuL3V0aWxcIjtcclxuaW1wb3J0IHsgV29yZFBhcnRpY2xlIH0gZnJvbSBcIi4vd29yZF9wYXJ0aWNsZVwiO1xyXG5cclxubGV0IHRleHREaXNwbGF5czogVGV4dERpc3BsYXlbXSA9IFtdO1xyXG5leHBvcnQgY2xhc3MgVGV4dERpc3BsYXkge1xyXG4gICAgcHVibGljIHg6IG51bWJlcjtcclxuICAgIHB1YmxpYyB5OiBudW1iZXI7XHJcbiAgICBwdWJsaWMgaGVpZ2h0OiBudW1iZXI7XHJcbiAgICBwdWJsaWMgd2lkdGg6IG51bWJlcjtcclxuICAgIHB1YmxpYyBpZDogbnVtYmVyO1xyXG4gICAgcHVibGljIGxldHRlcnNUb1R5cGVSZW1haW5kZXI6IG51bWJlciA9IDA7XHJcbiAgICBwdWJsaWMgbGFzdFdvcmRGaW5pc2hUaW1lTWlsbGlzOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgY3VycmVudFN0cmluZzogc3RyaW5nW10gPSBbXTtcclxuICAgIHB1YmxpYyBjb3JyZWN0Q29sb3I6IHN0cmluZyA9IHJnYlN0cmluZygyNTUsIDE4NywgMCk7XHJcbiAgICBwdWJsaWMgcHJldmlvdXNFdmFsdWF0aW9uOiBhbnk7XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuaWQgPSBnLmlkQ291bnRlcjtcclxuICAgICAgICBnLmlkQ291bnRlciArPSAxO1xyXG4gICAgICAgIGRyYXdhYmxlcy5wdXNoKHRoaXMpO1xyXG4gICAgICAgIHVwZGF0ZWFibGVzLnB1c2godGhpcyk7XHJcbiAgICAgICAgdGV4dERpc3BsYXlzLnB1c2godGhpcyk7XHJcbiAgICAgICAgYWxpZ25UZXh0RGlzcGxheXNUb0dyaWQoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdXBkYXRlKGN1cnJlbnRUaW1lTWlsbGlzOiBudW1iZXIsIGVsYXBzZWRUaW1lTWlsbGlzOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmxldHRlcnNUb1R5cGVSZW1haW5kZXIgKz0gZWxhcHNlZFRpbWVNaWxsaXMgLyAxMDAwICogZy5sZXR0ZXJzUGVyU2Vjb25kO1xyXG5cclxuICAgICAgICAvLyBNYWtlIGEgZmluaXNoZWQgd29yZCBzdGF5IG9uIHNjcmVlbiBmb3IgNTAwbXMsIG9yIHVudGlsXHJcbiAgICAgICAgLy8gYW5vdGhlciBsZXR0ZXIgaXMgdHlwZWRcclxuICAgICAgICBpZiAoKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5sYXN0V29yZEZpbmlzaFRpbWVNaWxsaXMgIT09IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICAgICAgJiYgKGN1cnJlbnRUaW1lTWlsbGlzIC0gdGhpcy5sYXN0V29yZEZpbmlzaFRpbWVNaWxsaXMpID4gNTAwXHJcbiAgICAgICAgICAgICkgfHwgKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5sZXR0ZXJzVG9UeXBlUmVtYWluZGVyID49IDFcclxuICAgICAgICAgICAgICAgICYmIHRoaXMuY3VycmVudFN0cmluZy5sZW5ndGggPj0gZy50ZXh0RGlzcGxheUxldHRlcnNcclxuICAgICAgICAgICAgKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50U3RyaW5nID0gW107XHJcbiAgICAgICAgICAgIHRoaXMubGFzdFdvcmRGaW5pc2hUaW1lTWlsbGlzID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLyBHZW5lcmF0ZSB0aGUgbmVlZGVkIGNoYXJhY3RlcnMgYW5kIGF3YXJkIGJhbmFuYXNcclxuICAgICAgICB3aGlsZSAodGhpcy5sZXR0ZXJzVG9UeXBlUmVtYWluZGVyID49IDEpIHtcclxuICAgICAgICAgICAgdGhpcy5sZXR0ZXJzVG9UeXBlUmVtYWluZGVyIC09IDE7XHJcbiAgICAgICAgICAgIGlmIChnLmNoYXJhY3RlcnNUb0Nob29zZUZyb20ubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgY2hhcmFjdGVyID0gZ2V0UmFuZG9tQ2hhcmFjdGVyKCk7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFN0cmluZy5wdXNoKGNoYXJhY3Rlcik7XHJcbiAgICAgICAgICAgIGxldCBldmFsdWF0aW9uID0gdGhpcy5ldmFsdWF0ZSh0aGlzLmN1cnJlbnRTdHJpbmcsIHBsYXllckRpY3Rpb25hcnkpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50U3RyaW5nLmxlbmd0aCA+PSBnLnRleHREaXNwbGF5TGV0dGVycykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sYXN0V29yZEZpbmlzaFRpbWVNaWxsaXMgPSBjdXJyZW50VGltZU1pbGxpcztcclxuICAgICAgICAgICAgICAgIGxldCBiYW5hbmFzVG9BZGQgPSAwO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBldmFsdWF0aW9uLm1hdGNoQ291bnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG1hdGNoQ291bnQgPSBldmFsdWF0aW9uLm1hdGNoQ291bnRzW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhbmFuYXNUb0FkZCArPSB0aGlzLmdldFNjb3JlKG1hdGNoQ291bnQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZy5iYW5hbmFzICs9IGJhbmFuYXNUb0FkZDtcclxuICAgICAgICAgICAgICAgIGcuaW5jb21lQWNjdW11bGF0b3IgKz0gYmFuYW5hc1RvQWRkO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubGV0dGVyc1RvVHlwZVJlbWFpbmRlciA+PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50U3RyaW5nID0gW107XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGV2YWx1YXRpb24ubWF0Y2hDb3VudHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbWF0Y2hDb3VudCA9IGV2YWx1YXRpb24ubWF0Y2hDb3VudHNbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNvbG9yOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1hdGNoQ291bnQgPCAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yID0gdGhpcy5nZXRDb2xvcihtYXRjaENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3IFdvcmRQYXJ0aWNsZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxheWVyRGljdGlvbmFyeVtpXS5qb2luKFwiXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy54ICsgdGhpcy53aWR0aCAvIDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMueSArIHRoaXMuaGVpZ2h0IC8gMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFRpbWVNaWxsaXNcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMucHJldmlvdXNFdmFsdWF0aW9uID0gZXZhbHVhdGlvbjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBkcmF3KCkge1xyXG4gICAgICAgIGxldCBjdXJyZW50U3RyaW5nID0gdGhpcy5jdXJyZW50U3RyaW5nO1xyXG4gICAgICAgIGxldCBmb250U2l6ZTogbnVtYmVyID0gdGhpcy5oZWlnaHQgKiA0IC8gNztcclxuICAgICAgICBjdHguc2F2ZSgpO1xyXG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IFwiYmxhY2tcIjtcclxuICAgICAgICBjdHguc3Ryb2tlUmVjdChcclxuICAgICAgICAgICAgdGhpcy54LFxyXG4gICAgICAgICAgICB0aGlzLnksXHJcbiAgICAgICAgICAgIHRoaXMud2lkdGgsXHJcbiAgICAgICAgICAgIHRoaXMuaGVpZ2h0XHJcbiAgICAgICAgKTtcclxuICAgICAgICBjdHguZm9udCA9IGZvbnRTaXplICsgXCJweCBBcmlhbFwiO1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBnLnRleHREaXNwbGF5TGV0dGVyczsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBjaGFyYWN0ZXI6IHN0cmluZztcclxuICAgICAgICAgICAgaWYgKGkgPj0gY3VycmVudFN0cmluZy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIGNoYXJhY3RlciA9IFwiX1wiO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY2hhcmFjdGVyID0gY3VycmVudFN0cmluZ1tpXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgZ3JhZGVGb3JMZXR0ZXIgPSAwO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2aW91c0V2YWx1YXRpb24gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgZ3JhZGVGb3JMZXR0ZXIgPSB0aGlzLnByZXZpb3VzRXZhbHVhdGlvbi5tYXhHcmFkZVBlckxldHRlcltpXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoY2hhcmFjdGVyID09PSBcIl9cIikge1xyXG4gICAgICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwiYmxhY2tcIjtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChncmFkZUZvckxldHRlciA+PSAxKSB7XHJcbiAgICAgICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gdGhpcy5nZXRDb2xvcihncmFkZUZvckxldHRlcik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJibGFja1wiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGN0eC5maWxsVGV4dChcclxuICAgICAgICAgICAgICAgIGNoYXJhY3RlcixcclxuICAgICAgICAgICAgICAgIHRoaXMueCArIGZvbnRTaXplICogMC4xNSArIGZvbnRTaXplICogaSxcclxuICAgICAgICAgICAgICAgIHRoaXMueSArIGZvbnRTaXplICogMS4yXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGN0eC5yZXN0b3JlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGV2YWx1YXRlKGxldHRlcnM6IHN0cmluZ1tdLCBkaWN0aW9uYXJ5OiBzdHJpbmdbXVtdKToge1xyXG4gICAgICAgICAgICBncmFkZU1hdHJpeDogbnVtYmVyW11bXSxcclxuICAgICAgICAgICAgbWF0Y2hDb3VudHM6IG51bWJlcltdLFxyXG4gICAgICAgICAgICBtYXhHcmFkZVBlckxldHRlcjogbnVtYmVyW10sXHJcbiAgICAgICAgfVxyXG4gICAge1xyXG4gICAgICAgIGxldCBncmFkZU1hdHJpeDogbnVtYmVyW11bXSA9IFtdO1xyXG4gICAgICAgIGxldCBtYXRjaENvdW50czogbnVtYmVyW10gPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRpY3Rpb25hcnkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHRhcmdldExldHRlcnM6IHN0cmluZ1tdID0gZGljdGlvbmFyeVtpXTtcclxuICAgICAgICAgICAgbGV0IGdyYWRlczogbnVtYmVyW10gPSBbXTtcclxuICAgICAgICAgICAgbGV0IG1hdGNoQ291bnQ6IG51bWJlciA9IDA7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGFyZ2V0TGV0dGVycy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGdyYWRlOiBudW1iZXIgPSB0YXJnZXRMZXR0ZXJzW2pdID09PSBsZXR0ZXJzW2pdID8gMSA6IDA7XHJcbiAgICAgICAgICAgICAgICBncmFkZXMucHVzaChncmFkZSlcclxuICAgICAgICAgICAgICAgIG1hdGNoQ291bnQgKz0gZ3JhZGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbWF0Y2hDb3VudHMucHVzaChtYXRjaENvdW50KTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0YXJnZXRMZXR0ZXJzLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBncmFkZXNbal0gKj0gbWF0Y2hDb3VudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBncmFkZU1hdHJpeC5wdXNoKGdyYWRlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgbGV0IG1heEdyYWRlUGVyTGV0dGVyOiBudW1iZXJbXSA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGV0dGVycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgbWF4OiBudW1iZXIgPSAwO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGdyYWRlTWF0cml4Lmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZ3JhZGVNYXRyaXhbal1baV0gPiBtYXgpIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXggPSBncmFkZU1hdHJpeFtqXVtpXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBtYXhHcmFkZVBlckxldHRlci5wdXNoKG1heCk7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgZ3JhZGVNYXRyaXg6IGdyYWRlTWF0cml4LFxyXG4gICAgICAgICAgICBtYXRjaENvdW50czogbWF0Y2hDb3VudHMsXHJcbiAgICAgICAgICAgIG1heEdyYWRlUGVyTGV0dGVyOiBtYXhHcmFkZVBlckxldHRlcixcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFNjb3JlKG51bU1hdGNoZXM6IG51bWJlcikge1xyXG4gICAgICAgIGlmIChudW1NYXRjaGVzID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gTWF0aC5wb3coNSwgbnVtTWF0Y2hlcyAtIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRDb2xvcihudW1NYXRjaGVzOiBudW1iZXIpIHtcclxuICAgICAgICBpZiAobnVtTWF0Y2hlcyA9PT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gXCJibGFja1wiO1xyXG4gICAgICAgIH0gZWxzZSBpZiAobnVtTWF0Y2hlcyA9PT0gMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb3JyZWN0Q29sb3I7XHJcbiAgICAgICAgfSBlbHNlIGlmIChudW1NYXRjaGVzID09PSAyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBcInJlZFwiO1xyXG4gICAgICAgIH0gZWxzZSBpZiAobnVtTWF0Y2hlcyA+PSAzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBcImJsdWVcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVW5kZWZpbmVkIGNvbG9yIGZvciBudW1NYXRjaGVzID0gXCIgKyBudW1NYXRjaGVzKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFsaWduVGV4dERpc3BsYXlzVG9HcmlkKCkge1xyXG4gICAgbGV0IG51bURpc3BsYXlzID0gdGV4dERpc3BsYXlzLmxlbmd0aDtcclxuICAgIGxldCB4T2Zmc2V0ID0gMzA7XHJcbiAgICBsZXQgeU9mZnNldCA9IDE1MDtcclxuICAgIGxldCBtYXhXaWR0aCA9IDY4MDtcclxuICAgIGxldCBtYXhIZWlnaHQgPSAyNzA7XHJcbiAgICBsZXQgd2lkdGg7XHJcbiAgICBsZXQgbnVtQ29sdW1ucztcclxuICAgIGxldCBub25FbXB0eVJvd3M7XHJcbiAgICBsZXQgaGVpZ2h0ID0gNTM7XHJcbiAgICBkbyB7XHJcbiAgICAgICAgd2lkdGggPSBnLnRleHREaXNwbGF5TGV0dGVycyAqIGhlaWdodCAqIDQgLyA3O1xyXG4gICAgICAgIG51bUNvbHVtbnMgPSBNYXRoLmZsb29yKG1heFdpZHRoIC8gd2lkdGgpO1xyXG4gICAgICAgIG5vbkVtcHR5Um93cyA9IE1hdGguY2VpbChudW1EaXNwbGF5cyAvIG51bUNvbHVtbnMpO1xyXG4gICAgICAgIGlmIChoZWlnaHQgKiBub25FbXB0eVJvd3MgPD0gbWF4SGVpZ2h0KSB7XHJcbiAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGhlaWdodCAtPSAxO1xyXG4gICAgfSB3aGlsZSh0cnVlKTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bURpc3BsYXlzOyBpKyspIHtcclxuICAgICAgICBsZXQgcm93ID0gTWF0aC5mbG9vcihpIC8gbnVtQ29sdW1ucyk7XHJcbiAgICAgICAgbGV0IGNvbHVtbiA9IGkgJSBudW1Db2x1bW5zO1xyXG4gICAgICAgIGxldCB4ID0gY29sdW1uICogd2lkdGggKyB4T2Zmc2V0O1xyXG4gICAgICAgIGxldCB5ID0gcm93ICogaGVpZ2h0ICsgeU9mZnNldDtcclxuICAgICAgICB0ZXh0RGlzcGxheXNbaV0ueCA9IHg7XHJcbiAgICAgICAgdGV4dERpc3BsYXlzW2ldLnkgPSB5O1xyXG4gICAgICAgIHRleHREaXNwbGF5c1tpXS5oZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICAgICAgdGV4dERpc3BsYXlzW2ldLndpZHRoID0gd2lkdGg7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgZyB9IGZyb20gXCIuL2dsb2JhbFwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvdW50TWF0Y2hpbmdMZXR0ZXJzKHMxOiBzdHJpbmdbXSwgczI6IHN0cmluZ1tdKSB7XHJcbiAgICBsZXQgbWF0Y2hpbmcgPSAwO1xyXG4gICAgbGV0IG1pbkxlbmd0aCA9IE1hdGgubWluKHMxLmxlbmd0aCwgczIubGVuZ3RoKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWluTGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAoczFbaV0gPT09IHMyW2ldKSB7XHJcbiAgICAgICAgICAgIG1hdGNoaW5nKys7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG1hdGNoaW5nO1xyXG59XHJcblxyXG4vLyBCdWZmZXIgdGhlIHJhbmRvbSBjaGFyYWN0ZXJzIHdlIGdldCBmcm9tIGNyeXB0byB0byBpbXByb3ZlXHJcbi8vIHRoZSBzcGVlZC4gQWxzbywgSSB0ZXN0ZWQgaXQsIGFuZCBpdCdzIGZhc3RlciB0aGFuIHVzaW5nXHJcbi8vIE1hdGgucmFuZG9tLCBhbmQgaG9wZWZ1bGx5IGhhcyBiZXR0ZXIgcmFuZG9tbmVzc1xyXG5sZXQgYnVmZmVyU2l6ZSA9IDEwMDAwO1xyXG5sZXQgbnVtYmVyQnVmZmVyOiBVaW50MTZBcnJheSA9IGdldFJhbmRvbU51bWJlcnMoYnVmZmVyU2l6ZSk7XHJcbmxldCBudW1iZXJCdWZmZXJJbmRleCA9IC0xO1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmFuZG9tQ2hhcmFjdGVyKCkge1xyXG4gICAgbnVtYmVyQnVmZmVySW5kZXggKz0gMTtcclxuICAgIGlmIChudW1iZXJCdWZmZXJJbmRleCA+PSBidWZmZXJTaXplKSB7XHJcbiAgICAgICAgbnVtYmVyQnVmZmVySW5kZXggPSAwO1xyXG4gICAgICAgIG51bWJlckJ1ZmZlciA9IGdldFJhbmRvbU51bWJlcnMoYnVmZmVyU2l6ZSk7XHJcbiAgICB9XHJcbiAgICBsZXQgcmFuZG9tTnVtYmVyID0gbnVtYmVyQnVmZmVyW251bWJlckJ1ZmZlckluZGV4XTtcclxuICAgIHJldHVybiBnLmNoYXJhY3RlcnNUb0Nob29zZUZyb21bcmFuZG9tTnVtYmVyXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFJhbmRvbU51bWJlcnMobjogbnVtYmVyKSB7XHJcbiAgICBsZXQgcmFuZG9tTnVtYmVycyA9IG5ldyBVaW50MTZBcnJheShuKTtcclxuICAgIHJhbmRvbU51bWJlcnMgPSBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKHJhbmRvbU51bWJlcnMpO1xyXG4gICAgcmV0dXJuIHJhbmRvbU51bWJlcnM7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZ2JTdHJpbmcocmVkOiBudW1iZXIsIGdyZWVuOiBudW1iZXIsIGJsdWU6IG51bWJlcikge1xyXG4gICAgcmV0dXJuIFwicmdiKFwiICsgcmVkICsgXCIsXCIgKyBncmVlbiArIFwiLFwiICsgYmx1ZSArIFwiKVwiO1xyXG59XHJcblxyXG4vLyBzb3VyY2U6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL01hdGgvcmFuZG9tXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRSYW5kb21JbnQobWluOiBudW1iZXIsIG1heDogbnVtYmVyKSB7XHJcbiAgICBtaW4gPSBNYXRoLmNlaWwobWluKTtcclxuICAgIG1heCA9IE1hdGguZmxvb3IobWF4KTtcclxuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSArIG1pbik7IC8vVGhlIG1heGltdW0gaXMgZXhjbHVzaXZlIGFuZCB0aGUgbWluaW11bSBpcyBpbmNsdXNpdmVcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1hcExpbmVhcihmcm9tVmFsdWU6IG51bWJlciwgZnJvbVN0YXJ0OiBudW1iZXIsIGZyb21FbmQ6IG51bWJlciwgdG9TdGFydDogbnVtYmVyLCB0b0VuZDogbnVtYmVyKSB7XHJcbiAgICByZXR1cm4gKGZyb21WYWx1ZSAtIGZyb21FbmQpICogKHRvU3RhcnQgLSB0b0VuZCkgLyAoZnJvbVN0YXJ0IC0gZnJvbUVuZCkgKyB0b0VuZDtcclxufVxyXG4iLCJpbXBvcnQgeyBjdHgsIGRyYXdhYmxlcywgZyB9IGZyb20gXCIuL2dsb2JhbFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFdvcmRQYXJ0aWNsZSB7XHJcbiAgICBwdWJsaWMgaWQ6IG51bWJlcjtcclxuICAgIHB1YmxpYyB2ZWxvY2l0eVg6IG51bWJlcjtcclxuICAgIHB1YmxpYyB2ZWxvY2l0eVk6IG51bWJlcjtcclxuICAgIHB1YmxpYyB0ZXh0OiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgc3RhcnRYOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgc3RhcnRZOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgYW5pbWF0aW9uU3RhcnRNaWxsaXM6IG51bWJlcjtcclxuICAgIHB1YmxpYyBhbmltYXRpb25FbmRNaWxsaXM6IG51bWJlcjtcclxuICAgIHB1YmxpYyBjb2xvcjogc3RyaW5nO1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihcclxuICAgICAgICB0ZXh0OiBzdHJpbmcsXHJcbiAgICAgICAgY29sb3I6IHN0cmluZyxcclxuICAgICAgICBzdGFydFg6IG51bWJlcixcclxuICAgICAgICBzdGFydFk6IG51bWJlcixcclxuICAgICAgICBjdXJyZW50VGltZU1pbGxpczogbnVtYmVyLFxyXG4gICAgKSB7XHJcbiAgICAgICAgdGhpcy50ZXh0ID0gdGV4dDtcclxuICAgICAgICB0aGlzLmNvbG9yID0gY29sb3I7XHJcbiAgICAgICAgdGhpcy5zdGFydFggPSBzdGFydFg7XHJcbiAgICAgICAgdGhpcy5zdGFydFkgPSBzdGFydFk7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25TdGFydE1pbGxpcyA9IGN1cnJlbnRUaW1lTWlsbGlzO1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uRW5kTWlsbGlzID0gY3VycmVudFRpbWVNaWxsaXMgKyAyMDAwO1xyXG4gICAgICAgIGxldCBhbmdsZSA9IE1hdGguUEkgKiAyICogTWF0aC5yYW5kb20oKTtcclxuICAgICAgICB0aGlzLnZlbG9jaXR5WCA9IE1hdGguY29zKGFuZ2xlKSAvIDIwO1xyXG4gICAgICAgIHRoaXMudmVsb2NpdHlZID0gTWF0aC5zaW4oYW5nbGUpIC8gMjA7XHJcblxyXG4gICAgICAgIHRoaXMuaWQgPSBnLmlkQ291bnRlcjtcclxuICAgICAgICBnLmlkQ291bnRlciArPSAxO1xyXG4gICAgICAgIGRyYXdhYmxlcy5wdXNoKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkcmF3KGN1cnJlbnRUaW1lTWlsbGlzOiBudW1iZXIpIHtcclxuICAgICAgICBpZiAoY3VycmVudFRpbWVNaWxsaXMgPj0gdGhpcy5hbmltYXRpb25FbmRNaWxsaXMpIHtcclxuICAgICAgICAgICAgdGhpcy5kZWxldGUoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgZWxhcHNlZFRpbWVNaWxsaXMgPSBjdXJyZW50VGltZU1pbGxpcyAtIHRoaXMuYW5pbWF0aW9uU3RhcnRNaWxsaXM7XHJcbiAgICAgICAgbGV0IGN1cnJlbnRYOiBudW1iZXIgPSB0aGlzLnN0YXJ0WCArIGVsYXBzZWRUaW1lTWlsbGlzICogdGhpcy52ZWxvY2l0eVg7XHJcbiAgICAgICAgbGV0IGN1cnJlbnRZOiBudW1iZXIgPSB0aGlzLnN0YXJ0WSArIGVsYXBzZWRUaW1lTWlsbGlzICogdGhpcy52ZWxvY2l0eVk7XHJcbiAgICAgICAgY3R4LnNhdmUoKTtcclxuICAgICAgICBjdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcclxuICAgICAgICBjdHguZmlsbFN0eWxlID0gdGhpcy5jb2xvcjtcclxuICAgICAgICBjdHguZm9udCA9IFwiMjBweCBBcmlhbFwiO1xyXG4gICAgICAgIGN0eC5maWxsVGV4dCh0aGlzLnRleHQsIGN1cnJlbnRYLCBjdXJyZW50WSk7XHJcbiAgICAgICAgY3R4LnJlc3RvcmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGVsZXRlKCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZHJhd2FibGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChkcmF3YWJsZXNbaV0uaWQgPT09IHRoaXMuaWQpIHtcclxuICAgICAgICAgICAgICAgIGRyYXdhYmxlcy5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiLy8gc291cmNlID0gaHR0cHM6Ly9zaW1wbGUud2lraXBlZGlhLm9yZy93aWtpL1dpa2lwZWRpYTpCYXNpY19FbmdsaXNoX2NvbWJpbmVkX3dvcmRsaXN0XHJcbmV4cG9ydCBsZXQgd29yZHMgPSBbXHJcbiAgICBbXHJcbiAgICAgICAgXCJBQ1RcIixcclxuICAgICAgICBcIkFHRVwiLFxyXG4gICAgICAgIFwiQUdPXCIsXHJcbiAgICAgICAgXCJBSVJcIixcclxuICAgICAgICBcIkFMTFwiLFxyXG4gICAgICAgIFwiQU5EXCIsXHJcbiAgICAgICAgXCJBTlRcIixcclxuICAgICAgICBcIkFOWVwiLFxyXG4gICAgICAgIFwiQVJDXCIsXHJcbiAgICAgICAgXCJBUk1cIixcclxuICAgICAgICBcIkFSVFwiLFxyXG4gICAgICAgIFwiQVNIXCIsXHJcbiAgICAgICAgXCJCQURcIixcclxuICAgICAgICBcIkJBR1wiLFxyXG4gICAgICAgIFwiQkFSXCIsXHJcbiAgICAgICAgXCJCRURcIixcclxuICAgICAgICBcIkJFRVwiLFxyXG4gICAgICAgIFwiQkVUXCIsXHJcbiAgICAgICAgXCJCSVRcIixcclxuICAgICAgICBcIkJPWFwiLFxyXG4gICAgICAgIFwiQk9ZXCIsXHJcbiAgICAgICAgXCJCVURcIixcclxuICAgICAgICBcIkJVVFwiLFxyXG4gICAgICAgIFwiQ0FUXCIsXHJcbiAgICAgICAgXCJDT1dcIixcclxuICAgICAgICBcIkNSWVwiLFxyXG4gICAgICAgIFwiQ1VQXCIsXHJcbiAgICAgICAgXCJDVVRcIixcclxuICAgICAgICBcIkRBWVwiLFxyXG4gICAgICAgIFwiREVXXCIsXHJcbiAgICAgICAgXCJESVBcIixcclxuICAgICAgICBcIkRPR1wiLFxyXG4gICAgICAgIFwiRFJZXCIsXHJcbiAgICAgICAgXCJFQVJcIixcclxuICAgICAgICBcIkVHR1wiLFxyXG4gICAgICAgIFwiRU5EXCIsXHJcbiAgICAgICAgXCJFWUVcIixcclxuICAgICAgICBcIkZBTlwiLFxyXG4gICAgICAgIFwiRkFSXCIsXHJcbiAgICAgICAgXCJGQVRcIixcclxuICAgICAgICBcIkZJTlwiLFxyXG4gICAgICAgIFwiRkxZXCIsXHJcbiAgICAgICAgXCJGT1JcIixcclxuICAgICAgICBcIkZVUlwiLFxyXG4gICAgICAgIFwiR0FTXCIsXHJcbiAgICAgICAgXCJHRVRcIixcclxuICAgICAgICBcIkdPRFwiLFxyXG4gICAgICAgIFwiR1VNXCIsXHJcbiAgICAgICAgXCJHVU5cIixcclxuICAgICAgICBcIkhBVFwiLFxyXG4gICAgICAgIFwiSE9XXCIsXHJcbiAgICAgICAgXCJJQ0VcIixcclxuICAgICAgICBcIklMTFwiLFxyXG4gICAgICAgIFwiSU5LXCIsXHJcbiAgICAgICAgXCJKQU1cIixcclxuICAgICAgICBcIkpBV1wiLFxyXG4gICAgICAgIFwiSlVHXCIsXHJcbiAgICAgICAgXCJLRVlcIixcclxuICAgICAgICBcIkxBR1wiLFxyXG4gICAgICAgIFwiTEFXXCIsXHJcbiAgICAgICAgXCJMRUdcIixcclxuICAgICAgICBcIkxFVFwiLFxyXG4gICAgICAgIFwiTElEXCIsXHJcbiAgICAgICAgXCJMSVBcIixcclxuICAgICAgICBcIkxPV1wiLFxyXG4gICAgICAgIFwiTUFOXCIsXHJcbiAgICAgICAgXCJNQVBcIixcclxuICAgICAgICBcIk1BWVwiLFxyXG4gICAgICAgIFwiTVVEXCIsXHJcbiAgICAgICAgXCJORVRcIixcclxuICAgICAgICBcIk5FV1wiLFxyXG4gICAgICAgIFwiTk9UXCIsXHJcbiAgICAgICAgXCJOT1dcIixcclxuICAgICAgICBcIk5VVFwiLFxyXG4gICAgICAgIFwiT0ZGXCIsXHJcbiAgICAgICAgXCJPSUxcIixcclxuICAgICAgICBcIk9MRFwiLFxyXG4gICAgICAgIFwiT05FXCIsXHJcbiAgICAgICAgXCJPUkVcIixcclxuICAgICAgICBcIk9VVFwiLFxyXG4gICAgICAgIFwiT1dOXCIsXHJcbiAgICAgICAgXCJQQURcIixcclxuICAgICAgICBcIlBBTlwiLFxyXG4gICAgICAgIFwiUEVOXCIsXHJcbiAgICAgICAgXCJQSUdcIixcclxuICAgICAgICBcIlBJTlwiLFxyXG4gICAgICAgIFwiUE9UXCIsXHJcbiAgICAgICAgXCJQVVRcIixcclxuICAgICAgICBcIlJBVFwiLFxyXG4gICAgICAgIFwiUkFZXCIsXHJcbiAgICAgICAgXCJSRURcIixcclxuICAgICAgICBcIlJPRFwiLFxyXG4gICAgICAgIFwiUk9UXCIsXHJcbiAgICAgICAgXCJSVUJcIixcclxuICAgICAgICBcIlJVTVwiLFxyXG4gICAgICAgIFwiUlVOXCIsXHJcbiAgICAgICAgXCJTQUNcIixcclxuICAgICAgICBcIlNBRFwiLFxyXG4gICAgICAgIFwiU0FZXCIsXHJcbiAgICAgICAgXCJTRUFcIixcclxuICAgICAgICBcIlNFRVwiLFxyXG4gICAgICAgIFwiU0VUXCIsXHJcbiAgICAgICAgXCJTRVhcIixcclxuICAgICAgICBcIlNJUlwiLFxyXG4gICAgICAgIFwiU0lYXCIsXHJcbiAgICAgICAgXCJTS1lcIixcclxuICAgICAgICBcIlNPTlwiLFxyXG4gICAgICAgIFwiU1VNXCIsXHJcbiAgICAgICAgXCJTVU5cIixcclxuICAgICAgICBcIlRBUFwiLFxyXG4gICAgICAgIFwiVEFYXCIsXHJcbiAgICAgICAgXCJURUFcIixcclxuICAgICAgICBcIlRFTlwiLFxyXG4gICAgICAgIFwiVEhFXCIsXHJcbiAgICAgICAgXCJUSUVcIixcclxuICAgICAgICBcIlRJTlwiLFxyXG4gICAgICAgIFwiVE9FXCIsXHJcbiAgICAgICAgXCJUT09cIixcclxuICAgICAgICBcIlRPUFwiLFxyXG4gICAgICAgIFwiVFdPXCIsXHJcbiAgICAgICAgXCJVU0VcIixcclxuICAgICAgICBcIldBUlwiLFxyXG4gICAgICAgIFwiV0FYXCIsXHJcbiAgICAgICAgXCJXQVlcIixcclxuICAgICAgICBcIldFVFwiLFxyXG4gICAgICAgIFwiV0hPXCIsXHJcbiAgICAgICAgXCJXSFlcIixcclxuICAgICAgICBcIllFU1wiLFxyXG4gICAgICAgIFwiWU9VXCIsXHJcbiAgICBdLFxyXG4gICAgW1xyXG4gICAgICAgIFwiQUJMRVwiLFxyXG4gICAgICAgIFwiQUNJRFwiLFxyXG4gICAgICAgIFwiQUxTT1wiLFxyXG4gICAgICAgIFwiQVJDSFwiLFxyXG4gICAgICAgIFwiQVJFQVwiLFxyXG4gICAgICAgIFwiQVJNWVwiLFxyXG4gICAgICAgIFwiQVhJU1wiLFxyXG4gICAgICAgIFwiQkFCWVwiLFxyXG4gICAgICAgIFwiQkFDS1wiLFxyXG4gICAgICAgIFwiQkFMRVwiLFxyXG4gICAgICAgIFwiQkFMTFwiLFxyXG4gICAgICAgIFwiQkFORFwiLFxyXG4gICAgICAgIFwiQkFOR1wiLFxyXG4gICAgICAgIFwiQkFOS1wiLFxyXG4gICAgICAgIFwiQkFSS1wiLFxyXG4gICAgICAgIFwiQkFTRVwiLFxyXG4gICAgICAgIFwiQkFUSFwiLFxyXG4gICAgICAgIFwiQkVBS1wiLFxyXG4gICAgICAgIFwiQkVBVFwiLFxyXG4gICAgICAgIFwiQkVFRlwiLFxyXG4gICAgICAgIFwiQkVFUlwiLFxyXG4gICAgICAgIFwiQkVMTFwiLFxyXG4gICAgICAgIFwiQkVMVFwiLFxyXG4gICAgICAgIFwiQkVOVFwiLFxyXG4gICAgICAgIFwiQklMTFwiLFxyXG4gICAgICAgIFwiQklSRFwiLFxyXG4gICAgICAgIFwiQklURVwiLFxyXG4gICAgICAgIFwiQkxPV1wiLFxyXG4gICAgICAgIFwiQkxVRVwiLFxyXG4gICAgICAgIFwiQk9BVFwiLFxyXG4gICAgICAgIFwiQk9EWVwiLFxyXG4gICAgICAgIFwiQk9NQlwiLFxyXG4gICAgICAgIFwiQk9ORVwiLFxyXG4gICAgICAgIFwiQk9PS1wiLFxyXG4gICAgICAgIFwiQk9PVFwiLFxyXG4gICAgICAgIFwiQk9USFwiLFxyXG4gICAgICAgIFwiQlVMQlwiLFxyXG4gICAgICAgIFwiQlVSTlwiLFxyXG4gICAgICAgIFwiQlVTWVwiLFxyXG4gICAgICAgIFwiQ0FGRVwiLFxyXG4gICAgICAgIFwiQ0FLRVwiLFxyXG4gICAgICAgIFwiQ0FMTFwiLFxyXG4gICAgICAgIFwiQ0FSRFwiLFxyXG4gICAgICAgIFwiQ0FSRVwiLFxyXG4gICAgICAgIFwiQ0FSVFwiLFxyXG4gICAgICAgIFwiQ0FTRVwiLFxyXG4gICAgICAgIFwiQ0FTVFwiLFxyXG4gICAgICAgIFwiQ0FWRVwiLFxyXG4gICAgICAgIFwiQ0VMTFwiLFxyXG4gICAgICAgIFwiQ0hJTlwiLFxyXG4gICAgICAgIFwiQ0xBV1wiLFxyXG4gICAgICAgIFwiQ0xBWVwiLFxyXG4gICAgICAgIFwiQ0xJUFwiLFxyXG4gICAgICAgIFwiQ0xVQlwiLFxyXG4gICAgICAgIFwiQ09BTFwiLFxyXG4gICAgICAgIFwiQ09BVFwiLFxyXG4gICAgICAgIFwiQ09ERVwiLFxyXG4gICAgICAgIFwiQ09JTFwiLFxyXG4gICAgICAgIFwiQ09MRFwiLFxyXG4gICAgICAgIFwiQ09NQlwiLFxyXG4gICAgICAgIFwiQ09NRVwiLFxyXG4gICAgICAgIFwiQ09PS1wiLFxyXG4gICAgICAgIFwiQ09PTFwiLFxyXG4gICAgICAgIFwiQ09QWVwiLFxyXG4gICAgICAgIFwiQ09SRFwiLFxyXG4gICAgICAgIFwiQ09SS1wiLFxyXG4gICAgICAgIFwiQ09TVFwiLFxyXG4gICAgICAgIFwiQ1JPUFwiLFxyXG4gICAgICAgIFwiQ1VTUFwiLFxyXG4gICAgICAgIFwiREFSS1wiLFxyXG4gICAgICAgIFwiREFURVwiLFxyXG4gICAgICAgIFwiREVBRFwiLFxyXG4gICAgICAgIFwiREVBUlwiLFxyXG4gICAgICAgIFwiREVCVFwiLFxyXG4gICAgICAgIFwiREVDS1wiLFxyXG4gICAgICAgIFwiREVFUFwiLFxyXG4gICAgICAgIFwiRElLRVwiLFxyXG4gICAgICAgIFwiRElWRVwiLFxyXG4gICAgICAgIFwiRE9MTFwiLFxyXG4gICAgICAgIFwiRE9PUlwiLFxyXG4gICAgICAgIFwiRE9XTlwiLFxyXG4gICAgICAgIFwiRFJPUFwiLFxyXG4gICAgICAgIFwiRFVDVFwiLFxyXG4gICAgICAgIFwiRFVMTFwiLFxyXG4gICAgICAgIFwiRFVTVFwiLFxyXG4gICAgICAgIFwiRFVUWVwiLFxyXG4gICAgICAgIFwiRUFDSFwiLFxyXG4gICAgICAgIFwiRUFTVFwiLFxyXG4gICAgICAgIFwiRUFTWVwiLFxyXG4gICAgICAgIFwiRURHRVwiLFxyXG4gICAgICAgIFwiRU5WWVwiLFxyXG4gICAgICAgIFwiRVZFTlwiLFxyXG4gICAgICAgIFwiRVZFUlwiLFxyXG4gICAgICAgIFwiRkFDRVwiLFxyXG4gICAgICAgIFwiRkFDVFwiLFxyXG4gICAgICAgIFwiRkFJUlwiLFxyXG4gICAgICAgIFwiRkFMTFwiLFxyXG4gICAgICAgIFwiRkFSTVwiLFxyXG4gICAgICAgIFwiRkVBUlwiLFxyXG4gICAgICAgIFwiRklSRVwiLFxyXG4gICAgICAgIFwiRklTSFwiLFxyXG4gICAgICAgIFwiRklWRVwiLFxyXG4gICAgICAgIFwiRkxBR1wiLFxyXG4gICAgICAgIFwiRkxBVFwiLFxyXG4gICAgICAgIFwiRkxPV1wiLFxyXG4gICAgICAgIFwiRk9MRFwiLFxyXG4gICAgICAgIFwiRk9PRFwiLFxyXG4gICAgICAgIFwiRk9PVFwiLFxyXG4gICAgICAgIFwiRk9SS1wiLFxyXG4gICAgICAgIFwiRk9STVwiLFxyXG4gICAgICAgIFwiRk9VUlwiLFxyXG4gICAgICAgIFwiRk9XTFwiLFxyXG4gICAgICAgIFwiRlJFRVwiLFxyXG4gICAgICAgIFwiRlJPTVwiLFxyXG4gICAgICAgIFwiRlVMTFwiLFxyXG4gICAgICAgIFwiRlVNRVwiLFxyXG4gICAgICAgIFwiR0FURVwiLFxyXG4gICAgICAgIFwiR0VSTVwiLFxyXG4gICAgICAgIFwiR0lMTFwiLFxyXG4gICAgICAgIFwiR0lSTFwiLFxyXG4gICAgICAgIFwiR0lWRVwiLFxyXG4gICAgICAgIFwiR09BVFwiLFxyXG4gICAgICAgIFwiR09MRFwiLFxyXG4gICAgICAgIFwiR09PRFwiLFxyXG4gICAgICAgIFwiR1JBTVwiLFxyXG4gICAgICAgIFwiR1JBWVwiLFxyXG4gICAgICAgIFwiR1JFWVwiLFxyXG4gICAgICAgIFwiR1JJUFwiLFxyXG4gICAgICAgIFwiSEFJUlwiLFxyXG4gICAgICAgIFwiSEFMRlwiLFxyXG4gICAgICAgIFwiSEFORFwiLFxyXG4gICAgICAgIFwiSEFSRFwiLFxyXG4gICAgICAgIFwiSEFURVwiLFxyXG4gICAgICAgIFwiSEFWRVwiLFxyXG4gICAgICAgIFwiSEVBRFwiLFxyXG4gICAgICAgIFwiSEVBVFwiLFxyXG4gICAgICAgIFwiSEVMUFwiLFxyXG4gICAgICAgIFwiSEVSRVwiLFxyXG4gICAgICAgIFwiSElHSFwiLFxyXG4gICAgICAgIFwiSElMTFwiLFxyXG4gICAgICAgIFwiSElSRVwiLFxyXG4gICAgICAgIFwiSElTU1wiLFxyXG4gICAgICAgIFwiSE9MRFwiLFxyXG4gICAgICAgIFwiSE9MRVwiLFxyXG4gICAgICAgIFwiSE9NRVwiLFxyXG4gICAgICAgIFwiSE9PRlwiLFxyXG4gICAgICAgIFwiSE9PS1wiLFxyXG4gICAgICAgIFwiSE9QRVwiLFxyXG4gICAgICAgIFwiSE9STlwiLFxyXG4gICAgICAgIFwiSE9TVFwiLFxyXG4gICAgICAgIFwiSE9VUlwiLFxyXG4gICAgICAgIFwiSFVOVFwiLFxyXG4gICAgICAgIFwiSFVSVFwiLFxyXG4gICAgICAgIFwiSURFQVwiLFxyXG4gICAgICAgIFwiSU5UT1wiLFxyXG4gICAgICAgIFwiSVJPTlwiLFxyXG4gICAgICAgIFwiSkFaWlwiLFxyXG4gICAgICAgIFwiSkVSS1wiLFxyXG4gICAgICAgIFwiSk9JTlwiLFxyXG4gICAgICAgIFwiSlVMWVwiLFxyXG4gICAgICAgIFwiSlVNUFwiLFxyXG4gICAgICAgIFwiSlVORVwiLFxyXG4gICAgICAgIFwiSlVSWVwiLFxyXG4gICAgICAgIFwiS0VFUFwiLFxyXG4gICAgICAgIFwiS0lDS1wiLFxyXG4gICAgICAgIFwiS0lORFwiLFxyXG4gICAgICAgIFwiS0lOR1wiLFxyXG4gICAgICAgIFwiS0lTU1wiLFxyXG4gICAgICAgIFwiS05FRVwiLFxyXG4gICAgICAgIFwiS05PVFwiLFxyXG4gICAgICAgIFwiTEFDRVwiLFxyXG4gICAgICAgIFwiTEFLRVwiLFxyXG4gICAgICAgIFwiTEFNRVwiLFxyXG4gICAgICAgIFwiTEFNUFwiLFxyXG4gICAgICAgIFwiTEFORFwiLFxyXG4gICAgICAgIFwiTEFTVFwiLFxyXG4gICAgICAgIFwiTEFURVwiLFxyXG4gICAgICAgIFwiTEFWQVwiLFxyXG4gICAgICAgIFwiTEFaWVwiLFxyXG4gICAgICAgIFwiTEVBRFwiLFxyXG4gICAgICAgIFwiTEVBRlwiLFxyXG4gICAgICAgIFwiTEVGVFwiLFxyXG4gICAgICAgIFwiTEVOU1wiLFxyXG4gICAgICAgIFwiTEVTU1wiLFxyXG4gICAgICAgIFwiTElGRVwiLFxyXG4gICAgICAgIFwiTElGVFwiLFxyXG4gICAgICAgIFwiTElLRVwiLFxyXG4gICAgICAgIFwiTElNRVwiLFxyXG4gICAgICAgIFwiTElORVwiLFxyXG4gICAgICAgIFwiTElOS1wiLFxyXG4gICAgICAgIFwiTElTVFwiLFxyXG4gICAgICAgIFwiTE9BRFwiLFxyXG4gICAgICAgIFwiTE9BTlwiLFxyXG4gICAgICAgIFwiTE9DS1wiLFxyXG4gICAgICAgIFwiTE9OR1wiLFxyXG4gICAgICAgIFwiTE9PS1wiLFxyXG4gICAgICAgIFwiTE9TU1wiLFxyXG4gICAgICAgIFwiTE9VRFwiLFxyXG4gICAgICAgIFwiTE9WRVwiLFxyXG4gICAgICAgIFwiTFVDS1wiLFxyXG4gICAgICAgIFwiTFVNUFwiLFxyXG4gICAgICAgIFwiTFVOR1wiLFxyXG4gICAgICAgIFwiTUFLRVwiLFxyXG4gICAgICAgIFwiTUFMRVwiLFxyXG4gICAgICAgIFwiTUFOWVwiLFxyXG4gICAgICAgIFwiTUFSS1wiLFxyXG4gICAgICAgIFwiTUFTU1wiLFxyXG4gICAgICAgIFwiTUFTVFwiLFxyXG4gICAgICAgIFwiTUVBTFwiLFxyXG4gICAgICAgIFwiTUVBTlwiLFxyXG4gICAgICAgIFwiTUVBVFwiLFxyXG4gICAgICAgIFwiTUVMVFwiLFxyXG4gICAgICAgIFwiTUVPV1wiLFxyXG4gICAgICAgIFwiTUVTU1wiLFxyXG4gICAgICAgIFwiTUlMS1wiLFxyXG4gICAgICAgIFwiTUlMTFwiLFxyXG4gICAgICAgIFwiTUlORFwiLFxyXG4gICAgICAgIFwiTUlORVwiLFxyXG4gICAgICAgIFwiTUlTVFwiLFxyXG4gICAgICAgIFwiTU9PRFwiLFxyXG4gICAgICAgIFwiTU9PTlwiLFxyXG4gICAgICAgIFwiTU9SRVwiLFxyXG4gICAgICAgIFwiTU9TVFwiLFxyXG4gICAgICAgIFwiTU9WRVwiLFxyXG4gICAgICAgIFwiTVVDSFwiLFxyXG4gICAgICAgIFwiTkFJTFwiLFxyXG4gICAgICAgIFwiTkFNRVwiLFxyXG4gICAgICAgIFwiTkFWWVwiLFxyXG4gICAgICAgIFwiTkVBUlwiLFxyXG4gICAgICAgIFwiTkVBVFwiLFxyXG4gICAgICAgIFwiTkVDS1wiLFxyXG4gICAgICAgIFwiTkVFRFwiLFxyXG4gICAgICAgIFwiTkVTVFwiLFxyXG4gICAgICAgIFwiTkVXU1wiLFxyXG4gICAgICAgIFwiTkVYVFwiLFxyXG4gICAgICAgIFwiTklDRVwiLFxyXG4gICAgICAgIFwiTklORVwiLFxyXG4gICAgICAgIFwiTk9ERVwiLFxyXG4gICAgICAgIFwiTk9TRVwiLFxyXG4gICAgICAgIFwiTk9URVwiLFxyXG4gICAgICAgIFwiT05DRVwiLFxyXG4gICAgICAgIFwiT05MWVwiLFxyXG4gICAgICAgIFwiT05UT1wiLFxyXG4gICAgICAgIFwiT1BFTlwiLFxyXG4gICAgICAgIFwiT1ZBTFwiLFxyXG4gICAgICAgIFwiT1ZFTlwiLFxyXG4gICAgICAgIFwiT1ZFUlwiLFxyXG4gICAgICAgIFwiUEFHRVwiLFxyXG4gICAgICAgIFwiUEFJTlwiLFxyXG4gICAgICAgIFwiUEFJUlwiLFxyXG4gICAgICAgIFwiUEFSS1wiLFxyXG4gICAgICAgIFwiUEFSVFwiLFxyXG4gICAgICAgIFwiUEFTVFwiLFxyXG4gICAgICAgIFwiUEFUSFwiLFxyXG4gICAgICAgIFwiUElQRVwiLFxyXG4gICAgICAgIFwiUExBTlwiLFxyXG4gICAgICAgIFwiUExBWVwiLFxyXG4gICAgICAgIFwiUExPV1wiLFxyXG4gICAgICAgIFwiUExVR1wiLFxyXG4gICAgICAgIFwiUE9PTFwiLFxyXG4gICAgICAgIFwiUE9PUlwiLFxyXG4gICAgICAgIFwiUE9TVFwiLFxyXG4gICAgICAgIFwiUFVMTFwiLFxyXG4gICAgICAgIFwiUFVNUFwiLFxyXG4gICAgICAgIFwiUFVSRVwiLFxyXG4gICAgICAgIFwiUFVSUlwiLFxyXG4gICAgICAgIFwiUFVTSFwiLFxyXG4gICAgICAgIFwiUkFDRVwiLFxyXG4gICAgICAgIFwiUkFJTFwiLFxyXG4gICAgICAgIFwiUkFJTlwiLFxyXG4gICAgICAgIFwiUkFURVwiLFxyXG4gICAgICAgIFwiUkVBTFwiLFxyXG4gICAgICAgIFwiUkVOVFwiLFxyXG4gICAgICAgIFwiUkVTVFwiLFxyXG4gICAgICAgIFwiUklDRVwiLFxyXG4gICAgICAgIFwiUklDSFwiLFxyXG4gICAgICAgIFwiUklOR1wiLFxyXG4gICAgICAgIFwiUklTRVwiLFxyXG4gICAgICAgIFwiUk9BRFwiLFxyXG4gICAgICAgIFwiUk9DS1wiLFxyXG4gICAgICAgIFwiUk9MTFwiLFxyXG4gICAgICAgIFwiUk9PRlwiLFxyXG4gICAgICAgIFwiUk9PTVwiLFxyXG4gICAgICAgIFwiUk9PVFwiLFxyXG4gICAgICAgIFwiUlVERVwiLFxyXG4gICAgICAgIFwiUlVMRVwiLFxyXG4gICAgICAgIFwiUlVTVFwiLFxyXG4gICAgICAgIFwiU0FGRVwiLFxyXG4gICAgICAgIFwiU0FJTFwiLFxyXG4gICAgICAgIFwiU0FMRVwiLFxyXG4gICAgICAgIFwiU0FMVFwiLFxyXG4gICAgICAgIFwiU0FNRVwiLFxyXG4gICAgICAgIFwiU0FORFwiLFxyXG4gICAgICAgIFwiU0VBTFwiLFxyXG4gICAgICAgIFwiU0VBVFwiLFxyXG4gICAgICAgIFwiU0VFRFwiLFxyXG4gICAgICAgIFwiU0VFTVwiLFxyXG4gICAgICAgIFwiU0VMRlwiLFxyXG4gICAgICAgIFwiU0VORFwiLFxyXG4gICAgICAgIFwiU0hJUFwiLFxyXG4gICAgICAgIFwiU0hPRVwiLFxyXG4gICAgICAgIFwiU0hPV1wiLFxyXG4gICAgICAgIFwiU0hVVFwiLFxyXG4gICAgICAgIFwiU0lERVwiLFxyXG4gICAgICAgIFwiU0lHTlwiLFxyXG4gICAgICAgIFwiU0lMS1wiLFxyXG4gICAgICAgIFwiU0lMTFwiLFxyXG4gICAgICAgIFwiU0laRVwiLFxyXG4gICAgICAgIFwiU0tJTlwiLFxyXG4gICAgICAgIFwiU0xJUFwiLFxyXG4gICAgICAgIFwiU0xPV1wiLFxyXG4gICAgICAgIFwiU05PV1wiLFxyXG4gICAgICAgIFwiU09BUFwiLFxyXG4gICAgICAgIFwiU09DS1wiLFxyXG4gICAgICAgIFwiU09GVFwiLFxyXG4gICAgICAgIFwiU09JTFwiLFxyXG4gICAgICAgIFwiU09NRVwiLFxyXG4gICAgICAgIFwiU09OR1wiLFxyXG4gICAgICAgIFwiU09SVFwiLFxyXG4gICAgICAgIFwiU09VUFwiLFxyXG4gICAgICAgIFwiU1BJVFwiLFxyXG4gICAgICAgIFwiU1BPVFwiLFxyXG4gICAgICAgIFwiU1RBUlwiLFxyXG4gICAgICAgIFwiU1RFTVwiLFxyXG4gICAgICAgIFwiU1RFUFwiLFxyXG4gICAgICAgIFwiU1RPUFwiLFxyXG4gICAgICAgIFwiU1VDSFwiLFxyXG4gICAgICAgIFwiU1dJTVwiLFxyXG4gICAgICAgIFwiVEFJTFwiLFxyXG4gICAgICAgIFwiVEFLRVwiLFxyXG4gICAgICAgIFwiVEFMS1wiLFxyXG4gICAgICAgIFwiVEFMTFwiLFxyXG4gICAgICAgIFwiVEFNRVwiLFxyXG4gICAgICAgIFwiVEFYSVwiLFxyXG4gICAgICAgIFwiVEVBUlwiLFxyXG4gICAgICAgIFwiVEVOVFwiLFxyXG4gICAgICAgIFwiVEVSTVwiLFxyXG4gICAgICAgIFwiVEVTVFwiLFxyXG4gICAgICAgIFwiVEhBTlwiLFxyXG4gICAgICAgIFwiVEhBVFwiLFxyXG4gICAgICAgIFwiVEhFTlwiLFxyXG4gICAgICAgIFwiVEhJTlwiLFxyXG4gICAgICAgIFwiVEhJU1wiLFxyXG4gICAgICAgIFwiVElERVwiLFxyXG4gICAgICAgIFwiVElMTFwiLFxyXG4gICAgICAgIFwiVElNRVwiLFxyXG4gICAgICAgIFwiVE9XTlwiLFxyXG4gICAgICAgIFwiVFJBUFwiLFxyXG4gICAgICAgIFwiVFJBWVwiLFxyXG4gICAgICAgIFwiVFJFRVwiLFxyXG4gICAgICAgIFwiVFJVRVwiLFxyXG4gICAgICAgIFwiVFVCRVwiLFxyXG4gICAgICAgIFwiVFVORVwiLFxyXG4gICAgICAgIFwiVFVSTlwiLFxyXG4gICAgICAgIFwiVFdJTlwiLFxyXG4gICAgICAgIFwiVUdMWVwiLFxyXG4gICAgICAgIFwiVU5ET1wiLFxyXG4gICAgICAgIFwiVU5JVFwiLFxyXG4gICAgICAgIFwiVVBPTlwiLFxyXG4gICAgICAgIFwiVVNFRFwiLFxyXG4gICAgICAgIFwiVkVSWVwiLFxyXG4gICAgICAgIFwiVklFV1wiLFxyXG4gICAgICAgIFwiVklTQVwiLFxyXG4gICAgICAgIFwiVk9MVFwiLFxyXG4gICAgICAgIFwiVk9URVwiLFxyXG4gICAgICAgIFwiV0FMS1wiLFxyXG4gICAgICAgIFwiV0FMTFwiLFxyXG4gICAgICAgIFwiV0FSTVwiLFxyXG4gICAgICAgIFwiV0FTSFwiLFxyXG4gICAgICAgIFwiV0FWRVwiLFxyXG4gICAgICAgIFwiV0VBS1wiLFxyXG4gICAgICAgIFwiV0VFS1wiLFxyXG4gICAgICAgIFwiV0VMTFwiLFxyXG4gICAgICAgIFwiV0VTVFwiLFxyXG4gICAgICAgIFwiV0hBVFwiLFxyXG4gICAgICAgIFwiV0hFTlwiLFxyXG4gICAgICAgIFwiV0hJUFwiLFxyXG4gICAgICAgIFwiV0lERVwiLFxyXG4gICAgICAgIFwiV0lGRVwiLFxyXG4gICAgICAgIFwiV0lMRFwiLFxyXG4gICAgICAgIFwiV0lMTFwiLFxyXG4gICAgICAgIFwiV0lORFwiLFxyXG4gICAgICAgIFwiV0lORVwiLFxyXG4gICAgICAgIFwiV0lOR1wiLFxyXG4gICAgICAgIFwiV0lSRVwiLFxyXG4gICAgICAgIFwiV0lTRVwiLFxyXG4gICAgICAgIFwiV0lUSFwiLFxyXG4gICAgICAgIFwiV09PRFwiLFxyXG4gICAgICAgIFwiV09PTFwiLFxyXG4gICAgICAgIFwiV09SRFwiLFxyXG4gICAgICAgIFwiV09SS1wiLFxyXG4gICAgICAgIFwiV09STVwiLFxyXG4gICAgICAgIFwiWUFXTlwiLFxyXG4gICAgICAgIFwiWUVBUlwiLFxyXG4gICAgICAgIFwiWklOQ1wiLFxyXG4gICAgXSxcclxuICAgIFtcclxuICAgICAgICBcIkFCT1VUXCIsXHJcbiAgICAgICAgXCJBQ1RPUlwiLFxyXG4gICAgICAgIFwiQUZURVJcIixcclxuICAgICAgICBcIkFHQUlOXCIsXHJcbiAgICAgICAgXCJBR0VOVFwiLFxyXG4gICAgICAgIFwiQUxPTkdcIixcclxuICAgICAgICBcIkFNT05HXCIsXHJcbiAgICAgICAgXCJBTkdMRVwiLFxyXG4gICAgICAgIFwiQU5HUllcIixcclxuICAgICAgICBcIkFOS0xFXCIsXHJcbiAgICAgICAgXCJBUFBMRVwiLFxyXG4gICAgICAgIFwiQVBSSUxcIixcclxuICAgICAgICBcIkFTU0VUXCIsXHJcbiAgICAgICAgXCJBV0FLRVwiLFxyXG4gICAgICAgIFwiQkFTRURcIixcclxuICAgICAgICBcIkJBU0lOXCIsXHJcbiAgICAgICAgXCJCRUFSRFwiLFxyXG4gICAgICAgIFwiQkVSUllcIixcclxuICAgICAgICBcIkJJUlRIXCIsXHJcbiAgICAgICAgXCJCTEFDS1wiLFxyXG4gICAgICAgIFwiQkxBREVcIixcclxuICAgICAgICBcIkJMQU1FXCIsXHJcbiAgICAgICAgXCJCTE9PRFwiLFxyXG4gICAgICAgIFwiQk9BUkRcIixcclxuICAgICAgICBcIkJSQUlOXCIsXHJcbiAgICAgICAgXCJCUkFLRVwiLFxyXG4gICAgICAgIFwiQlJBU1NcIixcclxuICAgICAgICBcIkJSQVZFXCIsXHJcbiAgICAgICAgXCJCUkVBRFwiLFxyXG4gICAgICAgIFwiQlJFQUtcIixcclxuICAgICAgICBcIkJSSUNLXCIsXHJcbiAgICAgICAgXCJCUk9XTlwiLFxyXG4gICAgICAgIFwiQlJVU0hcIixcclxuICAgICAgICBcIkJVTkNIXCIsXHJcbiAgICAgICAgXCJCVVJTVFwiLFxyXG4gICAgICAgIFwiQ0FVU0VcIixcclxuICAgICAgICBcIkNIQUlOXCIsXHJcbiAgICAgICAgXCJDSEFJUlwiLFxyXG4gICAgICAgIFwiQ0hBTEtcIixcclxuICAgICAgICBcIkNIRUFQXCIsXHJcbiAgICAgICAgXCJDSEVDS1wiLFxyXG4gICAgICAgIFwiQ0hFU1RcIixcclxuICAgICAgICBcIkNISUVGXCIsXHJcbiAgICAgICAgXCJDSElMRFwiLFxyXG4gICAgICAgIFwiQ0hJTkFcIixcclxuICAgICAgICBcIkNMQUlNXCIsXHJcbiAgICAgICAgXCJDTEVBTlwiLFxyXG4gICAgICAgIFwiQ0xFQVJcIixcclxuICAgICAgICBcIkNMT0NLXCIsXHJcbiAgICAgICAgXCJDTE9USFwiLFxyXG4gICAgICAgIFwiQ0xPVURcIixcclxuICAgICAgICBcIkNPTE9SXCIsXHJcbiAgICAgICAgXCJDT1VHSFwiLFxyXG4gICAgICAgIFwiQ09VUlRcIixcclxuICAgICAgICBcIkNPVkVSXCIsXHJcbiAgICAgICAgXCJDUkFDS1wiLFxyXG4gICAgICAgIFwiQ1JJTUVcIixcclxuICAgICAgICBcIkNST1NTXCIsXHJcbiAgICAgICAgXCJDUlVFTFwiLFxyXG4gICAgICAgIFwiQ1JVU0hcIixcclxuICAgICAgICBcIkNVUlZFXCIsXHJcbiAgICAgICAgXCJEQU5DRVwiLFxyXG4gICAgICAgIFwiREVBVEhcIixcclxuICAgICAgICBcIkRFQklUXCIsXHJcbiAgICAgICAgXCJESVJUWVwiLFxyXG4gICAgICAgIFwiRElUQ0hcIixcclxuICAgICAgICBcIkRPVUJUXCIsXHJcbiAgICAgICAgXCJEUkFJTlwiLFxyXG4gICAgICAgIFwiRFJFQU1cIixcclxuICAgICAgICBcIkRSRVNTXCIsXHJcbiAgICAgICAgXCJEUklGVFwiLFxyXG4gICAgICAgIFwiRFJJTktcIixcclxuICAgICAgICBcIkVBUkxZXCIsXHJcbiAgICAgICAgXCJFQVJUSFwiLFxyXG4gICAgICAgIFwiRUlHSFRcIixcclxuICAgICAgICBcIkVNUFRZXCIsXHJcbiAgICAgICAgXCJFTkVNWVwiLFxyXG4gICAgICAgIFwiRVFVQUxcIixcclxuICAgICAgICBcIkVSUk9SXCIsXHJcbiAgICAgICAgXCJFVkVOVFwiLFxyXG4gICAgICAgIFwiRVZFUllcIixcclxuICAgICAgICBcIkVYQUNUXCIsXHJcbiAgICAgICAgXCJGQUxTRVwiLFxyXG4gICAgICAgIFwiRkFVTFRcIixcclxuICAgICAgICBcIkZFVkVSXCIsXHJcbiAgICAgICAgXCJGSUJFUlwiLFxyXG4gICAgICAgIFwiRklFTERcIixcclxuICAgICAgICBcIkZJRlRIXCIsXHJcbiAgICAgICAgXCJGSUZUWVwiLFxyXG4gICAgICAgIFwiRklHSFRcIixcclxuICAgICAgICBcIkZJUkVEXCIsXHJcbiAgICAgICAgXCJGSVJTVFwiLFxyXG4gICAgICAgIFwiRklYRURcIixcclxuICAgICAgICBcIkZMQU1FXCIsXHJcbiAgICAgICAgXCJGTEFTSFwiLFxyXG4gICAgICAgIFwiRkxBU0tcIixcclxuICAgICAgICBcIkZMRVNIXCIsXHJcbiAgICAgICAgXCJGTElOVFwiLFxyXG4gICAgICAgIFwiRkxPT0RcIixcclxuICAgICAgICBcIkZMT09SXCIsXHJcbiAgICAgICAgXCJGTE9VUlwiLFxyXG4gICAgICAgIFwiRk9DVVNcIixcclxuICAgICAgICBcIkZPUkNFXCIsXHJcbiAgICAgICAgXCJGT1JUWVwiLFxyXG4gICAgICAgIFwiRlJBTUVcIixcclxuICAgICAgICBcIkZSRVNIXCIsXHJcbiAgICAgICAgXCJGUk9OVFwiLFxyXG4gICAgICAgIFwiRlJPU1RcIixcclxuICAgICAgICBcIkZSVUlUXCIsXHJcbiAgICAgICAgXCJGVU5OWVwiLFxyXG4gICAgICAgIFwiR0xBTkRcIixcclxuICAgICAgICBcIkdMQVNTXCIsXHJcbiAgICAgICAgXCJHTE9WRVwiLFxyXG4gICAgICAgIFwiR1JBSU5cIixcclxuICAgICAgICBcIkdSQU5EXCIsXHJcbiAgICAgICAgXCJHUkFTU1wiLFxyXG4gICAgICAgIFwiR1JFQVRcIixcclxuICAgICAgICBcIkdSRUVOXCIsXHJcbiAgICAgICAgXCJHUklFRlwiLFxyXG4gICAgICAgIFwiR1JPU1NcIixcclxuICAgICAgICBcIkdST1VQXCIsXHJcbiAgICAgICAgXCJHVUFSRFwiLFxyXG4gICAgICAgIFwiR1VFU1NcIixcclxuICAgICAgICBcIkdVSURFXCIsXHJcbiAgICAgICAgXCJIQUJJVFwiLFxyXG4gICAgICAgIFwiSEFQUFlcIixcclxuICAgICAgICBcIkhFQVJUXCIsXHJcbiAgICAgICAgXCJIRUFWWVwiLFxyXG4gICAgICAgIFwiSEVER0VcIixcclxuICAgICAgICBcIkhJTkdFXCIsXHJcbiAgICAgICAgXCJIT05FWVwiLFxyXG4gICAgICAgIFwiSE9SU0VcIixcclxuICAgICAgICBcIkhPVEVMXCIsXHJcbiAgICAgICAgXCJIT1VTRVwiLFxyXG4gICAgICAgIFwiSFVNQU5cIixcclxuICAgICAgICBcIkhVTU9SXCIsXHJcbiAgICAgICAgXCJIVVJSWVwiLFxyXG4gICAgICAgIFwiSFlFTkFcIixcclxuICAgICAgICBcIklNQUdFXCIsXHJcbiAgICAgICAgXCJJTkRFWFwiLFxyXG4gICAgICAgIFwiSU5MRVRcIixcclxuICAgICAgICBcIklOTkVSXCIsXHJcbiAgICAgICAgXCJJTlBVVFwiLFxyXG4gICAgICAgIFwiSkVMTFlcIixcclxuICAgICAgICBcIkpFV0VMXCIsXHJcbiAgICAgICAgXCJKT0lOVFwiLFxyXG4gICAgICAgIFwiSlVER0VcIixcclxuICAgICAgICBcIkpVSUNFXCIsXHJcbiAgICAgICAgXCJLTklGRVwiLFxyXG4gICAgICAgIFwiS05PQ0tcIixcclxuICAgICAgICBcIkxBUkdFXCIsXHJcbiAgICAgICAgXCJMQVVHSFwiLFxyXG4gICAgICAgIFwiTEFZRVJcIixcclxuICAgICAgICBcIkxFQVNUXCIsXHJcbiAgICAgICAgXCJMRUdBTFwiLFxyXG4gICAgICAgIFwiTEVWRUxcIixcclxuICAgICAgICBcIkxFVkVSXCIsXHJcbiAgICAgICAgXCJMSUdIVFwiLFxyXG4gICAgICAgIFwiTElNSVRcIixcclxuICAgICAgICBcIkxJTkVOXCIsXHJcbiAgICAgICAgXCJMSVRFUlwiLFxyXG4gICAgICAgIFwiTElWRVJcIixcclxuICAgICAgICBcIkxPQ0FMXCIsXHJcbiAgICAgICAgXCJMT0NVU1wiLFxyXG4gICAgICAgIFwiTE9PU0VcIixcclxuICAgICAgICBcIkxVTkNIXCIsXHJcbiAgICAgICAgXCJNQURBTVwiLFxyXG4gICAgICAgIFwiTUFHSUNcIixcclxuICAgICAgICBcIk1BTklBXCIsXHJcbiAgICAgICAgXCJNQVJDSFwiLFxyXG4gICAgICAgIFwiTUFUQ0hcIixcclxuICAgICAgICBcIk1FVEFMXCIsXHJcbiAgICAgICAgXCJNRVRFUlwiLFxyXG4gICAgICAgIFwiTUlORVJcIixcclxuICAgICAgICBcIk1JWEVEXCIsXHJcbiAgICAgICAgXCJNT0RFTFwiLFxyXG4gICAgICAgIFwiTU9ORVlcIixcclxuICAgICAgICBcIk1PTlRIXCIsXHJcbiAgICAgICAgXCJNT1JBTFwiLFxyXG4gICAgICAgIFwiTU9VVEhcIixcclxuICAgICAgICBcIk1VU0lDXCIsXHJcbiAgICAgICAgXCJOQVNUWVwiLFxyXG4gICAgICAgIFwiTkVSVkVcIixcclxuICAgICAgICBcIk5JR0hUXCIsXHJcbiAgICAgICAgXCJOT0lTRVwiLFxyXG4gICAgICAgIFwiTk9SVEhcIixcclxuICAgICAgICBcIk5PVEVEXCIsXHJcbiAgICAgICAgXCJOVVJTRVwiLFxyXG4gICAgICAgIFwiT0ZGRVJcIixcclxuICAgICAgICBcIk9MSVZFXCIsXHJcbiAgICAgICAgXCJPUEVSQVwiLFxyXG4gICAgICAgIFwiT1BJVU1cIixcclxuICAgICAgICBcIk9SREVSXCIsXHJcbiAgICAgICAgXCJPUkdBTlwiLFxyXG4gICAgICAgIFwiT1RIRVJcIixcclxuICAgICAgICBcIk9VVEVSXCIsXHJcbiAgICAgICAgXCJPV05FUlwiLFxyXG4gICAgICAgIFwiUEFJTlRcIixcclxuICAgICAgICBcIlBBUEVSXCIsXHJcbiAgICAgICAgXCJQQVJUWVwiLFxyXG4gICAgICAgIFwiUEFTVEVcIixcclxuICAgICAgICBcIlBFQUNFXCIsXHJcbiAgICAgICAgXCJQRURBTFwiLFxyXG4gICAgICAgIFwiUEVUQUxcIixcclxuICAgICAgICBcIlBJQU5PXCIsXHJcbiAgICAgICAgXCJQTEFDRVwiLFxyXG4gICAgICAgIFwiUExBSU5cIixcclxuICAgICAgICBcIlBMQU5FXCIsXHJcbiAgICAgICAgXCJQTEFOVFwiLFxyXG4gICAgICAgIFwiUExBVEVcIixcclxuICAgICAgICBcIlBPSU5UXCIsXHJcbiAgICAgICAgXCJQT1dFUlwiLFxyXG4gICAgICAgIFwiUFJJQ0VcIixcclxuICAgICAgICBcIlBSSUNLXCIsXHJcbiAgICAgICAgXCJQUklNRVwiLFxyXG4gICAgICAgIFwiUFJJTlRcIixcclxuICAgICAgICBcIlBST09GXCIsXHJcbiAgICAgICAgXCJQUk9TRVwiLFxyXG4gICAgICAgIFwiUFJPVURcIixcclxuICAgICAgICBcIlBVUElMXCIsXHJcbiAgICAgICAgXCJRVUFDS1wiLFxyXG4gICAgICAgIFwiUVVFRU5cIixcclxuICAgICAgICBcIlFVSUNLXCIsXHJcbiAgICAgICAgXCJRVUlFVFwiLFxyXG4gICAgICAgIFwiUVVJVEVcIixcclxuICAgICAgICBcIlJBRElPXCIsXHJcbiAgICAgICAgXCJSQU5HRVwiLFxyXG4gICAgICAgIFwiUkFUSU9cIixcclxuICAgICAgICBcIlJFQURZXCIsXHJcbiAgICAgICAgXCJSSUdIVFwiLFxyXG4gICAgICAgIFwiUklWQUxcIixcclxuICAgICAgICBcIlJJVkVSXCIsXHJcbiAgICAgICAgXCJST1VHSFwiLFxyXG4gICAgICAgIFwiUk9VTkRcIixcclxuICAgICAgICBcIlJPWUFMXCIsXHJcbiAgICAgICAgXCJSVUxFUlwiLFxyXG4gICAgICAgIFwiU0FMQURcIixcclxuICAgICAgICBcIlNDQUxFXCIsXHJcbiAgICAgICAgXCJTQ0FSUFwiLFxyXG4gICAgICAgIFwiU0NSRVdcIixcclxuICAgICAgICBcIlNFTlNFXCIsXHJcbiAgICAgICAgXCJTRVBBTFwiLFxyXG4gICAgICAgIFwiU0VSVU1cIixcclxuICAgICAgICBcIlNFVkVOXCIsXHJcbiAgICAgICAgXCJTSEFERVwiLFxyXG4gICAgICAgIFwiU0hBS0VcIixcclxuICAgICAgICBcIlNIQUxFXCIsXHJcbiAgICAgICAgXCJTSEFNRVwiLFxyXG4gICAgICAgIFwiU0hBUkVcIixcclxuICAgICAgICBcIlNIQVJQXCIsXHJcbiAgICAgICAgXCJTSEFWRVwiLFxyXG4gICAgICAgIFwiU0hFQVJcIixcclxuICAgICAgICBcIlNIRUVQXCIsXHJcbiAgICAgICAgXCJTSEVFVFwiLFxyXG4gICAgICAgIFwiU0hFTEZcIixcclxuICAgICAgICBcIlNIRUxMXCIsXHJcbiAgICAgICAgXCJTSElSVFwiLFxyXG4gICAgICAgIFwiU0hPQ0tcIixcclxuICAgICAgICBcIlNIT1JFXCIsXHJcbiAgICAgICAgXCJTSE9SVFwiLFxyXG4gICAgICAgIFwiU0lHSFRcIixcclxuICAgICAgICBcIlNJTkNFXCIsXHJcbiAgICAgICAgXCJTS0lSVFwiLFxyXG4gICAgICAgIFwiU0tVTExcIixcclxuICAgICAgICBcIlNMQVRFXCIsXHJcbiAgICAgICAgXCJTTEVFUFwiLFxyXG4gICAgICAgIFwiU0xJREVcIixcclxuICAgICAgICBcIlNMT1BFXCIsXHJcbiAgICAgICAgXCJTTUFMTFwiLFxyXG4gICAgICAgIFwiU01BU0hcIixcclxuICAgICAgICBcIlNNRUxMXCIsXHJcbiAgICAgICAgXCJTTUlMRVwiLFxyXG4gICAgICAgIFwiU01PS0VcIixcclxuICAgICAgICBcIlNOQUtFXCIsXHJcbiAgICAgICAgXCJTT0xJRFwiLFxyXG4gICAgICAgIFwiU09SUllcIixcclxuICAgICAgICBcIlNPVU5EXCIsXHJcbiAgICAgICAgXCJTT1VUSFwiLFxyXG4gICAgICAgIFwiU1BBQ0VcIixcclxuICAgICAgICBcIlNQQURFXCIsXHJcbiAgICAgICAgXCJTUEFSS1wiLFxyXG4gICAgICAgIFwiU1BPT05cIixcclxuICAgICAgICBcIlNQT1JUXCIsXHJcbiAgICAgICAgXCJTVEFHRVwiLFxyXG4gICAgICAgIFwiU1RBSU5cIixcclxuICAgICAgICBcIlNUQUlSXCIsXHJcbiAgICAgICAgXCJTVEFMS1wiLFxyXG4gICAgICAgIFwiU1RBTVBcIixcclxuICAgICAgICBcIlNUQVJUXCIsXHJcbiAgICAgICAgXCJTVEVBTVwiLFxyXG4gICAgICAgIFwiU1RFRUxcIixcclxuICAgICAgICBcIlNUSUNLXCIsXHJcbiAgICAgICAgXCJTVElGRlwiLFxyXG4gICAgICAgIFwiU1RJTExcIixcclxuICAgICAgICBcIlNUT05FXCIsXHJcbiAgICAgICAgXCJTVE9SRVwiLFxyXG4gICAgICAgIFwiU1RPUk1cIixcclxuICAgICAgICBcIlNUT1JZXCIsXHJcbiAgICAgICAgXCJTVFJBV1wiLFxyXG4gICAgICAgIFwiU1RVRFlcIixcclxuICAgICAgICBcIlNVR0FSXCIsXHJcbiAgICAgICAgXCJTV0VFVFwiLFxyXG4gICAgICAgIFwiU1dJTkdcIixcclxuICAgICAgICBcIlRBQkxFXCIsXHJcbiAgICAgICAgXCJUQVNURVwiLFxyXG4gICAgICAgIFwiVEhFUkVcIixcclxuICAgICAgICBcIlRISUNLXCIsXHJcbiAgICAgICAgXCJUSElFRlwiLFxyXG4gICAgICAgIFwiVEhJTkdcIixcclxuICAgICAgICBcIlRISVJEXCIsXHJcbiAgICAgICAgXCJUSFJFRVwiLFxyXG4gICAgICAgIFwiVEhVTUJcIixcclxuICAgICAgICBcIlRJR0hUXCIsXHJcbiAgICAgICAgXCJUSVJFRFwiLFxyXG4gICAgICAgIFwiVE9BU1RcIixcclxuICAgICAgICBcIlRPREFZXCIsXHJcbiAgICAgICAgXCJUT05HU1wiLFxyXG4gICAgICAgIFwiVE9PVEhcIixcclxuICAgICAgICBcIlRPVEFMXCIsXHJcbiAgICAgICAgXCJUT1VDSFwiLFxyXG4gICAgICAgIFwiVE9XRUxcIixcclxuICAgICAgICBcIlRPV0VSXCIsXHJcbiAgICAgICAgXCJUUkFERVwiLFxyXG4gICAgICAgIFwiVFJBSU5cIixcclxuICAgICAgICBcIlRSSUNLXCIsXHJcbiAgICAgICAgXCJUUlVDS1wiLFxyXG4gICAgICAgIFwiVFdJQ0VcIixcclxuICAgICAgICBcIlRXSVNUXCIsXHJcbiAgICAgICAgXCJVTkRFUlwiLFxyXG4gICAgICAgIFwiVkFMVUVcIixcclxuICAgICAgICBcIlZBTFZFXCIsXHJcbiAgICAgICAgXCJWQVBPUlwiLFxyXG4gICAgICAgIFwiVkVSU0VcIixcclxuICAgICAgICBcIlZPREtBXCIsXHJcbiAgICAgICAgXCJWT0lDRVwiLFxyXG4gICAgICAgIFwiV0FTVEVcIixcclxuICAgICAgICBcIldBVENIXCIsXHJcbiAgICAgICAgXCJXQVRFUlwiLFxyXG4gICAgICAgIFwiV0VER0VcIixcclxuICAgICAgICBcIldIRUVMXCIsXHJcbiAgICAgICAgXCJXSEVSRVwiLFxyXG4gICAgICAgIFwiV0hJQ0hcIixcclxuICAgICAgICBcIldISUxFXCIsXHJcbiAgICAgICAgXCJXSElURVwiLFxyXG4gICAgICAgIFwiV0lET1dcIixcclxuICAgICAgICBcIldPTUFOXCIsXHJcbiAgICAgICAgXCJXT1JMRFwiLFxyXG4gICAgICAgIFwiV09VTkRcIixcclxuICAgICAgICBcIldSRUNLXCIsXHJcbiAgICAgICAgXCJXUklTVFwiLFxyXG4gICAgICAgIFwiV1JPTkdcIixcclxuICAgICAgICBcIllPVU5HXCIsXHJcbiAgICAgICAgXCJaRUJSQVwiLFxyXG4gICAgXSxcclxuICAgIFtcclxuICAgICAgICBcIkFDUk9TU1wiLFxyXG4gICAgICAgIFwiQUNUSU5HXCIsXHJcbiAgICAgICAgXCJBQ1RJVkVcIixcclxuICAgICAgICBcIkFEVklDRVwiLFxyXG4gICAgICAgIFwiQUdFTkNZXCIsXHJcbiAgICAgICAgXCJBTE1PU1RcIixcclxuICAgICAgICBcIkFMV0FZU1wiLFxyXG4gICAgICAgIFwiQU1PVU5UXCIsXHJcbiAgICAgICAgXCJBTkNIT1JcIixcclxuICAgICAgICBcIkFOSU1BTFwiLFxyXG4gICAgICAgIFwiQU5TV0VSXCIsXHJcbiAgICAgICAgXCJBTllIT1dcIixcclxuICAgICAgICBcIkFOWU9ORVwiLFxyXG4gICAgICAgIFwiQVRUQUNLXCIsXHJcbiAgICAgICAgXCJBVUdVU1RcIixcclxuICAgICAgICBcIkJBTExFVFwiLFxyXG4gICAgICAgIFwiQkFSUkVMXCIsXHJcbiAgICAgICAgXCJCQVNJTkdcIixcclxuICAgICAgICBcIkJBU0tFVFwiLFxyXG4gICAgICAgIFwiQkVBS0VSXCIsXHJcbiAgICAgICAgXCJCRUNPTUVcIixcclxuICAgICAgICBcIkJFRk9SRVwiLFxyXG4gICAgICAgIFwiQkVISU5EXCIsXHJcbiAgICAgICAgXCJCRUxJRUZcIixcclxuICAgICAgICBcIkJJVFRFUlwiLFxyXG4gICAgICAgIFwiQk9UVExFXCIsXHJcbiAgICAgICAgXCJCT1RUT01cIixcclxuICAgICAgICBcIkJSQU5DSFwiLFxyXG4gICAgICAgIFwiQlJFQVNUXCIsXHJcbiAgICAgICAgXCJCUkVBVEhcIixcclxuICAgICAgICBcIkJSSURHRVwiLFxyXG4gICAgICAgIFwiQlJJR0hUXCIsXHJcbiAgICAgICAgXCJCUk9LRU5cIixcclxuICAgICAgICBcIkJST0tFUlwiLFxyXG4gICAgICAgIFwiQlVCQkxFXCIsXHJcbiAgICAgICAgXCJCVUNLRVRcIixcclxuICAgICAgICBcIkJVREdFVFwiLFxyXG4gICAgICAgIFwiQlVSSUFMXCIsXHJcbiAgICAgICAgXCJCVVJORURcIixcclxuICAgICAgICBcIkJVUk5FUlwiLFxyXG4gICAgICAgIFwiQlVUVEVSXCIsXHJcbiAgICAgICAgXCJCVVRUT05cIixcclxuICAgICAgICBcIkNBTUVSQVwiLFxyXG4gICAgICAgIFwiQ0FOVkFTXCIsXHJcbiAgICAgICAgXCJDQVJQRVRcIixcclxuICAgICAgICBcIkNBUlRFUlwiLFxyXG4gICAgICAgIFwiQ0FWSVRZXCIsXHJcbiAgICAgICAgXCJDSEFOQ0VcIixcclxuICAgICAgICBcIkNIQU5HRVwiLFxyXG4gICAgICAgIFwiQ0hBUkdFXCIsXHJcbiAgICAgICAgXCJDSEVFU0VcIixcclxuICAgICAgICBcIkNIT0lDRVwiLFxyXG4gICAgICAgIFwiQ0hPUlVTXCIsXHJcbiAgICAgICAgXCJDSFVSQ0hcIixcclxuICAgICAgICBcIkNJUkNMRVwiLFxyXG4gICAgICAgIFwiQ0lSQ1VTXCIsXHJcbiAgICAgICAgXCJDSVRST05cIixcclxuICAgICAgICBcIkNMRVZFUlwiLFxyXG4gICAgICAgIFwiQ0xJRU5UXCIsXHJcbiAgICAgICAgXCJDT0ZGRUVcIixcclxuICAgICAgICBcIkNPR05BQ1wiLFxyXG4gICAgICAgIFwiQ09MTEFSXCIsXHJcbiAgICAgICAgXCJDT0xPTllcIixcclxuICAgICAgICBcIkNPTFVNTlwiLFxyXG4gICAgICAgIFwiQ09NTU9OXCIsXHJcbiAgICAgICAgXCJDT09LRURcIixcclxuICAgICAgICBcIkNPT0tFUlwiLFxyXG4gICAgICAgIFwiQ09QUEVSXCIsXHJcbiAgICAgICAgXCJDT1JORVJcIixcclxuICAgICAgICBcIkNPVFRPTlwiLFxyXG4gICAgICAgIFwiQ1JFRElUXCIsXHJcbiAgICAgICAgXCJDUllJTkdcIixcclxuICAgICAgICBcIkRBTUFHRVwiLFxyXG4gICAgICAgIFwiREFOQ0VSXCIsXHJcbiAgICAgICAgXCJEQU5HRVJcIixcclxuICAgICAgICBcIkRFRkVDVFwiLFxyXG4gICAgICAgIFwiREVHUkVFXCIsXHJcbiAgICAgICAgXCJERU1BTkRcIixcclxuICAgICAgICBcIkRFU0VSVFwiLFxyXG4gICAgICAgIFwiREVTSUdOXCIsXHJcbiAgICAgICAgXCJERVNJUkVcIixcclxuICAgICAgICBcIkRFVEFJTFwiLFxyXG4gICAgICAgIFwiRElOTkVSXCIsXHJcbiAgICAgICAgXCJESVJFQ1RcIixcclxuICAgICAgICBcIkRSQVdFUlwiLFxyXG4gICAgICAgIFwiRFJJVkVSXCIsXHJcbiAgICAgICAgXCJEVVNURVJcIixcclxuICAgICAgICBcIkVGRkVDVFwiLFxyXG4gICAgICAgIFwiRUZGT1JUXCIsXHJcbiAgICAgICAgXCJFSVRIRVJcIixcclxuICAgICAgICBcIkVMRVZFTlwiLFxyXG4gICAgICAgIFwiRU1QSVJFXCIsXHJcbiAgICAgICAgXCJFTkdJTkVcIixcclxuICAgICAgICBcIkVOT1VHSFwiLFxyXG4gICAgICAgIFwiRVhQRVJUXCIsXHJcbiAgICAgICAgXCJFWFBPUlRcIixcclxuICAgICAgICBcIkZBQ1RPUlwiLFxyXG4gICAgICAgIFwiRkFNSUxZXCIsXHJcbiAgICAgICAgXCJGQU1PVVNcIixcclxuICAgICAgICBcIkZBUk1FUlwiLFxyXG4gICAgICAgIFwiRkFUSEVSXCIsXHJcbiAgICAgICAgXCJGRUVCTEVcIixcclxuICAgICAgICBcIkZFTUFMRVwiLFxyXG4gICAgICAgIFwiRklHVVJFXCIsXHJcbiAgICAgICAgXCJGSU5HRVJcIixcclxuICAgICAgICBcIkZJUklOR1wiLFxyXG4gICAgICAgIFwiRklTSEVSXCIsXHJcbiAgICAgICAgXCJGTElHSFRcIixcclxuICAgICAgICBcIkZMT1dFUlwiLFxyXG4gICAgICAgIFwiRk9MREVSXCIsXHJcbiAgICAgICAgXCJGT1VSVEhcIixcclxuICAgICAgICBcIkZSSURBWVwiLFxyXG4gICAgICAgIFwiRlJJRU5EXCIsXHJcbiAgICAgICAgXCJGUk9aRU5cIixcclxuICAgICAgICBcIkZVTk5FTFwiLFxyXG4gICAgICAgIFwiRlVTSU9OXCIsXHJcbiAgICAgICAgXCJGVVRVUkVcIixcclxuICAgICAgICBcIkdBUkRFTlwiLFxyXG4gICAgICAgIFwiR1JBVkVMXCIsXHJcbiAgICAgICAgXCJHUkVBU0VcIixcclxuICAgICAgICBcIkdST09WRVwiLFxyXG4gICAgICAgIFwiR1JPVU5EXCIsXHJcbiAgICAgICAgXCJHUk9XVEhcIixcclxuICAgICAgICBcIkhBTU1FUlwiLFxyXG4gICAgICAgIFwiSEFORExFXCIsXHJcbiAgICAgICAgXCJIQU5HRVJcIixcclxuICAgICAgICBcIkhBUkJPUlwiLFxyXG4gICAgICAgIFwiSEVBVEVEXCIsXHJcbiAgICAgICAgXCJIRUFURVJcIixcclxuICAgICAgICBcIkhPTExPV1wiLFxyXG4gICAgICAgIFwiSE9ORVNUXCIsXHJcbiAgICAgICAgXCJJTVBPUlRcIixcclxuICAgICAgICBcIklOQ09NRVwiLFxyXG4gICAgICAgIFwiSU5MQU5EXCIsXHJcbiAgICAgICAgXCJJTlNFQ1RcIixcclxuICAgICAgICBcIklOU0lERVwiLFxyXG4gICAgICAgIFwiSU5TVEVQXCIsXHJcbiAgICAgICAgXCJJU0xBTkRcIixcclxuICAgICAgICBcIklUU0VMRlwiLFxyXG4gICAgICAgIFwiSk9JTkVSXCIsXHJcbiAgICAgICAgXCJLRUVQRVJcIixcclxuICAgICAgICBcIktFTk5FTFwiLFxyXG4gICAgICAgIFwiS0VUVExFXCIsXHJcbiAgICAgICAgXCJLSURORVlcIixcclxuICAgICAgICBcIkxBV1lFUlwiLFxyXG4gICAgICAgIFwiTEVOR1RIXCIsXHJcbiAgICAgICAgXCJMRVNTT05cIixcclxuICAgICAgICBcIkxFVFRFUlwiLFxyXG4gICAgICAgIFwiTElRVUlEXCIsXHJcbiAgICAgICAgXCJMSVRUTEVcIixcclxuICAgICAgICBcIkxJVklOR1wiLFxyXG4gICAgICAgIFwiTE9DS0VSXCIsXHJcbiAgICAgICAgXCJNQU5ORVJcIixcclxuICAgICAgICBcIk1BUkJMRVwiLFxyXG4gICAgICAgIFwiTUFSR0lOXCIsXHJcbiAgICAgICAgXCJNQVJLRURcIixcclxuICAgICAgICBcIk1BUktFVFwiLFxyXG4gICAgICAgIFwiTUFUVVJFXCIsXHJcbiAgICAgICAgXCJNRURJVU1cIixcclxuICAgICAgICBcIk1FTUJFUlwiLFxyXG4gICAgICAgIFwiTUVNT1JZXCIsXHJcbiAgICAgICAgXCJNSURETEVcIixcclxuICAgICAgICBcIk1JTlVURVwiLFxyXG4gICAgICAgIFwiTU9ERVJOXCIsXHJcbiAgICAgICAgXCJNT0RFU1RcIixcclxuICAgICAgICBcIk1PTkRBWVwiLFxyXG4gICAgICAgIFwiTU9OS0VZXCIsXHJcbiAgICAgICAgXCJNT1RIRVJcIixcclxuICAgICAgICBcIk1PVElPTlwiLFxyXG4gICAgICAgIFwiTVVSREVSXCIsXHJcbiAgICAgICAgXCJNVVNDTEVcIixcclxuICAgICAgICBcIk1VU0VVTVwiLFxyXG4gICAgICAgIFwiTVlTRUxGXCIsXHJcbiAgICAgICAgXCJOQVJST1dcIixcclxuICAgICAgICBcIk5BVElPTlwiLFxyXG4gICAgICAgIFwiTkFUVVJFXCIsXHJcbiAgICAgICAgXCJORUFSRVJcIixcclxuICAgICAgICBcIk5FRURMRVwiLFxyXG4gICAgICAgIFwiTklDS0VMXCIsXHJcbiAgICAgICAgXCJOT0JPRFlcIixcclxuICAgICAgICBcIk5PUk1BTFwiLFxyXG4gICAgICAgIFwiTlVNQkVSXCIsXHJcbiAgICAgICAgXCJPRkZJQ0VcIixcclxuICAgICAgICBcIk9NRUxFVFwiLFxyXG4gICAgICAgIFwiT1JBTkdFXCIsXHJcbiAgICAgICAgXCJPUklHSU5cIixcclxuICAgICAgICBcIk9VVENSWVwiLFxyXG4gICAgICAgIFwiT1VUTEFXXCIsXHJcbiAgICAgICAgXCJPVVRMRVRcIixcclxuICAgICAgICBcIk9VVFBVVFwiLFxyXG4gICAgICAgIFwiT1ZFUkRPXCIsXHJcbiAgICAgICAgXCJQQVJDRUxcIixcclxuICAgICAgICBcIlBBUkVOVFwiLFxyXG4gICAgICAgIFwiUEFURU5UXCIsXHJcbiAgICAgICAgXCJQRU5DSUxcIixcclxuICAgICAgICBcIlBFT1BMRVwiLFxyXG4gICAgICAgIFwiUEVSU09OXCIsXHJcbiAgICAgICAgXCJQSVNUT05cIixcclxuICAgICAgICBcIlBMQVlFRFwiLFxyXG4gICAgICAgIFwiUExFQVNFXCIsXHJcbiAgICAgICAgXCJQTE9VR0hcIixcclxuICAgICAgICBcIlBPQ0tFVFwiLFxyXG4gICAgICAgIFwiUE9FVFJZXCIsXHJcbiAgICAgICAgXCJQT0lTT05cIixcclxuICAgICAgICBcIlBPTElDRVwiLFxyXG4gICAgICAgIFwiUE9MSVNIXCIsXHJcbiAgICAgICAgXCJQT0xMRU5cIixcclxuICAgICAgICBcIlBPUlRFUlwiLFxyXG4gICAgICAgIFwiUE9UQVNIXCIsXHJcbiAgICAgICAgXCJQT1RBVE9cIixcclxuICAgICAgICBcIlBPVFRFUlwiLFxyXG4gICAgICAgIFwiUE9XREVSXCIsXHJcbiAgICAgICAgXCJQUkFJU0VcIixcclxuICAgICAgICBcIlBSQVlFUlwiLFxyXG4gICAgICAgIFwiUFJJRVNUXCIsXHJcbiAgICAgICAgXCJQUklOQ0VcIixcclxuICAgICAgICBcIlBSSVNPTlwiLFxyXG4gICAgICAgIFwiUFJPRklUXCIsXHJcbiAgICAgICAgXCJQVUJMSUNcIixcclxuICAgICAgICBcIlBVTExFWVwiLFxyXG4gICAgICAgIFwiUkFESVVNXCIsXHJcbiAgICAgICAgXCJSRUFERVJcIixcclxuICAgICAgICBcIlJFQVNPTlwiLFxyXG4gICAgICAgIFwiUkVDT1JEXCIsXHJcbiAgICAgICAgXCJSRUZMVVhcIixcclxuICAgICAgICBcIlJFR1JFVFwiLFxyXG4gICAgICAgIFwiUkVNQVJLXCIsXHJcbiAgICAgICAgXCJSRU1FRFlcIixcclxuICAgICAgICBcIlJFUEFJUlwiLFxyXG4gICAgICAgIFwiUkVTVUxUXCIsXHJcbiAgICAgICAgXCJSRVRBSUxcIixcclxuICAgICAgICBcIlJFV0FSRFwiLFxyXG4gICAgICAgIFwiUkhZVEhNXCIsXHJcbiAgICAgICAgXCJST0xMRVJcIixcclxuICAgICAgICBcIlJVQkJFUlwiLFxyXG4gICAgICAgIFwiU0FJTE9SXCIsXHJcbiAgICAgICAgXCJTQU1QTEVcIixcclxuICAgICAgICBcIlNBVUNFUlwiLFxyXG4gICAgICAgIFwiU0FWSU5HXCIsXHJcbiAgICAgICAgXCJTQ0hJU1RcIixcclxuICAgICAgICBcIlNDSE9PTFwiLFxyXG4gICAgICAgIFwiU0NSRUVOXCIsXHJcbiAgICAgICAgXCJTRUFNQU5cIixcclxuICAgICAgICBcIlNFQVJDSFwiLFxyXG4gICAgICAgIFwiU0VDT05EXCIsXHJcbiAgICAgICAgXCJTRUNSRVRcIixcclxuICAgICAgICBcIlNIQURPV1wiLFxyXG4gICAgICAgIFwiU0lMVkVSXCIsXHJcbiAgICAgICAgXCJTSU1QTEVcIixcclxuICAgICAgICBcIlNJU1RFUlwiLFxyXG4gICAgICAgIFwiU0xFRVZFXCIsXHJcbiAgICAgICAgXCJTTU9PVEhcIixcclxuICAgICAgICBcIlNORUVaRVwiLFxyXG4gICAgICAgIFwiU09DSUFMXCIsXHJcbiAgICAgICAgXCJTUElSSVRcIixcclxuICAgICAgICBcIlNQTEFTSFwiLFxyXG4gICAgICAgIFwiU1BPTkdFXCIsXHJcbiAgICAgICAgXCJTUFJJTkdcIixcclxuICAgICAgICBcIlNRVUFSRVwiLFxyXG4gICAgICAgIFwiU1RBQkxFXCIsXHJcbiAgICAgICAgXCJTVEFNRU5cIixcclxuICAgICAgICBcIlNURUFEWVwiLFxyXG4gICAgICAgIFwiU1RJQ0tZXCIsXHJcbiAgICAgICAgXCJTVElUQ0hcIixcclxuICAgICAgICBcIlNUUkFJTlwiLFxyXG4gICAgICAgIFwiU1RSRUFNXCIsXHJcbiAgICAgICAgXCJTVFJFRVRcIixcclxuICAgICAgICBcIlNUUkVTU1wiLFxyXG4gICAgICAgIFwiU1RSSUtFXCIsXHJcbiAgICAgICAgXCJTVFJJTkdcIixcclxuICAgICAgICBcIlNUUk9OR1wiLFxyXG4gICAgICAgIFwiU1VDS0VSXCIsXHJcbiAgICAgICAgXCJTVURERU5cIixcclxuICAgICAgICBcIlNVTU1FUlwiLFxyXG4gICAgICAgIFwiU1VOREFZXCIsXHJcbiAgICAgICAgXCJTVVBQTFlcIixcclxuICAgICAgICBcIlNXSVRDSFwiLFxyXG4gICAgICAgIFwiU1lTVEVNXCIsXHJcbiAgICAgICAgXCJUQUlMT1JcIixcclxuICAgICAgICBcIlRIRU9SWVwiLFxyXG4gICAgICAgIFwiVEhJUlRZXCIsXHJcbiAgICAgICAgXCJUSE9SQVhcIixcclxuICAgICAgICBcIlRIT1VHSFwiLFxyXG4gICAgICAgIFwiVEhSRUFEXCIsXHJcbiAgICAgICAgXCJUSFJFQVRcIixcclxuICAgICAgICBcIlRIUk9BVFwiLFxyXG4gICAgICAgIFwiVEhSVVNUXCIsXHJcbiAgICAgICAgXCJUSUNLRVRcIixcclxuICAgICAgICBcIlRJU1NVRVwiLFxyXG4gICAgICAgIFwiVE9OR1VFXCIsXHJcbiAgICAgICAgXCJUUkFERVJcIixcclxuICAgICAgICBcIlRSQVZFTFwiLFxyXG4gICAgICAgIFwiVFVOTkVMXCIsXHJcbiAgICAgICAgXCJUV0VMVkVcIixcclxuICAgICAgICBcIlRXRU5UWVwiLFxyXG4gICAgICAgIFwiVFlQSVNUXCIsXHJcbiAgICAgICAgXCJVUEtFRVBcIixcclxuICAgICAgICBcIlVQTElGVFwiLFxyXG4gICAgICAgIFwiVVBUQUtFXCIsXHJcbiAgICAgICAgXCJWQUxMRVlcIixcclxuICAgICAgICBcIlZFU1NFTFwiLFxyXG4gICAgICAgIFwiVklDVElNXCIsXHJcbiAgICAgICAgXCJWSU9MSU5cIixcclxuICAgICAgICBcIlZPTFVNRVwiLFxyXG4gICAgICAgIFwiVk9SVEVYXCIsXHJcbiAgICAgICAgXCJXQUlURVJcIixcclxuICAgICAgICBcIldBU1RFRFwiLFxyXG4gICAgICAgIFwiV0VJR0hUXCIsXHJcbiAgICAgICAgXCJXSElTS1lcIixcclxuICAgICAgICBcIldJTkRPV1wiLFxyXG4gICAgICAgIFwiV0lOVEVSXCIsXHJcbiAgICAgICAgXCJXSVRISU5cIixcclxuICAgICAgICBcIldPUktFUlwiLFxyXG4gICAgICAgIFwiV1JJVEVSXCIsXHJcbiAgICAgICAgXCJZRUxMT1dcIixcclxuICAgIF0sXHJcbiAgICBbXHJcbiAgICAgICAgXCJBQlNFTkNFXCIsXHJcbiAgICAgICAgXCJBQ0NPVU5UXCIsXHJcbiAgICAgICAgXCJBRERSRVNTXCIsXHJcbiAgICAgICAgXCJBR0FJTlNUXCIsXHJcbiAgICAgICAgXCJBTENPSE9MXCIsXHJcbiAgICAgICAgXCJBTEdFQlJBXCIsXHJcbiAgICAgICAgXCJBTU1PTklBXCIsXHJcbiAgICAgICAgXCJBTk9USEVSXCIsXHJcbiAgICAgICAgXCJBTllCT0RZXCIsXHJcbiAgICAgICAgXCJBVFRFTVBUXCIsXHJcbiAgICAgICAgXCJBVVRPQlVTXCIsXHJcbiAgICAgICAgXCJBVkVSQUdFXCIsXHJcbiAgICAgICAgXCJBV0tXQVJEXCIsXHJcbiAgICAgICAgXCJCQUxBTkNFXCIsXHJcbiAgICAgICAgXCJCQUxDT05ZXCIsXHJcbiAgICAgICAgXCJCRUNBVVNFXCIsXHJcbiAgICAgICAgXCJCRURST09NXCIsXHJcbiAgICAgICAgXCJCRUVTV0FYXCIsXHJcbiAgICAgICAgXCJCRVRXRUVOXCIsXHJcbiAgICAgICAgXCJCSU9MT0dZXCIsXHJcbiAgICAgICAgXCJCTEFOS0VUXCIsXHJcbiAgICAgICAgXCJCT0lMSU5HXCIsXHJcbiAgICAgICAgXCJCUk9USEVSXCIsXHJcbiAgICAgICAgXCJCVUlMREVSXCIsXHJcbiAgICAgICAgXCJCVVJOSU5HXCIsXHJcbiAgICAgICAgXCJDQVBJVEFMXCIsXHJcbiAgICAgICAgXCJDQVRBUlJIXCIsXHJcbiAgICAgICAgXCJDRVJUQUlOXCIsXHJcbiAgICAgICAgXCJDSEVNSVNUXCIsXHJcbiAgICAgICAgXCJDSElNTkVZXCIsXHJcbiAgICAgICAgXCJDSVJDVUlUXCIsXHJcbiAgICAgICAgXCJDTElNQkVSXCIsXHJcbiAgICAgICAgXCJDT0xMRUdFXCIsXHJcbiAgICAgICAgXCJDT01CSU5FXCIsXHJcbiAgICAgICAgXCJDT01GT1JUXCIsXHJcbiAgICAgICAgXCJDT01QQU5ZXCIsXHJcbiAgICAgICAgXCJDT01QTEVYXCIsXHJcbiAgICAgICAgXCJDT05DRVBUXCIsXHJcbiAgICAgICAgXCJDT05UT1VSXCIsXHJcbiAgICAgICAgXCJDT05UUk9MXCIsXHJcbiAgICAgICAgXCJDT09LSU5HXCIsXHJcbiAgICAgICAgXCJDT1VOVFJZXCIsXHJcbiAgICAgICAgXCJDUkVFUEVSXCIsXHJcbiAgICAgICAgXCJDVU5OSU5HXCIsXHJcbiAgICAgICAgXCJDVVJSRU5UXCIsXHJcbiAgICAgICAgXCJDVVJUQUlOXCIsXHJcbiAgICAgICAgXCJDVVNISU9OXCIsXHJcbiAgICAgICAgXCJDVVNUT01TXCIsXHJcbiAgICAgICAgXCJEQU1QSU5HXCIsXHJcbiAgICAgICAgXCJEQU5DSU5HXCIsXHJcbiAgICAgICAgXCJERU5TSVRZXCIsXHJcbiAgICAgICAgXCJERVBPU0lUXCIsXHJcbiAgICAgICAgXCJESVNFQVNFXCIsXHJcbiAgICAgICAgXCJESVNHVVNUXCIsXHJcbiAgICAgICAgXCJESVNMSUtFXCIsXHJcbiAgICAgICAgXCJESVZJU09SXCIsXHJcbiAgICAgICAgXCJESVZPUkNFXCIsXHJcbiAgICAgICAgXCJEUklWSU5HXCIsXHJcbiAgICAgICAgXCJEUk9QUEVEXCIsXHJcbiAgICAgICAgXCJEUk9QUEVSXCIsXHJcbiAgICAgICAgXCJFQVJSSU5HXCIsXHJcbiAgICAgICAgXCJFQ09OT01ZXCIsXHJcbiAgICAgICAgXCJFTEFTVElDXCIsXHJcbiAgICAgICAgXCJFTUJBU1NZXCIsXHJcbiAgICAgICAgXCJFUk9TSU9OXCIsXHJcbiAgICAgICAgXCJFVkVOSU5HXCIsXHJcbiAgICAgICAgXCJFWEFNUExFXCIsXHJcbiAgICAgICAgXCJFWUVCQUxMXCIsXHJcbiAgICAgICAgXCJFWUVCUk9XXCIsXHJcbiAgICAgICAgXCJFWUVMQVNIXCIsXHJcbiAgICAgICAgXCJGQUlMVVJFXCIsXHJcbiAgICAgICAgXCJGRUFUSEVSXCIsXHJcbiAgICAgICAgXCJGRUVMSU5HXCIsXHJcbiAgICAgICAgXCJGRVJNRU5UXCIsXHJcbiAgICAgICAgXCJGRVJUSUxFXCIsXHJcbiAgICAgICAgXCJGSUNUSU9OXCIsXHJcbiAgICAgICAgXCJGSUZURUVOXCIsXHJcbiAgICAgICAgXCJGSVJFQVJNXCIsXHJcbiAgICAgICAgXCJGSVJFRkxZXCIsXHJcbiAgICAgICAgXCJGSVJFTUFOXCIsXHJcbiAgICAgICAgXCJGT09MSVNIXCIsXHJcbiAgICAgICAgXCJGT09UTUFOXCIsXHJcbiAgICAgICAgXCJGT1JFSUdOXCIsXHJcbiAgICAgICAgXCJGT1JXQVJEXCIsXHJcbiAgICAgICAgXCJGVVJOQUNFXCIsXHJcbiAgICAgICAgXCJHRU5FUkFMXCIsXHJcbiAgICAgICAgXCJHRU9MT0dZXCIsXHJcbiAgICAgICAgXCJHTEFDSUVSXCIsXHJcbiAgICAgICAgXCJHUkFUSU5HXCIsXHJcbiAgICAgICAgXCJHUk9DRVJZXCIsXHJcbiAgICAgICAgXCJHVU5CT0FUXCIsXHJcbiAgICAgICAgXCJIQU5HSU5HXCIsXHJcbiAgICAgICAgXCJIQVJNT05ZXCIsXHJcbiAgICAgICAgXCJIRUFEV0FZXCIsXHJcbiAgICAgICAgXCJIRUFMVEhZXCIsXHJcbiAgICAgICAgXCJIRUFSSU5HXCIsXHJcbiAgICAgICAgXCJIRUFUSU5HXCIsXHJcbiAgICAgICAgXCJISUdIV0FZXCIsXHJcbiAgICAgICAgXCJISU1TRUxGXCIsXHJcbiAgICAgICAgXCJISVNUT1JZXCIsXHJcbiAgICAgICAgXCJIT0xJREFZXCIsXHJcbiAgICAgICAgXCJIT1dFVkVSXCIsXHJcbiAgICAgICAgXCJIVU5EUkVEXCIsXHJcbiAgICAgICAgXCJIVVNCQU5EXCIsXHJcbiAgICAgICAgXCJIWUdJRU5FXCIsXHJcbiAgICAgICAgXCJJR05FT1VTXCIsXHJcbiAgICAgICAgXCJJTVBVTFNFXCIsXHJcbiAgICAgICAgXCJJTkRPT1JTXCIsXHJcbiAgICAgICAgXCJJTkZFUk5PXCIsXHJcbiAgICAgICAgXCJJTlRFR0VSXCIsXHJcbiAgICAgICAgXCJJTlZFUlNFXCIsXHJcbiAgICAgICAgXCJKQU5VQVJZXCIsXHJcbiAgICAgICAgXCJKRUFMT1VTXCIsXHJcbiAgICAgICAgXCJKRVdFTEVSXCIsXHJcbiAgICAgICAgXCJKT1VSTkVZXCIsXHJcbiAgICAgICAgXCJKVVNUSUNFXCIsXHJcbiAgICAgICAgXCJLSVRDSEVOXCIsXHJcbiAgICAgICAgXCJMRUFSTkVSXCIsXHJcbiAgICAgICAgXCJMRUFUSEVSXCIsXHJcbiAgICAgICAgXCJMRUNUVVJFXCIsXHJcbiAgICAgICAgXCJMSUJSQVJZXCIsXHJcbiAgICAgICAgXCJMSUNFTlNFXCIsXHJcbiAgICAgICAgXCJMSVFVRVVSXCIsXHJcbiAgICAgICAgXCJMT0NLSU5HXCIsXHJcbiAgICAgICAgXCJNQUNISU5FXCIsXHJcbiAgICAgICAgXCJNQUxBUklBXCIsXHJcbiAgICAgICAgXCJNQU5BR0VSXCIsXHJcbiAgICAgICAgXCJNQU5IT0xFXCIsXHJcbiAgICAgICAgXCJNQVJSSUVEXCIsXHJcbiAgICAgICAgXCJNRUFOSU5HXCIsXHJcbiAgICAgICAgXCJNRUFTVVJFXCIsXHJcbiAgICAgICAgXCJNRURJQ0FMXCIsXHJcbiAgICAgICAgXCJNRUVUSU5HXCIsXHJcbiAgICAgICAgXCJNRVNTQUdFXCIsXHJcbiAgICAgICAgXCJNSUxMSU9OXCIsXHJcbiAgICAgICAgXCJNSU5FUkFMXCIsXHJcbiAgICAgICAgXCJNSVhUVVJFXCIsXHJcbiAgICAgICAgXCJNT1JOSU5HXCIsXHJcbiAgICAgICAgXCJOQVRVUkFMXCIsXHJcbiAgICAgICAgXCJORUdMRUNUXCIsXHJcbiAgICAgICAgXCJORVRXT1JLXCIsXHJcbiAgICAgICAgXCJORVVUUk9OXCIsXHJcbiAgICAgICAgXCJOT1NUUklMXCIsXHJcbiAgICAgICAgXCJOT1RISU5HXCIsXHJcbiAgICAgICAgXCJOT1dIRVJFXCIsXHJcbiAgICAgICAgXCJOVUNMRVVTXCIsXHJcbiAgICAgICAgXCJPQ1RPQkVSXCIsXHJcbiAgICAgICAgXCJPRkZJQ0VSXCIsXHJcbiAgICAgICAgXCJPTkVTRUxGXCIsXHJcbiAgICAgICAgXCJPUElOSU9OXCIsXHJcbiAgICAgICAgXCJPVVRDT01FXCIsXHJcbiAgICAgICAgXCJPVVRDUk9QXCIsXHJcbiAgICAgICAgXCJPVVRET09SXCIsXHJcbiAgICAgICAgXCJPVVRMSUVSXCIsXHJcbiAgICAgICAgXCJPVVRMSU5FXCIsXHJcbiAgICAgICAgXCJPVVRMT09LXCIsXHJcbiAgICAgICAgXCJPVVRTSURFXCIsXHJcbiAgICAgICAgXCJPVkVSQUxMXCIsXHJcbiAgICAgICAgXCJPVkVSTEFQXCIsXHJcbiAgICAgICAgXCJPVkVSVVNFXCIsXHJcbiAgICAgICAgXCJQQUNLSU5HXCIsXHJcbiAgICAgICAgXCJQQUlOVEVSXCIsXHJcbiAgICAgICAgXCJQQUpBTUFTXCIsXHJcbiAgICAgICAgXCJQQVJUSU5HXCIsXHJcbiAgICAgICAgXCJQQVJUTkVSXCIsXHJcbiAgICAgICAgXCJQQVNTQUdFXCIsXHJcbiAgICAgICAgXCJQQVlNRU5UXCIsXHJcbiAgICAgICAgXCJQRU5HVUlOXCIsXHJcbiAgICAgICAgXCJQRU5TSU9OXCIsXHJcbiAgICAgICAgXCJQRVJGRUNUXCIsXHJcbiAgICAgICAgXCJQSFlTSUNTXCIsXHJcbiAgICAgICAgXCJQSUNUVVJFXCIsXHJcbiAgICAgICAgXCJQTEFTVEVSXCIsXHJcbiAgICAgICAgXCJQTEFZSU5HXCIsXHJcbiAgICAgICAgXCJQTEVBU0VEXCIsXHJcbiAgICAgICAgXCJQT0lOVEVSXCIsXHJcbiAgICAgICAgXCJQT1NUTUFOXCIsXHJcbiAgICAgICAgXCJQUkVTRU5UXCIsXHJcbiAgICAgICAgXCJQUklOVEVSXCIsXHJcbiAgICAgICAgXCJQUklWQVRFXCIsXHJcbiAgICAgICAgXCJQUk9DRVNTXCIsXHJcbiAgICAgICAgXCJQUk9EVUNFXCIsXHJcbiAgICAgICAgXCJQUk9EVUNUXCIsXHJcbiAgICAgICAgXCJQUk9HUkFNXCIsXHJcbiAgICAgICAgXCJQUk9NSVNFXCIsXHJcbiAgICAgICAgXCJQUk9URVNUXCIsXHJcbiAgICAgICAgXCJQVVJQT1NFXCIsXHJcbiAgICAgICAgXCJQWVJBTUlEXCIsXHJcbiAgICAgICAgXCJRVUFMSVRZXCIsXHJcbiAgICAgICAgXCJRVUFSVEVSXCIsXHJcbiAgICAgICAgXCJRVUlOSU5FXCIsXHJcbiAgICAgICAgXCJSQUlOSU5HXCIsXHJcbiAgICAgICAgXCJSRUFESU5HXCIsXHJcbiAgICAgICAgXCJSRUFHRU5UXCIsXHJcbiAgICAgICAgXCJSRUNFSVBUXCIsXHJcbiAgICAgICAgXCJSRUdVTEFSXCIsXHJcbiAgICAgICAgXCJSRVFVRVNUXCIsXHJcbiAgICAgICAgXCJSRVNJRFVFXCIsXHJcbiAgICAgICAgXCJSRVNQRUNUXCIsXHJcbiAgICAgICAgXCJSRVZFTkdFXCIsXHJcbiAgICAgICAgXCJSVU5BV0FZXCIsXHJcbiAgICAgICAgXCJTQVJESU5FXCIsXHJcbiAgICAgICAgXCJTQ0lFTkNFXCIsXHJcbiAgICAgICAgXCJTQ1JBVENIXCIsXHJcbiAgICAgICAgXCJTRUNUSU9OXCIsXHJcbiAgICAgICAgXCJTRUxGSVNIXCIsXHJcbiAgICAgICAgXCJTRVJJT1VTXCIsXHJcbiAgICAgICAgXCJTRVJWQU5UXCIsXHJcbiAgICAgICAgXCJTRVJWSUNFXCIsXHJcbiAgICAgICAgXCJTSE9DS0VEXCIsXHJcbiAgICAgICAgXCJTSVhURUVOXCIsXHJcbiAgICAgICAgXCJTTk9XSU5HXCIsXHJcbiAgICAgICAgXCJTT0NJRVRZXCIsXHJcbiAgICAgICAgXCJTT0xESUVSXCIsXHJcbiAgICAgICAgXCJTT0xWRU5UXCIsXHJcbiAgICAgICAgXCJTT01FREFZXCIsXHJcbiAgICAgICAgXCJTT01FSE9XXCIsXHJcbiAgICAgICAgXCJTT01FT05FXCIsXHJcbiAgICAgICAgXCJTUEVDSUFMXCIsXHJcbiAgICAgICAgXCJTVEFUSU9OXCIsXHJcbiAgICAgICAgXCJTVEVBTUVSXCIsXHJcbiAgICAgICAgXCJTVE9NQUNIXCIsXHJcbiAgICAgICAgXCJTVE9QUEVSXCIsXHJcbiAgICAgICAgXCJTVFJBTkdFXCIsXHJcbiAgICAgICAgXCJTVFJFVENIXCIsXHJcbiAgICAgICAgXCJTVUJKRUNUXCIsXHJcbiAgICAgICAgXCJTVUNDRVNTXCIsXHJcbiAgICAgICAgXCJTVU5CVVJOXCIsXHJcbiAgICAgICAgXCJTVVBQT1JUXCIsXHJcbiAgICAgICAgXCJTVVJGQUNFXCIsXHJcbiAgICAgICAgXCJTVVJHRU9OXCIsXHJcbiAgICAgICAgXCJUQUxLSU5HXCIsXHJcbiAgICAgICAgXCJUQVBJT0NBXCIsXHJcbiAgICAgICAgXCJURUFDSEVSXCIsXHJcbiAgICAgICAgXCJURVJSQUNFXCIsXHJcbiAgICAgICAgXCJURVhUVVJFXCIsXHJcbiAgICAgICAgXCJUSEVBVEVSXCIsXHJcbiAgICAgICAgXCJUSElNQkxFXCIsXHJcbiAgICAgICAgXCJUSE9VR0hUXCIsXHJcbiAgICAgICAgXCJUSFJPVUdIXCIsXHJcbiAgICAgICAgXCJUSFVOREVSXCIsXHJcbiAgICAgICAgXCJUT0JBQ0NPXCIsXHJcbiAgICAgICAgXCJUT05JR0hUXCIsXHJcbiAgICAgICAgXCJUT1JQRURPXCIsXHJcbiAgICAgICAgXCJUUkFGRklDXCIsXHJcbiAgICAgICAgXCJUUkFHRURZXCIsXHJcbiAgICAgICAgXCJUUkFJTkVSXCIsXHJcbiAgICAgICAgXCJUUk9VQkxFXCIsXHJcbiAgICAgICAgXCJUVUVTREFZXCIsXHJcbiAgICAgICAgXCJUVVJCSU5FXCIsXHJcbiAgICAgICAgXCJUVVJOSU5HXCIsXHJcbiAgICAgICAgXCJVTkRFUkdPXCIsXHJcbiAgICAgICAgXCJVTktOT1dOXCIsXHJcbiAgICAgICAgXCJVUFJJR0hUXCIsXHJcbiAgICAgICAgXCJWQUxFTkNZXCIsXHJcbiAgICAgICAgXCJWQU5JTExBXCIsXHJcbiAgICAgICAgXCJWSUNUT1JZXCIsXHJcbiAgICAgICAgXCJWSU9MRU5UXCIsXHJcbiAgICAgICAgXCJWSVRBTUlOXCIsXHJcbiAgICAgICAgXCJXQUlUSU5HXCIsXHJcbiAgICAgICAgXCJXRUFUSEVSXCIsXHJcbiAgICAgICAgXCJXRUVLRU5EXCIsXHJcbiAgICAgICAgXCJXRUxDT01FXCIsXHJcbiAgICAgICAgXCJXSEVSRUFTXCIsXHJcbiAgICAgICAgXCJXSEVSRUJZXCIsXHJcbiAgICAgICAgXCJXSEVUSEVSXCIsXHJcbiAgICAgICAgXCJXSElTVExFXCIsXHJcbiAgICAgICAgXCJXSE9FVkVSXCIsXHJcbiAgICAgICAgXCJXSVRIT1VUXCIsXHJcbiAgICAgICAgXCJXT1JLSU5HXCIsXHJcbiAgICAgICAgXCJXUklUSU5HXCIsXHJcbiAgICAgICAgXCJaT09MT0dZXCIsXHJcbiAgICBdLFxyXG4gICAgW1xyXG4gICAgICAgIFwiQUNDSURFTlRcIixcclxuICAgICAgICBcIkFERElUSU9OXCIsXHJcbiAgICAgICAgXCJBREpBQ0VOVFwiLFxyXG4gICAgICAgIFwiQUlSUExBTkVcIixcclxuICAgICAgICBcIkFNQklUSU9OXCIsXHJcbiAgICAgICAgXCJBTllUSElOR1wiLFxyXG4gICAgICAgIFwiQU5ZV0hFUkVcIixcclxuICAgICAgICBcIkFQUFJPVkFMXCIsXHJcbiAgICAgICAgXCJBUkdVTUVOVFwiLFxyXG4gICAgICAgIFwiQVNCRVNUT1NcIixcclxuICAgICAgICBcIkJBQ0tCT05FXCIsXHJcbiAgICAgICAgXCJCQU5LUlVQVFwiLFxyXG4gICAgICAgIFwiQkVIQVZJT1JcIixcclxuICAgICAgICBcIkJJUlRIREFZXCIsXHJcbiAgICAgICAgXCJCTFVFQkVMTFwiLFxyXG4gICAgICAgIFwiQlVJTERJTkdcIixcclxuICAgICAgICBcIkJVT1lBTkNZXCIsXHJcbiAgICAgICAgXCJCVVNJTkVTU1wiLFxyXG4gICAgICAgIFwiQ0FMRU5EQVJcIixcclxuICAgICAgICBcIkNBUEFDSVRZXCIsXHJcbiAgICAgICAgXCJDQVJFRlJFRVwiLFxyXG4gICAgICAgIFwiQ0FSUklBR0VcIixcclxuICAgICAgICBcIkNFUkVNT05ZXCIsXHJcbiAgICAgICAgXCJDSEVNSUNBTFwiLFxyXG4gICAgICAgIFwiQ0xFQVZBR0VcIixcclxuICAgICAgICBcIkNMT1RISUVSXCIsXHJcbiAgICAgICAgXCJDTE9USElOR1wiLFxyXG4gICAgICAgIFwiQ09DS1RBSUxcIixcclxuICAgICAgICBcIkNPTVBMRVRFXCIsXHJcbiAgICAgICAgXCJDT01QT1VORFwiLFxyXG4gICAgICAgIFwiQ09OQ1JFVEVcIixcclxuICAgICAgICBcIkNPTlNUQU5UXCIsXHJcbiAgICAgICAgXCJDT05TVU1FUlwiLFxyXG4gICAgICAgIFwiQ1VQQk9BUkRcIixcclxuICAgICAgICBcIkRBVUdIVEVSXCIsXHJcbiAgICAgICAgXCJEQVlMSUdIVFwiLFxyXG4gICAgICAgIFwiREVDRU1CRVJcIixcclxuICAgICAgICBcIkRFQ0lTSU9OXCIsXHJcbiAgICAgICAgXCJERUNSRUFTRVwiLFxyXG4gICAgICAgIFwiREVMSUNBVEVcIixcclxuICAgICAgICBcIkRFTElWRVJZXCIsXHJcbiAgICAgICAgXCJERVNJR05FUlwiLFxyXG4gICAgICAgIFwiRElBTUVURVJcIixcclxuICAgICAgICBcIkRJTFVUSU9OXCIsXHJcbiAgICAgICAgXCJESVNDT1VOVFwiLFxyXG4gICAgICAgIFwiRElTR1JBQ0VcIixcclxuICAgICAgICBcIkRJU1RBTkNFXCIsXHJcbiAgICAgICAgXCJESVZJU0lPTlwiLFxyXG4gICAgICAgIFwiRE9NSU5JT05cIixcclxuICAgICAgICBcIkRPV05GQUxMXCIsXHJcbiAgICAgICAgXCJEUkVBREZVTFwiLFxyXG4gICAgICAgIFwiRFJFU1NJTkdcIixcclxuICAgICAgICBcIkRZTkFNSVRFXCIsXHJcbiAgICAgICAgXCJFTEVDVFJJQ1wiLFxyXG4gICAgICAgIFwiRU1QTE9ZRVJcIixcclxuICAgICAgICBcIkVOR0lORUVSXCIsXHJcbiAgICAgICAgXCJFTlZFTE9QRVwiLFxyXG4gICAgICAgIFwiRVFVQVRJT05cIixcclxuICAgICAgICBcIkVSVVBUSU9OXCIsXHJcbiAgICAgICAgXCJFVkVSWURBWVwiLFxyXG4gICAgICAgIFwiRVZFUllPTkVcIixcclxuICAgICAgICBcIkVYQ0hBTkdFXCIsXHJcbiAgICAgICAgXCJFWEVSQ0lTRVwiLFxyXG4gICAgICAgIFwiRkVCUlVBUllcIixcclxuICAgICAgICBcIkZJUkVXT1JLXCIsXHJcbiAgICAgICAgXCJGT09UQkFMTFwiLFxyXG4gICAgICAgIFwiRk9PVE5PVEVcIixcclxuICAgICAgICBcIkZPT1RTVEVQXCIsXHJcbiAgICAgICAgXCJGT1JFQ0FTVFwiLFxyXG4gICAgICAgIFwiRk9SRUhFQURcIixcclxuICAgICAgICBcIkZPVVJURUVOXCIsXHJcbiAgICAgICAgXCJGUkFDVElPTlwiLFxyXG4gICAgICAgIFwiRlJBQ1RVUkVcIixcclxuICAgICAgICBcIkZSRVFVRU5UXCIsXHJcbiAgICAgICAgXCJGUklDVElPTlwiLFxyXG4gICAgICAgIFwiR0FSREVORVJcIixcclxuICAgICAgICBcIkdBU1dPUktTXCIsXHJcbiAgICAgICAgXCJHRU9NRVRSWVwiLFxyXG4gICAgICAgIFwiR0xZQ0VSSU5cIixcclxuICAgICAgICBcIkdPTERGSVNIXCIsXHJcbiAgICAgICAgXCJHUkFURUZVTFwiLFxyXG4gICAgICAgIFwiR1VOTUVUQUxcIixcclxuICAgICAgICBcIkhBTkRCT09LXCIsXHJcbiAgICAgICAgXCJIRUFETEFORFwiLFxyXG4gICAgICAgIFwiSEVSRVdJVEhcIixcclxuICAgICAgICBcIkhPU1BJVEFMXCIsXHJcbiAgICAgICAgXCJIWVNURVJJQVwiLFxyXG4gICAgICAgIFwiSU1QRVJJQUxcIixcclxuICAgICAgICBcIklNUFVSSVRZXCIsXHJcbiAgICAgICAgXCJJTkFTTVVDSFwiLFxyXG4gICAgICAgIFwiSU5DUkVBU0VcIixcclxuICAgICAgICBcIklORFVTVFJZXCIsXHJcbiAgICAgICAgXCJJTkZJTklUWVwiLFxyXG4gICAgICAgIFwiSU5OT0NFTlRcIixcclxuICAgICAgICBcIklOVEVSRVNUXCIsXHJcbiAgICAgICAgXCJMQU5ETUFSS1wiLFxyXG4gICAgICAgIFwiTEFORFNMSVBcIixcclxuICAgICAgICBcIkxBTkdVQUdFXCIsXHJcbiAgICAgICAgXCJMQVRJVFVERVwiLFxyXG4gICAgICAgIFwiTEFVR0hJTkdcIixcclxuICAgICAgICBcIkxFQVJOSU5HXCIsXHJcbiAgICAgICAgXCJNQUNBUk9OSVwiLFxyXG4gICAgICAgIFwiTUFHTkVUSUNcIixcclxuICAgICAgICBcIk1BUlJJQUdFXCIsXHJcbiAgICAgICAgXCJNQVRFUklBTFwiLFxyXG4gICAgICAgIFwiTUFUVFJFU1NcIixcclxuICAgICAgICBcIk1FRElDSU5FXCIsXHJcbiAgICAgICAgXCJNSUxJVEFSWVwiLFxyXG4gICAgICAgIFwiTU9NRU5UVU1cIixcclxuICAgICAgICBcIk1PTk9QT0xZXCIsXHJcbiAgICAgICAgXCJNT1VOVEFJTlwiLFxyXG4gICAgICAgIFwiTVVMVElQTEVcIixcclxuICAgICAgICBcIk5FSUdIQk9SXCIsXHJcbiAgICAgICAgXCJOSUNPVElORVwiLFxyXG4gICAgICAgIFwiTk9WRU1CRVJcIixcclxuICAgICAgICBcIk9CRURJRU5UXCIsXHJcbiAgICAgICAgXCJPTkNPTUlOR1wiLFxyXG4gICAgICAgIFwiT05MT09LRVJcIixcclxuICAgICAgICBcIk9QUE9TSVRFXCIsXHJcbiAgICAgICAgXCJPUkdBTklTTVwiLFxyXG4gICAgICAgIFwiT1JOQU1FTlRcIixcclxuICAgICAgICBcIk9VVEJVUlNUXCIsXHJcbiAgICAgICAgXCJPVVRHT0lOR1wiLFxyXG4gICAgICAgIFwiT1VUSE9VU0VcIixcclxuICAgICAgICBcIk9WRVJDT0FUXCIsXHJcbiAgICAgICAgXCJPVkVSQ09NRVwiLFxyXG4gICAgICAgIFwiT1ZFUkZVTExcIixcclxuICAgICAgICBcIk9WRVJIRUFEXCIsXHJcbiAgICAgICAgXCJPVkVSTEFORFwiLFxyXG4gICAgICAgIFwiT1ZFUkxFQUZcIixcclxuICAgICAgICBcIk9WRVJMT1VEXCIsXHJcbiAgICAgICAgXCJPVkVSU0VBU1wiLFxyXG4gICAgICAgIFwiT1ZFUlNFRVJcIixcclxuICAgICAgICBcIk9WRVJTSE9FXCIsXHJcbiAgICAgICAgXCJPVkVSVEFLRVwiLFxyXG4gICAgICAgIFwiT1ZFUlRJTUVcIixcclxuICAgICAgICBcIlBBSU5USU5HXCIsXHJcbiAgICAgICAgXCJQQVJBRElTRVwiLFxyXG4gICAgICAgIFwiUEFSQUZGSU5cIixcclxuICAgICAgICBcIlBBUkFMTEVMXCIsXHJcbiAgICAgICAgXCJQQVJUSUNMRVwiLFxyXG4gICAgICAgIFwiUEFTU1BPUlRcIixcclxuICAgICAgICBcIlBBVElFTkNFXCIsXHJcbiAgICAgICAgXCJQRU5EVUxVTVwiLFxyXG4gICAgICAgIFwiUEhZU0lDQUxcIixcclxuICAgICAgICBcIlBMQVRJTlVNXCIsXHJcbiAgICAgICAgXCJQTEVBU1VSRVwiLFxyXG4gICAgICAgIFwiUE9JTlRJTkdcIixcclxuICAgICAgICBcIlBPU0lUSU9OXCIsXHJcbiAgICAgICAgXCJQT1NTSUJMRVwiLFxyXG4gICAgICAgIFwiUE9TVE1BUktcIixcclxuICAgICAgICBcIlBSQUNUSUNFXCIsXHJcbiAgICAgICAgXCJQUkVTU1VSRVwiLFxyXG4gICAgICAgIFwiUFJJTkNFU1NcIixcclxuICAgICAgICBcIlBSSVNPTkVSXCIsXHJcbiAgICAgICAgXCJQUk9CQUJMRVwiLFxyXG4gICAgICAgIFwiUFJPRFVDRVJcIixcclxuICAgICAgICBcIlBST0dSRVNTXCIsXHJcbiAgICAgICAgXCJQUk9QRVJUWVwiLFxyXG4gICAgICAgIFwiUFVSQ0hBU0VcIixcclxuICAgICAgICBcIlFVQU5USVRZXCIsXHJcbiAgICAgICAgXCJRVUVTVElPTlwiLFxyXG4gICAgICAgIFwiUVVPVElFTlRcIixcclxuICAgICAgICBcIlJFQUNUSU9OXCIsXHJcbiAgICAgICAgXCJSRUNFSVZFUlwiLFxyXG4gICAgICAgIFwiUkVMQVRJT05cIixcclxuICAgICAgICBcIlJFTEFUSVZFXCIsXHJcbiAgICAgICAgXCJSRUxJR0lPTlwiLFxyXG4gICAgICAgIFwiUklHSURJVFlcIixcclxuICAgICAgICBcIlJPVEFUSU9OXCIsXHJcbiAgICAgICAgXCJTQVRVUkRBWVwiLFxyXG4gICAgICAgIFwiU0NJU1NPUlNcIixcclxuICAgICAgICBcIlNFQ1VSSVRZXCIsXHJcbiAgICAgICAgXCJTRU5URU5DRVwiLFxyXG4gICAgICAgIFwiU0VQQVJBVEVcIixcclxuICAgICAgICBcIlNIT0NLSU5HXCIsXHJcbiAgICAgICAgXCJTSE9VTERFUlwiLFxyXG4gICAgICAgIFwiU0lERVdBTEtcIixcclxuICAgICAgICBcIlNPTFVUSU9OXCIsXHJcbiAgICAgICAgXCJTT01FQk9EWVwiLFxyXG4gICAgICAgIFwiU09NRVRJTUVcIixcclxuICAgICAgICBcIlNPTUVXSEFUXCIsXHJcbiAgICAgICAgXCJTUEVDSU1FTlwiLFxyXG4gICAgICAgIFwiU1RJTVVMVVNcIixcclxuICAgICAgICBcIlNUT0NLSU5HXCIsXHJcbiAgICAgICAgXCJTVE9QUElOR1wiLFxyXG4gICAgICAgIFwiU1RSQUlHSFRcIixcclxuICAgICAgICBcIlNUUkVOR1RIXCIsXHJcbiAgICAgICAgXCJTVUNITElLRVwiLFxyXG4gICAgICAgIFwiU1VOTElHSFRcIixcclxuICAgICAgICBcIlNVTlNIQURFXCIsXHJcbiAgICAgICAgXCJTVVJQUklTRVwiLFxyXG4gICAgICAgIFwiU1dFTExJTkdcIixcclxuICAgICAgICBcIlRFQUNISU5HXCIsXHJcbiAgICAgICAgXCJURUxFR1JBTVwiLFxyXG4gICAgICAgIFwiVEVOREVOQ1lcIixcclxuICAgICAgICBcIlRISVJURUVOXCIsXHJcbiAgICAgICAgXCJUSE9VU0FORFwiLFxyXG4gICAgICAgIFwiVEhVUlNEQVlcIixcclxuICAgICAgICBcIlRPR0VUSEVSXCIsXHJcbiAgICAgICAgXCJUT01PUlJPV1wiLFxyXG4gICAgICAgIFwiVE9VQ0hJTkdcIixcclxuICAgICAgICBcIlRSQUlOSU5HXCIsXHJcbiAgICAgICAgXCJUUklBTkdMRVwiLFxyXG4gICAgICAgIFwiVFJPVUJMRURcIixcclxuICAgICAgICBcIlRST1VTRVJTXCIsXHJcbiAgICAgICAgXCJVTUJSRUxMQVwiLFxyXG4gICAgICAgIFwiVU5JVkVSU0VcIixcclxuICAgICAgICBcIlZBUklBQkxFXCIsXHJcbiAgICAgICAgXCJWQVNDVUxBUlwiLFxyXG4gICAgICAgIFwiVkVMT0NJVFlcIixcclxuICAgICAgICBcIldIQVRFVkVSXCIsXHJcbiAgICAgICAgXCJXSEVORVZFUlwiLFxyXG4gICAgICAgIFwiV0hFUkVWRVJcIixcclxuICAgICAgICBcIldJTkRQSVBFXCIsXHJcbiAgICAgICAgXCJXT09EV09SS1wiLFxyXG4gICAgICAgIFwiWUVBUkJPT0tcIixcclxuICAgICAgICBcIllPVVJTRUxGXCIsXHJcbiAgICBdLFxyXG4gICAgW1xyXG4gICAgICAgIFwiQUNDRVNTT1JZXCIsXHJcbiAgICAgICAgXCJBRFZFTlRVUkVcIixcclxuICAgICAgICBcIkFHUkVFTUVOVFwiLFxyXG4gICAgICAgIFwiQUxMT1dBTkNFXCIsXHJcbiAgICAgICAgXCJBTFVNSU5JVU1cIixcclxuICAgICAgICBcIkFNUExJVFVERVwiLFxyXG4gICAgICAgIFwiQU1VU0VNRU5UXCIsXHJcbiAgICAgICAgXCJBUFBBUkFUVVNcIixcclxuICAgICAgICBcIkFQUEVOREFHRVwiLFxyXG4gICAgICAgIFwiQVJCSVRSQVJZXCIsXHJcbiAgICAgICAgXCJBU1NJU1RBTlRcIixcclxuICAgICAgICBcIkFUVEVOVElPTlwiLFxyXG4gICAgICAgIFwiQVVUSE9SSVRZXCIsXHJcbiAgICAgICAgXCJBVVRPTUFUSUNcIixcclxuICAgICAgICBcIkJBQ0tXT09EU1wiLFxyXG4gICAgICAgIFwiQkVBVVRJRlVMXCIsXHJcbiAgICAgICAgXCJCTEFDS0JJUkRcIixcclxuICAgICAgICBcIkJSRUFLRkFTVFwiLFxyXG4gICAgICAgIFwiQlJVU0hXT09EXCIsXHJcbiAgICAgICAgXCJCVVRURVJDVVBcIixcclxuICAgICAgICBcIkNBUkRCT0FSRFwiLFxyXG4gICAgICAgIFwiQ0FSRVRBS0VSXCIsXHJcbiAgICAgICAgXCJDQVJUSUxBR0VcIixcclxuICAgICAgICBcIkNIQU1QQUdORVwiLFxyXG4gICAgICAgIFwiQ0hBUkFDVEVSXCIsXHJcbiAgICAgICAgXCJDSEFVRkZFVVJcIixcclxuICAgICAgICBcIkNIRU1JU1RSWVwiLFxyXG4gICAgICAgIFwiQ0hPQ09MQVRFXCIsXHJcbiAgICAgICAgXCJDSUdBUkVUVEVcIixcclxuICAgICAgICBcIkNMT0NLV09SS1wiLFxyXG4gICAgICAgIFwiQ09MTElTSU9OXCIsXHJcbiAgICAgICAgXCJDT01NSVRURUVcIixcclxuICAgICAgICBcIkNPTVBMQUlOVFwiLFxyXG4gICAgICAgIFwiQ09NUE9ORU5UXCIsXHJcbiAgICAgICAgXCJDT05ESVRJT05cIixcclxuICAgICAgICBcIkNPTkRVQ1RPUlwiLFxyXG4gICAgICAgIFwiQ09OR1JVRU5UXCIsXHJcbiAgICAgICAgXCJDT05TQ0lPVVNcIixcclxuICAgICAgICBcIkNPUFlSSUdIVFwiLFxyXG4gICAgICAgIFwiQ09SUk9TSU9OXCIsXHJcbiAgICAgICAgXCJERUZMQVRJT05cIixcclxuICAgICAgICBcIkRFUEVOREVOVFwiLFxyXG4gICAgICAgIFwiRElGRkVSRU5UXCIsXHJcbiAgICAgICAgXCJESUdFU1RJT05cIixcclxuICAgICAgICBcIkRJUkVDVElPTlwiLFxyXG4gICAgICAgIFwiRElTQ0hBUkdFXCIsXHJcbiAgICAgICAgXCJESVNDT1ZFUllcIixcclxuICAgICAgICBcIkVBUlRIV09SS1wiLFxyXG4gICAgICAgIFwiRURVQ0FUSU9OXCIsXHJcbiAgICAgICAgXCJFVkVSR1JFRU5cIixcclxuICAgICAgICBcIkVWRVJZQk9EWVwiLFxyXG4gICAgICAgIFwiRVhJU1RFTkNFXCIsXHJcbiAgICAgICAgXCJFWFBBTlNJT05cIixcclxuICAgICAgICBcIkVYUExPU0lPTlwiLFxyXG4gICAgICAgIFwiRkFTVEVOSU5HXCIsXHJcbiAgICAgICAgXCJGSU5BTkNJQUxcIixcclxuICAgICAgICBcIkZJUkVQTEFDRVwiLFxyXG4gICAgICAgIFwiRklTSEVSTUFOXCIsXHJcbiAgICAgICAgXCJGT0xJQVRJT05cIixcclxuICAgICAgICBcIkZPT1RQUklOVFwiLFxyXG4gICAgICAgIFwiRlVSTklUVVJFXCIsXHJcbiAgICAgICAgXCJHRU9HUkFQSFlcIixcclxuICAgICAgICBcIkdPT0ROSUdIVFwiLFxyXG4gICAgICAgIFwiR1VBUkFOVEVFXCIsXHJcbiAgICAgICAgXCJHVU5QT1dERVJcIixcclxuICAgICAgICBcIkhFQUREUkVTU1wiLFxyXG4gICAgICAgIFwiSEVBRFNUT05FXCIsXHJcbiAgICAgICAgXCJIRVJFQUZURVJcIixcclxuICAgICAgICBcIkhJR0hMQU5EU1wiLFxyXG4gICAgICAgIFwiSE9SU0VQTEFZXCIsXHJcbiAgICAgICAgXCJIT1VSR0xBU1NcIixcclxuICAgICAgICBcIkhPVVNFQk9BVFwiLFxyXG4gICAgICAgIFwiSU1QT1JUQU5UXCIsXHJcbiAgICAgICAgXCJJTkNMVVNJT05cIixcclxuICAgICAgICBcIklORkxBVElPTlwiLFxyXG4gICAgICAgIFwiSU5GTFVFTlpBXCIsXHJcbiAgICAgICAgXCJJTlNVTEFUT1JcIixcclxuICAgICAgICBcIklOU1VSQU5DRVwiLFxyXG4gICAgICAgIFwiSU5URVJDRVBUXCIsXHJcbiAgICAgICAgXCJJTlRSVVNJT05cIixcclxuICAgICAgICBcIklOVkVOVElPTlwiLFxyXG4gICAgICAgIFwiS05PV0xFREdFXCIsXHJcbiAgICAgICAgXCJMSUFCSUxJVFlcIixcclxuICAgICAgICBcIkxJTUVTVE9ORVwiLFxyXG4gICAgICAgIFwiTE9OR0lUVURFXCIsXHJcbiAgICAgICAgXCJNQUdOSVRVREVcIixcclxuICAgICAgICBcIk1PVVNUQUNIRVwiLFxyXG4gICAgICAgIFwiTkVDRVNTQVJZXCIsXHJcbiAgICAgICAgXCJORVdTUEFQRVJcIixcclxuICAgICAgICBcIk5VTUVSQVRPUlwiLFxyXG4gICAgICAgIFwiT0ZGU1BSSU5HXCIsXHJcbiAgICAgICAgXCJPUEVSQVRJT05cIixcclxuICAgICAgICBcIk9SQ0hFU1RSQVwiLFxyXG4gICAgICAgIFwiT1VUU0tJUlRTXCIsXHJcbiAgICAgICAgXCJPVkVSVEFYRURcIixcclxuICAgICAgICBcIk9YSURBVElPTlwiLFxyXG4gICAgICAgIFwiUEFSQUdSQVBIXCIsXHJcbiAgICAgICAgXCJQRVRST0xFVU1cIixcclxuICAgICAgICBcIlBMQVlUSElOR1wiLFxyXG4gICAgICAgIFwiUE9MSUNFTUFOXCIsXHJcbiAgICAgICAgXCJQT0xJVElDQUxcIixcclxuICAgICAgICBcIlBPUkNFTEFJTlwiLFxyXG4gICAgICAgIFwiUFJFU0lERU5UXCIsXHJcbiAgICAgICAgXCJSQURJQVRJT05cIixcclxuICAgICAgICBcIlJFQ1RBTkdMRVwiLFxyXG4gICAgICAgIFwiUkVDVVJSSU5HXCIsXHJcbiAgICAgICAgXCJSRUZFUkVOQ0VcIixcclxuICAgICAgICBcIlJFUFVMU0lPTlwiLFxyXG4gICAgICAgIFwiU0FUVVJBVEVEXCIsXHJcbiAgICAgICAgXCJTRUNSRVRBUllcIixcclxuICAgICAgICBcIlNFQ1JFVElPTlwiLFxyXG4gICAgICAgIFwiU0VMRUNUSU9OXCIsXHJcbiAgICAgICAgXCJTRVBURU1CRVJcIixcclxuICAgICAgICBcIlNIT1JUSEFORFwiLFxyXG4gICAgICAgIFwiU0lERUJPQVJEXCIsXHJcbiAgICAgICAgXCJTT01FVEhJTkdcIixcclxuICAgICAgICBcIlNPTUVXSEVSRVwiLFxyXG4gICAgICAgIFwiU1RBVEVNRU5UXCIsXHJcbiAgICAgICAgXCJTVFJFVENIRVJcIixcclxuICAgICAgICBcIlNUUlVDVFVSRVwiLFxyXG4gICAgICAgIFwiU1VCU1RBTkNFXCIsXHJcbiAgICAgICAgXCJURUxFUEhPTkVcIixcclxuICAgICAgICBcIlRISUNLTkVTU1wiLFxyXG4gICAgICAgIFwiVFJBREVTTUFOXCIsXHJcbiAgICAgICAgXCJUUkFOU1BPUlRcIixcclxuICAgICAgICBcIlRSRUFUTUVOVFwiLFxyXG4gICAgICAgIFwiVFJPVUJMSU5HXCIsXHJcbiAgICAgICAgXCJVTkRFUlRBS0VcIixcclxuICAgICAgICBcIlZFR0VUQUJMRVwiLFxyXG4gICAgICAgIFwiVkVTVElHSUFMXCIsXHJcbiAgICAgICAgXCJWSUVXUE9JTlRcIixcclxuICAgICAgICBcIldBVEVSRkFMTFwiLFxyXG4gICAgICAgIFwiV0VETkVTREFZXCIsXHJcbiAgICAgICAgXCJXSElDSEVWRVJcIixcclxuICAgICAgICBcIldISVRFV0FTSFwiLFxyXG4gICAgICAgIFwiV0hPTEVTQUxFXCIsXHJcbiAgICAgICAgXCJXT1JLSE9VU0VcIixcclxuICAgICAgICBcIllFU1RFUkRBWVwiLFxyXG4gICAgICAgIFwiWk9PS0VFUEVSXCIsXHJcbiAgICBdLFxyXG5dO1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIFRPRE86XHJcbi8vIEF1dG8tc2F2ZSBldmVyeSAxMCBzZWNvbmRzXHJcbi8vIFByZXZlbnQgY2F0Y2h1cCBsYWcgYWZ0ZXIgdGFiLW91dFxyXG4vLyBBdXRvLWNhbGN1bGF0ZSB0cnVlIGF2ZXJhZ2UgYmFuYW5hcyBwZXIgd29yZFxyXG4vLyByZWNydWl0IG11bHRpcGxlIG1vbmtleXMgYXQgYSB0aW1lICgxMHgsIDEwMHgpXHJcbi8vIHVzZSBhIGJsaW5raW5nIHVuZGVybGluZSBhbmltYXRpb24gZm9yIHRoZSBuZXh0IGxldHRlciBvblxyXG4vLyAgICBhbnkgdGV4dCBkaXNwbGF5IC0gbGlrZSBhbiBvbGQgY29tbWFuZCBsaW5lXHJcbi8vIHZpc3VhbGx5IGluZGljYXRlIHRoZSBudW1iZXIgb2YgbGV0dGVycyB5b3VyIGtleWJvYXJkIGNhbiBmaXRcclxuLy8gb3B0aW1pemUgdGhlIGRpc3BsYXkgb2YgbWFueSB0ZXh0IGRpc3BsYXlzIGF0IG9uY2VcclxuLy8gZ29vZCwgYnV0IHNtYWxsLWlzaCB3b3JkIGxpc3Q6IGh0dHBzOi8vc2ltcGxlLndpa2lwZWRpYS5vcmcvd2lraS9XaWtpcGVkaWE6QmFzaWNfRW5nbGlzaF9jb21iaW5lZF93b3JkbGlzdFxyXG4vLyBzb3VyY2U6IGh0dHBzOi8vZW4ud2lrdGlvbmFyeS5vcmcvd2lraS9XaWt0aW9uYXJ5OkZyZXF1ZW5jeV9saXN0cyNUb3BfRW5nbGlzaF93b3Jkc19saXN0c1xyXG5cclxuLy8gbWFrZSBpdCBzbyB5b3UgY2FuJ3QgcHVsbCB0d28gb2YgdGhlIHNhbWUgd29yZHNcclxuLy8gc3RhcnQgdGhlIGdhbWUgd2l0aCBhIHJhbmRvbSB3b3JkXHJcbi8vIGRpc3BsYXkgdGhlIHBsYXllcidzIGRpY3Rpb25hcnkgdG8gdGhlbSBzb21laG93XHJcbi8vIGxhc3Qtc2Vjb25kIGNvdW50ZXJzIG9mIG9uZSBsZXR0ZXIsIHR3byBsZXR0ZXIsIGV0Yy4gbWF0Y2hlc1xyXG4vLyBiZSBhYmxlIHRvIHR1cm4gb2ZmIG9uZSBsZXR0ZXIgbWF0Y2ggdGV4dFxyXG5cclxuLy8gSGF2ZSB0ZXh0IGZpdCB3aXRoaW4gdGhlIGJvdW5kcyBvZiB0aGUgYnV0dG9uc1xyXG4vLyBUaGUgc2F2ZSBzaG91bGQgYmUgZW5jcnlwdGVkXHJcbi8vIFRoZSBlcmFzZSBzYXZlIGJ1dHRvbiBzaG91bGQgaGF2ZSBhIGNvbmZpcm1hdGlvbiBzdGVwXHJcbi8vIFRoZSBlcmFzZSBzYXZlIGJ1dHRvbiBzaG91bGQgYWxzbyByZXNldCB0aGUgZ2FtZSAocHJvYmFibHkgd2lsbCByZW5hbWUgdGhlIGJ1dHRvbilcclxuLy8gVGhlcmUgc2hvdWxkIGJlIGFuIGltcG9ydC9leHBvcnQgb3B0aW9uIHRvIGxldCB0aGUgcGxheWVyIGJhY2sgdXAgdGhlaXIgc2F2ZVxyXG4vLyBUaGVyZSBhcmUgYmFsYW5jZSBpc3N1ZXNcclxuLy8gVGhlcmUgc2hvdWxkIGJlIHVwZ3JhZGVzXHJcbi8vIGFkanVzdGFibGUgdXBkYXRlIHJhdGUgZm9yIGJhbmFuYXMgcGVyIHNlY29uZCBkaXNwbGF5XHJcbi8vIGNvbXByZXNzZWQgbm90YXRpb24gZm9yIGxhcmdlIG51bWJlcnNcclxuXHJcbi8vIEhvdyBtYW55IHNjcmVlbnMgY2FuIEkgZGlzcGxheSBhdCBvbmNlP1xyXG4vLyAzayBpcyBhYm91dCB0aGUgbGltaXQgcmlnaHQgbm93XHJcblxyXG4vLyBXaGF0IGlmIGluc3RlYWQgb2YgcGlja2luZyBvbmUgdGFyZ2V0IHdvcmQgYXQgYSB0aW1lLCB0aGUgcGxheWVyIGJ1aWx0IHVwIGEgZGljdGlvbmFyeT9cclxuLy8gICAgQU5ELCB3aGF0IGlmLCB0aGV5IGVhcm5lZCBiYW5hbmFzIGZvciBldmVyeSBtYXRjaGluZyBsZXR0ZXIgaW4gdGhlaXIgZGljdGlvbmFyeT9cclxuLy8gICAgKHJhdGhlciB0aGFuIGZvciBqdXN0IHRoZSBsZXR0ZXJzIHRoZXkgbWF0Y2hlZCB3aXRoIGEgcGFydGljdWxhciB3b3JkPylcclxuLy8gVGhpcyBpbXBsaWVzIG9uZSBmZWF0dXJlIHdoZXJlIHlvdSBjYW4gdXBncmFkZSBhIHBhcnRpY3VsYXIgc2xvdCB0byBhd2FyZCBtb3JlIGJhbmFuYXNcclxuLy8gICAgZS5nLiBkb3VibGUgYWxsIGJhbmFuYXMgZWFybmVkIGZyb20gbWF0Y2hlcyBpbiB0aGUgc2Vjb25kIGxldHRlclxyXG4vLyBXaGF0IGlmLCBhdCB0aGUgc2FtZSB0aW1lLCB3b3JkcyBhbHNvIGF3YXJkZWQgZGlmZmVyZW50IGFtb3VudHMgZm9yIGRpZmZlcmVudCBudW1iZXJzIG9mIG1hdGNoZXM/XHJcbi8vIFdoYXQgaWYgdGhlIGdhbWUgd2FzIHN0cnVjdHVyZWQga2luZCBvZiBsaWtlIGEgZGVjay1idWlsZGVyP1xyXG4vLyBXaGF0IGlmIHRoZSB3b3JkcyB5b3UgY291bGQgYWRkIHRvIHlvdXIgZGljdGlvbmFyeSB3ZXJlIGNob3NlbiBhdCByYW5kb20/XHJcbi8vIFdoYXQgaWYgd2UgYnJvdWdodCBiYWNrIHRoZSBpZGVhIG9mIGxpbWl0aW5nIGhvdyB0aGUgcGxheWVyIGN1c3RvbWl6ZWQgdGhlaXIga2V5Ym9hcmQ/XHJcbi8vIFdoYXQgaWYgeW91IGNhbiB1cGdyYWRlIHdvcmRzP1xyXG5cclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIi4vYnV0dG9uXCI7XHJcbmltcG9ydCB7IGNhbnZhcywgY29sbGlkZWFibGVzLCBjdHgsIGRyYXdhYmxlcywgZm9yZWdyb3VuZERyYXdhYmxlcywgZywgcGxheWVyRGljdGlvbmFyeSwgdXBkYXRlYWJsZXMgfSBmcm9tIFwiLi9nbG9iYWxcIjtcclxuaW1wb3J0IHsgZXJhc2VTYXZlLCBsb2FkRnJvbUxvY2FsU3RvcmFnZSwgc2F2ZSB9IGZyb20gXCIuL2xvY2FsX3N0b3JhZ2VcIjtcclxuaW1wb3J0IHsgZG93bmxvYWQsIGdlbmVyYXRlUGVybXV0YXRpb25zIH0gZnJvbSBcIi4vdGVzdF9wZXJtdXRhdGlvbnNcIjtcclxuaW1wb3J0IHsgYWxpZ25UZXh0RGlzcGxheXNUb0dyaWQsIFRleHREaXNwbGF5IH0gZnJvbSBcIi4vdGV4dF9kaXNwbGF5XCI7XHJcbmltcG9ydCB7IENvbGxpZGVhYmxlIH0gZnJvbSBcIi4vdHlwZXNcIjtcclxuaW1wb3J0IHsgVXBncmFkZSB9IGZyb20gXCIuL3VwZ3JhZGVcIjtcclxuaW1wb3J0IHsgdXBncmFkZXMgfSBmcm9tIFwiLi91cGdyYWRlc1wiO1xyXG5pbXBvcnQgeyBjb3VudE1hdGNoaW5nTGV0dGVycywgZ2V0UmFuZG9tQ2hhcmFjdGVyLCBnZXRSYW5kb21JbnQsIHJnYlN0cmluZyB9IGZyb20gXCIuL3V0aWxcIjtcclxuaW1wb3J0IHsgcGFyc2VXb3JkcywgdG9QYXJzZSB9IGZyb20gXCIuL3VucGFyc2VkX3dvcmRzXCI7XHJcbmltcG9ydCB7IHdvcmRzIH0gZnJvbSBcIi4vd29yZHNcIjtcclxuaW1wb3J0IHsgRGljdGlvbmFyeVZpZXcgfSBmcm9tIFwiLi9kaWN0aW9uYXJ5X3ZpZXdcIjtcclxuXHJcbi8vIGxldCByZXBvcnQxID0gZ2VuZXJhdGVQZXJtdXRhdGlvbnMoXHJcbi8vICAgICBbXCJIXCIsIFwiT1wiLCBcIlRcIl0sXHJcbi8vICAgICBbXCJIXCIsIFwiT1wiLCBcIk9cIiwgXCJUXCJdLFxyXG4vLyApO1xyXG4vLyBkb3dubG9hZChcImhvdC1ob290LXBlcm11dGF0aW9ucy5jc3ZcIiwgcmVwb3J0MSk7XHJcblxyXG4vLyBsZXQgcmVwb3J0MiA9IGdlbmVyYXRlUGVybXV0YXRpb25zKFxyXG4vLyAgICAgW1wiSFwiLCBcIk9cIiwgXCJPXCIsIFwiVFwiXSxcclxuLy8gICAgIFtcIkhcIiwgXCJPXCIsIFwiT1wiLCBcIlRcIl0sXHJcbi8vICk7XHJcbi8vIGRvd25sb2FkKFwiaG9vdC1ob290LXBlcm11dGF0aW9ucy5jc3ZcIiwgcmVwb3J0Mik7XHJcblxyXG5sb2FkRnJvbUxvY2FsU3RvcmFnZSgpO1xyXG5cclxubGV0IGJ1dHRvbkNvbG9yOiBzdHJpbmcgPSByZ2JTdHJpbmcoMjAwLCAyMDAsIDI1NSk7XHJcbmxldCBidXR0b25Ib3ZlckNvbG9yOiBzdHJpbmcgPSByZ2JTdHJpbmcoMTgwLCAxODAsIDIzMCk7XHJcbmxldCBlcmFzZUJ1dHRvbkNvbG9yOiBzdHJpbmcgPSByZ2JTdHJpbmcoMjU1LCA1MCwgNTApO1xyXG5sZXQgZXJhc2VCdXR0b25Ib3ZlckNvbG9yOiBzdHJpbmcgPSByZ2JTdHJpbmcoMjI1LCAyMCwgMjApO1xyXG5cclxuLy8gTWFrZSBidXR0b25zIG91dCBvZiBhbGwgcG9zc2libGUga2V5Ym9hcmQga2V5c1xyXG4vLyBsZXQgYWxsS2V5Ym9hcmRLZXlzID0gW1wiIFwiLCBcIkFcIixcIkJcIixcIkNcIixcIkRcIixcIkVcIixcIkZcIixcIkdcIixcIkhcIixcIklcIixcIkpcIixcIktcIixcIkxcIixcIk1cIixcIk5cIixcIk9cIixcIlBcIixcIlFcIixcIlJcIixcIlNcIixcIlRcIixcIlVcIixcIlZcIixcIldcIixcIlhcIixcIllcIixcIlpcIl07XHJcbmxldCBhbGxLZXlib2FyZEtleXMgPSBbXCLijrVcIiwgXCJBXCIsXCJCXCIsXCJDXCIsXCJEXCIsXCJFXCIsXCJGXCIsXCJHXCIsXCJIXCIsXCJJXCIsXCJKXCIsXCJLXCIsXCJMXCIsXCJNXCIsXCJOXCIsXCJPXCIsXCJQXCIsXCJRXCIsXCJSXCIsXCJTXCIsXCJUXCIsXCJVXCIsXCJWXCIsXCJXXCIsXCJYXCIsXCJZXCIsXCJaXCJdO1xyXG5mb3IgKGxldCBpID0gMDsgaSA8IGFsbEtleWJvYXJkS2V5cy5sZW5ndGg7IGkrKykge1xyXG4gICAgbGV0IGtleSA9IGFsbEtleWJvYXJkS2V5c1tpXTtcclxuICAgIGxldCBidXR0b24gPSBuZXcgQnV0dG9uKFxyXG4gICAgICAgIDIwICsgMzAgKiBpLFxyXG4gICAgICAgIDU1MCxcclxuICAgICAgICAyNSxcclxuICAgICAgICAyNSxcclxuICAgICAgICBrZXksXHJcbiAgICAgICAgYnV0dG9uQ29sb3IsXHJcbiAgICAgICAgYnV0dG9uSG92ZXJDb2xvcixcclxuICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNyZWF0ZUN1cnJlbnRLZXlib2FyZEtleUJ1dHRvbihnLmtleWJvYXJkS2V5cy5sZW5ndGgsIGtleSk7XHJcbiAgICAgICAgICAgIGcua2V5Ym9hcmRLZXlzLnB1c2goa2V5KTtcclxuICAgICAgICAgICAgdXBkYXRlQ2hhcmFjdGVyc1RvQ2hvb3NlRnJvbSgpO1xyXG5cclxuICAgICAgICAgICAgLy8gbm90IHN1cmUgaWYgSSB3aWxsIHdhbnQgdG8gY2xlYXIgYWxsIHRoZSBjdXJyZW50XHJcbiAgICAgICAgICAgIC8vIHN0cmluZ3Mgd2hlbiB0aGUgcGxheWVyIGNoYW5nZXMgdGhlIGtleWJvYXJkXHJcbiAgICAgICAgICAgIC8vIGN1cnJlbnRTdHJpbmcgPSBbXTtcclxuICAgICAgICB9LFxyXG4gICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKGcua2V5Ym9hcmRLZXlzLmxlbmd0aCA8IGcubWF4S2V5Ym9hcmRLZXlzKSB7XHJcbiAgICAgICAgICAgICAgICBidXR0b24uaXNEaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYnV0dG9uLmlzRGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICk7XHJcbn1cclxuXHJcbmxldCByYW5kb21OdW1iZXJTaXplID0gNjU1MzY7XHJcbnVwZGF0ZUNoYXJhY3RlcnNUb0Nob29zZUZyb20oKTtcclxubGV0IGtleWJvYXJkS2V5QnV0dG9uczogQnV0dG9uW10gPSBbXVxyXG5cclxuZm9yIChsZXQgaSA9IDA7IGkgPCBnLmtleWJvYXJkS2V5cy5sZW5ndGg7IGkrKykge1xyXG4gICAgY3JlYXRlQ3VycmVudEtleWJvYXJkS2V5QnV0dG9uKGksIGcua2V5Ym9hcmRLZXlzW2ldKTtcclxufVxyXG5cclxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjYW52YXMpO1xyXG5cclxubGV0IHJlY3J1aXRQcmljZSA9IDEwICogKGcubW9ua2V5cyArIDEpICogKGcubW9ua2V5cyArIDEpO1xyXG5sZXQgYnV0dG9uMSA9IG5ldyBCdXR0b24oXHJcbiAgICAxMDAsXHJcbiAgICAxMDAsXHJcbiAgICA4MCxcclxuICAgIDMwLFxyXG4gICAgXCJSZWNydWl0IE1vbmtleSBcIiArIHJlY3J1aXRQcmljZSxcclxuICAgIGJ1dHRvbkNvbG9yLFxyXG4gICAgYnV0dG9uSG92ZXJDb2xvcixcclxuICAgICgpID0+IHtcclxuICAgICAgICBnLm1vbmtleXMgKz0gMTtcclxuICAgICAgICBuZXcgVGV4dERpc3BsYXkoKTtcclxuICAgICAgICBnLmxldHRlcnNQZXJTZWNvbmQgPSAxO1xyXG4gICAgICAgIGcuYmFuYW5hcyAtPSByZWNydWl0UHJpY2U7XHJcbiAgICAgICAgcmVjcnVpdFByaWNlID0gMTAgKiAoZy5tb25rZXlzICsgMSkgKiAoZy5tb25rZXlzICsgMSk7XHJcbiAgICAgICAgYnV0dG9uMS50ZXh0ID0gXCJSZWNydWl0IE1vbmtleSBcIiArIHJlY3J1aXRQcmljZTtcclxuICAgIH0sXHJcbiAgICAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHJlY3J1aXRQcmljZSA+IGcuYmFuYW5hcykge1xyXG4gICAgICAgICAgICBidXR0b24xLmlzRGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGJ1dHRvbjEuaXNEaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbik7XHJcblxyXG5sZXQgbGFzdENsaWNrZWRUaW1lTWlsbGlzOiBudW1iZXI7XHJcbmxldCBidXR0b24yID0gbmV3IEJ1dHRvbihcclxuICAgIDEwMCxcclxuICAgIDQ4MCxcclxuICAgIDgwLFxyXG4gICAgMzAsXHJcbiAgICBcIkdhdGhlciBCYW5hbmFzXCIsXHJcbiAgICBidXR0b25Db2xvcixcclxuICAgIGJ1dHRvbkhvdmVyQ29sb3IsXHJcbiAgICAoY3VycmVudFRpbWVNaWxsaXM6IG51bWJlcikgPT4ge1xyXG4gICAgICAgIGlmIChjdXJyZW50VGltZU1pbGxpcyAhPT0gdW5kZWZpbmVkXHJcbiAgICAgICAgICAgICYmIChjdXJyZW50VGltZU1pbGxpcyAtIGxhc3RDbGlja2VkVGltZU1pbGxpcykgPCA1MCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGcuYmFuYW5hcyArPSAxO1xyXG4gICAgICAgIGxhc3RDbGlja2VkVGltZU1pbGxpcyA9IGN1cnJlbnRUaW1lTWlsbGlzO1xyXG4gICAgfSxcclxuICAgICgpID0+IHt9XHJcbik7XHJcblxyXG5sZXQgdXBncmFkZUtleWJvYXJkUHJpY2UgPSBNYXRoLnBvdygxMCwgZy5tYXhLZXlib2FyZEtleXMgKyAxKTtcclxubGV0IGJ1dHRvbjMgPSBuZXcgQnV0dG9uKFxyXG4gICAgMjUwLFxyXG4gICAgNDgwLFxyXG4gICAgODAsXHJcbiAgICAzMCxcclxuICAgIFwiVXBncmFkZSBLZXlib2FyZCBcIiArIHVwZ3JhZGVLZXlib2FyZFByaWNlLFxyXG4gICAgYnV0dG9uQ29sb3IsXHJcbiAgICBidXR0b25Ib3ZlckNvbG9yLFxyXG4gICAgKCkgPT4ge1xyXG4gICAgICAgIGcuYmFuYW5hcyAtPSB1cGdyYWRlS2V5Ym9hcmRQcmljZTtcclxuICAgICAgICBnLm1heEtleWJvYXJkS2V5cyArPSAxO1xyXG4gICAgICAgIHVwZGF0ZUNoYXJhY3RlcnNUb0Nob29zZUZyb20oKTtcclxuICAgICAgICB1cGdyYWRlS2V5Ym9hcmRQcmljZSA9IE1hdGgucG93KDEwLCBnLm1heEtleWJvYXJkS2V5cyArIDEpO1xyXG4gICAgICAgIGJ1dHRvbjMudGV4dCA9IFwiVXBncmFkZSBLZXlib2FyZCBcIiArIHVwZ3JhZGVLZXlib2FyZFByaWNlO1xyXG4gICAgfSxcclxuICAgICgpID0+IHtcclxuICAgICAgICBpZiAodXBncmFkZUtleWJvYXJkUHJpY2UgPiBnLmJhbmFuYXMpIHtcclxuICAgICAgICAgICAgYnV0dG9uMy5pc0Rpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBidXR0b24zLmlzRGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbik7XHJcblxyXG5sZXQgc2F2ZUJ1dHRvbjogQnV0dG9uID0gbmV3IEJ1dHRvbihcclxuICAgIDEwLFxyXG4gICAgNjAwLFxyXG4gICAgMTAwLFxyXG4gICAgMzAsXHJcbiAgICBcIlNhdmVcIixcclxuICAgIGJ1dHRvbkNvbG9yLFxyXG4gICAgYnV0dG9uSG92ZXJDb2xvcixcclxuICAgICgpID0+IHtzYXZlKCl9LFxyXG4gICAgKCkgPT4ge30sXHJcbik7XHJcblxyXG5sZXQgZXJhc2VCdXR0b246IEJ1dHRvbiA9IG5ldyBCdXR0b24oXHJcbiAgICAxMCxcclxuICAgIDY0MCxcclxuICAgIDEwMCxcclxuICAgIDMwLFxyXG4gICAgXCJFcmFzZSBTYXZlXCIsXHJcbiAgICBlcmFzZUJ1dHRvbkNvbG9yLFxyXG4gICAgZXJhc2VCdXR0b25Ib3ZlckNvbG9yLFxyXG4gICAgKCkgPT4ge2VyYXNlU2F2ZSgpfSxcclxuICAgICgpID0+IHt9LFxyXG4pO1xyXG5cclxubGV0IHdvcmRCdXR0b25zOiBCdXR0b25bXSA9IFtdO1xyXG5sZXQgbmV3V29yZFByaWNlOiBudW1iZXIgPSAxO1xyXG5sZXQgbmV3V29yZEJ1dHRvbjogQnV0dG9uID0gbmV3IEJ1dHRvbihcclxuICAgIDM1MCxcclxuICAgIDQ4MCxcclxuICAgIDgwLFxyXG4gICAgMzAsXHJcbiAgICBcIkJ1eSBOZXcgV29yZCBcIiArIG5ld1dvcmRQcmljZSxcclxuICAgIGJ1dHRvbkNvbG9yLFxyXG4gICAgYnV0dG9uSG92ZXJDb2xvcixcclxuICAgICgpID0+IHtcclxuICAgICAgICBnLmJhbmFuYXMgLT0gbmV3V29yZFByaWNlO1xyXG4gICAgICAgIG5ld1dvcmRQcmljZSA9IChwbGF5ZXJEaWN0aW9uYXJ5Lmxlbmd0aCArIDEpICogKHBsYXllckRpY3Rpb25hcnkubGVuZ3RoICsgMSk7XHJcbiAgICAgICAgbmV3V29yZEJ1dHRvbi50ZXh0ID0gXCJCdXkgTmV3IFdvcmQgXCIgKyBuZXdXb3JkUHJpY2U7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHdvcmRJbmRleDogbnVtYmVyID0gZ2V0UmFuZG9tSW50KDAsIHdvcmRzWzBdLmxlbmd0aCk7XHJcbiAgICAgICAgICAgIGxldCB3b3JkOiBzdHJpbmcgPSB3b3Jkc1swXVt3b3JkSW5kZXhdO1xyXG4gICAgICAgICAgICBsZXQgd29yZEJ1dHRvbjogQnV0dG9uID0gbmV3IEJ1dHRvbihcclxuICAgICAgICAgICAgICAgIDQ0MCxcclxuICAgICAgICAgICAgICAgIDQ0NSArIDM1ICogaSxcclxuICAgICAgICAgICAgICAgIDgwLFxyXG4gICAgICAgICAgICAgICAgMzAsXHJcbiAgICAgICAgICAgICAgICB3b3JkLFxyXG4gICAgICAgICAgICAgICAgYnV0dG9uQ29sb3IsXHJcbiAgICAgICAgICAgICAgICBidXR0b25Ib3ZlckNvbG9yLFxyXG4gICAgICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgd29yZEJ1dHRvbnMubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd29yZEJ1dHRvbnNbal0uZGVsZXRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHdvcmRCdXR0b25zID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyRGljdGlvbmFyeS5wdXNoKHdvcmQuc3BsaXQoXCJcIikpO1xyXG4gICAgICAgICAgICAgICAgICAgIHdvcmRzWzBdLnNwbGljZSh3b3JkSW5kZXgsIDEpO1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICgpID0+IHt9LFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB3b3JkQnV0dG9ucy5wdXNoKHdvcmRCdXR0b24pO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICAoKSA9PiB7XHJcbiAgICAgICAgaWYgKG5ld1dvcmRQcmljZSA+IGcuYmFuYW5hc1xyXG4gICAgICAgICAgICB8fCB3b3JkQnV0dG9ucy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIG5ld1dvcmRCdXR0b24uaXNEaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbmV3V29yZEJ1dHRvbi5pc0Rpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4pO1xyXG5cclxubGV0IGRpY3Rpb25hcnlCdXR0b25TdGF0ZSA9IFwiU2hvd1wiO1xyXG5sZXQgZGljdGlvbmFyeVZpZXc6IERpY3Rpb25hcnlWaWV3O1xyXG5sZXQgc2hvd0RpY3Rpb25hcnlCdXR0b246IEJ1dHRvbiA9IG5ldyBCdXR0b24oXHJcbiAgICA1NDAsXHJcbiAgICA0ODAsXHJcbiAgICA4MCxcclxuICAgIDMwLFxyXG4gICAgZGljdGlvbmFyeUJ1dHRvblN0YXRlICsgXCIgRGljdGlvbmFyeVwiLFxyXG4gICAgYnV0dG9uQ29sb3IsXHJcbiAgICBidXR0b25Ib3ZlckNvbG9yLFxyXG4gICAgKCkgPT4ge1xyXG4gICAgICAgIGlmIChkaWN0aW9uYXJ5QnV0dG9uU3RhdGUgPT09IFwiU2hvd1wiKSB7XHJcbiAgICAgICAgICAgIGRpY3Rpb25hcnlCdXR0b25TdGF0ZSA9IFwiSGlkZVwiO1xyXG4gICAgICAgICAgICBkaWN0aW9uYXJ5VmlldyA9IG5ldyBEaWN0aW9uYXJ5Vmlldyg1NDAsIDQ4MCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZGljdGlvbmFyeUJ1dHRvblN0YXRlID0gXCJTaG93XCI7XHJcbiAgICAgICAgICAgIGRpY3Rpb25hcnlWaWV3LmRlbGV0ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzaG93RGljdGlvbmFyeUJ1dHRvbi50ZXh0ID0gZGljdGlvbmFyeUJ1dHRvblN0YXRlICsgXCIgRGljdGlvbmFyeVwiO1xyXG4gICAgfSxcclxuICAgICgpID0+IHt9LFxyXG4pO1xyXG5cclxuLy8gQ29tbWVudCBvdXQgdGhlIHVwZ3JhZGUgYnV0dG9ucyBmb3Igbm93XHJcbi8vIGxldCB1cGdyYWRlQnV0dG9uczogQnV0dG9uW10gPSBbXTtcclxuLy8gY3JlYXRlVXBncmFkZUJ1dHRvbnMoKTtcclxuXHJcbmxldCBsYXN0SW5jb21lVXBkYXRlVGltZU1pbGxpczogbnVtYmVyID0gcGVyZm9ybWFuY2Uubm93KCk7XHJcbmxldCBtaWxsaXNQZXJJbmNvbWVVcGRhdGU6IG51bWJlciA9IDIwMDA7XHJcbmxldCBsYXN0QmFuYW5hc1BlclNlY29uZDogbnVtYmVyID0gMDtcclxuXHJcbi8vIHN0b3JlIHRoZSBtb3VzZSB4eSBpbiBjYXNlIGl0IGdldHMgZXhlY3V0ZWQgZmFzdGVyIHRoYW5cclxuLy8gb25jZSBldmVyeSBmcmFtZSwgd2hpY2ggd291bGQgYmUgdXNlbGVzcyBzaW5jZSBob3ZlciBpc1xyXG4vLyBoYW5kbGVkIG9ubHkgb25jZSBldmVyeSBmcmFtZVxyXG5jYW52YXMub25tb3VzZW1vdmUgPSAoZXY6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgIGxldCBib3VuZHM6IERPTVJlY3QgPSBjYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICBnLm1vdXNlWCA9IGV2LnggLSBib3VuZHMubGVmdDtcclxuICAgIGcubW91c2VZID0gZXYueSAtIGJvdW5kcy50b3A7XHJcbn07XHJcblxyXG4vLyBhc3N1bWUgZm9yIHNpbXBsaWNpdHkgdGhhdCB5b3UgY2FuJ3QgaGF2ZSB0d28gbW91c2Vkb3duXHJcbi8vIGV2ZW50cyB3aXRob3V0IGEgbW91c2V1cFxyXG5jYW52YXMub25tb3VzZWRvd24gPSAoZXY6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgIGxldCBib3VuZHM6IERPTVJlY3QgPSBjYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICBsZXQgbW91c2VYID0gZXYueCAtIGJvdW5kcy5sZWZ0O1xyXG4gICAgbGV0IG1vdXNlWSA9IGV2LnkgLSBib3VuZHMudG9wO1xyXG4gICAgbGV0IGNvbGxpZGVhYmxlOiBDb2xsaWRlYWJsZSA9IGdldENvbGxpZGluZ0VudGl0eShtb3VzZVgsIG1vdXNlWSk7XHJcbiAgICBpZiAoY29sbGlkZWFibGUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGNvbGxpZGVhYmxlLmlzTW91c2VEb3duZWQgPSB0cnVlO1xyXG4gICAgICAgIGN1cnJlbnRNb3VzZURvd25lZCA9IGNvbGxpZGVhYmxlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjdXJyZW50TW91c2VEb3duZWQgPSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNhbnZhcy5vbm1vdXNldXAgPSAoZXY6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgIGxldCBib3VuZHM6IERPTVJlY3QgPSBjYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICBsZXQgbW91c2VYID0gZXYueCAtIGJvdW5kcy5sZWZ0O1xyXG4gICAgbGV0IG1vdXNlWSA9IGV2LnkgLSBib3VuZHMudG9wO1xyXG4gICAgbGV0IGNvbGxpZGVhYmxlOiBDb2xsaWRlYWJsZSA9IGdldENvbGxpZGluZ0VudGl0eShtb3VzZVgsIG1vdXNlWSk7XHJcbiAgICBpZiAoY29sbGlkZWFibGUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGlmIChjb2xsaWRlYWJsZS5pc01vdXNlRG93bmVkXHJcbiAgICAgICAgICAgICYmICFjb2xsaWRlYWJsZS5pc0Rpc2FibGVkKSB7XHJcbiAgICAgICAgICAgIGNvbGxpZGVhYmxlLm9uQ2xpY2soZXYudGltZVN0YW1wKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoY3VycmVudE1vdXNlRG93bmVkICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBjdXJyZW50TW91c2VEb3duZWQuaXNNb3VzZURvd25lZCA9IGZhbHNlO1xyXG4gICAgfVxyXG59XHJcblxyXG5sZXQgcHJldmlvdXNUaW1lTWlsbGlzOiBudW1iZXI7XHJcbmxldCBwcmV2aW91c0hvdmVyZWQ6IENvbGxpZGVhYmxlO1xyXG5sZXQgY3VycmVudE1vdXNlRG93bmVkOiBDb2xsaWRlYWJsZTtcclxuXHJcbndpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZHJhdyk7XHJcblxyXG5mdW5jdGlvbiBkcmF3KGN1cnJlbnRUaW1lTWlsbGlzOiBudW1iZXIpIHtcclxuICAgIGxldCBlbGFwc2VkVGltZU1pbGxpczogbnVtYmVyID0gMDtcclxuICAgIGlmIChwcmV2aW91c1RpbWVNaWxsaXMgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGVsYXBzZWRUaW1lTWlsbGlzID0gY3VycmVudFRpbWVNaWxsaXMgLSBwcmV2aW91c1RpbWVNaWxsaXM7XHJcbiAgICB9XHJcblxyXG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xyXG4gICAgY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcclxuICAgIGN0eC5maWxsUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xyXG5cclxuICAgIGlmIChwcmV2aW91c0hvdmVyZWQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHByZXZpb3VzSG92ZXJlZC5pc0hvdmVyZWQgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29sbGlkZWFibGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgbGV0IGlzQ29sbGlkaW5nID0gY29sbGlkZWFibGVzW2ldLmNvbGxpZGUoZy5tb3VzZVgsIGcubW91c2VZKTtcclxuICAgICAgICBpZiAoaXNDb2xsaWRpbmcpIHtcclxuICAgICAgICAgICAgbGV0IGN1cnJlbnRIb3ZlcmVkID0gY29sbGlkZWFibGVzW2ldO1xyXG4gICAgICAgICAgICBjdXJyZW50SG92ZXJlZC5pc0hvdmVyZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICBwcmV2aW91c0hvdmVyZWQgPSBjdXJyZW50SG92ZXJlZDtcclxuICAgICAgICAgICAgYnJlYWs7IC8vIG9ubHkgb25lIHRoaW5nIGNhbiBiZSBob3ZlcmVkIG92ZXIgYXQgYSB0aW1lXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIENhbGwgdXBkYXRlIG9uIGV2ZXJ5dGhpbmcganVzdCBiZWZvcmUgZHJhd1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB1cGRhdGVhYmxlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHVwZGF0ZWFibGVzW2ldLnVwZGF0ZShjdXJyZW50VGltZU1pbGxpcywgZWxhcHNlZFRpbWVNaWxsaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFVwZGF0ZSB0aGUgaW5jb21lIHBlciBzZWNvbmQgaWYgaXQncyB0aW1lIHRvXHJcbiAgICBsZXQgZWxhcHNlZFNpbmNlTGFzdEluY29tZVVwZGF0ZSA9IGN1cnJlbnRUaW1lTWlsbGlzIC0gbGFzdEluY29tZVVwZGF0ZVRpbWVNaWxsaXM7XHJcbiAgICBpZiAoZWxhcHNlZFNpbmNlTGFzdEluY29tZVVwZGF0ZSA+PSBtaWxsaXNQZXJJbmNvbWVVcGRhdGUpIHtcclxuICAgICAgICBsYXN0QmFuYW5hc1BlclNlY29uZCA9IGcuaW5jb21lQWNjdW11bGF0b3IgLyAoZWxhcHNlZFNpbmNlTGFzdEluY29tZVVwZGF0ZSAvIDEwMDApO1xyXG4gICAgICAgIGcuaW5jb21lQWNjdW11bGF0b3IgPSAwO1xyXG4gICAgICAgIGxhc3RJbmNvbWVVcGRhdGVUaW1lTWlsbGlzID0gY3VycmVudFRpbWVNaWxsaXM7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRHJhdyB2YWx1ZXMgYXQgdGhlIGVuZCBvZiB0aGUgZnJhbWUgc28gdGhleSdyZSBhcyB1cFxyXG4gICAgLy8gdG8gZGF0ZSBhcyB0aGV5IGNhbiBiZVxyXG4gICAgY3R4LnNhdmUoKTtcclxuICAgIGN0eC5maWxsU3R5bGUgPSBcImJsYWNrXCI7XHJcbiAgICBjdHguZm9udCA9IFwiMjBweCBBcmlhbFwiO1xyXG5cclxuICAgIGN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xyXG4gICAgY3R4LmZpbGxUZXh0KGJhbmFuYXNQZXJTZWNvbmQobGFzdEJhbmFuYXNQZXJTZWNvbmQpLCAxNDAsIDMwKTtcclxuICAgIGN0eC5maWxsVGV4dChiYW5hbmFzKGcuYmFuYW5hcyksIDE0MCwgNTUpO1xyXG4gICAgY3R4LmZpbGxUZXh0KG1vbmtleXMoZy5tb25rZXlzKSwgMTQwLCA4MCk7XHJcblxyXG4gICAgY3R4LnRleHRBbGlnbiA9IFwicmlnaHRcIjtcclxuICAgIGN0eC5maWxsVGV4dChcIktleWJvYXJkIEtleXM6XCIsIDE2MCwgNDUwKTtcclxuXHJcbiAgICBjdHgucmVzdG9yZSgpO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZHJhd2FibGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgZHJhd2FibGVzW2ldLmRyYXcoY3VycmVudFRpbWVNaWxsaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZm9yZWdyb3VuZERyYXdhYmxlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGZvcmVncm91bmREcmF3YWJsZXNbaV0uZHJhdyhjdXJyZW50VGltZU1pbGxpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJldmlvdXNUaW1lTWlsbGlzID0gY3VycmVudFRpbWVNaWxsaXM7XHJcbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGRyYXcpO1xyXG59XHJcblxyXG4vLyBNYWtlIGEgYnV0dG9uIG91dCBvZiB0aGUgYSBrZXlib2FyZCBrZXkgc28geW91XHJcbi8vIGNhbiBjbGljayB0byByZW1vdmUgaXQgZnJvbSB5b3VyIGtleWJvYXJkLlxyXG4vLyBpIGlzIHRoZSBpbmRleCBpbiB0aGUga2V5Ym9hcmRLZXlzIGFycmF5XHJcbi8vIE9uIGNsaWNrIGl0IGRlbGV0ZXMgYW5kIHJlbWFrZXMgYWxsIHRoZSBidXR0b25zXHJcbmZ1bmN0aW9uIGNyZWF0ZUN1cnJlbnRLZXlib2FyZEtleUJ1dHRvbihpOiBudW1iZXIsIGtleTogc3RyaW5nKSB7XHJcbiAgICBsZXQgYnV0dG9uID0gbmV3IEJ1dHRvbihcclxuICAgICAgICAxODAgKyAzMCAqIGksXHJcbiAgICAgICAgNDMwLFxyXG4gICAgICAgIDI1LFxyXG4gICAgICAgIDI1LFxyXG4gICAgICAgIGtleSxcclxuICAgICAgICBidXR0b25Db2xvcixcclxuICAgICAgICBidXR0b25Ib3ZlckNvbG9yLFxyXG4gICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgZy5rZXlib2FyZEtleXMuc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICB1cGRhdGVDaGFyYWN0ZXJzVG9DaG9vc2VGcm9tKCk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwga2V5Ym9hcmRLZXlCdXR0b25zLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBrZXlib2FyZEtleUJ1dHRvbnNbal0uZGVsZXRlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBnLmtleWJvYXJkS2V5cy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGtleSA9IGcua2V5Ym9hcmRLZXlzW2pdO1xyXG4gICAgICAgICAgICAgICAgY3JlYXRlQ3VycmVudEtleWJvYXJkS2V5QnV0dG9uKGosIGtleSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gbm90IHN1cmUgaWYgSSB3aWxsIHdhbnQgdG8gY2xlYXIgYWxsIHRoZSBjdXJyZW50XHJcbiAgICAgICAgICAgIC8vIHN0cmluZ3Mgd2hlbiB0aGUgcGxheWVyIGNoYW5nZXMgdGhlIGtleWJvYXJkXHJcbiAgICAgICAgICAgIC8vIGN1cnJlbnRTdHJpbmcgPSBbXTtcclxuICAgICAgICB9LFxyXG4gICAgICAgICgpID0+IHt9LFxyXG4gICAgKTtcclxuICAgIGtleWJvYXJkS2V5QnV0dG9ucy5wdXNoKGJ1dHRvbik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZUNoYXJhY3RlcnNUb0Nob29zZUZyb20oKSB7XHJcbiAgICBnLmNoYXJhY3RlcnNUb0Nob29zZUZyb20gPSBbXTtcclxuICAgIGlmIChnLmtleWJvYXJkS2V5cy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJhbmRvbU51bWJlclNpemU7IGkrKykge1xyXG4gICAgICAgIGcuY2hhcmFjdGVyc1RvQ2hvb3NlRnJvbS5wdXNoKFxyXG4gICAgICAgICAgICBnLmtleWJvYXJkS2V5c1tpICUgZy5rZXlib2FyZEtleXMubGVuZ3RoXVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIGZ1bmN0aW9uIGNyZWF0ZVVwZ3JhZGVCdXR0b25zKCkge1xyXG4vLyAgICAgbGV0IHNvcnRlZFVwZ3JhZGVzOiBVcGdyYWRlW10gPSBzb3J0ZWQodXBncmFkZXMsIChhOiBVcGdyYWRlLCBiOiBVcGdyYWRlKSA9PiB7XHJcbi8vICAgICAgICAgcmV0dXJuIGEucHJpY2UgLSBiLnByaWNlO1xyXG4vLyAgICAgfSk7XHJcbi8vICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNvcnRlZFVwZ3JhZGVzLmxlbmd0aDsgaSsrKSB7XHJcbi8vICAgICAgICAgbGV0IHVwZ3JhZGUgPSBzb3J0ZWRVcGdyYWRlc1tpXTtcclxuLy8gICAgICAgICBsZXQgYnV0dG9uOiBCdXR0b24gPSBuZXcgQnV0dG9uKFxyXG4vLyAgICAgICAgICAgICA1MDAsXHJcbi8vICAgICAgICAgICAgIDMwMCArIDM1ICogaSxcclxuLy8gICAgICAgICAgICAgODAsXHJcbi8vICAgICAgICAgICAgIDMwLFxyXG4vLyAgICAgICAgICAgICB1cGdyYWRlLnRleHQgKyBcIiBcIiArIHVwZ3JhZGUucHJpY2UsXHJcbi8vICAgICAgICAgICAgIGJ1dHRvbkNvbG9yLFxyXG4vLyAgICAgICAgICAgICBidXR0b25Ib3ZlckNvbG9yLFxyXG4vLyAgICAgICAgICAgICAoKSA9PiB7XHJcbi8vICAgICAgICAgICAgICAgICB1cGdyYWRlLmJ1eSgpO1xyXG4vLyAgICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB1cGdyYWRlQnV0dG9ucy5sZW5ndGg7IGorKykge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIHVwZ3JhZGVCdXR0b25zW2pdLmRlbGV0ZSgpO1xyXG4vLyAgICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICAgICAgY3JlYXRlVXBncmFkZUJ1dHRvbnMoKTtcclxuLy8gICAgICAgICAgICAgfSxcclxuLy8gICAgICAgICAgICAgKCkgPT4ge1xyXG4vLyAgICAgICAgICAgICAgICAgaWYgKHVwZ3JhZGUucHJpY2UgPiBnLmJhbmFuYXMpIHtcclxuLy8gICAgICAgICAgICAgICAgICAgICBidXR0b24uaXNEaXNhYmxlZCA9IHRydWU7XHJcbi8vICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbi5pc0Rpc2FibGVkID0gZmFsc2U7XHJcbi8vICAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgIH0sXHJcbi8vICAgICAgICAgKTtcclxuLy8gICAgICAgICB1cGdyYWRlQnV0dG9ucy5wdXNoKGJ1dHRvbik7XHJcbi8vICAgICB9XHJcbi8vIH1cclxuXHJcbmZ1bmN0aW9uIGdldENvbGxpZGluZ0VudGl0eShwb2ludFg6IG51bWJlciwgcG9pbnRZOiBudW1iZXIpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29sbGlkZWFibGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgbGV0IGlzQ29sbGlkaW5nID0gY29sbGlkZWFibGVzW2ldLmNvbGxpZGUoZy5tb3VzZVgsIGcubW91c2VZKTtcclxuICAgICAgICBpZiAoaXNDb2xsaWRpbmcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNvbGxpZGVhYmxlc1tpXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG59XHJcblxyXG5mdW5jdGlvbiBiYW5hbmFzKG51bWJlcjogbnVtYmVyKSB7XHJcbiAgICBudW1iZXIgPSBNYXRoLnJvdW5kKG51bWJlcik7XHJcbiAgICBpZiAobnVtYmVyID09PSAxKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bWJlciArIFwiIGJhbmFuYVwiO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gbnVtYmVyICsgXCIgYmFuYW5hc1wiO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBtb25rZXlzKG51bWJlcjogbnVtYmVyKSB7IFxyXG4gICAgaWYgKG51bWJlciA9PT0gMSkge1xyXG4gICAgICAgIHJldHVybiBudW1iZXIgKyBcIiBtb25rZXlcIjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIG51bWJlciArIFwiIG1vbmtleXNcIjtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gYmFuYW5hc1BlclNlY29uZChudW1iZXI6IG51bWJlcikge1xyXG4gICAgbnVtYmVyID0gTWF0aC5yb3VuZChudW1iZXIpO1xyXG4gICAgaWYgKG51bWJlciA9PT0gMSkge1xyXG4gICAgICAgIHJldHVybiBudW1iZXIgKyBcIiBiYW5hbmEgbGFzdCBzZWNvbmRcIjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIG51bWJlciArIFwiIGJhbmFuYXMgbGFzdCBzZWNvbmRcIjtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc29ydGVkKGFycmF5OiBhbnlbXSwgY29tcGFyZUZuPzogKGE6IGFueSwgYjogYW55KSA9PiBudW1iZXIpIHtcclxuICAgIHJldHVybiBhcnJheS5zbGljZSgpLnNvcnQoY29tcGFyZUZuKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcm91bmRUb05QbGFjZXMoeDogbnVtYmVyLCBudW1QbGFjZXM6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICBsZXQgc2NhbGU6IG51bWJlciA9IE1hdGgucG93KDEwLCBudW1QbGFjZXMpO1xyXG4gICAgcmV0dXJuIE1hdGgucm91bmQoeCAqIHNjYWxlKSAvIHNjYWxlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2hlYXQoKSB7XHJcbiAgICBnLmJhbmFuYXMgPSAxMDAwMDAwMDAwO1xyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==