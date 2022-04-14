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
/* harmony import */ var _button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./button */ "./src/button.ts");
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./global */ "./src/global.ts");
/* harmony import */ var _local_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./local_storage */ "./src/local_storage.ts");
/* harmony import */ var _text_display__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./text_display */ "./src/text_display.ts");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./util */ "./src/util.ts");
/* harmony import */ var _words__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./words */ "./src/words.ts");
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
// word particle effects?
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
        var wordButton = new _button__WEBPACK_IMPORTED_MODULE_0__.Button(400 + 85 * i, 445, 80, 30, word, buttonColor, buttonHoverColor, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO0tBQ1I7SUFDRDtRQUNJLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO0tBQ1Q7SUFDRDtRQUNJLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO0tBQ1Y7SUFDRDtRQUNJLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtLQUNYO0lBQ0Q7UUFDSSxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztLQUNaO0lBQ0Q7UUFDSSxVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtLQUNiO0lBQ0Q7UUFDSSxXQUFXO1FBQ1gsV0FBVztRQUNYLFdBQVc7UUFDWCxXQUFXO1FBQ1gsV0FBVztRQUNYLFdBQVc7UUFDWCxXQUFXO1FBQ1gsV0FBVztRQUNYLFdBQVc7UUFDWCxXQUFXO1FBQ1gsV0FBVztRQUNYLFdBQVc7UUFDWCxXQUFXO1FBQ1gsV0FBVztRQUNYLFdBQVc7UUFDWCxXQUFXO1FBQ1gsV0FBVztRQUNYLFdBQVc7UUFDWCxXQUFXO1FBQ1gsV0FBVztRQUNYLFdBQVc7UUFDWCxXQUFXO1FBQ1gsV0FBVztRQUNYLFdBQVc7UUFDWCxXQUFXO1FBQ1gsV0FBVztRQUNYLFdBQVc7UUFDWCxXQUFXO1FBQ1gsV0FBVztRQUNYLFdBQVc7UUFDWCxXQUFXO1FBQ1gsV0FBVztRQUNYLFdBQVc7UUFDWCxXQUFXO1FBQ1gsV0FBVztRQUNYLFdBQVc7UUFDWCxXQUFXO1FBQ1gsV0FBVztRQUNYLFdBQVc7UUFDWCxXQUFXO1FBQ1gsV0FBVztRQUNYLFdBQVc7UUFDWCxXQUFXO1FBQ1gsV0FBVztRQUNYLFdBQVc7UUFDWCxXQUFXO1FBQ1gsV0FBVztRQUNYLFdBQVc7UUFDWCxXQUFXO1FBQ1gsV0FBVztRQUNYLFdBQVc7UUFDWCxXQUFXO1FBQ1gsV0FBVztRQUNYLFdBQVc7UUFDWCxXQUFXO1FBQ1gsV0FBVztRQUNYLFdBQVc7UUFDWCxXQUFXO1FBQ1gsV0FBVztRQUNYLFdBQVc7UUFDWCxXQUFXO1FBQ1gsV0FBVztRQUNYLFdBQVc7UUFDWCxXQUFXO1FBQ1gsV0FBVztRQUNYLFdBQVc7UUFDWCxXQUFXO1FBQ1gsV0FBVztRQUNYLFdBQVc7UUFDWCxXQUFXO1FBQ1gsV0FBVztRQUNYLFdBQVc7UUFDWCxXQUFXO1FBQ1gsV0FBVztRQUNYLFdBQVc7UUFDWCxXQUFXO1FBQ1gsV0FBVztRQUNYLFdBQVc7UUFDWCxXQUFXO1FBQ1gsV0FBVztRQUNYLFdBQVc7UUFDWCxXQUFXO1FBQ1gs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QUMsTUFBTSxDQUFDLENBQUM7SUFDNUIsSUFBSSxNQUFNLEtBQUssQ0FBQyxFQUFFO1FBQ2QsT0FBTyxNQUFNLEdBQUcsU0FBUyxDQUFDO0tBQzdCO1NBQU07UUFDSCxPQUFPLE1BQU0sR0FBRyxVQUFVLENBQUM7S0FDOUI7QUFDTCxDQUFDO0FBRUQsU0FBUyxPQUFPLENBQUMsTUFBYztJQUMzQixJQUFJLE1BQU0sS0FBSyxDQUFDLEVBQUU7UUFDZCxPQUFPLE1BQU0sR0FBRyxTQUFTLENBQUM7S0FDN0I7U0FBTTtRQUNILE9BQU8sTUFBTSxHQUFHLFVBQVUsQ0FBQztLQUM5QjtBQUNMLENBQUM7QUFFRCxTQUFTLGdCQUFnQixDQUFDLE1BQWM7SUFDcEMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDNUIsSUFBSSxNQUFNLEtBQUssQ0FBQyxFQUFFO1FBQ2QsT0FBTyxNQUFNLEdBQUcsb0JBQW9CLENBQUM7S0FDeEM7U0FBTTtRQUNILE9BQU8sTUFBTSxHQUFHLHFCQUFxQixDQUFDO0tBQ3pDO0FBQ0wsQ0FBQztBQUVELFNBQVMsTUFBTSxDQUFDLEtBQVksRUFBRSxTQUFzQztJQUNoRSxPQUFPLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDekMsQ0FBQztBQUVELFNBQVMsY0FBYyxDQUFDLENBQVMsRUFBRSxTQUFpQjtJQUNoRCxJQUFJLEtBQUssR0FBVyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUM1QyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxHQUFHLEtBQUssQ0FBQztBQUN6QyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhwb3J0cy8uL3NyYy9idXR0b24udHMiLCJ3ZWJwYWNrOi8vZXhwb3J0cy8uL3NyYy9nbG9iYWwudHMiLCJ3ZWJwYWNrOi8vZXhwb3J0cy8uL3NyYy9sb2NhbF9zdG9yYWdlLnRzIiwid2VicGFjazovL2V4cG9ydHMvLi9zcmMvc2F2ZV9maWxlLnRzIiwid2VicGFjazovL2V4cG9ydHMvLi9zcmMvdGV4dF9kaXNwbGF5LnRzIiwid2VicGFjazovL2V4cG9ydHMvLi9zcmMvdXRpbC50cyIsIndlYnBhY2s6Ly9leHBvcnRzLy4vc3JjL3dvcmRfcGFydGljbGUudHMiLCJ3ZWJwYWNrOi8vZXhwb3J0cy8uL3NyYy93b3Jkcy50cyIsIndlYnBhY2s6Ly9leHBvcnRzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2V4cG9ydHMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2V4cG9ydHMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9leHBvcnRzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXhwb3J0cy8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb2xsaWRlYWJsZXMsIGN0eCwgZHJhd2FibGVzLCBnLCB1cGRhdGVhYmxlcyB9IGZyb20gXCIuL2dsb2JhbFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEJ1dHRvbiB7XHJcbiAgICBwdWJsaWMgaWQ6IG51bWJlcjtcclxuICAgIHB1YmxpYyB0b3BMZWZ0WDogbnVtYmVyO1xyXG4gICAgcHVibGljIHRvcExlZnRZOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgd2lkdGg6IG51bWJlcjtcclxuICAgIHB1YmxpYyBoZWlnaHQ6IG51bWJlcjtcclxuICAgIHB1YmxpYyBib3R0b21SaWdodFg6IG51bWJlcjtcclxuICAgIHB1YmxpYyBib3R0b21SaWdodFk6IG51bWJlcjtcclxuICAgIHB1YmxpYyB0ZXh0OiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgY29sb3I6IHN0cmluZztcclxuICAgIHB1YmxpYyBob3ZlcmVkQ29sb3I6IHN0cmluZztcclxuICAgIHB1YmxpYyBkaXNhYmxlZENvbG9yOiBzdHJpbmcgPSBcImdyYXlcIjtcclxuICAgIHB1YmxpYyBpc0hvdmVyZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHB1YmxpYyBpc0Rpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwdWJsaWMgaXNNb3VzZURvd25lZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHVibGljIG9uQ2xpY2s6IChjdXJyZW50VGltZU1pbGxpcz86IG51bWJlcikgPT4gdm9pZDtcclxuICAgIHB1YmxpYyB1cGRhdGU6ICgpID0+IHZvaWQ7XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHRvcExlZnRYOiBudW1iZXIsXHJcbiAgICAgICAgdG9wTGVmdFk6IG51bWJlcixcclxuICAgICAgICB3aWR0aDogbnVtYmVyLFxyXG4gICAgICAgIGhlaWdodDogbnVtYmVyLFxyXG4gICAgICAgIHRleHQ6IHN0cmluZyxcclxuICAgICAgICBjb2xvcjogc3RyaW5nLFxyXG4gICAgICAgIGhvdmVyZWRDb2xvcjogc3RyaW5nLFxyXG4gICAgICAgIG9uQ2xpY2s6IChjdXJyZW50VGltZU1pbGxpcz86IG51bWJlcikgPT4gdm9pZCxcclxuICAgICAgICB1cGRhdGU6ICgpID0+IHZvaWQsXHJcbiAgICApIHtcclxuICAgICAgICB0aGlzLnRvcExlZnRYID0gdG9wTGVmdFg7XHJcbiAgICAgICAgdGhpcy50b3BMZWZ0WSA9IHRvcExlZnRZO1xyXG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcclxuICAgICAgICB0aGlzLmJvdHRvbVJpZ2h0WCA9IHRvcExlZnRYICsgd2lkdGg7XHJcbiAgICAgICAgdGhpcy5ib3R0b21SaWdodFkgPSB0b3BMZWZ0WSArIGhlaWdodDtcclxuICAgICAgICB0aGlzLnRleHQgPSB0ZXh0O1xyXG4gICAgICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcclxuICAgICAgICB0aGlzLmhvdmVyZWRDb2xvciA9IGhvdmVyZWRDb2xvcjtcclxuICAgICAgICB0aGlzLm9uQ2xpY2sgPSBvbkNsaWNrO1xyXG4gICAgICAgIHRoaXMudXBkYXRlID0gdXBkYXRlO1xyXG5cclxuICAgICAgICB0aGlzLmlkID0gZy5pZENvdW50ZXI7XHJcbiAgICAgICAgZy5pZENvdW50ZXIgKz0gMTtcclxuICAgICAgICBkcmF3YWJsZXMucHVzaCh0aGlzKTtcclxuICAgICAgICBjb2xsaWRlYWJsZXMucHVzaCh0aGlzKTtcclxuICAgICAgICB1cGRhdGVhYmxlcy5wdXNoKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkcmF3KCkge1xyXG4gICAgICAgIGxldCB0b3BMZWZ0WCA9IHRoaXMudG9wTGVmdFg7XHJcbiAgICAgICAgbGV0IHRvcExlZnRZID0gdGhpcy50b3BMZWZ0WTtcclxuICAgICAgICBsZXQgd2lkdGggPSB0aGlzLndpZHRoO1xyXG4gICAgICAgIGxldCBoZWlnaHQgPSB0aGlzLmhlaWdodDtcclxuICAgICAgICBsZXQgZm9udFNpemUgPSAxNTtcclxuICAgICAgICBsZXQgY29sb3I6IHN0cmluZztcclxuICAgICAgICBpZiAodGhpcy5pc01vdXNlRG93bmVkXHJcbiAgICAgICAgICAgICYmICF0aGlzLmlzRGlzYWJsZWQpIHtcclxuICAgICAgICAgICAgbGV0IHNocmluayA9IDAuMTtcclxuICAgICAgICAgICAgbGV0IHNocmlua1ggPSB3aWR0aCAqIHNocmluaztcclxuICAgICAgICAgICAgbGV0IHNocmlua1kgPSBoZWlnaHQgKiBzaHJpbms7XHJcbiAgICAgICAgICAgIHdpZHRoIC09IHNocmlua1g7XHJcbiAgICAgICAgICAgIGhlaWdodCAtPSBzaHJpbmtZO1xyXG4gICAgICAgICAgICB0b3BMZWZ0WCArPSBzaHJpbmtYIC8gMjtcclxuICAgICAgICAgICAgdG9wTGVmdFkgKz0gc2hyaW5rWSAvIDI7XHJcbiAgICAgICAgICAgIGZvbnRTaXplICo9ICgxIC0gc2hyaW5rKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuaXNEaXNhYmxlZCkge1xyXG4gICAgICAgICAgICBjb2xvciA9IHRoaXMuZGlzYWJsZWRDb2xvclxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzSG92ZXJlZCkge1xyXG4gICAgICAgICAgICAgICAgY29sb3IgPSB0aGlzLmNvbG9yO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29sb3IgPSB0aGlzLmhvdmVyZWRDb2xvcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY3R4LnNhdmUoKTtcclxuICAgICAgICBjdHguZmlsbFN0eWxlID0gY29sb3I7XHJcbiAgICAgICAgY3R4LmZvbnQgPSBmb250U2l6ZSArIFwicHggQXJpYWxcIjtcclxuICAgICAgICBjdHguZmlsbFJlY3QodG9wTGVmdFgsIHRvcExlZnRZLCB3aWR0aCwgaGVpZ2h0KTtcclxuICAgICAgICBjdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcclxuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJibGFja1wiO1xyXG4gICAgICAgIGN0eC5maWxsVGV4dChcclxuICAgICAgICAgICAgdGhpcy50ZXh0LFxyXG4gICAgICAgICAgICB0b3BMZWZ0WCArIHdpZHRoIC8gMixcclxuICAgICAgICAgICAgdG9wTGVmdFkgKyBoZWlnaHQgLyAyICsgZm9udFNpemUgLyAyLjRcclxuICAgICAgICApO1xyXG4gICAgICAgIGN0eC5yZXN0b3JlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNvbGxpZGUocG9pbnRYOiBudW1iZXIsIHBvaW50WTogbnVtYmVyKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudG9wTGVmdFggPD0gcG9pbnRYXHJcbiAgICAgICAgICAgICYmIHBvaW50WCA8PSB0aGlzLmJvdHRvbVJpZ2h0WFxyXG4gICAgICAgICAgICAmJiB0aGlzLnRvcExlZnRZIDw9IHBvaW50WVxyXG4gICAgICAgICAgICAmJiBwb2ludFkgPD0gdGhpcy5ib3R0b21SaWdodFk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRlbGV0ZSgpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRyYXdhYmxlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZHJhd2FibGVzW2ldLmlkID09PSB0aGlzLmlkKSB7XHJcbiAgICAgICAgICAgICAgICBkcmF3YWJsZXMuc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29sbGlkZWFibGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChjb2xsaWRlYWJsZXNbaV0uaWQgPT09IHRoaXMuaWQpIHtcclxuICAgICAgICAgICAgICAgIGNvbGxpZGVhYmxlcy5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB1cGRhdGVhYmxlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodXBkYXRlYWJsZXNbaV0uaWQgPT09IHRoaXMuaWQpIHtcclxuICAgICAgICAgICAgICAgIHVwZGF0ZWFibGVzLnNwbGljZShpLCAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb2xsaWRlYWJsZSwgRHJhd2FibGUsIFVwZGF0ZWFibGUgfSBmcm9tIFwiLi90eXBlc1wiO1xyXG5cclxuZXhwb3J0IGxldCB3aWR0aDogbnVtYmVyID0gMTAwMDtcclxuZXhwb3J0IGxldCBoZWlnaHQ6IG51bWJlciA9IDcwMDtcclxuZXhwb3J0IGxldCBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcclxuZXhwb3J0IGxldCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xyXG5jYW52YXMud2lkdGggPSB3aWR0aDtcclxuY2FudmFzLmhlaWdodCA9IGhlaWdodDtcclxuY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuZXhwb3J0IGxldCBkcmF3YWJsZXM6IERyYXdhYmxlW10gPSBbXTtcclxuZXhwb3J0IGxldCBjb2xsaWRlYWJsZXM6IENvbGxpZGVhYmxlW10gPSBbXTtcclxuZXhwb3J0IGxldCB1cGRhdGVhYmxlczogVXBkYXRlYWJsZVtdID0gW107XHJcbmV4cG9ydCBsZXQgcGxheWVyRGljdGlvbmFyeSA9IFtbXCJDXCIsIFwiQVwiLCBcIlRcIl1dO1xyXG5cclxuLy8gUHV0IGFueSBnbG9iYWwgdmFyaWFibGVzIHRoYXQgeW91IHdhbnQgdG8gYmUgYWJsZSB0byByZWFzc2lnbiBoZXJlXHJcbmV4cG9ydCBsZXQgZyA9IHtcclxuICAgIGJhbmFuYXM6IDAsXHJcbiAgICBtb25rZXlzOiAwLFxyXG4gICAgbGV0dGVyc1BlclNlY29uZDogMCxcclxuICAgIG1vdXNlWDogLTEsXHJcbiAgICBtb3VzZVk6IC0xLFxyXG4gICAgaWRDb3VudGVyOiAwLFxyXG4gICAgY3VycmVudFRhcmdldEluZGV4OiAwLFxyXG4gICAga2V5Ym9hcmRLZXlzOiBbXCJBXCJdLFxyXG4gICAgbWF4S2V5Ym9hcmRLZXlzOiAxLFxyXG4gICAgdGFyZ2V0T3duZWQ6IFt0cnVlXSxcclxuICAgIGFkZGl0aXZlUGVyY2VudEJvbnVzOiAwLFxyXG4gICAgYWRkaXRpdmVGbGF0Qm9udXM6IDAsXHJcbiAgICBjaGFyYWN0ZXJzVG9DaG9vc2VGcm9tOiA8c3RyaW5nW10+W10sXHJcbiAgICBpbmNvbWVBY2N1bXVsYXRvcjogMCxcclxuICAgIHRleHREaXNwbGF5TGV0dGVyczogMyxcclxufTtcclxuIiwiaW1wb3J0IHsgZyB9IGZyb20gXCIuL2dsb2JhbFwiO1xyXG5pbXBvcnQgeyBTYXZlRmlsZSwgc2F2ZUZpbGVWZXJzaW9uIH0gZnJvbSBcIi4vc2F2ZV9maWxlXCI7XHJcblxyXG5sZXQgc2F2ZUtleTogc3RyaW5nID0gXCJpbmZpbmUtbW9ua2V5LWlkbGUtZ2FtZVwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNhdmUoKSB7XHJcbiAgICBsZXQgc2F2ZUZpbGU6IFNhdmVGaWxlID0gZ2V0U2F2ZUZpbGUoKTtcclxuICAgIGxldCBzYXZlRmlsZVN0cmluZzogc3RyaW5nID0gSlNPTi5zdHJpbmdpZnkoc2F2ZUZpbGUpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oc2F2ZUtleSwgc2F2ZUZpbGVTdHJpbmcpO1xyXG4gICAgY29uc29sZS5sb2coXCJTYXZlZCFcIik7XHJcbiAgICBjb25zb2xlLmxvZyhzYXZlRmlsZVN0cmluZyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFNhdmVGaWxlKCk6IFNhdmVGaWxlIHtcclxuICAgIHJldHVybiBuZXcgU2F2ZUZpbGUoXHJcbiAgICAgICAgZy5iYW5hbmFzLFxyXG4gICAgICAgIGcubW9ua2V5cyxcclxuICAgICAgICBnLmN1cnJlbnRUYXJnZXRJbmRleCxcclxuICAgICAgICBnLmtleWJvYXJkS2V5cyxcclxuICAgICAgICBnLm1heEtleWJvYXJkS2V5cyxcclxuICAgICAgICBnLnRhcmdldE93bmVkLFxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRGcm9tTG9jYWxTdG9yYWdlKCkge1xyXG4gICAgbGV0IHNhdmVGaWxlU3RyaW5nID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oc2F2ZUtleSk7XHJcbiAgICBpZiAoc2F2ZUZpbGVTdHJpbmcgPT09IHVuZGVmaW5lZFxyXG4gICAgICAgIHx8IHNhdmVGaWxlU3RyaW5nID09PSBudWxsKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkNvdWxkIG5vdCBsb2FkIHNhdmVcIik7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlNhdmUgZm91bmRcIiwgc2F2ZUZpbGVTdHJpbmcpO1xyXG4gICAgfVxyXG4gICAgbG9hZEZyb21TdHJpbmcoc2F2ZUZpbGVTdHJpbmcpO1xyXG59XHJcblxyXG4vLyBJIHNob3VsZCBiZSBhYmxlIHRvIGNhbGwgdGhpcyB3aGV0aGVyIEknbSBsb2FkaW5nIGZyb21cclxuLy8gbG9jYWwgc3RvcmFnZSBvciBmcm9tIGEgdXNlci1wcm92aWRlZCBzYXZlIGltcG9ydCBzdHJpbmdcclxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRGcm9tU3RyaW5nKGltcG9ydFN0cmluZzogc3RyaW5nKSB7XHJcbiAgICBsZXQgbG9hZGVkU2F2ZTogU2F2ZUZpbGUgPSBKU09OLnBhcnNlKGltcG9ydFN0cmluZyk7XHJcbiAgICBpZiAobG9hZGVkU2F2ZSA9PT0gdW5kZWZpbmVkXHJcbiAgICAgICAgfHwgbG9hZGVkU2F2ZSA9PT0gbnVsbCkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBzYXZlIGZyb20gbG9jYWwgc3RvcmFnZTogSlNPTiBwYXJzZSBlcnJvclwiKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9IGVsc2UgaWYgKGxvYWRlZFNhdmUudmVyc2lvbiAhPT0gc2F2ZUZpbGVWZXJzaW9uKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBsb2FkIHNhdmUgZnJvbSBsb2NhbCBzdG9yYWdlOiBWZXJzaW9uIG1pc21hdGNoXCIpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKFwiTG9hZGVkIHNhdmVcIik7XHJcbiAgICBjb25zb2xlLmxvZyhsb2FkZWRTYXZlKTtcclxuICAgIGcuYmFuYW5hcyA9IGxvYWRlZFNhdmUuYmFuYW5hcztcclxuICAgIGcubW9ua2V5cyA9IGxvYWRlZFNhdmUubW9ua2V5cztcclxuICAgIGcubGV0dGVyc1BlclNlY29uZCA9IGcubW9ua2V5cztcclxuICAgIGcuY3VycmVudFRhcmdldEluZGV4ID0gbG9hZGVkU2F2ZS50YXJnZXRJbmRleDtcclxuICAgIGcua2V5Ym9hcmRLZXlzID0gbG9hZGVkU2F2ZS5rZXlib2FyZEtleXM7XHJcbiAgICBnLm1heEtleWJvYXJkS2V5cyA9IGxvYWRlZFNhdmUubWF4S2V5Ym9hcmRLZXlzO1xyXG4gICAgZy50YXJnZXRPd25lZCA9IGxvYWRlZFNhdmUudGFyZ2V0T3duZWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBleHBvcnRTYXZlVG9TdHJpbmcoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShnZXRTYXZlRmlsZSgpKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGVyYXNlU2F2ZSgpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiU2F2ZSBFcmFzZWQhXCIpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oc2F2ZUtleSk7XHJcbn1cclxuIiwiZXhwb3J0IGxldCBzYXZlRmlsZVZlcnNpb246IG51bWJlciA9IDM7XHJcblxyXG5leHBvcnQgY2xhc3MgU2F2ZUZpbGUge1xyXG4gICAgLy8gVXNlIHRoZSB2ZXJzaW9uIG51bWJlciB0byBkZXRlY3QgYW5kIGludmFsaWRhdGVcclxuICAgIC8vIG9sZCBhbmQgaW5jb21wYXRpYmxlIHNhdmUgZmlsZXNcclxuICAgIHB1YmxpYyB2ZXJzaW9uOiBudW1iZXI7XHJcblxyXG4gICAgcHVibGljIGJhbmFuYXM6IG51bWJlcjtcclxuICAgIHB1YmxpYyBtb25rZXlzOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgdGFyZ2V0SW5kZXg6IG51bWJlcjtcclxuICAgIHB1YmxpYyBrZXlib2FyZEtleXM6IHN0cmluZ1tdO1xyXG4gICAgcHVibGljIG1heEtleWJvYXJkS2V5czogbnVtYmVyO1xyXG4gICAgcHVibGljIHRhcmdldE93bmVkOiBib29sZWFuW107XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIGJhbmFuYXM6IG51bWJlcixcclxuICAgICAgICBtb25rZXlzOiBudW1iZXIsXHJcbiAgICAgICAgdGFyZ2V0SW5kZXg6IG51bWJlcixcclxuICAgICAgICBrZXlib2FyZEtleXM6IHN0cmluZ1tdLFxyXG4gICAgICAgIG1heEtleWJvYXJkS2V5czogbnVtYmVyLFxyXG4gICAgICAgIHRhcmdldE93bmVkOiBib29sZWFuW10sXHJcbiAgICApIHtcclxuICAgICAgICB0aGlzLnZlcnNpb24gPSBzYXZlRmlsZVZlcnNpb247XHJcbiAgICAgICAgdGhpcy5iYW5hbmFzID0gYmFuYW5hcztcclxuICAgICAgICB0aGlzLm1vbmtleXMgPSBtb25rZXlzO1xyXG4gICAgICAgIHRoaXMudGFyZ2V0SW5kZXggPSB0YXJnZXRJbmRleDtcclxuICAgICAgICB0aGlzLmtleWJvYXJkS2V5cyA9IGtleWJvYXJkS2V5cztcclxuICAgICAgICB0aGlzLm1heEtleWJvYXJkS2V5cyA9IG1heEtleWJvYXJkS2V5cztcclxuICAgICAgICB0aGlzLnRhcmdldE93bmVkID0gdGFyZ2V0T3duZWQ7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgY3R4LCBkcmF3YWJsZXMsIGcsIHBsYXllckRpY3Rpb25hcnksIHVwZGF0ZWFibGVzIH0gZnJvbSBcIi4vZ2xvYmFsXCI7XHJcbmltcG9ydCB7IGNvdW50TWF0Y2hpbmdMZXR0ZXJzLCBnZXRSYW5kb21DaGFyYWN0ZXIsIHJnYlN0cmluZyB9IGZyb20gXCIuL3V0aWxcIjtcclxuaW1wb3J0IHsgV29yZFBhcnRpY2xlIH0gZnJvbSBcIi4vd29yZF9wYXJ0aWNsZVwiO1xyXG5cclxubGV0IHRleHREaXNwbGF5czogVGV4dERpc3BsYXlbXSA9IFtdO1xyXG5leHBvcnQgY2xhc3MgVGV4dERpc3BsYXkge1xyXG4gICAgcHVibGljIHg6IG51bWJlcjtcclxuICAgIHB1YmxpYyB5OiBudW1iZXI7XHJcbiAgICBwdWJsaWMgaGVpZ2h0OiBudW1iZXI7XHJcbiAgICBwdWJsaWMgd2lkdGg6IG51bWJlcjtcclxuICAgIHB1YmxpYyBpZDogbnVtYmVyO1xyXG4gICAgcHVibGljIGxldHRlcnNUb1R5cGVSZW1haW5kZXI6IG51bWJlciA9IDA7XHJcbiAgICBwdWJsaWMgbGFzdFdvcmRGaW5pc2hUaW1lTWlsbGlzOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgY3VycmVudFN0cmluZzogc3RyaW5nW10gPSBbXTtcclxuICAgIHB1YmxpYyBjb3JyZWN0Q29sb3I6IHN0cmluZyA9IHJnYlN0cmluZygyNTUsIDE4NywgMCk7XHJcbiAgICBwdWJsaWMgcHJldmlvdXNFdmFsdWF0aW9uOiBhbnk7XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMuaWQgPSBnLmlkQ291bnRlcjtcclxuICAgICAgICBnLmlkQ291bnRlciArPSAxO1xyXG4gICAgICAgIGRyYXdhYmxlcy5wdXNoKHRoaXMpO1xyXG4gICAgICAgIHVwZGF0ZWFibGVzLnB1c2godGhpcyk7XHJcbiAgICAgICAgdGV4dERpc3BsYXlzLnB1c2godGhpcyk7XHJcbiAgICAgICAgYWxpZ25UZXh0RGlzcGxheXNUb0dyaWQoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdXBkYXRlKGN1cnJlbnRUaW1lTWlsbGlzOiBudW1iZXIsIGVsYXBzZWRUaW1lTWlsbGlzOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmxldHRlcnNUb1R5cGVSZW1haW5kZXIgKz0gZWxhcHNlZFRpbWVNaWxsaXMgLyAxMDAwICogZy5sZXR0ZXJzUGVyU2Vjb25kO1xyXG5cclxuICAgICAgICAvLyBNYWtlIGEgZmluaXNoZWQgd29yZCBzdGF5IG9uIHNjcmVlbiBmb3IgNTAwbXMsIG9yIHVudGlsXHJcbiAgICAgICAgLy8gYW5vdGhlciBsZXR0ZXIgaXMgdHlwZWRcclxuICAgICAgICBpZiAoKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5sYXN0V29yZEZpbmlzaFRpbWVNaWxsaXMgIT09IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICAgICAgJiYgKGN1cnJlbnRUaW1lTWlsbGlzIC0gdGhpcy5sYXN0V29yZEZpbmlzaFRpbWVNaWxsaXMpID4gNTAwXHJcbiAgICAgICAgICAgICkgfHwgKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5sZXR0ZXJzVG9UeXBlUmVtYWluZGVyID49IDFcclxuICAgICAgICAgICAgICAgICYmIHRoaXMuY3VycmVudFN0cmluZy5sZW5ndGggPj0gZy50ZXh0RGlzcGxheUxldHRlcnNcclxuICAgICAgICAgICAgKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50U3RyaW5nID0gW107XHJcbiAgICAgICAgICAgIHRoaXMubGFzdFdvcmRGaW5pc2hUaW1lTWlsbGlzID0gdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLyBHZW5lcmF0ZSB0aGUgbmVlZGVkIGNoYXJhY3RlcnMgYW5kIGF3YXJkIGJhbmFuYXNcclxuICAgICAgICB3aGlsZSAodGhpcy5sZXR0ZXJzVG9UeXBlUmVtYWluZGVyID49IDEpIHtcclxuICAgICAgICAgICAgdGhpcy5sZXR0ZXJzVG9UeXBlUmVtYWluZGVyIC09IDE7XHJcbiAgICAgICAgICAgIGlmIChnLmNoYXJhY3RlcnNUb0Nob29zZUZyb20ubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgY2hhcmFjdGVyID0gZ2V0UmFuZG9tQ2hhcmFjdGVyKCk7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudFN0cmluZy5wdXNoKGNoYXJhY3Rlcik7XHJcbiAgICAgICAgICAgIGxldCBldmFsdWF0aW9uID0gdGhpcy5ldmFsdWF0ZSh0aGlzLmN1cnJlbnRTdHJpbmcsIHBsYXllckRpY3Rpb25hcnkpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50U3RyaW5nLmxlbmd0aCA+PSBnLnRleHREaXNwbGF5TGV0dGVycykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sYXN0V29yZEZpbmlzaFRpbWVNaWxsaXMgPSBjdXJyZW50VGltZU1pbGxpcztcclxuICAgICAgICAgICAgICAgIGxldCBiYW5hbmFzVG9BZGQgPSAwO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBldmFsdWF0aW9uLm1hdGNoQ291bnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG1hdGNoQ291bnQgPSBldmFsdWF0aW9uLm1hdGNoQ291bnRzW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIGJhbmFuYXNUb0FkZCArPSB0aGlzLmdldFNjb3JlKG1hdGNoQ291bnQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZy5iYW5hbmFzICs9IGJhbmFuYXNUb0FkZDtcclxuICAgICAgICAgICAgICAgIGcuaW5jb21lQWNjdW11bGF0b3IgKz0gYmFuYW5hc1RvQWRkO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubGV0dGVyc1RvVHlwZVJlbWFpbmRlciA+PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50U3RyaW5nID0gW107XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGV2YWx1YXRpb24ubWF0Y2hDb3VudHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbWF0Y2hDb3VudCA9IGV2YWx1YXRpb24ubWF0Y2hDb3VudHNbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNvbG9yOiBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1hdGNoQ291bnQgPCAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yID0gdGhpcy5nZXRDb2xvcihtYXRjaENvdW50KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3IFdvcmRQYXJ0aWNsZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxheWVyRGljdGlvbmFyeVtpXS5qb2luKFwiXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy54ICsgdGhpcy53aWR0aCAvIDIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMueSArIHRoaXMuaGVpZ2h0IC8gMixcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFRpbWVNaWxsaXNcclxuICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMucHJldmlvdXNFdmFsdWF0aW9uID0gZXZhbHVhdGlvbjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHB1YmxpYyBkcmF3KCkge1xyXG4gICAgICAgIGxldCBjdXJyZW50U3RyaW5nID0gdGhpcy5jdXJyZW50U3RyaW5nO1xyXG4gICAgICAgIGxldCBmb250U2l6ZTogbnVtYmVyID0gdGhpcy5oZWlnaHQgKiA0IC8gNztcclxuICAgICAgICBjdHguc2F2ZSgpO1xyXG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IFwiYmxhY2tcIjtcclxuICAgICAgICBjdHguc3Ryb2tlUmVjdChcclxuICAgICAgICAgICAgdGhpcy54LFxyXG4gICAgICAgICAgICB0aGlzLnksXHJcbiAgICAgICAgICAgIHRoaXMud2lkdGgsXHJcbiAgICAgICAgICAgIHRoaXMuaGVpZ2h0XHJcbiAgICAgICAgKTtcclxuICAgICAgICBjdHguZm9udCA9IGZvbnRTaXplICsgXCJweCBBcmlhbFwiO1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBnLnRleHREaXNwbGF5TGV0dGVyczsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBjaGFyYWN0ZXI6IHN0cmluZztcclxuICAgICAgICAgICAgaWYgKGkgPj0gY3VycmVudFN0cmluZy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIGNoYXJhY3RlciA9IFwiX1wiO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY2hhcmFjdGVyID0gY3VycmVudFN0cmluZ1tpXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgZ3JhZGVGb3JMZXR0ZXIgPSAwO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2aW91c0V2YWx1YXRpb24gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgZ3JhZGVGb3JMZXR0ZXIgPSB0aGlzLnByZXZpb3VzRXZhbHVhdGlvbi5tYXhHcmFkZVBlckxldHRlcltpXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoY2hhcmFjdGVyID09PSBcIl9cIikge1xyXG4gICAgICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwiYmxhY2tcIjtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChncmFkZUZvckxldHRlciA+PSAxKSB7XHJcbiAgICAgICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gdGhpcy5nZXRDb2xvcihncmFkZUZvckxldHRlcik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJibGFja1wiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGN0eC5maWxsVGV4dChcclxuICAgICAgICAgICAgICAgIGNoYXJhY3RlcixcclxuICAgICAgICAgICAgICAgIHRoaXMueCArIGZvbnRTaXplICogMC4xNSArIGZvbnRTaXplICogaSxcclxuICAgICAgICAgICAgICAgIHRoaXMueSArIGZvbnRTaXplICogMS4yXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGN0eC5yZXN0b3JlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGV2YWx1YXRlKGxldHRlcnM6IHN0cmluZ1tdLCBkaWN0aW9uYXJ5OiBzdHJpbmdbXVtdKToge1xyXG4gICAgICAgICAgICBncmFkZU1hdHJpeDogbnVtYmVyW11bXSxcclxuICAgICAgICAgICAgbWF0Y2hDb3VudHM6IG51bWJlcltdLFxyXG4gICAgICAgICAgICBtYXhHcmFkZVBlckxldHRlcjogbnVtYmVyW10sXHJcbiAgICAgICAgfVxyXG4gICAge1xyXG4gICAgICAgIGxldCBncmFkZU1hdHJpeDogbnVtYmVyW11bXSA9IFtdO1xyXG4gICAgICAgIGxldCBtYXRjaENvdW50czogbnVtYmVyW10gPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRpY3Rpb25hcnkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHRhcmdldExldHRlcnM6IHN0cmluZ1tdID0gZGljdGlvbmFyeVtpXTtcclxuICAgICAgICAgICAgbGV0IGdyYWRlczogbnVtYmVyW10gPSBbXTtcclxuICAgICAgICAgICAgbGV0IG1hdGNoQ291bnQ6IG51bWJlciA9IDA7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGFyZ2V0TGV0dGVycy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGdyYWRlOiBudW1iZXIgPSB0YXJnZXRMZXR0ZXJzW2pdID09PSBsZXR0ZXJzW2pdID8gMSA6IDA7XHJcbiAgICAgICAgICAgICAgICBncmFkZXMucHVzaChncmFkZSlcclxuICAgICAgICAgICAgICAgIG1hdGNoQ291bnQgKz0gZ3JhZGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbWF0Y2hDb3VudHMucHVzaChtYXRjaENvdW50KTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0YXJnZXRMZXR0ZXJzLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBncmFkZXNbal0gKj0gbWF0Y2hDb3VudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBncmFkZU1hdHJpeC5wdXNoKGdyYWRlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgbGV0IG1heEdyYWRlUGVyTGV0dGVyOiBudW1iZXJbXSA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGV0dGVycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgbWF4OiBudW1iZXIgPSAwO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGdyYWRlTWF0cml4Lmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZ3JhZGVNYXRyaXhbal1baV0gPiBtYXgpIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXggPSBncmFkZU1hdHJpeFtqXVtpXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBtYXhHcmFkZVBlckxldHRlci5wdXNoKG1heCk7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgZ3JhZGVNYXRyaXg6IGdyYWRlTWF0cml4LFxyXG4gICAgICAgICAgICBtYXRjaENvdW50czogbWF0Y2hDb3VudHMsXHJcbiAgICAgICAgICAgIG1heEdyYWRlUGVyTGV0dGVyOiBtYXhHcmFkZVBlckxldHRlcixcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFNjb3JlKG51bU1hdGNoZXM6IG51bWJlcikge1xyXG4gICAgICAgIGlmIChudW1NYXRjaGVzID09PSAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gTWF0aC5wb3coNSwgbnVtTWF0Y2hlcyAtIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRDb2xvcihudW1NYXRjaGVzOiBudW1iZXIpIHtcclxuICAgICAgICBpZiAobnVtTWF0Y2hlcyA9PT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gXCJibGFja1wiO1xyXG4gICAgICAgIH0gZWxzZSBpZiAobnVtTWF0Y2hlcyA9PT0gMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb3JyZWN0Q29sb3I7XHJcbiAgICAgICAgfSBlbHNlIGlmIChudW1NYXRjaGVzID09PSAyKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBcInJlZFwiO1xyXG4gICAgICAgIH0gZWxzZSBpZiAobnVtTWF0Y2hlcyA+PSAzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBcImJsdWVcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVW5kZWZpbmVkIGNvbG9yIGZvciBudW1NYXRjaGVzID0gXCIgKyBudW1NYXRjaGVzKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGFsaWduVGV4dERpc3BsYXlzVG9HcmlkKCkge1xyXG4gICAgbGV0IG51bURpc3BsYXlzID0gdGV4dERpc3BsYXlzLmxlbmd0aDtcclxuICAgIGxldCB4T2Zmc2V0ID0gMzA7XHJcbiAgICBsZXQgeU9mZnNldCA9IDE1MDtcclxuICAgIGxldCBtYXhXaWR0aCA9IDY4MDtcclxuICAgIGxldCBtYXhIZWlnaHQgPSAyNzA7XHJcbiAgICBsZXQgd2lkdGg7XHJcbiAgICBsZXQgbnVtQ29sdW1ucztcclxuICAgIGxldCBub25FbXB0eVJvd3M7XHJcbiAgICBsZXQgaGVpZ2h0ID0gNTM7XHJcbiAgICBkbyB7XHJcbiAgICAgICAgd2lkdGggPSBnLnRleHREaXNwbGF5TGV0dGVycyAqIGhlaWdodCAqIDQgLyA3O1xyXG4gICAgICAgIG51bUNvbHVtbnMgPSBNYXRoLmZsb29yKG1heFdpZHRoIC8gd2lkdGgpO1xyXG4gICAgICAgIG5vbkVtcHR5Um93cyA9IE1hdGguY2VpbChudW1EaXNwbGF5cyAvIG51bUNvbHVtbnMpO1xyXG4gICAgICAgIGlmIChoZWlnaHQgKiBub25FbXB0eVJvd3MgPD0gbWF4SGVpZ2h0KSB7XHJcbiAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGhlaWdodCAtPSAxO1xyXG4gICAgfSB3aGlsZSh0cnVlKTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bURpc3BsYXlzOyBpKyspIHtcclxuICAgICAgICBsZXQgcm93ID0gTWF0aC5mbG9vcihpIC8gbnVtQ29sdW1ucyk7XHJcbiAgICAgICAgbGV0IGNvbHVtbiA9IGkgJSBudW1Db2x1bW5zO1xyXG4gICAgICAgIGxldCB4ID0gY29sdW1uICogd2lkdGggKyB4T2Zmc2V0O1xyXG4gICAgICAgIGxldCB5ID0gcm93ICogaGVpZ2h0ICsgeU9mZnNldDtcclxuICAgICAgICB0ZXh0RGlzcGxheXNbaV0ueCA9IHg7XHJcbiAgICAgICAgdGV4dERpc3BsYXlzW2ldLnkgPSB5O1xyXG4gICAgICAgIHRleHREaXNwbGF5c1tpXS5oZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICAgICAgdGV4dERpc3BsYXlzW2ldLndpZHRoID0gd2lkdGg7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgZyB9IGZyb20gXCIuL2dsb2JhbFwiO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvdW50TWF0Y2hpbmdMZXR0ZXJzKHMxOiBzdHJpbmdbXSwgczI6IHN0cmluZ1tdKSB7XHJcbiAgICBsZXQgbWF0Y2hpbmcgPSAwO1xyXG4gICAgbGV0IG1pbkxlbmd0aCA9IE1hdGgubWluKHMxLmxlbmd0aCwgczIubGVuZ3RoKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWluTGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAoczFbaV0gPT09IHMyW2ldKSB7XHJcbiAgICAgICAgICAgIG1hdGNoaW5nKys7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG1hdGNoaW5nO1xyXG59XHJcblxyXG4vLyBCdWZmZXIgdGhlIHJhbmRvbSBjaGFyYWN0ZXJzIHdlIGdldCBmcm9tIGNyeXB0byB0byBpbXByb3ZlXHJcbi8vIHRoZSBzcGVlZC4gQWxzbywgSSB0ZXN0ZWQgaXQsIGFuZCBpdCdzIGZhc3RlciB0aGFuIHVzaW5nXHJcbi8vIE1hdGgucmFuZG9tLCBhbmQgaG9wZWZ1bGx5IGhhcyBiZXR0ZXIgcmFuZG9tbmVzc1xyXG5sZXQgYnVmZmVyU2l6ZSA9IDEwMDAwO1xyXG5sZXQgbnVtYmVyQnVmZmVyOiBVaW50MTZBcnJheSA9IGdldFJhbmRvbU51bWJlcnMoYnVmZmVyU2l6ZSk7XHJcbmxldCBudW1iZXJCdWZmZXJJbmRleCA9IC0xO1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmFuZG9tQ2hhcmFjdGVyKCkge1xyXG4gICAgbnVtYmVyQnVmZmVySW5kZXggKz0gMTtcclxuICAgIGlmIChudW1iZXJCdWZmZXJJbmRleCA+PSBidWZmZXJTaXplKSB7XHJcbiAgICAgICAgbnVtYmVyQnVmZmVySW5kZXggPSAwO1xyXG4gICAgICAgIG51bWJlckJ1ZmZlciA9IGdldFJhbmRvbU51bWJlcnMoYnVmZmVyU2l6ZSk7XHJcbiAgICB9XHJcbiAgICBsZXQgcmFuZG9tTnVtYmVyID0gbnVtYmVyQnVmZmVyW251bWJlckJ1ZmZlckluZGV4XTtcclxuICAgIHJldHVybiBnLmNoYXJhY3RlcnNUb0Nob29zZUZyb21bcmFuZG9tTnVtYmVyXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFJhbmRvbU51bWJlcnMobjogbnVtYmVyKSB7XHJcbiAgICBsZXQgcmFuZG9tTnVtYmVycyA9IG5ldyBVaW50MTZBcnJheShuKTtcclxuICAgIHJhbmRvbU51bWJlcnMgPSBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKHJhbmRvbU51bWJlcnMpO1xyXG4gICAgcmV0dXJuIHJhbmRvbU51bWJlcnM7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZ2JTdHJpbmcocmVkOiBudW1iZXIsIGdyZWVuOiBudW1iZXIsIGJsdWU6IG51bWJlcikge1xyXG4gICAgcmV0dXJuIFwicmdiKFwiICsgcmVkICsgXCIsXCIgKyBncmVlbiArIFwiLFwiICsgYmx1ZSArIFwiKVwiO1xyXG59XHJcblxyXG4vLyBzb3VyY2U6IGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL01hdGgvcmFuZG9tXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRSYW5kb21JbnQobWluOiBudW1iZXIsIG1heDogbnVtYmVyKSB7XHJcbiAgICBtaW4gPSBNYXRoLmNlaWwobWluKTtcclxuICAgIG1heCA9IE1hdGguZmxvb3IobWF4KTtcclxuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSArIG1pbik7IC8vVGhlIG1heGltdW0gaXMgZXhjbHVzaXZlIGFuZCB0aGUgbWluaW11bSBpcyBpbmNsdXNpdmVcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1hcExpbmVhcihmcm9tVmFsdWU6IG51bWJlciwgZnJvbVN0YXJ0OiBudW1iZXIsIGZyb21FbmQ6IG51bWJlciwgdG9TdGFydDogbnVtYmVyLCB0b0VuZDogbnVtYmVyKSB7XHJcbiAgICByZXR1cm4gKGZyb21WYWx1ZSAtIGZyb21FbmQpICogKHRvU3RhcnQgLSB0b0VuZCkgLyAoZnJvbVN0YXJ0IC0gZnJvbUVuZCkgKyB0b0VuZDtcclxufVxyXG4iLCJpbXBvcnQgeyBjdHgsIGRyYXdhYmxlcywgZyB9IGZyb20gXCIuL2dsb2JhbFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFdvcmRQYXJ0aWNsZSB7XHJcbiAgICBwdWJsaWMgaWQ6IG51bWJlcjtcclxuICAgIHB1YmxpYyB2ZWxvY2l0eVg6IG51bWJlcjtcclxuICAgIHB1YmxpYyB2ZWxvY2l0eVk6IG51bWJlcjtcclxuICAgIHB1YmxpYyB0ZXh0OiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgc3RhcnRYOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgc3RhcnRZOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgYW5pbWF0aW9uU3RhcnRNaWxsaXM6IG51bWJlcjtcclxuICAgIHB1YmxpYyBhbmltYXRpb25FbmRNaWxsaXM6IG51bWJlcjtcclxuICAgIHB1YmxpYyBjb2xvcjogc3RyaW5nO1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihcclxuICAgICAgICB0ZXh0OiBzdHJpbmcsXHJcbiAgICAgICAgY29sb3I6IHN0cmluZyxcclxuICAgICAgICBzdGFydFg6IG51bWJlcixcclxuICAgICAgICBzdGFydFk6IG51bWJlcixcclxuICAgICAgICBjdXJyZW50VGltZU1pbGxpczogbnVtYmVyLFxyXG4gICAgKSB7XHJcbiAgICAgICAgdGhpcy50ZXh0ID0gdGV4dDtcclxuICAgICAgICB0aGlzLmNvbG9yID0gY29sb3I7XHJcbiAgICAgICAgdGhpcy5zdGFydFggPSBzdGFydFg7XHJcbiAgICAgICAgdGhpcy5zdGFydFkgPSBzdGFydFk7XHJcbiAgICAgICAgdGhpcy5hbmltYXRpb25TdGFydE1pbGxpcyA9IGN1cnJlbnRUaW1lTWlsbGlzO1xyXG4gICAgICAgIHRoaXMuYW5pbWF0aW9uRW5kTWlsbGlzID0gY3VycmVudFRpbWVNaWxsaXMgKyAyMDAwO1xyXG4gICAgICAgIGxldCBhbmdsZSA9IE1hdGguUEkgKiAyICogTWF0aC5yYW5kb20oKTtcclxuICAgICAgICB0aGlzLnZlbG9jaXR5WCA9IE1hdGguY29zKGFuZ2xlKSAvIDIwO1xyXG4gICAgICAgIHRoaXMudmVsb2NpdHlZID0gTWF0aC5zaW4oYW5nbGUpIC8gMjA7XHJcblxyXG4gICAgICAgIHRoaXMuaWQgPSBnLmlkQ291bnRlcjtcclxuICAgICAgICBnLmlkQ291bnRlciArPSAxO1xyXG4gICAgICAgIGRyYXdhYmxlcy5wdXNoKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkcmF3KGN1cnJlbnRUaW1lTWlsbGlzOiBudW1iZXIpIHtcclxuICAgICAgICBpZiAoY3VycmVudFRpbWVNaWxsaXMgPj0gdGhpcy5hbmltYXRpb25FbmRNaWxsaXMpIHtcclxuICAgICAgICAgICAgdGhpcy5kZWxldGUoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgZWxhcHNlZFRpbWVNaWxsaXMgPSBjdXJyZW50VGltZU1pbGxpcyAtIHRoaXMuYW5pbWF0aW9uU3RhcnRNaWxsaXM7XHJcbiAgICAgICAgbGV0IGN1cnJlbnRYOiBudW1iZXIgPSB0aGlzLnN0YXJ0WCArIGVsYXBzZWRUaW1lTWlsbGlzICogdGhpcy52ZWxvY2l0eVg7XHJcbiAgICAgICAgbGV0IGN1cnJlbnRZOiBudW1iZXIgPSB0aGlzLnN0YXJ0WSArIGVsYXBzZWRUaW1lTWlsbGlzICogdGhpcy52ZWxvY2l0eVk7XHJcbiAgICAgICAgY3R4LnNhdmUoKTtcclxuICAgICAgICBjdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcclxuICAgICAgICBjdHguZmlsbFN0eWxlID0gdGhpcy5jb2xvcjtcclxuICAgICAgICBjdHguZm9udCA9IFwiMjBweCBBcmlhbFwiO1xyXG4gICAgICAgIGN0eC5maWxsVGV4dCh0aGlzLnRleHQsIGN1cnJlbnRYLCBjdXJyZW50WSk7XHJcbiAgICAgICAgY3R4LnJlc3RvcmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGVsZXRlKCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZHJhd2FibGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChkcmF3YWJsZXNbaV0uaWQgPT09IHRoaXMuaWQpIHtcclxuICAgICAgICAgICAgICAgIGRyYXdhYmxlcy5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiLy8gc291cmNlID0gaHR0cHM6Ly9zaW1wbGUud2lraXBlZGlhLm9yZy93aWtpL1dpa2lwZWRpYTpCYXNpY19FbmdsaXNoX2NvbWJpbmVkX3dvcmRsaXN0XHJcbmV4cG9ydCBsZXQgd29yZHMgPSBbXHJcbiAgICBbXHJcbiAgICAgICAgXCJBQ1RcIixcclxuICAgICAgICBcIkFHRVwiLFxyXG4gICAgICAgIFwiQUdPXCIsXHJcbiAgICAgICAgXCJBSVJcIixcclxuICAgICAgICBcIkFMTFwiLFxyXG4gICAgICAgIFwiQU5EXCIsXHJcbiAgICAgICAgXCJBTlRcIixcclxuICAgICAgICBcIkFOWVwiLFxyXG4gICAgICAgIFwiQVJDXCIsXHJcbiAgICAgICAgXCJBUk1cIixcclxuICAgICAgICBcIkFSVFwiLFxyXG4gICAgICAgIFwiQVNIXCIsXHJcbiAgICAgICAgXCJCQURcIixcclxuICAgICAgICBcIkJBR1wiLFxyXG4gICAgICAgIFwiQkFSXCIsXHJcbiAgICAgICAgXCJCRURcIixcclxuICAgICAgICBcIkJFRVwiLFxyXG4gICAgICAgIFwiQkVUXCIsXHJcbiAgICAgICAgXCJCSVRcIixcclxuICAgICAgICBcIkJPWFwiLFxyXG4gICAgICAgIFwiQk9ZXCIsXHJcbiAgICAgICAgXCJCVURcIixcclxuICAgICAgICBcIkJVVFwiLFxyXG4gICAgICAgIFwiQ0FUXCIsXHJcbiAgICAgICAgXCJDT1dcIixcclxuICAgICAgICBcIkNSWVwiLFxyXG4gICAgICAgIFwiQ1VQXCIsXHJcbiAgICAgICAgXCJDVVRcIixcclxuICAgICAgICBcIkRBWVwiLFxyXG4gICAgICAgIFwiREVXXCIsXHJcbiAgICAgICAgXCJESVBcIixcclxuICAgICAgICBcIkRPR1wiLFxyXG4gICAgICAgIFwiRFJZXCIsXHJcbiAgICAgICAgXCJFQVJcIixcclxuICAgICAgICBcIkVHR1wiLFxyXG4gICAgICAgIFwiRU5EXCIsXHJcbiAgICAgICAgXCJFWUVcIixcclxuICAgICAgICBcIkZBTlwiLFxyXG4gICAgICAgIFwiRkFSXCIsXHJcbiAgICAgICAgXCJGQVRcIixcclxuICAgICAgICBcIkZJTlwiLFxyXG4gICAgICAgIFwiRkxZXCIsXHJcbiAgICAgICAgXCJGT1JcIixcclxuICAgICAgICBcIkZVUlwiLFxyXG4gICAgICAgIFwiR0FTXCIsXHJcbiAgICAgICAgXCJHRVRcIixcclxuICAgICAgICBcIkdPRFwiLFxyXG4gICAgICAgIFwiR1VNXCIsXHJcbiAgICAgICAgXCJHVU5cIixcclxuICAgICAgICBcIkhBVFwiLFxyXG4gICAgICAgIFwiSE9XXCIsXHJcbiAgICAgICAgXCJJQ0VcIixcclxuICAgICAgICBcIklMTFwiLFxyXG4gICAgICAgIFwiSU5LXCIsXHJcbiAgICAgICAgXCJKQU1cIixcclxuICAgICAgICBcIkpBV1wiLFxyXG4gICAgICAgIFwiSlVHXCIsXHJcbiAgICAgICAgXCJLRVlcIixcclxuICAgICAgICBcIkxBR1wiLFxyXG4gICAgICAgIFwiTEFXXCIsXHJcbiAgICAgICAgXCJMRUdcIixcclxuICAgICAgICBcIkxFVFwiLFxyXG4gICAgICAgIFwiTElEXCIsXHJcbiAgICAgICAgXCJMSVBcIixcclxuICAgICAgICBcIkxPV1wiLFxyXG4gICAgICAgIFwiTUFOXCIsXHJcbiAgICAgICAgXCJNQVBcIixcclxuICAgICAgICBcIk1BWVwiLFxyXG4gICAgICAgIFwiTVVEXCIsXHJcbiAgICAgICAgXCJORVRcIixcclxuICAgICAgICBcIk5FV1wiLFxyXG4gICAgICAgIFwiTk9UXCIsXHJcbiAgICAgICAgXCJOT1dcIixcclxuICAgICAgICBcIk5VVFwiLFxyXG4gICAgICAgIFwiT0ZGXCIsXHJcbiAgICAgICAgXCJPSUxcIixcclxuICAgICAgICBcIk9MRFwiLFxyXG4gICAgICAgIFwiT05FXCIsXHJcbiAgICAgICAgXCJPUkVcIixcclxuICAgICAgICBcIk9VVFwiLFxyXG4gICAgICAgIFwiT1dOXCIsXHJcbiAgICAgICAgXCJQQURcIixcclxuICAgICAgICBcIlBBTlwiLFxyXG4gICAgICAgIFwiUEVOXCIsXHJcbiAgICAgICAgXCJQSUdcIixcclxuICAgICAgICBcIlBJTlwiLFxyXG4gICAgICAgIFwiUE9UXCIsXHJcbiAgICAgICAgXCJQVVRcIixcclxuICAgICAgICBcIlJBVFwiLFxyXG4gICAgICAgIFwiUkFZXCIsXHJcbiAgICAgICAgXCJSRURcIixcclxuICAgICAgICBcIlJPRFwiLFxyXG4gICAgICAgIFwiUk9UXCIsXHJcbiAgICAgICAgXCJSVUJcIixcclxuICAgICAgICBcIlJVTVwiLFxyXG4gICAgICAgIFwiUlVOXCIsXHJcbiAgICAgICAgXCJTQUNcIixcclxuICAgICAgICBcIlNBRFwiLFxyXG4gICAgICAgIFwiU0FZXCIsXHJcbiAgICAgICAgXCJTRUFcIixcclxuICAgICAgICBcIlNFRVwiLFxyXG4gICAgICAgIFwiU0VUXCIsXHJcbiAgICAgICAgXCJTRVhcIixcclxuICAgICAgICBcIlNJUlwiLFxyXG4gICAgICAgIFwiU0lYXCIsXHJcbiAgICAgICAgXCJTS1lcIixcclxuICAgICAgICBcIlNPTlwiLFxyXG4gICAgICAgIFwiU1VNXCIsXHJcbiAgICAgICAgXCJTVU5cIixcclxuICAgICAgICBcIlRBUFwiLFxyXG4gICAgICAgIFwiVEFYXCIsXHJcbiAgICAgICAgXCJURUFcIixcclxuICAgICAgICBcIlRFTlwiLFxyXG4gICAgICAgIFwiVEhFXCIsXHJcbiAgICAgICAgXCJUSUVcIixcclxuICAgICAgICBcIlRJTlwiLFxyXG4gICAgICAgIFwiVE9FXCIsXHJcbiAgICAgICAgXCJUT09cIixcclxuICAgICAgICBcIlRPUFwiLFxyXG4gICAgICAgIFwiVFdPXCIsXHJcbiAgICAgICAgXCJVU0VcIixcclxuICAgICAgICBcIldBUlwiLFxyXG4gICAgICAgIFwiV0FYXCIsXHJcbiAgICAgICAgXCJXQVlcIixcclxuICAgICAgICBcIldFVFwiLFxyXG4gICAgICAgIFwiV0hPXCIsXHJcbiAgICAgICAgXCJXSFlcIixcclxuICAgICAgICBcIllFU1wiLFxyXG4gICAgICAgIFwiWU9VXCIsXHJcbiAgICBdLFxyXG4gICAgW1xyXG4gICAgICAgIFwiQUJMRVwiLFxyXG4gICAgICAgIFwiQUNJRFwiLFxyXG4gICAgICAgIFwiQUxTT1wiLFxyXG4gICAgICAgIFwiQVJDSFwiLFxyXG4gICAgICAgIFwiQVJFQVwiLFxyXG4gICAgICAgIFwiQVJNWVwiLFxyXG4gICAgICAgIFwiQVhJU1wiLFxyXG4gICAgICAgIFwiQkFCWVwiLFxyXG4gICAgICAgIFwiQkFDS1wiLFxyXG4gICAgICAgIFwiQkFMRVwiLFxyXG4gICAgICAgIFwiQkFMTFwiLFxyXG4gICAgICAgIFwiQkFORFwiLFxyXG4gICAgICAgIFwiQkFOR1wiLFxyXG4gICAgICAgIFwiQkFOS1wiLFxyXG4gICAgICAgIFwiQkFSS1wiLFxyXG4gICAgICAgIFwiQkFTRVwiLFxyXG4gICAgICAgIFwiQkFUSFwiLFxyXG4gICAgICAgIFwiQkVBS1wiLFxyXG4gICAgICAgIFwiQkVBVFwiLFxyXG4gICAgICAgIFwiQkVFRlwiLFxyXG4gICAgICAgIFwiQkVFUlwiLFxyXG4gICAgICAgIFwiQkVMTFwiLFxyXG4gICAgICAgIFwiQkVMVFwiLFxyXG4gICAgICAgIFwiQkVOVFwiLFxyXG4gICAgICAgIFwiQklMTFwiLFxyXG4gICAgICAgIFwiQklSRFwiLFxyXG4gICAgICAgIFwiQklURVwiLFxyXG4gICAgICAgIFwiQkxPV1wiLFxyXG4gICAgICAgIFwiQkxVRVwiLFxyXG4gICAgICAgIFwiQk9BVFwiLFxyXG4gICAgICAgIFwiQk9EWVwiLFxyXG4gICAgICAgIFwiQk9NQlwiLFxyXG4gICAgICAgIFwiQk9ORVwiLFxyXG4gICAgICAgIFwiQk9PS1wiLFxyXG4gICAgICAgIFwiQk9PVFwiLFxyXG4gICAgICAgIFwiQk9USFwiLFxyXG4gICAgICAgIFwiQlVMQlwiLFxyXG4gICAgICAgIFwiQlVSTlwiLFxyXG4gICAgICAgIFwiQlVTWVwiLFxyXG4gICAgICAgIFwiQ0FGRVwiLFxyXG4gICAgICAgIFwiQ0FLRVwiLFxyXG4gICAgICAgIFwiQ0FMTFwiLFxyXG4gICAgICAgIFwiQ0FSRFwiLFxyXG4gICAgICAgIFwiQ0FSRVwiLFxyXG4gICAgICAgIFwiQ0FSVFwiLFxyXG4gICAgICAgIFwiQ0FTRVwiLFxyXG4gICAgICAgIFwiQ0FTVFwiLFxyXG4gICAgICAgIFwiQ0FWRVwiLFxyXG4gICAgICAgIFwiQ0VMTFwiLFxyXG4gICAgICAgIFwiQ0hJTlwiLFxyXG4gICAgICAgIFwiQ0xBV1wiLFxyXG4gICAgICAgIFwiQ0xBWVwiLFxyXG4gICAgICAgIFwiQ0xJUFwiLFxyXG4gICAgICAgIFwiQ0xVQlwiLFxyXG4gICAgICAgIFwiQ09BTFwiLFxyXG4gICAgICAgIFwiQ09BVFwiLFxyXG4gICAgICAgIFwiQ09ERVwiLFxyXG4gICAgICAgIFwiQ09JTFwiLFxyXG4gICAgICAgIFwiQ09MRFwiLFxyXG4gICAgICAgIFwiQ09NQlwiLFxyXG4gICAgICAgIFwiQ09NRVwiLFxyXG4gICAgICAgIFwiQ09PS1wiLFxyXG4gICAgICAgIFwiQ09PTFwiLFxyXG4gICAgICAgIFwiQ09QWVwiLFxyXG4gICAgICAgIFwiQ09SRFwiLFxyXG4gICAgICAgIFwiQ09SS1wiLFxyXG4gICAgICAgIFwiQ09TVFwiLFxyXG4gICAgICAgIFwiQ1JPUFwiLFxyXG4gICAgICAgIFwiQ1VTUFwiLFxyXG4gICAgICAgIFwiREFSS1wiLFxyXG4gICAgICAgIFwiREFURVwiLFxyXG4gICAgICAgIFwiREVBRFwiLFxyXG4gICAgICAgIFwiREVBUlwiLFxyXG4gICAgICAgIFwiREVCVFwiLFxyXG4gICAgICAgIFwiREVDS1wiLFxyXG4gICAgICAgIFwiREVFUFwiLFxyXG4gICAgICAgIFwiRElLRVwiLFxyXG4gICAgICAgIFwiRElWRVwiLFxyXG4gICAgICAgIFwiRE9MTFwiLFxyXG4gICAgICAgIFwiRE9PUlwiLFxyXG4gICAgICAgIFwiRE9XTlwiLFxyXG4gICAgICAgIFwiRFJPUFwiLFxyXG4gICAgICAgIFwiRFVDVFwiLFxyXG4gICAgICAgIFwiRFVMTFwiLFxyXG4gICAgICAgIFwiRFVTVFwiLFxyXG4gICAgICAgIFwiRFVUWVwiLFxyXG4gICAgICAgIFwiRUFDSFwiLFxyXG4gICAgICAgIFwiRUFTVFwiLFxyXG4gICAgICAgIFwiRUFTWVwiLFxyXG4gICAgICAgIFwiRURHRVwiLFxyXG4gICAgICAgIFwiRU5WWVwiLFxyXG4gICAgICAgIFwiRVZFTlwiLFxyXG4gICAgICAgIFwiRVZFUlwiLFxyXG4gICAgICAgIFwiRkFDRVwiLFxyXG4gICAgICAgIFwiRkFDVFwiLFxyXG4gICAgICAgIFwiRkFJUlwiLFxyXG4gICAgICAgIFwiRkFMTFwiLFxyXG4gICAgICAgIFwiRkFSTVwiLFxyXG4gICAgICAgIFwiRkVBUlwiLFxyXG4gICAgICAgIFwiRklSRVwiLFxyXG4gICAgICAgIFwiRklTSFwiLFxyXG4gICAgICAgIFwiRklWRVwiLFxyXG4gICAgICAgIFwiRkxBR1wiLFxyXG4gICAgICAgIFwiRkxBVFwiLFxyXG4gICAgICAgIFwiRkxPV1wiLFxyXG4gICAgICAgIFwiRk9MRFwiLFxyXG4gICAgICAgIFwiRk9PRFwiLFxyXG4gICAgICAgIFwiRk9PVFwiLFxyXG4gICAgICAgIFwiRk9SS1wiLFxyXG4gICAgICAgIFwiRk9STVwiLFxyXG4gICAgICAgIFwiRk9VUlwiLFxyXG4gICAgICAgIFwiRk9XTFwiLFxyXG4gICAgICAgIFwiRlJFRVwiLFxyXG4gICAgICAgIFwiRlJPTVwiLFxyXG4gICAgICAgIFwiRlVMTFwiLFxyXG4gICAgICAgIFwiRlVNRVwiLFxyXG4gICAgICAgIFwiR0FURVwiLFxyXG4gICAgICAgIFwiR0VSTVwiLFxyXG4gICAgICAgIFwiR0lMTFwiLFxyXG4gICAgICAgIFwiR0lSTFwiLFxyXG4gICAgICAgIFwiR0lWRVwiLFxyXG4gICAgICAgIFwiR09BVFwiLFxyXG4gICAgICAgIFwiR09MRFwiLFxyXG4gICAgICAgIFwiR09PRFwiLFxyXG4gICAgICAgIFwiR1JBTVwiLFxyXG4gICAgICAgIFwiR1JBWVwiLFxyXG4gICAgICAgIFwiR1JFWVwiLFxyXG4gICAgICAgIFwiR1JJUFwiLFxyXG4gICAgICAgIFwiSEFJUlwiLFxyXG4gICAgICAgIFwiSEFMRlwiLFxyXG4gICAgICAgIFwiSEFORFwiLFxyXG4gICAgICAgIFwiSEFSRFwiLFxyXG4gICAgICAgIFwiSEFURVwiLFxyXG4gICAgICAgIFwiSEFWRVwiLFxyXG4gICAgICAgIFwiSEVBRFwiLFxyXG4gICAgICAgIFwiSEVBVFwiLFxyXG4gICAgICAgIFwiSEVMUFwiLFxyXG4gICAgICAgIFwiSEVSRVwiLFxyXG4gICAgICAgIFwiSElHSFwiLFxyXG4gICAgICAgIFwiSElMTFwiLFxyXG4gICAgICAgIFwiSElSRVwiLFxyXG4gICAgICAgIFwiSElTU1wiLFxyXG4gICAgICAgIFwiSE9MRFwiLFxyXG4gICAgICAgIFwiSE9MRVwiLFxyXG4gICAgICAgIFwiSE9NRVwiLFxyXG4gICAgICAgIFwiSE9PRlwiLFxyXG4gICAgICAgIFwiSE9PS1wiLFxyXG4gICAgICAgIFwiSE9QRVwiLFxyXG4gICAgICAgIFwiSE9STlwiLFxyXG4gICAgICAgIFwiSE9TVFwiLFxyXG4gICAgICAgIFwiSE9VUlwiLFxyXG4gICAgICAgIFwiSFVOVFwiLFxyXG4gICAgICAgIFwiSFVSVFwiLFxyXG4gICAgICAgIFwiSURFQVwiLFxyXG4gICAgICAgIFwiSU5UT1wiLFxyXG4gICAgICAgIFwiSVJPTlwiLFxyXG4gICAgICAgIFwiSkFaWlwiLFxyXG4gICAgICAgIFwiSkVSS1wiLFxyXG4gICAgICAgIFwiSk9JTlwiLFxyXG4gICAgICAgIFwiSlVMWVwiLFxyXG4gICAgICAgIFwiSlVNUFwiLFxyXG4gICAgICAgIFwiSlVORVwiLFxyXG4gICAgICAgIFwiSlVSWVwiLFxyXG4gICAgICAgIFwiS0VFUFwiLFxyXG4gICAgICAgIFwiS0lDS1wiLFxyXG4gICAgICAgIFwiS0lORFwiLFxyXG4gICAgICAgIFwiS0lOR1wiLFxyXG4gICAgICAgIFwiS0lTU1wiLFxyXG4gICAgICAgIFwiS05FRVwiLFxyXG4gICAgICAgIFwiS05PVFwiLFxyXG4gICAgICAgIFwiTEFDRVwiLFxyXG4gICAgICAgIFwiTEFLRVwiLFxyXG4gICAgICAgIFwiTEFNRVwiLFxyXG4gICAgICAgIFwiTEFNUFwiLFxyXG4gICAgICAgIFwiTEFORFwiLFxyXG4gICAgICAgIFwiTEFTVFwiLFxyXG4gICAgICAgIFwiTEFURVwiLFxyXG4gICAgICAgIFwiTEFWQVwiLFxyXG4gICAgICAgIFwiTEFaWVwiLFxyXG4gICAgICAgIFwiTEVBRFwiLFxyXG4gICAgICAgIFwiTEVBRlwiLFxyXG4gICAgICAgIFwiTEVGVFwiLFxyXG4gICAgICAgIFwiTEVOU1wiLFxyXG4gICAgICAgIFwiTEVTU1wiLFxyXG4gICAgICAgIFwiTElGRVwiLFxyXG4gICAgICAgIFwiTElGVFwiLFxyXG4gICAgICAgIFwiTElLRVwiLFxyXG4gICAgICAgIFwiTElNRVwiLFxyXG4gICAgICAgIFwiTElORVwiLFxyXG4gICAgICAgIFwiTElOS1wiLFxyXG4gICAgICAgIFwiTElTVFwiLFxyXG4gICAgICAgIFwiTE9BRFwiLFxyXG4gICAgICAgIFwiTE9BTlwiLFxyXG4gICAgICAgIFwiTE9DS1wiLFxyXG4gICAgICAgIFwiTE9OR1wiLFxyXG4gICAgICAgIFwiTE9PS1wiLFxyXG4gICAgICAgIFwiTE9TU1wiLFxyXG4gICAgICAgIFwiTE9VRFwiLFxyXG4gICAgICAgIFwiTE9WRVwiLFxyXG4gICAgICAgIFwiTFVDS1wiLFxyXG4gICAgICAgIFwiTFVNUFwiLFxyXG4gICAgICAgIFwiTFVOR1wiLFxyXG4gICAgICAgIFwiTUFLRVwiLFxyXG4gICAgICAgIFwiTUFMRVwiLFxyXG4gICAgICAgIFwiTUFOWVwiLFxyXG4gICAgICAgIFwiTUFSS1wiLFxyXG4gICAgICAgIFwiTUFTU1wiLFxyXG4gICAgICAgIFwiTUFTVFwiLFxyXG4gICAgICAgIFwiTUVBTFwiLFxyXG4gICAgICAgIFwiTUVBTlwiLFxyXG4gICAgICAgIFwiTUVBVFwiLFxyXG4gICAgICAgIFwiTUVMVFwiLFxyXG4gICAgICAgIFwiTUVPV1wiLFxyXG4gICAgICAgIFwiTUVTU1wiLFxyXG4gICAgICAgIFwiTUlMS1wiLFxyXG4gICAgICAgIFwiTUlMTFwiLFxyXG4gICAgICAgIFwiTUlORFwiLFxyXG4gICAgICAgIFwiTUlORVwiLFxyXG4gICAgICAgIFwiTUlTVFwiLFxyXG4gICAgICAgIFwiTU9PRFwiLFxyXG4gICAgICAgIFwiTU9PTlwiLFxyXG4gICAgICAgIFwiTU9SRVwiLFxyXG4gICAgICAgIFwiTU9TVFwiLFxyXG4gICAgICAgIFwiTU9WRVwiLFxyXG4gICAgICAgIFwiTVVDSFwiLFxyXG4gICAgICAgIFwiTkFJTFwiLFxyXG4gICAgICAgIFwiTkFNRVwiLFxyXG4gICAgICAgIFwiTkFWWVwiLFxyXG4gICAgICAgIFwiTkVBUlwiLFxyXG4gICAgICAgIFwiTkVBVFwiLFxyXG4gICAgICAgIFwiTkVDS1wiLFxyXG4gICAgICAgIFwiTkVFRFwiLFxyXG4gICAgICAgIFwiTkVTVFwiLFxyXG4gICAgICAgIFwiTkVXU1wiLFxyXG4gICAgICAgIFwiTkVYVFwiLFxyXG4gICAgICAgIFwiTklDRVwiLFxyXG4gICAgICAgIFwiTklORVwiLFxyXG4gICAgICAgIFwiTk9ERVwiLFxyXG4gICAgICAgIFwiTk9TRVwiLFxyXG4gICAgICAgIFwiTk9URVwiLFxyXG4gICAgICAgIFwiT05DRVwiLFxyXG4gICAgICAgIFwiT05MWVwiLFxyXG4gICAgICAgIFwiT05UT1wiLFxyXG4gICAgICAgIFwiT1BFTlwiLFxyXG4gICAgICAgIFwiT1ZBTFwiLFxyXG4gICAgICAgIFwiT1ZFTlwiLFxyXG4gICAgICAgIFwiT1ZFUlwiLFxyXG4gICAgICAgIFwiUEFHRVwiLFxyXG4gICAgICAgIFwiUEFJTlwiLFxyXG4gICAgICAgIFwiUEFJUlwiLFxyXG4gICAgICAgIFwiUEFSS1wiLFxyXG4gICAgICAgIFwiUEFSVFwiLFxyXG4gICAgICAgIFwiUEFTVFwiLFxyXG4gICAgICAgIFwiUEFUSFwiLFxyXG4gICAgICAgIFwiUElQRVwiLFxyXG4gICAgICAgIFwiUExBTlwiLFxyXG4gICAgICAgIFwiUExBWVwiLFxyXG4gICAgICAgIFwiUExPV1wiLFxyXG4gICAgICAgIFwiUExVR1wiLFxyXG4gICAgICAgIFwiUE9PTFwiLFxyXG4gICAgICAgIFwiUE9PUlwiLFxyXG4gICAgICAgIFwiUE9TVFwiLFxyXG4gICAgICAgIFwiUFVMTFwiLFxyXG4gICAgICAgIFwiUFVNUFwiLFxyXG4gICAgICAgIFwiUFVSRVwiLFxyXG4gICAgICAgIFwiUFVSUlwiLFxyXG4gICAgICAgIFwiUFVTSFwiLFxyXG4gICAgICAgIFwiUkFDRVwiLFxyXG4gICAgICAgIFwiUkFJTFwiLFxyXG4gICAgICAgIFwiUkFJTlwiLFxyXG4gICAgICAgIFwiUkFURVwiLFxyXG4gICAgICAgIFwiUkVBTFwiLFxyXG4gICAgICAgIFwiUkVOVFwiLFxyXG4gICAgICAgIFwiUkVTVFwiLFxyXG4gICAgICAgIFwiUklDRVwiLFxyXG4gICAgICAgIFwiUklDSFwiLFxyXG4gICAgICAgIFwiUklOR1wiLFxyXG4gICAgICAgIFwiUklTRVwiLFxyXG4gICAgICAgIFwiUk9BRFwiLFxyXG4gICAgICAgIFwiUk9DS1wiLFxyXG4gICAgICAgIFwiUk9MTFwiLFxyXG4gICAgICAgIFwiUk9PRlwiLFxyXG4gICAgICAgIFwiUk9PTVwiLFxyXG4gICAgICAgIFwiUk9PVFwiLFxyXG4gICAgICAgIFwiUlVERVwiLFxyXG4gICAgICAgIFwiUlVMRVwiLFxyXG4gICAgICAgIFwiUlVTVFwiLFxyXG4gICAgICAgIFwiU0FGRVwiLFxyXG4gICAgICAgIFwiU0FJTFwiLFxyXG4gICAgICAgIFwiU0FMRVwiLFxyXG4gICAgICAgIFwiU0FMVFwiLFxyXG4gICAgICAgIFwiU0FNRVwiLFxyXG4gICAgICAgIFwiU0FORFwiLFxyXG4gICAgICAgIFwiU0VBTFwiLFxyXG4gICAgICAgIFwiU0VBVFwiLFxyXG4gICAgICAgIFwiU0VFRFwiLFxyXG4gICAgICAgIFwiU0VFTVwiLFxyXG4gICAgICAgIFwiU0VMRlwiLFxyXG4gICAgICAgIFwiU0VORFwiLFxyXG4gICAgICAgIFwiU0hJUFwiLFxyXG4gICAgICAgIFwiU0hPRVwiLFxyXG4gICAgICAgIFwiU0hPV1wiLFxyXG4gICAgICAgIFwiU0hVVFwiLFxyXG4gICAgICAgIFwiU0lERVwiLFxyXG4gICAgICAgIFwiU0lHTlwiLFxyXG4gICAgICAgIFwiU0lMS1wiLFxyXG4gICAgICAgIFwiU0lMTFwiLFxyXG4gICAgICAgIFwiU0laRVwiLFxyXG4gICAgICAgIFwiU0tJTlwiLFxyXG4gICAgICAgIFwiU0xJUFwiLFxyXG4gICAgICAgIFwiU0xPV1wiLFxyXG4gICAgICAgIFwiU05PV1wiLFxyXG4gICAgICAgIFwiU09BUFwiLFxyXG4gICAgICAgIFwiU09DS1wiLFxyXG4gICAgICAgIFwiU09GVFwiLFxyXG4gICAgICAgIFwiU09JTFwiLFxyXG4gICAgICAgIFwiU09NRVwiLFxyXG4gICAgICAgIFwiU09OR1wiLFxyXG4gICAgICAgIFwiU09SVFwiLFxyXG4gICAgICAgIFwiU09VUFwiLFxyXG4gICAgICAgIFwiU1BJVFwiLFxyXG4gICAgICAgIFwiU1BPVFwiLFxyXG4gICAgICAgIFwiU1RBUlwiLFxyXG4gICAgICAgIFwiU1RFTVwiLFxyXG4gICAgICAgIFwiU1RFUFwiLFxyXG4gICAgICAgIFwiU1RPUFwiLFxyXG4gICAgICAgIFwiU1VDSFwiLFxyXG4gICAgICAgIFwiU1dJTVwiLFxyXG4gICAgICAgIFwiVEFJTFwiLFxyXG4gICAgICAgIFwiVEFLRVwiLFxyXG4gICAgICAgIFwiVEFMS1wiLFxyXG4gICAgICAgIFwiVEFMTFwiLFxyXG4gICAgICAgIFwiVEFNRVwiLFxyXG4gICAgICAgIFwiVEFYSVwiLFxyXG4gICAgICAgIFwiVEVBUlwiLFxyXG4gICAgICAgIFwiVEVOVFwiLFxyXG4gICAgICAgIFwiVEVSTVwiLFxyXG4gICAgICAgIFwiVEVTVFwiLFxyXG4gICAgICAgIFwiVEhBTlwiLFxyXG4gICAgICAgIFwiVEhBVFwiLFxyXG4gICAgICAgIFwiVEhFTlwiLFxyXG4gICAgICAgIFwiVEhJTlwiLFxyXG4gICAgICAgIFwiVEhJU1wiLFxyXG4gICAgICAgIFwiVElERVwiLFxyXG4gICAgICAgIFwiVElMTFwiLFxyXG4gICAgICAgIFwiVElNRVwiLFxyXG4gICAgICAgIFwiVE9XTlwiLFxyXG4gICAgICAgIFwiVFJBUFwiLFxyXG4gICAgICAgIFwiVFJBWVwiLFxyXG4gICAgICAgIFwiVFJFRVwiLFxyXG4gICAgICAgIFwiVFJVRVwiLFxyXG4gICAgICAgIFwiVFVCRVwiLFxyXG4gICAgICAgIFwiVFVORVwiLFxyXG4gICAgICAgIFwiVFVSTlwiLFxyXG4gICAgICAgIFwiVFdJTlwiLFxyXG4gICAgICAgIFwiVUdMWVwiLFxyXG4gICAgICAgIFwiVU5ET1wiLFxyXG4gICAgICAgIFwiVU5JVFwiLFxyXG4gICAgICAgIFwiVVBPTlwiLFxyXG4gICAgICAgIFwiVVNFRFwiLFxyXG4gICAgICAgIFwiVkVSWVwiLFxyXG4gICAgICAgIFwiVklFV1wiLFxyXG4gICAgICAgIFwiVklTQVwiLFxyXG4gICAgICAgIFwiVk9MVFwiLFxyXG4gICAgICAgIFwiVk9URVwiLFxyXG4gICAgICAgIFwiV0FMS1wiLFxyXG4gICAgICAgIFwiV0FMTFwiLFxyXG4gICAgICAgIFwiV0FSTVwiLFxyXG4gICAgICAgIFwiV0FTSFwiLFxyXG4gICAgICAgIFwiV0FWRVwiLFxyXG4gICAgICAgIFwiV0VBS1wiLFxyXG4gICAgICAgIFwiV0VFS1wiLFxyXG4gICAgICAgIFwiV0VMTFwiLFxyXG4gICAgICAgIFwiV0VTVFwiLFxyXG4gICAgICAgIFwiV0hBVFwiLFxyXG4gICAgICAgIFwiV0hFTlwiLFxyXG4gICAgICAgIFwiV0hJUFwiLFxyXG4gICAgICAgIFwiV0lERVwiLFxyXG4gICAgICAgIFwiV0lGRVwiLFxyXG4gICAgICAgIFwiV0lMRFwiLFxyXG4gICAgICAgIFwiV0lMTFwiLFxyXG4gICAgICAgIFwiV0lORFwiLFxyXG4gICAgICAgIFwiV0lORVwiLFxyXG4gICAgICAgIFwiV0lOR1wiLFxyXG4gICAgICAgIFwiV0lSRVwiLFxyXG4gICAgICAgIFwiV0lTRVwiLFxyXG4gICAgICAgIFwiV0lUSFwiLFxyXG4gICAgICAgIFwiV09PRFwiLFxyXG4gICAgICAgIFwiV09PTFwiLFxyXG4gICAgICAgIFwiV09SRFwiLFxyXG4gICAgICAgIFwiV09SS1wiLFxyXG4gICAgICAgIFwiV09STVwiLFxyXG4gICAgICAgIFwiWUFXTlwiLFxyXG4gICAgICAgIFwiWUVBUlwiLFxyXG4gICAgICAgIFwiWklOQ1wiLFxyXG4gICAgXSxcclxuICAgIFtcclxuICAgICAgICBcIkFCT1VUXCIsXHJcbiAgICAgICAgXCJBQ1RPUlwiLFxyXG4gICAgICAgIFwiQUZURVJcIixcclxuICAgICAgICBcIkFHQUlOXCIsXHJcbiAgICAgICAgXCJBR0VOVFwiLFxyXG4gICAgICAgIFwiQUxPTkdcIixcclxuICAgICAgICBcIkFNT05HXCIsXHJcbiAgICAgICAgXCJBTkdMRVwiLFxyXG4gICAgICAgIFwiQU5HUllcIixcclxuICAgICAgICBcIkFOS0xFXCIsXHJcbiAgICAgICAgXCJBUFBMRVwiLFxyXG4gICAgICAgIFwiQVBSSUxcIixcclxuICAgICAgICBcIkFTU0VUXCIsXHJcbiAgICAgICAgXCJBV0FLRVwiLFxyXG4gICAgICAgIFwiQkFTRURcIixcclxuICAgICAgICBcIkJBU0lOXCIsXHJcbiAgICAgICAgXCJCRUFSRFwiLFxyXG4gICAgICAgIFwiQkVSUllcIixcclxuICAgICAgICBcIkJJUlRIXCIsXHJcbiAgICAgICAgXCJCTEFDS1wiLFxyXG4gICAgICAgIFwiQkxBREVcIixcclxuICAgICAgICBcIkJMQU1FXCIsXHJcbiAgICAgICAgXCJCTE9PRFwiLFxyXG4gICAgICAgIFwiQk9BUkRcIixcclxuICAgICAgICBcIkJSQUlOXCIsXHJcbiAgICAgICAgXCJCUkFLRVwiLFxyXG4gICAgICAgIFwiQlJBU1NcIixcclxuICAgICAgICBcIkJSQVZFXCIsXHJcbiAgICAgICAgXCJCUkVBRFwiLFxyXG4gICAgICAgIFwiQlJFQUtcIixcclxuICAgICAgICBcIkJSSUNLXCIsXHJcbiAgICAgICAgXCJCUk9XTlwiLFxyXG4gICAgICAgIFwiQlJVU0hcIixcclxuICAgICAgICBcIkJVTkNIXCIsXHJcbiAgICAgICAgXCJCVVJTVFwiLFxyXG4gICAgICAgIFwiQ0FVU0VcIixcclxuICAgICAgICBcIkNIQUlOXCIsXHJcbiAgICAgICAgXCJDSEFJUlwiLFxyXG4gICAgICAgIFwiQ0hBTEtcIixcclxuICAgICAgICBcIkNIRUFQXCIsXHJcbiAgICAgICAgXCJDSEVDS1wiLFxyXG4gICAgICAgIFwiQ0hFU1RcIixcclxuICAgICAgICBcIkNISUVGXCIsXHJcbiAgICAgICAgXCJDSElMRFwiLFxyXG4gICAgICAgIFwiQ0hJTkFcIixcclxuICAgICAgICBcIkNMQUlNXCIsXHJcbiAgICAgICAgXCJDTEVBTlwiLFxyXG4gICAgICAgIFwiQ0xFQVJcIixcclxuICAgICAgICBcIkNMT0NLXCIsXHJcbiAgICAgICAgXCJDTE9USFwiLFxyXG4gICAgICAgIFwiQ0xPVURcIixcclxuICAgICAgICBcIkNPTE9SXCIsXHJcbiAgICAgICAgXCJDT1VHSFwiLFxyXG4gICAgICAgIFwiQ09VUlRcIixcclxuICAgICAgICBcIkNPVkVSXCIsXHJcbiAgICAgICAgXCJDUkFDS1wiLFxyXG4gICAgICAgIFwiQ1JJTUVcIixcclxuICAgICAgICBcIkNST1NTXCIsXHJcbiAgICAgICAgXCJDUlVFTFwiLFxyXG4gICAgICAgIFwiQ1JVU0hcIixcclxuICAgICAgICBcIkNVUlZFXCIsXHJcbiAgICAgICAgXCJEQU5DRVwiLFxyXG4gICAgICAgIFwiREVBVEhcIixcclxuICAgICAgICBcIkRFQklUXCIsXHJcbiAgICAgICAgXCJESVJUWVwiLFxyXG4gICAgICAgIFwiRElUQ0hcIixcclxuICAgICAgICBcIkRPVUJUXCIsXHJcbiAgICAgICAgXCJEUkFJTlwiLFxyXG4gICAgICAgIFwiRFJFQU1cIixcclxuICAgICAgICBcIkRSRVNTXCIsXHJcbiAgICAgICAgXCJEUklGVFwiLFxyXG4gICAgICAgIFwiRFJJTktcIixcclxuICAgICAgICBcIkVBUkxZXCIsXHJcbiAgICAgICAgXCJFQVJUSFwiLFxyXG4gICAgICAgIFwiRUlHSFRcIixcclxuICAgICAgICBcIkVNUFRZXCIsXHJcbiAgICAgICAgXCJFTkVNWVwiLFxyXG4gICAgICAgIFwiRVFVQUxcIixcclxuICAgICAgICBcIkVSUk9SXCIsXHJcbiAgICAgICAgXCJFVkVOVFwiLFxyXG4gICAgICAgIFwiRVZFUllcIixcclxuICAgICAgICBcIkVYQUNUXCIsXHJcbiAgICAgICAgXCJGQUxTRVwiLFxyXG4gICAgICAgIFwiRkFVTFRcIixcclxuICAgICAgICBcIkZFVkVSXCIsXHJcbiAgICAgICAgXCJGSUJFUlwiLFxyXG4gICAgICAgIFwiRklFTERcIixcclxuICAgICAgICBcIkZJRlRIXCIsXHJcbiAgICAgICAgXCJGSUZUWVwiLFxyXG4gICAgICAgIFwiRklHSFRcIixcclxuICAgICAgICBcIkZJUkVEXCIsXHJcbiAgICAgICAgXCJGSVJTVFwiLFxyXG4gICAgICAgIFwiRklYRURcIixcclxuICAgICAgICBcIkZMQU1FXCIsXHJcbiAgICAgICAgXCJGTEFTSFwiLFxyXG4gICAgICAgIFwiRkxBU0tcIixcclxuICAgICAgICBcIkZMRVNIXCIsXHJcbiAgICAgICAgXCJGTElOVFwiLFxyXG4gICAgICAgIFwiRkxPT0RcIixcclxuICAgICAgICBcIkZMT09SXCIsXHJcbiAgICAgICAgXCJGTE9VUlwiLFxyXG4gICAgICAgIFwiRk9DVVNcIixcclxuICAgICAgICBcIkZPUkNFXCIsXHJcbiAgICAgICAgXCJGT1JUWVwiLFxyXG4gICAgICAgIFwiRlJBTUVcIixcclxuICAgICAgICBcIkZSRVNIXCIsXHJcbiAgICAgICAgXCJGUk9OVFwiLFxyXG4gICAgICAgIFwiRlJPU1RcIixcclxuICAgICAgICBcIkZSVUlUXCIsXHJcbiAgICAgICAgXCJGVU5OWVwiLFxyXG4gICAgICAgIFwiR0xBTkRcIixcclxuICAgICAgICBcIkdMQVNTXCIsXHJcbiAgICAgICAgXCJHTE9WRVwiLFxyXG4gICAgICAgIFwiR1JBSU5cIixcclxuICAgICAgICBcIkdSQU5EXCIsXHJcbiAgICAgICAgXCJHUkFTU1wiLFxyXG4gICAgICAgIFwiR1JFQVRcIixcclxuICAgICAgICBcIkdSRUVOXCIsXHJcbiAgICAgICAgXCJHUklFRlwiLFxyXG4gICAgICAgIFwiR1JPU1NcIixcclxuICAgICAgICBcIkdST1VQXCIsXHJcbiAgICAgICAgXCJHVUFSRFwiLFxyXG4gICAgICAgIFwiR1VFU1NcIixcclxuICAgICAgICBcIkdVSURFXCIsXHJcbiAgICAgICAgXCJIQUJJVFwiLFxyXG4gICAgICAgIFwiSEFQUFlcIixcclxuICAgICAgICBcIkhFQVJUXCIsXHJcbiAgICAgICAgXCJIRUFWWVwiLFxyXG4gICAgICAgIFwiSEVER0VcIixcclxuICAgICAgICBcIkhJTkdFXCIsXHJcbiAgICAgICAgXCJIT05FWVwiLFxyXG4gICAgICAgIFwiSE9SU0VcIixcclxuICAgICAgICBcIkhPVEVMXCIsXHJcbiAgICAgICAgXCJIT1VTRVwiLFxyXG4gICAgICAgIFwiSFVNQU5cIixcclxuICAgICAgICBcIkhVTU9SXCIsXHJcbiAgICAgICAgXCJIVVJSWVwiLFxyXG4gICAgICAgIFwiSFlFTkFcIixcclxuICAgICAgICBcIklNQUdFXCIsXHJcbiAgICAgICAgXCJJTkRFWFwiLFxyXG4gICAgICAgIFwiSU5MRVRcIixcclxuICAgICAgICBcIklOTkVSXCIsXHJcbiAgICAgICAgXCJJTlBVVFwiLFxyXG4gICAgICAgIFwiSkVMTFlcIixcclxuICAgICAgICBcIkpFV0VMXCIsXHJcbiAgICAgICAgXCJKT0lOVFwiLFxyXG4gICAgICAgIFwiSlVER0VcIixcclxuICAgICAgICBcIkpVSUNFXCIsXHJcbiAgICAgICAgXCJLTklGRVwiLFxyXG4gICAgICAgIFwiS05PQ0tcIixcclxuICAgICAgICBcIkxBUkdFXCIsXHJcbiAgICAgICAgXCJMQVVHSFwiLFxyXG4gICAgICAgIFwiTEFZRVJcIixcclxuICAgICAgICBcIkxFQVNUXCIsXHJcbiAgICAgICAgXCJMRUdBTFwiLFxyXG4gICAgICAgIFwiTEVWRUxcIixcclxuICAgICAgICBcIkxFVkVSXCIsXHJcbiAgICAgICAgXCJMSUdIVFwiLFxyXG4gICAgICAgIFwiTElNSVRcIixcclxuICAgICAgICBcIkxJTkVOXCIsXHJcbiAgICAgICAgXCJMSVRFUlwiLFxyXG4gICAgICAgIFwiTElWRVJcIixcclxuICAgICAgICBcIkxPQ0FMXCIsXHJcbiAgICAgICAgXCJMT0NVU1wiLFxyXG4gICAgICAgIFwiTE9PU0VcIixcclxuICAgICAgICBcIkxVTkNIXCIsXHJcbiAgICAgICAgXCJNQURBTVwiLFxyXG4gICAgICAgIFwiTUFHSUNcIixcclxuICAgICAgICBcIk1BTklBXCIsXHJcbiAgICAgICAgXCJNQVJDSFwiLFxyXG4gICAgICAgIFwiTUFUQ0hcIixcclxuICAgICAgICBcIk1FVEFMXCIsXHJcbiAgICAgICAgXCJNRVRFUlwiLFxyXG4gICAgICAgIFwiTUlORVJcIixcclxuICAgICAgICBcIk1JWEVEXCIsXHJcbiAgICAgICAgXCJNT0RFTFwiLFxyXG4gICAgICAgIFwiTU9ORVlcIixcclxuICAgICAgICBcIk1PTlRIXCIsXHJcbiAgICAgICAgXCJNT1JBTFwiLFxyXG4gICAgICAgIFwiTU9VVEhcIixcclxuICAgICAgICBcIk1VU0lDXCIsXHJcbiAgICAgICAgXCJOQVNUWVwiLFxyXG4gICAgICAgIFwiTkVSVkVcIixcclxuICAgICAgICBcIk5JR0hUXCIsXHJcbiAgICAgICAgXCJOT0lTRVwiLFxyXG4gICAgICAgIFwiTk9SVEhcIixcclxuICAgICAgICBcIk5PVEVEXCIsXHJcbiAgICAgICAgXCJOVVJTRVwiLFxyXG4gICAgICAgIFwiT0ZGRVJcIixcclxuICAgICAgICBcIk9MSVZFXCIsXHJcbiAgICAgICAgXCJPUEVSQVwiLFxyXG4gICAgICAgIFwiT1BJVU1cIixcclxuICAgICAgICBcIk9SREVSXCIsXHJcbiAgICAgICAgXCJPUkdBTlwiLFxyXG4gICAgICAgIFwiT1RIRVJcIixcclxuICAgICAgICBcIk9VVEVSXCIsXHJcbiAgICAgICAgXCJPV05FUlwiLFxyXG4gICAgICAgIFwiUEFJTlRcIixcclxuICAgICAgICBcIlBBUEVSXCIsXHJcbiAgICAgICAgXCJQQVJUWVwiLFxyXG4gICAgICAgIFwiUEFTVEVcIixcclxuICAgICAgICBcIlBFQUNFXCIsXHJcbiAgICAgICAgXCJQRURBTFwiLFxyXG4gICAgICAgIFwiUEVUQUxcIixcclxuICAgICAgICBcIlBJQU5PXCIsXHJcbiAgICAgICAgXCJQTEFDRVwiLFxyXG4gICAgICAgIFwiUExBSU5cIixcclxuICAgICAgICBcIlBMQU5FXCIsXHJcbiAgICAgICAgXCJQTEFOVFwiLFxyXG4gICAgICAgIFwiUExBVEVcIixcclxuICAgICAgICBcIlBPSU5UXCIsXHJcbiAgICAgICAgXCJQT1dFUlwiLFxyXG4gICAgICAgIFwiUFJJQ0VcIixcclxuICAgICAgICBcIlBSSUNLXCIsXHJcbiAgICAgICAgXCJQUklNRVwiLFxyXG4gICAgICAgIFwiUFJJTlRcIixcclxuICAgICAgICBcIlBST09GXCIsXHJcbiAgICAgICAgXCJQUk9TRVwiLFxyXG4gICAgICAgIFwiUFJPVURcIixcclxuICAgICAgICBcIlBVUElMXCIsXHJcbiAgICAgICAgXCJRVUFDS1wiLFxyXG4gICAgICAgIFwiUVVFRU5cIixcclxuICAgICAgICBcIlFVSUNLXCIsXHJcbiAgICAgICAgXCJRVUlFVFwiLFxyXG4gICAgICAgIFwiUVVJVEVcIixcclxuICAgICAgICBcIlJBRElPXCIsXHJcbiAgICAgICAgXCJSQU5HRVwiLFxyXG4gICAgICAgIFwiUkFUSU9cIixcclxuICAgICAgICBcIlJFQURZXCIsXHJcbiAgICAgICAgXCJSSUdIVFwiLFxyXG4gICAgICAgIFwiUklWQUxcIixcclxuICAgICAgICBcIlJJVkVSXCIsXHJcbiAgICAgICAgXCJST1VHSFwiLFxyXG4gICAgICAgIFwiUk9VTkRcIixcclxuICAgICAgICBcIlJPWUFMXCIsXHJcbiAgICAgICAgXCJSVUxFUlwiLFxyXG4gICAgICAgIFwiU0FMQURcIixcclxuICAgICAgICBcIlNDQUxFXCIsXHJcbiAgICAgICAgXCJTQ0FSUFwiLFxyXG4gICAgICAgIFwiU0NSRVdcIixcclxuICAgICAgICBcIlNFTlNFXCIsXHJcbiAgICAgICAgXCJTRVBBTFwiLFxyXG4gICAgICAgIFwiU0VSVU1cIixcclxuICAgICAgICBcIlNFVkVOXCIsXHJcbiAgICAgICAgXCJTSEFERVwiLFxyXG4gICAgICAgIFwiU0hBS0VcIixcclxuICAgICAgICBcIlNIQUxFXCIsXHJcbiAgICAgICAgXCJTSEFNRVwiLFxyXG4gICAgICAgIFwiU0hBUkVcIixcclxuICAgICAgICBcIlNIQVJQXCIsXHJcbiAgICAgICAgXCJTSEFWRVwiLFxyXG4gICAgICAgIFwiU0hFQVJcIixcclxuICAgICAgICBcIlNIRUVQXCIsXHJcbiAgICAgICAgXCJTSEVFVFwiLFxyXG4gICAgICAgIFwiU0hFTEZcIixcclxuICAgICAgICBcIlNIRUxMXCIsXHJcbiAgICAgICAgXCJTSElSVFwiLFxyXG4gICAgICAgIFwiU0hPQ0tcIixcclxuICAgICAgICBcIlNIT1JFXCIsXHJcbiAgICAgICAgXCJTSE9SVFwiLFxyXG4gICAgICAgIFwiU0lHSFRcIixcclxuICAgICAgICBcIlNJTkNFXCIsXHJcbiAgICAgICAgXCJTS0lSVFwiLFxyXG4gICAgICAgIFwiU0tVTExcIixcclxuICAgICAgICBcIlNMQVRFXCIsXHJcbiAgICAgICAgXCJTTEVFUFwiLFxyXG4gICAgICAgIFwiU0xJREVcIixcclxuICAgICAgICBcIlNMT1BFXCIsXHJcbiAgICAgICAgXCJTTUFMTFwiLFxyXG4gICAgICAgIFwiU01BU0hcIixcclxuICAgICAgICBcIlNNRUxMXCIsXHJcbiAgICAgICAgXCJTTUlMRVwiLFxyXG4gICAgICAgIFwiU01PS0VcIixcclxuICAgICAgICBcIlNOQUtFXCIsXHJcbiAgICAgICAgXCJTT0xJRFwiLFxyXG4gICAgICAgIFwiU09SUllcIixcclxuICAgICAgICBcIlNPVU5EXCIsXHJcbiAgICAgICAgXCJTT1VUSFwiLFxyXG4gICAgICAgIFwiU1BBQ0VcIixcclxuICAgICAgICBcIlNQQURFXCIsXHJcbiAgICAgICAgXCJTUEFSS1wiLFxyXG4gICAgICAgIFwiU1BPT05cIixcclxuICAgICAgICBcIlNQT1JUXCIsXHJcbiAgICAgICAgXCJTVEFHRVwiLFxyXG4gICAgICAgIFwiU1RBSU5cIixcclxuICAgICAgICBcIlNUQUlSXCIsXHJcbiAgICAgICAgXCJTVEFMS1wiLFxyXG4gICAgICAgIFwiU1RBTVBcIixcclxuICAgICAgICBcIlNUQVJUXCIsXHJcbiAgICAgICAgXCJTVEVBTVwiLFxyXG4gICAgICAgIFwiU1RFRUxcIixcclxuICAgICAgICBcIlNUSUNLXCIsXHJcbiAgICAgICAgXCJTVElGRlwiLFxyXG4gICAgICAgIFwiU1RJTExcIixcclxuICAgICAgICBcIlNUT05FXCIsXHJcbiAgICAgICAgXCJTVE9SRVwiLFxyXG4gICAgICAgIFwiU1RPUk1cIixcclxuICAgICAgICBcIlNUT1JZXCIsXHJcbiAgICAgICAgXCJTVFJBV1wiLFxyXG4gICAgICAgIFwiU1RVRFlcIixcclxuICAgICAgICBcIlNVR0FSXCIsXHJcbiAgICAgICAgXCJTV0VFVFwiLFxyXG4gICAgICAgIFwiU1dJTkdcIixcclxuICAgICAgICBcIlRBQkxFXCIsXHJcbiAgICAgICAgXCJUQVNURVwiLFxyXG4gICAgICAgIFwiVEhFUkVcIixcclxuICAgICAgICBcIlRISUNLXCIsXHJcbiAgICAgICAgXCJUSElFRlwiLFxyXG4gICAgICAgIFwiVEhJTkdcIixcclxuICAgICAgICBcIlRISVJEXCIsXHJcbiAgICAgICAgXCJUSFJFRVwiLFxyXG4gICAgICAgIFwiVEhVTUJcIixcclxuICAgICAgICBcIlRJR0hUXCIsXHJcbiAgICAgICAgXCJUSVJFRFwiLFxyXG4gICAgICAgIFwiVE9BU1RcIixcclxuICAgICAgICBcIlRPREFZXCIsXHJcbiAgICAgICAgXCJUT05HU1wiLFxyXG4gICAgICAgIFwiVE9PVEhcIixcclxuICAgICAgICBcIlRPVEFMXCIsXHJcbiAgICAgICAgXCJUT1VDSFwiLFxyXG4gICAgICAgIFwiVE9XRUxcIixcclxuICAgICAgICBcIlRPV0VSXCIsXHJcbiAgICAgICAgXCJUUkFERVwiLFxyXG4gICAgICAgIFwiVFJBSU5cIixcclxuICAgICAgICBcIlRSSUNLXCIsXHJcbiAgICAgICAgXCJUUlVDS1wiLFxyXG4gICAgICAgIFwiVFdJQ0VcIixcclxuICAgICAgICBcIlRXSVNUXCIsXHJcbiAgICAgICAgXCJVTkRFUlwiLFxyXG4gICAgICAgIFwiVkFMVUVcIixcclxuICAgICAgICBcIlZBTFZFXCIsXHJcbiAgICAgICAgXCJWQVBPUlwiLFxyXG4gICAgICAgIFwiVkVSU0VcIixcclxuICAgICAgICBcIlZPREtBXCIsXHJcbiAgICAgICAgXCJWT0lDRVwiLFxyXG4gICAgICAgIFwiV0FTVEVcIixcclxuICAgICAgICBcIldBVENIXCIsXHJcbiAgICAgICAgXCJXQVRFUlwiLFxyXG4gICAgICAgIFwiV0VER0VcIixcclxuICAgICAgICBcIldIRUVMXCIsXHJcbiAgICAgICAgXCJXSEVSRVwiLFxyXG4gICAgICAgIFwiV0hJQ0hcIixcclxuICAgICAgICBcIldISUxFXCIsXHJcbiAgICAgICAgXCJXSElURVwiLFxyXG4gICAgICAgIFwiV0lET1dcIixcclxuICAgICAgICBcIldPTUFOXCIsXHJcbiAgICAgICAgXCJXT1JMRFwiLFxyXG4gICAgICAgIFwiV09VTkRcIixcclxuICAgICAgICBcIldSRUNLXCIsXHJcbiAgICAgICAgXCJXUklTVFwiLFxyXG4gICAgICAgIFwiV1JPTkdcIixcclxuICAgICAgICBcIllPVU5HXCIsXHJcbiAgICAgICAgXCJaRUJSQVwiLFxyXG4gICAgXSxcclxuICAgIFtcclxuICAgICAgICBcIkFDUk9TU1wiLFxyXG4gICAgICAgIFwiQUNUSU5HXCIsXHJcbiAgICAgICAgXCJBQ1RJVkVcIixcclxuICAgICAgICBcIkFEVklDRVwiLFxyXG4gICAgICAgIFwiQUdFTkNZXCIsXHJcbiAgICAgICAgXCJBTE1PU1RcIixcclxuICAgICAgICBcIkFMV0FZU1wiLFxyXG4gICAgICAgIFwiQU1PVU5UXCIsXHJcbiAgICAgICAgXCJBTkNIT1JcIixcclxuICAgICAgICBcIkFOSU1BTFwiLFxyXG4gICAgICAgIFwiQU5TV0VSXCIsXHJcbiAgICAgICAgXCJBTllIT1dcIixcclxuICAgICAgICBcIkFOWU9ORVwiLFxyXG4gICAgICAgIFwiQVRUQUNLXCIsXHJcbiAgICAgICAgXCJBVUdVU1RcIixcclxuICAgICAgICBcIkJBTExFVFwiLFxyXG4gICAgICAgIFwiQkFSUkVMXCIsXHJcbiAgICAgICAgXCJCQVNJTkdcIixcclxuICAgICAgICBcIkJBU0tFVFwiLFxyXG4gICAgICAgIFwiQkVBS0VSXCIsXHJcbiAgICAgICAgXCJCRUNPTUVcIixcclxuICAgICAgICBcIkJFRk9SRVwiLFxyXG4gICAgICAgIFwiQkVISU5EXCIsXHJcbiAgICAgICAgXCJCRUxJRUZcIixcclxuICAgICAgICBcIkJJVFRFUlwiLFxyXG4gICAgICAgIFwiQk9UVExFXCIsXHJcbiAgICAgICAgXCJCT1RUT01cIixcclxuICAgICAgICBcIkJSQU5DSFwiLFxyXG4gICAgICAgIFwiQlJFQVNUXCIsXHJcbiAgICAgICAgXCJCUkVBVEhcIixcclxuICAgICAgICBcIkJSSURHRVwiLFxyXG4gICAgICAgIFwiQlJJR0hUXCIsXHJcbiAgICAgICAgXCJCUk9LRU5cIixcclxuICAgICAgICBcIkJST0tFUlwiLFxyXG4gICAgICAgIFwiQlVCQkxFXCIsXHJcbiAgICAgICAgXCJCVUNLRVRcIixcclxuICAgICAgICBcIkJVREdFVFwiLFxyXG4gICAgICAgIFwiQlVSSUFMXCIsXHJcbiAgICAgICAgXCJCVVJORURcIixcclxuICAgICAgICBcIkJVUk5FUlwiLFxyXG4gICAgICAgIFwiQlVUVEVSXCIsXHJcbiAgICAgICAgXCJCVVRUT05cIixcclxuICAgICAgICBcIkNBTUVSQVwiLFxyXG4gICAgICAgIFwiQ0FOVkFTXCIsXHJcbiAgICAgICAgXCJDQVJQRVRcIixcclxuICAgICAgICBcIkNBUlRFUlwiLFxyXG4gICAgICAgIFwiQ0FWSVRZXCIsXHJcbiAgICAgICAgXCJDSEFOQ0VcIixcclxuICAgICAgICBcIkNIQU5HRVwiLFxyXG4gICAgICAgIFwiQ0hBUkdFXCIsXHJcbiAgICAgICAgXCJDSEVFU0VcIixcclxuICAgICAgICBcIkNIT0lDRVwiLFxyXG4gICAgICAgIFwiQ0hPUlVTXCIsXHJcbiAgICAgICAgXCJDSFVSQ0hcIixcclxuICAgICAgICBcIkNJUkNMRVwiLFxyXG4gICAgICAgIFwiQ0lSQ1VTXCIsXHJcbiAgICAgICAgXCJDSVRST05cIixcclxuICAgICAgICBcIkNMRVZFUlwiLFxyXG4gICAgICAgIFwiQ0xJRU5UXCIsXHJcbiAgICAgICAgXCJDT0ZGRUVcIixcclxuICAgICAgICBcIkNPR05BQ1wiLFxyXG4gICAgICAgIFwiQ09MTEFSXCIsXHJcbiAgICAgICAgXCJDT0xPTllcIixcclxuICAgICAgICBcIkNPTFVNTlwiLFxyXG4gICAgICAgIFwiQ09NTU9OXCIsXHJcbiAgICAgICAgXCJDT09LRURcIixcclxuICAgICAgICBcIkNPT0tFUlwiLFxyXG4gICAgICAgIFwiQ09QUEVSXCIsXHJcbiAgICAgICAgXCJDT1JORVJcIixcclxuICAgICAgICBcIkNPVFRPTlwiLFxyXG4gICAgICAgIFwiQ1JFRElUXCIsXHJcbiAgICAgICAgXCJDUllJTkdcIixcclxuICAgICAgICBcIkRBTUFHRVwiLFxyXG4gICAgICAgIFwiREFOQ0VSXCIsXHJcbiAgICAgICAgXCJEQU5HRVJcIixcclxuICAgICAgICBcIkRFRkVDVFwiLFxyXG4gICAgICAgIFwiREVHUkVFXCIsXHJcbiAgICAgICAgXCJERU1BTkRcIixcclxuICAgICAgICBcIkRFU0VSVFwiLFxyXG4gICAgICAgIFwiREVTSUdOXCIsXHJcbiAgICAgICAgXCJERVNJUkVcIixcclxuICAgICAgICBcIkRFVEFJTFwiLFxyXG4gICAgICAgIFwiRElOTkVSXCIsXHJcbiAgICAgICAgXCJESVJFQ1RcIixcclxuICAgICAgICBcIkRSQVdFUlwiLFxyXG4gICAgICAgIFwiRFJJVkVSXCIsXHJcbiAgICAgICAgXCJEVVNURVJcIixcclxuICAgICAgICBcIkVGRkVDVFwiLFxyXG4gICAgICAgIFwiRUZGT1JUXCIsXHJcbiAgICAgICAgXCJFSVRIRVJcIixcclxuICAgICAgICBcIkVMRVZFTlwiLFxyXG4gICAgICAgIFwiRU1QSVJFXCIsXHJcbiAgICAgICAgXCJFTkdJTkVcIixcclxuICAgICAgICBcIkVOT1VHSFwiLFxyXG4gICAgICAgIFwiRVhQRVJUXCIsXHJcbiAgICAgICAgXCJFWFBPUlRcIixcclxuICAgICAgICBcIkZBQ1RPUlwiLFxyXG4gICAgICAgIFwiRkFNSUxZXCIsXHJcbiAgICAgICAgXCJGQU1PVVNcIixcclxuICAgICAgICBcIkZBUk1FUlwiLFxyXG4gICAgICAgIFwiRkFUSEVSXCIsXHJcbiAgICAgICAgXCJGRUVCTEVcIixcclxuICAgICAgICBcIkZFTUFMRVwiLFxyXG4gICAgICAgIFwiRklHVVJFXCIsXHJcbiAgICAgICAgXCJGSU5HRVJcIixcclxuICAgICAgICBcIkZJUklOR1wiLFxyXG4gICAgICAgIFwiRklTSEVSXCIsXHJcbiAgICAgICAgXCJGTElHSFRcIixcclxuICAgICAgICBcIkZMT1dFUlwiLFxyXG4gICAgICAgIFwiRk9MREVSXCIsXHJcbiAgICAgICAgXCJGT1VSVEhcIixcclxuICAgICAgICBcIkZSSURBWVwiLFxyXG4gICAgICAgIFwiRlJJRU5EXCIsXHJcbiAgICAgICAgXCJGUk9aRU5cIixcclxuICAgICAgICBcIkZVTk5FTFwiLFxyXG4gICAgICAgIFwiRlVTSU9OXCIsXHJcbiAgICAgICAgXCJGVVRVUkVcIixcclxuICAgICAgICBcIkdBUkRFTlwiLFxyXG4gICAgICAgIFwiR1JBVkVMXCIsXHJcbiAgICAgICAgXCJHUkVBU0VcIixcclxuICAgICAgICBcIkdST09WRVwiLFxyXG4gICAgICAgIFwiR1JPVU5EXCIsXHJcbiAgICAgICAgXCJHUk9XVEhcIixcclxuICAgICAgICBcIkhBTU1FUlwiLFxyXG4gICAgICAgIFwiSEFORExFXCIsXHJcbiAgICAgICAgXCJIQU5HRVJcIixcclxuICAgICAgICBcIkhBUkJPUlwiLFxyXG4gICAgICAgIFwiSEVBVEVEXCIsXHJcbiAgICAgICAgXCJIRUFURVJcIixcclxuICAgICAgICBcIkhPTExPV1wiLFxyXG4gICAgICAgIFwiSE9ORVNUXCIsXHJcbiAgICAgICAgXCJJTVBPUlRcIixcclxuICAgICAgICBcIklOQ09NRVwiLFxyXG4gICAgICAgIFwiSU5MQU5EXCIsXHJcbiAgICAgICAgXCJJTlNFQ1RcIixcclxuICAgICAgICBcIklOU0lERVwiLFxyXG4gICAgICAgIFwiSU5TVEVQXCIsXHJcbiAgICAgICAgXCJJU0xBTkRcIixcclxuICAgICAgICBcIklUU0VMRlwiLFxyXG4gICAgICAgIFwiSk9JTkVSXCIsXHJcbiAgICAgICAgXCJLRUVQRVJcIixcclxuICAgICAgICBcIktFTk5FTFwiLFxyXG4gICAgICAgIFwiS0VUVExFXCIsXHJcbiAgICAgICAgXCJLSURORVlcIixcclxuICAgICAgICBcIkxBV1lFUlwiLFxyXG4gICAgICAgIFwiTEVOR1RIXCIsXHJcbiAgICAgICAgXCJMRVNTT05cIixcclxuICAgICAgICBcIkxFVFRFUlwiLFxyXG4gICAgICAgIFwiTElRVUlEXCIsXHJcbiAgICAgICAgXCJMSVRUTEVcIixcclxuICAgICAgICBcIkxJVklOR1wiLFxyXG4gICAgICAgIFwiTE9DS0VSXCIsXHJcbiAgICAgICAgXCJNQU5ORVJcIixcclxuICAgICAgICBcIk1BUkJMRVwiLFxyXG4gICAgICAgIFwiTUFSR0lOXCIsXHJcbiAgICAgICAgXCJNQVJLRURcIixcclxuICAgICAgICBcIk1BUktFVFwiLFxyXG4gICAgICAgIFwiTUFUVVJFXCIsXHJcbiAgICAgICAgXCJNRURJVU1cIixcclxuICAgICAgICBcIk1FTUJFUlwiLFxyXG4gICAgICAgIFwiTUVNT1JZXCIsXHJcbiAgICAgICAgXCJNSURETEVcIixcclxuICAgICAgICBcIk1JTlVURVwiLFxyXG4gICAgICAgIFwiTU9ERVJOXCIsXHJcbiAgICAgICAgXCJNT0RFU1RcIixcclxuICAgICAgICBcIk1PTkRBWVwiLFxyXG4gICAgICAgIFwiTU9OS0VZXCIsXHJcbiAgICAgICAgXCJNT1RIRVJcIixcclxuICAgICAgICBcIk1PVElPTlwiLFxyXG4gICAgICAgIFwiTVVSREVSXCIsXHJcbiAgICAgICAgXCJNVVNDTEVcIixcclxuICAgICAgICBcIk1VU0VVTVwiLFxyXG4gICAgICAgIFwiTVlTRUxGXCIsXHJcbiAgICAgICAgXCJOQVJST1dcIixcclxuICAgICAgICBcIk5BVElPTlwiLFxyXG4gICAgICAgIFwiTkFUVVJFXCIsXHJcbiAgICAgICAgXCJORUFSRVJcIixcclxuICAgICAgICBcIk5FRURMRVwiLFxyXG4gICAgICAgIFwiTklDS0VMXCIsXHJcbiAgICAgICAgXCJOT0JPRFlcIixcclxuICAgICAgICBcIk5PUk1BTFwiLFxyXG4gICAgICAgIFwiTlVNQkVSXCIsXHJcbiAgICAgICAgXCJPRkZJQ0VcIixcclxuICAgICAgICBcIk9NRUxFVFwiLFxyXG4gICAgICAgIFwiT1JBTkdFXCIsXHJcbiAgICAgICAgXCJPUklHSU5cIixcclxuICAgICAgICBcIk9VVENSWVwiLFxyXG4gICAgICAgIFwiT1VUTEFXXCIsXHJcbiAgICAgICAgXCJPVVRMRVRcIixcclxuICAgICAgICBcIk9VVFBVVFwiLFxyXG4gICAgICAgIFwiT1ZFUkRPXCIsXHJcbiAgICAgICAgXCJQQVJDRUxcIixcclxuICAgICAgICBcIlBBUkVOVFwiLFxyXG4gICAgICAgIFwiUEFURU5UXCIsXHJcbiAgICAgICAgXCJQRU5DSUxcIixcclxuICAgICAgICBcIlBFT1BMRVwiLFxyXG4gICAgICAgIFwiUEVSU09OXCIsXHJcbiAgICAgICAgXCJQSVNUT05cIixcclxuICAgICAgICBcIlBMQVlFRFwiLFxyXG4gICAgICAgIFwiUExFQVNFXCIsXHJcbiAgICAgICAgXCJQTE9VR0hcIixcclxuICAgICAgICBcIlBPQ0tFVFwiLFxyXG4gICAgICAgIFwiUE9FVFJZXCIsXHJcbiAgICAgICAgXCJQT0lTT05cIixcclxuICAgICAgICBcIlBPTElDRVwiLFxyXG4gICAgICAgIFwiUE9MSVNIXCIsXHJcbiAgICAgICAgXCJQT0xMRU5cIixcclxuICAgICAgICBcIlBPUlRFUlwiLFxyXG4gICAgICAgIFwiUE9UQVNIXCIsXHJcbiAgICAgICAgXCJQT1RBVE9cIixcclxuICAgICAgICBcIlBPVFRFUlwiLFxyXG4gICAgICAgIFwiUE9XREVSXCIsXHJcbiAgICAgICAgXCJQUkFJU0VcIixcclxuICAgICAgICBcIlBSQVlFUlwiLFxyXG4gICAgICAgIFwiUFJJRVNUXCIsXHJcbiAgICAgICAgXCJQUklOQ0VcIixcclxuICAgICAgICBcIlBSSVNPTlwiLFxyXG4gICAgICAgIFwiUFJPRklUXCIsXHJcbiAgICAgICAgXCJQVUJMSUNcIixcclxuICAgICAgICBcIlBVTExFWVwiLFxyXG4gICAgICAgIFwiUkFESVVNXCIsXHJcbiAgICAgICAgXCJSRUFERVJcIixcclxuICAgICAgICBcIlJFQVNPTlwiLFxyXG4gICAgICAgIFwiUkVDT1JEXCIsXHJcbiAgICAgICAgXCJSRUZMVVhcIixcclxuICAgICAgICBcIlJFR1JFVFwiLFxyXG4gICAgICAgIFwiUkVNQVJLXCIsXHJcbiAgICAgICAgXCJSRU1FRFlcIixcclxuICAgICAgICBcIlJFUEFJUlwiLFxyXG4gICAgICAgIFwiUkVTVUxUXCIsXHJcbiAgICAgICAgXCJSRVRBSUxcIixcclxuICAgICAgICBcIlJFV0FSRFwiLFxyXG4gICAgICAgIFwiUkhZVEhNXCIsXHJcbiAgICAgICAgXCJST0xMRVJcIixcclxuICAgICAgICBcIlJVQkJFUlwiLFxyXG4gICAgICAgIFwiU0FJTE9SXCIsXHJcbiAgICAgICAgXCJTQU1QTEVcIixcclxuICAgICAgICBcIlNBVUNFUlwiLFxyXG4gICAgICAgIFwiU0FWSU5HXCIsXHJcbiAgICAgICAgXCJTQ0hJU1RcIixcclxuICAgICAgICBcIlNDSE9PTFwiLFxyXG4gICAgICAgIFwiU0NSRUVOXCIsXHJcbiAgICAgICAgXCJTRUFNQU5cIixcclxuICAgICAgICBcIlNFQVJDSFwiLFxyXG4gICAgICAgIFwiU0VDT05EXCIsXHJcbiAgICAgICAgXCJTRUNSRVRcIixcclxuICAgICAgICBcIlNIQURPV1wiLFxyXG4gICAgICAgIFwiU0lMVkVSXCIsXHJcbiAgICAgICAgXCJTSU1QTEVcIixcclxuICAgICAgICBcIlNJU1RFUlwiLFxyXG4gICAgICAgIFwiU0xFRVZFXCIsXHJcbiAgICAgICAgXCJTTU9PVEhcIixcclxuICAgICAgICBcIlNORUVaRVwiLFxyXG4gICAgICAgIFwiU09DSUFMXCIsXHJcbiAgICAgICAgXCJTUElSSVRcIixcclxuICAgICAgICBcIlNQTEFTSFwiLFxyXG4gICAgICAgIFwiU1BPTkdFXCIsXHJcbiAgICAgICAgXCJTUFJJTkdcIixcclxuICAgICAgICBcIlNRVUFSRVwiLFxyXG4gICAgICAgIFwiU1RBQkxFXCIsXHJcbiAgICAgICAgXCJTVEFNRU5cIixcclxuICAgICAgICBcIlNURUFEWVwiLFxyXG4gICAgICAgIFwiU1RJQ0tZXCIsXHJcbiAgICAgICAgXCJTVElUQ0hcIixcclxuICAgICAgICBcIlNUUkFJTlwiLFxyXG4gICAgICAgIFwiU1RSRUFNXCIsXHJcbiAgICAgICAgXCJTVFJFRVRcIixcclxuICAgICAgICBcIlNUUkVTU1wiLFxyXG4gICAgICAgIFwiU1RSSUtFXCIsXHJcbiAgICAgICAgXCJTVFJJTkdcIixcclxuICAgICAgICBcIlNUUk9OR1wiLFxyXG4gICAgICAgIFwiU1VDS0VSXCIsXHJcbiAgICAgICAgXCJTVURERU5cIixcclxuICAgICAgICBcIlNVTU1FUlwiLFxyXG4gICAgICAgIFwiU1VOREFZXCIsXHJcbiAgICAgICAgXCJTVVBQTFlcIixcclxuICAgICAgICBcIlNXSVRDSFwiLFxyXG4gICAgICAgIFwiU1lTVEVNXCIsXHJcbiAgICAgICAgXCJUQUlMT1JcIixcclxuICAgICAgICBcIlRIRU9SWVwiLFxyXG4gICAgICAgIFwiVEhJUlRZXCIsXHJcbiAgICAgICAgXCJUSE9SQVhcIixcclxuICAgICAgICBcIlRIT1VHSFwiLFxyXG4gICAgICAgIFwiVEhSRUFEXCIsXHJcbiAgICAgICAgXCJUSFJFQVRcIixcclxuICAgICAgICBcIlRIUk9BVFwiLFxyXG4gICAgICAgIFwiVEhSVVNUXCIsXHJcbiAgICAgICAgXCJUSUNLRVRcIixcclxuICAgICAgICBcIlRJU1NVRVwiLFxyXG4gICAgICAgIFwiVE9OR1VFXCIsXHJcbiAgICAgICAgXCJUUkFERVJcIixcclxuICAgICAgICBcIlRSQVZFTFwiLFxyXG4gICAgICAgIFwiVFVOTkVMXCIsXHJcbiAgICAgICAgXCJUV0VMVkVcIixcclxuICAgICAgICBcIlRXRU5UWVwiLFxyXG4gICAgICAgIFwiVFlQSVNUXCIsXHJcbiAgICAgICAgXCJVUEtFRVBcIixcclxuICAgICAgICBcIlVQTElGVFwiLFxyXG4gICAgICAgIFwiVVBUQUtFXCIsXHJcbiAgICAgICAgXCJWQUxMRVlcIixcclxuICAgICAgICBcIlZFU1NFTFwiLFxyXG4gICAgICAgIFwiVklDVElNXCIsXHJcbiAgICAgICAgXCJWSU9MSU5cIixcclxuICAgICAgICBcIlZPTFVNRVwiLFxyXG4gICAgICAgIFwiVk9SVEVYXCIsXHJcbiAgICAgICAgXCJXQUlURVJcIixcclxuICAgICAgICBcIldBU1RFRFwiLFxyXG4gICAgICAgIFwiV0VJR0hUXCIsXHJcbiAgICAgICAgXCJXSElTS1lcIixcclxuICAgICAgICBcIldJTkRPV1wiLFxyXG4gICAgICAgIFwiV0lOVEVSXCIsXHJcbiAgICAgICAgXCJXSVRISU5cIixcclxuICAgICAgICBcIldPUktFUlwiLFxyXG4gICAgICAgIFwiV1JJVEVSXCIsXHJcbiAgICAgICAgXCJZRUxMT1dcIixcclxuICAgIF0sXHJcbiAgICBbXHJcbiAgICAgICAgXCJBQlNFTkNFXCIsXHJcbiAgICAgICAgXCJBQ0NPVU5UXCIsXHJcbiAgICAgICAgXCJBRERSRVNTXCIsXHJcbiAgICAgICAgXCJBR0FJTlNUXCIsXHJcbiAgICAgICAgXCJBTENPSE9MXCIsXHJcbiAgICAgICAgXCJBTEdFQlJBXCIsXHJcbiAgICAgICAgXCJBTU1PTklBXCIsXHJcbiAgICAgICAgXCJBTk9USEVSXCIsXHJcbiAgICAgICAgXCJBTllCT0RZXCIsXHJcbiAgICAgICAgXCJBVFRFTVBUXCIsXHJcbiAgICAgICAgXCJBVVRPQlVTXCIsXHJcbiAgICAgICAgXCJBVkVSQUdFXCIsXHJcbiAgICAgICAgXCJBV0tXQVJEXCIsXHJcbiAgICAgICAgXCJCQUxBTkNFXCIsXHJcbiAgICAgICAgXCJCQUxDT05ZXCIsXHJcbiAgICAgICAgXCJCRUNBVVNFXCIsXHJcbiAgICAgICAgXCJCRURST09NXCIsXHJcbiAgICAgICAgXCJCRUVTV0FYXCIsXHJcbiAgICAgICAgXCJCRVRXRUVOXCIsXHJcbiAgICAgICAgXCJCSU9MT0dZXCIsXHJcbiAgICAgICAgXCJCTEFOS0VUXCIsXHJcbiAgICAgICAgXCJCT0lMSU5HXCIsXHJcbiAgICAgICAgXCJCUk9USEVSXCIsXHJcbiAgICAgICAgXCJCVUlMREVSXCIsXHJcbiAgICAgICAgXCJCVVJOSU5HXCIsXHJcbiAgICAgICAgXCJDQVBJVEFMXCIsXHJcbiAgICAgICAgXCJDQVRBUlJIXCIsXHJcbiAgICAgICAgXCJDRVJUQUlOXCIsXHJcbiAgICAgICAgXCJDSEVNSVNUXCIsXHJcbiAgICAgICAgXCJDSElNTkVZXCIsXHJcbiAgICAgICAgXCJDSVJDVUlUXCIsXHJcbiAgICAgICAgXCJDTElNQkVSXCIsXHJcbiAgICAgICAgXCJDT0xMRUdFXCIsXHJcbiAgICAgICAgXCJDT01CSU5FXCIsXHJcbiAgICAgICAgXCJDT01GT1JUXCIsXHJcbiAgICAgICAgXCJDT01QQU5ZXCIsXHJcbiAgICAgICAgXCJDT01QTEVYXCIsXHJcbiAgICAgICAgXCJDT05DRVBUXCIsXHJcbiAgICAgICAgXCJDT05UT1VSXCIsXHJcbiAgICAgICAgXCJDT05UUk9MXCIsXHJcbiAgICAgICAgXCJDT09LSU5HXCIsXHJcbiAgICAgICAgXCJDT1VOVFJZXCIsXHJcbiAgICAgICAgXCJDUkVFUEVSXCIsXHJcbiAgICAgICAgXCJDVU5OSU5HXCIsXHJcbiAgICAgICAgXCJDVVJSRU5UXCIsXHJcbiAgICAgICAgXCJDVVJUQUlOXCIsXHJcbiAgICAgICAgXCJDVVNISU9OXCIsXHJcbiAgICAgICAgXCJDVVNUT01TXCIsXHJcbiAgICAgICAgXCJEQU1QSU5HXCIsXHJcbiAgICAgICAgXCJEQU5DSU5HXCIsXHJcbiAgICAgICAgXCJERU5TSVRZXCIsXHJcbiAgICAgICAgXCJERVBPU0lUXCIsXHJcbiAgICAgICAgXCJESVNFQVNFXCIsXHJcbiAgICAgICAgXCJESVNHVVNUXCIsXHJcbiAgICAgICAgXCJESVNMSUtFXCIsXHJcbiAgICAgICAgXCJESVZJU09SXCIsXHJcbiAgICAgICAgXCJESVZPUkNFXCIsXHJcbiAgICAgICAgXCJEUklWSU5HXCIsXHJcbiAgICAgICAgXCJEUk9QUEVEXCIsXHJcbiAgICAgICAgXCJEUk9QUEVSXCIsXHJcbiAgICAgICAgXCJFQVJSSU5HXCIsXHJcbiAgICAgICAgXCJFQ09OT01ZXCIsXHJcbiAgICAgICAgXCJFTEFTVElDXCIsXHJcbiAgICAgICAgXCJFTUJBU1NZXCIsXHJcbiAgICAgICAgXCJFUk9TSU9OXCIsXHJcbiAgICAgICAgXCJFVkVOSU5HXCIsXHJcbiAgICAgICAgXCJFWEFNUExFXCIsXHJcbiAgICAgICAgXCJFWUVCQUxMXCIsXHJcbiAgICAgICAgXCJFWUVCUk9XXCIsXHJcbiAgICAgICAgXCJFWUVMQVNIXCIsXHJcbiAgICAgICAgXCJGQUlMVVJFXCIsXHJcbiAgICAgICAgXCJGRUFUSEVSXCIsXHJcbiAgICAgICAgXCJGRUVMSU5HXCIsXHJcbiAgICAgICAgXCJGRVJNRU5UXCIsXHJcbiAgICAgICAgXCJGRVJUSUxFXCIsXHJcbiAgICAgICAgXCJGSUNUSU9OXCIsXHJcbiAgICAgICAgXCJGSUZURUVOXCIsXHJcbiAgICAgICAgXCJGSVJFQVJNXCIsXHJcbiAgICAgICAgXCJGSVJFRkxZXCIsXHJcbiAgICAgICAgXCJGSVJFTUFOXCIsXHJcbiAgICAgICAgXCJGT09MSVNIXCIsXHJcbiAgICAgICAgXCJGT09UTUFOXCIsXHJcbiAgICAgICAgXCJGT1JFSUdOXCIsXHJcbiAgICAgICAgXCJGT1JXQVJEXCIsXHJcbiAgICAgICAgXCJGVVJOQUNFXCIsXHJcbiAgICAgICAgXCJHRU5FUkFMXCIsXHJcbiAgICAgICAgXCJHRU9MT0dZXCIsXHJcbiAgICAgICAgXCJHTEFDSUVSXCIsXHJcbiAgICAgICAgXCJHUkFUSU5HXCIsXHJcbiAgICAgICAgXCJHUk9DRVJZXCIsXHJcbiAgICAgICAgXCJHVU5CT0FUXCIsXHJcbiAgICAgICAgXCJIQU5HSU5HXCIsXHJcbiAgICAgICAgXCJIQVJNT05ZXCIsXHJcbiAgICAgICAgXCJIRUFEV0FZXCIsXHJcbiAgICAgICAgXCJIRUFMVEhZXCIsXHJcbiAgICAgICAgXCJIRUFSSU5HXCIsXHJcbiAgICAgICAgXCJIRUFUSU5HXCIsXHJcbiAgICAgICAgXCJISUdIV0FZXCIsXHJcbiAgICAgICAgXCJISU1TRUxGXCIsXHJcbiAgICAgICAgXCJISVNUT1JZXCIsXHJcbiAgICAgICAgXCJIT0xJREFZXCIsXHJcbiAgICAgICAgXCJIT1dFVkVSXCIsXHJcbiAgICAgICAgXCJIVU5EUkVEXCIsXHJcbiAgICAgICAgXCJIVVNCQU5EXCIsXHJcbiAgICAgICAgXCJIWUdJRU5FXCIsXHJcbiAgICAgICAgXCJJR05FT1VTXCIsXHJcbiAgICAgICAgXCJJTVBVTFNFXCIsXHJcbiAgICAgICAgXCJJTkRPT1JTXCIsXHJcbiAgICAgICAgXCJJTkZFUk5PXCIsXHJcbiAgICAgICAgXCJJTlRFR0VSXCIsXHJcbiAgICAgICAgXCJJTlZFUlNFXCIsXHJcbiAgICAgICAgXCJKQU5VQVJZXCIsXHJcbiAgICAgICAgXCJKRUFMT1VTXCIsXHJcbiAgICAgICAgXCJKRVdFTEVSXCIsXHJcbiAgICAgICAgXCJKT1VSTkVZXCIsXHJcbiAgICAgICAgXCJKVVNUSUNFXCIsXHJcbiAgICAgICAgXCJLSVRDSEVOXCIsXHJcbiAgICAgICAgXCJMRUFSTkVSXCIsXHJcbiAgICAgICAgXCJMRUFUSEVSXCIsXHJcbiAgICAgICAgXCJMRUNUVVJFXCIsXHJcbiAgICAgICAgXCJMSUJSQVJZXCIsXHJcbiAgICAgICAgXCJMSUNFTlNFXCIsXHJcbiAgICAgICAgXCJMSVFVRVVSXCIsXHJcbiAgICAgICAgXCJMT0NLSU5HXCIsXHJcbiAgICAgICAgXCJNQUNISU5FXCIsXHJcbiAgICAgICAgXCJNQUxBUklBXCIsXHJcbiAgICAgICAgXCJNQU5BR0VSXCIsXHJcbiAgICAgICAgXCJNQU5IT0xFXCIsXHJcbiAgICAgICAgXCJNQVJSSUVEXCIsXHJcbiAgICAgICAgXCJNRUFOSU5HXCIsXHJcbiAgICAgICAgXCJNRUFTVVJFXCIsXHJcbiAgICAgICAgXCJNRURJQ0FMXCIsXHJcbiAgICAgICAgXCJNRUVUSU5HXCIsXHJcbiAgICAgICAgXCJNRVNTQUdFXCIsXHJcbiAgICAgICAgXCJNSUxMSU9OXCIsXHJcbiAgICAgICAgXCJNSU5FUkFMXCIsXHJcbiAgICAgICAgXCJNSVhUVVJFXCIsXHJcbiAgICAgICAgXCJNT1JOSU5HXCIsXHJcbiAgICAgICAgXCJOQVRVUkFMXCIsXHJcbiAgICAgICAgXCJORUdMRUNUXCIsXHJcbiAgICAgICAgXCJORVRXT1JLXCIsXHJcbiAgICAgICAgXCJORVVUUk9OXCIsXHJcbiAgICAgICAgXCJOT1NUUklMXCIsXHJcbiAgICAgICAgXCJOT1RISU5HXCIsXHJcbiAgICAgICAgXCJOT1dIRVJFXCIsXHJcbiAgICAgICAgXCJOVUNMRVVTXCIsXHJcbiAgICAgICAgXCJPQ1RPQkVSXCIsXHJcbiAgICAgICAgXCJPRkZJQ0VSXCIsXHJcbiAgICAgICAgXCJPTkVTRUxGXCIsXHJcbiAgICAgICAgXCJPUElOSU9OXCIsXHJcbiAgICAgICAgXCJPVVRDT01FXCIsXHJcbiAgICAgICAgXCJPVVRDUk9QXCIsXHJcbiAgICAgICAgXCJPVVRET09SXCIsXHJcbiAgICAgICAgXCJPVVRMSUVSXCIsXHJcbiAgICAgICAgXCJPVVRMSU5FXCIsXHJcbiAgICAgICAgXCJPVVRMT09LXCIsXHJcbiAgICAgICAgXCJPVVRTSURFXCIsXHJcbiAgICAgICAgXCJPVkVSQUxMXCIsXHJcbiAgICAgICAgXCJPVkVSTEFQXCIsXHJcbiAgICAgICAgXCJPVkVSVVNFXCIsXHJcbiAgICAgICAgXCJQQUNLSU5HXCIsXHJcbiAgICAgICAgXCJQQUlOVEVSXCIsXHJcbiAgICAgICAgXCJQQUpBTUFTXCIsXHJcbiAgICAgICAgXCJQQVJUSU5HXCIsXHJcbiAgICAgICAgXCJQQVJUTkVSXCIsXHJcbiAgICAgICAgXCJQQVNTQUdFXCIsXHJcbiAgICAgICAgXCJQQVlNRU5UXCIsXHJcbiAgICAgICAgXCJQRU5HVUlOXCIsXHJcbiAgICAgICAgXCJQRU5TSU9OXCIsXHJcbiAgICAgICAgXCJQRVJGRUNUXCIsXHJcbiAgICAgICAgXCJQSFlTSUNTXCIsXHJcbiAgICAgICAgXCJQSUNUVVJFXCIsXHJcbiAgICAgICAgXCJQTEFTVEVSXCIsXHJcbiAgICAgICAgXCJQTEFZSU5HXCIsXHJcbiAgICAgICAgXCJQTEVBU0VEXCIsXHJcbiAgICAgICAgXCJQT0lOVEVSXCIsXHJcbiAgICAgICAgXCJQT1NUTUFOXCIsXHJcbiAgICAgICAgXCJQUkVTRU5UXCIsXHJcbiAgICAgICAgXCJQUklOVEVSXCIsXHJcbiAgICAgICAgXCJQUklWQVRFXCIsXHJcbiAgICAgICAgXCJQUk9DRVNTXCIsXHJcbiAgICAgICAgXCJQUk9EVUNFXCIsXHJcbiAgICAgICAgXCJQUk9EVUNUXCIsXHJcbiAgICAgICAgXCJQUk9HUkFNXCIsXHJcbiAgICAgICAgXCJQUk9NSVNFXCIsXHJcbiAgICAgICAgXCJQUk9URVNUXCIsXHJcbiAgICAgICAgXCJQVVJQT1NFXCIsXHJcbiAgICAgICAgXCJQWVJBTUlEXCIsXHJcbiAgICAgICAgXCJRVUFMSVRZXCIsXHJcbiAgICAgICAgXCJRVUFSVEVSXCIsXHJcbiAgICAgICAgXCJRVUlOSU5FXCIsXHJcbiAgICAgICAgXCJSQUlOSU5HXCIsXHJcbiAgICAgICAgXCJSRUFESU5HXCIsXHJcbiAgICAgICAgXCJSRUFHRU5UXCIsXHJcbiAgICAgICAgXCJSRUNFSVBUXCIsXHJcbiAgICAgICAgXCJSRUdVTEFSXCIsXHJcbiAgICAgICAgXCJSRVFVRVNUXCIsXHJcbiAgICAgICAgXCJSRVNJRFVFXCIsXHJcbiAgICAgICAgXCJSRVNQRUNUXCIsXHJcbiAgICAgICAgXCJSRVZFTkdFXCIsXHJcbiAgICAgICAgXCJSVU5BV0FZXCIsXHJcbiAgICAgICAgXCJTQVJESU5FXCIsXHJcbiAgICAgICAgXCJTQ0lFTkNFXCIsXHJcbiAgICAgICAgXCJTQ1JBVENIXCIsXHJcbiAgICAgICAgXCJTRUNUSU9OXCIsXHJcbiAgICAgICAgXCJTRUxGSVNIXCIsXHJcbiAgICAgICAgXCJTRVJJT1VTXCIsXHJcbiAgICAgICAgXCJTRVJWQU5UXCIsXHJcbiAgICAgICAgXCJTRVJWSUNFXCIsXHJcbiAgICAgICAgXCJTSE9DS0VEXCIsXHJcbiAgICAgICAgXCJTSVhURUVOXCIsXHJcbiAgICAgICAgXCJTTk9XSU5HXCIsXHJcbiAgICAgICAgXCJTT0NJRVRZXCIsXHJcbiAgICAgICAgXCJTT0xESUVSXCIsXHJcbiAgICAgICAgXCJTT0xWRU5UXCIsXHJcbiAgICAgICAgXCJTT01FREFZXCIsXHJcbiAgICAgICAgXCJTT01FSE9XXCIsXHJcbiAgICAgICAgXCJTT01FT05FXCIsXHJcbiAgICAgICAgXCJTUEVDSUFMXCIsXHJcbiAgICAgICAgXCJTVEFUSU9OXCIsXHJcbiAgICAgICAgXCJTVEVBTUVSXCIsXHJcbiAgICAgICAgXCJTVE9NQUNIXCIsXHJcbiAgICAgICAgXCJTVE9QUEVSXCIsXHJcbiAgICAgICAgXCJTVFJBTkdFXCIsXHJcbiAgICAgICAgXCJTVFJFVENIXCIsXHJcbiAgICAgICAgXCJTVUJKRUNUXCIsXHJcbiAgICAgICAgXCJTVUNDRVNTXCIsXHJcbiAgICAgICAgXCJTVU5CVVJOXCIsXHJcbiAgICAgICAgXCJTVVBQT1JUXCIsXHJcbiAgICAgICAgXCJTVVJGQUNFXCIsXHJcbiAgICAgICAgXCJTVVJHRU9OXCIsXHJcbiAgICAgICAgXCJUQUxLSU5HXCIsXHJcbiAgICAgICAgXCJUQVBJT0NBXCIsXHJcbiAgICAgICAgXCJURUFDSEVSXCIsXHJcbiAgICAgICAgXCJURVJSQUNFXCIsXHJcbiAgICAgICAgXCJURVhUVVJFXCIsXHJcbiAgICAgICAgXCJUSEVBVEVSXCIsXHJcbiAgICAgICAgXCJUSElNQkxFXCIsXHJcbiAgICAgICAgXCJUSE9VR0hUXCIsXHJcbiAgICAgICAgXCJUSFJPVUdIXCIsXHJcbiAgICAgICAgXCJUSFVOREVSXCIsXHJcbiAgICAgICAgXCJUT0JBQ0NPXCIsXHJcbiAgICAgICAgXCJUT05JR0hUXCIsXHJcbiAgICAgICAgXCJUT1JQRURPXCIsXHJcbiAgICAgICAgXCJUUkFGRklDXCIsXHJcbiAgICAgICAgXCJUUkFHRURZXCIsXHJcbiAgICAgICAgXCJUUkFJTkVSXCIsXHJcbiAgICAgICAgXCJUUk9VQkxFXCIsXHJcbiAgICAgICAgXCJUVUVTREFZXCIsXHJcbiAgICAgICAgXCJUVVJCSU5FXCIsXHJcbiAgICAgICAgXCJUVVJOSU5HXCIsXHJcbiAgICAgICAgXCJVTkRFUkdPXCIsXHJcbiAgICAgICAgXCJVTktOT1dOXCIsXHJcbiAgICAgICAgXCJVUFJJR0hUXCIsXHJcbiAgICAgICAgXCJWQUxFTkNZXCIsXHJcbiAgICAgICAgXCJWQU5JTExBXCIsXHJcbiAgICAgICAgXCJWSUNUT1JZXCIsXHJcbiAgICAgICAgXCJWSU9MRU5UXCIsXHJcbiAgICAgICAgXCJWSVRBTUlOXCIsXHJcbiAgICAgICAgXCJXQUlUSU5HXCIsXHJcbiAgICAgICAgXCJXRUFUSEVSXCIsXHJcbiAgICAgICAgXCJXRUVLRU5EXCIsXHJcbiAgICAgICAgXCJXRUxDT01FXCIsXHJcbiAgICAgICAgXCJXSEVSRUFTXCIsXHJcbiAgICAgICAgXCJXSEVSRUJZXCIsXHJcbiAgICAgICAgXCJXSEVUSEVSXCIsXHJcbiAgICAgICAgXCJXSElTVExFXCIsXHJcbiAgICAgICAgXCJXSE9FVkVSXCIsXHJcbiAgICAgICAgXCJXSVRIT1VUXCIsXHJcbiAgICAgICAgXCJXT1JLSU5HXCIsXHJcbiAgICAgICAgXCJXUklUSU5HXCIsXHJcbiAgICAgICAgXCJaT09MT0dZXCIsXHJcbiAgICBdLFxyXG4gICAgW1xyXG4gICAgICAgIFwiQUNDSURFTlRcIixcclxuICAgICAgICBcIkFERElUSU9OXCIsXHJcbiAgICAgICAgXCJBREpBQ0VOVFwiLFxyXG4gICAgICAgIFwiQUlSUExBTkVcIixcclxuICAgICAgICBcIkFNQklUSU9OXCIsXHJcbiAgICAgICAgXCJBTllUSElOR1wiLFxyXG4gICAgICAgIFwiQU5ZV0hFUkVcIixcclxuICAgICAgICBcIkFQUFJPVkFMXCIsXHJcbiAgICAgICAgXCJBUkdVTUVOVFwiLFxyXG4gICAgICAgIFwiQVNCRVNUT1NcIixcclxuICAgICAgICBcIkJBQ0tCT05FXCIsXHJcbiAgICAgICAgXCJCQU5LUlVQVFwiLFxyXG4gICAgICAgIFwiQkVIQVZJT1JcIixcclxuICAgICAgICBcIkJJUlRIREFZXCIsXHJcbiAgICAgICAgXCJCTFVFQkVMTFwiLFxyXG4gICAgICAgIFwiQlVJTERJTkdcIixcclxuICAgICAgICBcIkJVT1lBTkNZXCIsXHJcbiAgICAgICAgXCJCVVNJTkVTU1wiLFxyXG4gICAgICAgIFwiQ0FMRU5EQVJcIixcclxuICAgICAgICBcIkNBUEFDSVRZXCIsXHJcbiAgICAgICAgXCJDQVJFRlJFRVwiLFxyXG4gICAgICAgIFwiQ0FSUklBR0VcIixcclxuICAgICAgICBcIkNFUkVNT05ZXCIsXHJcbiAgICAgICAgXCJDSEVNSUNBTFwiLFxyXG4gICAgICAgIFwiQ0xFQVZBR0VcIixcclxuICAgICAgICBcIkNMT1RISUVSXCIsXHJcbiAgICAgICAgXCJDTE9USElOR1wiLFxyXG4gICAgICAgIFwiQ09DS1RBSUxcIixcclxuICAgICAgICBcIkNPTVBMRVRFXCIsXHJcbiAgICAgICAgXCJDT01QT1VORFwiLFxyXG4gICAgICAgIFwiQ09OQ1JFVEVcIixcclxuICAgICAgICBcIkNPTlNUQU5UXCIsXHJcbiAgICAgICAgXCJDT05TVU1FUlwiLFxyXG4gICAgICAgIFwiQ1VQQk9BUkRcIixcclxuICAgICAgICBcIkRBVUdIVEVSXCIsXHJcbiAgICAgICAgXCJEQVlMSUdIVFwiLFxyXG4gICAgICAgIFwiREVDRU1CRVJcIixcclxuICAgICAgICBcIkRFQ0lTSU9OXCIsXHJcbiAgICAgICAgXCJERUNSRUFTRVwiLFxyXG4gICAgICAgIFwiREVMSUNBVEVcIixcclxuICAgICAgICBcIkRFTElWRVJZXCIsXHJcbiAgICAgICAgXCJERVNJR05FUlwiLFxyXG4gICAgICAgIFwiRElBTUVURVJcIixcclxuICAgICAgICBcIkRJTFVUSU9OXCIsXHJcbiAgICAgICAgXCJESVNDT1VOVFwiLFxyXG4gICAgICAgIFwiRElTR1JBQ0VcIixcclxuICAgICAgICBcIkRJU1RBTkNFXCIsXHJcbiAgICAgICAgXCJESVZJU0lPTlwiLFxyXG4gICAgICAgIFwiRE9NSU5JT05cIixcclxuICAgICAgICBcIkRPV05GQUxMXCIsXHJcbiAgICAgICAgXCJEUkVBREZVTFwiLFxyXG4gICAgICAgIFwiRFJFU1NJTkdcIixcclxuICAgICAgICBcIkRZTkFNSVRFXCIsXHJcbiAgICAgICAgXCJFTEVDVFJJQ1wiLFxyXG4gICAgICAgIFwiRU1QTE9ZRVJcIixcclxuICAgICAgICBcIkVOR0lORUVSXCIsXHJcbiAgICAgICAgXCJFTlZFTE9QRVwiLFxyXG4gICAgICAgIFwiRVFVQVRJT05cIixcclxuICAgICAgICBcIkVSVVBUSU9OXCIsXHJcbiAgICAgICAgXCJFVkVSWURBWVwiLFxyXG4gICAgICAgIFwiRVZFUllPTkVcIixcclxuICAgICAgICBcIkVYQ0hBTkdFXCIsXHJcbiAgICAgICAgXCJFWEVSQ0lTRVwiLFxyXG4gICAgICAgIFwiRkVCUlVBUllcIixcclxuICAgICAgICBcIkZJUkVXT1JLXCIsXHJcbiAgICAgICAgXCJGT09UQkFMTFwiLFxyXG4gICAgICAgIFwiRk9PVE5PVEVcIixcclxuICAgICAgICBcIkZPT1RTVEVQXCIsXHJcbiAgICAgICAgXCJGT1JFQ0FTVFwiLFxyXG4gICAgICAgIFwiRk9SRUhFQURcIixcclxuICAgICAgICBcIkZPVVJURUVOXCIsXHJcbiAgICAgICAgXCJGUkFDVElPTlwiLFxyXG4gICAgICAgIFwiRlJBQ1RVUkVcIixcclxuICAgICAgICBcIkZSRVFVRU5UXCIsXHJcbiAgICAgICAgXCJGUklDVElPTlwiLFxyXG4gICAgICAgIFwiR0FSREVORVJcIixcclxuICAgICAgICBcIkdBU1dPUktTXCIsXHJcbiAgICAgICAgXCJHRU9NRVRSWVwiLFxyXG4gICAgICAgIFwiR0xZQ0VSSU5cIixcclxuICAgICAgICBcIkdPTERGSVNIXCIsXHJcbiAgICAgICAgXCJHUkFURUZVTFwiLFxyXG4gICAgICAgIFwiR1VOTUVUQUxcIixcclxuICAgICAgICBcIkhBTkRCT09LXCIsXHJcbiAgICAgICAgXCJIRUFETEFORFwiLFxyXG4gICAgICAgIFwiSEVSRVdJVEhcIixcclxuICAgICAgICBcIkhPU1BJVEFMXCIsXHJcbiAgICAgICAgXCJIWVNURVJJQVwiLFxyXG4gICAgICAgIFwiSU1QRVJJQUxcIixcclxuICAgICAgICBcIklNUFVSSVRZXCIsXHJcbiAgICAgICAgXCJJTkFTTVVDSFwiLFxyXG4gICAgICAgIFwiSU5DUkVBU0VcIixcclxuICAgICAgICBcIklORFVTVFJZXCIsXHJcbiAgICAgICAgXCJJTkZJTklUWVwiLFxyXG4gICAgICAgIFwiSU5OT0NFTlRcIixcclxuICAgICAgICBcIklOVEVSRVNUXCIsXHJcbiAgICAgICAgXCJMQU5ETUFSS1wiLFxyXG4gICAgICAgIFwiTEFORFNMSVBcIixcclxuICAgICAgICBcIkxBTkdVQUdFXCIsXHJcbiAgICAgICAgXCJMQVRJVFVERVwiLFxyXG4gICAgICAgIFwiTEFVR0hJTkdcIixcclxuICAgICAgICBcIkxFQVJOSU5HXCIsXHJcbiAgICAgICAgXCJNQUNBUk9OSVwiLFxyXG4gICAgICAgIFwiTUFHTkVUSUNcIixcclxuICAgICAgICBcIk1BUlJJQUdFXCIsXHJcbiAgICAgICAgXCJNQVRFUklBTFwiLFxyXG4gICAgICAgIFwiTUFUVFJFU1NcIixcclxuICAgICAgICBcIk1FRElDSU5FXCIsXHJcbiAgICAgICAgXCJNSUxJVEFSWVwiLFxyXG4gICAgICAgIFwiTU9NRU5UVU1cIixcclxuICAgICAgICBcIk1PTk9QT0xZXCIsXHJcbiAgICAgICAgXCJNT1VOVEFJTlwiLFxyXG4gICAgICAgIFwiTVVMVElQTEVcIixcclxuICAgICAgICBcIk5FSUdIQk9SXCIsXHJcbiAgICAgICAgXCJOSUNPVElORVwiLFxyXG4gICAgICAgIFwiTk9WRU1CRVJcIixcclxuICAgICAgICBcIk9CRURJRU5UXCIsXHJcbiAgICAgICAgXCJPTkNPTUlOR1wiLFxyXG4gICAgICAgIFwiT05MT09LRVJcIixcclxuICAgICAgICBcIk9QUE9TSVRFXCIsXHJcbiAgICAgICAgXCJPUkdBTklTTVwiLFxyXG4gICAgICAgIFwiT1JOQU1FTlRcIixcclxuICAgICAgICBcIk9VVEJVUlNUXCIsXHJcbiAgICAgICAgXCJPVVRHT0lOR1wiLFxyXG4gICAgICAgIFwiT1VUSE9VU0VcIixcclxuICAgICAgICBcIk9WRVJDT0FUXCIsXHJcbiAgICAgICAgXCJPVkVSQ09NRVwiLFxyXG4gICAgICAgIFwiT1ZFUkZVTExcIixcclxuICAgICAgICBcIk9WRVJIRUFEXCIsXHJcbiAgICAgICAgXCJPVkVSTEFORFwiLFxyXG4gICAgICAgIFwiT1ZFUkxFQUZcIixcclxuICAgICAgICBcIk9WRVJMT1VEXCIsXHJcbiAgICAgICAgXCJPVkVSU0VBU1wiLFxyXG4gICAgICAgIFwiT1ZFUlNFRVJcIixcclxuICAgICAgICBcIk9WRVJTSE9FXCIsXHJcbiAgICAgICAgXCJPVkVSVEFLRVwiLFxyXG4gICAgICAgIFwiT1ZFUlRJTUVcIixcclxuICAgICAgICBcIlBBSU5USU5HXCIsXHJcbiAgICAgICAgXCJQQVJBRElTRVwiLFxyXG4gICAgICAgIFwiUEFSQUZGSU5cIixcclxuICAgICAgICBcIlBBUkFMTEVMXCIsXHJcbiAgICAgICAgXCJQQVJUSUNMRVwiLFxyXG4gICAgICAgIFwiUEFTU1BPUlRcIixcclxuICAgICAgICBcIlBBVElFTkNFXCIsXHJcbiAgICAgICAgXCJQRU5EVUxVTVwiLFxyXG4gICAgICAgIFwiUEhZU0lDQUxcIixcclxuICAgICAgICBcIlBMQVRJTlVNXCIsXHJcbiAgICAgICAgXCJQTEVBU1VSRVwiLFxyXG4gICAgICAgIFwiUE9JTlRJTkdcIixcclxuICAgICAgICBcIlBPU0lUSU9OXCIsXHJcbiAgICAgICAgXCJQT1NTSUJMRVwiLFxyXG4gICAgICAgIFwiUE9TVE1BUktcIixcclxuICAgICAgICBcIlBSQUNUSUNFXCIsXHJcbiAgICAgICAgXCJQUkVTU1VSRVwiLFxyXG4gICAgICAgIFwiUFJJTkNFU1NcIixcclxuICAgICAgICBcIlBSSVNPTkVSXCIsXHJcbiAgICAgICAgXCJQUk9CQUJMRVwiLFxyXG4gICAgICAgIFwiUFJPRFVDRVJcIixcclxuICAgICAgICBcIlBST0dSRVNTXCIsXHJcbiAgICAgICAgXCJQUk9QRVJUWVwiLFxyXG4gICAgICAgIFwiUFVSQ0hBU0VcIixcclxuICAgICAgICBcIlFVQU5USVRZXCIsXHJcbiAgICAgICAgXCJRVUVTVElPTlwiLFxyXG4gICAgICAgIFwiUVVPVElFTlRcIixcclxuICAgICAgICBcIlJFQUNUSU9OXCIsXHJcbiAgICAgICAgXCJSRUNFSVZFUlwiLFxyXG4gICAgICAgIFwiUkVMQVRJT05cIixcclxuICAgICAgICBcIlJFTEFUSVZFXCIsXHJcbiAgICAgICAgXCJSRUxJR0lPTlwiLFxyXG4gICAgICAgIFwiUklHSURJVFlcIixcclxuICAgICAgICBcIlJPVEFUSU9OXCIsXHJcbiAgICAgICAgXCJTQVRVUkRBWVwiLFxyXG4gICAgICAgIFwiU0NJU1NPUlNcIixcclxuICAgICAgICBcIlNFQ1VSSVRZXCIsXHJcbiAgICAgICAgXCJTRU5URU5DRVwiLFxyXG4gICAgICAgIFwiU0VQQVJBVEVcIixcclxuICAgICAgICBcIlNIT0NLSU5HXCIsXHJcbiAgICAgICAgXCJTSE9VTERFUlwiLFxyXG4gICAgICAgIFwiU0lERVdBTEtcIixcclxuICAgICAgICBcIlNPTFVUSU9OXCIsXHJcbiAgICAgICAgXCJTT01FQk9EWVwiLFxyXG4gICAgICAgIFwiU09NRVRJTUVcIixcclxuICAgICAgICBcIlNPTUVXSEFUXCIsXHJcbiAgICAgICAgXCJTUEVDSU1FTlwiLFxyXG4gICAgICAgIFwiU1RJTVVMVVNcIixcclxuICAgICAgICBcIlNUT0NLSU5HXCIsXHJcbiAgICAgICAgXCJTVE9QUElOR1wiLFxyXG4gICAgICAgIFwiU1RSQUlHSFRcIixcclxuICAgICAgICBcIlNUUkVOR1RIXCIsXHJcbiAgICAgICAgXCJTVUNITElLRVwiLFxyXG4gICAgICAgIFwiU1VOTElHSFRcIixcclxuICAgICAgICBcIlNVTlNIQURFXCIsXHJcbiAgICAgICAgXCJTVVJQUklTRVwiLFxyXG4gICAgICAgIFwiU1dFTExJTkdcIixcclxuICAgICAgICBcIlRFQUNISU5HXCIsXHJcbiAgICAgICAgXCJURUxFR1JBTVwiLFxyXG4gICAgICAgIFwiVEVOREVOQ1lcIixcclxuICAgICAgICBcIlRISVJURUVOXCIsXHJcbiAgICAgICAgXCJUSE9VU0FORFwiLFxyXG4gICAgICAgIFwiVEhVUlNEQVlcIixcclxuICAgICAgICBcIlRPR0VUSEVSXCIsXHJcbiAgICAgICAgXCJUT01PUlJPV1wiLFxyXG4gICAgICAgIFwiVE9VQ0hJTkdcIixcclxuICAgICAgICBcIlRSQUlOSU5HXCIsXHJcbiAgICAgICAgXCJUUklBTkdMRVwiLFxyXG4gICAgICAgIFwiVFJPVUJMRURcIixcclxuICAgICAgICBcIlRST1VTRVJTXCIsXHJcbiAgICAgICAgXCJVTUJSRUxMQVwiLFxyXG4gICAgICAgIFwiVU5JVkVSU0VcIixcclxuICAgICAgICBcIlZBUklBQkxFXCIsXHJcbiAgICAgICAgXCJWQVNDVUxBUlwiLFxyXG4gICAgICAgIFwiVkVMT0NJVFlcIixcclxuICAgICAgICBcIldIQVRFVkVSXCIsXHJcbiAgICAgICAgXCJXSEVORVZFUlwiLFxyXG4gICAgICAgIFwiV0hFUkVWRVJcIixcclxuICAgICAgICBcIldJTkRQSVBFXCIsXHJcbiAgICAgICAgXCJXT09EV09SS1wiLFxyXG4gICAgICAgIFwiWUVBUkJPT0tcIixcclxuICAgICAgICBcIllPVVJTRUxGXCIsXHJcbiAgICBdLFxyXG4gICAgW1xyXG4gICAgICAgIFwiQUNDRVNTT1JZXCIsXHJcbiAgICAgICAgXCJBRFZFTlRVUkVcIixcclxuICAgICAgICBcIkFHUkVFTUVOVFwiLFxyXG4gICAgICAgIFwiQUxMT1dBTkNFXCIsXHJcbiAgICAgICAgXCJBTFVNSU5JVU1cIixcclxuICAgICAgICBcIkFNUExJVFVERVwiLFxyXG4gICAgICAgIFwiQU1VU0VNRU5UXCIsXHJcbiAgICAgICAgXCJBUFBBUkFUVVNcIixcclxuICAgICAgICBcIkFQUEVOREFHRVwiLFxyXG4gICAgICAgIFwiQVJCSVRSQVJZXCIsXHJcbiAgICAgICAgXCJBU1NJU1RBTlRcIixcclxuICAgICAgICBcIkFUVEVOVElPTlwiLFxyXG4gICAgICAgIFwiQVVUSE9SSVRZXCIsXHJcbiAgICAgICAgXCJBVVRPTUFUSUNcIixcclxuICAgICAgICBcIkJBQ0tXT09EU1wiLFxyXG4gICAgICAgIFwiQkVBVVRJRlVMXCIsXHJcbiAgICAgICAgXCJCTEFDS0JJUkRcIixcclxuICAgICAgICBcIkJSRUFLRkFTVFwiLFxyXG4gICAgICAgIFwiQlJVU0hXT09EXCIsXHJcbiAgICAgICAgXCJCVVRURVJDVVBcIixcclxuICAgICAgICBcIkNBUkRCT0FSRFwiLFxyXG4gICAgICAgIFwiQ0FSRVRBS0VSXCIsXHJcbiAgICAgICAgXCJDQVJUSUxBR0VcIixcclxuICAgICAgICBcIkNIQU1QQUdORVwiLFxyXG4gICAgICAgIFwiQ0hBUkFDVEVSXCIsXHJcbiAgICAgICAgXCJDSEFVRkZFVVJcIixcclxuICAgICAgICBcIkNIRU1JU1RSWVwiLFxyXG4gICAgICAgIFwiQ0hPQ09MQVRFXCIsXHJcbiAgICAgICAgXCJDSUdBUkVUVEVcIixcclxuICAgICAgICBcIkNMT0NLV09SS1wiLFxyXG4gICAgICAgIFwiQ09MTElTSU9OXCIsXHJcbiAgICAgICAgXCJDT01NSVRURUVcIixcclxuICAgICAgICBcIkNPTVBMQUlOVFwiLFxyXG4gICAgICAgIFwiQ09NUE9ORU5UXCIsXHJcbiAgICAgICAgXCJDT05ESVRJT05cIixcclxuICAgICAgICBcIkNPTkRVQ1RPUlwiLFxyXG4gICAgICAgIFwiQ09OR1JVRU5UXCIsXHJcbiAgICAgICAgXCJDT05TQ0lPVVNcIixcclxuICAgICAgICBcIkNPUFlSSUdIVFwiLFxyXG4gICAgICAgIFwiQ09SUk9TSU9OXCIsXHJcbiAgICAgICAgXCJERUZMQVRJT05cIixcclxuICAgICAgICBcIkRFUEVOREVOVFwiLFxyXG4gICAgICAgIFwiRElGRkVSRU5UXCIsXHJcbiAgICAgICAgXCJESUdFU1RJT05cIixcclxuICAgICAgICBcIkRJUkVDVElPTlwiLFxyXG4gICAgICAgIFwiRElTQ0hBUkdFXCIsXHJcbiAgICAgICAgXCJESVNDT1ZFUllcIixcclxuICAgICAgICBcIkVBUlRIV09SS1wiLFxyXG4gICAgICAgIFwiRURVQ0FUSU9OXCIsXHJcbiAgICAgICAgXCJFVkVSR1JFRU5cIixcclxuICAgICAgICBcIkVWRVJZQk9EWVwiLFxyXG4gICAgICAgIFwiRVhJU1RFTkNFXCIsXHJcbiAgICAgICAgXCJFWFBBTlNJT05cIixcclxuICAgICAgICBcIkVYUExPU0lPTlwiLFxyXG4gICAgICAgIFwiRkFTVEVOSU5HXCIsXHJcbiAgICAgICAgXCJGSU5BTkNJQUxcIixcclxuICAgICAgICBcIkZJUkVQTEFDRVwiLFxyXG4gICAgICAgIFwiRklTSEVSTUFOXCIsXHJcbiAgICAgICAgXCJGT0xJQVRJT05cIixcclxuICAgICAgICBcIkZPT1RQUklOVFwiLFxyXG4gICAgICAgIFwiRlVSTklUVVJFXCIsXHJcbiAgICAgICAgXCJHRU9HUkFQSFlcIixcclxuICAgICAgICBcIkdPT0ROSUdIVFwiLFxyXG4gICAgICAgIFwiR1VBUkFOVEVFXCIsXHJcbiAgICAgICAgXCJHVU5QT1dERVJcIixcclxuICAgICAgICBcIkhFQUREUkVTU1wiLFxyXG4gICAgICAgIFwiSEVBRFNUT05FXCIsXHJcbiAgICAgICAgXCJIRVJFQUZURVJcIixcclxuICAgICAgICBcIkhJR0hMQU5EU1wiLFxyXG4gICAgICAgIFwiSE9SU0VQTEFZXCIsXHJcbiAgICAgICAgXCJIT1VSR0xBU1NcIixcclxuICAgICAgICBcIkhPVVNFQk9BVFwiLFxyXG4gICAgICAgIFwiSU1QT1JUQU5UXCIsXHJcbiAgICAgICAgXCJJTkNMVVNJT05cIixcclxuICAgICAgICBcIklORkxBVElPTlwiLFxyXG4gICAgICAgIFwiSU5GTFVFTlpBXCIsXHJcbiAgICAgICAgXCJJTlNVTEFUT1JcIixcclxuICAgICAgICBcIklOU1VSQU5DRVwiLFxyXG4gICAgICAgIFwiSU5URVJDRVBUXCIsXHJcbiAgICAgICAgXCJJTlRSVVNJT05cIixcclxuICAgICAgICBcIklOVkVOVElPTlwiLFxyXG4gICAgICAgIFwiS05PV0xFREdFXCIsXHJcbiAgICAgICAgXCJMSUFCSUxJVFlcIixcclxuICAgICAgICBcIkxJTUVTVE9ORVwiLFxyXG4gICAgICAgIFwiTE9OR0lUVURFXCIsXHJcbiAgICAgICAgXCJNQUdOSVRVREVcIixcclxuICAgICAgICBcIk1PVVNUQUNIRVwiLFxyXG4gICAgICAgIFwiTkVDRVNTQVJZXCIsXHJcbiAgICAgICAgXCJORVdTUEFQRVJcIixcclxuICAgICAgICBcIk5VTUVSQVRPUlwiLFxyXG4gICAgICAgIFwiT0ZGU1BSSU5HXCIsXHJcbiAgICAgICAgXCJPUEVSQVRJT05cIixcclxuICAgICAgICBcIk9SQ0hFU1RSQVwiLFxyXG4gICAgICAgIFwiT1VUU0tJUlRTXCIsXHJcbiAgICAgICAgXCJPVkVSVEFYRURcIixcclxuICAgICAgICBcIk9YSURBVElPTlwiLFxyXG4gICAgICAgIFwiUEFSQUdSQVBIXCIsXHJcbiAgICAgICAgXCJQRVRST0xFVU1cIixcclxuICAgICAgICBcIlBMQVlUSElOR1wiLFxyXG4gICAgICAgIFwiUE9MSUNFTUFOXCIsXHJcbiAgICAgICAgXCJQT0xJVElDQUxcIixcclxuICAgICAgICBcIlBPUkNFTEFJTlwiLFxyXG4gICAgICAgIFwiUFJFU0lERU5UXCIsXHJcbiAgICAgICAgXCJSQURJQVRJT05cIixcclxuICAgICAgICBcIlJFQ1RBTkdMRVwiLFxyXG4gICAgICAgIFwiUkVDVVJSSU5HXCIsXHJcbiAgICAgICAgXCJSRUZFUkVOQ0VcIixcclxuICAgICAgICBcIlJFUFVMU0lPTlwiLFxyXG4gICAgICAgIFwiU0FUVVJBVEVEXCIsXHJcbiAgICAgICAgXCJTRUNSRVRBUllcIixcclxuICAgICAgICBcIlNFQ1JFVElPTlwiLFxyXG4gICAgICAgIFwiU0VMRUNUSU9OXCIsXHJcbiAgICAgICAgXCJTRVBURU1CRVJcIixcclxuICAgICAgICBcIlNIT1JUSEFORFwiLFxyXG4gICAgICAgIFwiU0lERUJPQVJEXCIsXHJcbiAgICAgICAgXCJTT01FVEhJTkdcIixcclxuICAgICAgICBcIlNPTUVXSEVSRVwiLFxyXG4gICAgICAgIFwiU1RBVEVNRU5UXCIsXHJcbiAgICAgICAgXCJTVFJFVENIRVJcIixcclxuICAgICAgICBcIlNUUlVDVFVSRVwiLFxyXG4gICAgICAgIFwiU1VCU1RBTkNFXCIsXHJcbiAgICAgICAgXCJURUxFUEhPTkVcIixcclxuICAgICAgICBcIlRISUNLTkVTU1wiLFxyXG4gICAgICAgIFwiVFJBREVTTUFOXCIsXHJcbiAgICAgICAgXCJUUkFOU1BPUlRcIixcclxuICAgICAgICBcIlRSRUFUTUVOVFwiLFxyXG4gICAgICAgIFwiVFJPVUJMSU5HXCIsXHJcbiAgICAgICAgXCJVTkRFUlRBS0VcIixcclxuICAgICAgICBcIlZFR0VUQUJMRVwiLFxyXG4gICAgICAgIFwiVkVTVElHSUFMXCIsXHJcbiAgICAgICAgXCJWSUVXUE9JTlRcIixcclxuICAgICAgICBcIldBVEVSRkFMTFwiLFxyXG4gICAgICAgIFwiV0VETkVTREFZXCIsXHJcbiAgICAgICAgXCJXSElDSEVWRVJcIixcclxuICAgICAgICBcIldISVRFV0FTSFwiLFxyXG4gICAgICAgIFwiV0hPTEVTQUxFXCIsXHJcbiAgICAgICAgXCJXT1JLSE9VU0VcIixcclxuICAgICAgICBcIllFU1RFUkRBWVwiLFxyXG4gICAgICAgIFwiWk9PS0VFUEVSXCIsXHJcbiAgICBdLFxyXG5dO1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIFRPRE86XHJcbi8vIEF1dG8tc2F2ZSBldmVyeSAxMCBzZWNvbmRzXHJcbi8vIFByZXZlbnQgY2F0Y2h1cCBsYWcgYWZ0ZXIgdGFiLW91dFxyXG4vLyBBdXRvLWNhbGN1bGF0ZSB0cnVlIGF2ZXJhZ2UgYmFuYW5hcyBwZXIgd29yZFxyXG4vLyByZWNydWl0IG11bHRpcGxlIG1vbmtleXMgYXQgYSB0aW1lICgxMHgsIDEwMHgpXHJcbi8vIHVzZSBhIGJsaW5raW5nIHVuZGVybGluZSBhbmltYXRpb24gZm9yIHRoZSBuZXh0IGxldHRlciBvblxyXG4vLyAgICBhbnkgdGV4dCBkaXNwbGF5IC0gbGlrZSBhbiBvbGQgY29tbWFuZCBsaW5lXHJcbi8vIHZpc3VhbGx5IGluZGljYXRlIHRoZSBudW1iZXIgb2YgbGV0dGVycyB5b3VyIGtleWJvYXJkIGNhbiBmaXRcclxuLy8gb3B0aW1pemUgdGhlIGRpc3BsYXkgb2YgbWFueSB0ZXh0IGRpc3BsYXlzIGF0IG9uY2VcclxuLy8gZ29vZCwgYnV0IHNtYWxsLWlzaCB3b3JkIGxpc3Q6IGh0dHBzOi8vc2ltcGxlLndpa2lwZWRpYS5vcmcvd2lraS9XaWtpcGVkaWE6QmFzaWNfRW5nbGlzaF9jb21iaW5lZF93b3JkbGlzdFxyXG4vLyBzb3VyY2U6IGh0dHBzOi8vZW4ud2lrdGlvbmFyeS5vcmcvd2lraS9XaWt0aW9uYXJ5OkZyZXF1ZW5jeV9saXN0cyNUb3BfRW5nbGlzaF93b3Jkc19saXN0c1xyXG5cclxuLy8gbWFrZSBpdCBzbyB5b3UgY2FuJ3QgcHVsbCB0d28gb2YgdGhlIHNhbWUgd29yZHNcclxuLy8gc3RhcnQgdGhlIGdhbWUgd2l0aCBhIHJhbmRvbSB3b3JkXHJcbi8vIGRpc3BsYXkgdGhlIHBsYXllcidzIGRpY3Rpb25hcnkgdG8gdGhlbSBzb21laG93XHJcbi8vIHdvcmQgcGFydGljbGUgZWZmZWN0cz9cclxuXHJcbi8vIEhhdmUgdGV4dCBmaXQgd2l0aGluIHRoZSBib3VuZHMgb2YgdGhlIGJ1dHRvbnNcclxuLy8gVGhlIHNhdmUgc2hvdWxkIGJlIGVuY3J5cHRlZFxyXG4vLyBUaGUgZXJhc2Ugc2F2ZSBidXR0b24gc2hvdWxkIGhhdmUgYSBjb25maXJtYXRpb24gc3RlcFxyXG4vLyBUaGUgZXJhc2Ugc2F2ZSBidXR0b24gc2hvdWxkIGFsc28gcmVzZXQgdGhlIGdhbWUgKHByb2JhYmx5IHdpbGwgcmVuYW1lIHRoZSBidXR0b24pXHJcbi8vIFRoZXJlIHNob3VsZCBiZSBhbiBpbXBvcnQvZXhwb3J0IG9wdGlvbiB0byBsZXQgdGhlIHBsYXllciBiYWNrIHVwIHRoZWlyIHNhdmVcclxuLy8gVGhlcmUgYXJlIGJhbGFuY2UgaXNzdWVzXHJcbi8vIFRoZXJlIHNob3VsZCBiZSB1cGdyYWRlc1xyXG4vLyBhZGp1c3RhYmxlIHVwZGF0ZSByYXRlIGZvciBiYW5hbmFzIHBlciBzZWNvbmQgZGlzcGxheVxyXG4vLyBjb21wcmVzc2VkIG5vdGF0aW9uIGZvciBsYXJnZSBudW1iZXJzXHJcblxyXG4vLyBIb3cgbWFueSBzY3JlZW5zIGNhbiBJIGRpc3BsYXkgYXQgb25jZT9cclxuLy8gM2sgaXMgYWJvdXQgdGhlIGxpbWl0IHJpZ2h0IG5vd1xyXG5cclxuLy8gV2hhdCBpZiBpbnN0ZWFkIG9mIHBpY2tpbmcgb25lIHRhcmdldCB3b3JkIGF0IGEgdGltZSwgdGhlIHBsYXllciBidWlsdCB1cCBhIGRpY3Rpb25hcnk/XHJcbi8vICAgIEFORCwgd2hhdCBpZiwgdGhleSBlYXJuZWQgYmFuYW5hcyBmb3IgZXZlcnkgbWF0Y2hpbmcgbGV0dGVyIGluIHRoZWlyIGRpY3Rpb25hcnk/XHJcbi8vICAgIChyYXRoZXIgdGhhbiBmb3IganVzdCB0aGUgbGV0dGVycyB0aGV5IG1hdGNoZWQgd2l0aCBhIHBhcnRpY3VsYXIgd29yZD8pXHJcbi8vIFRoaXMgaW1wbGllcyBvbmUgZmVhdHVyZSB3aGVyZSB5b3UgY2FuIHVwZ3JhZGUgYSBwYXJ0aWN1bGFyIHNsb3QgdG8gYXdhcmQgbW9yZSBiYW5hbmFzXHJcbi8vICAgIGUuZy4gZG91YmxlIGFsbCBiYW5hbmFzIGVhcm5lZCBmcm9tIG1hdGNoZXMgaW4gdGhlIHNlY29uZCBsZXR0ZXJcclxuLy8gV2hhdCBpZiwgYXQgdGhlIHNhbWUgdGltZSwgd29yZHMgYWxzbyBhd2FyZGVkIGRpZmZlcmVudCBhbW91bnRzIGZvciBkaWZmZXJlbnQgbnVtYmVycyBvZiBtYXRjaGVzP1xyXG4vLyBXaGF0IGlmIHRoZSBnYW1lIHdhcyBzdHJ1Y3R1cmVkIGtpbmQgb2YgbGlrZSBhIGRlY2stYnVpbGRlcj9cclxuLy8gV2hhdCBpZiB0aGUgd29yZHMgeW91IGNvdWxkIGFkZCB0byB5b3VyIGRpY3Rpb25hcnkgd2VyZSBjaG9zZW4gYXQgcmFuZG9tP1xyXG4vLyBXaGF0IGlmIHdlIGJyb3VnaHQgYmFjayB0aGUgaWRlYSBvZiBsaW1pdGluZyBob3cgdGhlIHBsYXllciBjdXN0b21pemVkIHRoZWlyIGtleWJvYXJkP1xyXG4vLyBXaGF0IGlmIHlvdSBjYW4gdXBncmFkZSB3b3Jkcz9cclxuXHJcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCIuL2J1dHRvblwiO1xyXG5pbXBvcnQgeyBjYW52YXMsIGNvbGxpZGVhYmxlcywgY3R4LCBkcmF3YWJsZXMsIGcsIHBsYXllckRpY3Rpb25hcnksIHVwZGF0ZWFibGVzIH0gZnJvbSBcIi4vZ2xvYmFsXCI7XHJcbmltcG9ydCB7IGVyYXNlU2F2ZSwgbG9hZEZyb21Mb2NhbFN0b3JhZ2UsIHNhdmUgfSBmcm9tIFwiLi9sb2NhbF9zdG9yYWdlXCI7XHJcbmltcG9ydCB7IGRvd25sb2FkLCBnZW5lcmF0ZVBlcm11dGF0aW9ucyB9IGZyb20gXCIuL3Rlc3RfcGVybXV0YXRpb25zXCI7XHJcbmltcG9ydCB7IGFsaWduVGV4dERpc3BsYXlzVG9HcmlkLCBUZXh0RGlzcGxheSB9IGZyb20gXCIuL3RleHRfZGlzcGxheVwiO1xyXG5pbXBvcnQgeyBDb2xsaWRlYWJsZSB9IGZyb20gXCIuL3R5cGVzXCI7XHJcbmltcG9ydCB7IFVwZ3JhZGUgfSBmcm9tIFwiLi91cGdyYWRlXCI7XHJcbmltcG9ydCB7IHVwZ3JhZGVzIH0gZnJvbSBcIi4vdXBncmFkZXNcIjtcclxuaW1wb3J0IHsgY291bnRNYXRjaGluZ0xldHRlcnMsIGdldFJhbmRvbUNoYXJhY3RlciwgZ2V0UmFuZG9tSW50LCByZ2JTdHJpbmcgfSBmcm9tIFwiLi91dGlsXCI7XHJcbmltcG9ydCB7IHBhcnNlV29yZHMsIHRvUGFyc2UgfSBmcm9tIFwiLi91bnBhcnNlZF93b3Jkc1wiO1xyXG5pbXBvcnQgeyB3b3JkcyB9IGZyb20gXCIuL3dvcmRzXCI7XHJcblxyXG4vLyBsZXQgcmVwb3J0MSA9IGdlbmVyYXRlUGVybXV0YXRpb25zKFxyXG4vLyAgICAgW1wiSFwiLCBcIk9cIiwgXCJUXCJdLFxyXG4vLyAgICAgW1wiSFwiLCBcIk9cIiwgXCJPXCIsIFwiVFwiXSxcclxuLy8gKTtcclxuLy8gZG93bmxvYWQoXCJob3QtaG9vdC1wZXJtdXRhdGlvbnMuY3N2XCIsIHJlcG9ydDEpO1xyXG5cclxuLy8gbGV0IHJlcG9ydDIgPSBnZW5lcmF0ZVBlcm11dGF0aW9ucyhcclxuLy8gICAgIFtcIkhcIiwgXCJPXCIsIFwiT1wiLCBcIlRcIl0sXHJcbi8vICAgICBbXCJIXCIsIFwiT1wiLCBcIk9cIiwgXCJUXCJdLFxyXG4vLyApO1xyXG4vLyBkb3dubG9hZChcImhvb3QtaG9vdC1wZXJtdXRhdGlvbnMuY3N2XCIsIHJlcG9ydDIpO1xyXG5cclxubG9hZEZyb21Mb2NhbFN0b3JhZ2UoKTtcclxuXHJcbmxldCBidXR0b25Db2xvcjogc3RyaW5nID0gcmdiU3RyaW5nKDIwMCwgMjAwLCAyNTUpO1xyXG5sZXQgYnV0dG9uSG92ZXJDb2xvcjogc3RyaW5nID0gcmdiU3RyaW5nKDE4MCwgMTgwLCAyMzApO1xyXG5sZXQgZXJhc2VCdXR0b25Db2xvcjogc3RyaW5nID0gcmdiU3RyaW5nKDI1NSwgNTAsIDUwKTtcclxubGV0IGVyYXNlQnV0dG9uSG92ZXJDb2xvcjogc3RyaW5nID0gcmdiU3RyaW5nKDIyNSwgMjAsIDIwKTtcclxuXHJcbi8vIE1ha2UgYnV0dG9ucyBvdXQgb2YgYWxsIHBvc3NpYmxlIGtleWJvYXJkIGtleXNcclxuLy8gbGV0IGFsbEtleWJvYXJkS2V5cyA9IFtcIiBcIiwgXCJBXCIsXCJCXCIsXCJDXCIsXCJEXCIsXCJFXCIsXCJGXCIsXCJHXCIsXCJIXCIsXCJJXCIsXCJKXCIsXCJLXCIsXCJMXCIsXCJNXCIsXCJOXCIsXCJPXCIsXCJQXCIsXCJRXCIsXCJSXCIsXCJTXCIsXCJUXCIsXCJVXCIsXCJWXCIsXCJXXCIsXCJYXCIsXCJZXCIsXCJaXCJdO1xyXG5sZXQgYWxsS2V5Ym9hcmRLZXlzID0gW1wi4o61XCIsIFwiQVwiLFwiQlwiLFwiQ1wiLFwiRFwiLFwiRVwiLFwiRlwiLFwiR1wiLFwiSFwiLFwiSVwiLFwiSlwiLFwiS1wiLFwiTFwiLFwiTVwiLFwiTlwiLFwiT1wiLFwiUFwiLFwiUVwiLFwiUlwiLFwiU1wiLFwiVFwiLFwiVVwiLFwiVlwiLFwiV1wiLFwiWFwiLFwiWVwiLFwiWlwiXTtcclxuZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxLZXlib2FyZEtleXMubGVuZ3RoOyBpKyspIHtcclxuICAgIGxldCBrZXkgPSBhbGxLZXlib2FyZEtleXNbaV07XHJcbiAgICBsZXQgYnV0dG9uID0gbmV3IEJ1dHRvbihcclxuICAgICAgICAyMCArIDMwICogaSxcclxuICAgICAgICA1NTAsXHJcbiAgICAgICAgMjUsXHJcbiAgICAgICAgMjUsXHJcbiAgICAgICAga2V5LFxyXG4gICAgICAgIGJ1dHRvbkNvbG9yLFxyXG4gICAgICAgIGJ1dHRvbkhvdmVyQ29sb3IsXHJcbiAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICBjcmVhdGVDdXJyZW50S2V5Ym9hcmRLZXlCdXR0b24oZy5rZXlib2FyZEtleXMubGVuZ3RoLCBrZXkpO1xyXG4gICAgICAgICAgICBnLmtleWJvYXJkS2V5cy5wdXNoKGtleSk7XHJcbiAgICAgICAgICAgIHVwZGF0ZUNoYXJhY3RlcnNUb0Nob29zZUZyb20oKTtcclxuXHJcbiAgICAgICAgICAgIC8vIG5vdCBzdXJlIGlmIEkgd2lsbCB3YW50IHRvIGNsZWFyIGFsbCB0aGUgY3VycmVudFxyXG4gICAgICAgICAgICAvLyBzdHJpbmdzIHdoZW4gdGhlIHBsYXllciBjaGFuZ2VzIHRoZSBrZXlib2FyZFxyXG4gICAgICAgICAgICAvLyBjdXJyZW50U3RyaW5nID0gW107XHJcbiAgICAgICAgfSxcclxuICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChnLmtleWJvYXJkS2V5cy5sZW5ndGggPCBnLm1heEtleWJvYXJkS2V5cykge1xyXG4gICAgICAgICAgICAgICAgYnV0dG9uLmlzRGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGJ1dHRvbi5pc0Rpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICApO1xyXG59XHJcblxyXG5sZXQgcmFuZG9tTnVtYmVyU2l6ZSA9IDY1NTM2O1xyXG51cGRhdGVDaGFyYWN0ZXJzVG9DaG9vc2VGcm9tKCk7XHJcbmxldCBrZXlib2FyZEtleUJ1dHRvbnM6IEJ1dHRvbltdID0gW11cclxuXHJcbmZvciAobGV0IGkgPSAwOyBpIDwgZy5rZXlib2FyZEtleXMubGVuZ3RoOyBpKyspIHtcclxuICAgIGNyZWF0ZUN1cnJlbnRLZXlib2FyZEtleUJ1dHRvbihpLCBnLmtleWJvYXJkS2V5c1tpXSk7XHJcbn1cclxuXHJcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY2FudmFzKTtcclxuXHJcbmxldCByZWNydWl0UHJpY2UgPSAxMCAqIChnLm1vbmtleXMgKyAxKSAqIChnLm1vbmtleXMgKyAxKTtcclxubGV0IGJ1dHRvbjEgPSBuZXcgQnV0dG9uKFxyXG4gICAgMTAwLFxyXG4gICAgMTAwLFxyXG4gICAgODAsXHJcbiAgICAzMCxcclxuICAgIFwiUmVjcnVpdCBNb25rZXkgXCIgKyByZWNydWl0UHJpY2UsXHJcbiAgICBidXR0b25Db2xvcixcclxuICAgIGJ1dHRvbkhvdmVyQ29sb3IsXHJcbiAgICAoKSA9PiB7XHJcbiAgICAgICAgZy5tb25rZXlzICs9IDE7XHJcbiAgICAgICAgbmV3IFRleHREaXNwbGF5KCk7XHJcbiAgICAgICAgZy5sZXR0ZXJzUGVyU2Vjb25kID0gMTtcclxuICAgICAgICBnLmJhbmFuYXMgLT0gcmVjcnVpdFByaWNlO1xyXG4gICAgICAgIHJlY3J1aXRQcmljZSA9IDEwICogKGcubW9ua2V5cyArIDEpICogKGcubW9ua2V5cyArIDEpO1xyXG4gICAgICAgIGJ1dHRvbjEudGV4dCA9IFwiUmVjcnVpdCBNb25rZXkgXCIgKyByZWNydWl0UHJpY2U7XHJcbiAgICB9LFxyXG4gICAgKCkgPT4ge1xyXG4gICAgICAgIGlmIChyZWNydWl0UHJpY2UgPiBnLmJhbmFuYXMpIHtcclxuICAgICAgICAgICAgYnV0dG9uMS5pc0Rpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBidXR0b24xLmlzRGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4pO1xyXG5cclxubGV0IGxhc3RDbGlja2VkVGltZU1pbGxpczogbnVtYmVyO1xyXG5sZXQgYnV0dG9uMiA9IG5ldyBCdXR0b24oXHJcbiAgICAxMDAsXHJcbiAgICA0ODAsXHJcbiAgICA4MCxcclxuICAgIDMwLFxyXG4gICAgXCJHYXRoZXIgQmFuYW5hc1wiLFxyXG4gICAgYnV0dG9uQ29sb3IsXHJcbiAgICBidXR0b25Ib3ZlckNvbG9yLFxyXG4gICAgKGN1cnJlbnRUaW1lTWlsbGlzOiBudW1iZXIpID0+IHtcclxuICAgICAgICBpZiAoY3VycmVudFRpbWVNaWxsaXMgIT09IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICAmJiAoY3VycmVudFRpbWVNaWxsaXMgLSBsYXN0Q2xpY2tlZFRpbWVNaWxsaXMpIDwgNTApIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBnLmJhbmFuYXMgKz0gMTtcclxuICAgICAgICBsYXN0Q2xpY2tlZFRpbWVNaWxsaXMgPSBjdXJyZW50VGltZU1pbGxpcztcclxuICAgIH0sXHJcbiAgICAoKSA9PiB7fVxyXG4pO1xyXG5cclxubGV0IHVwZ3JhZGVLZXlib2FyZFByaWNlID0gTWF0aC5wb3coMTAsIGcubWF4S2V5Ym9hcmRLZXlzICsgMSk7XHJcbmxldCBidXR0b24zID0gbmV3IEJ1dHRvbihcclxuICAgIDI1MCxcclxuICAgIDQ4MCxcclxuICAgIDgwLFxyXG4gICAgMzAsXHJcbiAgICBcIlVwZ3JhZGUgS2V5Ym9hcmQgXCIgKyB1cGdyYWRlS2V5Ym9hcmRQcmljZSxcclxuICAgIGJ1dHRvbkNvbG9yLFxyXG4gICAgYnV0dG9uSG92ZXJDb2xvcixcclxuICAgICgpID0+IHtcclxuICAgICAgICBnLmJhbmFuYXMgLT0gdXBncmFkZUtleWJvYXJkUHJpY2U7XHJcbiAgICAgICAgZy5tYXhLZXlib2FyZEtleXMgKz0gMTtcclxuICAgICAgICB1cGRhdGVDaGFyYWN0ZXJzVG9DaG9vc2VGcm9tKCk7XHJcbiAgICAgICAgdXBncmFkZUtleWJvYXJkUHJpY2UgPSBNYXRoLnBvdygxMCwgZy5tYXhLZXlib2FyZEtleXMgKyAxKTtcclxuICAgICAgICBidXR0b24zLnRleHQgPSBcIlVwZ3JhZGUgS2V5Ym9hcmQgXCIgKyB1cGdyYWRlS2V5Ym9hcmRQcmljZTtcclxuICAgIH0sXHJcbiAgICAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHVwZ3JhZGVLZXlib2FyZFByaWNlID4gZy5iYW5hbmFzKSB7XHJcbiAgICAgICAgICAgIGJ1dHRvbjMuaXNEaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYnV0dG9uMy5pc0Rpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4pO1xyXG5cclxubGV0IHNhdmVCdXR0b246IEJ1dHRvbiA9IG5ldyBCdXR0b24oXHJcbiAgICAxMCxcclxuICAgIDYwMCxcclxuICAgIDEwMCxcclxuICAgIDMwLFxyXG4gICAgXCJTYXZlXCIsXHJcbiAgICBidXR0b25Db2xvcixcclxuICAgIGJ1dHRvbkhvdmVyQ29sb3IsXHJcbiAgICAoKSA9PiB7c2F2ZSgpfSxcclxuICAgICgpID0+IHt9LFxyXG4pO1xyXG5cclxubGV0IGVyYXNlQnV0dG9uOiBCdXR0b24gPSBuZXcgQnV0dG9uKFxyXG4gICAgMTAsXHJcbiAgICA2NDAsXHJcbiAgICAxMDAsXHJcbiAgICAzMCxcclxuICAgIFwiRXJhc2UgU2F2ZVwiLFxyXG4gICAgZXJhc2VCdXR0b25Db2xvcixcclxuICAgIGVyYXNlQnV0dG9uSG92ZXJDb2xvcixcclxuICAgICgpID0+IHtlcmFzZVNhdmUoKX0sXHJcbiAgICAoKSA9PiB7fSxcclxuKTtcclxuXHJcbmxldCB3b3JkQnV0dG9uczogQnV0dG9uW10gPSBbXTtcclxubGV0IG5ld1dvcmRQcmljZTogbnVtYmVyID0gMTtcclxubGV0IG5ld1dvcmRCdXR0b246IEJ1dHRvbiA9IG5ldyBCdXR0b24oXHJcbiAgICAzNTAsXHJcbiAgICA0ODAsXHJcbiAgICA4MCxcclxuICAgIDMwLFxyXG4gICAgXCJCdXkgTmV3IFdvcmQgXCIgKyBuZXdXb3JkUHJpY2UsXHJcbiAgICBidXR0b25Db2xvcixcclxuICAgIGJ1dHRvbkhvdmVyQ29sb3IsXHJcbiAgICAoKSA9PiB7XHJcbiAgICAgICAgZy5iYW5hbmFzIC09IG5ld1dvcmRQcmljZTtcclxuICAgICAgICBuZXdXb3JkUHJpY2UgPSAocGxheWVyRGljdGlvbmFyeS5sZW5ndGggKyAxKSAqIChwbGF5ZXJEaWN0aW9uYXJ5Lmxlbmd0aCArIDEpO1xyXG4gICAgICAgIG5ld1dvcmRCdXR0b24udGV4dCA9IFwiQnV5IE5ldyBXb3JkIFwiICsgbmV3V29yZFByaWNlO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCB3b3JkSW5kZXg6IG51bWJlciA9IGdldFJhbmRvbUludCgwLCB3b3Jkc1swXS5sZW5ndGgpO1xyXG4gICAgICAgICAgICBsZXQgd29yZDogc3RyaW5nID0gd29yZHNbMF1bd29yZEluZGV4XTtcclxuICAgICAgICAgICAgbGV0IHdvcmRCdXR0b246IEJ1dHRvbiA9IG5ldyBCdXR0b24oXHJcbiAgICAgICAgICAgICAgICA0MDAgKyA4NSAqIGksXHJcbiAgICAgICAgICAgICAgICA0NDUsXHJcbiAgICAgICAgICAgICAgICA4MCxcclxuICAgICAgICAgICAgICAgIDMwLFxyXG4gICAgICAgICAgICAgICAgd29yZCxcclxuICAgICAgICAgICAgICAgIGJ1dHRvbkNvbG9yLFxyXG4gICAgICAgICAgICAgICAgYnV0dG9uSG92ZXJDb2xvcixcclxuICAgICAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHdvcmRCdXR0b25zLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdvcmRCdXR0b25zW2pdLmRlbGV0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB3b3JkQnV0dG9ucyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIHBsYXllckRpY3Rpb25hcnkucHVzaCh3b3JkLnNwbGl0KFwiXCIpKTtcclxuICAgICAgICAgICAgICAgICAgICB3b3Jkc1swXS5zcGxpY2Uod29yZEluZGV4LCAxKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAoKSA9PiB7fSxcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgd29yZEJ1dHRvbnMucHVzaCh3b3JkQnV0dG9uKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgKCkgPT4ge1xyXG4gICAgICAgIGlmIChuZXdXb3JkUHJpY2UgPiBnLmJhbmFuYXNcclxuICAgICAgICAgICAgfHwgd29yZEJ1dHRvbnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBuZXdXb3JkQnV0dG9uLmlzRGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG5ld1dvcmRCdXR0b24uaXNEaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuKTtcclxuXHJcbi8vIENvbW1lbnQgb3V0IHRoZSB1cGdyYWRlIGJ1dHRvbnMgZm9yIG5vd1xyXG4vLyBsZXQgdXBncmFkZUJ1dHRvbnM6IEJ1dHRvbltdID0gW107XHJcbi8vIGNyZWF0ZVVwZ3JhZGVCdXR0b25zKCk7XHJcblxyXG5sZXQgbGFzdEluY29tZVVwZGF0ZVRpbWVNaWxsaXM6IG51bWJlciA9IHBlcmZvcm1hbmNlLm5vdygpO1xyXG5sZXQgbWlsbGlzUGVySW5jb21lVXBkYXRlOiBudW1iZXIgPSAyMDAwO1xyXG5sZXQgbGFzdEJhbmFuYXNQZXJTZWNvbmQ6IG51bWJlciA9IDA7XHJcblxyXG4vLyBzdG9yZSB0aGUgbW91c2UgeHkgaW4gY2FzZSBpdCBnZXRzIGV4ZWN1dGVkIGZhc3RlciB0aGFuXHJcbi8vIG9uY2UgZXZlcnkgZnJhbWUsIHdoaWNoIHdvdWxkIGJlIHVzZWxlc3Mgc2luY2UgaG92ZXIgaXNcclxuLy8gaGFuZGxlZCBvbmx5IG9uY2UgZXZlcnkgZnJhbWVcclxuY2FudmFzLm9ubW91c2Vtb3ZlID0gKGV2OiBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICBsZXQgYm91bmRzOiBET01SZWN0ID0gY2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgZy5tb3VzZVggPSBldi54IC0gYm91bmRzLmxlZnQ7XHJcbiAgICBnLm1vdXNlWSA9IGV2LnkgLSBib3VuZHMudG9wO1xyXG59O1xyXG5cclxuLy8gYXNzdW1lIGZvciBzaW1wbGljaXR5IHRoYXQgeW91IGNhbid0IGhhdmUgdHdvIG1vdXNlZG93blxyXG4vLyBldmVudHMgd2l0aG91dCBhIG1vdXNldXBcclxuY2FudmFzLm9ubW91c2Vkb3duID0gKGV2OiBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICBsZXQgYm91bmRzOiBET01SZWN0ID0gY2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgbGV0IG1vdXNlWCA9IGV2LnggLSBib3VuZHMubGVmdDtcclxuICAgIGxldCBtb3VzZVkgPSBldi55IC0gYm91bmRzLnRvcDtcclxuICAgIGxldCBjb2xsaWRlYWJsZTogQ29sbGlkZWFibGUgPSBnZXRDb2xsaWRpbmdFbnRpdHkobW91c2VYLCBtb3VzZVkpO1xyXG4gICAgaWYgKGNvbGxpZGVhYmxlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBjb2xsaWRlYWJsZS5pc01vdXNlRG93bmVkID0gdHJ1ZTtcclxuICAgICAgICBjdXJyZW50TW91c2VEb3duZWQgPSBjb2xsaWRlYWJsZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY3VycmVudE1vdXNlRG93bmVkID0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG59XHJcblxyXG5jYW52YXMub25tb3VzZXVwID0gKGV2OiBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICBsZXQgYm91bmRzOiBET01SZWN0ID0gY2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgbGV0IG1vdXNlWCA9IGV2LnggLSBib3VuZHMubGVmdDtcclxuICAgIGxldCBtb3VzZVkgPSBldi55IC0gYm91bmRzLnRvcDtcclxuICAgIGxldCBjb2xsaWRlYWJsZTogQ29sbGlkZWFibGUgPSBnZXRDb2xsaWRpbmdFbnRpdHkobW91c2VYLCBtb3VzZVkpO1xyXG4gICAgaWYgKGNvbGxpZGVhYmxlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBpZiAoY29sbGlkZWFibGUuaXNNb3VzZURvd25lZFxyXG4gICAgICAgICAgICAmJiAhY29sbGlkZWFibGUuaXNEaXNhYmxlZCkge1xyXG4gICAgICAgICAgICBjb2xsaWRlYWJsZS5vbkNsaWNrKGV2LnRpbWVTdGFtcCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKGN1cnJlbnRNb3VzZURvd25lZCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgY3VycmVudE1vdXNlRG93bmVkLmlzTW91c2VEb3duZWQgPSBmYWxzZTtcclxuICAgIH1cclxufVxyXG5cclxubGV0IHByZXZpb3VzVGltZU1pbGxpczogbnVtYmVyO1xyXG5sZXQgcHJldmlvdXNIb3ZlcmVkOiBDb2xsaWRlYWJsZTtcclxubGV0IGN1cnJlbnRNb3VzZURvd25lZDogQ29sbGlkZWFibGU7XHJcblxyXG53aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGRyYXcpO1xyXG5cclxuZnVuY3Rpb24gZHJhdyhjdXJyZW50VGltZU1pbGxpczogbnVtYmVyKSB7XHJcbiAgICBsZXQgZWxhcHNlZFRpbWVNaWxsaXM6IG51bWJlciA9IDA7XHJcbiAgICBpZiAocHJldmlvdXNUaW1lTWlsbGlzICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBlbGFwc2VkVGltZU1pbGxpcyA9IGN1cnJlbnRUaW1lTWlsbGlzIC0gcHJldmlvdXNUaW1lTWlsbGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcclxuICAgIGN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XHJcbiAgICBjdHguZmlsbFJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcclxuXHJcbiAgICBpZiAocHJldmlvdXNIb3ZlcmVkICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBwcmV2aW91c0hvdmVyZWQuaXNIb3ZlcmVkID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbGxpZGVhYmxlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGxldCBpc0NvbGxpZGluZyA9IGNvbGxpZGVhYmxlc1tpXS5jb2xsaWRlKGcubW91c2VYLCBnLm1vdXNlWSk7XHJcbiAgICAgICAgaWYgKGlzQ29sbGlkaW5nKSB7XHJcbiAgICAgICAgICAgIGxldCBjdXJyZW50SG92ZXJlZCA9IGNvbGxpZGVhYmxlc1tpXTtcclxuICAgICAgICAgICAgY3VycmVudEhvdmVyZWQuaXNIb3ZlcmVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgcHJldmlvdXNIb3ZlcmVkID0gY3VycmVudEhvdmVyZWQ7XHJcbiAgICAgICAgICAgIGJyZWFrOyAvLyBvbmx5IG9uZSB0aGluZyBjYW4gYmUgaG92ZXJlZCBvdmVyIGF0IGEgdGltZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBDYWxsIHVwZGF0ZSBvbiBldmVyeXRoaW5nIGp1c3QgYmVmb3JlIGRyYXdcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdXBkYXRlYWJsZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICB1cGRhdGVhYmxlc1tpXS51cGRhdGUoY3VycmVudFRpbWVNaWxsaXMsIGVsYXBzZWRUaW1lTWlsbGlzKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBVcGRhdGUgdGhlIGluY29tZSBwZXIgc2Vjb25kIGlmIGl0J3MgdGltZSB0b1xyXG4gICAgbGV0IGVsYXBzZWRTaW5jZUxhc3RJbmNvbWVVcGRhdGUgPSBjdXJyZW50VGltZU1pbGxpcyAtIGxhc3RJbmNvbWVVcGRhdGVUaW1lTWlsbGlzO1xyXG4gICAgaWYgKGVsYXBzZWRTaW5jZUxhc3RJbmNvbWVVcGRhdGUgPj0gbWlsbGlzUGVySW5jb21lVXBkYXRlKSB7XHJcbiAgICAgICAgbGFzdEJhbmFuYXNQZXJTZWNvbmQgPSBnLmluY29tZUFjY3VtdWxhdG9yIC8gKGVsYXBzZWRTaW5jZUxhc3RJbmNvbWVVcGRhdGUgLyAxMDAwKTtcclxuICAgICAgICBnLmluY29tZUFjY3VtdWxhdG9yID0gMDtcclxuICAgICAgICBsYXN0SW5jb21lVXBkYXRlVGltZU1pbGxpcyA9IGN1cnJlbnRUaW1lTWlsbGlzO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIERyYXcgdmFsdWVzIGF0IHRoZSBlbmQgb2YgdGhlIGZyYW1lIHNvIHRoZXkncmUgYXMgdXBcclxuICAgIC8vIHRvIGRhdGUgYXMgdGhleSBjYW4gYmVcclxuICAgIGN0eC5zYXZlKCk7XHJcbiAgICBjdHguZmlsbFN0eWxlID0gXCJibGFja1wiO1xyXG4gICAgY3R4LmZvbnQgPSBcIjIwcHggQXJpYWxcIjtcclxuXHJcbiAgICBjdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcclxuICAgIGN0eC5maWxsVGV4dChiYW5hbmFzUGVyU2Vjb25kKGxhc3RCYW5hbmFzUGVyU2Vjb25kKSwgMTQwLCAzMCk7XHJcbiAgICBjdHguZmlsbFRleHQoYmFuYW5hcyhnLmJhbmFuYXMpLCAxNDAsIDU1KTtcclxuICAgIGN0eC5maWxsVGV4dChtb25rZXlzKGcubW9ua2V5cyksIDE0MCwgODApO1xyXG5cclxuICAgIGN0eC50ZXh0QWxpZ24gPSBcInJpZ2h0XCI7XHJcbiAgICBjdHguZmlsbFRleHQoXCJLZXlib2FyZCBLZXlzOlwiLCAxNjAsIDQ1MCk7XHJcblxyXG4gICAgY3R4LnJlc3RvcmUoKTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRyYXdhYmxlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGRyYXdhYmxlc1tpXS5kcmF3KGN1cnJlbnRUaW1lTWlsbGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwcmV2aW91c1RpbWVNaWxsaXMgPSBjdXJyZW50VGltZU1pbGxpcztcclxuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZHJhdyk7XHJcbn1cclxuXHJcbi8vIE1ha2UgYSBidXR0b24gb3V0IG9mIHRoZSBhIGtleWJvYXJkIGtleSBzbyB5b3VcclxuLy8gY2FuIGNsaWNrIHRvIHJlbW92ZSBpdCBmcm9tIHlvdXIga2V5Ym9hcmQuXHJcbi8vIGkgaXMgdGhlIGluZGV4IGluIHRoZSBrZXlib2FyZEtleXMgYXJyYXlcclxuLy8gT24gY2xpY2sgaXQgZGVsZXRlcyBhbmQgcmVtYWtlcyBhbGwgdGhlIGJ1dHRvbnNcclxuZnVuY3Rpb24gY3JlYXRlQ3VycmVudEtleWJvYXJkS2V5QnV0dG9uKGk6IG51bWJlciwga2V5OiBzdHJpbmcpIHtcclxuICAgIGxldCBidXR0b24gPSBuZXcgQnV0dG9uKFxyXG4gICAgICAgIDE4MCArIDMwICogaSxcclxuICAgICAgICA0MzAsXHJcbiAgICAgICAgMjUsXHJcbiAgICAgICAgMjUsXHJcbiAgICAgICAga2V5LFxyXG4gICAgICAgIGJ1dHRvbkNvbG9yLFxyXG4gICAgICAgIGJ1dHRvbkhvdmVyQ29sb3IsXHJcbiAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICBnLmtleWJvYXJkS2V5cy5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgIHVwZGF0ZUNoYXJhY3RlcnNUb0Nob29zZUZyb20oKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBrZXlib2FyZEtleUJ1dHRvbnMubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGtleWJvYXJkS2V5QnV0dG9uc1tqXS5kZWxldGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGcua2V5Ym9hcmRLZXlzLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQga2V5ID0gZy5rZXlib2FyZEtleXNbal07XHJcbiAgICAgICAgICAgICAgICBjcmVhdGVDdXJyZW50S2V5Ym9hcmRLZXlCdXR0b24oaiwga2V5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBub3Qgc3VyZSBpZiBJIHdpbGwgd2FudCB0byBjbGVhciBhbGwgdGhlIGN1cnJlbnRcclxuICAgICAgICAgICAgLy8gc3RyaW5ncyB3aGVuIHRoZSBwbGF5ZXIgY2hhbmdlcyB0aGUga2V5Ym9hcmRcclxuICAgICAgICAgICAgLy8gY3VycmVudFN0cmluZyA9IFtdO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgKCkgPT4ge30sXHJcbiAgICApO1xyXG4gICAga2V5Ym9hcmRLZXlCdXR0b25zLnB1c2goYnV0dG9uKTtcclxufVxyXG5cclxuZnVuY3Rpb24gdXBkYXRlQ2hhcmFjdGVyc1RvQ2hvb3NlRnJvbSgpIHtcclxuICAgIGcuY2hhcmFjdGVyc1RvQ2hvb3NlRnJvbSA9IFtdO1xyXG4gICAgaWYgKGcua2V5Ym9hcmRLZXlzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmFuZG9tTnVtYmVyU2l6ZTsgaSsrKSB7XHJcbiAgICAgICAgZy5jaGFyYWN0ZXJzVG9DaG9vc2VGcm9tLnB1c2goXHJcbiAgICAgICAgICAgIGcua2V5Ym9hcmRLZXlzW2kgJSBnLmtleWJvYXJkS2V5cy5sZW5ndGhdXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxuLy8gZnVuY3Rpb24gY3JlYXRlVXBncmFkZUJ1dHRvbnMoKSB7XHJcbi8vICAgICBsZXQgc29ydGVkVXBncmFkZXM6IFVwZ3JhZGVbXSA9IHNvcnRlZCh1cGdyYWRlcywgKGE6IFVwZ3JhZGUsIGI6IFVwZ3JhZGUpID0+IHtcclxuLy8gICAgICAgICByZXR1cm4gYS5wcmljZSAtIGIucHJpY2U7XHJcbi8vICAgICB9KTtcclxuLy8gICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc29ydGVkVXBncmFkZXMubGVuZ3RoOyBpKyspIHtcclxuLy8gICAgICAgICBsZXQgdXBncmFkZSA9IHNvcnRlZFVwZ3JhZGVzW2ldO1xyXG4vLyAgICAgICAgIGxldCBidXR0b246IEJ1dHRvbiA9IG5ldyBCdXR0b24oXHJcbi8vICAgICAgICAgICAgIDUwMCxcclxuLy8gICAgICAgICAgICAgMzAwICsgMzUgKiBpLFxyXG4vLyAgICAgICAgICAgICA4MCxcclxuLy8gICAgICAgICAgICAgMzAsXHJcbi8vICAgICAgICAgICAgIHVwZ3JhZGUudGV4dCArIFwiIFwiICsgdXBncmFkZS5wcmljZSxcclxuLy8gICAgICAgICAgICAgYnV0dG9uQ29sb3IsXHJcbi8vICAgICAgICAgICAgIGJ1dHRvbkhvdmVyQ29sb3IsXHJcbi8vICAgICAgICAgICAgICgpID0+IHtcclxuLy8gICAgICAgICAgICAgICAgIHVwZ3JhZGUuYnV5KCk7XHJcbi8vICAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHVwZ3JhZGVCdXR0b25zLmxlbmd0aDsgaisrKSB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgdXBncmFkZUJ1dHRvbnNbal0uZGVsZXRlKCk7XHJcbi8vICAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgICAgICBjcmVhdGVVcGdyYWRlQnV0dG9ucygpO1xyXG4vLyAgICAgICAgICAgICB9LFxyXG4vLyAgICAgICAgICAgICAoKSA9PiB7XHJcbi8vICAgICAgICAgICAgICAgICBpZiAodXBncmFkZS5wcmljZSA+IGcuYmFuYW5hcykge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbi5pc0Rpc2FibGVkID0gdHJ1ZTtcclxuLy8gICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbi8vICAgICAgICAgICAgICAgICAgICAgYnV0dG9uLmlzRGlzYWJsZWQgPSBmYWxzZTtcclxuLy8gICAgICAgICAgICAgICAgIH1cclxuLy8gICAgICAgICAgICAgfSxcclxuLy8gICAgICAgICApO1xyXG4vLyAgICAgICAgIHVwZ3JhZGVCdXR0b25zLnB1c2goYnV0dG9uKTtcclxuLy8gICAgIH1cclxuLy8gfVxyXG5cclxuZnVuY3Rpb24gZ2V0Q29sbGlkaW5nRW50aXR5KHBvaW50WDogbnVtYmVyLCBwb2ludFk6IG51bWJlcikge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2xsaWRlYWJsZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBsZXQgaXNDb2xsaWRpbmcgPSBjb2xsaWRlYWJsZXNbaV0uY29sbGlkZShnLm1vdXNlWCwgZy5tb3VzZVkpO1xyXG4gICAgICAgIGlmIChpc0NvbGxpZGluZykge1xyXG4gICAgICAgICAgICByZXR1cm4gY29sbGlkZWFibGVzW2ldO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGJhbmFuYXMobnVtYmVyOiBudW1iZXIpIHtcclxuICAgIG51bWJlciA9IE1hdGgucm91bmQobnVtYmVyKTtcclxuICAgIGlmIChudW1iZXIgPT09IDEpIHtcclxuICAgICAgICByZXR1cm4gbnVtYmVyICsgXCIgYmFuYW5hXCI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBudW1iZXIgKyBcIiBiYW5hbmFzXCI7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1vbmtleXMobnVtYmVyOiBudW1iZXIpIHsgXHJcbiAgICBpZiAobnVtYmVyID09PSAxKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bWJlciArIFwiIG1vbmtleVwiO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gbnVtYmVyICsgXCIgbW9ua2V5c1wiO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBiYW5hbmFzUGVyU2Vjb25kKG51bWJlcjogbnVtYmVyKSB7XHJcbiAgICBudW1iZXIgPSBNYXRoLnJvdW5kKG51bWJlcik7XHJcbiAgICBpZiAobnVtYmVyID09PSAxKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bWJlciArIFwiIGJhbmFuYSBwZXIgc2Vjb25kXCI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBudW1iZXIgKyBcIiBiYW5hbmFzIHBlciBzZWNvbmRcIjtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gc29ydGVkKGFycmF5OiBhbnlbXSwgY29tcGFyZUZuPzogKGE6IGFueSwgYjogYW55KSA9PiBudW1iZXIpIHtcclxuICAgIHJldHVybiBhcnJheS5zbGljZSgpLnNvcnQoY29tcGFyZUZuKTtcclxufVxyXG5cclxuZnVuY3Rpb24gcm91bmRUb05QbGFjZXMoeDogbnVtYmVyLCBudW1QbGFjZXM6IG51bWJlcik6IG51bWJlciB7XHJcbiAgICBsZXQgc2NhbGU6IG51bWJlciA9IE1hdGgucG93KDEwLCBudW1QbGFjZXMpO1xyXG4gICAgcmV0dXJuIE1hdGgucm91bmQoeCAqIHNjYWxlKSAvIHNjYWxlO1xyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==