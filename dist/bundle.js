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
        this.id = _global__WEBPACK_IMPORTED_MODULE_0__.g.idCounter;
        _global__WEBPACK_IMPORTED_MODULE_0__.g.idCounter += 1;
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
        _global__WEBPACK_IMPORTED_MODULE_0__.drawables.push(this);
        _global__WEBPACK_IMPORTED_MODULE_0__.collideables.push(this);
        _global__WEBPACK_IMPORTED_MODULE_0__.updateables.push(this);
    }
    Button.prototype.draw = function (currentTimeMillis) {
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
    lettersToTypeRemainder: 0,
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
var saveFileVersion = 2;
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

/***/ "./src/upgrade.ts":
/*!************************!*\
  !*** ./src/upgrade.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Upgrade": () => (/* binding */ Upgrade)
/* harmony export */ });
// TODO: make sure that when the game first starts up I can just set the
// level on the upgrade and it will automatically calculate
// the right settings. This way, all I have to put in the save file
// is the level of each upgrade.
// Note: do I plan to have upgrades other than additive or multiplicative
// increases in the bananas per second? If so, I have to make this
// very generic.
var Upgrade = /** @class */ (function () {
    function Upgrade(maxLevel, price, text, buy) {
        this.maxLevel = maxLevel;
        this.price = price;
        this.text = text;
        this.level = 0;
        this.buy = buy;
    }
    return Upgrade;
}());



/***/ }),

/***/ "./src/upgrades.ts":
/*!*************************!*\
  !*** ./src/upgrades.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "upgrades": () => (/* binding */ upgrades)
/* harmony export */ });
/* harmony import */ var _global__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./global */ "./src/global.ts");
/* harmony import */ var _upgrade__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./upgrade */ "./src/upgrade.ts");


var upgrade1 = new _upgrade__WEBPACK_IMPORTED_MODULE_1__.Upgrade(10, 1, "Upgrade Type 1", function () {
    upgrade1.level += 1;
    upgrade1.price = Math.pow(2, upgrade1.level - 1);
    _global__WEBPACK_IMPORTED_MODULE_0__.g.additiveFlatBonus = upgrade1.level;
});
var upgrade2 = new _upgrade__WEBPACK_IMPORTED_MODULE_1__.Upgrade(10, 10, "Upgrade Type 2", function () {
    upgrade2.level += 1;
    upgrade2.price = 10 * upgrade2.level;
    _global__WEBPACK_IMPORTED_MODULE_0__.g.additivePercentBonus = 0.5 * upgrade2.level;
});
var upgrade3 = new _upgrade__WEBPACK_IMPORTED_MODULE_1__.Upgrade(10, 100, "Upgrade Type 3", function () {
    upgrade3.level += 1;
    upgrade3.price = 5 * upgrade3.level + 5;
    _global__WEBPACK_IMPORTED_MODULE_0__.g.additivePercentBonus = 0.05 * upgrade3.level;
});
// new Upgrade(
//     1,
//     1,
//     "",
//     () => {},
// ),
var upgrades = [
    upgrade1,
    upgrade2,
    upgrade3,
];


/***/ }),

/***/ "./src/util.ts":
/*!*********************!*\
  !*** ./src/util.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "countMatchingLetters": () => (/* binding */ countMatchingLetters)
/* harmony export */ });
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
/* harmony import */ var _upgrades__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./upgrades */ "./src/upgrades.ts");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./util */ "./src/util.ts");
// TODO:
// Auto-save every 10 seconds
// Make the erase save button restart the game as well
// Prevent catchup lag after tab-out
// Auto-calculate average bananas per word
// get rid of code repeats of if (button.isDisabled) {return;}
// The UI is a complete mess!
// The save should be encrypted
// The erase save button should have a confirmation step
// The erase save button should also reset the game (probably will rename the button)
// There should be an import/export option to let the player back up their save
// There are balance issues
// There should be upgrades
// adjustable update rate for bananas per second
// compressed notation for large numbers






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
        if (button.isDisabled) {
            return;
        }
        createCurrentKeyboardKeyButton(_global__WEBPACK_IMPORTED_MODULE_1__.g.keyboardKeys.length, key);
        _global__WEBPACK_IMPORTED_MODULE_1__.g.keyboardKeys.push(key);
        updateCharactersToChooseFrom();
        currentString = [];
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
var charactersToChooseFrom;
var randomNumberSize = 65536;
updateCharactersToChooseFrom();
var keyboardKeyButtons = [];
for (var i = 0; i < _global__WEBPACK_IMPORTED_MODULE_1__.g.keyboardKeys.length; i++) {
    createCurrentKeyboardKeyButton(i, _global__WEBPACK_IMPORTED_MODULE_1__.g.keyboardKeys[i]);
}
// Make a button out of the a keyboard key so you
// can click to remove it from your keyboard.
// i is the index in the keyboardKeys array
// On click it deletes and remakes all the buttons
function createCurrentKeyboardKeyButton(i, key) {
    var button = new _button__WEBPACK_IMPORTED_MODULE_0__.Button(180 + 30 * i, 280, 25, 25, key, buttonColor, buttonHoverColor, function () {
        if (button.isDisabled) {
            return;
        }
        _global__WEBPACK_IMPORTED_MODULE_1__.g.keyboardKeys.splice(i, 1);
        updateCharactersToChooseFrom();
        for (var j = 0; j < keyboardKeyButtons.length; j++) {
            keyboardKeyButtons[j].delete();
        }
        for (var j = 0; j < _global__WEBPACK_IMPORTED_MODULE_1__.g.keyboardKeys.length; j++) {
            var key_1 = _global__WEBPACK_IMPORTED_MODULE_1__.g.keyboardKeys[j];
            createCurrentKeyboardKeyButton(j, key_1);
        }
        currentString = [];
    }, function () { });
    keyboardKeyButtons.push(button);
}
function updateCharactersToChooseFrom() {
    charactersToChooseFrom = [];
    if (_global__WEBPACK_IMPORTED_MODULE_1__.g.keyboardKeys.length === 0) {
        return;
    }
    for (var i = 0; i < randomNumberSize; i++) {
        charactersToChooseFrom.push(_global__WEBPACK_IMPORTED_MODULE_1__.g.keyboardKeys[i % _global__WEBPACK_IMPORTED_MODULE_1__.g.keyboardKeys.length]);
    }
}
var currentString = [];
var targetButtons = [];
var _loop_2 = function (i) {
    var buttonText = _targets__WEBPACK_IMPORTED_MODULE_3__.targets[i].displayString;
    if (!_global__WEBPACK_IMPORTED_MODULE_1__.g.targetOwned[i]) {
        buttonText += " " + _targets__WEBPACK_IMPORTED_MODULE_3__.targets[i].price;
    }
    var button = new _button__WEBPACK_IMPORTED_MODULE_0__.Button(500, 50 + 35 * i, 80, 30, buttonText, buttonColor, buttonHoverColor, function () {
        if (button.isDisabled) {
            return;
        }
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
    if (button1.isDisabled) {
        return;
    }
    _global__WEBPACK_IMPORTED_MODULE_1__.g.monkeys += 1;
    _global__WEBPACK_IMPORTED_MODULE_1__.g.lettersPerSecond += 1;
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
    _global__WEBPACK_IMPORTED_MODULE_1__.g.lettersToTypeRemainder += 1;
    lastClickedTimeMillis = currentTimeMillis;
}, function () { });
var upgradeKeyboardPrice = Math.pow(10, _global__WEBPACK_IMPORTED_MODULE_1__.g.maxKeyboardKeys + 1);
var button3 = new _button__WEBPACK_IMPORTED_MODULE_0__.Button(250, 400, 80, 30, "Upgrade Keyboard " + upgradeKeyboardPrice, buttonColor, buttonHoverColor, function () {
    if (button3.isDisabled) {
        return;
    }
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
var upgrade1 = new _button__WEBPACK_IMPORTED_MODULE_0__.Button(500, 300, 80, 30, "Upgrade 1", buttonColor, buttonHoverColor, function () {
    if (upgrade1.isDisabled) {
        return;
    }
    _upgrades__WEBPACK_IMPORTED_MODULE_4__.upgrades[0].buy();
}, function () {
    if (_upgrades__WEBPACK_IMPORTED_MODULE_4__.upgrades[0].price > _global__WEBPACK_IMPORTED_MODULE_1__.g.bananas) {
        upgrade1.isDisabled = true;
    }
    else {
        upgrade1.isDisabled = false;
    }
});
var upgrade2 = new _button__WEBPACK_IMPORTED_MODULE_0__.Button(500, 335, 80, 30, "Upgrade 2", buttonColor, buttonHoverColor, function () {
    if (upgrade2.isDisabled) {
        return;
    }
    _upgrades__WEBPACK_IMPORTED_MODULE_4__.upgrades[1].buy();
}, function () {
    if (_upgrades__WEBPACK_IMPORTED_MODULE_4__.upgrades[1].price > _global__WEBPACK_IMPORTED_MODULE_1__.g.bananas) {
        upgrade2.isDisabled = true;
    }
    else {
        upgrade2.isDisabled = false;
    }
});
var upgrade3 = new _button__WEBPACK_IMPORTED_MODULE_0__.Button(500, 370, 80, 30, "Upgreade 3", buttonColor, buttonHoverColor, function () {
    if (upgrade3.isDisabled) {
        return;
    }
    _upgrades__WEBPACK_IMPORTED_MODULE_4__.upgrades[2].buy();
}, function () {
    if (_upgrades__WEBPACK_IMPORTED_MODULE_4__.upgrades[2].price > _global__WEBPACK_IMPORTED_MODULE_1__.g.bananas) {
        upgrade3.isDisabled = true;
    }
    else {
        upgrade3.isDisabled = false;
    }
});
var incomeAccumulator = 0;
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
        if (collideable.isMouseDowned) {
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
var lastWordFinishTimeMillis;
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
    _global__WEBPACK_IMPORTED_MODULE_1__.g.lettersToTypeRemainder += elapsedTimeMillis / 1000 * _global__WEBPACK_IMPORTED_MODULE_1__.g.lettersPerSecond;
    // Make a finished word stay on screen for 500ms, or until
    // another letter is typed
    if ((lastWordFinishTimeMillis !== undefined
        && (currentTimeMillis - lastWordFinishTimeMillis) > 500) || (_global__WEBPACK_IMPORTED_MODULE_1__.g.lettersToTypeRemainder >= 1
        && currentString.length >= _global__WEBPACK_IMPORTED_MODULE_1__.g.currentTarget.letters.length)) {
        currentString = [];
        lastWordFinishTimeMillis = undefined;
    }
    // Generate the needed characters and award bananas
    while (_global__WEBPACK_IMPORTED_MODULE_1__.g.lettersToTypeRemainder >= 1) {
        _global__WEBPACK_IMPORTED_MODULE_1__.g.lettersToTypeRemainder -= 1;
        if (charactersToChooseFrom.length === 0) {
            continue;
        }
        var character = getRandomCharacter();
        currentString.push(character);
        if (currentString.length >= _global__WEBPACK_IMPORTED_MODULE_1__.g.currentTarget.letters.length) {
            lastWordFinishTimeMillis = currentTimeMillis;
            var matchingLetters = (0,_util__WEBPACK_IMPORTED_MODULE_5__.countMatchingLetters)(currentString, _global__WEBPACK_IMPORTED_MODULE_1__.g.currentTarget.letters);
            if (matchingLetters > 0) {
                var bananasToAdd = (_global__WEBPACK_IMPORTED_MODULE_1__.g.currentTarget.rewards[matchingLetters - 1]
                    + _global__WEBPACK_IMPORTED_MODULE_1__.g.additiveFlatBonus) * (1 + _global__WEBPACK_IMPORTED_MODULE_1__.g.additivePercentBonus);
                _global__WEBPACK_IMPORTED_MODULE_1__.g.bananas += bananasToAdd;
                incomeAccumulator += bananasToAdd;
            }
            if (_global__WEBPACK_IMPORTED_MODULE_1__.g.lettersToTypeRemainder >= 1) {
                currentString = [];
            }
        }
    }
    // Draw the current string on screen
    _global__WEBPACK_IMPORTED_MODULE_1__.ctx.save();
    _global__WEBPACK_IMPORTED_MODULE_1__.ctx.fillStyle = "black";
    _global__WEBPACK_IMPORTED_MODULE_1__.ctx.font = "20px Arial";
    for (var i = 0; i < _global__WEBPACK_IMPORTED_MODULE_1__.g.currentTarget.letters.length; i++) {
        var character = void 0;
        if (i >= currentString.length) {
            character = "_";
        }
        else {
            character = currentString[i];
        }
        _global__WEBPACK_IMPORTED_MODULE_1__.ctx.fillText(character, 100 + 20 * i, 200);
    }
    _global__WEBPACK_IMPORTED_MODULE_1__.ctx.restore();
    // Call update on everything just before draw
    for (var i = 0; i < _global__WEBPACK_IMPORTED_MODULE_1__.drawables.length; i++) {
        _global__WEBPACK_IMPORTED_MODULE_1__.updateables[i].update();
    }
    // Update the income per second if it's time to
    var elapsedSinceLastIncomeUpdate = currentTimeMillis - lastIncomeUpdateTimeMillis;
    if (elapsedSinceLastIncomeUpdate >= millisPerIncomeUpdate) {
        lastBananasPerSecond = incomeAccumulator / (elapsedSinceLastIncomeUpdate / 1000);
        incomeAccumulator = 0;
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
function getCollidingEntity(pointX, pointY) {
    for (var i = 0; i < _global__WEBPACK_IMPORTED_MODULE_1__.collideables.length; i++) {
        var isColliding = _global__WEBPACK_IMPORTED_MODULE_1__.collideables[i].collide(_global__WEBPACK_IMPORTED_MODULE_1__.g.mouseX, _global__WEBPACK_IMPORTED_MODULE_1__.g.mouseY);
        if (isColliding) {
            return _global__WEBPACK_IMPORTED_MODULE_1__.collideables[i];
        }
    }
    return undefined;
}
function getRandomString(charactersToChooseFrom, n) {
    var randomNumbers = getRandomNumbers(n);
    var string = "";
    for (var i = 0; i < randomNumbers.length; i++) {
        string += charactersToChooseFrom[randomNumbers[i]];
    }
    return string;
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
    return charactersToChooseFrom[randomNumber];
}
function getRandomNumbers(n) {
    var randomNumbers = new Uint16Array(n);
    randomNumbers = crypto.getRandomValues(randomNumbers);
    return randomNumbers;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QU0sR0FBRyxVQUFVLENBQUM7S0FDOUI7QUFDTCxDQUFDO0FBRUQsU0FBUyxPQUFPLENBQUMsTUFBYztJQUMzQixJQUFJLE1BQU0sS0FBSyxDQUFDLEVBQUU7UUFDZCxPQUFPLE1BQU0sR0FBRyxTQUFTLENBQUM7S0FDN0I7U0FBTTtRQUNILE9BQU8sTUFBTSxHQUFHLFVBQVUsQ0FBQztLQUM5QjtBQUNMLENBQUM7QUFFRCxTQUFTLGdCQUFnQixDQUFDLE1BQWM7SUFDcEMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDNUIsSUFBSSxNQUFNLEtBQUssQ0FBQyxFQUFFO1FBQ2QsT0FBTyxNQUFNLEdBQUcsb0JBQW9CLENBQUM7S0FDeEM7U0FBTTtRQUNILE9BQU8sTUFBTSxHQUFHLHFCQUFxQixDQUFDO0tBQ3pDO0FBQ0wsQ0FBQztBQUVELFNBQVMsTUFBTSxDQUFDLEtBQVksRUFBRSxTQUFzQztJQUNoRSxPQUFPLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDekMsQ0FBQztBQUVELFNBQVMsY0FBYyxDQUFDLENBQVMsRUFBRSxTQUFpQjtJQUNoRCxJQUFJLEtBQUssR0FBVyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUM1QyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxHQUFHLEtBQUssQ0FBQztBQUN6QyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhwb3J0cy8uL3NyYy9idXR0b24udHMiLCJ3ZWJwYWNrOi8vZXhwb3J0cy8uL3NyYy9nbG9iYWwudHMiLCJ3ZWJwYWNrOi8vZXhwb3J0cy8uL3NyYy9sb2NhbF9zdG9yYWdlLnRzIiwid2VicGFjazovL2V4cG9ydHMvLi9zcmMvc2F2ZV9maWxlLnRzIiwid2VicGFjazovL2V4cG9ydHMvLi9zcmMvdGFyZ2V0LnRzIiwid2VicGFjazovL2V4cG9ydHMvLi9zcmMvdGFyZ2V0cy50cyIsIndlYnBhY2s6Ly9leHBvcnRzLy4vc3JjL3VwZ3JhZGUudHMiLCJ3ZWJwYWNrOi8vZXhwb3J0cy8uL3NyYy91cGdyYWRlcy50cyIsIndlYnBhY2s6Ly9leHBvcnRzLy4vc3JjL3V0aWwudHMiLCJ3ZWJwYWNrOi8vZXhwb3J0cy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9leHBvcnRzL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9leHBvcnRzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZXhwb3J0cy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2V4cG9ydHMvLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29sbGlkZWFibGVzLCBjdHgsIGRyYXdhYmxlcywgZywgdXBkYXRlYWJsZXMgfSBmcm9tIFwiLi9nbG9iYWxcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBCdXR0b24ge1xyXG4gICAgcHVibGljIGlkOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgdG9wTGVmdFg6IG51bWJlcjtcclxuICAgIHB1YmxpYyB0b3BMZWZ0WTogbnVtYmVyO1xyXG4gICAgcHVibGljIHdpZHRoOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgaGVpZ2h0OiBudW1iZXI7XHJcbiAgICBwdWJsaWMgYm90dG9tUmlnaHRYOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgYm90dG9tUmlnaHRZOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgdGV4dDogc3RyaW5nO1xyXG4gICAgcHVibGljIGNvbG9yOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgaG92ZXJlZENvbG9yOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgZGlzYWJsZWRDb2xvcjogc3RyaW5nID0gXCJncmF5XCI7XHJcbiAgICBwdWJsaWMgaXNIb3ZlcmVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwdWJsaWMgaXNEaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHVibGljIGlzTW91c2VEb3duZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHB1YmxpYyBvbkNsaWNrOiAoY3VycmVudFRpbWVNaWxsaXM/OiBudW1iZXIpID0+IHZvaWQ7XHJcbiAgICBwdWJsaWMgdXBkYXRlOiAoKSA9PiB2b2lkO1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihcclxuICAgICAgICB0b3BMZWZ0WDogbnVtYmVyLFxyXG4gICAgICAgIHRvcExlZnRZOiBudW1iZXIsXHJcbiAgICAgICAgd2lkdGg6IG51bWJlcixcclxuICAgICAgICBoZWlnaHQ6IG51bWJlcixcclxuICAgICAgICB0ZXh0OiBzdHJpbmcsXHJcbiAgICAgICAgY29sb3I6IHN0cmluZyxcclxuICAgICAgICBob3ZlcmVkQ29sb3I6IHN0cmluZyxcclxuICAgICAgICBvbkNsaWNrOiAoY3VycmVudFRpbWVNaWxsaXM/OiBudW1iZXIpID0+IHZvaWQsXHJcbiAgICAgICAgdXBkYXRlOiAoKSA9PiB2b2lkLFxyXG4gICAgKSB7XHJcbiAgICAgICAgdGhpcy5pZCA9IGcuaWRDb3VudGVyO1xyXG4gICAgICAgIGcuaWRDb3VudGVyICs9IDE7XHJcbiAgICAgICAgdGhpcy50b3BMZWZ0WCA9IHRvcExlZnRYO1xyXG4gICAgICAgIHRoaXMudG9wTGVmdFkgPSB0b3BMZWZ0WTtcclxuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGg7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5ib3R0b21SaWdodFggPSB0b3BMZWZ0WCArIHdpZHRoO1xyXG4gICAgICAgIHRoaXMuYm90dG9tUmlnaHRZID0gdG9wTGVmdFkgKyBoZWlnaHQ7XHJcbiAgICAgICAgdGhpcy50ZXh0ID0gdGV4dDtcclxuICAgICAgICB0aGlzLmNvbG9yID0gY29sb3I7XHJcbiAgICAgICAgdGhpcy5ob3ZlcmVkQ29sb3IgPSBob3ZlcmVkQ29sb3I7XHJcbiAgICAgICAgdGhpcy5vbkNsaWNrID0gb25DbGljaztcclxuICAgICAgICB0aGlzLnVwZGF0ZSA9IHVwZGF0ZTtcclxuXHJcbiAgICAgICAgZHJhd2FibGVzLnB1c2godGhpcyk7XHJcbiAgICAgICAgY29sbGlkZWFibGVzLnB1c2godGhpcyk7XHJcbiAgICAgICAgdXBkYXRlYWJsZXMucHVzaCh0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZHJhdyhjdXJyZW50VGltZU1pbGxpczogbnVtYmVyKSB7XHJcbiAgICAgICAgbGV0IHRvcExlZnRYID0gdGhpcy50b3BMZWZ0WDtcclxuICAgICAgICBsZXQgdG9wTGVmdFkgPSB0aGlzLnRvcExlZnRZO1xyXG4gICAgICAgIGxldCB3aWR0aCA9IHRoaXMud2lkdGg7XHJcbiAgICAgICAgbGV0IGhlaWdodCA9IHRoaXMuaGVpZ2h0O1xyXG4gICAgICAgIGxldCBmb250U2l6ZSA9IDE1O1xyXG4gICAgICAgIGxldCBjb2xvcjogc3RyaW5nO1xyXG4gICAgICAgIGlmICh0aGlzLmlzTW91c2VEb3duZWRcclxuICAgICAgICAgICAgJiYgIXRoaXMuaXNEaXNhYmxlZCkge1xyXG4gICAgICAgICAgICBsZXQgc2hyaW5rID0gMC4xO1xyXG4gICAgICAgICAgICBsZXQgc2hyaW5rWCA9IHdpZHRoICogc2hyaW5rO1xyXG4gICAgICAgICAgICBsZXQgc2hyaW5rWSA9IGhlaWdodCAqIHNocmluaztcclxuICAgICAgICAgICAgd2lkdGggLT0gc2hyaW5rWDtcclxuICAgICAgICAgICAgaGVpZ2h0IC09IHNocmlua1k7XHJcbiAgICAgICAgICAgIHRvcExlZnRYICs9IHNocmlua1ggLyAyO1xyXG4gICAgICAgICAgICB0b3BMZWZ0WSArPSBzaHJpbmtZIC8gMjtcclxuICAgICAgICAgICAgZm9udFNpemUgKj0gKDEgLSBzaHJpbmspO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5pc0Rpc2FibGVkKSB7XHJcbiAgICAgICAgICAgIGNvbG9yID0gdGhpcy5kaXNhYmxlZENvbG9yXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNIb3ZlcmVkKSB7XHJcbiAgICAgICAgICAgICAgICBjb2xvciA9IHRoaXMuY29sb3I7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb2xvciA9IHRoaXMuaG92ZXJlZENvbG9yO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjdHguc2F2ZSgpO1xyXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBjb2xvcjtcclxuICAgICAgICBjdHguZm9udCA9IGZvbnRTaXplICsgXCJweCBBcmlhbFwiO1xyXG4gICAgICAgIGN0eC5maWxsUmVjdCh0b3BMZWZ0WCwgdG9wTGVmdFksIHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgICAgIGN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xyXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcImJsYWNrXCI7XHJcbiAgICAgICAgY3R4LmZpbGxUZXh0KFxyXG4gICAgICAgICAgICB0aGlzLnRleHQsXHJcbiAgICAgICAgICAgIHRvcExlZnRYICsgd2lkdGggLyAyLFxyXG4gICAgICAgICAgICB0b3BMZWZ0WSArIGhlaWdodCAvIDIgKyBmb250U2l6ZSAvIDIuNFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgY3R4LnJlc3RvcmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY29sbGlkZShwb2ludFg6IG51bWJlciwgcG9pbnRZOiBudW1iZXIpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50b3BMZWZ0WCA8PSBwb2ludFhcclxuICAgICAgICAgICAgJiYgcG9pbnRYIDw9IHRoaXMuYm90dG9tUmlnaHRYXHJcbiAgICAgICAgICAgICYmIHRoaXMudG9wTGVmdFkgPD0gcG9pbnRZXHJcbiAgICAgICAgICAgICYmIHBvaW50WSA8PSB0aGlzLmJvdHRvbVJpZ2h0WTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGVsZXRlKCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZHJhd2FibGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChkcmF3YWJsZXNbaV0uaWQgPT09IHRoaXMuaWQpIHtcclxuICAgICAgICAgICAgICAgIGRyYXdhYmxlcy5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2xsaWRlYWJsZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGNvbGxpZGVhYmxlc1tpXS5pZCA9PT0gdGhpcy5pZCkge1xyXG4gICAgICAgICAgICAgICAgY29sbGlkZWFibGVzLnNwbGljZShpLCAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHVwZGF0ZWFibGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh1cGRhdGVhYmxlc1tpXS5pZCA9PT0gdGhpcy5pZCkge1xyXG4gICAgICAgICAgICAgICAgdXBkYXRlYWJsZXMuc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IHRhcmdldHMgfSBmcm9tIFwiLi90YXJnZXRzXCI7XHJcbmltcG9ydCB7IENvbGxpZGVhYmxlLCBEcmF3YWJsZSwgVXBkYXRlYWJsZSB9IGZyb20gXCIuL3R5cGVzXCI7XHJcblxyXG5leHBvcnQgbGV0IHdpZHRoOiBudW1iZXIgPSAxMDAwO1xyXG5leHBvcnQgbGV0IGhlaWdodDogbnVtYmVyID0gNzAwO1xyXG5leHBvcnQgbGV0IGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xyXG5leHBvcnQgbGV0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XHJcbmNhbnZhcy53aWR0aCA9IHdpZHRoO1xyXG5jYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG5jdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG5leHBvcnQgbGV0IGRyYXdhYmxlczogRHJhd2FibGVbXSA9IFtdO1xyXG5leHBvcnQgbGV0IGNvbGxpZGVhYmxlczogQ29sbGlkZWFibGVbXSA9IFtdO1xyXG5leHBvcnQgbGV0IHVwZGF0ZWFibGVzOiBVcGRhdGVhYmxlW10gPSBbXTtcclxuXHJcbi8vIFB1dCBhbnkgZ2xvYmFsIHZhcmlhYmxlcyB0aGF0IHlvdSB3YW50IHRvIGJlIGFibGUgdG8gcmVhc3NpZ24gaGVyZVxyXG5leHBvcnQgbGV0IGcgPSB7XHJcbiAgICBiYW5hbmFzOiAwLFxyXG4gICAgbW9ua2V5czogMCxcclxuICAgIGxldHRlcnNUb1R5cGVSZW1haW5kZXI6IDAsXHJcbiAgICBsZXR0ZXJzUGVyU2Vjb25kOiAwLFxyXG4gICAgbW91c2VYOiAtMSxcclxuICAgIG1vdXNlWTogLTEsXHJcbiAgICBpZENvdW50ZXI6IDAsXHJcbiAgICBjdXJyZW50VGFyZ2V0SW5kZXg6IDAsXHJcbiAgICBjdXJyZW50VGFyZ2V0OiB0YXJnZXRzWzBdLFxyXG4gICAga2V5Ym9hcmRLZXlzOiBbXCJBXCJdLFxyXG4gICAgbWF4S2V5Ym9hcmRLZXlzOiAxLFxyXG4gICAgdGFyZ2V0T3duZWQ6IFt0cnVlXSxcclxuICAgIGFkZGl0aXZlUGVyY2VudEJvbnVzOiAwLFxyXG4gICAgYWRkaXRpdmVGbGF0Qm9udXM6IDAsXHJcbn07XHJcblxyXG5mb3IobGV0IGkgPSAxOyBpIDwgdGFyZ2V0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgZy50YXJnZXRPd25lZC5wdXNoKGZhbHNlKTtcclxufVxyXG4iLCJpbXBvcnQgeyBnIH0gZnJvbSBcIi4vZ2xvYmFsXCI7XHJcbmltcG9ydCB7IFNhdmVGaWxlLCBzYXZlRmlsZVZlcnNpb24gfSBmcm9tIFwiLi9zYXZlX2ZpbGVcIjtcclxuaW1wb3J0IHsgdGFyZ2V0cyB9IGZyb20gXCIuL3RhcmdldHNcIjtcclxuXHJcbmxldCBzYXZlS2V5OiBzdHJpbmcgPSBcImluZmluZS1tb25rZXktaWRsZS1nYW1lXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2F2ZSgpIHtcclxuICAgIGxldCBzYXZlRmlsZTogU2F2ZUZpbGUgPSBnZXRTYXZlRmlsZSgpO1xyXG4gICAgbGV0IHNhdmVGaWxlU3RyaW5nOiBzdHJpbmcgPSBKU09OLnN0cmluZ2lmeShzYXZlRmlsZSk7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShzYXZlS2V5LCBzYXZlRmlsZVN0cmluZyk7XHJcbiAgICBjb25zb2xlLmxvZyhcIlNhdmVkIVwiKTtcclxuICAgIGNvbnNvbGUubG9nKHNhdmVGaWxlU3RyaW5nKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0U2F2ZUZpbGUoKTogU2F2ZUZpbGUge1xyXG4gICAgcmV0dXJuIG5ldyBTYXZlRmlsZShcclxuICAgICAgICBnLmJhbmFuYXMsXHJcbiAgICAgICAgZy5tb25rZXlzLFxyXG4gICAgICAgIGcuY3VycmVudFRhcmdldEluZGV4LFxyXG4gICAgICAgIGcua2V5Ym9hcmRLZXlzLFxyXG4gICAgICAgIGcubWF4S2V5Ym9hcmRLZXlzLFxyXG4gICAgICAgIGcudGFyZ2V0T3duZWQsXHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbG9hZEZyb21Mb2NhbFN0b3JhZ2UoKSB7XHJcbiAgICBsZXQgc2F2ZUZpbGVTdHJpbmcgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShzYXZlS2V5KTtcclxuICAgIGlmIChzYXZlRmlsZVN0cmluZyA9PT0gdW5kZWZpbmVkXHJcbiAgICAgICAgfHwgc2F2ZUZpbGVTdHJpbmcgPT09IG51bGwpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiQ291bGQgbm90IGxvYWQgc2F2ZVwiKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiU2F2ZSBmb3VuZFwiLCBzYXZlRmlsZVN0cmluZyk7XHJcbiAgICB9XHJcbiAgICBsb2FkRnJvbVN0cmluZyhzYXZlRmlsZVN0cmluZyk7XHJcbn1cclxuXHJcbi8vIEkgc2hvdWxkIGJlIGFibGUgdG8gY2FsbCB0aGlzIHdoZXRoZXIgSSdtIGxvYWRpbmcgZnJvbVxyXG4vLyBsb2NhbCBzdG9yYWdlIG9yIGZyb20gYSB1c2VyLXByb3ZpZGVkIHNhdmUgaW1wb3J0IHN0cmluZ1xyXG5leHBvcnQgZnVuY3Rpb24gbG9hZEZyb21TdHJpbmcoaW1wb3J0U3RyaW5nOiBzdHJpbmcpIHtcclxuICAgIGxldCBsb2FkZWRTYXZlOiBTYXZlRmlsZSA9IEpTT04ucGFyc2UoaW1wb3J0U3RyaW5nKTtcclxuICAgIGlmIChsb2FkZWRTYXZlID09PSB1bmRlZmluZWRcclxuICAgICAgICB8fCBsb2FkZWRTYXZlID09PSBudWxsKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBsb2FkIHNhdmUgZnJvbSBsb2NhbCBzdG9yYWdlOiBKU09OIHBhcnNlIGVycm9yXCIpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH0gZWxzZSBpZiAobG9hZGVkU2F2ZS52ZXJzaW9uICE9PSBzYXZlRmlsZVZlcnNpb24pIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGxvYWQgc2F2ZSBmcm9tIGxvY2FsIHN0b3JhZ2U6IFZlcnNpb24gbWlzbWF0Y2hcIik7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2coXCJMb2FkZWQgc2F2ZVwiKTtcclxuICAgIGNvbnNvbGUubG9nKGxvYWRlZFNhdmUpO1xyXG4gICAgZy5iYW5hbmFzID0gbG9hZGVkU2F2ZS5iYW5hbmFzO1xyXG4gICAgZy5tb25rZXlzID0gbG9hZGVkU2F2ZS5tb25rZXlzO1xyXG4gICAgZy5sZXR0ZXJzUGVyU2Vjb25kID0gZy5tb25rZXlzO1xyXG4gICAgZy5jdXJyZW50VGFyZ2V0SW5kZXggPSBsb2FkZWRTYXZlLnRhcmdldEluZGV4O1xyXG4gICAgZy5jdXJyZW50VGFyZ2V0ID0gdGFyZ2V0c1tsb2FkZWRTYXZlLnRhcmdldEluZGV4XTtcclxuICAgIGcua2V5Ym9hcmRLZXlzID0gbG9hZGVkU2F2ZS5rZXlib2FyZEtleXM7XHJcbiAgICBnLm1heEtleWJvYXJkS2V5cyA9IGxvYWRlZFNhdmUubWF4S2V5Ym9hcmRLZXlzO1xyXG4gICAgZy50YXJnZXRPd25lZCA9IGxvYWRlZFNhdmUudGFyZ2V0T3duZWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBleHBvcnRTYXZlVG9TdHJpbmcoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShnZXRTYXZlRmlsZSgpKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGVyYXNlU2F2ZSgpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiU2F2ZSBFcmFzZWQhXCIpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oc2F2ZUtleSk7XHJcbn1cclxuIiwiZXhwb3J0IGxldCBzYXZlRmlsZVZlcnNpb246IG51bWJlciA9IDI7XHJcblxyXG5leHBvcnQgY2xhc3MgU2F2ZUZpbGUge1xyXG4gICAgLy8gVXNlIHRoZSB2ZXJzaW9uIG51bWJlciB0byBkZXRlY3QgYW5kIGludmFsaWRhdGVcclxuICAgIC8vIG9sZCBhbmQgaW5jb21wYXRpYmxlIHNhdmUgZmlsZXNcclxuICAgIHB1YmxpYyB2ZXJzaW9uOiBudW1iZXI7XHJcblxyXG4gICAgcHVibGljIGJhbmFuYXM6IG51bWJlcjtcclxuICAgIHB1YmxpYyBtb25rZXlzOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgdGFyZ2V0SW5kZXg6IG51bWJlcjtcclxuICAgIHB1YmxpYyBrZXlib2FyZEtleXM6IHN0cmluZ1tdO1xyXG4gICAgcHVibGljIG1heEtleWJvYXJkS2V5czogbnVtYmVyO1xyXG4gICAgcHVibGljIHRhcmdldE93bmVkOiBib29sZWFuW107XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIGJhbmFuYXM6IG51bWJlcixcclxuICAgICAgICBtb25rZXlzOiBudW1iZXIsXHJcbiAgICAgICAgdGFyZ2V0SW5kZXg6IG51bWJlcixcclxuICAgICAgICBrZXlib2FyZEtleXM6IHN0cmluZ1tdLFxyXG4gICAgICAgIG1heEtleWJvYXJkS2V5czogbnVtYmVyLFxyXG4gICAgICAgIHRhcmdldE93bmVkOiBib29sZWFuW10sXHJcbiAgICApIHtcclxuICAgICAgICB0aGlzLnZlcnNpb24gPSBzYXZlRmlsZVZlcnNpb247XHJcbiAgICAgICAgdGhpcy5iYW5hbmFzID0gYmFuYW5hcztcclxuICAgICAgICB0aGlzLm1vbmtleXMgPSBtb25rZXlzO1xyXG4gICAgICAgIHRoaXMudGFyZ2V0SW5kZXggPSB0YXJnZXRJbmRleDtcclxuICAgICAgICB0aGlzLmtleWJvYXJkS2V5cyA9IGtleWJvYXJkS2V5cztcclxuICAgICAgICB0aGlzLm1heEtleWJvYXJkS2V5cyA9IG1heEtleWJvYXJkS2V5cztcclxuICAgICAgICB0aGlzLnRhcmdldE93bmVkID0gdGFyZ2V0T3duZWQ7XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIFRhcmdldCB7XHJcbiAgICBwdWJsaWMgbGV0dGVyczogc3RyaW5nW107XHJcbiAgICBwdWJsaWMgZGlzcGxheVN0cmluZzogc3RyaW5nO1xyXG4gICAgcHVibGljIHJld2FyZHM6IG51bWJlcltdO1xyXG4gICAgcHVibGljIHByaWNlOiBudW1iZXI7XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIGxldHRlcnM6IHN0cmluZ1tdLFxyXG4gICAgICAgIGRpc3BsYXlTdHJpbmc6IHN0cmluZyxcclxuICAgICAgICByZXdhcmRzOiBudW1iZXJbXSxcclxuICAgICAgICBwcmljZTogbnVtYmVyLFxyXG4gICAgKSB7XHJcbiAgICAgICAgdGhpcy5sZXR0ZXJzID0gbGV0dGVycztcclxuICAgICAgICB0aGlzLmRpc3BsYXlTdHJpbmcgPSBkaXNwbGF5U3RyaW5nO1xyXG4gICAgICAgIHRoaXMucmV3YXJkcyA9IHJld2FyZHM7XHJcbiAgICAgICAgdGhpcy5wcmljZSA9IHByaWNlO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IFRhcmdldCB9IGZyb20gXCIuL3RhcmdldFwiO1xyXG5cclxuZXhwb3J0IGxldCB0YXJnZXRzOiBUYXJnZXRbXSA9IFtcclxuICAgIG5ldyBUYXJnZXQoXHJcbiAgICAgICAgW1wiQ1wiLCBcIkFcIiwgXCJUXCJdLFxyXG4gICAgICAgIFwiQ0FUXCIsXHJcbiAgICAgICAgWzEsIDgsIDQwXSxcclxuICAgICAgICAwLFxyXG4gICAgKSxcclxuICAgIG5ldyBUYXJnZXQoXHJcbiAgICAgICAgW1wiSFwiLCBcIk9cIiwgXCJPXCIsIFwiVFwiXSxcclxuICAgICAgICBcIkhPT1RcIixcclxuICAgICAgICBbNSwgMTAsIDQwLCAxODBdLFxyXG4gICAgICAgIDIwMDAsXHJcbiAgICApLFxyXG4gICAgbmV3IFRhcmdldChcclxuICAgICAgICBbXCJSXCIsIFwiRVwiLCBcIkZcIiwgXCJFXCIsIFwiUlwiLCBcIkVcIiwgXCJFXCJdLFxyXG4gICAgICAgIFwiUkVGRVJFRVwiLFxyXG4gICAgICAgIFs1LCA1LCA1LCAyMCwgNDAwLCAyNDAwLCAxNTAwMF0sXHJcbiAgICAgICAgMzAwMDAsXHJcbiAgICApLFxyXG4gICAgLy8gbmV3IFRhcmdldChcclxuICAgIC8vICAgICBbXSxcclxuICAgIC8vICAgICBcIlwiLFxyXG4gICAgLy8gICAgIFtdLFxyXG4gICAgLy8gICAgIDAsXHJcbiAgICAvLyApLFxyXG5dO1xyXG4iLCIvLyBUT0RPOiBtYWtlIHN1cmUgdGhhdCB3aGVuIHRoZSBnYW1lIGZpcnN0IHN0YXJ0cyB1cCBJIGNhbiBqdXN0IHNldCB0aGVcclxuLy8gbGV2ZWwgb24gdGhlIHVwZ3JhZGUgYW5kIGl0IHdpbGwgYXV0b21hdGljYWxseSBjYWxjdWxhdGVcclxuLy8gdGhlIHJpZ2h0IHNldHRpbmdzLiBUaGlzIHdheSwgYWxsIEkgaGF2ZSB0byBwdXQgaW4gdGhlIHNhdmUgZmlsZVxyXG4vLyBpcyB0aGUgbGV2ZWwgb2YgZWFjaCB1cGdyYWRlLlxyXG5cclxuLy8gTm90ZTogZG8gSSBwbGFuIHRvIGhhdmUgdXBncmFkZXMgb3RoZXIgdGhhbiBhZGRpdGl2ZSBvciBtdWx0aXBsaWNhdGl2ZVxyXG4vLyBpbmNyZWFzZXMgaW4gdGhlIGJhbmFuYXMgcGVyIHNlY29uZD8gSWYgc28sIEkgaGF2ZSB0byBtYWtlIHRoaXNcclxuLy8gdmVyeSBnZW5lcmljLlxyXG5leHBvcnQgY2xhc3MgVXBncmFkZSB7XHJcbiAgICBwdWJsaWMgbWF4TGV2ZWw6IG51bWJlcjtcclxuICAgIHB1YmxpYyBwcmljZTogbnVtYmVyO1xyXG4gICAgcHVibGljIGxldmVsOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgdGV4dDogc3RyaW5nO1xyXG4gICAgcHVibGljIGJ1eTogKCkgPT4gdm9pZDtcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoXHJcbiAgICAgICAgbWF4TGV2ZWw6IG51bWJlcixcclxuICAgICAgICBwcmljZTogbnVtYmVyLFxyXG4gICAgICAgIHRleHQ6IHN0cmluZyxcclxuICAgICAgICBidXk6ICgpID0+IHZvaWQsXHJcbiAgICApIHtcclxuICAgICAgICB0aGlzLm1heExldmVsID0gbWF4TGV2ZWw7XHJcbiAgICAgICAgdGhpcy5wcmljZSA9IHByaWNlO1xyXG4gICAgICAgIHRoaXMudGV4dCA9IHRleHQ7XHJcbiAgICAgICAgdGhpcy5sZXZlbCA9IDA7XHJcbiAgICAgICAgdGhpcy5idXkgPSBidXk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgZyB9IGZyb20gXCIuL2dsb2JhbFwiO1xyXG5pbXBvcnQgeyBVcGdyYWRlIH0gZnJvbSBcIi4vdXBncmFkZVwiO1xyXG5cclxubGV0IHVwZ3JhZGUxID0gbmV3IFVwZ3JhZGUoXHJcbiAgICAxMCxcclxuICAgIDEsXHJcbiAgICBcIlVwZ3JhZGUgVHlwZSAxXCIsXHJcbiAgICAoKSA9PiB7XHJcbiAgICAgICAgdXBncmFkZTEubGV2ZWwgKz0gMTtcclxuICAgICAgICB1cGdyYWRlMS5wcmljZSA9IE1hdGgucG93KDIsIHVwZ3JhZGUxLmxldmVsIC0gMSk7XHJcbiAgICAgICAgZy5hZGRpdGl2ZUZsYXRCb251cyA9IHVwZ3JhZGUxLmxldmVsO1xyXG4gICAgfSxcclxuKTtcclxuXHJcbmxldCB1cGdyYWRlMiA9IG5ldyBVcGdyYWRlKFxyXG4gICAgMTAsXHJcbiAgICAxMCxcclxuICAgIFwiVXBncmFkZSBUeXBlIDJcIixcclxuICAgICgpID0+IHtcclxuICAgICAgICB1cGdyYWRlMi5sZXZlbCArPSAxO1xyXG4gICAgICAgIHVwZ3JhZGUyLnByaWNlID0gMTAgKiB1cGdyYWRlMi5sZXZlbDtcclxuICAgICAgICBnLmFkZGl0aXZlUGVyY2VudEJvbnVzID0gMC41ICogdXBncmFkZTIubGV2ZWw7XHJcbiAgICB9LFxyXG4pO1xyXG5cclxubGV0IHVwZ3JhZGUzID0gbmV3IFVwZ3JhZGUoXHJcbiAgICAxMCxcclxuICAgIDEwMCxcclxuICAgIFwiVXBncmFkZSBUeXBlIDNcIixcclxuICAgICgpID0+IHtcclxuICAgICAgICB1cGdyYWRlMy5sZXZlbCArPSAxO1xyXG4gICAgICAgIHVwZ3JhZGUzLnByaWNlID0gNSAqIHVwZ3JhZGUzLmxldmVsICsgNTtcclxuICAgICAgICBnLmFkZGl0aXZlUGVyY2VudEJvbnVzID0gMC4wNSAqIHVwZ3JhZGUzLmxldmVsO1xyXG4gICAgfSxcclxuKTtcclxuXHJcbi8vIG5ldyBVcGdyYWRlKFxyXG4vLyAgICAgMSxcclxuLy8gICAgIDEsXHJcbi8vICAgICBcIlwiLFxyXG4vLyAgICAgKCkgPT4ge30sXHJcbi8vICksXHJcblxyXG5leHBvcnQgbGV0IHVwZ3JhZGVzOiBVcGdyYWRlW10gPSBbXHJcbiAgICB1cGdyYWRlMSxcclxuICAgIHVwZ3JhZGUyLFxyXG4gICAgdXBncmFkZTMsXHJcbl07XHJcbiIsImV4cG9ydCBmdW5jdGlvbiBjb3VudE1hdGNoaW5nTGV0dGVycyhzMTogc3RyaW5nW10sIHMyOiBzdHJpbmdbXSkge1xyXG4gICAgbGV0IG1hdGNoaW5nID0gMDtcclxuICAgIGxldCBtaW5MZW5ndGggPSBNYXRoLm1pbihzMS5sZW5ndGgsIHMyLmxlbmd0aCk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1pbkxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKHMxW2ldID09PSBzMltpXSkge1xyXG4gICAgICAgICAgICBtYXRjaGluZysrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBtYXRjaGluZztcclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIFRPRE86XHJcbi8vIEF1dG8tc2F2ZSBldmVyeSAxMCBzZWNvbmRzXHJcbi8vIE1ha2UgdGhlIGVyYXNlIHNhdmUgYnV0dG9uIHJlc3RhcnQgdGhlIGdhbWUgYXMgd2VsbFxyXG4vLyBQcmV2ZW50IGNhdGNodXAgbGFnIGFmdGVyIHRhYi1vdXRcclxuLy8gQXV0by1jYWxjdWxhdGUgYXZlcmFnZSBiYW5hbmFzIHBlciB3b3JkXHJcbi8vIGdldCByaWQgb2YgY29kZSByZXBlYXRzIG9mIGlmIChidXR0b24uaXNEaXNhYmxlZCkge3JldHVybjt9XHJcblxyXG4vLyBUaGUgVUkgaXMgYSBjb21wbGV0ZSBtZXNzIVxyXG4vLyBUaGUgc2F2ZSBzaG91bGQgYmUgZW5jcnlwdGVkXHJcbi8vIFRoZSBlcmFzZSBzYXZlIGJ1dHRvbiBzaG91bGQgaGF2ZSBhIGNvbmZpcm1hdGlvbiBzdGVwXHJcbi8vIFRoZSBlcmFzZSBzYXZlIGJ1dHRvbiBzaG91bGQgYWxzbyByZXNldCB0aGUgZ2FtZSAocHJvYmFibHkgd2lsbCByZW5hbWUgdGhlIGJ1dHRvbilcclxuLy8gVGhlcmUgc2hvdWxkIGJlIGFuIGltcG9ydC9leHBvcnQgb3B0aW9uIHRvIGxldCB0aGUgcGxheWVyIGJhY2sgdXAgdGhlaXIgc2F2ZVxyXG4vLyBUaGVyZSBhcmUgYmFsYW5jZSBpc3N1ZXNcclxuLy8gVGhlcmUgc2hvdWxkIGJlIHVwZ3JhZGVzXHJcbi8vIGFkanVzdGFibGUgdXBkYXRlIHJhdGUgZm9yIGJhbmFuYXMgcGVyIHNlY29uZFxyXG4vLyBjb21wcmVzc2VkIG5vdGF0aW9uIGZvciBsYXJnZSBudW1iZXJzXHJcblxyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiLi9idXR0b25cIjtcclxuaW1wb3J0IHsgY2FudmFzLCBjb2xsaWRlYWJsZXMsIGN0eCwgZHJhd2FibGVzLCBnLCB1cGRhdGVhYmxlcyB9IGZyb20gXCIuL2dsb2JhbFwiO1xyXG5pbXBvcnQgeyBlcmFzZVNhdmUsIGxvYWRGcm9tTG9jYWxTdG9yYWdlLCBzYXZlIH0gZnJvbSBcIi4vbG9jYWxfc3RvcmFnZVwiO1xyXG5pbXBvcnQgeyB0YXJnZXRzIH0gZnJvbSBcIi4vdGFyZ2V0c1wiO1xyXG5pbXBvcnQgeyBkb3dubG9hZCwgZ2VuZXJhdGVQZXJtdXRhdGlvbnMgfSBmcm9tIFwiLi90ZXN0X3Blcm11dGF0aW9uc1wiO1xyXG5pbXBvcnQgeyBDb2xsaWRlYWJsZSB9IGZyb20gXCIuL3R5cGVzXCI7XHJcbmltcG9ydCB7IHVwZ3JhZGVzIH0gZnJvbSBcIi4vdXBncmFkZXNcIjtcclxuaW1wb3J0IHsgY291bnRNYXRjaGluZ0xldHRlcnMgfSBmcm9tIFwiLi91dGlsXCI7XHJcblxyXG4vLyBsZXQgcmVwb3J0MSA9IGdlbmVyYXRlUGVybXV0YXRpb25zKFxyXG4vLyAgICAgW1wiSFwiLCBcIk9cIiwgXCJUXCJdLFxyXG4vLyAgICAgW1wiSFwiLCBcIk9cIiwgXCJPXCIsIFwiVFwiXSxcclxuLy8gKTtcclxuLy8gZG93bmxvYWQoXCJob3QtaG9vdC1wZXJtdXRhdGlvbnMuY3N2XCIsIHJlcG9ydDEpO1xyXG5cclxuLy8gbGV0IHJlcG9ydDIgPSBnZW5lcmF0ZVBlcm11dGF0aW9ucyhcclxuLy8gICAgIFtcIkhcIiwgXCJPXCIsIFwiT1wiLCBcIlRcIl0sXHJcbi8vICAgICBbXCJIXCIsIFwiT1wiLCBcIk9cIiwgXCJUXCJdLFxyXG4vLyApO1xyXG4vLyBkb3dubG9hZChcImhvb3QtaG9vdC1wZXJtdXRhdGlvbnMuY3N2XCIsIHJlcG9ydDIpO1xyXG5cclxubG9hZEZyb21Mb2NhbFN0b3JhZ2UoKTtcclxuXHJcbmxldCBidXR0b25Db2xvcjogc3RyaW5nID0gcmdiU3RyaW5nKDIwMCwgMjAwLCAyNTUpO1xyXG5sZXQgYnV0dG9uSG92ZXJDb2xvcjogc3RyaW5nID0gcmdiU3RyaW5nKDE4MCwgMTgwLCAyMzApO1xyXG5sZXQgZXJhc2VCdXR0b25Db2xvcjogc3RyaW5nID0gcmdiU3RyaW5nKDI1NSwgNTAsIDUwKTtcclxubGV0IGVyYXNlQnV0dG9uSG92ZXJDb2xvcjogc3RyaW5nID0gcmdiU3RyaW5nKDIyNSwgMjAsIDIwKTtcclxuXHJcbi8vIE1ha2UgYnV0dG9ucyBvdXQgb2YgYWxsIHBvc3NpYmxlIGtleWJvYXJkIGtleXNcclxuLy8gbGV0IGFsbEtleWJvYXJkS2V5cyA9IFtcIiBcIiwgXCJBXCIsXCJCXCIsXCJDXCIsXCJEXCIsXCJFXCIsXCJGXCIsXCJHXCIsXCJIXCIsXCJJXCIsXCJKXCIsXCJLXCIsXCJMXCIsXCJNXCIsXCJOXCIsXCJPXCIsXCJQXCIsXCJRXCIsXCJSXCIsXCJTXCIsXCJUXCIsXCJVXCIsXCJWXCIsXCJXXCIsXCJYXCIsXCJZXCIsXCJaXCJdO1xyXG5sZXQgYWxsS2V5Ym9hcmRLZXlzID0gW1wi4o61XCIsIFwiQVwiLFwiQlwiLFwiQ1wiLFwiRFwiLFwiRVwiLFwiRlwiLFwiR1wiLFwiSFwiLFwiSVwiLFwiSlwiLFwiS1wiLFwiTFwiLFwiTVwiLFwiTlwiLFwiT1wiLFwiUFwiLFwiUVwiLFwiUlwiLFwiU1wiLFwiVFwiLFwiVVwiLFwiVlwiLFwiV1wiLFwiWFwiLFwiWVwiLFwiWlwiXTtcclxuZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxLZXlib2FyZEtleXMubGVuZ3RoOyBpKyspIHtcclxuICAgIGxldCBrZXkgPSBhbGxLZXlib2FyZEtleXNbaV07XHJcbiAgICBsZXQgYnV0dG9uID0gbmV3IEJ1dHRvbihcclxuICAgICAgICA0MCArIDMwICogaSxcclxuICAgICAgICA0NTAsXHJcbiAgICAgICAgMjUsXHJcbiAgICAgICAgMjUsXHJcbiAgICAgICAga2V5LFxyXG4gICAgICAgIGJ1dHRvbkNvbG9yLFxyXG4gICAgICAgIGJ1dHRvbkhvdmVyQ29sb3IsXHJcbiAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoYnV0dG9uLmlzRGlzYWJsZWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjcmVhdGVDdXJyZW50S2V5Ym9hcmRLZXlCdXR0b24oZy5rZXlib2FyZEtleXMubGVuZ3RoLCBrZXkpO1xyXG4gICAgICAgICAgICBnLmtleWJvYXJkS2V5cy5wdXNoKGtleSk7XHJcbiAgICAgICAgICAgIHVwZGF0ZUNoYXJhY3RlcnNUb0Nob29zZUZyb20oKTtcclxuICAgICAgICAgICAgY3VycmVudFN0cmluZyA9IFtdO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZy5rZXlib2FyZEtleXMubGVuZ3RoIDwgZy5tYXhLZXlib2FyZEtleXMpIHtcclxuICAgICAgICAgICAgICAgIGJ1dHRvbi5pc0Rpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBidXR0b24uaXNEaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgKTtcclxufVxyXG5cclxubGV0IGNoYXJhY3RlcnNUb0Nob29zZUZyb206IHN0cmluZ1tdO1xyXG5sZXQgcmFuZG9tTnVtYmVyU2l6ZSA9IDY1NTM2O1xyXG51cGRhdGVDaGFyYWN0ZXJzVG9DaG9vc2VGcm9tKCk7XHJcbmxldCBrZXlib2FyZEtleUJ1dHRvbnM6IEJ1dHRvbltdID0gW11cclxuXHJcbmZvciAobGV0IGkgPSAwOyBpIDwgZy5rZXlib2FyZEtleXMubGVuZ3RoOyBpKyspIHtcclxuICAgIGNyZWF0ZUN1cnJlbnRLZXlib2FyZEtleUJ1dHRvbihpLCBnLmtleWJvYXJkS2V5c1tpXSk7XHJcbn1cclxuXHJcbi8vIE1ha2UgYSBidXR0b24gb3V0IG9mIHRoZSBhIGtleWJvYXJkIGtleSBzbyB5b3VcclxuLy8gY2FuIGNsaWNrIHRvIHJlbW92ZSBpdCBmcm9tIHlvdXIga2V5Ym9hcmQuXHJcbi8vIGkgaXMgdGhlIGluZGV4IGluIHRoZSBrZXlib2FyZEtleXMgYXJyYXlcclxuLy8gT24gY2xpY2sgaXQgZGVsZXRlcyBhbmQgcmVtYWtlcyBhbGwgdGhlIGJ1dHRvbnNcclxuZnVuY3Rpb24gY3JlYXRlQ3VycmVudEtleWJvYXJkS2V5QnV0dG9uKGk6IG51bWJlciwga2V5OiBzdHJpbmcpIHtcclxuICAgIGxldCBidXR0b24gPSBuZXcgQnV0dG9uKFxyXG4gICAgICAgIDE4MCArIDMwICogaSxcclxuICAgICAgICAyODAsXHJcbiAgICAgICAgMjUsXHJcbiAgICAgICAgMjUsXHJcbiAgICAgICAga2V5LFxyXG4gICAgICAgIGJ1dHRvbkNvbG9yLFxyXG4gICAgICAgIGJ1dHRvbkhvdmVyQ29sb3IsXHJcbiAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoYnV0dG9uLmlzRGlzYWJsZWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBnLmtleWJvYXJkS2V5cy5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgIHVwZGF0ZUNoYXJhY3RlcnNUb0Nob29zZUZyb20oKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBrZXlib2FyZEtleUJ1dHRvbnMubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGtleWJvYXJkS2V5QnV0dG9uc1tqXS5kZWxldGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGcua2V5Ym9hcmRLZXlzLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQga2V5ID0gZy5rZXlib2FyZEtleXNbal07XHJcbiAgICAgICAgICAgICAgICBjcmVhdGVDdXJyZW50S2V5Ym9hcmRLZXlCdXR0b24oaiwga2V5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjdXJyZW50U3RyaW5nID0gW107XHJcbiAgICAgICAgfSxcclxuICAgICAgICAoKSA9PiB7fSxcclxuICAgICk7XHJcbiAgICBrZXlib2FyZEtleUJ1dHRvbnMucHVzaChidXR0b24pO1xyXG59XHJcblxyXG5mdW5jdGlvbiB1cGRhdGVDaGFyYWN0ZXJzVG9DaG9vc2VGcm9tKCkge1xyXG4gICAgY2hhcmFjdGVyc1RvQ2hvb3NlRnJvbSA9IFtdO1xyXG4gICAgaWYgKGcua2V5Ym9hcmRLZXlzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmFuZG9tTnVtYmVyU2l6ZTsgaSsrKSB7XHJcbiAgICAgICAgY2hhcmFjdGVyc1RvQ2hvb3NlRnJvbS5wdXNoKFxyXG4gICAgICAgICAgICBnLmtleWJvYXJkS2V5c1tpICUgZy5rZXlib2FyZEtleXMubGVuZ3RoXVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmxldCBjdXJyZW50U3RyaW5nOiBzdHJpbmdbXSA9IFtdO1xyXG5cclxubGV0IHRhcmdldEJ1dHRvbnM6IEJ1dHRvbltdID0gW107XHJcbmZvciAobGV0IGkgPSAwOyBpIDwgdGFyZ2V0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgbGV0IGJ1dHRvblRleHQ6IHN0cmluZyA9IHRhcmdldHNbaV0uZGlzcGxheVN0cmluZztcclxuICAgIGlmICghZy50YXJnZXRPd25lZFtpXSkge1xyXG4gICAgICAgIGJ1dHRvblRleHQgKz0gXCIgXCIgKyB0YXJnZXRzW2ldLnByaWNlO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBidXR0b24gPSBuZXcgQnV0dG9uKFxyXG4gICAgICAgIDUwMCxcclxuICAgICAgICA1MCArIDM1ICogaSxcclxuICAgICAgICA4MCxcclxuICAgICAgICAzMCxcclxuICAgICAgICBidXR0b25UZXh0LFxyXG4gICAgICAgIGJ1dHRvbkNvbG9yLFxyXG4gICAgICAgIGJ1dHRvbkhvdmVyQ29sb3IsXHJcbiAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoYnV0dG9uLmlzRGlzYWJsZWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIWcudGFyZ2V0T3duZWRbaV0pIHtcclxuICAgICAgICAgICAgICAgIGcuYmFuYW5hcyAtPSB0YXJnZXRzW2ldLnByaWNlO1xyXG4gICAgICAgICAgICAgICAgYnV0dG9uLnRleHQgPSB0YXJnZXRzW2ldLmRpc3BsYXlTdHJpbmc7XHJcbiAgICAgICAgICAgICAgICBnLnRhcmdldE93bmVkW2ldID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZy5jdXJyZW50VGFyZ2V0ID0gdGFyZ2V0c1tpXTtcclxuICAgICAgICAgICAgZy5jdXJyZW50VGFyZ2V0SW5kZXggPSBpO1xyXG4gICAgICAgICAgICB0YXJnZXRCdXR0b25zW2ldLmlzRGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0c1tpXS5wcmljZSA+IGcuYmFuYW5hc1xyXG4gICAgICAgICAgICAgICAgICAgICYmICFnLnRhcmdldE93bmVkW2ldXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB8fCB0YXJnZXRzW2ldLmRpc3BsYXlTdHJpbmcgPT09IGcuY3VycmVudFRhcmdldC5kaXNwbGF5U3RyaW5nXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgYnV0dG9uLmlzRGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYnV0dG9uLmlzRGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICApO1xyXG4gICAgdGFyZ2V0QnV0dG9ucy5wdXNoKGJ1dHRvbik7XHJcbn1cclxuXHJcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY2FudmFzKTtcclxuXHJcbmxldCByZWNydWl0UHJpY2UgPSAxMCArIDIgKiBnLm1vbmtleXM7XHJcbmxldCBidXR0b24xID0gbmV3IEJ1dHRvbihcclxuICAgIDEwMCxcclxuICAgIDEwMCxcclxuICAgIDgwLFxyXG4gICAgMzAsXHJcbiAgICBcIlJlY3J1aXQgTW9ua2V5IFwiICsgcmVjcnVpdFByaWNlLFxyXG4gICAgYnV0dG9uQ29sb3IsXHJcbiAgICBidXR0b25Ib3ZlckNvbG9yLFxyXG4gICAgKCkgPT4ge1xyXG4gICAgICAgIGlmIChidXR0b24xLmlzRGlzYWJsZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBnLm1vbmtleXMgKz0gMTtcclxuICAgICAgICBnLmxldHRlcnNQZXJTZWNvbmQgKz0gMTtcclxuICAgICAgICBnLmJhbmFuYXMgLT0gcmVjcnVpdFByaWNlO1xyXG4gICAgICAgIHJlY3J1aXRQcmljZSA9IDEwICsgMiAqIGcubW9ua2V5cztcclxuICAgICAgICBidXR0b24xLnRleHQgPSBcIlJlY3J1aXQgTW9ua2V5IFwiICsgcmVjcnVpdFByaWNlO1xyXG4gICAgfSxcclxuICAgICgpID0+IHtcclxuICAgICAgICBpZiAocmVjcnVpdFByaWNlID4gZy5iYW5hbmFzKSB7XHJcbiAgICAgICAgICAgIGJ1dHRvbjEuaXNEaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYnV0dG9uMS5pc0Rpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuKTtcclxuXHJcbmxldCBsYXN0Q2xpY2tlZFRpbWVNaWxsaXM6IG51bWJlcjtcclxubGV0IGJ1dHRvbjIgPSBuZXcgQnV0dG9uKFxyXG4gICAgMTAwLFxyXG4gICAgMzUwLFxyXG4gICAgODAsXHJcbiAgICAzMCxcclxuICAgIFwiVHlwZVwiLFxyXG4gICAgYnV0dG9uQ29sb3IsXHJcbiAgICBidXR0b25Ib3ZlckNvbG9yLFxyXG4gICAgKGN1cnJlbnRUaW1lTWlsbGlzOiBudW1iZXIpID0+IHtcclxuICAgICAgICBpZiAoY3VycmVudFRpbWVNaWxsaXMgIT09IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICAmJiAoY3VycmVudFRpbWVNaWxsaXMgLSBsYXN0Q2xpY2tlZFRpbWVNaWxsaXMpIDwgNTApIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBnLmxldHRlcnNUb1R5cGVSZW1haW5kZXIgKz0gMTtcclxuICAgICAgICBsYXN0Q2xpY2tlZFRpbWVNaWxsaXMgPSBjdXJyZW50VGltZU1pbGxpcztcclxuICAgIH0sXHJcbiAgICAoKSA9PiB7fVxyXG4pO1xyXG5cclxubGV0IHVwZ3JhZGVLZXlib2FyZFByaWNlID0gTWF0aC5wb3coMTAsIGcubWF4S2V5Ym9hcmRLZXlzICsgMSk7XHJcbmxldCBidXR0b24zID0gbmV3IEJ1dHRvbihcclxuICAgIDI1MCxcclxuICAgIDQwMCxcclxuICAgIDgwLFxyXG4gICAgMzAsXHJcbiAgICBcIlVwZ3JhZGUgS2V5Ym9hcmQgXCIgKyB1cGdyYWRlS2V5Ym9hcmRQcmljZSxcclxuICAgIGJ1dHRvbkNvbG9yLFxyXG4gICAgYnV0dG9uSG92ZXJDb2xvcixcclxuICAgICgpID0+IHtcclxuICAgICAgICBpZiAoYnV0dG9uMy5pc0Rpc2FibGVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZy5iYW5hbmFzIC09IHVwZ3JhZGVLZXlib2FyZFByaWNlO1xyXG4gICAgICAgIGcubWF4S2V5Ym9hcmRLZXlzICs9IDE7XHJcbiAgICAgICAgdXBkYXRlQ2hhcmFjdGVyc1RvQ2hvb3NlRnJvbSgpO1xyXG4gICAgICAgIHVwZ3JhZGVLZXlib2FyZFByaWNlID0gTWF0aC5wb3coMTAsIGcubWF4S2V5Ym9hcmRLZXlzICsgMSk7XHJcbiAgICAgICAgYnV0dG9uMy50ZXh0ID0gXCJVcGdyYWRlIEtleWJvYXJkIFwiICsgdXBncmFkZUtleWJvYXJkUHJpY2U7XHJcbiAgICB9LFxyXG4gICAgKCkgPT4ge1xyXG4gICAgICAgIGlmICh1cGdyYWRlS2V5Ym9hcmRQcmljZSA+IGcuYmFuYW5hcykge1xyXG4gICAgICAgICAgICBidXR0b24zLmlzRGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGJ1dHRvbjMuaXNEaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuKTtcclxuXHJcbmxldCBzYXZlQnV0dG9uOiBCdXR0b24gPSBuZXcgQnV0dG9uKFxyXG4gICAgMTAsXHJcbiAgICA2MDAsXHJcbiAgICAxMDAsXHJcbiAgICAzMCxcclxuICAgIFwiU2F2ZVwiLFxyXG4gICAgYnV0dG9uQ29sb3IsXHJcbiAgICBidXR0b25Ib3ZlckNvbG9yLFxyXG4gICAgKCkgPT4ge3NhdmUoKX0sXHJcbiAgICAoKSA9PiB7fSxcclxuKTtcclxuXHJcbmxldCBlcmFzZUJ1dHRvbjogQnV0dG9uID0gbmV3IEJ1dHRvbihcclxuICAgIDEwLFxyXG4gICAgNjQwLFxyXG4gICAgMTAwLFxyXG4gICAgMzAsXHJcbiAgICBcIkVyYXNlIFNhdmVcIixcclxuICAgIGVyYXNlQnV0dG9uQ29sb3IsXHJcbiAgICBlcmFzZUJ1dHRvbkhvdmVyQ29sb3IsXHJcbiAgICAoKSA9PiB7ZXJhc2VTYXZlKCl9LFxyXG4gICAgKCkgPT4ge30sXHJcbik7XHJcblxyXG5sZXQgdXBncmFkZTE6IEJ1dHRvbiA9IG5ldyBCdXR0b24oXHJcbiAgICA1MDAsXHJcbiAgICAzMDAsXHJcbiAgICA4MCxcclxuICAgIDMwLFxyXG4gICAgXCJVcGdyYWRlIDFcIixcclxuICAgIGJ1dHRvbkNvbG9yLFxyXG4gICAgYnV0dG9uSG92ZXJDb2xvcixcclxuICAgICgpID0+IHtcclxuICAgICAgICBpZiAodXBncmFkZTEuaXNEaXNhYmxlZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHVwZ3JhZGVzWzBdLmJ1eSgpO1xyXG4gICAgfSxcclxuICAgICgpID0+IHtcclxuICAgICAgICBpZiAodXBncmFkZXNbMF0ucHJpY2UgPiBnLmJhbmFuYXMpIHtcclxuICAgICAgICAgICAgdXBncmFkZTEuaXNEaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdXBncmFkZTEuaXNEaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbik7XHJcblxyXG5sZXQgdXBncmFkZTI6IEJ1dHRvbiA9IG5ldyBCdXR0b24oXHJcbiAgICA1MDAsXHJcbiAgICAzMzUsXHJcbiAgICA4MCxcclxuICAgIDMwLFxyXG4gICAgXCJVcGdyYWRlIDJcIixcclxuICAgIGJ1dHRvbkNvbG9yLFxyXG4gICAgYnV0dG9uSG92ZXJDb2xvcixcclxuICAgICgpID0+IHtcclxuICAgICAgICBpZiAodXBncmFkZTIuaXNEaXNhYmxlZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHVwZ3JhZGVzWzFdLmJ1eSgpO1xyXG4gICAgfSxcclxuICAgICgpID0+IHtcclxuICAgICAgICBpZiAodXBncmFkZXNbMV0ucHJpY2UgPiBnLmJhbmFuYXMpIHtcclxuICAgICAgICAgICAgdXBncmFkZTIuaXNEaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdXBncmFkZTIuaXNEaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbik7XHJcblxyXG5sZXQgdXBncmFkZTM6IEJ1dHRvbiA9IG5ldyBCdXR0b24oXHJcbiAgICA1MDAsXHJcbiAgICAzNzAsXHJcbiAgICA4MCxcclxuICAgIDMwLFxyXG4gICAgXCJVcGdyZWFkZSAzXCIsXHJcbiAgICBidXR0b25Db2xvcixcclxuICAgIGJ1dHRvbkhvdmVyQ29sb3IsXHJcbiAgICAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHVwZ3JhZGUzLmlzRGlzYWJsZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB1cGdyYWRlc1syXS5idXkoKTtcclxuICAgIH0sXHJcbiAgICAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHVwZ3JhZGVzWzJdLnByaWNlID4gZy5iYW5hbmFzKSB7XHJcbiAgICAgICAgICAgIHVwZ3JhZGUzLmlzRGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHVwZ3JhZGUzLmlzRGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4pO1xyXG5cclxubGV0IGluY29tZUFjY3VtdWxhdG9yOiBudW1iZXIgPSAwO1xyXG5sZXQgbGFzdEluY29tZVVwZGF0ZVRpbWVNaWxsaXM6IG51bWJlciA9IHBlcmZvcm1hbmNlLm5vdygpO1xyXG5sZXQgbWlsbGlzUGVySW5jb21lVXBkYXRlOiBudW1iZXIgPSAyMDAwO1xyXG5sZXQgbGFzdEJhbmFuYXNQZXJTZWNvbmQ6IG51bWJlciA9IDA7XHJcblxyXG4vLyBzdG9yZSB0aGUgbW91c2UgeHkgaW4gY2FzZSBpdCBnZXRzIGV4ZWN1dGVkIGZhc3RlciB0aGFuXHJcbi8vIG9uY2UgZXZlcnkgZnJhbWUsIHdoaWNoIHdvdWxkIGJlIHVzZWxlc3Mgc2luY2UgaG92ZXIgaXNcclxuLy8gaGFuZGxlZCBvbmx5IG9uY2UgZXZlcnkgZnJhbWVcclxuY2FudmFzLm9ubW91c2Vtb3ZlID0gKGV2OiBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICBsZXQgYm91bmRzOiBET01SZWN0ID0gY2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgZy5tb3VzZVggPSBldi54IC0gYm91bmRzLmxlZnQ7XHJcbiAgICBnLm1vdXNlWSA9IGV2LnkgLSBib3VuZHMudG9wO1xyXG59O1xyXG5cclxuLy8gYXNzdW1lIGZvciBzaW1wbGljaXR5IHRoYXQgeW91IGNhbid0IGhhdmUgdHdvIG1vdXNlZG93blxyXG4vLyBldmVudHMgd2l0aG91dCBhIG1vdXNldXBcclxuY2FudmFzLm9ubW91c2Vkb3duID0gKGV2OiBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICBsZXQgYm91bmRzOiBET01SZWN0ID0gY2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgbGV0IG1vdXNlWCA9IGV2LnggLSBib3VuZHMubGVmdDtcclxuICAgIGxldCBtb3VzZVkgPSBldi55IC0gYm91bmRzLnRvcDtcclxuICAgIGxldCBjb2xsaWRlYWJsZTogQ29sbGlkZWFibGUgPSBnZXRDb2xsaWRpbmdFbnRpdHkobW91c2VYLCBtb3VzZVkpO1xyXG4gICAgaWYgKGNvbGxpZGVhYmxlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBjb2xsaWRlYWJsZS5pc01vdXNlRG93bmVkID0gdHJ1ZTtcclxuICAgICAgICBjdXJyZW50TW91c2VEb3duZWQgPSBjb2xsaWRlYWJsZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY3VycmVudE1vdXNlRG93bmVkID0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG59XHJcblxyXG5jYW52YXMub25tb3VzZXVwID0gKGV2OiBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICBsZXQgYm91bmRzOiBET01SZWN0ID0gY2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgbGV0IG1vdXNlWCA9IGV2LnggLSBib3VuZHMubGVmdDtcclxuICAgIGxldCBtb3VzZVkgPSBldi55IC0gYm91bmRzLnRvcDtcclxuICAgIGxldCBjb2xsaWRlYWJsZTogQ29sbGlkZWFibGUgPSBnZXRDb2xsaWRpbmdFbnRpdHkobW91c2VYLCBtb3VzZVkpO1xyXG4gICAgaWYgKGNvbGxpZGVhYmxlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBpZiAoY29sbGlkZWFibGUuaXNNb3VzZURvd25lZCkge1xyXG4gICAgICAgICAgICBjb2xsaWRlYWJsZS5vbkNsaWNrKGV2LnRpbWVTdGFtcCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKGN1cnJlbnRNb3VzZURvd25lZCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgY3VycmVudE1vdXNlRG93bmVkLmlzTW91c2VEb3duZWQgPSBmYWxzZTtcclxuICAgIH1cclxufVxyXG5cclxubGV0IHByZXZpb3VzVGltZU1pbGxpczogbnVtYmVyO1xyXG5sZXQgcHJldmlvdXNIb3ZlcmVkOiBDb2xsaWRlYWJsZTtcclxubGV0IGN1cnJlbnRNb3VzZURvd25lZDogQ29sbGlkZWFibGU7XHJcbmxldCBsYXN0V29yZEZpbmlzaFRpbWVNaWxsaXM6IG51bWJlcjtcclxuXHJcbndpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZHJhdyk7XHJcblxyXG5mdW5jdGlvbiBkcmF3KGN1cnJlbnRUaW1lTWlsbGlzOiBudW1iZXIpIHtcclxuICAgIGxldCBlbGFwc2VkVGltZU1pbGxpczogbnVtYmVyID0gMDtcclxuICAgIGlmIChwcmV2aW91c1RpbWVNaWxsaXMgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGVsYXBzZWRUaW1lTWlsbGlzID0gY3VycmVudFRpbWVNaWxsaXMgLSBwcmV2aW91c1RpbWVNaWxsaXM7XHJcbiAgICB9XHJcblxyXG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xyXG4gICAgY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcclxuICAgIGN0eC5maWxsUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xyXG5cclxuICAgIGlmIChwcmV2aW91c0hvdmVyZWQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHByZXZpb3VzSG92ZXJlZC5pc0hvdmVyZWQgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29sbGlkZWFibGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgbGV0IGlzQ29sbGlkaW5nID0gY29sbGlkZWFibGVzW2ldLmNvbGxpZGUoZy5tb3VzZVgsIGcubW91c2VZKTtcclxuICAgICAgICBpZiAoaXNDb2xsaWRpbmcpIHtcclxuICAgICAgICAgICAgbGV0IGN1cnJlbnRIb3ZlcmVkID0gY29sbGlkZWFibGVzW2ldO1xyXG4gICAgICAgICAgICBjdXJyZW50SG92ZXJlZC5pc0hvdmVyZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICBwcmV2aW91c0hvdmVyZWQgPSBjdXJyZW50SG92ZXJlZDtcclxuICAgICAgICAgICAgYnJlYWs7IC8vIG9ubHkgb25lIHRoaW5nIGNhbiBiZSBob3ZlcmVkIG92ZXIgYXQgYSB0aW1lXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGcubGV0dGVyc1RvVHlwZVJlbWFpbmRlciArPSBlbGFwc2VkVGltZU1pbGxpcyAvIDEwMDAgKiBnLmxldHRlcnNQZXJTZWNvbmQ7XHJcbiAgICBcclxuICAgIC8vIE1ha2UgYSBmaW5pc2hlZCB3b3JkIHN0YXkgb24gc2NyZWVuIGZvciA1MDBtcywgb3IgdW50aWxcclxuICAgIC8vIGFub3RoZXIgbGV0dGVyIGlzIHR5cGVkXHJcbiAgICBpZiAoKFxyXG4gICAgICAgICAgICBsYXN0V29yZEZpbmlzaFRpbWVNaWxsaXMgIT09IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICAmJiAoY3VycmVudFRpbWVNaWxsaXMgLSBsYXN0V29yZEZpbmlzaFRpbWVNaWxsaXMpID4gNTAwXHJcbiAgICAgICAgKSB8fCAoXHJcbiAgICAgICAgICAgIGcubGV0dGVyc1RvVHlwZVJlbWFpbmRlciA+PSAxXHJcbiAgICAgICAgICAgICYmIGN1cnJlbnRTdHJpbmcubGVuZ3RoID49IGcuY3VycmVudFRhcmdldC5sZXR0ZXJzLmxlbmd0aFxyXG4gICAgICAgICkpIHtcclxuICAgICAgICBjdXJyZW50U3RyaW5nID0gW107XHJcbiAgICAgICAgbGFzdFdvcmRGaW5pc2hUaW1lTWlsbGlzID0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyBHZW5lcmF0ZSB0aGUgbmVlZGVkIGNoYXJhY3RlcnMgYW5kIGF3YXJkIGJhbmFuYXNcclxuICAgIHdoaWxlIChnLmxldHRlcnNUb1R5cGVSZW1haW5kZXIgPj0gMSkge1xyXG4gICAgICAgIGcubGV0dGVyc1RvVHlwZVJlbWFpbmRlciAtPSAxO1xyXG4gICAgICAgIGlmIChjaGFyYWN0ZXJzVG9DaG9vc2VGcm9tLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGNoYXJhY3RlciA9IGdldFJhbmRvbUNoYXJhY3RlcigpO1xyXG4gICAgICAgIGN1cnJlbnRTdHJpbmcucHVzaChjaGFyYWN0ZXIpO1xyXG4gICAgICAgIGlmIChjdXJyZW50U3RyaW5nLmxlbmd0aCA+PSBnLmN1cnJlbnRUYXJnZXQubGV0dGVycy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgbGFzdFdvcmRGaW5pc2hUaW1lTWlsbGlzID0gY3VycmVudFRpbWVNaWxsaXM7XHJcbiAgICAgICAgICAgIGxldCBtYXRjaGluZ0xldHRlcnM6IG51bWJlciA9IGNvdW50TWF0Y2hpbmdMZXR0ZXJzKFxyXG4gICAgICAgICAgICAgICAgY3VycmVudFN0cmluZywgZy5jdXJyZW50VGFyZ2V0LmxldHRlcnMpO1xyXG4gICAgICAgICAgICBpZiAobWF0Y2hpbmdMZXR0ZXJzID4gMCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGJhbmFuYXNUb0FkZCA9IChnLmN1cnJlbnRUYXJnZXQucmV3YXJkc1ttYXRjaGluZ0xldHRlcnMgLSAxXVxyXG4gICAgICAgICAgICAgICAgICAgICsgZy5hZGRpdGl2ZUZsYXRCb251cykgKiAoMSArIGcuYWRkaXRpdmVQZXJjZW50Qm9udXMpO1xyXG4gICAgICAgICAgICAgICAgZy5iYW5hbmFzICs9IGJhbmFuYXNUb0FkZDtcclxuICAgICAgICAgICAgICAgIGluY29tZUFjY3VtdWxhdG9yICs9IGJhbmFuYXNUb0FkZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZy5sZXR0ZXJzVG9UeXBlUmVtYWluZGVyID49IDEpIHtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRTdHJpbmcgPSBbXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBEcmF3IHRoZSBjdXJyZW50IHN0cmluZyBvbiBzY3JlZW5cclxuICAgIGN0eC5zYXZlKCk7XHJcbiAgICBjdHguZmlsbFN0eWxlID0gXCJibGFja1wiO1xyXG4gICAgY3R4LmZvbnQgPSBcIjIwcHggQXJpYWxcIjtcclxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBnLmN1cnJlbnRUYXJnZXQubGV0dGVycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGxldCBjaGFyYWN0ZXI6IHN0cmluZztcclxuICAgICAgICBpZiAoaSA+PSBjdXJyZW50U3RyaW5nLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBjaGFyYWN0ZXIgPSBcIl9cIjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjaGFyYWN0ZXIgPSBjdXJyZW50U3RyaW5nW2ldO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjdHguZmlsbFRleHQoXHJcbiAgICAgICAgICAgIGNoYXJhY3RlcixcclxuICAgICAgICAgICAgMTAwICsgMjAgKiBpLFxyXG4gICAgICAgICAgICAyMDBcclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgY3R4LnJlc3RvcmUoKTtcclxuXHJcbiAgICAvLyBDYWxsIHVwZGF0ZSBvbiBldmVyeXRoaW5nIGp1c3QgYmVmb3JlIGRyYXdcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZHJhd2FibGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgdXBkYXRlYWJsZXNbaV0udXBkYXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVXBkYXRlIHRoZSBpbmNvbWUgcGVyIHNlY29uZCBpZiBpdCdzIHRpbWUgdG9cclxuICAgIGxldCBlbGFwc2VkU2luY2VMYXN0SW5jb21lVXBkYXRlID0gY3VycmVudFRpbWVNaWxsaXMgLSBsYXN0SW5jb21lVXBkYXRlVGltZU1pbGxpcztcclxuICAgIGlmIChlbGFwc2VkU2luY2VMYXN0SW5jb21lVXBkYXRlID49IG1pbGxpc1BlckluY29tZVVwZGF0ZSkge1xyXG4gICAgICAgIGxhc3RCYW5hbmFzUGVyU2Vjb25kID0gaW5jb21lQWNjdW11bGF0b3IgLyAoZWxhcHNlZFNpbmNlTGFzdEluY29tZVVwZGF0ZSAvIDEwMDApO1xyXG4gICAgICAgIGluY29tZUFjY3VtdWxhdG9yID0gMDtcclxuICAgICAgICBsYXN0SW5jb21lVXBkYXRlVGltZU1pbGxpcyA9IGN1cnJlbnRUaW1lTWlsbGlzO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIERyYXcgdmFsdWVzIGF0IHRoZSBlbmQgb2YgdGhlIGZyYW1lIHNvIHRoZXkncmUgYXMgdXBcclxuICAgIC8vIHRvIGRhdGUgYXMgdGhleSBjYW4gYmVcclxuICAgIGN0eC5zYXZlKCk7XHJcbiAgICBjdHguZmlsbFN0eWxlID0gXCJibGFja1wiO1xyXG4gICAgY3R4LmZvbnQgPSBcIjIwcHggQXJpYWxcIjtcclxuXHJcbiAgICBjdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcclxuICAgIGN0eC5maWxsVGV4dChiYW5hbmFzUGVyU2Vjb25kKGxhc3RCYW5hbmFzUGVyU2Vjb25kKSwgMTQwLCAzMCk7XHJcbiAgICBjdHguZmlsbFRleHQoYmFuYW5hcyhnLmJhbmFuYXMpLCAxNDAsIDU1KTtcclxuICAgIGN0eC5maWxsVGV4dChtb25rZXlzKGcubW9ua2V5cyksIDE0MCwgODApO1xyXG5cclxuICAgIGN0eC50ZXh0QWxpZ24gPSBcImxlZnRcIjtcclxuICAgIGN0eC5maWxsVGV4dChcIlRhcmdldCBTdHJpbmc6IFwiXHJcbiAgICAgICAgKyBnLmN1cnJlbnRUYXJnZXQuZGlzcGxheVN0cmluZywgMjUwLCAxMjApO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBnLmN1cnJlbnRUYXJnZXQucmV3YXJkcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGxldCByZXdhcmQgPSAoZy5jdXJyZW50VGFyZ2V0LnJld2FyZHNbaV1cclxuICAgICAgICAgICAgKyBnLmFkZGl0aXZlRmxhdEJvbnVzKSAqICgxICsgZy5hZGRpdGl2ZVBlcmNlbnRCb251cyk7XHJcbiAgICAgICAgbGV0IGxpbmUgPSAoaSArIDEpICsgXCI6IFwiICsgYmFuYW5hcyhyZXdhcmQpO1xyXG4gICAgICAgIGN0eC5maWxsVGV4dChsaW5lLCAyODAsIDE0MCArIDIwICogaSk7XHJcbiAgICB9XHJcblxyXG4gICAgY3R4LnRleHRBbGlnbiA9IFwicmlnaHRcIjtcclxuICAgIGN0eC5maWxsVGV4dChcIktleWJvYXJkIEtleXM6XCIsIDE2MCwgMzAwKTtcclxuXHJcbiAgICBjdHgucmVzdG9yZSgpO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZHJhd2FibGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgZHJhd2FibGVzW2ldLmRyYXcoY3VycmVudFRpbWVNaWxsaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByZXZpb3VzVGltZU1pbGxpcyA9IGN1cnJlbnRUaW1lTWlsbGlzO1xyXG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShkcmF3KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0Q29sbGlkaW5nRW50aXR5KHBvaW50WDogbnVtYmVyLCBwb2ludFk6IG51bWJlcikge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2xsaWRlYWJsZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBsZXQgaXNDb2xsaWRpbmcgPSBjb2xsaWRlYWJsZXNbaV0uY29sbGlkZShnLm1vdXNlWCwgZy5tb3VzZVkpO1xyXG4gICAgICAgIGlmIChpc0NvbGxpZGluZykge1xyXG4gICAgICAgICAgICByZXR1cm4gY29sbGlkZWFibGVzW2ldO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFJhbmRvbVN0cmluZyhjaGFyYWN0ZXJzVG9DaG9vc2VGcm9tOiBzdHJpbmdbXSwgbjogbnVtYmVyKSB7XHJcbiAgICBsZXQgcmFuZG9tTnVtYmVycyA9IGdldFJhbmRvbU51bWJlcnMobik7XHJcbiAgICBsZXQgc3RyaW5nID0gXCJcIjtcclxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCByYW5kb21OdW1iZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgc3RyaW5nICs9IGNoYXJhY3RlcnNUb0Nob29zZUZyb21bcmFuZG9tTnVtYmVyc1tpXV07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gc3RyaW5nO1xyXG59XHJcblxyXG4vLyBCdWZmZXIgdGhlIHJhbmRvbSBjaGFyYWN0ZXJzIHdlIGdldCBmcm9tIGNyeXB0byB0byBpbXByb3ZlXHJcbi8vIHRoZSBzcGVlZC4gQWxzbywgSSB0ZXN0ZWQgaXQsIGFuZCBpdCdzIGZhc3RlciB0aGFuIHVzaW5nXHJcbi8vIE1hdGgucmFuZG9tLCBhbmQgaG9wZWZ1bGx5IGhhcyBiZXR0ZXIgcmFuZG9tbmVzc1xyXG5sZXQgYnVmZmVyU2l6ZSA9IDEwMDAwO1xyXG5sZXQgbnVtYmVyQnVmZmVyOiBVaW50MTZBcnJheSA9IGdldFJhbmRvbU51bWJlcnMoYnVmZmVyU2l6ZSk7XHJcbmxldCBudW1iZXJCdWZmZXJJbmRleCA9IC0xO1xyXG5mdW5jdGlvbiBnZXRSYW5kb21DaGFyYWN0ZXIoKSB7XHJcbiAgICBudW1iZXJCdWZmZXJJbmRleCArPSAxO1xyXG4gICAgaWYgKG51bWJlckJ1ZmZlckluZGV4ID49IGJ1ZmZlclNpemUpIHtcclxuICAgICAgICBudW1iZXJCdWZmZXJJbmRleCA9IDA7XHJcbiAgICAgICAgbnVtYmVyQnVmZmVyID0gZ2V0UmFuZG9tTnVtYmVycyhidWZmZXJTaXplKTtcclxuICAgIH1cclxuICAgIGxldCByYW5kb21OdW1iZXIgPSBudW1iZXJCdWZmZXJbbnVtYmVyQnVmZmVySW5kZXhdO1xyXG4gICAgcmV0dXJuIGNoYXJhY3RlcnNUb0Nob29zZUZyb21bcmFuZG9tTnVtYmVyXTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0UmFuZG9tTnVtYmVycyhuOiBudW1iZXIpIHtcclxuICAgIGxldCByYW5kb21OdW1iZXJzID0gbmV3IFVpbnQxNkFycmF5KG4pO1xyXG4gICAgcmFuZG9tTnVtYmVycyA9IGNyeXB0by5nZXRSYW5kb21WYWx1ZXMocmFuZG9tTnVtYmVycyk7XHJcbiAgICByZXR1cm4gcmFuZG9tTnVtYmVycztcclxufVxyXG5cclxuZnVuY3Rpb24gcmdiU3RyaW5nKHJlZDogbnVtYmVyLCBncmVlbjogbnVtYmVyLCBibHVlOiBudW1iZXIpIHtcclxuICAgIHJldHVybiBcInJnYihcIiArIHJlZCArIFwiLFwiICsgZ3JlZW4gKyBcIixcIiArIGJsdWUgKyBcIilcIjtcclxufVxyXG5cclxuZnVuY3Rpb24gYmFuYW5hcyhudW1iZXI6IG51bWJlcikge1xyXG4gICAgbnVtYmVyID0gTWF0aC5yb3VuZChudW1iZXIpO1xyXG4gICAgaWYgKG51bWJlciA9PT0gMSkge1xyXG4gICAgICAgIHJldHVybiBudW1iZXIgKyBcIiBiYW5hbmFcIjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIG51bWJlciArIFwiIGJhbmFuYXNcIjtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbW9ua2V5cyhudW1iZXI6IG51bWJlcikgeyBcclxuICAgIGlmIChudW1iZXIgPT09IDEpIHtcclxuICAgICAgICByZXR1cm4gbnVtYmVyICsgXCIgbW9ua2V5XCI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBudW1iZXIgKyBcIiBtb25rZXlzXCI7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGJhbmFuYXNQZXJTZWNvbmQobnVtYmVyOiBudW1iZXIpIHtcclxuICAgIG51bWJlciA9IE1hdGgucm91bmQobnVtYmVyKTtcclxuICAgIGlmIChudW1iZXIgPT09IDEpIHtcclxuICAgICAgICByZXR1cm4gbnVtYmVyICsgXCIgYmFuYW5hIHBlciBzZWNvbmRcIjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIG51bWJlciArIFwiIGJhbmFuYXMgcGVyIHNlY29uZFwiO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBzb3J0ZWQoYXJyYXk6IGFueVtdLCBjb21wYXJlRm4/OiAoYTogYW55LCBiOiBhbnkpID0+IG51bWJlcikge1xyXG4gICAgcmV0dXJuIGFycmF5LnNsaWNlKCkuc29ydChjb21wYXJlRm4pO1xyXG59XHJcblxyXG5mdW5jdGlvbiByb3VuZFRvTlBsYWNlcyh4OiBudW1iZXIsIG51bVBsYWNlczogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgIGxldCBzY2FsZTogbnVtYmVyID0gTWF0aC5wb3coMTAsIG51bVBsYWNlcyk7XHJcbiAgICByZXR1cm4gTWF0aC5yb3VuZCh4ICogc2NhbGUpIC8gc2NhbGU7XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9