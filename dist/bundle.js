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
var playerDictionary = [["C", "A", "T"]];
// Put any global variables that you want to be able to reassign here
var g = {
    bananas: 0,
    monkeys: 1,
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
            var evaluation = this.evaluate(this.currentString, _global__WEBPACK_IMPORTED_MODULE_0__.playerDictionary);
            if (this.currentString.length >= _global__WEBPACK_IMPORTED_MODULE_0__.g.currentTarget.letters.length) {
                this.lastWordFinishTimeMillis = currentTimeMillis;
                // let matchingLetters: number = countMatchingLetters(
                //     this.currentString, g.currentTarget.letters);
                // if (matchingLetters > 0) {
                var bananasToAdd = evaluation.matchCounts
                    .reduce(function (s, x) { return s + x * x; });
                // (g.currentTarget.rewards[matchingLetters - 1]
                //     + g.additiveFlatBonus) * (1 + g.additivePercentBonus);
                _global__WEBPACK_IMPORTED_MODULE_0__.g.bananas += bananasToAdd;
                _global__WEBPACK_IMPORTED_MODULE_0__.g.incomeAccumulator += bananasToAdd;
                // }
                if (this.lettersToTypeRemainder >= 1) {
                    this.currentString = [];
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
        for (var i = 0; i < _global__WEBPACK_IMPORTED_MODULE_0__.g.currentTarget.letters.length; i++) {
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
            else if (gradeForLetter === 1) {
                _global__WEBPACK_IMPORTED_MODULE_0__.ctx.fillStyle = this.correctColor;
            }
            else if (gradeForLetter === 2) {
                _global__WEBPACK_IMPORTED_MODULE_0__.ctx.fillStyle = "red";
            }
            else if (gradeForLetter >= 3) {
                _global__WEBPACK_IMPORTED_MODULE_0__.ctx.fillStyle = "blue";
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
/* harmony export */   "getRandomInt": () => (/* binding */ getRandomInt),
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
// source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}


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
/* harmony import */ var _targets__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./targets */ "./src/targets.ts");
/* harmony import */ var _text_display__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./text_display */ "./src/text_display.ts");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./util */ "./src/util.ts");
/* harmony import */ var _words__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./words */ "./src/words.ts");
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
var recruitPrice = 10 * _global__WEBPACK_IMPORTED_MODULE_1__.g.monkeys * _global__WEBPACK_IMPORTED_MODULE_1__.g.monkeys;
var button1 = new _button__WEBPACK_IMPORTED_MODULE_0__.Button(100, 100, 80, 30, "Recruit Monkey " + recruitPrice, buttonColor, buttonHoverColor, function () {
    _global__WEBPACK_IMPORTED_MODULE_1__.g.monkeys += 1;
    new _text_display__WEBPACK_IMPORTED_MODULE_4__.TextDisplay();
    _global__WEBPACK_IMPORTED_MODULE_1__.g.lettersPerSecond = 1;
    _global__WEBPACK_IMPORTED_MODULE_1__.g.bananas -= recruitPrice;
    recruitPrice = 10 * _global__WEBPACK_IMPORTED_MODULE_1__.g.monkeys * _global__WEBPACK_IMPORTED_MODULE_1__.g.monkeys;
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
var wordButtons = [];
var newWordPrice = 1;
var newWordButton = new _button__WEBPACK_IMPORTED_MODULE_0__.Button(350, 480, 80, 30, "Buy New Word " + newWordPrice, buttonColor, buttonHoverColor, function () {
    _global__WEBPACK_IMPORTED_MODULE_1__.g.bananas -= newWordPrice;
    newWordPrice = (_global__WEBPACK_IMPORTED_MODULE_1__.playerDictionary.length + 1) * (_global__WEBPACK_IMPORTED_MODULE_1__.playerDictionary.length + 1);
    newWordButton.text = "Buy New Word " + newWordPrice;
    var _loop_3 = function (i) {
        var wordIndex = (0,_util__WEBPACK_IMPORTED_MODULE_5__.getRandomInt)(0, _words__WEBPACK_IMPORTED_MODULE_6__.words[0].length);
        var word = _words__WEBPACK_IMPORTED_MODULE_6__.words[0][wordIndex];
        var wordButton = new _button__WEBPACK_IMPORTED_MODULE_0__.Button(400 + 85 * i, 445, 80, 30, word, buttonColor, buttonHoverColor, function () {
            for (var j = 0; j < wordButtons.length; j++) {
                wordButtons[j].delete();
            }
            wordButtons = [];
            _global__WEBPACK_IMPORTED_MODULE_1__.playerDictionary.push(word.split(""));
            _words__WEBPACK_IMPORTED_MODULE_6__.words[0].splice(wordIndex, 1);
        }, function () { });
        wordButtons.push(wordButton);
    };
    for (var i = 0; i < 3; i++) {
        _loop_3(i);
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
    // ctx.textAlign = "left";
    // ctx.fillText("Target String: "
    //     + g.currentTarget.displayString, 280, 30);
    // for (let i = 0; i < g.currentTarget.rewards.length; i++) {
    //     let reward = (g.currentTarget.rewards[i]
    //         + g.additiveFlatBonus) * (1 + g.additivePercentBonus);
    //     let line = (i + 1) + ": " + bananas(reward);
    //     ctx.fillText(line, 280, 55 + 20 * i);
    // }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO1FBQ0wsS0FBSztRQUNMLEtBQUs7UUFDTCxLQUFLO0tBQ1I7SUFDRDtRQUNJLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO1FBQ04sTUFBTTtRQUNOLE1BQU07UUFDTixNQUFNO0tBQ1Q7SUFDRDtRQUNJLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO1FBQ1AsT0FBTztRQUNQLE9BQU87UUFDUCxPQUFPO0tBQ1Y7SUFDRDtRQUNJLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsUUFBUTtLQUNYO0lBQ0Q7UUFDSSxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztRQUNULFNBQVM7UUFDVCxTQUFTO1FBQ1QsU0FBUztLQUNaO0lBQ0Q7UUFDSSxVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtRQUNWLFVBQVU7UUFDVixVQUFVO1FBQ1YsVUFBVTtLQUNiO0lBQ0Q7UUFDSSxXQUFXO1FBQ1gsV0FBVztRQUNYLFdBQVc7UUFDWCxXQUFXO1FBQ1gsV0FBVztRQUNYLFdBQVc7UUFDWCxXQUFXO1FBQ1gsV0FBVztRQUNYLFdBQVc7UUFDWCxXQUFXO1FBQ1gsV0FBVztRQUNYLFdBQVc7UUFDWCxXQUFXO1FBQ1gsV0FBVztRQUNYLFdBQVc7UUFDWCxXQUFXO1FBQ1gsV0FBVztRQUNYLFdBQVc7UUFDWCxXQUFXO1FBQ1gsV0FBVztRQUNYLFdBQVc7UUFDWCxXQUFXO1FBQ1gsV0FBVztRQUNYLFdBQVc7UUFDWCxXQUFXO1FBQ1gsV0FBVztRQUNYLFdBQVc7UUFDWCxXQUFXO1FBQ1gsV0FBVztRQUNYLFdBQVc7UUFDWCxXQUFXO1FBQ1gsV0FBVztRQUNYLFdBQVc7UUFDWCxXQUFXO1FBQ1gsV0FBVztRQUNYLFdBQVc7UUFDWCxXQUFXO1FBQ1gsV0FBVztRQUNYLFdBQVc7UUFDWCxXQUFXO1FBQ1gsV0FBVztRQUNYLFdBQVc7UUFDWCxXQUFXO1FBQ1gsV0FBVztRQUNYLFdBQVc7UUFDWCxXQUFXO1FBQ1gsV0FBVztRQUNYLFdBQVc7UUFDWCxXQUFXO1FBQ1gsV0FBVztRQUNYLFdBQVc7UUFDWCxXQUFXO1FBQ1gsV0FBVztRQUNYLFdBQVc7UUFDWCxXQUFXO1FBQ1gsV0FBVztRQUNYLFdBQVc7UUFDWCxXQUFXO1FBQ1gsV0FBVztRQUNYLFdBQVc7UUFDWCxXQUFXO1FBQ1gsV0FBVztRQUNYLFdBQVc7UUFDWCxXQUFXO1FBQ1gsV0FBVztRQUNYLFdBQVc7UUFDWCxXQUFXO1FBQ1gsV0FBVztRQUNYLFdBQVc7UUFDWCxXQUFXO1FBQ1gsV0FBVztRQUNYLFdBQVc7UUFDWCxXQUFXO1FBQ1gsV0FBVztRQUNYLFdBQVc7UUFDWCxXQUFXO1FBQ1gsV0FBVztRQUNYLFdBQVc7UUFDWCxXQUFXO1FBQ1gsV0FBVztRQUNYLFdBQVc7UUFDWCxXQUFXO1FBQ1gsV0FBVztRQUNYLFdBQVc7UUFDWCxXQUFXO1FBQ1gsV0FBVztRQUNYLFdBQVc7UUFDWCxXQUFXO1FBQ1gsV0FBVztRQUNYLFdBQVc7UUFDWCxXQUFXO1FBQ1gsV0FBVztRQUNYLFdBQVc7UUFDWCxXQUFXO1FBQ1gsV0FBVztRQUNYLFdBQVc7UUFDWCxXQUFXO1FBQ1gsV0FBVztRQUNYLFdBQVc7UUFDWCxXQUFXO1FBQ1gsV0FBVztRQUNYLFdBQVc7UUFDWCxXQUFXO1FBQ1gsV0FBVztRQUNYLFdBQVc7UUFDWCxXQUFXO1FBQ1gsV0FBVztRQUNYLFdBQVc7UUFDWCxXQUFXO1FBQ1gsV0FBVztRQUNYLFdBQVc7UUFDWCxXQUFXO1FBQ1gsV0FBVztRQUNYLFdBQVc7UUFDWCxXQUFXO1FBQ1gsV0FBVztRQUNYLFdBQVc7UUFDWCxXQUFXO1FBQ1gsV0FBVztRQUNYLFdBQVc7UUFDWCxXQUFXO1FBQ1gsV0FBVztRQUNYLFdBQVc7UUFDWCxXQUFXO1FBQ1gsV0FBVztRQUNYLFdBQVc7UUFDWCxXQUFXO1FBQ1gsV0FBVztRQUNYLFdBQVc7UUFDWCxXQUFXO1FBQ1gsV0FBVztRQUNYLFdBQVc7UUFDWCxXQUFXO1FBQ1gsV0FBVztRQUNY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O0FBQ0wsQ0FBQztBQUVELFNBQVMsZ0JBQWdCLENBQUMsTUFBYztJQUNwQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM1QixJQUFJLE1BQU0sS0FBSyxDQUFDLEVBQUU7UUFDZCxPQUFPLE1BQU0sR0FBRyxvQkFBb0IsQ0FBQztLQUN4QztTQUFNO1FBQ0gsT0FBTyxNQUFNLEdBQUcscUJBQXFCLENBQUM7S0FDekM7QUFDTCxDQUFDO0FBRUQsU0FBUyxNQUFNLENBQUMsS0FBWSxFQUFFLFNBQXNDO0lBQ2hFLE9BQU8sS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUN6QyxDQUFDO0FBRUQsU0FBUyxjQUFjLENBQUMsQ0FBUyxFQUFFLFNBQWlCO0lBQ2hELElBQUksS0FBSyxHQUFXLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQzVDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFDO0FBQ3pDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leHBvcnRzLy4vc3JjL2J1dHRvbi50cyIsIndlYnBhY2s6Ly9leHBvcnRzLy4vc3JjL2dsb2JhbC50cyIsIndlYnBhY2s6Ly9leHBvcnRzLy4vc3JjL2xvY2FsX3N0b3JhZ2UudHMiLCJ3ZWJwYWNrOi8vZXhwb3J0cy8uL3NyYy9zYXZlX2ZpbGUudHMiLCJ3ZWJwYWNrOi8vZXhwb3J0cy8uL3NyYy90YXJnZXQudHMiLCJ3ZWJwYWNrOi8vZXhwb3J0cy8uL3NyYy90YXJnZXRzLnRzIiwid2VicGFjazovL2V4cG9ydHMvLi9zcmMvdGV4dF9kaXNwbGF5LnRzIiwid2VicGFjazovL2V4cG9ydHMvLi9zcmMvdXRpbC50cyIsIndlYnBhY2s6Ly9leHBvcnRzLy4vc3JjL3dvcmRzLnRzIiwid2VicGFjazovL2V4cG9ydHMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXhwb3J0cy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhwb3J0cy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4cG9ydHMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leHBvcnRzLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbGxpZGVhYmxlcywgY3R4LCBkcmF3YWJsZXMsIGcsIHVwZGF0ZWFibGVzIH0gZnJvbSBcIi4vZ2xvYmFsXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQnV0dG9uIHtcclxuICAgIHB1YmxpYyBpZDogbnVtYmVyO1xyXG4gICAgcHVibGljIHRvcExlZnRYOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgdG9wTGVmdFk6IG51bWJlcjtcclxuICAgIHB1YmxpYyB3aWR0aDogbnVtYmVyO1xyXG4gICAgcHVibGljIGhlaWdodDogbnVtYmVyO1xyXG4gICAgcHVibGljIGJvdHRvbVJpZ2h0WDogbnVtYmVyO1xyXG4gICAgcHVibGljIGJvdHRvbVJpZ2h0WTogbnVtYmVyO1xyXG4gICAgcHVibGljIHRleHQ6IHN0cmluZztcclxuICAgIHB1YmxpYyBjb2xvcjogc3RyaW5nO1xyXG4gICAgcHVibGljIGhvdmVyZWRDb2xvcjogc3RyaW5nO1xyXG4gICAgcHVibGljIGRpc2FibGVkQ29sb3I6IHN0cmluZyA9IFwiZ3JheVwiO1xyXG4gICAgcHVibGljIGlzSG92ZXJlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHVibGljIGlzRGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHB1YmxpYyBpc01vdXNlRG93bmVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwdWJsaWMgb25DbGljazogKGN1cnJlbnRUaW1lTWlsbGlzPzogbnVtYmVyKSA9PiB2b2lkO1xyXG4gICAgcHVibGljIHVwZGF0ZTogKCkgPT4gdm9pZDtcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoXHJcbiAgICAgICAgdG9wTGVmdFg6IG51bWJlcixcclxuICAgICAgICB0b3BMZWZ0WTogbnVtYmVyLFxyXG4gICAgICAgIHdpZHRoOiBudW1iZXIsXHJcbiAgICAgICAgaGVpZ2h0OiBudW1iZXIsXHJcbiAgICAgICAgdGV4dDogc3RyaW5nLFxyXG4gICAgICAgIGNvbG9yOiBzdHJpbmcsXHJcbiAgICAgICAgaG92ZXJlZENvbG9yOiBzdHJpbmcsXHJcbiAgICAgICAgb25DbGljazogKGN1cnJlbnRUaW1lTWlsbGlzPzogbnVtYmVyKSA9PiB2b2lkLFxyXG4gICAgICAgIHVwZGF0ZTogKCkgPT4gdm9pZCxcclxuICAgICkge1xyXG4gICAgICAgIHRoaXMudG9wTGVmdFggPSB0b3BMZWZ0WDtcclxuICAgICAgICB0aGlzLnRvcExlZnRZID0gdG9wTGVmdFk7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMuYm90dG9tUmlnaHRYID0gdG9wTGVmdFggKyB3aWR0aDtcclxuICAgICAgICB0aGlzLmJvdHRvbVJpZ2h0WSA9IHRvcExlZnRZICsgaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMudGV4dCA9IHRleHQ7XHJcbiAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yO1xyXG4gICAgICAgIHRoaXMuaG92ZXJlZENvbG9yID0gaG92ZXJlZENvbG9yO1xyXG4gICAgICAgIHRoaXMub25DbGljayA9IG9uQ2xpY2s7XHJcbiAgICAgICAgdGhpcy51cGRhdGUgPSB1cGRhdGU7XHJcblxyXG4gICAgICAgIHRoaXMuaWQgPSBnLmlkQ291bnRlcjtcclxuICAgICAgICBnLmlkQ291bnRlciArPSAxO1xyXG4gICAgICAgIGRyYXdhYmxlcy5wdXNoKHRoaXMpO1xyXG4gICAgICAgIGNvbGxpZGVhYmxlcy5wdXNoKHRoaXMpO1xyXG4gICAgICAgIHVwZGF0ZWFibGVzLnB1c2godGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRyYXcoKSB7XHJcbiAgICAgICAgbGV0IHRvcExlZnRYID0gdGhpcy50b3BMZWZ0WDtcclxuICAgICAgICBsZXQgdG9wTGVmdFkgPSB0aGlzLnRvcExlZnRZO1xyXG4gICAgICAgIGxldCB3aWR0aCA9IHRoaXMud2lkdGg7XHJcbiAgICAgICAgbGV0IGhlaWdodCA9IHRoaXMuaGVpZ2h0O1xyXG4gICAgICAgIGxldCBmb250U2l6ZSA9IDE1O1xyXG4gICAgICAgIGxldCBjb2xvcjogc3RyaW5nO1xyXG4gICAgICAgIGlmICh0aGlzLmlzTW91c2VEb3duZWRcclxuICAgICAgICAgICAgJiYgIXRoaXMuaXNEaXNhYmxlZCkge1xyXG4gICAgICAgICAgICBsZXQgc2hyaW5rID0gMC4xO1xyXG4gICAgICAgICAgICBsZXQgc2hyaW5rWCA9IHdpZHRoICogc2hyaW5rO1xyXG4gICAgICAgICAgICBsZXQgc2hyaW5rWSA9IGhlaWdodCAqIHNocmluaztcclxuICAgICAgICAgICAgd2lkdGggLT0gc2hyaW5rWDtcclxuICAgICAgICAgICAgaGVpZ2h0IC09IHNocmlua1k7XHJcbiAgICAgICAgICAgIHRvcExlZnRYICs9IHNocmlua1ggLyAyO1xyXG4gICAgICAgICAgICB0b3BMZWZ0WSArPSBzaHJpbmtZIC8gMjtcclxuICAgICAgICAgICAgZm9udFNpemUgKj0gKDEgLSBzaHJpbmspO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5pc0Rpc2FibGVkKSB7XHJcbiAgICAgICAgICAgIGNvbG9yID0gdGhpcy5kaXNhYmxlZENvbG9yXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNIb3ZlcmVkKSB7XHJcbiAgICAgICAgICAgICAgICBjb2xvciA9IHRoaXMuY29sb3I7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb2xvciA9IHRoaXMuaG92ZXJlZENvbG9yO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjdHguc2F2ZSgpO1xyXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBjb2xvcjtcclxuICAgICAgICBjdHguZm9udCA9IGZvbnRTaXplICsgXCJweCBBcmlhbFwiO1xyXG4gICAgICAgIGN0eC5maWxsUmVjdCh0b3BMZWZ0WCwgdG9wTGVmdFksIHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgICAgIGN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xyXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcImJsYWNrXCI7XHJcbiAgICAgICAgY3R4LmZpbGxUZXh0KFxyXG4gICAgICAgICAgICB0aGlzLnRleHQsXHJcbiAgICAgICAgICAgIHRvcExlZnRYICsgd2lkdGggLyAyLFxyXG4gICAgICAgICAgICB0b3BMZWZ0WSArIGhlaWdodCAvIDIgKyBmb250U2l6ZSAvIDIuNFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY3R4LnJlc3RvcmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY29sbGlkZShwb2ludFg6IG51bWJlciwgcG9pbnRZOiBudW1iZXIpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50b3BMZWZ0WCA8PSBwb2ludFhcclxuICAgICAgICAgICAgJiYgcG9pbnRYIDw9IHRoaXMuYm90dG9tUmlnaHRYXHJcbiAgICAgICAgICAgICYmIHRoaXMudG9wTGVmdFkgPD0gcG9pbnRZXHJcbiAgICAgICAgICAgICYmIHBvaW50WSA8PSB0aGlzLmJvdHRvbVJpZ2h0WTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGVsZXRlKCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZHJhd2FibGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChkcmF3YWJsZXNbaV0uaWQgPT09IHRoaXMuaWQpIHtcclxuICAgICAgICAgICAgICAgIGRyYXdhYmxlcy5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2xsaWRlYWJsZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGNvbGxpZGVhYmxlc1tpXS5pZCA9PT0gdGhpcy5pZCkge1xyXG4gICAgICAgICAgICAgICAgY29sbGlkZWFibGVzLnNwbGljZShpLCAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHVwZGF0ZWFibGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh1cGRhdGVhYmxlc1tpXS5pZCA9PT0gdGhpcy5pZCkge1xyXG4gICAgICAgICAgICAgICAgdXBkYXRlYWJsZXMuc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IHRhcmdldHMgfSBmcm9tIFwiLi90YXJnZXRzXCI7XHJcbmltcG9ydCB7IENvbGxpZGVhYmxlLCBEcmF3YWJsZSwgVXBkYXRlYWJsZSB9IGZyb20gXCIuL3R5cGVzXCI7XHJcblxyXG5leHBvcnQgbGV0IHdpZHRoOiBudW1iZXIgPSAxMDAwO1xyXG5leHBvcnQgbGV0IGhlaWdodDogbnVtYmVyID0gNzAwO1xyXG5leHBvcnQgbGV0IGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xyXG5leHBvcnQgbGV0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XHJcbmNhbnZhcy53aWR0aCA9IHdpZHRoO1xyXG5jYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG5jdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG5leHBvcnQgbGV0IGRyYXdhYmxlczogRHJhd2FibGVbXSA9IFtdO1xyXG5leHBvcnQgbGV0IGNvbGxpZGVhYmxlczogQ29sbGlkZWFibGVbXSA9IFtdO1xyXG5leHBvcnQgbGV0IHVwZGF0ZWFibGVzOiBVcGRhdGVhYmxlW10gPSBbXTtcclxuZXhwb3J0IGxldCBwbGF5ZXJEaWN0aW9uYXJ5ID0gW1tcIkNcIiwgXCJBXCIsIFwiVFwiXV07XHJcblxyXG4vLyBQdXQgYW55IGdsb2JhbCB2YXJpYWJsZXMgdGhhdCB5b3Ugd2FudCB0byBiZSBhYmxlIHRvIHJlYXNzaWduIGhlcmVcclxuZXhwb3J0IGxldCBnID0ge1xyXG4gICAgYmFuYW5hczogMCxcclxuICAgIG1vbmtleXM6IDEsXHJcbiAgICAvLyBsZXR0ZXJzVG9UeXBlUmVtYWluZGVyOiAwLFxyXG4gICAgbGV0dGVyc1BlclNlY29uZDogMCxcclxuICAgIG1vdXNlWDogLTEsXHJcbiAgICBtb3VzZVk6IC0xLFxyXG4gICAgaWRDb3VudGVyOiAwLFxyXG4gICAgY3VycmVudFRhcmdldEluZGV4OiAwLFxyXG4gICAgY3VycmVudFRhcmdldDogdGFyZ2V0c1swXSxcclxuICAgIGtleWJvYXJkS2V5czogW1wiQVwiXSxcclxuICAgIG1heEtleWJvYXJkS2V5czogMSxcclxuICAgIHRhcmdldE93bmVkOiBbdHJ1ZV0sXHJcbiAgICBhZGRpdGl2ZVBlcmNlbnRCb251czogMCxcclxuICAgIGFkZGl0aXZlRmxhdEJvbnVzOiAwLFxyXG4gICAgY2hhcmFjdGVyc1RvQ2hvb3NlRnJvbTogPHN0cmluZ1tdPltdLFxyXG4gICAgaW5jb21lQWNjdW11bGF0b3I6IDAsXHJcbn07XHJcblxyXG5mb3IobGV0IGkgPSAxOyBpIDwgdGFyZ2V0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgZy50YXJnZXRPd25lZC5wdXNoKGZhbHNlKTtcclxufVxyXG4iLCJpbXBvcnQgeyBnIH0gZnJvbSBcIi4vZ2xvYmFsXCI7XHJcbmltcG9ydCB7IFNhdmVGaWxlLCBzYXZlRmlsZVZlcnNpb24gfSBmcm9tIFwiLi9zYXZlX2ZpbGVcIjtcclxuaW1wb3J0IHsgdGFyZ2V0cyB9IGZyb20gXCIuL3RhcmdldHNcIjtcclxuXHJcbmxldCBzYXZlS2V5OiBzdHJpbmcgPSBcImluZmluZS1tb25rZXktaWRsZS1nYW1lXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2F2ZSgpIHtcclxuICAgIGxldCBzYXZlRmlsZTogU2F2ZUZpbGUgPSBnZXRTYXZlRmlsZSgpO1xyXG4gICAgbGV0IHNhdmVGaWxlU3RyaW5nOiBzdHJpbmcgPSBKU09OLnN0cmluZ2lmeShzYXZlRmlsZSk7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShzYXZlS2V5LCBzYXZlRmlsZVN0cmluZyk7XHJcbiAgICBjb25zb2xlLmxvZyhcIlNhdmVkIVwiKTtcclxuICAgIGNvbnNvbGUubG9nKHNhdmVGaWxlU3RyaW5nKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0U2F2ZUZpbGUoKTogU2F2ZUZpbGUge1xyXG4gICAgcmV0dXJuIG5ldyBTYXZlRmlsZShcclxuICAgICAgICBnLmJhbmFuYXMsXHJcbiAgICAgICAgZy5tb25rZXlzLFxyXG4gICAgICAgIGcuY3VycmVudFRhcmdldEluZGV4LFxyXG4gICAgICAgIGcua2V5Ym9hcmRLZXlzLFxyXG4gICAgICAgIGcubWF4S2V5Ym9hcmRLZXlzLFxyXG4gICAgICAgIGcudGFyZ2V0T3duZWQsXHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbG9hZEZyb21Mb2NhbFN0b3JhZ2UoKSB7XHJcbiAgICBsZXQgc2F2ZUZpbGVTdHJpbmcgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShzYXZlS2V5KTtcclxuICAgIGlmIChzYXZlRmlsZVN0cmluZyA9PT0gdW5kZWZpbmVkXHJcbiAgICAgICAgfHwgc2F2ZUZpbGVTdHJpbmcgPT09IG51bGwpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiQ291bGQgbm90IGxvYWQgc2F2ZVwiKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiU2F2ZSBmb3VuZFwiLCBzYXZlRmlsZVN0cmluZyk7XHJcbiAgICB9XHJcbiAgICBsb2FkRnJvbVN0cmluZyhzYXZlRmlsZVN0cmluZyk7XHJcbn1cclxuXHJcbi8vIEkgc2hvdWxkIGJlIGFibGUgdG8gY2FsbCB0aGlzIHdoZXRoZXIgSSdtIGxvYWRpbmcgZnJvbVxyXG4vLyBsb2NhbCBzdG9yYWdlIG9yIGZyb20gYSB1c2VyLXByb3ZpZGVkIHNhdmUgaW1wb3J0IHN0cmluZ1xyXG5leHBvcnQgZnVuY3Rpb24gbG9hZEZyb21TdHJpbmcoaW1wb3J0U3RyaW5nOiBzdHJpbmcpIHtcclxuICAgIGxldCBsb2FkZWRTYXZlOiBTYXZlRmlsZSA9IEpTT04ucGFyc2UoaW1wb3J0U3RyaW5nKTtcclxuICAgIGlmIChsb2FkZWRTYXZlID09PSB1bmRlZmluZWRcclxuICAgICAgICB8fCBsb2FkZWRTYXZlID09PSBudWxsKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBsb2FkIHNhdmUgZnJvbSBsb2NhbCBzdG9yYWdlOiBKU09OIHBhcnNlIGVycm9yXCIpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH0gZWxzZSBpZiAobG9hZGVkU2F2ZS52ZXJzaW9uICE9PSBzYXZlRmlsZVZlcnNpb24pIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGxvYWQgc2F2ZSBmcm9tIGxvY2FsIHN0b3JhZ2U6IFZlcnNpb24gbWlzbWF0Y2hcIik7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2coXCJMb2FkZWQgc2F2ZVwiKTtcclxuICAgIGNvbnNvbGUubG9nKGxvYWRlZFNhdmUpO1xyXG4gICAgZy5iYW5hbmFzID0gbG9hZGVkU2F2ZS5iYW5hbmFzO1xyXG4gICAgZy5tb25rZXlzID0gbG9hZGVkU2F2ZS5tb25rZXlzO1xyXG4gICAgZy5sZXR0ZXJzUGVyU2Vjb25kID0gZy5tb25rZXlzO1xyXG4gICAgZy5jdXJyZW50VGFyZ2V0SW5kZXggPSBsb2FkZWRTYXZlLnRhcmdldEluZGV4O1xyXG4gICAgZy5jdXJyZW50VGFyZ2V0ID0gdGFyZ2V0c1tsb2FkZWRTYXZlLnRhcmdldEluZGV4XTtcclxuICAgIGcua2V5Ym9hcmRLZXlzID0gbG9hZGVkU2F2ZS5rZXlib2FyZEtleXM7XHJcbiAgICBnLm1heEtleWJvYXJkS2V5cyA9IGxvYWRlZFNhdmUubWF4S2V5Ym9hcmRLZXlzO1xyXG4gICAgZy50YXJnZXRPd25lZCA9IGxvYWRlZFNhdmUudGFyZ2V0T3duZWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBleHBvcnRTYXZlVG9TdHJpbmcoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShnZXRTYXZlRmlsZSgpKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGVyYXNlU2F2ZSgpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiU2F2ZSBFcmFzZWQhXCIpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oc2F2ZUtleSk7XHJcbn1cclxuIiwiZXhwb3J0IGxldCBzYXZlRmlsZVZlcnNpb246IG51bWJlciA9IDM7XHJcblxyXG5leHBvcnQgY2xhc3MgU2F2ZUZpbGUge1xyXG4gICAgLy8gVXNlIHRoZSB2ZXJzaW9uIG51bWJlciB0byBkZXRlY3QgYW5kIGludmFsaWRhdGVcclxuICAgIC8vIG9sZCBhbmQgaW5jb21wYXRpYmxlIHNhdmUgZmlsZXNcclxuICAgIHB1YmxpYyB2ZXJzaW9uOiBudW1iZXI7XHJcblxyXG4gICAgcHVibGljIGJhbmFuYXM6IG51bWJlcjtcclxuICAgIHB1YmxpYyBtb25rZXlzOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgdGFyZ2V0SW5kZXg6IG51bWJlcjtcclxuICAgIHB1YmxpYyBrZXlib2FyZEtleXM6IHN0cmluZ1tdO1xyXG4gICAgcHVibGljIG1heEtleWJvYXJkS2V5czogbnVtYmVyO1xyXG4gICAgcHVibGljIHRhcmdldE93bmVkOiBib29sZWFuW107XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIGJhbmFuYXM6IG51bWJlcixcclxuICAgICAgICBtb25rZXlzOiBudW1iZXIsXHJcbiAgICAgICAgdGFyZ2V0SW5kZXg6IG51bWJlcixcclxuICAgICAgICBrZXlib2FyZEtleXM6IHN0cmluZ1tdLFxyXG4gICAgICAgIG1heEtleWJvYXJkS2V5czogbnVtYmVyLFxyXG4gICAgICAgIHRhcmdldE93bmVkOiBib29sZWFuW10sXHJcbiAgICApIHtcclxuICAgICAgICB0aGlzLnZlcnNpb24gPSBzYXZlRmlsZVZlcnNpb247XHJcbiAgICAgICAgdGhpcy5iYW5hbmFzID0gYmFuYW5hcztcclxuICAgICAgICB0aGlzLm1vbmtleXMgPSBtb25rZXlzO1xyXG4gICAgICAgIHRoaXMudGFyZ2V0SW5kZXggPSB0YXJnZXRJbmRleDtcclxuICAgICAgICB0aGlzLmtleWJvYXJkS2V5cyA9IGtleWJvYXJkS2V5cztcclxuICAgICAgICB0aGlzLm1heEtleWJvYXJkS2V5cyA9IG1heEtleWJvYXJkS2V5cztcclxuICAgICAgICB0aGlzLnRhcmdldE93bmVkID0gdGFyZ2V0T3duZWQ7XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIFRhcmdldCB7XHJcbiAgICBwdWJsaWMgbGV0dGVyczogc3RyaW5nW107XHJcbiAgICBwdWJsaWMgZGlzcGxheVN0cmluZzogc3RyaW5nO1xyXG4gICAgcHVibGljIHJld2FyZHM6IG51bWJlcltdO1xyXG4gICAgcHVibGljIHByaWNlOiBudW1iZXI7XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIGxldHRlcnM6IHN0cmluZ1tdLFxyXG4gICAgICAgIGRpc3BsYXlTdHJpbmc6IHN0cmluZyxcclxuICAgICAgICByZXdhcmRzOiBudW1iZXJbXSxcclxuICAgICAgICBwcmljZTogbnVtYmVyLFxyXG4gICAgKSB7XHJcbiAgICAgICAgdGhpcy5sZXR0ZXJzID0gbGV0dGVycztcclxuICAgICAgICB0aGlzLmRpc3BsYXlTdHJpbmcgPSBkaXNwbGF5U3RyaW5nO1xyXG4gICAgICAgIHRoaXMucmV3YXJkcyA9IHJld2FyZHM7XHJcbiAgICAgICAgdGhpcy5wcmljZSA9IHByaWNlO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IFRhcmdldCB9IGZyb20gXCIuL3RhcmdldFwiO1xyXG5cclxuZXhwb3J0IGxldCB0YXJnZXRzOiBUYXJnZXRbXSA9IFtcclxuICAgIG5ldyBUYXJnZXQoXHJcbiAgICAgICAgW1wiQ1wiLCBcIkFcIiwgXCJUXCJdLFxyXG4gICAgICAgIFwiQ0FUXCIsXHJcbiAgICAgICAgWzEsIDgsIDQwXSxcclxuICAgICAgICAwLFxyXG4gICAgKSxcclxuICAgIG5ldyBUYXJnZXQoXHJcbiAgICAgICAgW1wiSFwiLCBcIk9cIiwgXCJPXCIsIFwiVFwiXSxcclxuICAgICAgICBcIkhPT1RcIixcclxuICAgICAgICBbNSwgMTAsIDQwLCAxODBdLFxyXG4gICAgICAgIDIwMDAsXHJcbiAgICApLFxyXG4gICAgbmV3IFRhcmdldChcclxuICAgICAgICBbXCJSXCIsIFwiRVwiLCBcIkZcIiwgXCJFXCIsIFwiUlwiLCBcIkVcIiwgXCJFXCJdLFxyXG4gICAgICAgIFwiUkVGRVJFRVwiLFxyXG4gICAgICAgIFs1LCA1LCA1LCAyMCwgNDAwLCAyNDAwLCAxNTAwMF0sXHJcbiAgICAgICAgMzAwMDAsXHJcbiAgICApLFxyXG4gICAgLy8gbmV3IFRhcmdldChcclxuICAgIC8vICAgICBbXSxcclxuICAgIC8vICAgICBcIlwiLFxyXG4gICAgLy8gICAgIFtdLFxyXG4gICAgLy8gICAgIDAsXHJcbiAgICAvLyApLFxyXG5dO1xyXG4iLCJpbXBvcnQgeyBjdHgsIGRyYXdhYmxlcywgZywgcGxheWVyRGljdGlvbmFyeSwgdXBkYXRlYWJsZXMgfSBmcm9tIFwiLi9nbG9iYWxcIjtcclxuaW1wb3J0IHsgY291bnRNYXRjaGluZ0xldHRlcnMsIGdldFJhbmRvbUNoYXJhY3RlciwgcmdiU3RyaW5nIH0gZnJvbSBcIi4vdXRpbFwiO1xyXG5cclxubGV0IHRleHREaXNwbGF5czogVGV4dERpc3BsYXlbXSA9IFtdO1xyXG5leHBvcnQgY2xhc3MgVGV4dERpc3BsYXkge1xyXG4gICAgcHVibGljIHg6IG51bWJlcjtcclxuICAgIHB1YmxpYyB5OiBudW1iZXI7XHJcbiAgICBwdWJsaWMgaGVpZ2h0OiBudW1iZXI7XHJcbiAgICBwdWJsaWMgd2lkdGg6IG51bWJlcjtcclxuICAgIHB1YmxpYyBpZDogbnVtYmVyO1xyXG4gICAgcHVibGljIGxldHRlcnNUb1R5cGVSZW1haW5kZXI6IG51bWJlciA9IDA7XHJcbiAgICBwdWJsaWMgbGFzdFdvcmRGaW5pc2hUaW1lTWlsbGlzOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgY3VycmVudFN0cmluZzogc3RyaW5nW10gPSBbXTtcclxuICAgIHB1YmxpYyBjb3JyZWN0Q29sb3I6IHN0cmluZyA9IHJnYlN0cmluZygyNTUsIDE4NywgMCk7XHJcbiAgICBwdWJsaWMgcHJldmlvdXNFdmFsdWF0aW9uOiBhbnk7XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIC8vIHg6IG51bWJlcixcclxuICAgICAgICAvLyB5OiBudW1iZXIsXHJcbiAgICAgICAgLy8gaGVpZ2h0OiBudW1iZXIsXHJcbiAgICApIHtcclxuICAgICAgICAvLyB0aGlzLnggPSB4O1xyXG4gICAgICAgIC8vIHRoaXMueSA9IHk7XHJcbiAgICAgICAgLy8gdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XHJcblxyXG4gICAgICAgIHRoaXMuaWQgPSBnLmlkQ291bnRlcjtcclxuICAgICAgICBnLmlkQ291bnRlciArPSAxO1xyXG4gICAgICAgIGRyYXdhYmxlcy5wdXNoKHRoaXMpO1xyXG4gICAgICAgIHVwZGF0ZWFibGVzLnB1c2godGhpcyk7XHJcbiAgICAgICAgdGV4dERpc3BsYXlzLnB1c2godGhpcyk7XHJcbiAgICAgICAgYWxpZ25UZXh0RGlzcGxheXNUb0dyaWQoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdXBkYXRlKGN1cnJlbnRUaW1lTWlsbGlzOiBudW1iZXIsIGVsYXBzZWRUaW1lTWlsbGlzOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmxldHRlcnNUb1R5cGVSZW1haW5kZXIgKz0gZWxhcHNlZFRpbWVNaWxsaXMgLyAxMDAwICogZy5sZXR0ZXJzUGVyU2Vjb25kO1xyXG5cclxuICAgICAgICAvLyBNYWtlIGEgZmluaXNoZWQgd29yZCBzdGF5IG9uIHNjcmVlbiBmb3IgNTAwbXMsIG9yIHVudGlsXHJcbiAgICAgICAgLy8gYW5vdGhlciBsZXR0ZXIgaXMgdHlwZWRcclxuICAgICAgICBpZiAoKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5sYXN0V29yZEZpbmlzaFRpbWVNaWxsaXMgIT09IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICAgICAgJiYgKGN1cnJlbnRUaW1lTWlsbGlzIC0gdGhpcy5sYXN0V29yZEZpbmlzaFRpbWVNaWxsaXMpID4gNTAwXHJcbiAgICAgICAgICAgICkgfHwgKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5sZXR0ZXJzVG9UeXBlUmVtYWluZGVyID49IDFcclxuICAgICAgICAgICAgICAgICYmIHRoaXMuY3VycmVudFN0cmluZy5sZW5ndGggPj0gZy5jdXJyZW50VGFyZ2V0LmxldHRlcnMubGVuZ3RoXHJcbiAgICAgICAgICAgICkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFN0cmluZyA9IFtdO1xyXG4gICAgICAgICAgICB0aGlzLmxhc3RXb3JkRmluaXNoVGltZU1pbGxpcyA9IHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gR2VuZXJhdGUgdGhlIG5lZWRlZCBjaGFyYWN0ZXJzIGFuZCBhd2FyZCBiYW5hbmFzXHJcbiAgICAgICAgd2hpbGUgKHRoaXMubGV0dGVyc1RvVHlwZVJlbWFpbmRlciA+PSAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGV0dGVyc1RvVHlwZVJlbWFpbmRlciAtPSAxO1xyXG4gICAgICAgICAgICBpZiAoZy5jaGFyYWN0ZXJzVG9DaG9vc2VGcm9tLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IGNoYXJhY3RlciA9IGdldFJhbmRvbUNoYXJhY3RlcigpO1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRTdHJpbmcucHVzaChjaGFyYWN0ZXIpO1xyXG4gICAgICAgICAgICBsZXQgZXZhbHVhdGlvbiA9IHRoaXMuZXZhbHVhdGUodGhpcy5jdXJyZW50U3RyaW5nLCBwbGF5ZXJEaWN0aW9uYXJ5KTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudFN0cmluZy5sZW5ndGggPj0gZy5jdXJyZW50VGFyZ2V0LmxldHRlcnMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxhc3RXb3JkRmluaXNoVGltZU1pbGxpcyA9IGN1cnJlbnRUaW1lTWlsbGlzO1xyXG4gICAgICAgICAgICAgICAgLy8gbGV0IG1hdGNoaW5nTGV0dGVyczogbnVtYmVyID0gY291bnRNYXRjaGluZ0xldHRlcnMoXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy5jdXJyZW50U3RyaW5nLCBnLmN1cnJlbnRUYXJnZXQubGV0dGVycyk7XHJcbiAgICAgICAgICAgICAgICAvLyBpZiAobWF0Y2hpbmdMZXR0ZXJzID4gMCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGJhbmFuYXNUb0FkZCA9IGV2YWx1YXRpb24ubWF0Y2hDb3VudHNcclxuICAgICAgICAgICAgICAgICAgICAucmVkdWNlKChzOiBudW1iZXIsIHg6IG51bWJlcikgPT4gcyArIHggKiB4KTtcclxuICAgICAgICAgICAgICAgIC8vIChnLmN1cnJlbnRUYXJnZXQucmV3YXJkc1ttYXRjaGluZ0xldHRlcnMgLSAxXVxyXG4gICAgICAgICAgICAgICAgLy8gICAgICsgZy5hZGRpdGl2ZUZsYXRCb251cykgKiAoMSArIGcuYWRkaXRpdmVQZXJjZW50Qm9udXMpO1xyXG4gICAgICAgICAgICAgICAgZy5iYW5hbmFzICs9IGJhbmFuYXNUb0FkZDtcclxuICAgICAgICAgICAgICAgIGcuaW5jb21lQWNjdW11bGF0b3IgKz0gYmFuYW5hc1RvQWRkO1xyXG4gICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubGV0dGVyc1RvVHlwZVJlbWFpbmRlciA+PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50U3RyaW5nID0gW107XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5wcmV2aW91c0V2YWx1YXRpb24gPSBldmFsdWF0aW9uO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgcHVibGljIGRyYXcoKSB7XHJcbiAgICAgICAgbGV0IGN1cnJlbnRTdHJpbmcgPSB0aGlzLmN1cnJlbnRTdHJpbmc7XHJcbiAgICAgICAgbGV0IGZvbnRTaXplOiBudW1iZXIgPSB0aGlzLmhlaWdodCAqIDQgLyA3O1xyXG4gICAgICAgIGN0eC5zYXZlKCk7XHJcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gXCJibGFja1wiO1xyXG4gICAgICAgIGN0eC5zdHJva2VSZWN0KFxyXG4gICAgICAgICAgICB0aGlzLngsXHJcbiAgICAgICAgICAgIHRoaXMueSxcclxuICAgICAgICAgICAgdGhpcy53aWR0aCxcclxuICAgICAgICAgICAgdGhpcy5oZWlnaHRcclxuICAgICAgICApO1xyXG4gICAgICAgIGN0eC5mb250ID0gZm9udFNpemUgKyBcInB4IEFyaWFsXCI7XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGcuY3VycmVudFRhcmdldC5sZXR0ZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBjaGFyYWN0ZXI6IHN0cmluZztcclxuICAgICAgICAgICAgaWYgKGkgPj0gY3VycmVudFN0cmluZy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIGNoYXJhY3RlciA9IFwiX1wiO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY2hhcmFjdGVyID0gY3VycmVudFN0cmluZ1tpXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgZ3JhZGVGb3JMZXR0ZXIgPSAwO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2aW91c0V2YWx1YXRpb24gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgZ3JhZGVGb3JMZXR0ZXIgPSB0aGlzLnByZXZpb3VzRXZhbHVhdGlvbi5tYXhHcmFkZVBlckxldHRlcltpXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoY2hhcmFjdGVyID09PSBcIl9cIikge1xyXG4gICAgICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwiYmxhY2tcIjtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChncmFkZUZvckxldHRlciA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IHRoaXMuY29ycmVjdENvbG9yO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGdyYWRlRm9yTGV0dGVyID09PSAyKSB7XHJcbiAgICAgICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJyZWRcIjtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChncmFkZUZvckxldHRlciA+PSAzKSB7XHJcbiAgICAgICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJibHVlXCI7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJibGFja1wiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGN0eC5maWxsVGV4dChcclxuICAgICAgICAgICAgICAgIGNoYXJhY3RlcixcclxuICAgICAgICAgICAgICAgIHRoaXMueCArIGZvbnRTaXplICogMC4xNSArIGZvbnRTaXplICogaSxcclxuICAgICAgICAgICAgICAgIHRoaXMueSArIGZvbnRTaXplICogMS4yXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGN0eC5yZXN0b3JlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGV2YWx1YXRlKGxldHRlcnM6IHN0cmluZ1tdLCBkaWN0aW9uYXJ5OiBzdHJpbmdbXVtdKToge1xyXG4gICAgICAgICAgICBncmFkZU1hdHJpeDogbnVtYmVyW11bXSxcclxuICAgICAgICAgICAgbWF0Y2hDb3VudHM6IG51bWJlcltdLFxyXG4gICAgICAgICAgICBtYXhHcmFkZVBlckxldHRlcjogbnVtYmVyW10sXHJcbiAgICAgICAgfVxyXG4gICAge1xyXG4gICAgICAgIGxldCBncmFkZU1hdHJpeDogbnVtYmVyW11bXSA9IFtdO1xyXG4gICAgICAgIGxldCBtYXRjaENvdW50czogbnVtYmVyW10gPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRpY3Rpb25hcnkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IHRhcmdldExldHRlcnM6IHN0cmluZ1tdID0gZGljdGlvbmFyeVtpXTtcclxuICAgICAgICAgICAgbGV0IGdyYWRlczogbnVtYmVyW10gPSBbXTtcclxuICAgICAgICAgICAgbGV0IG1hdGNoQ291bnQ6IG51bWJlciA9IDA7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGFyZ2V0TGV0dGVycy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGdyYWRlOiBudW1iZXIgPSB0YXJnZXRMZXR0ZXJzW2pdID09PSBsZXR0ZXJzW2pdID8gMSA6IDA7XHJcbiAgICAgICAgICAgICAgICBncmFkZXMucHVzaChncmFkZSlcclxuICAgICAgICAgICAgICAgIG1hdGNoQ291bnQgKz0gZ3JhZGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbWF0Y2hDb3VudHMucHVzaChtYXRjaENvdW50KTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0YXJnZXRMZXR0ZXJzLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBncmFkZXNbal0gKj0gbWF0Y2hDb3VudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBncmFkZU1hdHJpeC5wdXNoKGdyYWRlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgbGV0IG1heEdyYWRlUGVyTGV0dGVyOiBudW1iZXJbXSA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGV0dGVycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgbWF4OiBudW1iZXIgPSAwO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGdyYWRlTWF0cml4Lmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZ3JhZGVNYXRyaXhbal1baV0gPiBtYXgpIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXggPSBncmFkZU1hdHJpeFtqXVtpXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBtYXhHcmFkZVBlckxldHRlci5wdXNoKG1heCk7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgZ3JhZGVNYXRyaXg6IGdyYWRlTWF0cml4LFxyXG4gICAgICAgICAgICBtYXRjaENvdW50czogbWF0Y2hDb3VudHMsXHJcbiAgICAgICAgICAgIG1heEdyYWRlUGVyTGV0dGVyOiBtYXhHcmFkZVBlckxldHRlcixcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhbGlnblRleHREaXNwbGF5c1RvR3JpZCgpIHtcclxuICAgIGxldCBudW1EaXNwbGF5cyA9IHRleHREaXNwbGF5cy5sZW5ndGg7XHJcbiAgICBsZXQgeE9mZnNldCA9IDMwO1xyXG4gICAgbGV0IHlPZmZzZXQgPSAxNTA7XHJcbiAgICBsZXQgbWF4V2lkdGggPSA2ODA7XHJcbiAgICBsZXQgbWF4SGVpZ2h0ID0gMjcwO1xyXG4gICAgbGV0IHdpZHRoO1xyXG4gICAgbGV0IG51bUNvbHVtbnM7XHJcbiAgICBsZXQgbm9uRW1wdHlSb3dzO1xyXG4gICAgbGV0IGhlaWdodCA9IDUzO1xyXG4gICAgZG8ge1xyXG4gICAgICAgIHdpZHRoID0gZy5jdXJyZW50VGFyZ2V0LmxldHRlcnMubGVuZ3RoICogaGVpZ2h0ICogNCAvIDc7XHJcbiAgICAgICAgbnVtQ29sdW1ucyA9IE1hdGguZmxvb3IobWF4V2lkdGggLyB3aWR0aCk7XHJcbiAgICAgICAgbm9uRW1wdHlSb3dzID0gTWF0aC5jZWlsKG51bURpc3BsYXlzIC8gbnVtQ29sdW1ucyk7XHJcbiAgICAgICAgaWYgKGhlaWdodCAqIG5vbkVtcHR5Um93cyA8PSBtYXhIZWlnaHQpIHtcclxuICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICB9XHJcbiAgICAgICAgaGVpZ2h0IC09IDE7XHJcbiAgICB9IHdoaWxlKHRydWUpO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtRGlzcGxheXM7IGkrKykge1xyXG4gICAgICAgIGxldCByb3cgPSBNYXRoLmZsb29yKGkgLyBudW1Db2x1bW5zKTtcclxuICAgICAgICBsZXQgY29sdW1uID0gaSAlIG51bUNvbHVtbnM7XHJcbiAgICAgICAgbGV0IHggPSBjb2x1bW4gKiB3aWR0aCArIHhPZmZzZXQ7XHJcbiAgICAgICAgbGV0IHkgPSByb3cgKiBoZWlnaHQgKyB5T2Zmc2V0O1xyXG4gICAgICAgIHRleHREaXNwbGF5c1tpXS54ID0geDtcclxuICAgICAgICB0ZXh0RGlzcGxheXNbaV0ueSA9IHk7XHJcbiAgICAgICAgdGV4dERpc3BsYXlzW2ldLmhlaWdodCA9IGhlaWdodDtcclxuICAgICAgICB0ZXh0RGlzcGxheXNbaV0ud2lkdGggPSB3aWR0aDtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBnIH0gZnJvbSBcIi4vZ2xvYmFsXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY291bnRNYXRjaGluZ0xldHRlcnMoczE6IHN0cmluZ1tdLCBzMjogc3RyaW5nW10pIHtcclxuICAgIGxldCBtYXRjaGluZyA9IDA7XHJcbiAgICBsZXQgbWluTGVuZ3RoID0gTWF0aC5taW4oczEubGVuZ3RoLCBzMi5sZW5ndGgpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtaW5MZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmIChzMVtpXSA9PT0gczJbaV0pIHtcclxuICAgICAgICAgICAgbWF0Y2hpbmcrKztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbWF0Y2hpbmc7XHJcbn1cclxuXHJcbi8vIEJ1ZmZlciB0aGUgcmFuZG9tIGNoYXJhY3RlcnMgd2UgZ2V0IGZyb20gY3J5cHRvIHRvIGltcHJvdmVcclxuLy8gdGhlIHNwZWVkLiBBbHNvLCBJIHRlc3RlZCBpdCwgYW5kIGl0J3MgZmFzdGVyIHRoYW4gdXNpbmdcclxuLy8gTWF0aC5yYW5kb20sIGFuZCBob3BlZnVsbHkgaGFzIGJldHRlciByYW5kb21uZXNzXHJcbmxldCBidWZmZXJTaXplID0gMTAwMDA7XHJcbmxldCBudW1iZXJCdWZmZXI6IFVpbnQxNkFycmF5ID0gZ2V0UmFuZG9tTnVtYmVycyhidWZmZXJTaXplKTtcclxubGV0IG51bWJlckJ1ZmZlckluZGV4ID0gLTE7XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRSYW5kb21DaGFyYWN0ZXIoKSB7XHJcbiAgICBudW1iZXJCdWZmZXJJbmRleCArPSAxO1xyXG4gICAgaWYgKG51bWJlckJ1ZmZlckluZGV4ID49IGJ1ZmZlclNpemUpIHtcclxuICAgICAgICBudW1iZXJCdWZmZXJJbmRleCA9IDA7XHJcbiAgICAgICAgbnVtYmVyQnVmZmVyID0gZ2V0UmFuZG9tTnVtYmVycyhidWZmZXJTaXplKTtcclxuICAgIH1cclxuICAgIGxldCByYW5kb21OdW1iZXIgPSBudW1iZXJCdWZmZXJbbnVtYmVyQnVmZmVySW5kZXhdO1xyXG4gICAgcmV0dXJuIGcuY2hhcmFjdGVyc1RvQ2hvb3NlRnJvbVtyYW5kb21OdW1iZXJdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UmFuZG9tTnVtYmVycyhuOiBudW1iZXIpIHtcclxuICAgIGxldCByYW5kb21OdW1iZXJzID0gbmV3IFVpbnQxNkFycmF5KG4pO1xyXG4gICAgcmFuZG9tTnVtYmVycyA9IGNyeXB0by5nZXRSYW5kb21WYWx1ZXMocmFuZG9tTnVtYmVycyk7XHJcbiAgICByZXR1cm4gcmFuZG9tTnVtYmVycztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJnYlN0cmluZyhyZWQ6IG51bWJlciwgZ3JlZW46IG51bWJlciwgYmx1ZTogbnVtYmVyKSB7XHJcbiAgICByZXR1cm4gXCJyZ2IoXCIgKyByZWQgKyBcIixcIiArIGdyZWVuICsgXCIsXCIgKyBibHVlICsgXCIpXCI7XHJcbn1cclxuXHJcbi8vIHNvdXJjZTogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvTWF0aC9yYW5kb21cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFJhbmRvbUludChtaW46IG51bWJlciwgbWF4OiBudW1iZXIpIHtcclxuICAgIG1pbiA9IE1hdGguY2VpbChtaW4pO1xyXG4gICAgbWF4ID0gTWF0aC5mbG9vcihtYXgpO1xyXG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluKTsgLy9UaGUgbWF4aW11bSBpcyBleGNsdXNpdmUgYW5kIHRoZSBtaW5pbXVtIGlzIGluY2x1c2l2ZVxyXG59IiwiLy8gc291cmNlID0gaHR0cHM6Ly9zaW1wbGUud2lraXBlZGlhLm9yZy93aWtpL1dpa2lwZWRpYTpCYXNpY19FbmdsaXNoX2NvbWJpbmVkX3dvcmRsaXN0XHJcbmV4cG9ydCBsZXQgd29yZHMgPSBbXHJcbiAgICBbXHJcbiAgICAgICAgXCJBQ1RcIixcclxuICAgICAgICBcIkFHRVwiLFxyXG4gICAgICAgIFwiQUdPXCIsXHJcbiAgICAgICAgXCJBSVJcIixcclxuICAgICAgICBcIkFMTFwiLFxyXG4gICAgICAgIFwiQU5EXCIsXHJcbiAgICAgICAgXCJBTlRcIixcclxuICAgICAgICBcIkFOWVwiLFxyXG4gICAgICAgIFwiQVJDXCIsXHJcbiAgICAgICAgXCJBUk1cIixcclxuICAgICAgICBcIkFSVFwiLFxyXG4gICAgICAgIFwiQVNIXCIsXHJcbiAgICAgICAgXCJCQURcIixcclxuICAgICAgICBcIkJBR1wiLFxyXG4gICAgICAgIFwiQkFSXCIsXHJcbiAgICAgICAgXCJCRURcIixcclxuICAgICAgICBcIkJFRVwiLFxyXG4gICAgICAgIFwiQkVUXCIsXHJcbiAgICAgICAgXCJCSVRcIixcclxuICAgICAgICBcIkJPWFwiLFxyXG4gICAgICAgIFwiQk9ZXCIsXHJcbiAgICAgICAgXCJCVURcIixcclxuICAgICAgICBcIkJVVFwiLFxyXG4gICAgICAgIFwiQ0FUXCIsXHJcbiAgICAgICAgXCJDT1dcIixcclxuICAgICAgICBcIkNSWVwiLFxyXG4gICAgICAgIFwiQ1VQXCIsXHJcbiAgICAgICAgXCJDVVRcIixcclxuICAgICAgICBcIkRBWVwiLFxyXG4gICAgICAgIFwiREVXXCIsXHJcbiAgICAgICAgXCJESVBcIixcclxuICAgICAgICBcIkRPR1wiLFxyXG4gICAgICAgIFwiRFJZXCIsXHJcbiAgICAgICAgXCJFQVJcIixcclxuICAgICAgICBcIkVHR1wiLFxyXG4gICAgICAgIFwiRU5EXCIsXHJcbiAgICAgICAgXCJFWUVcIixcclxuICAgICAgICBcIkZBTlwiLFxyXG4gICAgICAgIFwiRkFSXCIsXHJcbiAgICAgICAgXCJGQVRcIixcclxuICAgICAgICBcIkZJTlwiLFxyXG4gICAgICAgIFwiRkxZXCIsXHJcbiAgICAgICAgXCJGT1JcIixcclxuICAgICAgICBcIkZVUlwiLFxyXG4gICAgICAgIFwiR0FTXCIsXHJcbiAgICAgICAgXCJHRVRcIixcclxuICAgICAgICBcIkdPRFwiLFxyXG4gICAgICAgIFwiR1VNXCIsXHJcbiAgICAgICAgXCJHVU5cIixcclxuICAgICAgICBcIkhBVFwiLFxyXG4gICAgICAgIFwiSE9XXCIsXHJcbiAgICAgICAgXCJJQ0VcIixcclxuICAgICAgICBcIklMTFwiLFxyXG4gICAgICAgIFwiSU5LXCIsXHJcbiAgICAgICAgXCJKQU1cIixcclxuICAgICAgICBcIkpBV1wiLFxyXG4gICAgICAgIFwiSlVHXCIsXHJcbiAgICAgICAgXCJLRVlcIixcclxuICAgICAgICBcIkxBR1wiLFxyXG4gICAgICAgIFwiTEFXXCIsXHJcbiAgICAgICAgXCJMRUdcIixcclxuICAgICAgICBcIkxFVFwiLFxyXG4gICAgICAgIFwiTElEXCIsXHJcbiAgICAgICAgXCJMSVBcIixcclxuICAgICAgICBcIkxPV1wiLFxyXG4gICAgICAgIFwiTUFOXCIsXHJcbiAgICAgICAgXCJNQVBcIixcclxuICAgICAgICBcIk1BWVwiLFxyXG4gICAgICAgIFwiTVVEXCIsXHJcbiAgICAgICAgXCJORVRcIixcclxuICAgICAgICBcIk5FV1wiLFxyXG4gICAgICAgIFwiTk9UXCIsXHJcbiAgICAgICAgXCJOT1dcIixcclxuICAgICAgICBcIk5VVFwiLFxyXG4gICAgICAgIFwiT0ZGXCIsXHJcbiAgICAgICAgXCJPSUxcIixcclxuICAgICAgICBcIk9MRFwiLFxyXG4gICAgICAgIFwiT05FXCIsXHJcbiAgICAgICAgXCJPUkVcIixcclxuICAgICAgICBcIk9VVFwiLFxyXG4gICAgICAgIFwiT1dOXCIsXHJcbiAgICAgICAgXCJQQURcIixcclxuICAgICAgICBcIlBBTlwiLFxyXG4gICAgICAgIFwiUEVOXCIsXHJcbiAgICAgICAgXCJQSUdcIixcclxuICAgICAgICBcIlBJTlwiLFxyXG4gICAgICAgIFwiUE9UXCIsXHJcbiAgICAgICAgXCJQVVRcIixcclxuICAgICAgICBcIlJBVFwiLFxyXG4gICAgICAgIFwiUkFZXCIsXHJcbiAgICAgICAgXCJSRURcIixcclxuICAgICAgICBcIlJPRFwiLFxyXG4gICAgICAgIFwiUk9UXCIsXHJcbiAgICAgICAgXCJSVUJcIixcclxuICAgICAgICBcIlJVTVwiLFxyXG4gICAgICAgIFwiUlVOXCIsXHJcbiAgICAgICAgXCJTQUNcIixcclxuICAgICAgICBcIlNBRFwiLFxyXG4gICAgICAgIFwiU0FZXCIsXHJcbiAgICAgICAgXCJTRUFcIixcclxuICAgICAgICBcIlNFRVwiLFxyXG4gICAgICAgIFwiU0VUXCIsXHJcbiAgICAgICAgXCJTRVhcIixcclxuICAgICAgICBcIlNJUlwiLFxyXG4gICAgICAgIFwiU0lYXCIsXHJcbiAgICAgICAgXCJTS1lcIixcclxuICAgICAgICBcIlNPTlwiLFxyXG4gICAgICAgIFwiU1VNXCIsXHJcbiAgICAgICAgXCJTVU5cIixcclxuICAgICAgICBcIlRBUFwiLFxyXG4gICAgICAgIFwiVEFYXCIsXHJcbiAgICAgICAgXCJURUFcIixcclxuICAgICAgICBcIlRFTlwiLFxyXG4gICAgICAgIFwiVEhFXCIsXHJcbiAgICAgICAgXCJUSUVcIixcclxuICAgICAgICBcIlRJTlwiLFxyXG4gICAgICAgIFwiVE9FXCIsXHJcbiAgICAgICAgXCJUT09cIixcclxuICAgICAgICBcIlRPUFwiLFxyXG4gICAgICAgIFwiVFdPXCIsXHJcbiAgICAgICAgXCJVU0VcIixcclxuICAgICAgICBcIldBUlwiLFxyXG4gICAgICAgIFwiV0FYXCIsXHJcbiAgICAgICAgXCJXQVlcIixcclxuICAgICAgICBcIldFVFwiLFxyXG4gICAgICAgIFwiV0hPXCIsXHJcbiAgICAgICAgXCJXSFlcIixcclxuICAgICAgICBcIllFU1wiLFxyXG4gICAgICAgIFwiWU9VXCIsXHJcbiAgICBdLFxyXG4gICAgW1xyXG4gICAgICAgIFwiQUJMRVwiLFxyXG4gICAgICAgIFwiQUNJRFwiLFxyXG4gICAgICAgIFwiQUxTT1wiLFxyXG4gICAgICAgIFwiQVJDSFwiLFxyXG4gICAgICAgIFwiQVJFQVwiLFxyXG4gICAgICAgIFwiQVJNWVwiLFxyXG4gICAgICAgIFwiQVhJU1wiLFxyXG4gICAgICAgIFwiQkFCWVwiLFxyXG4gICAgICAgIFwiQkFDS1wiLFxyXG4gICAgICAgIFwiQkFMRVwiLFxyXG4gICAgICAgIFwiQkFMTFwiLFxyXG4gICAgICAgIFwiQkFORFwiLFxyXG4gICAgICAgIFwiQkFOR1wiLFxyXG4gICAgICAgIFwiQkFOS1wiLFxyXG4gICAgICAgIFwiQkFSS1wiLFxyXG4gICAgICAgIFwiQkFTRVwiLFxyXG4gICAgICAgIFwiQkFUSFwiLFxyXG4gICAgICAgIFwiQkVBS1wiLFxyXG4gICAgICAgIFwiQkVBVFwiLFxyXG4gICAgICAgIFwiQkVFRlwiLFxyXG4gICAgICAgIFwiQkVFUlwiLFxyXG4gICAgICAgIFwiQkVMTFwiLFxyXG4gICAgICAgIFwiQkVMVFwiLFxyXG4gICAgICAgIFwiQkVOVFwiLFxyXG4gICAgICAgIFwiQklMTFwiLFxyXG4gICAgICAgIFwiQklSRFwiLFxyXG4gICAgICAgIFwiQklURVwiLFxyXG4gICAgICAgIFwiQkxPV1wiLFxyXG4gICAgICAgIFwiQkxVRVwiLFxyXG4gICAgICAgIFwiQk9BVFwiLFxyXG4gICAgICAgIFwiQk9EWVwiLFxyXG4gICAgICAgIFwiQk9NQlwiLFxyXG4gICAgICAgIFwiQk9ORVwiLFxyXG4gICAgICAgIFwiQk9PS1wiLFxyXG4gICAgICAgIFwiQk9PVFwiLFxyXG4gICAgICAgIFwiQk9USFwiLFxyXG4gICAgICAgIFwiQlVMQlwiLFxyXG4gICAgICAgIFwiQlVSTlwiLFxyXG4gICAgICAgIFwiQlVTWVwiLFxyXG4gICAgICAgIFwiQ0FGRVwiLFxyXG4gICAgICAgIFwiQ0FLRVwiLFxyXG4gICAgICAgIFwiQ0FMTFwiLFxyXG4gICAgICAgIFwiQ0FSRFwiLFxyXG4gICAgICAgIFwiQ0FSRVwiLFxyXG4gICAgICAgIFwiQ0FSVFwiLFxyXG4gICAgICAgIFwiQ0FTRVwiLFxyXG4gICAgICAgIFwiQ0FTVFwiLFxyXG4gICAgICAgIFwiQ0FWRVwiLFxyXG4gICAgICAgIFwiQ0VMTFwiLFxyXG4gICAgICAgIFwiQ0hJTlwiLFxyXG4gICAgICAgIFwiQ0xBV1wiLFxyXG4gICAgICAgIFwiQ0xBWVwiLFxyXG4gICAgICAgIFwiQ0xJUFwiLFxyXG4gICAgICAgIFwiQ0xVQlwiLFxyXG4gICAgICAgIFwiQ09BTFwiLFxyXG4gICAgICAgIFwiQ09BVFwiLFxyXG4gICAgICAgIFwiQ09ERVwiLFxyXG4gICAgICAgIFwiQ09JTFwiLFxyXG4gICAgICAgIFwiQ09MRFwiLFxyXG4gICAgICAgIFwiQ09NQlwiLFxyXG4gICAgICAgIFwiQ09NRVwiLFxyXG4gICAgICAgIFwiQ09PS1wiLFxyXG4gICAgICAgIFwiQ09PTFwiLFxyXG4gICAgICAgIFwiQ09QWVwiLFxyXG4gICAgICAgIFwiQ09SRFwiLFxyXG4gICAgICAgIFwiQ09SS1wiLFxyXG4gICAgICAgIFwiQ09TVFwiLFxyXG4gICAgICAgIFwiQ1JPUFwiLFxyXG4gICAgICAgIFwiQ1VTUFwiLFxyXG4gICAgICAgIFwiREFSS1wiLFxyXG4gICAgICAgIFwiREFURVwiLFxyXG4gICAgICAgIFwiREVBRFwiLFxyXG4gICAgICAgIFwiREVBUlwiLFxyXG4gICAgICAgIFwiREVCVFwiLFxyXG4gICAgICAgIFwiREVDS1wiLFxyXG4gICAgICAgIFwiREVFUFwiLFxyXG4gICAgICAgIFwiRElLRVwiLFxyXG4gICAgICAgIFwiRElWRVwiLFxyXG4gICAgICAgIFwiRE9MTFwiLFxyXG4gICAgICAgIFwiRE9PUlwiLFxyXG4gICAgICAgIFwiRE9XTlwiLFxyXG4gICAgICAgIFwiRFJPUFwiLFxyXG4gICAgICAgIFwiRFVDVFwiLFxyXG4gICAgICAgIFwiRFVMTFwiLFxyXG4gICAgICAgIFwiRFVTVFwiLFxyXG4gICAgICAgIFwiRFVUWVwiLFxyXG4gICAgICAgIFwiRUFDSFwiLFxyXG4gICAgICAgIFwiRUFTVFwiLFxyXG4gICAgICAgIFwiRUFTWVwiLFxyXG4gICAgICAgIFwiRURHRVwiLFxyXG4gICAgICAgIFwiRU5WWVwiLFxyXG4gICAgICAgIFwiRVZFTlwiLFxyXG4gICAgICAgIFwiRVZFUlwiLFxyXG4gICAgICAgIFwiRkFDRVwiLFxyXG4gICAgICAgIFwiRkFDVFwiLFxyXG4gICAgICAgIFwiRkFJUlwiLFxyXG4gICAgICAgIFwiRkFMTFwiLFxyXG4gICAgICAgIFwiRkFSTVwiLFxyXG4gICAgICAgIFwiRkVBUlwiLFxyXG4gICAgICAgIFwiRklSRVwiLFxyXG4gICAgICAgIFwiRklTSFwiLFxyXG4gICAgICAgIFwiRklWRVwiLFxyXG4gICAgICAgIFwiRkxBR1wiLFxyXG4gICAgICAgIFwiRkxBVFwiLFxyXG4gICAgICAgIFwiRkxPV1wiLFxyXG4gICAgICAgIFwiRk9MRFwiLFxyXG4gICAgICAgIFwiRk9PRFwiLFxyXG4gICAgICAgIFwiRk9PVFwiLFxyXG4gICAgICAgIFwiRk9SS1wiLFxyXG4gICAgICAgIFwiRk9STVwiLFxyXG4gICAgICAgIFwiRk9VUlwiLFxyXG4gICAgICAgIFwiRk9XTFwiLFxyXG4gICAgICAgIFwiRlJFRVwiLFxyXG4gICAgICAgIFwiRlJPTVwiLFxyXG4gICAgICAgIFwiRlVMTFwiLFxyXG4gICAgICAgIFwiRlVNRVwiLFxyXG4gICAgICAgIFwiR0FURVwiLFxyXG4gICAgICAgIFwiR0VSTVwiLFxyXG4gICAgICAgIFwiR0lMTFwiLFxyXG4gICAgICAgIFwiR0lSTFwiLFxyXG4gICAgICAgIFwiR0lWRVwiLFxyXG4gICAgICAgIFwiR09BVFwiLFxyXG4gICAgICAgIFwiR09MRFwiLFxyXG4gICAgICAgIFwiR09PRFwiLFxyXG4gICAgICAgIFwiR1JBTVwiLFxyXG4gICAgICAgIFwiR1JBWVwiLFxyXG4gICAgICAgIFwiR1JFWVwiLFxyXG4gICAgICAgIFwiR1JJUFwiLFxyXG4gICAgICAgIFwiSEFJUlwiLFxyXG4gICAgICAgIFwiSEFMRlwiLFxyXG4gICAgICAgIFwiSEFORFwiLFxyXG4gICAgICAgIFwiSEFSRFwiLFxyXG4gICAgICAgIFwiSEFURVwiLFxyXG4gICAgICAgIFwiSEFWRVwiLFxyXG4gICAgICAgIFwiSEVBRFwiLFxyXG4gICAgICAgIFwiSEVBVFwiLFxyXG4gICAgICAgIFwiSEVMUFwiLFxyXG4gICAgICAgIFwiSEVSRVwiLFxyXG4gICAgICAgIFwiSElHSFwiLFxyXG4gICAgICAgIFwiSElMTFwiLFxyXG4gICAgICAgIFwiSElSRVwiLFxyXG4gICAgICAgIFwiSElTU1wiLFxyXG4gICAgICAgIFwiSE9MRFwiLFxyXG4gICAgICAgIFwiSE9MRVwiLFxyXG4gICAgICAgIFwiSE9NRVwiLFxyXG4gICAgICAgIFwiSE9PRlwiLFxyXG4gICAgICAgIFwiSE9PS1wiLFxyXG4gICAgICAgIFwiSE9QRVwiLFxyXG4gICAgICAgIFwiSE9STlwiLFxyXG4gICAgICAgIFwiSE9TVFwiLFxyXG4gICAgICAgIFwiSE9VUlwiLFxyXG4gICAgICAgIFwiSFVOVFwiLFxyXG4gICAgICAgIFwiSFVSVFwiLFxyXG4gICAgICAgIFwiSURFQVwiLFxyXG4gICAgICAgIFwiSU5UT1wiLFxyXG4gICAgICAgIFwiSVJPTlwiLFxyXG4gICAgICAgIFwiSkFaWlwiLFxyXG4gICAgICAgIFwiSkVSS1wiLFxyXG4gICAgICAgIFwiSk9JTlwiLFxyXG4gICAgICAgIFwiSlVMWVwiLFxyXG4gICAgICAgIFwiSlVNUFwiLFxyXG4gICAgICAgIFwiSlVORVwiLFxyXG4gICAgICAgIFwiSlVSWVwiLFxyXG4gICAgICAgIFwiS0VFUFwiLFxyXG4gICAgICAgIFwiS0lDS1wiLFxyXG4gICAgICAgIFwiS0lORFwiLFxyXG4gICAgICAgIFwiS0lOR1wiLFxyXG4gICAgICAgIFwiS0lTU1wiLFxyXG4gICAgICAgIFwiS05FRVwiLFxyXG4gICAgICAgIFwiS05PVFwiLFxyXG4gICAgICAgIFwiTEFDRVwiLFxyXG4gICAgICAgIFwiTEFLRVwiLFxyXG4gICAgICAgIFwiTEFNRVwiLFxyXG4gICAgICAgIFwiTEFNUFwiLFxyXG4gICAgICAgIFwiTEFORFwiLFxyXG4gICAgICAgIFwiTEFTVFwiLFxyXG4gICAgICAgIFwiTEFURVwiLFxyXG4gICAgICAgIFwiTEFWQVwiLFxyXG4gICAgICAgIFwiTEFaWVwiLFxyXG4gICAgICAgIFwiTEVBRFwiLFxyXG4gICAgICAgIFwiTEVBRlwiLFxyXG4gICAgICAgIFwiTEVGVFwiLFxyXG4gICAgICAgIFwiTEVOU1wiLFxyXG4gICAgICAgIFwiTEVTU1wiLFxyXG4gICAgICAgIFwiTElGRVwiLFxyXG4gICAgICAgIFwiTElGVFwiLFxyXG4gICAgICAgIFwiTElLRVwiLFxyXG4gICAgICAgIFwiTElNRVwiLFxyXG4gICAgICAgIFwiTElORVwiLFxyXG4gICAgICAgIFwiTElOS1wiLFxyXG4gICAgICAgIFwiTElTVFwiLFxyXG4gICAgICAgIFwiTE9BRFwiLFxyXG4gICAgICAgIFwiTE9BTlwiLFxyXG4gICAgICAgIFwiTE9DS1wiLFxyXG4gICAgICAgIFwiTE9OR1wiLFxyXG4gICAgICAgIFwiTE9PS1wiLFxyXG4gICAgICAgIFwiTE9TU1wiLFxyXG4gICAgICAgIFwiTE9VRFwiLFxyXG4gICAgICAgIFwiTE9WRVwiLFxyXG4gICAgICAgIFwiTFVDS1wiLFxyXG4gICAgICAgIFwiTFVNUFwiLFxyXG4gICAgICAgIFwiTFVOR1wiLFxyXG4gICAgICAgIFwiTUFLRVwiLFxyXG4gICAgICAgIFwiTUFMRVwiLFxyXG4gICAgICAgIFwiTUFOWVwiLFxyXG4gICAgICAgIFwiTUFSS1wiLFxyXG4gICAgICAgIFwiTUFTU1wiLFxyXG4gICAgICAgIFwiTUFTVFwiLFxyXG4gICAgICAgIFwiTUVBTFwiLFxyXG4gICAgICAgIFwiTUVBTlwiLFxyXG4gICAgICAgIFwiTUVBVFwiLFxyXG4gICAgICAgIFwiTUVMVFwiLFxyXG4gICAgICAgIFwiTUVPV1wiLFxyXG4gICAgICAgIFwiTUVTU1wiLFxyXG4gICAgICAgIFwiTUlMS1wiLFxyXG4gICAgICAgIFwiTUlMTFwiLFxyXG4gICAgICAgIFwiTUlORFwiLFxyXG4gICAgICAgIFwiTUlORVwiLFxyXG4gICAgICAgIFwiTUlTVFwiLFxyXG4gICAgICAgIFwiTU9PRFwiLFxyXG4gICAgICAgIFwiTU9PTlwiLFxyXG4gICAgICAgIFwiTU9SRVwiLFxyXG4gICAgICAgIFwiTU9TVFwiLFxyXG4gICAgICAgIFwiTU9WRVwiLFxyXG4gICAgICAgIFwiTVVDSFwiLFxyXG4gICAgICAgIFwiTkFJTFwiLFxyXG4gICAgICAgIFwiTkFNRVwiLFxyXG4gICAgICAgIFwiTkFWWVwiLFxyXG4gICAgICAgIFwiTkVBUlwiLFxyXG4gICAgICAgIFwiTkVBVFwiLFxyXG4gICAgICAgIFwiTkVDS1wiLFxyXG4gICAgICAgIFwiTkVFRFwiLFxyXG4gICAgICAgIFwiTkVTVFwiLFxyXG4gICAgICAgIFwiTkVXU1wiLFxyXG4gICAgICAgIFwiTkVYVFwiLFxyXG4gICAgICAgIFwiTklDRVwiLFxyXG4gICAgICAgIFwiTklORVwiLFxyXG4gICAgICAgIFwiTk9ERVwiLFxyXG4gICAgICAgIFwiTk9TRVwiLFxyXG4gICAgICAgIFwiTk9URVwiLFxyXG4gICAgICAgIFwiT05DRVwiLFxyXG4gICAgICAgIFwiT05MWVwiLFxyXG4gICAgICAgIFwiT05UT1wiLFxyXG4gICAgICAgIFwiT1BFTlwiLFxyXG4gICAgICAgIFwiT1ZBTFwiLFxyXG4gICAgICAgIFwiT1ZFTlwiLFxyXG4gICAgICAgIFwiT1ZFUlwiLFxyXG4gICAgICAgIFwiUEFHRVwiLFxyXG4gICAgICAgIFwiUEFJTlwiLFxyXG4gICAgICAgIFwiUEFJUlwiLFxyXG4gICAgICAgIFwiUEFSS1wiLFxyXG4gICAgICAgIFwiUEFSVFwiLFxyXG4gICAgICAgIFwiUEFTVFwiLFxyXG4gICAgICAgIFwiUEFUSFwiLFxyXG4gICAgICAgIFwiUElQRVwiLFxyXG4gICAgICAgIFwiUExBTlwiLFxyXG4gICAgICAgIFwiUExBWVwiLFxyXG4gICAgICAgIFwiUExPV1wiLFxyXG4gICAgICAgIFwiUExVR1wiLFxyXG4gICAgICAgIFwiUE9PTFwiLFxyXG4gICAgICAgIFwiUE9PUlwiLFxyXG4gICAgICAgIFwiUE9TVFwiLFxyXG4gICAgICAgIFwiUFVMTFwiLFxyXG4gICAgICAgIFwiUFVNUFwiLFxyXG4gICAgICAgIFwiUFVSRVwiLFxyXG4gICAgICAgIFwiUFVSUlwiLFxyXG4gICAgICAgIFwiUFVTSFwiLFxyXG4gICAgICAgIFwiUkFDRVwiLFxyXG4gICAgICAgIFwiUkFJTFwiLFxyXG4gICAgICAgIFwiUkFJTlwiLFxyXG4gICAgICAgIFwiUkFURVwiLFxyXG4gICAgICAgIFwiUkVBTFwiLFxyXG4gICAgICAgIFwiUkVOVFwiLFxyXG4gICAgICAgIFwiUkVTVFwiLFxyXG4gICAgICAgIFwiUklDRVwiLFxyXG4gICAgICAgIFwiUklDSFwiLFxyXG4gICAgICAgIFwiUklOR1wiLFxyXG4gICAgICAgIFwiUklTRVwiLFxyXG4gICAgICAgIFwiUk9BRFwiLFxyXG4gICAgICAgIFwiUk9DS1wiLFxyXG4gICAgICAgIFwiUk9MTFwiLFxyXG4gICAgICAgIFwiUk9PRlwiLFxyXG4gICAgICAgIFwiUk9PTVwiLFxyXG4gICAgICAgIFwiUk9PVFwiLFxyXG4gICAgICAgIFwiUlVERVwiLFxyXG4gICAgICAgIFwiUlVMRVwiLFxyXG4gICAgICAgIFwiUlVTVFwiLFxyXG4gICAgICAgIFwiU0FGRVwiLFxyXG4gICAgICAgIFwiU0FJTFwiLFxyXG4gICAgICAgIFwiU0FMRVwiLFxyXG4gICAgICAgIFwiU0FMVFwiLFxyXG4gICAgICAgIFwiU0FNRVwiLFxyXG4gICAgICAgIFwiU0FORFwiLFxyXG4gICAgICAgIFwiU0VBTFwiLFxyXG4gICAgICAgIFwiU0VBVFwiLFxyXG4gICAgICAgIFwiU0VFRFwiLFxyXG4gICAgICAgIFwiU0VFTVwiLFxyXG4gICAgICAgIFwiU0VMRlwiLFxyXG4gICAgICAgIFwiU0VORFwiLFxyXG4gICAgICAgIFwiU0hJUFwiLFxyXG4gICAgICAgIFwiU0hPRVwiLFxyXG4gICAgICAgIFwiU0hPV1wiLFxyXG4gICAgICAgIFwiU0hVVFwiLFxyXG4gICAgICAgIFwiU0lERVwiLFxyXG4gICAgICAgIFwiU0lHTlwiLFxyXG4gICAgICAgIFwiU0lMS1wiLFxyXG4gICAgICAgIFwiU0lMTFwiLFxyXG4gICAgICAgIFwiU0laRVwiLFxyXG4gICAgICAgIFwiU0tJTlwiLFxyXG4gICAgICAgIFwiU0xJUFwiLFxyXG4gICAgICAgIFwiU0xPV1wiLFxyXG4gICAgICAgIFwiU05PV1wiLFxyXG4gICAgICAgIFwiU09BUFwiLFxyXG4gICAgICAgIFwiU09DS1wiLFxyXG4gICAgICAgIFwiU09GVFwiLFxyXG4gICAgICAgIFwiU09JTFwiLFxyXG4gICAgICAgIFwiU09NRVwiLFxyXG4gICAgICAgIFwiU09OR1wiLFxyXG4gICAgICAgIFwiU09SVFwiLFxyXG4gICAgICAgIFwiU09VUFwiLFxyXG4gICAgICAgIFwiU1BJVFwiLFxyXG4gICAgICAgIFwiU1BPVFwiLFxyXG4gICAgICAgIFwiU1RBUlwiLFxyXG4gICAgICAgIFwiU1RFTVwiLFxyXG4gICAgICAgIFwiU1RFUFwiLFxyXG4gICAgICAgIFwiU1RPUFwiLFxyXG4gICAgICAgIFwiU1VDSFwiLFxyXG4gICAgICAgIFwiU1dJTVwiLFxyXG4gICAgICAgIFwiVEFJTFwiLFxyXG4gICAgICAgIFwiVEFLRVwiLFxyXG4gICAgICAgIFwiVEFMS1wiLFxyXG4gICAgICAgIFwiVEFMTFwiLFxyXG4gICAgICAgIFwiVEFNRVwiLFxyXG4gICAgICAgIFwiVEFYSVwiLFxyXG4gICAgICAgIFwiVEVBUlwiLFxyXG4gICAgICAgIFwiVEVOVFwiLFxyXG4gICAgICAgIFwiVEVSTVwiLFxyXG4gICAgICAgIFwiVEVTVFwiLFxyXG4gICAgICAgIFwiVEhBTlwiLFxyXG4gICAgICAgIFwiVEhBVFwiLFxyXG4gICAgICAgIFwiVEhFTlwiLFxyXG4gICAgICAgIFwiVEhJTlwiLFxyXG4gICAgICAgIFwiVEhJU1wiLFxyXG4gICAgICAgIFwiVElERVwiLFxyXG4gICAgICAgIFwiVElMTFwiLFxyXG4gICAgICAgIFwiVElNRVwiLFxyXG4gICAgICAgIFwiVE9XTlwiLFxyXG4gICAgICAgIFwiVFJBUFwiLFxyXG4gICAgICAgIFwiVFJBWVwiLFxyXG4gICAgICAgIFwiVFJFRVwiLFxyXG4gICAgICAgIFwiVFJVRVwiLFxyXG4gICAgICAgIFwiVFVCRVwiLFxyXG4gICAgICAgIFwiVFVORVwiLFxyXG4gICAgICAgIFwiVFVSTlwiLFxyXG4gICAgICAgIFwiVFdJTlwiLFxyXG4gICAgICAgIFwiVUdMWVwiLFxyXG4gICAgICAgIFwiVU5ET1wiLFxyXG4gICAgICAgIFwiVU5JVFwiLFxyXG4gICAgICAgIFwiVVBPTlwiLFxyXG4gICAgICAgIFwiVVNFRFwiLFxyXG4gICAgICAgIFwiVkVSWVwiLFxyXG4gICAgICAgIFwiVklFV1wiLFxyXG4gICAgICAgIFwiVklTQVwiLFxyXG4gICAgICAgIFwiVk9MVFwiLFxyXG4gICAgICAgIFwiVk9URVwiLFxyXG4gICAgICAgIFwiV0FMS1wiLFxyXG4gICAgICAgIFwiV0FMTFwiLFxyXG4gICAgICAgIFwiV0FSTVwiLFxyXG4gICAgICAgIFwiV0FTSFwiLFxyXG4gICAgICAgIFwiV0FWRVwiLFxyXG4gICAgICAgIFwiV0VBS1wiLFxyXG4gICAgICAgIFwiV0VFS1wiLFxyXG4gICAgICAgIFwiV0VMTFwiLFxyXG4gICAgICAgIFwiV0VTVFwiLFxyXG4gICAgICAgIFwiV0hBVFwiLFxyXG4gICAgICAgIFwiV0hFTlwiLFxyXG4gICAgICAgIFwiV0hJUFwiLFxyXG4gICAgICAgIFwiV0lERVwiLFxyXG4gICAgICAgIFwiV0lGRVwiLFxyXG4gICAgICAgIFwiV0lMRFwiLFxyXG4gICAgICAgIFwiV0lMTFwiLFxyXG4gICAgICAgIFwiV0lORFwiLFxyXG4gICAgICAgIFwiV0lORVwiLFxyXG4gICAgICAgIFwiV0lOR1wiLFxyXG4gICAgICAgIFwiV0lSRVwiLFxyXG4gICAgICAgIFwiV0lTRVwiLFxyXG4gICAgICAgIFwiV0lUSFwiLFxyXG4gICAgICAgIFwiV09PRFwiLFxyXG4gICAgICAgIFwiV09PTFwiLFxyXG4gICAgICAgIFwiV09SRFwiLFxyXG4gICAgICAgIFwiV09SS1wiLFxyXG4gICAgICAgIFwiV09STVwiLFxyXG4gICAgICAgIFwiWUFXTlwiLFxyXG4gICAgICAgIFwiWUVBUlwiLFxyXG4gICAgICAgIFwiWklOQ1wiLFxyXG4gICAgXSxcclxuICAgIFtcclxuICAgICAgICBcIkFCT1VUXCIsXHJcbiAgICAgICAgXCJBQ1RPUlwiLFxyXG4gICAgICAgIFwiQUZURVJcIixcclxuICAgICAgICBcIkFHQUlOXCIsXHJcbiAgICAgICAgXCJBR0VOVFwiLFxyXG4gICAgICAgIFwiQUxPTkdcIixcclxuICAgICAgICBcIkFNT05HXCIsXHJcbiAgICAgICAgXCJBTkdMRVwiLFxyXG4gICAgICAgIFwiQU5HUllcIixcclxuICAgICAgICBcIkFOS0xFXCIsXHJcbiAgICAgICAgXCJBUFBMRVwiLFxyXG4gICAgICAgIFwiQVBSSUxcIixcclxuICAgICAgICBcIkFTU0VUXCIsXHJcbiAgICAgICAgXCJBV0FLRVwiLFxyXG4gICAgICAgIFwiQkFTRURcIixcclxuICAgICAgICBcIkJBU0lOXCIsXHJcbiAgICAgICAgXCJCRUFSRFwiLFxyXG4gICAgICAgIFwiQkVSUllcIixcclxuICAgICAgICBcIkJJUlRIXCIsXHJcbiAgICAgICAgXCJCTEFDS1wiLFxyXG4gICAgICAgIFwiQkxBREVcIixcclxuICAgICAgICBcIkJMQU1FXCIsXHJcbiAgICAgICAgXCJCTE9PRFwiLFxyXG4gICAgICAgIFwiQk9BUkRcIixcclxuICAgICAgICBcIkJSQUlOXCIsXHJcbiAgICAgICAgXCJCUkFLRVwiLFxyXG4gICAgICAgIFwiQlJBU1NcIixcclxuICAgICAgICBcIkJSQVZFXCIsXHJcbiAgICAgICAgXCJCUkVBRFwiLFxyXG4gICAgICAgIFwiQlJFQUtcIixcclxuICAgICAgICBcIkJSSUNLXCIsXHJcbiAgICAgICAgXCJCUk9XTlwiLFxyXG4gICAgICAgIFwiQlJVU0hcIixcclxuICAgICAgICBcIkJVTkNIXCIsXHJcbiAgICAgICAgXCJCVVJTVFwiLFxyXG4gICAgICAgIFwiQ0FVU0VcIixcclxuICAgICAgICBcIkNIQUlOXCIsXHJcbiAgICAgICAgXCJDSEFJUlwiLFxyXG4gICAgICAgIFwiQ0hBTEtcIixcclxuICAgICAgICBcIkNIRUFQXCIsXHJcbiAgICAgICAgXCJDSEVDS1wiLFxyXG4gICAgICAgIFwiQ0hFU1RcIixcclxuICAgICAgICBcIkNISUVGXCIsXHJcbiAgICAgICAgXCJDSElMRFwiLFxyXG4gICAgICAgIFwiQ0hJTkFcIixcclxuICAgICAgICBcIkNMQUlNXCIsXHJcbiAgICAgICAgXCJDTEVBTlwiLFxyXG4gICAgICAgIFwiQ0xFQVJcIixcclxuICAgICAgICBcIkNMT0NLXCIsXHJcbiAgICAgICAgXCJDTE9USFwiLFxyXG4gICAgICAgIFwiQ0xPVURcIixcclxuICAgICAgICBcIkNPTE9SXCIsXHJcbiAgICAgICAgXCJDT1VHSFwiLFxyXG4gICAgICAgIFwiQ09VUlRcIixcclxuICAgICAgICBcIkNPVkVSXCIsXHJcbiAgICAgICAgXCJDUkFDS1wiLFxyXG4gICAgICAgIFwiQ1JJTUVcIixcclxuICAgICAgICBcIkNST1NTXCIsXHJcbiAgICAgICAgXCJDUlVFTFwiLFxyXG4gICAgICAgIFwiQ1JVU0hcIixcclxuICAgICAgICBcIkNVUlZFXCIsXHJcbiAgICAgICAgXCJEQU5DRVwiLFxyXG4gICAgICAgIFwiREVBVEhcIixcclxuICAgICAgICBcIkRFQklUXCIsXHJcbiAgICAgICAgXCJESVJUWVwiLFxyXG4gICAgICAgIFwiRElUQ0hcIixcclxuICAgICAgICBcIkRPVUJUXCIsXHJcbiAgICAgICAgXCJEUkFJTlwiLFxyXG4gICAgICAgIFwiRFJFQU1cIixcclxuICAgICAgICBcIkRSRVNTXCIsXHJcbiAgICAgICAgXCJEUklGVFwiLFxyXG4gICAgICAgIFwiRFJJTktcIixcclxuICAgICAgICBcIkVBUkxZXCIsXHJcbiAgICAgICAgXCJFQVJUSFwiLFxyXG4gICAgICAgIFwiRUlHSFRcIixcclxuICAgICAgICBcIkVNUFRZXCIsXHJcbiAgICAgICAgXCJFTkVNWVwiLFxyXG4gICAgICAgIFwiRVFVQUxcIixcclxuICAgICAgICBcIkVSUk9SXCIsXHJcbiAgICAgICAgXCJFVkVOVFwiLFxyXG4gICAgICAgIFwiRVZFUllcIixcclxuICAgICAgICBcIkVYQUNUXCIsXHJcbiAgICAgICAgXCJGQUxTRVwiLFxyXG4gICAgICAgIFwiRkFVTFRcIixcclxuICAgICAgICBcIkZFVkVSXCIsXHJcbiAgICAgICAgXCJGSUJFUlwiLFxyXG4gICAgICAgIFwiRklFTERcIixcclxuICAgICAgICBcIkZJRlRIXCIsXHJcbiAgICAgICAgXCJGSUZUWVwiLFxyXG4gICAgICAgIFwiRklHSFRcIixcclxuICAgICAgICBcIkZJUkVEXCIsXHJcbiAgICAgICAgXCJGSVJTVFwiLFxyXG4gICAgICAgIFwiRklYRURcIixcclxuICAgICAgICBcIkZMQU1FXCIsXHJcbiAgICAgICAgXCJGTEFTSFwiLFxyXG4gICAgICAgIFwiRkxBU0tcIixcclxuICAgICAgICBcIkZMRVNIXCIsXHJcbiAgICAgICAgXCJGTElOVFwiLFxyXG4gICAgICAgIFwiRkxPT0RcIixcclxuICAgICAgICBcIkZMT09SXCIsXHJcbiAgICAgICAgXCJGTE9VUlwiLFxyXG4gICAgICAgIFwiRk9DVVNcIixcclxuICAgICAgICBcIkZPUkNFXCIsXHJcbiAgICAgICAgXCJGT1JUWVwiLFxyXG4gICAgICAgIFwiRlJBTUVcIixcclxuICAgICAgICBcIkZSRVNIXCIsXHJcbiAgICAgICAgXCJGUk9OVFwiLFxyXG4gICAgICAgIFwiRlJPU1RcIixcclxuICAgICAgICBcIkZSVUlUXCIsXHJcbiAgICAgICAgXCJGVU5OWVwiLFxyXG4gICAgICAgIFwiR0xBTkRcIixcclxuICAgICAgICBcIkdMQVNTXCIsXHJcbiAgICAgICAgXCJHTE9WRVwiLFxyXG4gICAgICAgIFwiR1JBSU5cIixcclxuICAgICAgICBcIkdSQU5EXCIsXHJcbiAgICAgICAgXCJHUkFTU1wiLFxyXG4gICAgICAgIFwiR1JFQVRcIixcclxuICAgICAgICBcIkdSRUVOXCIsXHJcbiAgICAgICAgXCJHUklFRlwiLFxyXG4gICAgICAgIFwiR1JPU1NcIixcclxuICAgICAgICBcIkdST1VQXCIsXHJcbiAgICAgICAgXCJHVUFSRFwiLFxyXG4gICAgICAgIFwiR1VFU1NcIixcclxuICAgICAgICBcIkdVSURFXCIsXHJcbiAgICAgICAgXCJIQUJJVFwiLFxyXG4gICAgICAgIFwiSEFQUFlcIixcclxuICAgICAgICBcIkhFQVJUXCIsXHJcbiAgICAgICAgXCJIRUFWWVwiLFxyXG4gICAgICAgIFwiSEVER0VcIixcclxuICAgICAgICBcIkhJTkdFXCIsXHJcbiAgICAgICAgXCJIT05FWVwiLFxyXG4gICAgICAgIFwiSE9SU0VcIixcclxuICAgICAgICBcIkhPVEVMXCIsXHJcbiAgICAgICAgXCJIT1VTRVwiLFxyXG4gICAgICAgIFwiSFVNQU5cIixcclxuICAgICAgICBcIkhVTU9SXCIsXHJcbiAgICAgICAgXCJIVVJSWVwiLFxyXG4gICAgICAgIFwiSFlFTkFcIixcclxuICAgICAgICBcIklNQUdFXCIsXHJcbiAgICAgICAgXCJJTkRFWFwiLFxyXG4gICAgICAgIFwiSU5MRVRcIixcclxuICAgICAgICBcIklOTkVSXCIsXHJcbiAgICAgICAgXCJJTlBVVFwiLFxyXG4gICAgICAgIFwiSkVMTFlcIixcclxuICAgICAgICBcIkpFV0VMXCIsXHJcbiAgICAgICAgXCJKT0lOVFwiLFxyXG4gICAgICAgIFwiSlVER0VcIixcclxuICAgICAgICBcIkpVSUNFXCIsXHJcbiAgICAgICAgXCJLTklGRVwiLFxyXG4gICAgICAgIFwiS05PQ0tcIixcclxuICAgICAgICBcIkxBUkdFXCIsXHJcbiAgICAgICAgXCJMQVVHSFwiLFxyXG4gICAgICAgIFwiTEFZRVJcIixcclxuICAgICAgICBcIkxFQVNUXCIsXHJcbiAgICAgICAgXCJMRUdBTFwiLFxyXG4gICAgICAgIFwiTEVWRUxcIixcclxuICAgICAgICBcIkxFVkVSXCIsXHJcbiAgICAgICAgXCJMSUdIVFwiLFxyXG4gICAgICAgIFwiTElNSVRcIixcclxuICAgICAgICBcIkxJTkVOXCIsXHJcbiAgICAgICAgXCJMSVRFUlwiLFxyXG4gICAgICAgIFwiTElWRVJcIixcclxuICAgICAgICBcIkxPQ0FMXCIsXHJcbiAgICAgICAgXCJMT0NVU1wiLFxyXG4gICAgICAgIFwiTE9PU0VcIixcclxuICAgICAgICBcIkxVTkNIXCIsXHJcbiAgICAgICAgXCJNQURBTVwiLFxyXG4gICAgICAgIFwiTUFHSUNcIixcclxuICAgICAgICBcIk1BTklBXCIsXHJcbiAgICAgICAgXCJNQVJDSFwiLFxyXG4gICAgICAgIFwiTUFUQ0hcIixcclxuICAgICAgICBcIk1FVEFMXCIsXHJcbiAgICAgICAgXCJNRVRFUlwiLFxyXG4gICAgICAgIFwiTUlORVJcIixcclxuICAgICAgICBcIk1JWEVEXCIsXHJcbiAgICAgICAgXCJNT0RFTFwiLFxyXG4gICAgICAgIFwiTU9ORVlcIixcclxuICAgICAgICBcIk1PTlRIXCIsXHJcbiAgICAgICAgXCJNT1JBTFwiLFxyXG4gICAgICAgIFwiTU9VVEhcIixcclxuICAgICAgICBcIk1VU0lDXCIsXHJcbiAgICAgICAgXCJOQVNUWVwiLFxyXG4gICAgICAgIFwiTkVSVkVcIixcclxuICAgICAgICBcIk5JR0hUXCIsXHJcbiAgICAgICAgXCJOT0lTRVwiLFxyXG4gICAgICAgIFwiTk9SVEhcIixcclxuICAgICAgICBcIk5PVEVEXCIsXHJcbiAgICAgICAgXCJOVVJTRVwiLFxyXG4gICAgICAgIFwiT0ZGRVJcIixcclxuICAgICAgICBcIk9MSVZFXCIsXHJcbiAgICAgICAgXCJPUEVSQVwiLFxyXG4gICAgICAgIFwiT1BJVU1cIixcclxuICAgICAgICBcIk9SREVSXCIsXHJcbiAgICAgICAgXCJPUkdBTlwiLFxyXG4gICAgICAgIFwiT1RIRVJcIixcclxuICAgICAgICBcIk9VVEVSXCIsXHJcbiAgICAgICAgXCJPV05FUlwiLFxyXG4gICAgICAgIFwiUEFJTlRcIixcclxuICAgICAgICBcIlBBUEVSXCIsXHJcbiAgICAgICAgXCJQQVJUWVwiLFxyXG4gICAgICAgIFwiUEFTVEVcIixcclxuICAgICAgICBcIlBFQUNFXCIsXHJcbiAgICAgICAgXCJQRURBTFwiLFxyXG4gICAgICAgIFwiUEVUQUxcIixcclxuICAgICAgICBcIlBJQU5PXCIsXHJcbiAgICAgICAgXCJQTEFDRVwiLFxyXG4gICAgICAgIFwiUExBSU5cIixcclxuICAgICAgICBcIlBMQU5FXCIsXHJcbiAgICAgICAgXCJQTEFOVFwiLFxyXG4gICAgICAgIFwiUExBVEVcIixcclxuICAgICAgICBcIlBPSU5UXCIsXHJcbiAgICAgICAgXCJQT1dFUlwiLFxyXG4gICAgICAgIFwiUFJJQ0VcIixcclxuICAgICAgICBcIlBSSUNLXCIsXHJcbiAgICAgICAgXCJQUklNRVwiLFxyXG4gICAgICAgIFwiUFJJTlRcIixcclxuICAgICAgICBcIlBST09GXCIsXHJcbiAgICAgICAgXCJQUk9TRVwiLFxyXG4gICAgICAgIFwiUFJPVURcIixcclxuICAgICAgICBcIlBVUElMXCIsXHJcbiAgICAgICAgXCJRVUFDS1wiLFxyXG4gICAgICAgIFwiUVVFRU5cIixcclxuICAgICAgICBcIlFVSUNLXCIsXHJcbiAgICAgICAgXCJRVUlFVFwiLFxyXG4gICAgICAgIFwiUVVJVEVcIixcclxuICAgICAgICBcIlJBRElPXCIsXHJcbiAgICAgICAgXCJSQU5HRVwiLFxyXG4gICAgICAgIFwiUkFUSU9cIixcclxuICAgICAgICBcIlJFQURZXCIsXHJcbiAgICAgICAgXCJSSUdIVFwiLFxyXG4gICAgICAgIFwiUklWQUxcIixcclxuICAgICAgICBcIlJJVkVSXCIsXHJcbiAgICAgICAgXCJST1VHSFwiLFxyXG4gICAgICAgIFwiUk9VTkRcIixcclxuICAgICAgICBcIlJPWUFMXCIsXHJcbiAgICAgICAgXCJSVUxFUlwiLFxyXG4gICAgICAgIFwiU0FMQURcIixcclxuICAgICAgICBcIlNDQUxFXCIsXHJcbiAgICAgICAgXCJTQ0FSUFwiLFxyXG4gICAgICAgIFwiU0NSRVdcIixcclxuICAgICAgICBcIlNFTlNFXCIsXHJcbiAgICAgICAgXCJTRVBBTFwiLFxyXG4gICAgICAgIFwiU0VSVU1cIixcclxuICAgICAgICBcIlNFVkVOXCIsXHJcbiAgICAgICAgXCJTSEFERVwiLFxyXG4gICAgICAgIFwiU0hBS0VcIixcclxuICAgICAgICBcIlNIQUxFXCIsXHJcbiAgICAgICAgXCJTSEFNRVwiLFxyXG4gICAgICAgIFwiU0hBUkVcIixcclxuICAgICAgICBcIlNIQVJQXCIsXHJcbiAgICAgICAgXCJTSEFWRVwiLFxyXG4gICAgICAgIFwiU0hFQVJcIixcclxuICAgICAgICBcIlNIRUVQXCIsXHJcbiAgICAgICAgXCJTSEVFVFwiLFxyXG4gICAgICAgIFwiU0hFTEZcIixcclxuICAgICAgICBcIlNIRUxMXCIsXHJcbiAgICAgICAgXCJTSElSVFwiLFxyXG4gICAgICAgIFwiU0hPQ0tcIixcclxuICAgICAgICBcIlNIT1JFXCIsXHJcbiAgICAgICAgXCJTSE9SVFwiLFxyXG4gICAgICAgIFwiU0lHSFRcIixcclxuICAgICAgICBcIlNJTkNFXCIsXHJcbiAgICAgICAgXCJTS0lSVFwiLFxyXG4gICAgICAgIFwiU0tVTExcIixcclxuICAgICAgICBcIlNMQVRFXCIsXHJcbiAgICAgICAgXCJTTEVFUFwiLFxyXG4gICAgICAgIFwiU0xJREVcIixcclxuICAgICAgICBcIlNMT1BFXCIsXHJcbiAgICAgICAgXCJTTUFMTFwiLFxyXG4gICAgICAgIFwiU01BU0hcIixcclxuICAgICAgICBcIlNNRUxMXCIsXHJcbiAgICAgICAgXCJTTUlMRVwiLFxyXG4gICAgICAgIFwiU01PS0VcIixcclxuICAgICAgICBcIlNOQUtFXCIsXHJcbiAgICAgICAgXCJTT0xJRFwiLFxyXG4gICAgICAgIFwiU09SUllcIixcclxuICAgICAgICBcIlNPVU5EXCIsXHJcbiAgICAgICAgXCJTT1VUSFwiLFxyXG4gICAgICAgIFwiU1BBQ0VcIixcclxuICAgICAgICBcIlNQQURFXCIsXHJcbiAgICAgICAgXCJTUEFSS1wiLFxyXG4gICAgICAgIFwiU1BPT05cIixcclxuICAgICAgICBcIlNQT1JUXCIsXHJcbiAgICAgICAgXCJTVEFHRVwiLFxyXG4gICAgICAgIFwiU1RBSU5cIixcclxuICAgICAgICBcIlNUQUlSXCIsXHJcbiAgICAgICAgXCJTVEFMS1wiLFxyXG4gICAgICAgIFwiU1RBTVBcIixcclxuICAgICAgICBcIlNUQVJUXCIsXHJcbiAgICAgICAgXCJTVEVBTVwiLFxyXG4gICAgICAgIFwiU1RFRUxcIixcclxuICAgICAgICBcIlNUSUNLXCIsXHJcbiAgICAgICAgXCJTVElGRlwiLFxyXG4gICAgICAgIFwiU1RJTExcIixcclxuICAgICAgICBcIlNUT05FXCIsXHJcbiAgICAgICAgXCJTVE9SRVwiLFxyXG4gICAgICAgIFwiU1RPUk1cIixcclxuICAgICAgICBcIlNUT1JZXCIsXHJcbiAgICAgICAgXCJTVFJBV1wiLFxyXG4gICAgICAgIFwiU1RVRFlcIixcclxuICAgICAgICBcIlNVR0FSXCIsXHJcbiAgICAgICAgXCJTV0VFVFwiLFxyXG4gICAgICAgIFwiU1dJTkdcIixcclxuICAgICAgICBcIlRBQkxFXCIsXHJcbiAgICAgICAgXCJUQVNURVwiLFxyXG4gICAgICAgIFwiVEhFUkVcIixcclxuICAgICAgICBcIlRISUNLXCIsXHJcbiAgICAgICAgXCJUSElFRlwiLFxyXG4gICAgICAgIFwiVEhJTkdcIixcclxuICAgICAgICBcIlRISVJEXCIsXHJcbiAgICAgICAgXCJUSFJFRVwiLFxyXG4gICAgICAgIFwiVEhVTUJcIixcclxuICAgICAgICBcIlRJR0hUXCIsXHJcbiAgICAgICAgXCJUSVJFRFwiLFxyXG4gICAgICAgIFwiVE9BU1RcIixcclxuICAgICAgICBcIlRPREFZXCIsXHJcbiAgICAgICAgXCJUT05HU1wiLFxyXG4gICAgICAgIFwiVE9PVEhcIixcclxuICAgICAgICBcIlRPVEFMXCIsXHJcbiAgICAgICAgXCJUT1VDSFwiLFxyXG4gICAgICAgIFwiVE9XRUxcIixcclxuICAgICAgICBcIlRPV0VSXCIsXHJcbiAgICAgICAgXCJUUkFERVwiLFxyXG4gICAgICAgIFwiVFJBSU5cIixcclxuICAgICAgICBcIlRSSUNLXCIsXHJcbiAgICAgICAgXCJUUlVDS1wiLFxyXG4gICAgICAgIFwiVFdJQ0VcIixcclxuICAgICAgICBcIlRXSVNUXCIsXHJcbiAgICAgICAgXCJVTkRFUlwiLFxyXG4gICAgICAgIFwiVkFMVUVcIixcclxuICAgICAgICBcIlZBTFZFXCIsXHJcbiAgICAgICAgXCJWQVBPUlwiLFxyXG4gICAgICAgIFwiVkVSU0VcIixcclxuICAgICAgICBcIlZPREtBXCIsXHJcbiAgICAgICAgXCJWT0lDRVwiLFxyXG4gICAgICAgIFwiV0FTVEVcIixcclxuICAgICAgICBcIldBVENIXCIsXHJcbiAgICAgICAgXCJXQVRFUlwiLFxyXG4gICAgICAgIFwiV0VER0VcIixcclxuICAgICAgICBcIldIRUVMXCIsXHJcbiAgICAgICAgXCJXSEVSRVwiLFxyXG4gICAgICAgIFwiV0hJQ0hcIixcclxuICAgICAgICBcIldISUxFXCIsXHJcbiAgICAgICAgXCJXSElURVwiLFxyXG4gICAgICAgIFwiV0lET1dcIixcclxuICAgICAgICBcIldPTUFOXCIsXHJcbiAgICAgICAgXCJXT1JMRFwiLFxyXG4gICAgICAgIFwiV09VTkRcIixcclxuICAgICAgICBcIldSRUNLXCIsXHJcbiAgICAgICAgXCJXUklTVFwiLFxyXG4gICAgICAgIFwiV1JPTkdcIixcclxuICAgICAgICBcIllPVU5HXCIsXHJcbiAgICAgICAgXCJaRUJSQVwiLFxyXG4gICAgXSxcclxuICAgIFtcclxuICAgICAgICBcIkFDUk9TU1wiLFxyXG4gICAgICAgIFwiQUNUSU5HXCIsXHJcbiAgICAgICAgXCJBQ1RJVkVcIixcclxuICAgICAgICBcIkFEVklDRVwiLFxyXG4gICAgICAgIFwiQUdFTkNZXCIsXHJcbiAgICAgICAgXCJBTE1PU1RcIixcclxuICAgICAgICBcIkFMV0FZU1wiLFxyXG4gICAgICAgIFwiQU1PVU5UXCIsXHJcbiAgICAgICAgXCJBTkNIT1JcIixcclxuICAgICAgICBcIkFOSU1BTFwiLFxyXG4gICAgICAgIFwiQU5TV0VSXCIsXHJcbiAgICAgICAgXCJBTllIT1dcIixcclxuICAgICAgICBcIkFOWU9ORVwiLFxyXG4gICAgICAgIFwiQVRUQUNLXCIsXHJcbiAgICAgICAgXCJBVUdVU1RcIixcclxuICAgICAgICBcIkJBTExFVFwiLFxyXG4gICAgICAgIFwiQkFSUkVMXCIsXHJcbiAgICAgICAgXCJCQVNJTkdcIixcclxuICAgICAgICBcIkJBU0tFVFwiLFxyXG4gICAgICAgIFwiQkVBS0VSXCIsXHJcbiAgICAgICAgXCJCRUNPTUVcIixcclxuICAgICAgICBcIkJFRk9SRVwiLFxyXG4gICAgICAgIFwiQkVISU5EXCIsXHJcbiAgICAgICAgXCJCRUxJRUZcIixcclxuICAgICAgICBcIkJJVFRFUlwiLFxyXG4gICAgICAgIFwiQk9UVExFXCIsXHJcbiAgICAgICAgXCJCT1RUT01cIixcclxuICAgICAgICBcIkJSQU5DSFwiLFxyXG4gICAgICAgIFwiQlJFQVNUXCIsXHJcbiAgICAgICAgXCJCUkVBVEhcIixcclxuICAgICAgICBcIkJSSURHRVwiLFxyXG4gICAgICAgIFwiQlJJR0hUXCIsXHJcbiAgICAgICAgXCJCUk9LRU5cIixcclxuICAgICAgICBcIkJST0tFUlwiLFxyXG4gICAgICAgIFwiQlVCQkxFXCIsXHJcbiAgICAgICAgXCJCVUNLRVRcIixcclxuICAgICAgICBcIkJVREdFVFwiLFxyXG4gICAgICAgIFwiQlVSSUFMXCIsXHJcbiAgICAgICAgXCJCVVJORURcIixcclxuICAgICAgICBcIkJVUk5FUlwiLFxyXG4gICAgICAgIFwiQlVUVEVSXCIsXHJcbiAgICAgICAgXCJCVVRUT05cIixcclxuICAgICAgICBcIkNBTUVSQVwiLFxyXG4gICAgICAgIFwiQ0FOVkFTXCIsXHJcbiAgICAgICAgXCJDQVJQRVRcIixcclxuICAgICAgICBcIkNBUlRFUlwiLFxyXG4gICAgICAgIFwiQ0FWSVRZXCIsXHJcbiAgICAgICAgXCJDSEFOQ0VcIixcclxuICAgICAgICBcIkNIQU5HRVwiLFxyXG4gICAgICAgIFwiQ0hBUkdFXCIsXHJcbiAgICAgICAgXCJDSEVFU0VcIixcclxuICAgICAgICBcIkNIT0lDRVwiLFxyXG4gICAgICAgIFwiQ0hPUlVTXCIsXHJcbiAgICAgICAgXCJDSFVSQ0hcIixcclxuICAgICAgICBcIkNJUkNMRVwiLFxyXG4gICAgICAgIFwiQ0lSQ1VTXCIsXHJcbiAgICAgICAgXCJDSVRST05cIixcclxuICAgICAgICBcIkNMRVZFUlwiLFxyXG4gICAgICAgIFwiQ0xJRU5UXCIsXHJcbiAgICAgICAgXCJDT0ZGRUVcIixcclxuICAgICAgICBcIkNPR05BQ1wiLFxyXG4gICAgICAgIFwiQ09MTEFSXCIsXHJcbiAgICAgICAgXCJDT0xPTllcIixcclxuICAgICAgICBcIkNPTFVNTlwiLFxyXG4gICAgICAgIFwiQ09NTU9OXCIsXHJcbiAgICAgICAgXCJDT09LRURcIixcclxuICAgICAgICBcIkNPT0tFUlwiLFxyXG4gICAgICAgIFwiQ09QUEVSXCIsXHJcbiAgICAgICAgXCJDT1JORVJcIixcclxuICAgICAgICBcIkNPVFRPTlwiLFxyXG4gICAgICAgIFwiQ1JFRElUXCIsXHJcbiAgICAgICAgXCJDUllJTkdcIixcclxuICAgICAgICBcIkRBTUFHRVwiLFxyXG4gICAgICAgIFwiREFOQ0VSXCIsXHJcbiAgICAgICAgXCJEQU5HRVJcIixcclxuICAgICAgICBcIkRFRkVDVFwiLFxyXG4gICAgICAgIFwiREVHUkVFXCIsXHJcbiAgICAgICAgXCJERU1BTkRcIixcclxuICAgICAgICBcIkRFU0VSVFwiLFxyXG4gICAgICAgIFwiREVTSUdOXCIsXHJcbiAgICAgICAgXCJERVNJUkVcIixcclxuICAgICAgICBcIkRFVEFJTFwiLFxyXG4gICAgICAgIFwiRElOTkVSXCIsXHJcbiAgICAgICAgXCJESVJFQ1RcIixcclxuICAgICAgICBcIkRSQVdFUlwiLFxyXG4gICAgICAgIFwiRFJJVkVSXCIsXHJcbiAgICAgICAgXCJEVVNURVJcIixcclxuICAgICAgICBcIkVGRkVDVFwiLFxyXG4gICAgICAgIFwiRUZGT1JUXCIsXHJcbiAgICAgICAgXCJFSVRIRVJcIixcclxuICAgICAgICBcIkVMRVZFTlwiLFxyXG4gICAgICAgIFwiRU1QSVJFXCIsXHJcbiAgICAgICAgXCJFTkdJTkVcIixcclxuICAgICAgICBcIkVOT1VHSFwiLFxyXG4gICAgICAgIFwiRVhQRVJUXCIsXHJcbiAgICAgICAgXCJFWFBPUlRcIixcclxuICAgICAgICBcIkZBQ1RPUlwiLFxyXG4gICAgICAgIFwiRkFNSUxZXCIsXHJcbiAgICAgICAgXCJGQU1PVVNcIixcclxuICAgICAgICBcIkZBUk1FUlwiLFxyXG4gICAgICAgIFwiRkFUSEVSXCIsXHJcbiAgICAgICAgXCJGRUVCTEVcIixcclxuICAgICAgICBcIkZFTUFMRVwiLFxyXG4gICAgICAgIFwiRklHVVJFXCIsXHJcbiAgICAgICAgXCJGSU5HRVJcIixcclxuICAgICAgICBcIkZJUklOR1wiLFxyXG4gICAgICAgIFwiRklTSEVSXCIsXHJcbiAgICAgICAgXCJGTElHSFRcIixcclxuICAgICAgICBcIkZMT1dFUlwiLFxyXG4gICAgICAgIFwiRk9MREVSXCIsXHJcbiAgICAgICAgXCJGT1VSVEhcIixcclxuICAgICAgICBcIkZSSURBWVwiLFxyXG4gICAgICAgIFwiRlJJRU5EXCIsXHJcbiAgICAgICAgXCJGUk9aRU5cIixcclxuICAgICAgICBcIkZVTk5FTFwiLFxyXG4gICAgICAgIFwiRlVTSU9OXCIsXHJcbiAgICAgICAgXCJGVVRVUkVcIixcclxuICAgICAgICBcIkdBUkRFTlwiLFxyXG4gICAgICAgIFwiR1JBVkVMXCIsXHJcbiAgICAgICAgXCJHUkVBU0VcIixcclxuICAgICAgICBcIkdST09WRVwiLFxyXG4gICAgICAgIFwiR1JPVU5EXCIsXHJcbiAgICAgICAgXCJHUk9XVEhcIixcclxuICAgICAgICBcIkhBTU1FUlwiLFxyXG4gICAgICAgIFwiSEFORExFXCIsXHJcbiAgICAgICAgXCJIQU5HRVJcIixcclxuICAgICAgICBcIkhBUkJPUlwiLFxyXG4gICAgICAgIFwiSEVBVEVEXCIsXHJcbiAgICAgICAgXCJIRUFURVJcIixcclxuICAgICAgICBcIkhPTExPV1wiLFxyXG4gICAgICAgIFwiSE9ORVNUXCIsXHJcbiAgICAgICAgXCJJTVBPUlRcIixcclxuICAgICAgICBcIklOQ09NRVwiLFxyXG4gICAgICAgIFwiSU5MQU5EXCIsXHJcbiAgICAgICAgXCJJTlNFQ1RcIixcclxuICAgICAgICBcIklOU0lERVwiLFxyXG4gICAgICAgIFwiSU5TVEVQXCIsXHJcbiAgICAgICAgXCJJU0xBTkRcIixcclxuICAgICAgICBcIklUU0VMRlwiLFxyXG4gICAgICAgIFwiSk9JTkVSXCIsXHJcbiAgICAgICAgXCJLRUVQRVJcIixcclxuICAgICAgICBcIktFTk5FTFwiLFxyXG4gICAgICAgIFwiS0VUVExFXCIsXHJcbiAgICAgICAgXCJLSURORVlcIixcclxuICAgICAgICBcIkxBV1lFUlwiLFxyXG4gICAgICAgIFwiTEVOR1RIXCIsXHJcbiAgICAgICAgXCJMRVNTT05cIixcclxuICAgICAgICBcIkxFVFRFUlwiLFxyXG4gICAgICAgIFwiTElRVUlEXCIsXHJcbiAgICAgICAgXCJMSVRUTEVcIixcclxuICAgICAgICBcIkxJVklOR1wiLFxyXG4gICAgICAgIFwiTE9DS0VSXCIsXHJcbiAgICAgICAgXCJNQU5ORVJcIixcclxuICAgICAgICBcIk1BUkJMRVwiLFxyXG4gICAgICAgIFwiTUFSR0lOXCIsXHJcbiAgICAgICAgXCJNQVJLRURcIixcclxuICAgICAgICBcIk1BUktFVFwiLFxyXG4gICAgICAgIFwiTUFUVVJFXCIsXHJcbiAgICAgICAgXCJNRURJVU1cIixcclxuICAgICAgICBcIk1FTUJFUlwiLFxyXG4gICAgICAgIFwiTUVNT1JZXCIsXHJcbiAgICAgICAgXCJNSURETEVcIixcclxuICAgICAgICBcIk1JTlVURVwiLFxyXG4gICAgICAgIFwiTU9ERVJOXCIsXHJcbiAgICAgICAgXCJNT0RFU1RcIixcclxuICAgICAgICBcIk1PTkRBWVwiLFxyXG4gICAgICAgIFwiTU9OS0VZXCIsXHJcbiAgICAgICAgXCJNT1RIRVJcIixcclxuICAgICAgICBcIk1PVElPTlwiLFxyXG4gICAgICAgIFwiTVVSREVSXCIsXHJcbiAgICAgICAgXCJNVVNDTEVcIixcclxuICAgICAgICBcIk1VU0VVTVwiLFxyXG4gICAgICAgIFwiTVlTRUxGXCIsXHJcbiAgICAgICAgXCJOQVJST1dcIixcclxuICAgICAgICBcIk5BVElPTlwiLFxyXG4gICAgICAgIFwiTkFUVVJFXCIsXHJcbiAgICAgICAgXCJORUFSRVJcIixcclxuICAgICAgICBcIk5FRURMRVwiLFxyXG4gICAgICAgIFwiTklDS0VMXCIsXHJcbiAgICAgICAgXCJOT0JPRFlcIixcclxuICAgICAgICBcIk5PUk1BTFwiLFxyXG4gICAgICAgIFwiTlVNQkVSXCIsXHJcbiAgICAgICAgXCJPRkZJQ0VcIixcclxuICAgICAgICBcIk9NRUxFVFwiLFxyXG4gICAgICAgIFwiT1JBTkdFXCIsXHJcbiAgICAgICAgXCJPUklHSU5cIixcclxuICAgICAgICBcIk9VVENSWVwiLFxyXG4gICAgICAgIFwiT1VUTEFXXCIsXHJcbiAgICAgICAgXCJPVVRMRVRcIixcclxuICAgICAgICBcIk9VVFBVVFwiLFxyXG4gICAgICAgIFwiT1ZFUkRPXCIsXHJcbiAgICAgICAgXCJQQVJDRUxcIixcclxuICAgICAgICBcIlBBUkVOVFwiLFxyXG4gICAgICAgIFwiUEFURU5UXCIsXHJcbiAgICAgICAgXCJQRU5DSUxcIixcclxuICAgICAgICBcIlBFT1BMRVwiLFxyXG4gICAgICAgIFwiUEVSU09OXCIsXHJcbiAgICAgICAgXCJQSVNUT05cIixcclxuICAgICAgICBcIlBMQVlFRFwiLFxyXG4gICAgICAgIFwiUExFQVNFXCIsXHJcbiAgICAgICAgXCJQTE9VR0hcIixcclxuICAgICAgICBcIlBPQ0tFVFwiLFxyXG4gICAgICAgIFwiUE9FVFJZXCIsXHJcbiAgICAgICAgXCJQT0lTT05cIixcclxuICAgICAgICBcIlBPTElDRVwiLFxyXG4gICAgICAgIFwiUE9MSVNIXCIsXHJcbiAgICAgICAgXCJQT0xMRU5cIixcclxuICAgICAgICBcIlBPUlRFUlwiLFxyXG4gICAgICAgIFwiUE9UQVNIXCIsXHJcbiAgICAgICAgXCJQT1RBVE9cIixcclxuICAgICAgICBcIlBPVFRFUlwiLFxyXG4gICAgICAgIFwiUE9XREVSXCIsXHJcbiAgICAgICAgXCJQUkFJU0VcIixcclxuICAgICAgICBcIlBSQVlFUlwiLFxyXG4gICAgICAgIFwiUFJJRVNUXCIsXHJcbiAgICAgICAgXCJQUklOQ0VcIixcclxuICAgICAgICBcIlBSSVNPTlwiLFxyXG4gICAgICAgIFwiUFJPRklUXCIsXHJcbiAgICAgICAgXCJQVUJMSUNcIixcclxuICAgICAgICBcIlBVTExFWVwiLFxyXG4gICAgICAgIFwiUkFESVVNXCIsXHJcbiAgICAgICAgXCJSRUFERVJcIixcclxuICAgICAgICBcIlJFQVNPTlwiLFxyXG4gICAgICAgIFwiUkVDT1JEXCIsXHJcbiAgICAgICAgXCJSRUZMVVhcIixcclxuICAgICAgICBcIlJFR1JFVFwiLFxyXG4gICAgICAgIFwiUkVNQVJLXCIsXHJcbiAgICAgICAgXCJSRU1FRFlcIixcclxuICAgICAgICBcIlJFUEFJUlwiLFxyXG4gICAgICAgIFwiUkVTVUxUXCIsXHJcbiAgICAgICAgXCJSRVRBSUxcIixcclxuICAgICAgICBcIlJFV0FSRFwiLFxyXG4gICAgICAgIFwiUkhZVEhNXCIsXHJcbiAgICAgICAgXCJST0xMRVJcIixcclxuICAgICAgICBcIlJVQkJFUlwiLFxyXG4gICAgICAgIFwiU0FJTE9SXCIsXHJcbiAgICAgICAgXCJTQU1QTEVcIixcclxuICAgICAgICBcIlNBVUNFUlwiLFxyXG4gICAgICAgIFwiU0FWSU5HXCIsXHJcbiAgICAgICAgXCJTQ0hJU1RcIixcclxuICAgICAgICBcIlNDSE9PTFwiLFxyXG4gICAgICAgIFwiU0NSRUVOXCIsXHJcbiAgICAgICAgXCJTRUFNQU5cIixcclxuICAgICAgICBcIlNFQVJDSFwiLFxyXG4gICAgICAgIFwiU0VDT05EXCIsXHJcbiAgICAgICAgXCJTRUNSRVRcIixcclxuICAgICAgICBcIlNIQURPV1wiLFxyXG4gICAgICAgIFwiU0lMVkVSXCIsXHJcbiAgICAgICAgXCJTSU1QTEVcIixcclxuICAgICAgICBcIlNJU1RFUlwiLFxyXG4gICAgICAgIFwiU0xFRVZFXCIsXHJcbiAgICAgICAgXCJTTU9PVEhcIixcclxuICAgICAgICBcIlNORUVaRVwiLFxyXG4gICAgICAgIFwiU09DSUFMXCIsXHJcbiAgICAgICAgXCJTUElSSVRcIixcclxuICAgICAgICBcIlNQTEFTSFwiLFxyXG4gICAgICAgIFwiU1BPTkdFXCIsXHJcbiAgICAgICAgXCJTUFJJTkdcIixcclxuICAgICAgICBcIlNRVUFSRVwiLFxyXG4gICAgICAgIFwiU1RBQkxFXCIsXHJcbiAgICAgICAgXCJTVEFNRU5cIixcclxuICAgICAgICBcIlNURUFEWVwiLFxyXG4gICAgICAgIFwiU1RJQ0tZXCIsXHJcbiAgICAgICAgXCJTVElUQ0hcIixcclxuICAgICAgICBcIlNUUkFJTlwiLFxyXG4gICAgICAgIFwiU1RSRUFNXCIsXHJcbiAgICAgICAgXCJTVFJFRVRcIixcclxuICAgICAgICBcIlNUUkVTU1wiLFxyXG4gICAgICAgIFwiU1RSSUtFXCIsXHJcbiAgICAgICAgXCJTVFJJTkdcIixcclxuICAgICAgICBcIlNUUk9OR1wiLFxyXG4gICAgICAgIFwiU1VDS0VSXCIsXHJcbiAgICAgICAgXCJTVURERU5cIixcclxuICAgICAgICBcIlNVTU1FUlwiLFxyXG4gICAgICAgIFwiU1VOREFZXCIsXHJcbiAgICAgICAgXCJTVVBQTFlcIixcclxuICAgICAgICBcIlNXSVRDSFwiLFxyXG4gICAgICAgIFwiU1lTVEVNXCIsXHJcbiAgICAgICAgXCJUQUlMT1JcIixcclxuICAgICAgICBcIlRIRU9SWVwiLFxyXG4gICAgICAgIFwiVEhJUlRZXCIsXHJcbiAgICAgICAgXCJUSE9SQVhcIixcclxuICAgICAgICBcIlRIT1VHSFwiLFxyXG4gICAgICAgIFwiVEhSRUFEXCIsXHJcbiAgICAgICAgXCJUSFJFQVRcIixcclxuICAgICAgICBcIlRIUk9BVFwiLFxyXG4gICAgICAgIFwiVEhSVVNUXCIsXHJcbiAgICAgICAgXCJUSUNLRVRcIixcclxuICAgICAgICBcIlRJU1NVRVwiLFxyXG4gICAgICAgIFwiVE9OR1VFXCIsXHJcbiAgICAgICAgXCJUUkFERVJcIixcclxuICAgICAgICBcIlRSQVZFTFwiLFxyXG4gICAgICAgIFwiVFVOTkVMXCIsXHJcbiAgICAgICAgXCJUV0VMVkVcIixcclxuICAgICAgICBcIlRXRU5UWVwiLFxyXG4gICAgICAgIFwiVFlQSVNUXCIsXHJcbiAgICAgICAgXCJVUEtFRVBcIixcclxuICAgICAgICBcIlVQTElGVFwiLFxyXG4gICAgICAgIFwiVVBUQUtFXCIsXHJcbiAgICAgICAgXCJWQUxMRVlcIixcclxuICAgICAgICBcIlZFU1NFTFwiLFxyXG4gICAgICAgIFwiVklDVElNXCIsXHJcbiAgICAgICAgXCJWSU9MSU5cIixcclxuICAgICAgICBcIlZPTFVNRVwiLFxyXG4gICAgICAgIFwiVk9SVEVYXCIsXHJcbiAgICAgICAgXCJXQUlURVJcIixcclxuICAgICAgICBcIldBU1RFRFwiLFxyXG4gICAgICAgIFwiV0VJR0hUXCIsXHJcbiAgICAgICAgXCJXSElTS1lcIixcclxuICAgICAgICBcIldJTkRPV1wiLFxyXG4gICAgICAgIFwiV0lOVEVSXCIsXHJcbiAgICAgICAgXCJXSVRISU5cIixcclxuICAgICAgICBcIldPUktFUlwiLFxyXG4gICAgICAgIFwiV1JJVEVSXCIsXHJcbiAgICAgICAgXCJZRUxMT1dcIixcclxuICAgIF0sXHJcbiAgICBbXHJcbiAgICAgICAgXCJBQlNFTkNFXCIsXHJcbiAgICAgICAgXCJBQ0NPVU5UXCIsXHJcbiAgICAgICAgXCJBRERSRVNTXCIsXHJcbiAgICAgICAgXCJBR0FJTlNUXCIsXHJcbiAgICAgICAgXCJBTENPSE9MXCIsXHJcbiAgICAgICAgXCJBTEdFQlJBXCIsXHJcbiAgICAgICAgXCJBTU1PTklBXCIsXHJcbiAgICAgICAgXCJBTk9USEVSXCIsXHJcbiAgICAgICAgXCJBTllCT0RZXCIsXHJcbiAgICAgICAgXCJBVFRFTVBUXCIsXHJcbiAgICAgICAgXCJBVVRPQlVTXCIsXHJcbiAgICAgICAgXCJBVkVSQUdFXCIsXHJcbiAgICAgICAgXCJBV0tXQVJEXCIsXHJcbiAgICAgICAgXCJCQUxBTkNFXCIsXHJcbiAgICAgICAgXCJCQUxDT05ZXCIsXHJcbiAgICAgICAgXCJCRUNBVVNFXCIsXHJcbiAgICAgICAgXCJCRURST09NXCIsXHJcbiAgICAgICAgXCJCRUVTV0FYXCIsXHJcbiAgICAgICAgXCJCRVRXRUVOXCIsXHJcbiAgICAgICAgXCJCSU9MT0dZXCIsXHJcbiAgICAgICAgXCJCTEFOS0VUXCIsXHJcbiAgICAgICAgXCJCT0lMSU5HXCIsXHJcbiAgICAgICAgXCJCUk9USEVSXCIsXHJcbiAgICAgICAgXCJCVUlMREVSXCIsXHJcbiAgICAgICAgXCJCVVJOSU5HXCIsXHJcbiAgICAgICAgXCJDQVBJVEFMXCIsXHJcbiAgICAgICAgXCJDQVRBUlJIXCIsXHJcbiAgICAgICAgXCJDRVJUQUlOXCIsXHJcbiAgICAgICAgXCJDSEVNSVNUXCIsXHJcbiAgICAgICAgXCJDSElNTkVZXCIsXHJcbiAgICAgICAgXCJDSVJDVUlUXCIsXHJcbiAgICAgICAgXCJDTElNQkVSXCIsXHJcbiAgICAgICAgXCJDT0xMRUdFXCIsXHJcbiAgICAgICAgXCJDT01CSU5FXCIsXHJcbiAgICAgICAgXCJDT01GT1JUXCIsXHJcbiAgICAgICAgXCJDT01QQU5ZXCIsXHJcbiAgICAgICAgXCJDT01QTEVYXCIsXHJcbiAgICAgICAgXCJDT05DRVBUXCIsXHJcbiAgICAgICAgXCJDT05UT1VSXCIsXHJcbiAgICAgICAgXCJDT05UUk9MXCIsXHJcbiAgICAgICAgXCJDT09LSU5HXCIsXHJcbiAgICAgICAgXCJDT1VOVFJZXCIsXHJcbiAgICAgICAgXCJDUkVFUEVSXCIsXHJcbiAgICAgICAgXCJDVU5OSU5HXCIsXHJcbiAgICAgICAgXCJDVVJSRU5UXCIsXHJcbiAgICAgICAgXCJDVVJUQUlOXCIsXHJcbiAgICAgICAgXCJDVVNISU9OXCIsXHJcbiAgICAgICAgXCJDVVNUT01TXCIsXHJcbiAgICAgICAgXCJEQU1QSU5HXCIsXHJcbiAgICAgICAgXCJEQU5DSU5HXCIsXHJcbiAgICAgICAgXCJERU5TSVRZXCIsXHJcbiAgICAgICAgXCJERVBPU0lUXCIsXHJcbiAgICAgICAgXCJESVNFQVNFXCIsXHJcbiAgICAgICAgXCJESVNHVVNUXCIsXHJcbiAgICAgICAgXCJESVNMSUtFXCIsXHJcbiAgICAgICAgXCJESVZJU09SXCIsXHJcbiAgICAgICAgXCJESVZPUkNFXCIsXHJcbiAgICAgICAgXCJEUklWSU5HXCIsXHJcbiAgICAgICAgXCJEUk9QUEVEXCIsXHJcbiAgICAgICAgXCJEUk9QUEVSXCIsXHJcbiAgICAgICAgXCJFQVJSSU5HXCIsXHJcbiAgICAgICAgXCJFQ09OT01ZXCIsXHJcbiAgICAgICAgXCJFTEFTVElDXCIsXHJcbiAgICAgICAgXCJFTUJBU1NZXCIsXHJcbiAgICAgICAgXCJFUk9TSU9OXCIsXHJcbiAgICAgICAgXCJFVkVOSU5HXCIsXHJcbiAgICAgICAgXCJFWEFNUExFXCIsXHJcbiAgICAgICAgXCJFWUVCQUxMXCIsXHJcbiAgICAgICAgXCJFWUVCUk9XXCIsXHJcbiAgICAgICAgXCJFWUVMQVNIXCIsXHJcbiAgICAgICAgXCJGQUlMVVJFXCIsXHJcbiAgICAgICAgXCJGRUFUSEVSXCIsXHJcbiAgICAgICAgXCJGRUVMSU5HXCIsXHJcbiAgICAgICAgXCJGRVJNRU5UXCIsXHJcbiAgICAgICAgXCJGRVJUSUxFXCIsXHJcbiAgICAgICAgXCJGSUNUSU9OXCIsXHJcbiAgICAgICAgXCJGSUZURUVOXCIsXHJcbiAgICAgICAgXCJGSVJFQVJNXCIsXHJcbiAgICAgICAgXCJGSVJFRkxZXCIsXHJcbiAgICAgICAgXCJGSVJFTUFOXCIsXHJcbiAgICAgICAgXCJGT09MSVNIXCIsXHJcbiAgICAgICAgXCJGT09UTUFOXCIsXHJcbiAgICAgICAgXCJGT1JFSUdOXCIsXHJcbiAgICAgICAgXCJGT1JXQVJEXCIsXHJcbiAgICAgICAgXCJGVVJOQUNFXCIsXHJcbiAgICAgICAgXCJHRU5FUkFMXCIsXHJcbiAgICAgICAgXCJHRU9MT0dZXCIsXHJcbiAgICAgICAgXCJHTEFDSUVSXCIsXHJcbiAgICAgICAgXCJHUkFUSU5HXCIsXHJcbiAgICAgICAgXCJHUk9DRVJZXCIsXHJcbiAgICAgICAgXCJHVU5CT0FUXCIsXHJcbiAgICAgICAgXCJIQU5HSU5HXCIsXHJcbiAgICAgICAgXCJIQVJNT05ZXCIsXHJcbiAgICAgICAgXCJIRUFEV0FZXCIsXHJcbiAgICAgICAgXCJIRUFMVEhZXCIsXHJcbiAgICAgICAgXCJIRUFSSU5HXCIsXHJcbiAgICAgICAgXCJIRUFUSU5HXCIsXHJcbiAgICAgICAgXCJISUdIV0FZXCIsXHJcbiAgICAgICAgXCJISU1TRUxGXCIsXHJcbiAgICAgICAgXCJISVNUT1JZXCIsXHJcbiAgICAgICAgXCJIT0xJREFZXCIsXHJcbiAgICAgICAgXCJIT1dFVkVSXCIsXHJcbiAgICAgICAgXCJIVU5EUkVEXCIsXHJcbiAgICAgICAgXCJIVVNCQU5EXCIsXHJcbiAgICAgICAgXCJIWUdJRU5FXCIsXHJcbiAgICAgICAgXCJJR05FT1VTXCIsXHJcbiAgICAgICAgXCJJTVBVTFNFXCIsXHJcbiAgICAgICAgXCJJTkRPT1JTXCIsXHJcbiAgICAgICAgXCJJTkZFUk5PXCIsXHJcbiAgICAgICAgXCJJTlRFR0VSXCIsXHJcbiAgICAgICAgXCJJTlZFUlNFXCIsXHJcbiAgICAgICAgXCJKQU5VQVJZXCIsXHJcbiAgICAgICAgXCJKRUFMT1VTXCIsXHJcbiAgICAgICAgXCJKRVdFTEVSXCIsXHJcbiAgICAgICAgXCJKT1VSTkVZXCIsXHJcbiAgICAgICAgXCJKVVNUSUNFXCIsXHJcbiAgICAgICAgXCJLSVRDSEVOXCIsXHJcbiAgICAgICAgXCJMRUFSTkVSXCIsXHJcbiAgICAgICAgXCJMRUFUSEVSXCIsXHJcbiAgICAgICAgXCJMRUNUVVJFXCIsXHJcbiAgICAgICAgXCJMSUJSQVJZXCIsXHJcbiAgICAgICAgXCJMSUNFTlNFXCIsXHJcbiAgICAgICAgXCJMSVFVRVVSXCIsXHJcbiAgICAgICAgXCJMT0NLSU5HXCIsXHJcbiAgICAgICAgXCJNQUNISU5FXCIsXHJcbiAgICAgICAgXCJNQUxBUklBXCIsXHJcbiAgICAgICAgXCJNQU5BR0VSXCIsXHJcbiAgICAgICAgXCJNQU5IT0xFXCIsXHJcbiAgICAgICAgXCJNQVJSSUVEXCIsXHJcbiAgICAgICAgXCJNRUFOSU5HXCIsXHJcbiAgICAgICAgXCJNRUFTVVJFXCIsXHJcbiAgICAgICAgXCJNRURJQ0FMXCIsXHJcbiAgICAgICAgXCJNRUVUSU5HXCIsXHJcbiAgICAgICAgXCJNRVNTQUdFXCIsXHJcbiAgICAgICAgXCJNSUxMSU9OXCIsXHJcbiAgICAgICAgXCJNSU5FUkFMXCIsXHJcbiAgICAgICAgXCJNSVhUVVJFXCIsXHJcbiAgICAgICAgXCJNT1JOSU5HXCIsXHJcbiAgICAgICAgXCJOQVRVUkFMXCIsXHJcbiAgICAgICAgXCJORUdMRUNUXCIsXHJcbiAgICAgICAgXCJORVRXT1JLXCIsXHJcbiAgICAgICAgXCJORVVUUk9OXCIsXHJcbiAgICAgICAgXCJOT1NUUklMXCIsXHJcbiAgICAgICAgXCJOT1RISU5HXCIsXHJcbiAgICAgICAgXCJOT1dIRVJFXCIsXHJcbiAgICAgICAgXCJOVUNMRVVTXCIsXHJcbiAgICAgICAgXCJPQ1RPQkVSXCIsXHJcbiAgICAgICAgXCJPRkZJQ0VSXCIsXHJcbiAgICAgICAgXCJPTkVTRUxGXCIsXHJcbiAgICAgICAgXCJPUElOSU9OXCIsXHJcbiAgICAgICAgXCJPVVRDT01FXCIsXHJcbiAgICAgICAgXCJPVVRDUk9QXCIsXHJcbiAgICAgICAgXCJPVVRET09SXCIsXHJcbiAgICAgICAgXCJPVVRMSUVSXCIsXHJcbiAgICAgICAgXCJPVVRMSU5FXCIsXHJcbiAgICAgICAgXCJPVVRMT09LXCIsXHJcbiAgICAgICAgXCJPVVRTSURFXCIsXHJcbiAgICAgICAgXCJPVkVSQUxMXCIsXHJcbiAgICAgICAgXCJPVkVSTEFQXCIsXHJcbiAgICAgICAgXCJPVkVSVVNFXCIsXHJcbiAgICAgICAgXCJQQUNLSU5HXCIsXHJcbiAgICAgICAgXCJQQUlOVEVSXCIsXHJcbiAgICAgICAgXCJQQUpBTUFTXCIsXHJcbiAgICAgICAgXCJQQVJUSU5HXCIsXHJcbiAgICAgICAgXCJQQVJUTkVSXCIsXHJcbiAgICAgICAgXCJQQVNTQUdFXCIsXHJcbiAgICAgICAgXCJQQVlNRU5UXCIsXHJcbiAgICAgICAgXCJQRU5HVUlOXCIsXHJcbiAgICAgICAgXCJQRU5TSU9OXCIsXHJcbiAgICAgICAgXCJQRVJGRUNUXCIsXHJcbiAgICAgICAgXCJQSFlTSUNTXCIsXHJcbiAgICAgICAgXCJQSUNUVVJFXCIsXHJcbiAgICAgICAgXCJQTEFTVEVSXCIsXHJcbiAgICAgICAgXCJQTEFZSU5HXCIsXHJcbiAgICAgICAgXCJQTEVBU0VEXCIsXHJcbiAgICAgICAgXCJQT0lOVEVSXCIsXHJcbiAgICAgICAgXCJQT1NUTUFOXCIsXHJcbiAgICAgICAgXCJQUkVTRU5UXCIsXHJcbiAgICAgICAgXCJQUklOVEVSXCIsXHJcbiAgICAgICAgXCJQUklWQVRFXCIsXHJcbiAgICAgICAgXCJQUk9DRVNTXCIsXHJcbiAgICAgICAgXCJQUk9EVUNFXCIsXHJcbiAgICAgICAgXCJQUk9EVUNUXCIsXHJcbiAgICAgICAgXCJQUk9HUkFNXCIsXHJcbiAgICAgICAgXCJQUk9NSVNFXCIsXHJcbiAgICAgICAgXCJQUk9URVNUXCIsXHJcbiAgICAgICAgXCJQVVJQT1NFXCIsXHJcbiAgICAgICAgXCJQWVJBTUlEXCIsXHJcbiAgICAgICAgXCJRVUFMSVRZXCIsXHJcbiAgICAgICAgXCJRVUFSVEVSXCIsXHJcbiAgICAgICAgXCJRVUlOSU5FXCIsXHJcbiAgICAgICAgXCJSQUlOSU5HXCIsXHJcbiAgICAgICAgXCJSRUFESU5HXCIsXHJcbiAgICAgICAgXCJSRUFHRU5UXCIsXHJcbiAgICAgICAgXCJSRUNFSVBUXCIsXHJcbiAgICAgICAgXCJSRUdVTEFSXCIsXHJcbiAgICAgICAgXCJSRVFVRVNUXCIsXHJcbiAgICAgICAgXCJSRVNJRFVFXCIsXHJcbiAgICAgICAgXCJSRVNQRUNUXCIsXHJcbiAgICAgICAgXCJSRVZFTkdFXCIsXHJcbiAgICAgICAgXCJSVU5BV0FZXCIsXHJcbiAgICAgICAgXCJTQVJESU5FXCIsXHJcbiAgICAgICAgXCJTQ0lFTkNFXCIsXHJcbiAgICAgICAgXCJTQ1JBVENIXCIsXHJcbiAgICAgICAgXCJTRUNUSU9OXCIsXHJcbiAgICAgICAgXCJTRUxGSVNIXCIsXHJcbiAgICAgICAgXCJTRVJJT1VTXCIsXHJcbiAgICAgICAgXCJTRVJWQU5UXCIsXHJcbiAgICAgICAgXCJTRVJWSUNFXCIsXHJcbiAgICAgICAgXCJTSE9DS0VEXCIsXHJcbiAgICAgICAgXCJTSVhURUVOXCIsXHJcbiAgICAgICAgXCJTTk9XSU5HXCIsXHJcbiAgICAgICAgXCJTT0NJRVRZXCIsXHJcbiAgICAgICAgXCJTT0xESUVSXCIsXHJcbiAgICAgICAgXCJTT0xWRU5UXCIsXHJcbiAgICAgICAgXCJTT01FREFZXCIsXHJcbiAgICAgICAgXCJTT01FSE9XXCIsXHJcbiAgICAgICAgXCJTT01FT05FXCIsXHJcbiAgICAgICAgXCJTUEVDSUFMXCIsXHJcbiAgICAgICAgXCJTVEFUSU9OXCIsXHJcbiAgICAgICAgXCJTVEVBTUVSXCIsXHJcbiAgICAgICAgXCJTVE9NQUNIXCIsXHJcbiAgICAgICAgXCJTVE9QUEVSXCIsXHJcbiAgICAgICAgXCJTVFJBTkdFXCIsXHJcbiAgICAgICAgXCJTVFJFVENIXCIsXHJcbiAgICAgICAgXCJTVUJKRUNUXCIsXHJcbiAgICAgICAgXCJTVUNDRVNTXCIsXHJcbiAgICAgICAgXCJTVU5CVVJOXCIsXHJcbiAgICAgICAgXCJTVVBQT1JUXCIsXHJcbiAgICAgICAgXCJTVVJGQUNFXCIsXHJcbiAgICAgICAgXCJTVVJHRU9OXCIsXHJcbiAgICAgICAgXCJUQUxLSU5HXCIsXHJcbiAgICAgICAgXCJUQVBJT0NBXCIsXHJcbiAgICAgICAgXCJURUFDSEVSXCIsXHJcbiAgICAgICAgXCJURVJSQUNFXCIsXHJcbiAgICAgICAgXCJURVhUVVJFXCIsXHJcbiAgICAgICAgXCJUSEVBVEVSXCIsXHJcbiAgICAgICAgXCJUSElNQkxFXCIsXHJcbiAgICAgICAgXCJUSE9VR0hUXCIsXHJcbiAgICAgICAgXCJUSFJPVUdIXCIsXHJcbiAgICAgICAgXCJUSFVOREVSXCIsXHJcbiAgICAgICAgXCJUT0JBQ0NPXCIsXHJcbiAgICAgICAgXCJUT05JR0hUXCIsXHJcbiAgICAgICAgXCJUT1JQRURPXCIsXHJcbiAgICAgICAgXCJUUkFGRklDXCIsXHJcbiAgICAgICAgXCJUUkFHRURZXCIsXHJcbiAgICAgICAgXCJUUkFJTkVSXCIsXHJcbiAgICAgICAgXCJUUk9VQkxFXCIsXHJcbiAgICAgICAgXCJUVUVTREFZXCIsXHJcbiAgICAgICAgXCJUVVJCSU5FXCIsXHJcbiAgICAgICAgXCJUVVJOSU5HXCIsXHJcbiAgICAgICAgXCJVTkRFUkdPXCIsXHJcbiAgICAgICAgXCJVTktOT1dOXCIsXHJcbiAgICAgICAgXCJVUFJJR0hUXCIsXHJcbiAgICAgICAgXCJWQUxFTkNZXCIsXHJcbiAgICAgICAgXCJWQU5JTExBXCIsXHJcbiAgICAgICAgXCJWSUNUT1JZXCIsXHJcbiAgICAgICAgXCJWSU9MRU5UXCIsXHJcbiAgICAgICAgXCJWSVRBTUlOXCIsXHJcbiAgICAgICAgXCJXQUlUSU5HXCIsXHJcbiAgICAgICAgXCJXRUFUSEVSXCIsXHJcbiAgICAgICAgXCJXRUVLRU5EXCIsXHJcbiAgICAgICAgXCJXRUxDT01FXCIsXHJcbiAgICAgICAgXCJXSEVSRUFTXCIsXHJcbiAgICAgICAgXCJXSEVSRUJZXCIsXHJcbiAgICAgICAgXCJXSEVUSEVSXCIsXHJcbiAgICAgICAgXCJXSElTVExFXCIsXHJcbiAgICAgICAgXCJXSE9FVkVSXCIsXHJcbiAgICAgICAgXCJXSVRIT1VUXCIsXHJcbiAgICAgICAgXCJXT1JLSU5HXCIsXHJcbiAgICAgICAgXCJXUklUSU5HXCIsXHJcbiAgICAgICAgXCJaT09MT0dZXCIsXHJcbiAgICBdLFxyXG4gICAgW1xyXG4gICAgICAgIFwiQUNDSURFTlRcIixcclxuICAgICAgICBcIkFERElUSU9OXCIsXHJcbiAgICAgICAgXCJBREpBQ0VOVFwiLFxyXG4gICAgICAgIFwiQUlSUExBTkVcIixcclxuICAgICAgICBcIkFNQklUSU9OXCIsXHJcbiAgICAgICAgXCJBTllUSElOR1wiLFxyXG4gICAgICAgIFwiQU5ZV0hFUkVcIixcclxuICAgICAgICBcIkFQUFJPVkFMXCIsXHJcbiAgICAgICAgXCJBUkdVTUVOVFwiLFxyXG4gICAgICAgIFwiQVNCRVNUT1NcIixcclxuICAgICAgICBcIkJBQ0tCT05FXCIsXHJcbiAgICAgICAgXCJCQU5LUlVQVFwiLFxyXG4gICAgICAgIFwiQkVIQVZJT1JcIixcclxuICAgICAgICBcIkJJUlRIREFZXCIsXHJcbiAgICAgICAgXCJCTFVFQkVMTFwiLFxyXG4gICAgICAgIFwiQlVJTERJTkdcIixcclxuICAgICAgICBcIkJVT1lBTkNZXCIsXHJcbiAgICAgICAgXCJCVVNJTkVTU1wiLFxyXG4gICAgICAgIFwiQ0FMRU5EQVJcIixcclxuICAgICAgICBcIkNBUEFDSVRZXCIsXHJcbiAgICAgICAgXCJDQVJFRlJFRVwiLFxyXG4gICAgICAgIFwiQ0FSUklBR0VcIixcclxuICAgICAgICBcIkNFUkVNT05ZXCIsXHJcbiAgICAgICAgXCJDSEVNSUNBTFwiLFxyXG4gICAgICAgIFwiQ0xFQVZBR0VcIixcclxuICAgICAgICBcIkNMT1RISUVSXCIsXHJcbiAgICAgICAgXCJDTE9USElOR1wiLFxyXG4gICAgICAgIFwiQ09DS1RBSUxcIixcclxuICAgICAgICBcIkNPTVBMRVRFXCIsXHJcbiAgICAgICAgXCJDT01QT1VORFwiLFxyXG4gICAgICAgIFwiQ09OQ1JFVEVcIixcclxuICAgICAgICBcIkNPTlNUQU5UXCIsXHJcbiAgICAgICAgXCJDT05TVU1FUlwiLFxyXG4gICAgICAgIFwiQ1VQQk9BUkRcIixcclxuICAgICAgICBcIkRBVUdIVEVSXCIsXHJcbiAgICAgICAgXCJEQVlMSUdIVFwiLFxyXG4gICAgICAgIFwiREVDRU1CRVJcIixcclxuICAgICAgICBcIkRFQ0lTSU9OXCIsXHJcbiAgICAgICAgXCJERUNSRUFTRVwiLFxyXG4gICAgICAgIFwiREVMSUNBVEVcIixcclxuICAgICAgICBcIkRFTElWRVJZXCIsXHJcbiAgICAgICAgXCJERVNJR05FUlwiLFxyXG4gICAgICAgIFwiRElBTUVURVJcIixcclxuICAgICAgICBcIkRJTFVUSU9OXCIsXHJcbiAgICAgICAgXCJESVNDT1VOVFwiLFxyXG4gICAgICAgIFwiRElTR1JBQ0VcIixcclxuICAgICAgICBcIkRJU1RBTkNFXCIsXHJcbiAgICAgICAgXCJESVZJU0lPTlwiLFxyXG4gICAgICAgIFwiRE9NSU5JT05cIixcclxuICAgICAgICBcIkRPV05GQUxMXCIsXHJcbiAgICAgICAgXCJEUkVBREZVTFwiLFxyXG4gICAgICAgIFwiRFJFU1NJTkdcIixcclxuICAgICAgICBcIkRZTkFNSVRFXCIsXHJcbiAgICAgICAgXCJFTEVDVFJJQ1wiLFxyXG4gICAgICAgIFwiRU1QTE9ZRVJcIixcclxuICAgICAgICBcIkVOR0lORUVSXCIsXHJcbiAgICAgICAgXCJFTlZFTE9QRVwiLFxyXG4gICAgICAgIFwiRVFVQVRJT05cIixcclxuICAgICAgICBcIkVSVVBUSU9OXCIsXHJcbiAgICAgICAgXCJFVkVSWURBWVwiLFxyXG4gICAgICAgIFwiRVZFUllPTkVcIixcclxuICAgICAgICBcIkVYQ0hBTkdFXCIsXHJcbiAgICAgICAgXCJFWEVSQ0lTRVwiLFxyXG4gICAgICAgIFwiRkVCUlVBUllcIixcclxuICAgICAgICBcIkZJUkVXT1JLXCIsXHJcbiAgICAgICAgXCJGT09UQkFMTFwiLFxyXG4gICAgICAgIFwiRk9PVE5PVEVcIixcclxuICAgICAgICBcIkZPT1RTVEVQXCIsXHJcbiAgICAgICAgXCJGT1JFQ0FTVFwiLFxyXG4gICAgICAgIFwiRk9SRUhFQURcIixcclxuICAgICAgICBcIkZPVVJURUVOXCIsXHJcbiAgICAgICAgXCJGUkFDVElPTlwiLFxyXG4gICAgICAgIFwiRlJBQ1RVUkVcIixcclxuICAgICAgICBcIkZSRVFVRU5UXCIsXHJcbiAgICAgICAgXCJGUklDVElPTlwiLFxyXG4gICAgICAgIFwiR0FSREVORVJcIixcclxuICAgICAgICBcIkdBU1dPUktTXCIsXHJcbiAgICAgICAgXCJHRU9NRVRSWVwiLFxyXG4gICAgICAgIFwiR0xZQ0VSSU5cIixcclxuICAgICAgICBcIkdPTERGSVNIXCIsXHJcbiAgICAgICAgXCJHUkFURUZVTFwiLFxyXG4gICAgICAgIFwiR1VOTUVUQUxcIixcclxuICAgICAgICBcIkhBTkRCT09LXCIsXHJcbiAgICAgICAgXCJIRUFETEFORFwiLFxyXG4gICAgICAgIFwiSEVSRVdJVEhcIixcclxuICAgICAgICBcIkhPU1BJVEFMXCIsXHJcbiAgICAgICAgXCJIWVNURVJJQVwiLFxyXG4gICAgICAgIFwiSU1QRVJJQUxcIixcclxuICAgICAgICBcIklNUFVSSVRZXCIsXHJcbiAgICAgICAgXCJJTkFTTVVDSFwiLFxyXG4gICAgICAgIFwiSU5DUkVBU0VcIixcclxuICAgICAgICBcIklORFVTVFJZXCIsXHJcbiAgICAgICAgXCJJTkZJTklUWVwiLFxyXG4gICAgICAgIFwiSU5OT0NFTlRcIixcclxuICAgICAgICBcIklOVEVSRVNUXCIsXHJcbiAgICAgICAgXCJMQU5ETUFSS1wiLFxyXG4gICAgICAgIFwiTEFORFNMSVBcIixcclxuICAgICAgICBcIkxBTkdVQUdFXCIsXHJcbiAgICAgICAgXCJMQVRJVFVERVwiLFxyXG4gICAgICAgIFwiTEFVR0hJTkdcIixcclxuICAgICAgICBcIkxFQVJOSU5HXCIsXHJcbiAgICAgICAgXCJNQUNBUk9OSVwiLFxyXG4gICAgICAgIFwiTUFHTkVUSUNcIixcclxuICAgICAgICBcIk1BUlJJQUdFXCIsXHJcbiAgICAgICAgXCJNQVRFUklBTFwiLFxyXG4gICAgICAgIFwiTUFUVFJFU1NcIixcclxuICAgICAgICBcIk1FRElDSU5FXCIsXHJcbiAgICAgICAgXCJNSUxJVEFSWVwiLFxyXG4gICAgICAgIFwiTU9NRU5UVU1cIixcclxuICAgICAgICBcIk1PTk9QT0xZXCIsXHJcbiAgICAgICAgXCJNT1VOVEFJTlwiLFxyXG4gICAgICAgIFwiTVVMVElQTEVcIixcclxuICAgICAgICBcIk5FSUdIQk9SXCIsXHJcbiAgICAgICAgXCJOSUNPVElORVwiLFxyXG4gICAgICAgIFwiTk9WRU1CRVJcIixcclxuICAgICAgICBcIk9CRURJRU5UXCIsXHJcbiAgICAgICAgXCJPTkNPTUlOR1wiLFxyXG4gICAgICAgIFwiT05MT09LRVJcIixcclxuICAgICAgICBcIk9QUE9TSVRFXCIsXHJcbiAgICAgICAgXCJPUkdBTklTTVwiLFxyXG4gICAgICAgIFwiT1JOQU1FTlRcIixcclxuICAgICAgICBcIk9VVEJVUlNUXCIsXHJcbiAgICAgICAgXCJPVVRHT0lOR1wiLFxyXG4gICAgICAgIFwiT1VUSE9VU0VcIixcclxuICAgICAgICBcIk9WRVJDT0FUXCIsXHJcbiAgICAgICAgXCJPVkVSQ09NRVwiLFxyXG4gICAgICAgIFwiT1ZFUkZVTExcIixcclxuICAgICAgICBcIk9WRVJIRUFEXCIsXHJcbiAgICAgICAgXCJPVkVSTEFORFwiLFxyXG4gICAgICAgIFwiT1ZFUkxFQUZcIixcclxuICAgICAgICBcIk9WRVJMT1VEXCIsXHJcbiAgICAgICAgXCJPVkVSU0VBU1wiLFxyXG4gICAgICAgIFwiT1ZFUlNFRVJcIixcclxuICAgICAgICBcIk9WRVJTSE9FXCIsXHJcbiAgICAgICAgXCJPVkVSVEFLRVwiLFxyXG4gICAgICAgIFwiT1ZFUlRJTUVcIixcclxuICAgICAgICBcIlBBSU5USU5HXCIsXHJcbiAgICAgICAgXCJQQVJBRElTRVwiLFxyXG4gICAgICAgIFwiUEFSQUZGSU5cIixcclxuICAgICAgICBcIlBBUkFMTEVMXCIsXHJcbiAgICAgICAgXCJQQVJUSUNMRVwiLFxyXG4gICAgICAgIFwiUEFTU1BPUlRcIixcclxuICAgICAgICBcIlBBVElFTkNFXCIsXHJcbiAgICAgICAgXCJQRU5EVUxVTVwiLFxyXG4gICAgICAgIFwiUEhZU0lDQUxcIixcclxuICAgICAgICBcIlBMQVRJTlVNXCIsXHJcbiAgICAgICAgXCJQTEVBU1VSRVwiLFxyXG4gICAgICAgIFwiUE9JTlRJTkdcIixcclxuICAgICAgICBcIlBPU0lUSU9OXCIsXHJcbiAgICAgICAgXCJQT1NTSUJMRVwiLFxyXG4gICAgICAgIFwiUE9TVE1BUktcIixcclxuICAgICAgICBcIlBSQUNUSUNFXCIsXHJcbiAgICAgICAgXCJQUkVTU1VSRVwiLFxyXG4gICAgICAgIFwiUFJJTkNFU1NcIixcclxuICAgICAgICBcIlBSSVNPTkVSXCIsXHJcbiAgICAgICAgXCJQUk9CQUJMRVwiLFxyXG4gICAgICAgIFwiUFJPRFVDRVJcIixcclxuICAgICAgICBcIlBST0dSRVNTXCIsXHJcbiAgICAgICAgXCJQUk9QRVJUWVwiLFxyXG4gICAgICAgIFwiUFVSQ0hBU0VcIixcclxuICAgICAgICBcIlFVQU5USVRZXCIsXHJcbiAgICAgICAgXCJRVUVTVElPTlwiLFxyXG4gICAgICAgIFwiUVVPVElFTlRcIixcclxuICAgICAgICBcIlJFQUNUSU9OXCIsXHJcbiAgICAgICAgXCJSRUNFSVZFUlwiLFxyXG4gICAgICAgIFwiUkVMQVRJT05cIixcclxuICAgICAgICBcIlJFTEFUSVZFXCIsXHJcbiAgICAgICAgXCJSRUxJR0lPTlwiLFxyXG4gICAgICAgIFwiUklHSURJVFlcIixcclxuICAgICAgICBcIlJPVEFUSU9OXCIsXHJcbiAgICAgICAgXCJTQVRVUkRBWVwiLFxyXG4gICAgICAgIFwiU0NJU1NPUlNcIixcclxuICAgICAgICBcIlNFQ1VSSVRZXCIsXHJcbiAgICAgICAgXCJTRU5URU5DRVwiLFxyXG4gICAgICAgIFwiU0VQQVJBVEVcIixcclxuICAgICAgICBcIlNIT0NLSU5HXCIsXHJcbiAgICAgICAgXCJTSE9VTERFUlwiLFxyXG4gICAgICAgIFwiU0lERVdBTEtcIixcclxuICAgICAgICBcIlNPTFVUSU9OXCIsXHJcbiAgICAgICAgXCJTT01FQk9EWVwiLFxyXG4gICAgICAgIFwiU09NRVRJTUVcIixcclxuICAgICAgICBcIlNPTUVXSEFUXCIsXHJcbiAgICAgICAgXCJTUEVDSU1FTlwiLFxyXG4gICAgICAgIFwiU1RJTVVMVVNcIixcclxuICAgICAgICBcIlNUT0NLSU5HXCIsXHJcbiAgICAgICAgXCJTVE9QUElOR1wiLFxyXG4gICAgICAgIFwiU1RSQUlHSFRcIixcclxuICAgICAgICBcIlNUUkVOR1RIXCIsXHJcbiAgICAgICAgXCJTVUNITElLRVwiLFxyXG4gICAgICAgIFwiU1VOTElHSFRcIixcclxuICAgICAgICBcIlNVTlNIQURFXCIsXHJcbiAgICAgICAgXCJTVVJQUklTRVwiLFxyXG4gICAgICAgIFwiU1dFTExJTkdcIixcclxuICAgICAgICBcIlRFQUNISU5HXCIsXHJcbiAgICAgICAgXCJURUxFR1JBTVwiLFxyXG4gICAgICAgIFwiVEVOREVOQ1lcIixcclxuICAgICAgICBcIlRISVJURUVOXCIsXHJcbiAgICAgICAgXCJUSE9VU0FORFwiLFxyXG4gICAgICAgIFwiVEhVUlNEQVlcIixcclxuICAgICAgICBcIlRPR0VUSEVSXCIsXHJcbiAgICAgICAgXCJUT01PUlJPV1wiLFxyXG4gICAgICAgIFwiVE9VQ0hJTkdcIixcclxuICAgICAgICBcIlRSQUlOSU5HXCIsXHJcbiAgICAgICAgXCJUUklBTkdMRVwiLFxyXG4gICAgICAgIFwiVFJPVUJMRURcIixcclxuICAgICAgICBcIlRST1VTRVJTXCIsXHJcbiAgICAgICAgXCJVTUJSRUxMQVwiLFxyXG4gICAgICAgIFwiVU5JVkVSU0VcIixcclxuICAgICAgICBcIlZBUklBQkxFXCIsXHJcbiAgICAgICAgXCJWQVNDVUxBUlwiLFxyXG4gICAgICAgIFwiVkVMT0NJVFlcIixcclxuICAgICAgICBcIldIQVRFVkVSXCIsXHJcbiAgICAgICAgXCJXSEVORVZFUlwiLFxyXG4gICAgICAgIFwiV0hFUkVWRVJcIixcclxuICAgICAgICBcIldJTkRQSVBFXCIsXHJcbiAgICAgICAgXCJXT09EV09SS1wiLFxyXG4gICAgICAgIFwiWUVBUkJPT0tcIixcclxuICAgICAgICBcIllPVVJTRUxGXCIsXHJcbiAgICBdLFxyXG4gICAgW1xyXG4gICAgICAgIFwiQUNDRVNTT1JZXCIsXHJcbiAgICAgICAgXCJBRFZFTlRVUkVcIixcclxuICAgICAgICBcIkFHUkVFTUVOVFwiLFxyXG4gICAgICAgIFwiQUxMT1dBTkNFXCIsXHJcbiAgICAgICAgXCJBTFVNSU5JVU1cIixcclxuICAgICAgICBcIkFNUExJVFVERVwiLFxyXG4gICAgICAgIFwiQU1VU0VNRU5UXCIsXHJcbiAgICAgICAgXCJBUFBBUkFUVVNcIixcclxuICAgICAgICBcIkFQUEVOREFHRVwiLFxyXG4gICAgICAgIFwiQVJCSVRSQVJZXCIsXHJcbiAgICAgICAgXCJBU1NJU1RBTlRcIixcclxuICAgICAgICBcIkFUVEVOVElPTlwiLFxyXG4gICAgICAgIFwiQVVUSE9SSVRZXCIsXHJcbiAgICAgICAgXCJBVVRPTUFUSUNcIixcclxuICAgICAgICBcIkJBQ0tXT09EU1wiLFxyXG4gICAgICAgIFwiQkVBVVRJRlVMXCIsXHJcbiAgICAgICAgXCJCTEFDS0JJUkRcIixcclxuICAgICAgICBcIkJSRUFLRkFTVFwiLFxyXG4gICAgICAgIFwiQlJVU0hXT09EXCIsXHJcbiAgICAgICAgXCJCVVRURVJDVVBcIixcclxuICAgICAgICBcIkNBUkRCT0FSRFwiLFxyXG4gICAgICAgIFwiQ0FSRVRBS0VSXCIsXHJcbiAgICAgICAgXCJDQVJUSUxBR0VcIixcclxuICAgICAgICBcIkNIQU1QQUdORVwiLFxyXG4gICAgICAgIFwiQ0hBUkFDVEVSXCIsXHJcbiAgICAgICAgXCJDSEFVRkZFVVJcIixcclxuICAgICAgICBcIkNIRU1JU1RSWVwiLFxyXG4gICAgICAgIFwiQ0hPQ09MQVRFXCIsXHJcbiAgICAgICAgXCJDSUdBUkVUVEVcIixcclxuICAgICAgICBcIkNMT0NLV09SS1wiLFxyXG4gICAgICAgIFwiQ09MTElTSU9OXCIsXHJcbiAgICAgICAgXCJDT01NSVRURUVcIixcclxuICAgICAgICBcIkNPTVBMQUlOVFwiLFxyXG4gICAgICAgIFwiQ09NUE9ORU5UXCIsXHJcbiAgICAgICAgXCJDT05ESVRJT05cIixcclxuICAgICAgICBcIkNPTkRVQ1RPUlwiLFxyXG4gICAgICAgIFwiQ09OR1JVRU5UXCIsXHJcbiAgICAgICAgXCJDT05TQ0lPVVNcIixcclxuICAgICAgICBcIkNPUFlSSUdIVFwiLFxyXG4gICAgICAgIFwiQ09SUk9TSU9OXCIsXHJcbiAgICAgICAgXCJERUZMQVRJT05cIixcclxuICAgICAgICBcIkRFUEVOREVOVFwiLFxyXG4gICAgICAgIFwiRElGRkVSRU5UXCIsXHJcbiAgICAgICAgXCJESUdFU1RJT05cIixcclxuICAgICAgICBcIkRJUkVDVElPTlwiLFxyXG4gICAgICAgIFwiRElTQ0hBUkdFXCIsXHJcbiAgICAgICAgXCJESVNDT1ZFUllcIixcclxuICAgICAgICBcIkVBUlRIV09SS1wiLFxyXG4gICAgICAgIFwiRURVQ0FUSU9OXCIsXHJcbiAgICAgICAgXCJFVkVSR1JFRU5cIixcclxuICAgICAgICBcIkVWRVJZQk9EWVwiLFxyXG4gICAgICAgIFwiRVhJU1RFTkNFXCIsXHJcbiAgICAgICAgXCJFWFBBTlNJT05cIixcclxuICAgICAgICBcIkVYUExPU0lPTlwiLFxyXG4gICAgICAgIFwiRkFTVEVOSU5HXCIsXHJcbiAgICAgICAgXCJGSU5BTkNJQUxcIixcclxuICAgICAgICBcIkZJUkVQTEFDRVwiLFxyXG4gICAgICAgIFwiRklTSEVSTUFOXCIsXHJcbiAgICAgICAgXCJGT0xJQVRJT05cIixcclxuICAgICAgICBcIkZPT1RQUklOVFwiLFxyXG4gICAgICAgIFwiRlVSTklUVVJFXCIsXHJcbiAgICAgICAgXCJHRU9HUkFQSFlcIixcclxuICAgICAgICBcIkdPT0ROSUdIVFwiLFxyXG4gICAgICAgIFwiR1VBUkFOVEVFXCIsXHJcbiAgICAgICAgXCJHVU5QT1dERVJcIixcclxuICAgICAgICBcIkhFQUREUkVTU1wiLFxyXG4gICAgICAgIFwiSEVBRFNUT05FXCIsXHJcbiAgICAgICAgXCJIRVJFQUZURVJcIixcclxuICAgICAgICBcIkhJR0hMQU5EU1wiLFxyXG4gICAgICAgIFwiSE9SU0VQTEFZXCIsXHJcbiAgICAgICAgXCJIT1VSR0xBU1NcIixcclxuICAgICAgICBcIkhPVVNFQk9BVFwiLFxyXG4gICAgICAgIFwiSU1QT1JUQU5UXCIsXHJcbiAgICAgICAgXCJJTkNMVVNJT05cIixcclxuICAgICAgICBcIklORkxBVElPTlwiLFxyXG4gICAgICAgIFwiSU5GTFVFTlpBXCIsXHJcbiAgICAgICAgXCJJTlNVTEFUT1JcIixcclxuICAgICAgICBcIklOU1VSQU5DRVwiLFxyXG4gICAgICAgIFwiSU5URVJDRVBUXCIsXHJcbiAgICAgICAgXCJJTlRSVVNJT05cIixcclxuICAgICAgICBcIklOVkVOVElPTlwiLFxyXG4gICAgICAgIFwiS05PV0xFREdFXCIsXHJcbiAgICAgICAgXCJMSUFCSUxJVFlcIixcclxuICAgICAgICBcIkxJTUVTVE9ORVwiLFxyXG4gICAgICAgIFwiTE9OR0lUVURFXCIsXHJcbiAgICAgICAgXCJNQUdOSVRVREVcIixcclxuICAgICAgICBcIk1PVVNUQUNIRVwiLFxyXG4gICAgICAgIFwiTkVDRVNTQVJZXCIsXHJcbiAgICAgICAgXCJORVdTUEFQRVJcIixcclxuICAgICAgICBcIk5VTUVSQVRPUlwiLFxyXG4gICAgICAgIFwiT0ZGU1BSSU5HXCIsXHJcbiAgICAgICAgXCJPUEVSQVRJT05cIixcclxuICAgICAgICBcIk9SQ0hFU1RSQVwiLFxyXG4gICAgICAgIFwiT1VUU0tJUlRTXCIsXHJcbiAgICAgICAgXCJPVkVSVEFYRURcIixcclxuICAgICAgICBcIk9YSURBVElPTlwiLFxyXG4gICAgICAgIFwiUEFSQUdSQVBIXCIsXHJcbiAgICAgICAgXCJQRVRST0xFVU1cIixcclxuICAgICAgICBcIlBMQVlUSElOR1wiLFxyXG4gICAgICAgIFwiUE9MSUNFTUFOXCIsXHJcbiAgICAgICAgXCJQT0xJVElDQUxcIixcclxuICAgICAgICBcIlBPUkNFTEFJTlwiLFxyXG4gICAgICAgIFwiUFJFU0lERU5UXCIsXHJcbiAgICAgICAgXCJSQURJQVRJT05cIixcclxuICAgICAgICBcIlJFQ1RBTkdMRVwiLFxyXG4gICAgICAgIFwiUkVDVVJSSU5HXCIsXHJcbiAgICAgICAgXCJSRUZFUkVOQ0VcIixcclxuICAgICAgICBcIlJFUFVMU0lPTlwiLFxyXG4gICAgICAgIFwiU0FUVVJBVEVEXCIsXHJcbiAgICAgICAgXCJTRUNSRVRBUllcIixcclxuICAgICAgICBcIlNFQ1JFVElPTlwiLFxyXG4gICAgICAgIFwiU0VMRUNUSU9OXCIsXHJcbiAgICAgICAgXCJTRVBURU1CRVJcIixcclxuICAgICAgICBcIlNIT1JUSEFORFwiLFxyXG4gICAgICAgIFwiU0lERUJPQVJEXCIsXHJcbiAgICAgICAgXCJTT01FVEhJTkdcIixcclxuICAgICAgICBcIlNPTUVXSEVSRVwiLFxyXG4gICAgICAgIFwiU1RBVEVNRU5UXCIsXHJcbiAgICAgICAgXCJTVFJFVENIRVJcIixcclxuICAgICAgICBcIlNUUlVDVFVSRVwiLFxyXG4gICAgICAgIFwiU1VCU1RBTkNFXCIsXHJcbiAgICAgICAgXCJURUxFUEhPTkVcIixcclxuICAgICAgICBcIlRISUNLTkVTU1wiLFxyXG4gICAgICAgIFwiVFJBREVTTUFOXCIsXHJcbiAgICAgICAgXCJUUkFOU1BPUlRcIixcclxuICAgICAgICBcIlRSRUFUTUVOVFwiLFxyXG4gICAgICAgIFwiVFJPVUJMSU5HXCIsXHJcbiAgICAgICAgXCJVTkRFUlRBS0VcIixcclxuICAgICAgICBcIlZFR0VUQUJMRVwiLFxyXG4gICAgICAgIFwiVkVTVElHSUFMXCIsXHJcbiAgICAgICAgXCJWSUVXUE9JTlRcIixcclxuICAgICAgICBcIldBVEVSRkFMTFwiLFxyXG4gICAgICAgIFwiV0VETkVTREFZXCIsXHJcbiAgICAgICAgXCJXSElDSEVWRVJcIixcclxuICAgICAgICBcIldISVRFV0FTSFwiLFxyXG4gICAgICAgIFwiV0hPTEVTQUxFXCIsXHJcbiAgICAgICAgXCJXT1JLSE9VU0VcIixcclxuICAgICAgICBcIllFU1RFUkRBWVwiLFxyXG4gICAgICAgIFwiWk9PS0VFUEVSXCIsXHJcbiAgICBdLFxyXG5dO1xyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIFRPRE86XHJcbi8vIEF1dG8tc2F2ZSBldmVyeSAxMCBzZWNvbmRzXHJcbi8vIFByZXZlbnQgY2F0Y2h1cCBsYWcgYWZ0ZXIgdGFiLW91dFxyXG4vLyBBdXRvLWNhbGN1bGF0ZSB0cnVlIGF2ZXJhZ2UgYmFuYW5hcyBwZXIgd29yZFxyXG4vLyByZWNydWl0IG11bHRpcGxlIG1vbmtleXMgYXQgYSB0aW1lICgxMHgsIDEwMHgpXHJcbi8vIHVzZSBhIGJsaW5raW5nIHVuZGVybGluZSBhbmltYXRpb24gZm9yIHRoZSBuZXh0IGxldHRlciBvblxyXG4vLyAgICBhbnkgdGV4dCBkaXNwbGF5IC0gbGlrZSBhbiBvbGQgY29tbWFuZCBsaW5lXHJcbi8vIHZpc3VhbGx5IGluZGljYXRlIHRoZSBudW1iZXIgb2YgbGV0dGVycyB5b3VyIGtleWJvYXJkIGNhbiBmaXRcclxuLy8gb3B0aW1pemUgdGhlIGRpc3BsYXkgb2YgbWFueSB0ZXh0IGRpc3BsYXlzIGF0IG9uY2VcclxuLy8gZ29vZCwgYnV0IHNtYWxsLWlzaCB3b3JkIGxpc3Q6IGh0dHBzOi8vc2ltcGxlLndpa2lwZWRpYS5vcmcvd2lraS9XaWtpcGVkaWE6QmFzaWNfRW5nbGlzaF9jb21iaW5lZF93b3JkbGlzdFxyXG4vLyBzb3VyY2U6IGh0dHBzOi8vZW4ud2lrdGlvbmFyeS5vcmcvd2lraS9XaWt0aW9uYXJ5OkZyZXF1ZW5jeV9saXN0cyNUb3BfRW5nbGlzaF93b3Jkc19saXN0c1xyXG5cclxuLy8gSGF2ZSB0ZXh0IGZpdCB3aXRoaW4gdGhlIGJvdW5kcyBvZiB0aGUgYnV0dG9uc1xyXG4vLyBUaGUgc2F2ZSBzaG91bGQgYmUgZW5jcnlwdGVkXHJcbi8vIFRoZSBlcmFzZSBzYXZlIGJ1dHRvbiBzaG91bGQgaGF2ZSBhIGNvbmZpcm1hdGlvbiBzdGVwXHJcbi8vIFRoZSBlcmFzZSBzYXZlIGJ1dHRvbiBzaG91bGQgYWxzbyByZXNldCB0aGUgZ2FtZSAocHJvYmFibHkgd2lsbCByZW5hbWUgdGhlIGJ1dHRvbilcclxuLy8gVGhlcmUgc2hvdWxkIGJlIGFuIGltcG9ydC9leHBvcnQgb3B0aW9uIHRvIGxldCB0aGUgcGxheWVyIGJhY2sgdXAgdGhlaXIgc2F2ZVxyXG4vLyBUaGVyZSBhcmUgYmFsYW5jZSBpc3N1ZXNcclxuLy8gVGhlcmUgc2hvdWxkIGJlIHVwZ3JhZGVzXHJcbi8vIGFkanVzdGFibGUgdXBkYXRlIHJhdGUgZm9yIGJhbmFuYXMgcGVyIHNlY29uZCBkaXNwbGF5XHJcbi8vIGNvbXByZXNzZWQgbm90YXRpb24gZm9yIGxhcmdlIG51bWJlcnNcclxuXHJcbi8vIEhvdyBtYW55IHNjcmVlbnMgY2FuIEkgZGlzcGxheSBhdCBvbmNlP1xyXG4vLyAzayBpcyBhYm91dCB0aGUgbGltaXQgcmlnaHQgbm93XHJcblxyXG4vLyBXaGF0IGlmIGluc3RlYWQgb2YgcGlja2luZyBvbmUgdGFyZ2V0IHdvcmQgYXQgYSB0aW1lLCB0aGUgcGxheWVyIGJ1aWx0IHVwIGEgZGljdGlvbmFyeT9cclxuLy8gICAgQU5ELCB3aGF0IGlmLCB0aGV5IGVhcm5lZCBiYW5hbmFzIGZvciBldmVyeSBtYXRjaGluZyBsZXR0ZXIgaW4gdGhlaXIgZGljdGlvbmFyeT9cclxuLy8gICAgKHJhdGhlciB0aGFuIGZvciBqdXN0IHRoZSBsZXR0ZXJzIHRoZXkgbWF0Y2hlZCB3aXRoIGEgcGFydGljdWxhciB3b3JkPylcclxuLy8gVGhpcyBpbXBsaWVzIG9uZSBmZWF0dXJlIHdoZXJlIHlvdSBjYW4gdXBncmFkZSBhIHBhcnRpY3VsYXIgc2xvdCB0byBhd2FyZCBtb3JlIGJhbmFuYXNcclxuLy8gICAgZS5nLiBkb3VibGUgYWxsIGJhbmFuYXMgZWFybmVkIGZyb20gbWF0Y2hlcyBpbiB0aGUgc2Vjb25kIGxldHRlclxyXG4vLyBXaGF0IGlmLCBhdCB0aGUgc2FtZSB0aW1lLCB3b3JkcyBhbHNvIGF3YXJkZWQgZGlmZmVyZW50IGFtb3VudHMgZm9yIGRpZmZlcmVudCBudW1iZXJzIG9mIG1hdGNoZXM/XHJcbi8vIFdoYXQgaWYgdGhlIGdhbWUgd2FzIHN0cnVjdHVyZWQga2luZCBvZiBsaWtlIGEgZGVjay1idWlsZGVyP1xyXG4vLyBXaGF0IGlmIHRoZSB3b3JkcyB5b3UgY291bGQgYWRkIHRvIHlvdXIgZGljdGlvbmFyeSB3ZXJlIGNob3NlbiBhdCByYW5kb20/XHJcbi8vIFdoYXQgaWYgd2UgYnJvdWdodCBiYWNrIHRoZSBpZGVhIG9mIGxpbWl0aW5nIGhvdyB0aGUgcGxheWVyIGN1c3RvbWl6ZWQgdGhlaXIga2V5Ym9hcmQ/XHJcbi8vIFdoYXQgaWYgeW91IGNhbiB1cGdyYWRlIHdvcmRzP1xyXG5cclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIi4vYnV0dG9uXCI7XHJcbmltcG9ydCB7IGNhbnZhcywgY29sbGlkZWFibGVzLCBjdHgsIGRyYXdhYmxlcywgZywgcGxheWVyRGljdGlvbmFyeSwgdXBkYXRlYWJsZXMgfSBmcm9tIFwiLi9nbG9iYWxcIjtcclxuaW1wb3J0IHsgZXJhc2VTYXZlLCBsb2FkRnJvbUxvY2FsU3RvcmFnZSwgc2F2ZSB9IGZyb20gXCIuL2xvY2FsX3N0b3JhZ2VcIjtcclxuaW1wb3J0IHsgdGFyZ2V0cyB9IGZyb20gXCIuL3RhcmdldHNcIjtcclxuaW1wb3J0IHsgZG93bmxvYWQsIGdlbmVyYXRlUGVybXV0YXRpb25zIH0gZnJvbSBcIi4vdGVzdF9wZXJtdXRhdGlvbnNcIjtcclxuaW1wb3J0IHsgYWxpZ25UZXh0RGlzcGxheXNUb0dyaWQsIFRleHREaXNwbGF5IH0gZnJvbSBcIi4vdGV4dF9kaXNwbGF5XCI7XHJcbmltcG9ydCB7IENvbGxpZGVhYmxlIH0gZnJvbSBcIi4vdHlwZXNcIjtcclxuaW1wb3J0IHsgVXBncmFkZSB9IGZyb20gXCIuL3VwZ3JhZGVcIjtcclxuaW1wb3J0IHsgdXBncmFkZXMgfSBmcm9tIFwiLi91cGdyYWRlc1wiO1xyXG5pbXBvcnQgeyBjb3VudE1hdGNoaW5nTGV0dGVycywgZ2V0UmFuZG9tQ2hhcmFjdGVyLCBnZXRSYW5kb21JbnQsIHJnYlN0cmluZyB9IGZyb20gXCIuL3V0aWxcIjtcclxuaW1wb3J0IHsgcGFyc2VXb3JkcywgdG9QYXJzZSB9IGZyb20gXCIuL3VucGFyc2VkX3dvcmRzXCI7XHJcbmltcG9ydCB7IHdvcmRzIH0gZnJvbSBcIi4vd29yZHNcIjtcclxuXHJcbi8vIGxldCByZXBvcnQxID0gZ2VuZXJhdGVQZXJtdXRhdGlvbnMoXHJcbi8vICAgICBbXCJIXCIsIFwiT1wiLCBcIlRcIl0sXHJcbi8vICAgICBbXCJIXCIsIFwiT1wiLCBcIk9cIiwgXCJUXCJdLFxyXG4vLyApO1xyXG4vLyBkb3dubG9hZChcImhvdC1ob290LXBlcm11dGF0aW9ucy5jc3ZcIiwgcmVwb3J0MSk7XHJcblxyXG4vLyBsZXQgcmVwb3J0MiA9IGdlbmVyYXRlUGVybXV0YXRpb25zKFxyXG4vLyAgICAgW1wiSFwiLCBcIk9cIiwgXCJPXCIsIFwiVFwiXSxcclxuLy8gICAgIFtcIkhcIiwgXCJPXCIsIFwiT1wiLCBcIlRcIl0sXHJcbi8vICk7XHJcbi8vIGRvd25sb2FkKFwiaG9vdC1ob290LXBlcm11dGF0aW9ucy5jc3ZcIiwgcmVwb3J0Mik7XHJcblxyXG5sb2FkRnJvbUxvY2FsU3RvcmFnZSgpO1xyXG5cclxubGV0IGJ1dHRvbkNvbG9yOiBzdHJpbmcgPSByZ2JTdHJpbmcoMjAwLCAyMDAsIDI1NSk7XHJcbmxldCBidXR0b25Ib3ZlckNvbG9yOiBzdHJpbmcgPSByZ2JTdHJpbmcoMTgwLCAxODAsIDIzMCk7XHJcbmxldCBlcmFzZUJ1dHRvbkNvbG9yOiBzdHJpbmcgPSByZ2JTdHJpbmcoMjU1LCA1MCwgNTApO1xyXG5sZXQgZXJhc2VCdXR0b25Ib3ZlckNvbG9yOiBzdHJpbmcgPSByZ2JTdHJpbmcoMjI1LCAyMCwgMjApO1xyXG5cclxuLy8gTWFrZSBidXR0b25zIG91dCBvZiBhbGwgcG9zc2libGUga2V5Ym9hcmQga2V5c1xyXG4vLyBsZXQgYWxsS2V5Ym9hcmRLZXlzID0gW1wiIFwiLCBcIkFcIixcIkJcIixcIkNcIixcIkRcIixcIkVcIixcIkZcIixcIkdcIixcIkhcIixcIklcIixcIkpcIixcIktcIixcIkxcIixcIk1cIixcIk5cIixcIk9cIixcIlBcIixcIlFcIixcIlJcIixcIlNcIixcIlRcIixcIlVcIixcIlZcIixcIldcIixcIlhcIixcIllcIixcIlpcIl07XHJcbmxldCBhbGxLZXlib2FyZEtleXMgPSBbXCLijrVcIiwgXCJBXCIsXCJCXCIsXCJDXCIsXCJEXCIsXCJFXCIsXCJGXCIsXCJHXCIsXCJIXCIsXCJJXCIsXCJKXCIsXCJLXCIsXCJMXCIsXCJNXCIsXCJOXCIsXCJPXCIsXCJQXCIsXCJRXCIsXCJSXCIsXCJTXCIsXCJUXCIsXCJVXCIsXCJWXCIsXCJXXCIsXCJYXCIsXCJZXCIsXCJaXCJdO1xyXG5mb3IgKGxldCBpID0gMDsgaSA8IGFsbEtleWJvYXJkS2V5cy5sZW5ndGg7IGkrKykge1xyXG4gICAgbGV0IGtleSA9IGFsbEtleWJvYXJkS2V5c1tpXTtcclxuICAgIGxldCBidXR0b24gPSBuZXcgQnV0dG9uKFxyXG4gICAgICAgIDIwICsgMzAgKiBpLFxyXG4gICAgICAgIDU1MCxcclxuICAgICAgICAyNSxcclxuICAgICAgICAyNSxcclxuICAgICAgICBrZXksXHJcbiAgICAgICAgYnV0dG9uQ29sb3IsXHJcbiAgICAgICAgYnV0dG9uSG92ZXJDb2xvcixcclxuICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNyZWF0ZUN1cnJlbnRLZXlib2FyZEtleUJ1dHRvbihnLmtleWJvYXJkS2V5cy5sZW5ndGgsIGtleSk7XHJcbiAgICAgICAgICAgIGcua2V5Ym9hcmRLZXlzLnB1c2goa2V5KTtcclxuICAgICAgICAgICAgdXBkYXRlQ2hhcmFjdGVyc1RvQ2hvb3NlRnJvbSgpO1xyXG5cclxuICAgICAgICAgICAgLy8gbm90IHN1cmUgaWYgSSB3aWxsIHdhbnQgdG8gY2xlYXIgYWxsIHRoZSBjdXJyZW50XHJcbiAgICAgICAgICAgIC8vIHN0cmluZ3Mgd2hlbiB0aGUgcGxheWVyIGNoYW5nZXMgdGhlIGtleWJvYXJkXHJcbiAgICAgICAgICAgIC8vIGN1cnJlbnRTdHJpbmcgPSBbXTtcclxuICAgICAgICB9LFxyXG4gICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKGcua2V5Ym9hcmRLZXlzLmxlbmd0aCA8IGcubWF4S2V5Ym9hcmRLZXlzKSB7XHJcbiAgICAgICAgICAgICAgICBidXR0b24uaXNEaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYnV0dG9uLmlzRGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICk7XHJcbn1cclxuXHJcbmxldCByYW5kb21OdW1iZXJTaXplID0gNjU1MzY7XHJcbnVwZGF0ZUNoYXJhY3RlcnNUb0Nob29zZUZyb20oKTtcclxubGV0IGtleWJvYXJkS2V5QnV0dG9uczogQnV0dG9uW10gPSBbXVxyXG5cclxuZm9yIChsZXQgaSA9IDA7IGkgPCBnLmtleWJvYXJkS2V5cy5sZW5ndGg7IGkrKykge1xyXG4gICAgY3JlYXRlQ3VycmVudEtleWJvYXJkS2V5QnV0dG9uKGksIGcua2V5Ym9hcmRLZXlzW2ldKTtcclxufVxyXG5cclxubGV0IHRhcmdldEJ1dHRvbnM6IEJ1dHRvbltdID0gW107XHJcbmZvciAobGV0IGkgPSAwOyBpIDwgdGFyZ2V0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgbGV0IGJ1dHRvblRleHQ6IHN0cmluZyA9IHRhcmdldHNbaV0uZGlzcGxheVN0cmluZztcclxuICAgIGlmICghZy50YXJnZXRPd25lZFtpXSkge1xyXG4gICAgICAgIGJ1dHRvblRleHQgKz0gXCIgXCIgKyB0YXJnZXRzW2ldLnByaWNlO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBidXR0b24gPSBuZXcgQnV0dG9uKFxyXG4gICAgICAgIDUxMCxcclxuICAgICAgICAxNSArIDM1ICogaSxcclxuICAgICAgICA4MCxcclxuICAgICAgICAzMCxcclxuICAgICAgICBidXR0b25UZXh0LFxyXG4gICAgICAgIGJ1dHRvbkNvbG9yLFxyXG4gICAgICAgIGJ1dHRvbkhvdmVyQ29sb3IsXHJcbiAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIWcudGFyZ2V0T3duZWRbaV0pIHtcclxuICAgICAgICAgICAgICAgIGcuYmFuYW5hcyAtPSB0YXJnZXRzW2ldLnByaWNlO1xyXG4gICAgICAgICAgICAgICAgYnV0dG9uLnRleHQgPSB0YXJnZXRzW2ldLmRpc3BsYXlTdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBnLnRhcmdldE93bmVkW2ldID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZy5jdXJyZW50VGFyZ2V0ID0gdGFyZ2V0c1tpXTtcclxuICAgICAgICAgICAgZy5jdXJyZW50VGFyZ2V0SW5kZXggPSBpO1xyXG4gICAgICAgICAgICB0YXJnZXRCdXR0b25zW2ldLmlzRGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICBhbGlnblRleHREaXNwbGF5c1RvR3JpZCgpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0c1tpXS5wcmljZSA+IGcuYmFuYW5hc1xyXG4gICAgICAgICAgICAgICAgICAgICYmICFnLnRhcmdldE93bmVkW2ldXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB8fCB0YXJnZXRzW2ldLmRpc3BsYXlTdHJpbmcgPT09IGcuY3VycmVudFRhcmdldC5kaXNwbGF5U3RyaW5nXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgYnV0dG9uLmlzRGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYnV0dG9uLmlzRGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICApO1xyXG4gICAgdGFyZ2V0QnV0dG9ucy5wdXNoKGJ1dHRvbik7XHJcbn1cclxuXHJcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY2FudmFzKTtcclxuXHJcbmxldCByZWNydWl0UHJpY2UgPSAxMCAqIGcubW9ua2V5cyAqIGcubW9ua2V5cztcclxubGV0IGJ1dHRvbjEgPSBuZXcgQnV0dG9uKFxyXG4gICAgMTAwLFxyXG4gICAgMTAwLFxyXG4gICAgODAsXHJcbiAgICAzMCxcclxuICAgIFwiUmVjcnVpdCBNb25rZXkgXCIgKyByZWNydWl0UHJpY2UsXHJcbiAgICBidXR0b25Db2xvcixcclxuICAgIGJ1dHRvbkhvdmVyQ29sb3IsXHJcbiAgICAoKSA9PiB7XHJcbiAgICAgICAgZy5tb25rZXlzICs9IDE7XHJcbiAgICAgICAgbmV3IFRleHREaXNwbGF5KCk7XHJcbiAgICAgICAgZy5sZXR0ZXJzUGVyU2Vjb25kID0gMTtcclxuICAgICAgICBnLmJhbmFuYXMgLT0gcmVjcnVpdFByaWNlO1xyXG4gICAgICAgIHJlY3J1aXRQcmljZSA9IDEwICogZy5tb25rZXlzICogZy5tb25rZXlzO1xyXG4gICAgICAgIGJ1dHRvbjEudGV4dCA9IFwiUmVjcnVpdCBNb25rZXkgXCIgKyByZWNydWl0UHJpY2U7XHJcbiAgICB9LFxyXG4gICAgKCkgPT4ge1xyXG4gICAgICAgIGlmIChyZWNydWl0UHJpY2UgPiBnLmJhbmFuYXMpIHtcclxuICAgICAgICAgICAgYnV0dG9uMS5pc0Rpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBidXR0b24xLmlzRGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4pO1xyXG5cclxubGV0IGxhc3RDbGlja2VkVGltZU1pbGxpczogbnVtYmVyO1xyXG5sZXQgYnV0dG9uMiA9IG5ldyBCdXR0b24oXHJcbiAgICAxMDAsXHJcbiAgICA0ODAsXHJcbiAgICA4MCxcclxuICAgIDMwLFxyXG4gICAgXCJUeXBlXCIsXHJcbiAgICBidXR0b25Db2xvcixcclxuICAgIGJ1dHRvbkhvdmVyQ29sb3IsXHJcbiAgICAoY3VycmVudFRpbWVNaWxsaXM6IG51bWJlcikgPT4ge1xyXG4gICAgICAgIGlmIChjdXJyZW50VGltZU1pbGxpcyAhPT0gdW5kZWZpbmVkXHJcbiAgICAgICAgICAgICYmIChjdXJyZW50VGltZU1pbGxpcyAtIGxhc3RDbGlja2VkVGltZU1pbGxpcykgPCA1MCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRleHREaXNwbGF5LmxldHRlcnNUb1R5cGVSZW1haW5kZXIgKz0gMTtcclxuICAgICAgICBsYXN0Q2xpY2tlZFRpbWVNaWxsaXMgPSBjdXJyZW50VGltZU1pbGxpcztcclxuICAgIH0sXHJcbiAgICAoKSA9PiB7fVxyXG4pO1xyXG5cclxubGV0IHVwZ3JhZGVLZXlib2FyZFByaWNlID0gTWF0aC5wb3coMTAsIGcubWF4S2V5Ym9hcmRLZXlzICsgMSk7XHJcbmxldCBidXR0b24zID0gbmV3IEJ1dHRvbihcclxuICAgIDI1MCxcclxuICAgIDQ4MCxcclxuICAgIDgwLFxyXG4gICAgMzAsXHJcbiAgICBcIlVwZ3JhZGUgS2V5Ym9hcmQgXCIgKyB1cGdyYWRlS2V5Ym9hcmRQcmljZSxcclxuICAgIGJ1dHRvbkNvbG9yLFxyXG4gICAgYnV0dG9uSG92ZXJDb2xvcixcclxuICAgICgpID0+IHtcclxuICAgICAgICBnLmJhbmFuYXMgLT0gdXBncmFkZUtleWJvYXJkUHJpY2U7XHJcbiAgICAgICAgZy5tYXhLZXlib2FyZEtleXMgKz0gMTtcclxuICAgICAgICB1cGRhdGVDaGFyYWN0ZXJzVG9DaG9vc2VGcm9tKCk7XHJcbiAgICAgICAgdXBncmFkZUtleWJvYXJkUHJpY2UgPSBNYXRoLnBvdygxMCwgZy5tYXhLZXlib2FyZEtleXMgKyAxKTtcclxuICAgICAgICBidXR0b24zLnRleHQgPSBcIlVwZ3JhZGUgS2V5Ym9hcmQgXCIgKyB1cGdyYWRlS2V5Ym9hcmRQcmljZTtcclxuICAgIH0sXHJcbiAgICAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHVwZ3JhZGVLZXlib2FyZFByaWNlID4gZy5iYW5hbmFzKSB7XHJcbiAgICAgICAgICAgIGJ1dHRvbjMuaXNEaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYnV0dG9uMy5pc0Rpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4pO1xyXG5cclxubGV0IHNhdmVCdXR0b246IEJ1dHRvbiA9IG5ldyBCdXR0b24oXHJcbiAgICAxMCxcclxuICAgIDYwMCxcclxuICAgIDEwMCxcclxuICAgIDMwLFxyXG4gICAgXCJTYXZlXCIsXHJcbiAgICBidXR0b25Db2xvcixcclxuICAgIGJ1dHRvbkhvdmVyQ29sb3IsXHJcbiAgICAoKSA9PiB7c2F2ZSgpfSxcclxuICAgICgpID0+IHt9LFxyXG4pO1xyXG5cclxubGV0IGVyYXNlQnV0dG9uOiBCdXR0b24gPSBuZXcgQnV0dG9uKFxyXG4gICAgMTAsXHJcbiAgICA2NDAsXHJcbiAgICAxMDAsXHJcbiAgICAzMCxcclxuICAgIFwiRXJhc2UgU2F2ZVwiLFxyXG4gICAgZXJhc2VCdXR0b25Db2xvcixcclxuICAgIGVyYXNlQnV0dG9uSG92ZXJDb2xvcixcclxuICAgICgpID0+IHtlcmFzZVNhdmUoKX0sXHJcbiAgICAoKSA9PiB7fSxcclxuKTtcclxuXHJcbmxldCB3b3JkQnV0dG9uczogQnV0dG9uW10gPSBbXTtcclxubGV0IG5ld1dvcmRQcmljZTogbnVtYmVyID0gMTtcclxubGV0IG5ld1dvcmRCdXR0b246IEJ1dHRvbiA9IG5ldyBCdXR0b24oXHJcbiAgICAzNTAsXHJcbiAgICA0ODAsXHJcbiAgICA4MCxcclxuICAgIDMwLFxyXG4gICAgXCJCdXkgTmV3IFdvcmQgXCIgKyBuZXdXb3JkUHJpY2UsXHJcbiAgICBidXR0b25Db2xvcixcclxuICAgIGJ1dHRvbkhvdmVyQ29sb3IsXHJcbiAgICAoKSA9PiB7XHJcbiAgICAgICAgZy5iYW5hbmFzIC09IG5ld1dvcmRQcmljZTtcclxuICAgICAgICBuZXdXb3JkUHJpY2UgPSAocGxheWVyRGljdGlvbmFyeS5sZW5ndGggKyAxKSAqIChwbGF5ZXJEaWN0aW9uYXJ5Lmxlbmd0aCArIDEpO1xyXG4gICAgICAgIG5ld1dvcmRCdXR0b24udGV4dCA9IFwiQnV5IE5ldyBXb3JkIFwiICsgbmV3V29yZFByaWNlO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCB3b3JkSW5kZXg6IG51bWJlciA9IGdldFJhbmRvbUludCgwLCB3b3Jkc1swXS5sZW5ndGgpO1xyXG4gICAgICAgICAgICBsZXQgd29yZDogc3RyaW5nID0gd29yZHNbMF1bd29yZEluZGV4XTtcclxuICAgICAgICAgICAgbGV0IHdvcmRCdXR0b246IEJ1dHRvbiA9IG5ldyBCdXR0b24oXHJcbiAgICAgICAgICAgICAgICA0MDAgKyA4NSAqIGksXHJcbiAgICAgICAgICAgICAgICA0NDUsXHJcbiAgICAgICAgICAgICAgICA4MCxcclxuICAgICAgICAgICAgICAgIDMwLFxyXG4gICAgICAgICAgICAgICAgd29yZCxcclxuICAgICAgICAgICAgICAgIGJ1dHRvbkNvbG9yLFxyXG4gICAgICAgICAgICAgICAgYnV0dG9uSG92ZXJDb2xvcixcclxuICAgICAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHdvcmRCdXR0b25zLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdvcmRCdXR0b25zW2pdLmRlbGV0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB3b3JkQnV0dG9ucyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIHBsYXllckRpY3Rpb25hcnkucHVzaCh3b3JkLnNwbGl0KFwiXCIpKTtcclxuICAgICAgICAgICAgICAgICAgICB3b3Jkc1swXS5zcGxpY2Uod29yZEluZGV4LCAxKTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAoKSA9PiB7fSxcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgd29yZEJ1dHRvbnMucHVzaCh3b3JkQnV0dG9uKTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgKCkgPT4ge1xyXG4gICAgICAgIGlmIChuZXdXb3JkUHJpY2UgPiBnLmJhbmFuYXNcclxuICAgICAgICAgICAgfHwgd29yZEJ1dHRvbnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBuZXdXb3JkQnV0dG9uLmlzRGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG5ld1dvcmRCdXR0b24uaXNEaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuKTtcclxuXHJcbi8vIENvbW1lbnQgb3V0IHRoZSB1cGdyYWRlIGJ1dHRvbnMgZm9yIG5vd1xyXG4vLyBsZXQgdXBncmFkZUJ1dHRvbnM6IEJ1dHRvbltdID0gW107XHJcbi8vIGNyZWF0ZVVwZ3JhZGVCdXR0b25zKCk7XHJcblxyXG5sZXQgdGV4dERpc3BsYXkgPSBuZXcgVGV4dERpc3BsYXkoKTtcclxuXHJcbi8vIGxldCBpbmNvbWVBY2N1bXVsYXRvcjogbnVtYmVyID0gMDtcclxubGV0IGxhc3RJbmNvbWVVcGRhdGVUaW1lTWlsbGlzOiBudW1iZXIgPSBwZXJmb3JtYW5jZS5ub3coKTtcclxubGV0IG1pbGxpc1BlckluY29tZVVwZGF0ZTogbnVtYmVyID0gMjAwMDtcclxubGV0IGxhc3RCYW5hbmFzUGVyU2Vjb25kOiBudW1iZXIgPSAwO1xyXG5cclxuLy8gc3RvcmUgdGhlIG1vdXNlIHh5IGluIGNhc2UgaXQgZ2V0cyBleGVjdXRlZCBmYXN0ZXIgdGhhblxyXG4vLyBvbmNlIGV2ZXJ5IGZyYW1lLCB3aGljaCB3b3VsZCBiZSB1c2VsZXNzIHNpbmNlIGhvdmVyIGlzXHJcbi8vIGhhbmRsZWQgb25seSBvbmNlIGV2ZXJ5IGZyYW1lXHJcbmNhbnZhcy5vbm1vdXNlbW92ZSA9IChldjogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgbGV0IGJvdW5kczogRE9NUmVjdCA9IGNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIGcubW91c2VYID0gZXYueCAtIGJvdW5kcy5sZWZ0O1xyXG4gICAgZy5tb3VzZVkgPSBldi55IC0gYm91bmRzLnRvcDtcclxufTtcclxuXHJcbi8vIGFzc3VtZSBmb3Igc2ltcGxpY2l0eSB0aGF0IHlvdSBjYW4ndCBoYXZlIHR3byBtb3VzZWRvd25cclxuLy8gZXZlbnRzIHdpdGhvdXQgYSBtb3VzZXVwXHJcbmNhbnZhcy5vbm1vdXNlZG93biA9IChldjogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgbGV0IGJvdW5kczogRE9NUmVjdCA9IGNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIGxldCBtb3VzZVggPSBldi54IC0gYm91bmRzLmxlZnQ7XHJcbiAgICBsZXQgbW91c2VZID0gZXYueSAtIGJvdW5kcy50b3A7XHJcbiAgICBsZXQgY29sbGlkZWFibGU6IENvbGxpZGVhYmxlID0gZ2V0Q29sbGlkaW5nRW50aXR5KG1vdXNlWCwgbW91c2VZKTtcclxuICAgIGlmIChjb2xsaWRlYWJsZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgY29sbGlkZWFibGUuaXNNb3VzZURvd25lZCA9IHRydWU7XHJcbiAgICAgICAgY3VycmVudE1vdXNlRG93bmVkID0gY29sbGlkZWFibGU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGN1cnJlbnRNb3VzZURvd25lZCA9IHVuZGVmaW5lZDtcclxuICAgIH1cclxufVxyXG5cclxuY2FudmFzLm9ubW91c2V1cCA9IChldjogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgbGV0IGJvdW5kczogRE9NUmVjdCA9IGNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIGxldCBtb3VzZVggPSBldi54IC0gYm91bmRzLmxlZnQ7XHJcbiAgICBsZXQgbW91c2VZID0gZXYueSAtIGJvdW5kcy50b3A7XHJcbiAgICBsZXQgY29sbGlkZWFibGU6IENvbGxpZGVhYmxlID0gZ2V0Q29sbGlkaW5nRW50aXR5KG1vdXNlWCwgbW91c2VZKTtcclxuICAgIGlmIChjb2xsaWRlYWJsZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgaWYgKGNvbGxpZGVhYmxlLmlzTW91c2VEb3duZWRcclxuICAgICAgICAgICAgJiYgIWNvbGxpZGVhYmxlLmlzRGlzYWJsZWQpIHtcclxuICAgICAgICAgICAgY29sbGlkZWFibGUub25DbGljayhldi50aW1lU3RhbXApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChjdXJyZW50TW91c2VEb3duZWQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGN1cnJlbnRNb3VzZURvd25lZC5pc01vdXNlRG93bmVkID0gZmFsc2U7XHJcbiAgICB9XHJcbn1cclxuXHJcbmxldCBwcmV2aW91c1RpbWVNaWxsaXM6IG51bWJlcjtcclxubGV0IHByZXZpb3VzSG92ZXJlZDogQ29sbGlkZWFibGU7XHJcbmxldCBjdXJyZW50TW91c2VEb3duZWQ6IENvbGxpZGVhYmxlO1xyXG4vLyBsZXQgbGFzdFdvcmRGaW5pc2hUaW1lTWlsbGlzOiBudW1iZXI7XHJcblxyXG53aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGRyYXcpO1xyXG5cclxuZnVuY3Rpb24gZHJhdyhjdXJyZW50VGltZU1pbGxpczogbnVtYmVyKSB7XHJcbiAgICBsZXQgZWxhcHNlZFRpbWVNaWxsaXM6IG51bWJlciA9IDA7XHJcbiAgICBpZiAocHJldmlvdXNUaW1lTWlsbGlzICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBlbGFwc2VkVGltZU1pbGxpcyA9IGN1cnJlbnRUaW1lTWlsbGlzIC0gcHJldmlvdXNUaW1lTWlsbGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcclxuICAgIGN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XHJcbiAgICBjdHguZmlsbFJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcclxuXHJcbiAgICBpZiAocHJldmlvdXNIb3ZlcmVkICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBwcmV2aW91c0hvdmVyZWQuaXNIb3ZlcmVkID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbGxpZGVhYmxlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGxldCBpc0NvbGxpZGluZyA9IGNvbGxpZGVhYmxlc1tpXS5jb2xsaWRlKGcubW91c2VYLCBnLm1vdXNlWSk7XHJcbiAgICAgICAgaWYgKGlzQ29sbGlkaW5nKSB7XHJcbiAgICAgICAgICAgIGxldCBjdXJyZW50SG92ZXJlZCA9IGNvbGxpZGVhYmxlc1tpXTtcclxuICAgICAgICAgICAgY3VycmVudEhvdmVyZWQuaXNIb3ZlcmVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgcHJldmlvdXNIb3ZlcmVkID0gY3VycmVudEhvdmVyZWQ7XHJcbiAgICAgICAgICAgIGJyZWFrOyAvLyBvbmx5IG9uZSB0aGluZyBjYW4gYmUgaG92ZXJlZCBvdmVyIGF0IGEgdGltZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBDYWxsIHVwZGF0ZSBvbiBldmVyeXRoaW5nIGp1c3QgYmVmb3JlIGRyYXdcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZHJhd2FibGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgdXBkYXRlYWJsZXNbaV0udXBkYXRlKGN1cnJlbnRUaW1lTWlsbGlzLCBlbGFwc2VkVGltZU1pbGxpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVXBkYXRlIHRoZSBpbmNvbWUgcGVyIHNlY29uZCBpZiBpdCdzIHRpbWUgdG9cclxuICAgIGxldCBlbGFwc2VkU2luY2VMYXN0SW5jb21lVXBkYXRlID0gY3VycmVudFRpbWVNaWxsaXMgLSBsYXN0SW5jb21lVXBkYXRlVGltZU1pbGxpcztcclxuICAgIGlmIChlbGFwc2VkU2luY2VMYXN0SW5jb21lVXBkYXRlID49IG1pbGxpc1BlckluY29tZVVwZGF0ZSkge1xyXG4gICAgICAgIGxhc3RCYW5hbmFzUGVyU2Vjb25kID0gZy5pbmNvbWVBY2N1bXVsYXRvciAvIChlbGFwc2VkU2luY2VMYXN0SW5jb21lVXBkYXRlIC8gMTAwMCk7XHJcbiAgICAgICAgZy5pbmNvbWVBY2N1bXVsYXRvciA9IDA7XHJcbiAgICAgICAgbGFzdEluY29tZVVwZGF0ZVRpbWVNaWxsaXMgPSBjdXJyZW50VGltZU1pbGxpcztcclxuICAgIH1cclxuXHJcbiAgICAvLyBEcmF3IHZhbHVlcyBhdCB0aGUgZW5kIG9mIHRoZSBmcmFtZSBzbyB0aGV5J3JlIGFzIHVwXHJcbiAgICAvLyB0byBkYXRlIGFzIHRoZXkgY2FuIGJlXHJcbiAgICBjdHguc2F2ZSgpO1xyXG4gICAgY3R4LmZpbGxTdHlsZSA9IFwiYmxhY2tcIjtcclxuICAgIGN0eC5mb250ID0gXCIyMHB4IEFyaWFsXCI7XHJcblxyXG4gICAgY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XHJcbiAgICBjdHguZmlsbFRleHQoYmFuYW5hc1BlclNlY29uZChsYXN0QmFuYW5hc1BlclNlY29uZCksIDE0MCwgMzApO1xyXG4gICAgY3R4LmZpbGxUZXh0KGJhbmFuYXMoZy5iYW5hbmFzKSwgMTQwLCA1NSk7XHJcbiAgICBjdHguZmlsbFRleHQobW9ua2V5cyhnLm1vbmtleXMpLCAxNDAsIDgwKTtcclxuXHJcbiAgICAvLyBjdHgudGV4dEFsaWduID0gXCJsZWZ0XCI7XHJcbiAgICAvLyBjdHguZmlsbFRleHQoXCJUYXJnZXQgU3RyaW5nOiBcIlxyXG4gICAgLy8gICAgICsgZy5jdXJyZW50VGFyZ2V0LmRpc3BsYXlTdHJpbmcsIDI4MCwgMzApO1xyXG4gICAgLy8gZm9yIChsZXQgaSA9IDA7IGkgPCBnLmN1cnJlbnRUYXJnZXQucmV3YXJkcy5sZW5ndGg7IGkrKykge1xyXG4gICAgLy8gICAgIGxldCByZXdhcmQgPSAoZy5jdXJyZW50VGFyZ2V0LnJld2FyZHNbaV1cclxuICAgIC8vICAgICAgICAgKyBnLmFkZGl0aXZlRmxhdEJvbnVzKSAqICgxICsgZy5hZGRpdGl2ZVBlcmNlbnRCb251cyk7XHJcbiAgICAvLyAgICAgbGV0IGxpbmUgPSAoaSArIDEpICsgXCI6IFwiICsgYmFuYW5hcyhyZXdhcmQpO1xyXG4gICAgLy8gICAgIGN0eC5maWxsVGV4dChsaW5lLCAyODAsIDU1ICsgMjAgKiBpKTtcclxuICAgIC8vIH1cclxuXHJcbiAgICBjdHgudGV4dEFsaWduID0gXCJyaWdodFwiO1xyXG4gICAgY3R4LmZpbGxUZXh0KFwiS2V5Ym9hcmQgS2V5czpcIiwgMTYwLCA0NTApO1xyXG5cclxuICAgIGN0eC5yZXN0b3JlKCk7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkcmF3YWJsZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBkcmF3YWJsZXNbaV0uZHJhdyhjdXJyZW50VGltZU1pbGxpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJldmlvdXNUaW1lTWlsbGlzID0gY3VycmVudFRpbWVNaWxsaXM7XHJcbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGRyYXcpO1xyXG59XHJcblxyXG4vLyBNYWtlIGEgYnV0dG9uIG91dCBvZiB0aGUgYSBrZXlib2FyZCBrZXkgc28geW91XHJcbi8vIGNhbiBjbGljayB0byByZW1vdmUgaXQgZnJvbSB5b3VyIGtleWJvYXJkLlxyXG4vLyBpIGlzIHRoZSBpbmRleCBpbiB0aGUga2V5Ym9hcmRLZXlzIGFycmF5XHJcbi8vIE9uIGNsaWNrIGl0IGRlbGV0ZXMgYW5kIHJlbWFrZXMgYWxsIHRoZSBidXR0b25zXHJcbmZ1bmN0aW9uIGNyZWF0ZUN1cnJlbnRLZXlib2FyZEtleUJ1dHRvbihpOiBudW1iZXIsIGtleTogc3RyaW5nKSB7XHJcbiAgICBsZXQgYnV0dG9uID0gbmV3IEJ1dHRvbihcclxuICAgICAgICAxODAgKyAzMCAqIGksXHJcbiAgICAgICAgNDMwLFxyXG4gICAgICAgIDI1LFxyXG4gICAgICAgIDI1LFxyXG4gICAgICAgIGtleSxcclxuICAgICAgICBidXR0b25Db2xvcixcclxuICAgICAgICBidXR0b25Ib3ZlckNvbG9yLFxyXG4gICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgZy5rZXlib2FyZEtleXMuc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICB1cGRhdGVDaGFyYWN0ZXJzVG9DaG9vc2VGcm9tKCk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwga2V5Ym9hcmRLZXlCdXR0b25zLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBrZXlib2FyZEtleUJ1dHRvbnNbal0uZGVsZXRlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBnLmtleWJvYXJkS2V5cy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGtleSA9IGcua2V5Ym9hcmRLZXlzW2pdO1xyXG4gICAgICAgICAgICAgICAgY3JlYXRlQ3VycmVudEtleWJvYXJkS2V5QnV0dG9uKGosIGtleSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gbm90IHN1cmUgaWYgSSB3aWxsIHdhbnQgdG8gY2xlYXIgYWxsIHRoZSBjdXJyZW50XHJcbiAgICAgICAgICAgIC8vIHN0cmluZ3Mgd2hlbiB0aGUgcGxheWVyIGNoYW5nZXMgdGhlIGtleWJvYXJkXHJcbiAgICAgICAgICAgIC8vIGN1cnJlbnRTdHJpbmcgPSBbXTtcclxuICAgICAgICB9LFxyXG4gICAgICAgICgpID0+IHt9LFxyXG4gICAgKTtcclxuICAgIGtleWJvYXJkS2V5QnV0dG9ucy5wdXNoKGJ1dHRvbik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZUNoYXJhY3RlcnNUb0Nob29zZUZyb20oKSB7XHJcbiAgICBnLmNoYXJhY3RlcnNUb0Nob29zZUZyb20gPSBbXTtcclxuICAgIGlmIChnLmtleWJvYXJkS2V5cy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJhbmRvbU51bWJlclNpemU7IGkrKykge1xyXG4gICAgICAgIGcuY2hhcmFjdGVyc1RvQ2hvb3NlRnJvbS5wdXNoKFxyXG4gICAgICAgICAgICBnLmtleWJvYXJkS2V5c1tpICUgZy5rZXlib2FyZEtleXMubGVuZ3RoXVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vIGZ1bmN0aW9uIGNyZWF0ZVVwZ3JhZGVCdXR0b25zKCkge1xyXG4vLyAgICAgbGV0IHNvcnRlZFVwZ3JhZGVzOiBVcGdyYWRlW10gPSBzb3J0ZWQodXBncmFkZXMsIChhOiBVcGdyYWRlLCBiOiBVcGdyYWRlKSA9PiB7XHJcbi8vICAgICAgICAgcmV0dXJuIGEucHJpY2UgLSBiLnByaWNlO1xyXG4vLyAgICAgfSk7XHJcbi8vICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNvcnRlZFVwZ3JhZGVzLmxlbmd0aDsgaSsrKSB7XHJcbi8vICAgICAgICAgbGV0IHVwZ3JhZGUgPSBzb3J0ZWRVcGdyYWRlc1tpXTtcclxuLy8gICAgICAgICBsZXQgYnV0dG9uOiBCdXR0b24gPSBuZXcgQnV0dG9uKFxyXG4vLyAgICAgICAgICAgICA1MDAsXHJcbi8vICAgICAgICAgICAgIDMwMCArIDM1ICogaSxcclxuLy8gICAgICAgICAgICAgODAsXHJcbi8vICAgICAgICAgICAgIDMwLFxyXG4vLyAgICAgICAgICAgICB1cGdyYWRlLnRleHQgKyBcIiBcIiArIHVwZ3JhZGUucHJpY2UsXHJcbi8vICAgICAgICAgICAgIGJ1dHRvbkNvbG9yLFxyXG4vLyAgICAgICAgICAgICBidXR0b25Ib3ZlckNvbG9yLFxyXG4vLyAgICAgICAgICAgICAoKSA9PiB7XHJcbi8vICAgICAgICAgICAgICAgICB1cGdyYWRlLmJ1eSgpO1xyXG4vLyAgICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB1cGdyYWRlQnV0dG9ucy5sZW5ndGg7IGorKykge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIHVwZ3JhZGVCdXR0b25zW2pdLmRlbGV0ZSgpO1xyXG4vLyAgICAgICAgICAgICAgICAgfVxyXG4vLyAgICAgICAgICAgICAgICAgY3JlYXRlVXBncmFkZUJ1dHRvbnMoKTtcclxuLy8gICAgICAgICAgICAgfSxcclxuLy8gICAgICAgICAgICAgKCkgPT4ge1xyXG4vLyAgICAgICAgICAgICAgICAgaWYgKHVwZ3JhZGUucHJpY2UgPiBnLmJhbmFuYXMpIHtcclxuLy8gICAgICAgICAgICAgICAgICAgICBidXR0b24uaXNEaXNhYmxlZCA9IHRydWU7XHJcbi8vICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4vLyAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbi5pc0Rpc2FibGVkID0gZmFsc2U7XHJcbi8vICAgICAgICAgICAgICAgICB9XHJcbi8vICAgICAgICAgICAgIH0sXHJcbi8vICAgICAgICAgKTtcclxuLy8gICAgICAgICB1cGdyYWRlQnV0dG9ucy5wdXNoKGJ1dHRvbik7XHJcbi8vICAgICB9XHJcbi8vIH1cclxuXHJcbmZ1bmN0aW9uIGdldENvbGxpZGluZ0VudGl0eShwb2ludFg6IG51bWJlciwgcG9pbnRZOiBudW1iZXIpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29sbGlkZWFibGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgbGV0IGlzQ29sbGlkaW5nID0gY29sbGlkZWFibGVzW2ldLmNvbGxpZGUoZy5tb3VzZVgsIGcubW91c2VZKTtcclxuICAgICAgICBpZiAoaXNDb2xsaWRpbmcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNvbGxpZGVhYmxlc1tpXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG59XHJcblxyXG5mdW5jdGlvbiBiYW5hbmFzKG51bWJlcjogbnVtYmVyKSB7XHJcbiAgICBudW1iZXIgPSBNYXRoLnJvdW5kKG51bWJlcik7XHJcbiAgICBpZiAobnVtYmVyID09PSAxKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bWJlciArIFwiIGJhbmFuYVwiO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gbnVtYmVyICsgXCIgYmFuYW5hc1wiO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBtb25rZXlzKG51bWJlcjogbnVtYmVyKSB7IFxyXG4gICAgaWYgKG51bWJlciA9PT0gMSkge1xyXG4gICAgICAgIHJldHVybiBudW1iZXIgKyBcIiBtb25rZXlcIjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIG51bWJlciArIFwiIG1vbmtleXNcIjtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gYmFuYW5hc1BlclNlY29uZChudW1iZXI6IG51bWJlcikge1xyXG4gICAgbnVtYmVyID0gTWF0aC5yb3VuZChudW1iZXIpO1xyXG4gICAgaWYgKG51bWJlciA9PT0gMSkge1xyXG4gICAgICAgIHJldHVybiBudW1iZXIgKyBcIiBiYW5hbmEgcGVyIHNlY29uZFwiO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gbnVtYmVyICsgXCIgYmFuYW5hcyBwZXIgc2Vjb25kXCI7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNvcnRlZChhcnJheTogYW55W10sIGNvbXBhcmVGbj86IChhOiBhbnksIGI6IGFueSkgPT4gbnVtYmVyKSB7XHJcbiAgICByZXR1cm4gYXJyYXkuc2xpY2UoKS5zb3J0KGNvbXBhcmVGbik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJvdW5kVG9OUGxhY2VzKHg6IG51bWJlciwgbnVtUGxhY2VzOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgbGV0IHNjYWxlOiBudW1iZXIgPSBNYXRoLnBvdygxMCwgbnVtUGxhY2VzKTtcclxuICAgIHJldHVybiBNYXRoLnJvdW5kKHggKiBzY2FsZSkgLyBzY2FsZTtcclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=