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
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./util */ "./src/util.ts");
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
        // un-disable the current target on selecting a new one
        // for (let j = 0; j < targets.length; j++) {
        //     if (targets[j].displayString === g.currentTarget.displayString) {
        //         targetButtons[j].isDisabled = false;
        //     }
        // }
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
            var matchingLetters = (0,_util__WEBPACK_IMPORTED_MODULE_4__.countMatchingLetters)(currentString, _global__WEBPACK_IMPORTED_MODULE_1__.g.currentTarget.letters);
            if (matchingLetters > 0) {
                var bananasToAdd = _global__WEBPACK_IMPORTED_MODULE_1__.g.currentTarget.rewards[matchingLetters - 1];
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
    _global__WEBPACK_IMPORTED_MODULE_1__.ctx.fillText(monkeys(_global__WEBPACK_IMPORTED_MODULE_1__.g.monkeys), 140, 80);
    _global__WEBPACK_IMPORTED_MODULE_1__.ctx.fillText(bananas(_global__WEBPACK_IMPORTED_MODULE_1__.g.bananas), 140, 55);
    _global__WEBPACK_IMPORTED_MODULE_1__.ctx.fillText(bananasPerSecond(lastBananasPerSecond), 140, 30);
    _global__WEBPACK_IMPORTED_MODULE_1__.ctx.textAlign = "left";
    _global__WEBPACK_IMPORTED_MODULE_1__.ctx.fillText("Target String: "
        + _global__WEBPACK_IMPORTED_MODULE_1__.g.currentTarget.displayString, 250, 120);
    for (var i = 0; i < _global__WEBPACK_IMPORTED_MODULE_1__.g.currentTarget.rewards.length; i++) {
        var line = (i + 1) + ": "
            + bananas(_global__WEBPACK_IMPORTED_MODULE_1__.g.currentTarget.rewards[i]);
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

})();

exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0lBQ3RELE9BQU8sYUFBYSxDQUFDO0FBQ3pCLENBQUM7QUFFRCxTQUFTLFNBQVMsQ0FBQyxHQUFXLEVBQUUsS0FBYSxFQUFFLElBQVk7SUFDdkQsT0FBTyxNQUFNLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxLQUFLLEdBQUcsR0FBRyxHQUFHLElBQUksR0FBRyxHQUFHLENBQUM7QUFDekQsQ0FBQztBQUVELFNBQVMsT0FBTyxDQUFDLE1BQWM7SUFDM0IsSUFBSSxNQUFNLEtBQUssQ0FBQyxFQUFFO1FBQ2QsT0FBTyxNQUFNLEdBQUcsU0FBUyxDQUFDO0tBQzdCO1NBQU07UUFDSCxPQUFPLE1BQU0sR0FBRyxVQUFVLENBQUM7S0FDOUI7QUFDTCxDQUFDO0FBRUQsU0FBUyxPQUFPLENBQUMsTUFBYztJQUMzQixJQUFJLE1BQU0sS0FBSyxDQUFDLEVBQUU7UUFDZCxPQUFPLE1BQU0sR0FBRyxTQUFTLENBQUM7S0FDN0I7U0FBTTtRQUNILE9BQU8sTUFBTSxHQUFHLFVBQVUsQ0FBQztLQUM5QjtBQUNMLENBQUM7QUFFRCxTQUFTLGdCQUFnQixDQUFDLE1BQWM7SUFDcEMsTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDNUIsSUFBSSxNQUFNLEtBQUssQ0FBQyxFQUFFO1FBQ2QsT0FBTyxNQUFNLEdBQUcsb0JBQW9CLENBQUM7S0FDeEM7U0FBTTtRQUNILE9BQU8sTUFBTSxHQUFHLHFCQUFxQixDQUFDO0tBQ3pDO0FBQ0wsQ0FBQztBQUVELFNBQVMsTUFBTSxDQUFDLEtBQVksRUFBRSxTQUFzQztJQUNoRSxPQUFPLEtBQUssQ0FBQyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDekMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4cG9ydHMvLi9zcmMvYnV0dG9uLnRzIiwid2VicGFjazovL2V4cG9ydHMvLi9zcmMvZ2xvYmFsLnRzIiwid2VicGFjazovL2V4cG9ydHMvLi9zcmMvbG9jYWxfc3RvcmFnZS50cyIsIndlYnBhY2s6Ly9leHBvcnRzLy4vc3JjL3NhdmVfZmlsZS50cyIsIndlYnBhY2s6Ly9leHBvcnRzLy4vc3JjL3RhcmdldC50cyIsIndlYnBhY2s6Ly9leHBvcnRzLy4vc3JjL3RhcmdldHMudHMiLCJ3ZWJwYWNrOi8vZXhwb3J0cy8uL3NyYy91dGlsLnRzIiwid2VicGFjazovL2V4cG9ydHMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXhwb3J0cy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhwb3J0cy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4cG9ydHMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leHBvcnRzLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbGxpZGVhYmxlcywgY3R4LCBkcmF3YWJsZXMsIGcsIHVwZGF0ZWFibGVzIH0gZnJvbSBcIi4vZ2xvYmFsXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQnV0dG9uIHtcclxuICAgIHB1YmxpYyBpZDogbnVtYmVyO1xyXG4gICAgcHVibGljIHRvcExlZnRYOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgdG9wTGVmdFk6IG51bWJlcjtcclxuICAgIHB1YmxpYyB3aWR0aDogbnVtYmVyO1xyXG4gICAgcHVibGljIGhlaWdodDogbnVtYmVyO1xyXG4gICAgcHVibGljIGJvdHRvbVJpZ2h0WDogbnVtYmVyO1xyXG4gICAgcHVibGljIGJvdHRvbVJpZ2h0WTogbnVtYmVyO1xyXG4gICAgcHVibGljIHRleHQ6IHN0cmluZztcclxuICAgIHB1YmxpYyBjb2xvcjogc3RyaW5nO1xyXG4gICAgcHVibGljIGhvdmVyZWRDb2xvcjogc3RyaW5nO1xyXG4gICAgcHVibGljIGRpc2FibGVkQ29sb3I6IHN0cmluZyA9IFwiZ3JheVwiO1xyXG4gICAgcHVibGljIGlzSG92ZXJlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHVibGljIGlzRGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHB1YmxpYyBpc01vdXNlRG93bmVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwdWJsaWMgb25DbGljazogKGN1cnJlbnRUaW1lTWlsbGlzPzogbnVtYmVyKSA9PiB2b2lkO1xyXG4gICAgcHVibGljIHVwZGF0ZTogKCkgPT4gdm9pZDtcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoXHJcbiAgICAgICAgdG9wTGVmdFg6IG51bWJlcixcclxuICAgICAgICB0b3BMZWZ0WTogbnVtYmVyLFxyXG4gICAgICAgIHdpZHRoOiBudW1iZXIsXHJcbiAgICAgICAgaGVpZ2h0OiBudW1iZXIsXHJcbiAgICAgICAgdGV4dDogc3RyaW5nLFxyXG4gICAgICAgIGNvbG9yOiBzdHJpbmcsXHJcbiAgICAgICAgaG92ZXJlZENvbG9yOiBzdHJpbmcsXHJcbiAgICAgICAgb25DbGljazogKGN1cnJlbnRUaW1lTWlsbGlzPzogbnVtYmVyKSA9PiB2b2lkLFxyXG4gICAgICAgIHVwZGF0ZTogKCkgPT4gdm9pZCxcclxuICAgICkge1xyXG4gICAgICAgIHRoaXMuaWQgPSBnLmlkQ291bnRlcjtcclxuICAgICAgICBnLmlkQ291bnRlciArPSAxO1xyXG4gICAgICAgIHRoaXMudG9wTGVmdFggPSB0b3BMZWZ0WDtcclxuICAgICAgICB0aGlzLnRvcExlZnRZID0gdG9wTGVmdFk7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMuYm90dG9tUmlnaHRYID0gdG9wTGVmdFggKyB3aWR0aDtcclxuICAgICAgICB0aGlzLmJvdHRvbVJpZ2h0WSA9IHRvcExlZnRZICsgaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMudGV4dCA9IHRleHQ7XHJcbiAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yO1xyXG4gICAgICAgIHRoaXMuaG92ZXJlZENvbG9yID0gaG92ZXJlZENvbG9yO1xyXG4gICAgICAgIHRoaXMub25DbGljayA9IG9uQ2xpY2s7XHJcbiAgICAgICAgdGhpcy51cGRhdGUgPSB1cGRhdGU7XHJcblxyXG4gICAgICAgIGRyYXdhYmxlcy5wdXNoKHRoaXMpO1xyXG4gICAgICAgIGNvbGxpZGVhYmxlcy5wdXNoKHRoaXMpO1xyXG4gICAgICAgIHVwZGF0ZWFibGVzLnB1c2godGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRyYXcoY3VycmVudFRpbWVNaWxsaXM6IG51bWJlcikge1xyXG4gICAgICAgIGxldCB0b3BMZWZ0WCA9IHRoaXMudG9wTGVmdFg7XHJcbiAgICAgICAgbGV0IHRvcExlZnRZID0gdGhpcy50b3BMZWZ0WTtcclxuICAgICAgICBsZXQgd2lkdGggPSB0aGlzLndpZHRoO1xyXG4gICAgICAgIGxldCBoZWlnaHQgPSB0aGlzLmhlaWdodDtcclxuICAgICAgICBsZXQgZm9udFNpemUgPSAxNTtcclxuICAgICAgICBsZXQgY29sb3I6IHN0cmluZztcclxuICAgICAgICBpZiAodGhpcy5pc01vdXNlRG93bmVkXHJcbiAgICAgICAgICAgICYmICF0aGlzLmlzRGlzYWJsZWQpIHtcclxuICAgICAgICAgICAgbGV0IHNocmluayA9IDAuMTtcclxuICAgICAgICAgICAgbGV0IHNocmlua1ggPSB3aWR0aCAqIHNocmluaztcclxuICAgICAgICAgICAgbGV0IHNocmlua1kgPSBoZWlnaHQgKiBzaHJpbms7XHJcbiAgICAgICAgICAgIHdpZHRoIC09IHNocmlua1g7XHJcbiAgICAgICAgICAgIGhlaWdodCAtPSBzaHJpbmtZO1xyXG4gICAgICAgICAgICB0b3BMZWZ0WCArPSBzaHJpbmtYIC8gMjtcclxuICAgICAgICAgICAgdG9wTGVmdFkgKz0gc2hyaW5rWSAvIDI7XHJcbiAgICAgICAgICAgIGZvbnRTaXplICo9ICgxIC0gc2hyaW5rKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuaXNEaXNhYmxlZCkge1xyXG4gICAgICAgICAgICBjb2xvciA9IHRoaXMuZGlzYWJsZWRDb2xvclxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzSG92ZXJlZCkge1xyXG4gICAgICAgICAgICAgICAgY29sb3IgPSB0aGlzLmNvbG9yO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29sb3IgPSB0aGlzLmhvdmVyZWRDb2xvcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY3R4LnNhdmUoKTtcclxuICAgICAgICBjdHguZmlsbFN0eWxlID0gY29sb3I7XHJcbiAgICAgICAgY3R4LmZvbnQgPSBmb250U2l6ZSArIFwicHggQXJpYWxcIjtcclxuICAgICAgICBjdHguZmlsbFJlY3QodG9wTGVmdFgsIHRvcExlZnRZLCB3aWR0aCwgaGVpZ2h0KTtcclxuICAgICAgICBjdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcclxuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJibGFja1wiO1xyXG4gICAgICAgIGN0eC5maWxsVGV4dChcclxuICAgICAgICAgICAgdGhpcy50ZXh0LFxyXG4gICAgICAgICAgICB0b3BMZWZ0WCArIHdpZHRoIC8gMixcclxuICAgICAgICAgICAgdG9wTGVmdFkgKyBoZWlnaHQgLyAyICsgZm9udFNpemUgLyAyLjRcclxuICAgICAgICApO1xyXG4gICAgICAgIGN0eC5yZXN0b3JlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNvbGxpZGUocG9pbnRYOiBudW1iZXIsIHBvaW50WTogbnVtYmVyKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudG9wTGVmdFggPD0gcG9pbnRYXHJcbiAgICAgICAgICAgICYmIHBvaW50WCA8PSB0aGlzLmJvdHRvbVJpZ2h0WFxyXG4gICAgICAgICAgICAmJiB0aGlzLnRvcExlZnRZIDw9IHBvaW50WVxyXG4gICAgICAgICAgICAmJiBwb2ludFkgPD0gdGhpcy5ib3R0b21SaWdodFk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRlbGV0ZSgpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRyYXdhYmxlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZHJhd2FibGVzW2ldLmlkID09PSB0aGlzLmlkKSB7XHJcbiAgICAgICAgICAgICAgICBkcmF3YWJsZXMuc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29sbGlkZWFibGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChjb2xsaWRlYWJsZXNbaV0uaWQgPT09IHRoaXMuaWQpIHtcclxuICAgICAgICAgICAgICAgIGNvbGxpZGVhYmxlcy5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB1cGRhdGVhYmxlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodXBkYXRlYWJsZXNbaV0uaWQgPT09IHRoaXMuaWQpIHtcclxuICAgICAgICAgICAgICAgIHVwZGF0ZWFibGVzLnNwbGljZShpLCAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyB0YXJnZXRzIH0gZnJvbSBcIi4vdGFyZ2V0c1wiO1xyXG5pbXBvcnQgeyBDb2xsaWRlYWJsZSwgRHJhd2FibGUsIFVwZGF0ZWFibGUgfSBmcm9tIFwiLi90eXBlc1wiO1xyXG5cclxuZXhwb3J0IGxldCB3aWR0aDogbnVtYmVyID0gMTAwMDtcclxuZXhwb3J0IGxldCBoZWlnaHQ6IG51bWJlciA9IDcwMDtcclxuZXhwb3J0IGxldCBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcclxuZXhwb3J0IGxldCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xyXG5jYW52YXMud2lkdGggPSB3aWR0aDtcclxuY2FudmFzLmhlaWdodCA9IGhlaWdodDtcclxuY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuZXhwb3J0IGxldCBkcmF3YWJsZXM6IERyYXdhYmxlW10gPSBbXTtcclxuZXhwb3J0IGxldCBjb2xsaWRlYWJsZXM6IENvbGxpZGVhYmxlW10gPSBbXTtcclxuZXhwb3J0IGxldCB1cGRhdGVhYmxlczogVXBkYXRlYWJsZVtdID0gW107XHJcblxyXG4vLyBQdXQgYW55IGdsb2JhbCB2YXJpYWJsZXMgdGhhdCB5b3Ugd2FudCB0byBiZSBhYmxlIHRvIHJlYXNzaWduIGhlcmVcclxuZXhwb3J0IGxldCBnID0ge1xyXG4gICAgYmFuYW5hczogMCxcclxuICAgIG1vbmtleXM6IDAsXHJcbiAgICBsZXR0ZXJzVG9UeXBlUmVtYWluZGVyOiAwLFxyXG4gICAgbGV0dGVyc1BlclNlY29uZDogMCxcclxuICAgIG1vdXNlWDogLTEsXHJcbiAgICBtb3VzZVk6IC0xLFxyXG4gICAgaWRDb3VudGVyOiAwLFxyXG4gICAgY3VycmVudFRhcmdldEluZGV4OiAwLFxyXG4gICAgY3VycmVudFRhcmdldDogdGFyZ2V0c1swXSxcclxuICAgIGtleWJvYXJkS2V5czogW1wiQVwiXSxcclxuICAgIG1heEtleWJvYXJkS2V5czogMSxcclxuICAgIHRhcmdldE93bmVkOiBbdHJ1ZV0sXHJcbn07XHJcblxyXG5mb3IobGV0IGkgPSAxOyBpIDwgdGFyZ2V0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgZy50YXJnZXRPd25lZC5wdXNoKGZhbHNlKTtcclxufVxyXG4iLCJpbXBvcnQgeyBnIH0gZnJvbSBcIi4vZ2xvYmFsXCI7XHJcbmltcG9ydCB7IFNhdmVGaWxlLCBzYXZlRmlsZVZlcnNpb24gfSBmcm9tIFwiLi9zYXZlX2ZpbGVcIjtcclxuaW1wb3J0IHsgdGFyZ2V0cyB9IGZyb20gXCIuL3RhcmdldHNcIjtcclxuXHJcbmxldCBzYXZlS2V5OiBzdHJpbmcgPSBcImluZmluZS1tb25rZXktaWRsZS1nYW1lXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2F2ZSgpIHtcclxuICAgIGxldCBzYXZlRmlsZTogU2F2ZUZpbGUgPSBnZXRTYXZlRmlsZSgpO1xyXG4gICAgbGV0IHNhdmVGaWxlU3RyaW5nOiBzdHJpbmcgPSBKU09OLnN0cmluZ2lmeShzYXZlRmlsZSk7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShzYXZlS2V5LCBzYXZlRmlsZVN0cmluZyk7XHJcbiAgICBjb25zb2xlLmxvZyhcIlNhdmVkIVwiKTtcclxuICAgIGNvbnNvbGUubG9nKHNhdmVGaWxlU3RyaW5nKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0U2F2ZUZpbGUoKTogU2F2ZUZpbGUge1xyXG4gICAgcmV0dXJuIG5ldyBTYXZlRmlsZShcclxuICAgICAgICBnLmJhbmFuYXMsXHJcbiAgICAgICAgZy5tb25rZXlzLFxyXG4gICAgICAgIGcuY3VycmVudFRhcmdldEluZGV4LFxyXG4gICAgICAgIGcua2V5Ym9hcmRLZXlzLFxyXG4gICAgICAgIGcubWF4S2V5Ym9hcmRLZXlzLFxyXG4gICAgICAgIGcudGFyZ2V0T3duZWQsXHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbG9hZEZyb21Mb2NhbFN0b3JhZ2UoKSB7XHJcbiAgICBsZXQgc2F2ZUZpbGVTdHJpbmcgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShzYXZlS2V5KTtcclxuICAgIGlmIChzYXZlRmlsZVN0cmluZyA9PT0gdW5kZWZpbmVkXHJcbiAgICAgICAgfHwgc2F2ZUZpbGVTdHJpbmcgPT09IG51bGwpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiQ291bGQgbm90IGxvYWQgc2F2ZVwiKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiU2F2ZSBmb3VuZFwiLCBzYXZlRmlsZVN0cmluZyk7XHJcbiAgICB9XHJcbiAgICBsb2FkRnJvbVN0cmluZyhzYXZlRmlsZVN0cmluZyk7XHJcbn1cclxuXHJcbi8vIEkgc2hvdWxkIGJlIGFibGUgdG8gY2FsbCB0aGlzIHdoZXRoZXIgSSdtIGxvYWRpbmcgZnJvbVxyXG4vLyBsb2NhbCBzdG9yYWdlIG9yIGZyb20gYSB1c2VyLXByb3ZpZGVkIHNhdmUgaW1wb3J0IHN0cmluZ1xyXG5leHBvcnQgZnVuY3Rpb24gbG9hZEZyb21TdHJpbmcoaW1wb3J0U3RyaW5nOiBzdHJpbmcpIHtcclxuICAgIGxldCBsb2FkZWRTYXZlOiBTYXZlRmlsZSA9IEpTT04ucGFyc2UoaW1wb3J0U3RyaW5nKTtcclxuICAgIGlmIChsb2FkZWRTYXZlID09PSB1bmRlZmluZWRcclxuICAgICAgICB8fCBsb2FkZWRTYXZlID09PSBudWxsKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkZhaWxlZCB0byBsb2FkIHNhdmUgZnJvbSBsb2NhbCBzdG9yYWdlOiBKU09OIHBhcnNlIGVycm9yXCIpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH0gZWxzZSBpZiAobG9hZGVkU2F2ZS52ZXJzaW9uICE9PSBzYXZlRmlsZVZlcnNpb24pIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIGxvYWQgc2F2ZSBmcm9tIGxvY2FsIHN0b3JhZ2U6IFZlcnNpb24gbWlzbWF0Y2hcIik7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2coXCJMb2FkZWQgc2F2ZVwiKTtcclxuICAgIGNvbnNvbGUubG9nKGxvYWRlZFNhdmUpO1xyXG4gICAgZy5iYW5hbmFzID0gbG9hZGVkU2F2ZS5iYW5hbmFzO1xyXG4gICAgZy5tb25rZXlzID0gbG9hZGVkU2F2ZS5tb25rZXlzO1xyXG4gICAgZy5sZXR0ZXJzUGVyU2Vjb25kID0gZy5tb25rZXlzO1xyXG4gICAgZy5jdXJyZW50VGFyZ2V0SW5kZXggPSBsb2FkZWRTYXZlLnRhcmdldEluZGV4O1xyXG4gICAgZy5jdXJyZW50VGFyZ2V0ID0gdGFyZ2V0c1tsb2FkZWRTYXZlLnRhcmdldEluZGV4XTtcclxuICAgIGcua2V5Ym9hcmRLZXlzID0gbG9hZGVkU2F2ZS5rZXlib2FyZEtleXM7XHJcbiAgICBnLm1heEtleWJvYXJkS2V5cyA9IGxvYWRlZFNhdmUubWF4S2V5Ym9hcmRLZXlzO1xyXG4gICAgZy50YXJnZXRPd25lZCA9IGxvYWRlZFNhdmUudGFyZ2V0T3duZWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBleHBvcnRTYXZlVG9TdHJpbmcoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShnZXRTYXZlRmlsZSgpKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGVyYXNlU2F2ZSgpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiU2F2ZSBFcmFzZWQhXCIpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oc2F2ZUtleSk7XHJcbn1cclxuIiwiZXhwb3J0IGxldCBzYXZlRmlsZVZlcnNpb246IG51bWJlciA9IDI7XHJcblxyXG5leHBvcnQgY2xhc3MgU2F2ZUZpbGUge1xyXG4gICAgLy8gVXNlIHRoZSB2ZXJzaW9uIG51bWJlciB0byBkZXRlY3QgYW5kIGludmFsaWRhdGVcclxuICAgIC8vIG9sZCBhbmQgaW5jb21wYXRpYmxlIHNhdmUgZmlsZXNcclxuICAgIHB1YmxpYyB2ZXJzaW9uOiBudW1iZXI7XHJcblxyXG4gICAgcHVibGljIGJhbmFuYXM6IG51bWJlcjtcclxuICAgIHB1YmxpYyBtb25rZXlzOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgdGFyZ2V0SW5kZXg6IG51bWJlcjtcclxuICAgIHB1YmxpYyBrZXlib2FyZEtleXM6IHN0cmluZ1tdO1xyXG4gICAgcHVibGljIG1heEtleWJvYXJkS2V5czogbnVtYmVyO1xyXG4gICAgcHVibGljIHRhcmdldE93bmVkOiBib29sZWFuW107XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIGJhbmFuYXM6IG51bWJlcixcclxuICAgICAgICBtb25rZXlzOiBudW1iZXIsXHJcbiAgICAgICAgdGFyZ2V0SW5kZXg6IG51bWJlcixcclxuICAgICAgICBrZXlib2FyZEtleXM6IHN0cmluZ1tdLFxyXG4gICAgICAgIG1heEtleWJvYXJkS2V5czogbnVtYmVyLFxyXG4gICAgICAgIHRhcmdldE93bmVkOiBib29sZWFuW10sXHJcbiAgICApIHtcclxuICAgICAgICB0aGlzLnZlcnNpb24gPSBzYXZlRmlsZVZlcnNpb247XHJcbiAgICAgICAgdGhpcy5iYW5hbmFzID0gYmFuYW5hcztcclxuICAgICAgICB0aGlzLm1vbmtleXMgPSBtb25rZXlzO1xyXG4gICAgICAgIHRoaXMudGFyZ2V0SW5kZXggPSB0YXJnZXRJbmRleDtcclxuICAgICAgICB0aGlzLmtleWJvYXJkS2V5cyA9IGtleWJvYXJkS2V5cztcclxuICAgICAgICB0aGlzLm1heEtleWJvYXJkS2V5cyA9IG1heEtleWJvYXJkS2V5cztcclxuICAgICAgICB0aGlzLnRhcmdldE93bmVkID0gdGFyZ2V0T3duZWQ7XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIFRhcmdldCB7XHJcbiAgICBwdWJsaWMgbGV0dGVyczogc3RyaW5nW107XHJcbiAgICBwdWJsaWMgZGlzcGxheVN0cmluZzogc3RyaW5nO1xyXG4gICAgcHVibGljIHJld2FyZHM6IG51bWJlcltdO1xyXG4gICAgcHVibGljIHByaWNlOiBudW1iZXI7XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIGxldHRlcnM6IHN0cmluZ1tdLFxyXG4gICAgICAgIGRpc3BsYXlTdHJpbmc6IHN0cmluZyxcclxuICAgICAgICByZXdhcmRzOiBudW1iZXJbXSxcclxuICAgICAgICBwcmljZTogbnVtYmVyLFxyXG4gICAgKSB7XHJcbiAgICAgICAgdGhpcy5sZXR0ZXJzID0gbGV0dGVycztcclxuICAgICAgICB0aGlzLmRpc3BsYXlTdHJpbmcgPSBkaXNwbGF5U3RyaW5nO1xyXG4gICAgICAgIHRoaXMucmV3YXJkcyA9IHJld2FyZHM7XHJcbiAgICAgICAgdGhpcy5wcmljZSA9IHByaWNlO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IFRhcmdldCB9IGZyb20gXCIuL3RhcmdldFwiO1xyXG5cclxuZXhwb3J0IGxldCB0YXJnZXRzOiBUYXJnZXRbXSA9IFtcclxuICAgIG5ldyBUYXJnZXQoXHJcbiAgICAgICAgW1wiQ1wiLCBcIkFcIiwgXCJUXCJdLFxyXG4gICAgICAgIFwiQ0FUXCIsXHJcbiAgICAgICAgWzEsIDgsIDQwXSxcclxuICAgICAgICAwLFxyXG4gICAgKSxcclxuICAgIG5ldyBUYXJnZXQoXHJcbiAgICAgICAgW1wiSFwiLCBcIk9cIiwgXCJPXCIsIFwiVFwiXSxcclxuICAgICAgICBcIkhPT1RcIixcclxuICAgICAgICBbNSwgMTAsIDQwLCAxODBdLFxyXG4gICAgICAgIDIwMDAsXHJcbiAgICApLFxyXG4gICAgbmV3IFRhcmdldChcclxuICAgICAgICBbXCJSXCIsIFwiRVwiLCBcIkZcIiwgXCJFXCIsIFwiUlwiLCBcIkVcIiwgXCJFXCJdLFxyXG4gICAgICAgIFwiUkVGRVJFRVwiLFxyXG4gICAgICAgIFs1LCA1LCA1LCAyMCwgNDAwLCAyNDAwLCAxNTAwMF0sXHJcbiAgICAgICAgMzAwMDAsXHJcbiAgICApLFxyXG4gICAgLy8gbmV3IFRhcmdldChcclxuICAgIC8vICAgICBbXSxcclxuICAgIC8vICAgICBcIlwiLFxyXG4gICAgLy8gICAgIFtdLFxyXG4gICAgLy8gICAgIDAsXHJcbiAgICAvLyApLFxyXG5dO1xyXG4iLCJleHBvcnQgZnVuY3Rpb24gY291bnRNYXRjaGluZ0xldHRlcnMoczE6IHN0cmluZ1tdLCBzMjogc3RyaW5nW10pIHtcclxuICAgIGxldCBtYXRjaGluZyA9IDA7XHJcbiAgICBsZXQgbWluTGVuZ3RoID0gTWF0aC5taW4oczEubGVuZ3RoLCBzMi5sZW5ndGgpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtaW5MZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmIChzMVtpXSA9PT0gczJbaV0pIHtcclxuICAgICAgICAgICAgbWF0Y2hpbmcrKztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbWF0Y2hpbmc7XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBUT0RPOlxyXG4vLyBBdXRvLXNhdmUgZXZlcnkgMTAgc2Vjb25kc1xyXG4vLyBNYWtlIHRoZSBlcmFzZSBzYXZlIGJ1dHRvbiByZXN0YXJ0IHRoZSBnYW1lIGFzIHdlbGxcclxuLy8gUHJldmVudCBjYXRjaHVwIGxhZyBhZnRlciB0YWItb3V0XHJcbi8vIEF1dG8tY2FsY3VsYXRlIGF2ZXJhZ2UgYmFuYW5hcyBwZXIgd29yZFxyXG4vLyBnZXQgcmlkIG9mIGNvZGUgcmVwZWF0cyBvZiBpZiAoYnV0dG9uLmlzRGlzYWJsZWQpIHtyZXR1cm47fVxyXG5cclxuLy8gVGhlIFVJIGlzIGEgY29tcGxldGUgbWVzcyFcclxuLy8gVGhlIHNhdmUgc2hvdWxkIGJlIGVuY3J5cHRlZFxyXG4vLyBUaGUgZXJhc2Ugc2F2ZSBidXR0b24gc2hvdWxkIGhhdmUgYSBjb25maXJtYXRpb24gc3RlcFxyXG4vLyBUaGUgZXJhc2Ugc2F2ZSBidXR0b24gc2hvdWxkIGFsc28gcmVzZXQgdGhlIGdhbWUgKHByb2JhYmx5IHdpbGwgcmVuYW1lIHRoZSBidXR0b24pXHJcbi8vIFRoZXJlIHNob3VsZCBiZSBhbiBpbXBvcnQvZXhwb3J0IG9wdGlvbiB0byBsZXQgdGhlIHBsYXllciBiYWNrIHVwIHRoZWlyIHNhdmVcclxuLy8gVGhlcmUgYXJlIGJhbGFuY2UgaXNzdWVzXHJcbi8vIFRoZXJlIHNob3VsZCBiZSB1cGdyYWRlc1xyXG4vLyBhZGp1c3RhYmxlIHVwZGF0ZSByYXRlIGZvciBiYW5hbmFzIHBlciBzZWNvbmRcclxuLy8gY29tcHJlc3NlZCBub3RhdGlvbiBmb3IgbGFyZ2UgbnVtYmVyc1xyXG5cclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIi4vYnV0dG9uXCI7XHJcbmltcG9ydCB7IGNhbnZhcywgY29sbGlkZWFibGVzLCBjdHgsIGRyYXdhYmxlcywgZywgdXBkYXRlYWJsZXMgfSBmcm9tIFwiLi9nbG9iYWxcIjtcclxuaW1wb3J0IHsgZXJhc2VTYXZlLCBsb2FkRnJvbUxvY2FsU3RvcmFnZSwgc2F2ZSB9IGZyb20gXCIuL2xvY2FsX3N0b3JhZ2VcIjtcclxuaW1wb3J0IHsgdGFyZ2V0cyB9IGZyb20gXCIuL3RhcmdldHNcIjtcclxuaW1wb3J0IHsgZG93bmxvYWQsIGdlbmVyYXRlUGVybXV0YXRpb25zIH0gZnJvbSBcIi4vdGVzdF9wZXJtdXRhdGlvbnNcIjtcclxuaW1wb3J0IHsgQ29sbGlkZWFibGUgfSBmcm9tIFwiLi90eXBlc1wiO1xyXG5pbXBvcnQgeyBjb3VudE1hdGNoaW5nTGV0dGVycyB9IGZyb20gXCIuL3V0aWxcIjtcclxuXHJcbi8vIGxldCByZXBvcnQxID0gZ2VuZXJhdGVQZXJtdXRhdGlvbnMoXHJcbi8vICAgICBbXCJIXCIsIFwiT1wiLCBcIlRcIl0sXHJcbi8vICAgICBbXCJIXCIsIFwiT1wiLCBcIk9cIiwgXCJUXCJdLFxyXG4vLyApO1xyXG4vLyBkb3dubG9hZChcImhvdC1ob290LXBlcm11dGF0aW9ucy5jc3ZcIiwgcmVwb3J0MSk7XHJcblxyXG4vLyBsZXQgcmVwb3J0MiA9IGdlbmVyYXRlUGVybXV0YXRpb25zKFxyXG4vLyAgICAgW1wiSFwiLCBcIk9cIiwgXCJPXCIsIFwiVFwiXSxcclxuLy8gICAgIFtcIkhcIiwgXCJPXCIsIFwiT1wiLCBcIlRcIl0sXHJcbi8vICk7XHJcbi8vIGRvd25sb2FkKFwiaG9vdC1ob290LXBlcm11dGF0aW9ucy5jc3ZcIiwgcmVwb3J0Mik7XHJcblxyXG5sb2FkRnJvbUxvY2FsU3RvcmFnZSgpO1xyXG5cclxubGV0IGJ1dHRvbkNvbG9yOiBzdHJpbmcgPSByZ2JTdHJpbmcoMjAwLCAyMDAsIDI1NSk7XHJcbmxldCBidXR0b25Ib3ZlckNvbG9yOiBzdHJpbmcgPSByZ2JTdHJpbmcoMTgwLCAxODAsIDIzMCk7XHJcbmxldCBlcmFzZUJ1dHRvbkNvbG9yOiBzdHJpbmcgPSByZ2JTdHJpbmcoMjU1LCA1MCwgNTApO1xyXG5sZXQgZXJhc2VCdXR0b25Ib3ZlckNvbG9yOiBzdHJpbmcgPSByZ2JTdHJpbmcoMjI1LCAyMCwgMjApO1xyXG5cclxuLy8gTWFrZSBidXR0b25zIG91dCBvZiBhbGwgcG9zc2libGUga2V5Ym9hcmQga2V5c1xyXG4vLyBsZXQgYWxsS2V5Ym9hcmRLZXlzID0gW1wiIFwiLCBcIkFcIixcIkJcIixcIkNcIixcIkRcIixcIkVcIixcIkZcIixcIkdcIixcIkhcIixcIklcIixcIkpcIixcIktcIixcIkxcIixcIk1cIixcIk5cIixcIk9cIixcIlBcIixcIlFcIixcIlJcIixcIlNcIixcIlRcIixcIlVcIixcIlZcIixcIldcIixcIlhcIixcIllcIixcIlpcIl07XHJcbmxldCBhbGxLZXlib2FyZEtleXMgPSBbXCLijrVcIiwgXCJBXCIsXCJCXCIsXCJDXCIsXCJEXCIsXCJFXCIsXCJGXCIsXCJHXCIsXCJIXCIsXCJJXCIsXCJKXCIsXCJLXCIsXCJMXCIsXCJNXCIsXCJOXCIsXCJPXCIsXCJQXCIsXCJRXCIsXCJSXCIsXCJTXCIsXCJUXCIsXCJVXCIsXCJWXCIsXCJXXCIsXCJYXCIsXCJZXCIsXCJaXCJdO1xyXG5mb3IgKGxldCBpID0gMDsgaSA8IGFsbEtleWJvYXJkS2V5cy5sZW5ndGg7IGkrKykge1xyXG4gICAgbGV0IGtleSA9IGFsbEtleWJvYXJkS2V5c1tpXTtcclxuICAgIGxldCBidXR0b24gPSBuZXcgQnV0dG9uKFxyXG4gICAgICAgIDQwICsgMzAgKiBpLFxyXG4gICAgICAgIDQ1MCxcclxuICAgICAgICAyNSxcclxuICAgICAgICAyNSxcclxuICAgICAgICBrZXksXHJcbiAgICAgICAgYnV0dG9uQ29sb3IsXHJcbiAgICAgICAgYnV0dG9uSG92ZXJDb2xvcixcclxuICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChidXR0b24uaXNEaXNhYmxlZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNyZWF0ZUN1cnJlbnRLZXlib2FyZEtleUJ1dHRvbihnLmtleWJvYXJkS2V5cy5sZW5ndGgsIGtleSk7XHJcbiAgICAgICAgICAgIGcua2V5Ym9hcmRLZXlzLnB1c2goa2V5KTtcclxuICAgICAgICAgICAgdXBkYXRlQ2hhcmFjdGVyc1RvQ2hvb3NlRnJvbSgpO1xyXG4gICAgICAgICAgICBjdXJyZW50U3RyaW5nID0gW107XHJcbiAgICAgICAgfSxcclxuICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChnLmtleWJvYXJkS2V5cy5sZW5ndGggPCBnLm1heEtleWJvYXJkS2V5cykge1xyXG4gICAgICAgICAgICAgICAgYnV0dG9uLmlzRGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGJ1dHRvbi5pc0Rpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICApO1xyXG59XHJcblxyXG5sZXQgY2hhcmFjdGVyc1RvQ2hvb3NlRnJvbTogc3RyaW5nW107XHJcbmxldCByYW5kb21OdW1iZXJTaXplID0gNjU1MzY7XHJcbnVwZGF0ZUNoYXJhY3RlcnNUb0Nob29zZUZyb20oKTtcclxubGV0IGtleWJvYXJkS2V5QnV0dG9uczogQnV0dG9uW10gPSBbXVxyXG5cclxuZm9yIChsZXQgaSA9IDA7IGkgPCBnLmtleWJvYXJkS2V5cy5sZW5ndGg7IGkrKykge1xyXG4gICAgY3JlYXRlQ3VycmVudEtleWJvYXJkS2V5QnV0dG9uKGksIGcua2V5Ym9hcmRLZXlzW2ldKTtcclxufVxyXG5cclxuLy8gTWFrZSBhIGJ1dHRvbiBvdXQgb2YgdGhlIGEga2V5Ym9hcmQga2V5IHNvIHlvdVxyXG4vLyBjYW4gY2xpY2sgdG8gcmVtb3ZlIGl0IGZyb20geW91ciBrZXlib2FyZC5cclxuLy8gaSBpcyB0aGUgaW5kZXggaW4gdGhlIGtleWJvYXJkS2V5cyBhcnJheVxyXG4vLyBPbiBjbGljayBpdCBkZWxldGVzIGFuZCByZW1ha2VzIGFsbCB0aGUgYnV0dG9uc1xyXG5mdW5jdGlvbiBjcmVhdGVDdXJyZW50S2V5Ym9hcmRLZXlCdXR0b24oaTogbnVtYmVyLCBrZXk6IHN0cmluZykge1xyXG4gICAgbGV0IGJ1dHRvbiA9IG5ldyBCdXR0b24oXHJcbiAgICAgICAgMTgwICsgMzAgKiBpLFxyXG4gICAgICAgIDI4MCxcclxuICAgICAgICAyNSxcclxuICAgICAgICAyNSxcclxuICAgICAgICBrZXksXHJcbiAgICAgICAgYnV0dG9uQ29sb3IsXHJcbiAgICAgICAgYnV0dG9uSG92ZXJDb2xvcixcclxuICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChidXR0b24uaXNEaXNhYmxlZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGcua2V5Ym9hcmRLZXlzLnNwbGljZShpLCAxKTtcclxuICAgICAgICAgICAgdXBkYXRlQ2hhcmFjdGVyc1RvQ2hvb3NlRnJvbSgpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGtleWJvYXJkS2V5QnV0dG9ucy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAga2V5Ym9hcmRLZXlCdXR0b25zW2pdLmRlbGV0ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgZy5rZXlib2FyZEtleXMubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBrZXkgPSBnLmtleWJvYXJkS2V5c1tqXTtcclxuICAgICAgICAgICAgICAgIGNyZWF0ZUN1cnJlbnRLZXlib2FyZEtleUJ1dHRvbihqLCBrZXkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGN1cnJlbnRTdHJpbmcgPSBbXTtcclxuICAgICAgICB9LFxyXG4gICAgICAgICgpID0+IHt9LFxyXG4gICAgKTtcclxuICAgIGtleWJvYXJkS2V5QnV0dG9ucy5wdXNoKGJ1dHRvbik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZUNoYXJhY3RlcnNUb0Nob29zZUZyb20oKSB7XHJcbiAgICBjaGFyYWN0ZXJzVG9DaG9vc2VGcm9tID0gW107XHJcbiAgICBpZiAoZy5rZXlib2FyZEtleXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByYW5kb21OdW1iZXJTaXplOyBpKyspIHtcclxuICAgICAgICBjaGFyYWN0ZXJzVG9DaG9vc2VGcm9tLnB1c2goXHJcbiAgICAgICAgICAgIGcua2V5Ym9hcmRLZXlzW2kgJSBnLmtleWJvYXJkS2V5cy5sZW5ndGhdXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxubGV0IGN1cnJlbnRTdHJpbmc6IHN0cmluZ1tdID0gW107XHJcblxyXG5sZXQgdGFyZ2V0QnV0dG9uczogQnV0dG9uW10gPSBbXTtcclxuZm9yIChsZXQgaSA9IDA7IGkgPCB0YXJnZXRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBsZXQgYnV0dG9uVGV4dDogc3RyaW5nID0gdGFyZ2V0c1tpXS5kaXNwbGF5U3RyaW5nO1xyXG4gICAgaWYgKCFnLnRhcmdldE93bmVkW2ldKSB7XHJcbiAgICAgICAgYnV0dG9uVGV4dCArPSBcIiBcIiArIHRhcmdldHNbaV0ucHJpY2U7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGJ1dHRvbiA9IG5ldyBCdXR0b24oXHJcbiAgICAgICAgNTAwLFxyXG4gICAgICAgIDUwICsgMzUgKiBpLFxyXG4gICAgICAgIDgwLFxyXG4gICAgICAgIDMwLFxyXG4gICAgICAgIGJ1dHRvblRleHQsXHJcbiAgICAgICAgYnV0dG9uQ29sb3IsXHJcbiAgICAgICAgYnV0dG9uSG92ZXJDb2xvcixcclxuICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChidXR0b24uaXNEaXNhYmxlZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghZy50YXJnZXRPd25lZFtpXSkge1xyXG4gICAgICAgICAgICAgICAgZy5iYW5hbmFzIC09IHRhcmdldHNbaV0ucHJpY2U7XHJcbiAgICAgICAgICAgICAgICBidXR0b24udGV4dCA9IHRhcmdldHNbaV0uZGlzcGxheVN0cmluZztcclxuICAgICAgICAgICAgICAgIGcudGFyZ2V0T3duZWRbaV0gPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyB1bi1kaXNhYmxlIHRoZSBjdXJyZW50IHRhcmdldCBvbiBzZWxlY3RpbmcgYSBuZXcgb25lXHJcbiAgICAgICAgICAgIC8vIGZvciAobGV0IGogPSAwOyBqIDwgdGFyZ2V0cy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAvLyAgICAgaWYgKHRhcmdldHNbal0uZGlzcGxheVN0cmluZyA9PT0gZy5jdXJyZW50VGFyZ2V0LmRpc3BsYXlTdHJpbmcpIHtcclxuICAgICAgICAgICAgLy8gICAgICAgICB0YXJnZXRCdXR0b25zW2pdLmlzRGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICAgICAgZy5jdXJyZW50VGFyZ2V0ID0gdGFyZ2V0c1tpXTtcclxuICAgICAgICAgICAgZy5jdXJyZW50VGFyZ2V0SW5kZXggPSBpO1xyXG4gICAgICAgICAgICB0YXJnZXRCdXR0b25zW2ldLmlzRGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0c1tpXS5wcmljZSA+IGcuYmFuYW5hc1xyXG4gICAgICAgICAgICAgICAgICAgICYmICFnLnRhcmdldE93bmVkW2ldXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB8fCB0YXJnZXRzW2ldLmRpc3BsYXlTdHJpbmcgPT09IGcuY3VycmVudFRhcmdldC5kaXNwbGF5U3RyaW5nXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgYnV0dG9uLmlzRGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYnV0dG9uLmlzRGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICApO1xyXG4gICAgdGFyZ2V0QnV0dG9ucy5wdXNoKGJ1dHRvbik7XHJcbn1cclxuXHJcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY2FudmFzKTtcclxuXHJcbmxldCByZWNydWl0UHJpY2UgPSAxMCArIDIgKiBnLm1vbmtleXM7XHJcbmxldCBidXR0b24xID0gbmV3IEJ1dHRvbihcclxuICAgIDEwMCxcclxuICAgIDEwMCxcclxuICAgIDgwLFxyXG4gICAgMzAsXHJcbiAgICBcIlJlY3J1aXQgTW9ua2V5IFwiICsgcmVjcnVpdFByaWNlLFxyXG4gICAgYnV0dG9uQ29sb3IsXHJcbiAgICBidXR0b25Ib3ZlckNvbG9yLFxyXG4gICAgKCkgPT4ge1xyXG4gICAgICAgIGlmIChidXR0b24xLmlzRGlzYWJsZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBnLm1vbmtleXMgKz0gMTtcclxuICAgICAgICBnLmxldHRlcnNQZXJTZWNvbmQgKz0gMTtcclxuICAgICAgICBnLmJhbmFuYXMgLT0gcmVjcnVpdFByaWNlO1xyXG4gICAgICAgIHJlY3J1aXRQcmljZSA9IDEwICsgMiAqIGcubW9ua2V5cztcclxuICAgICAgICBidXR0b24xLnRleHQgPSBcIlJlY3J1aXQgTW9ua2V5IFwiICsgcmVjcnVpdFByaWNlO1xyXG4gICAgfSxcclxuICAgICgpID0+IHtcclxuICAgICAgICBpZiAocmVjcnVpdFByaWNlID4gZy5iYW5hbmFzKSB7XHJcbiAgICAgICAgICAgIGJ1dHRvbjEuaXNEaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYnV0dG9uMS5pc0Rpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuKTtcclxuXHJcbmxldCBsYXN0Q2xpY2tlZFRpbWVNaWxsaXM6IG51bWJlcjtcclxubGV0IGJ1dHRvbjIgPSBuZXcgQnV0dG9uKFxyXG4gICAgMTAwLFxyXG4gICAgMzUwLFxyXG4gICAgODAsXHJcbiAgICAzMCxcclxuICAgIFwiVHlwZVwiLFxyXG4gICAgYnV0dG9uQ29sb3IsXHJcbiAgICBidXR0b25Ib3ZlckNvbG9yLFxyXG4gICAgKGN1cnJlbnRUaW1lTWlsbGlzOiBudW1iZXIpID0+IHtcclxuICAgICAgICBpZiAoY3VycmVudFRpbWVNaWxsaXMgIT09IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICAmJiAoY3VycmVudFRpbWVNaWxsaXMgLSBsYXN0Q2xpY2tlZFRpbWVNaWxsaXMpIDwgNTApIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBnLmxldHRlcnNUb1R5cGVSZW1haW5kZXIgKz0gMTtcclxuICAgICAgICBsYXN0Q2xpY2tlZFRpbWVNaWxsaXMgPSBjdXJyZW50VGltZU1pbGxpcztcclxuICAgIH0sXHJcbiAgICAoKSA9PiB7fVxyXG4pO1xyXG5cclxubGV0IHVwZ3JhZGVLZXlib2FyZFByaWNlID0gTWF0aC5wb3coMTAsIGcubWF4S2V5Ym9hcmRLZXlzICsgMSk7XHJcbmxldCBidXR0b24zID0gbmV3IEJ1dHRvbihcclxuICAgIDI1MCxcclxuICAgIDQwMCxcclxuICAgIDgwLFxyXG4gICAgMzAsXHJcbiAgICBcIlVwZ3JhZGUgS2V5Ym9hcmQgXCIgKyB1cGdyYWRlS2V5Ym9hcmRQcmljZSxcclxuICAgIGJ1dHRvbkNvbG9yLFxyXG4gICAgYnV0dG9uSG92ZXJDb2xvcixcclxuICAgICgpID0+IHtcclxuICAgICAgICBpZiAoYnV0dG9uMy5pc0Rpc2FibGVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZy5iYW5hbmFzIC09IHVwZ3JhZGVLZXlib2FyZFByaWNlO1xyXG4gICAgICAgIGcubWF4S2V5Ym9hcmRLZXlzICs9IDE7XHJcbiAgICAgICAgdXBkYXRlQ2hhcmFjdGVyc1RvQ2hvb3NlRnJvbSgpO1xyXG4gICAgICAgIHVwZ3JhZGVLZXlib2FyZFByaWNlID0gTWF0aC5wb3coMTAsIGcubWF4S2V5Ym9hcmRLZXlzICsgMSk7XHJcbiAgICAgICAgYnV0dG9uMy50ZXh0ID0gXCJVcGdyYWRlIEtleWJvYXJkIFwiICsgdXBncmFkZUtleWJvYXJkUHJpY2U7XHJcbiAgICB9LFxyXG4gICAgKCkgPT4ge1xyXG4gICAgICAgIGlmICh1cGdyYWRlS2V5Ym9hcmRQcmljZSA+IGcuYmFuYW5hcykge1xyXG4gICAgICAgICAgICBidXR0b24zLmlzRGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGJ1dHRvbjMuaXNEaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuKTtcclxuXHJcbmxldCBzYXZlQnV0dG9uOiBCdXR0b24gPSBuZXcgQnV0dG9uKFxyXG4gICAgMTAsXHJcbiAgICA2MDAsXHJcbiAgICAxMDAsXHJcbiAgICAzMCxcclxuICAgIFwiU2F2ZVwiLFxyXG4gICAgYnV0dG9uQ29sb3IsXHJcbiAgICBidXR0b25Ib3ZlckNvbG9yLFxyXG4gICAgKCkgPT4ge3NhdmUoKX0sXHJcbiAgICAoKSA9PiB7fSxcclxuKTtcclxuXHJcbmxldCBlcmFzZUJ1dHRvbjogQnV0dG9uID0gbmV3IEJ1dHRvbihcclxuICAgIDEwLFxyXG4gICAgNjQwLFxyXG4gICAgMTAwLFxyXG4gICAgMzAsXHJcbiAgICBcIkVyYXNlIFNhdmVcIixcclxuICAgIGVyYXNlQnV0dG9uQ29sb3IsXHJcbiAgICBlcmFzZUJ1dHRvbkhvdmVyQ29sb3IsXHJcbiAgICAoKSA9PiB7ZXJhc2VTYXZlKCl9LFxyXG4gICAgKCkgPT4ge30sXHJcbik7XHJcblxyXG5sZXQgaW5jb21lQWNjdW11bGF0b3I6IG51bWJlciA9IDA7XHJcbmxldCBsYXN0SW5jb21lVXBkYXRlVGltZU1pbGxpczogbnVtYmVyID0gcGVyZm9ybWFuY2Uubm93KCk7XHJcbmxldCBtaWxsaXNQZXJJbmNvbWVVcGRhdGU6IG51bWJlciA9IDIwMDA7XHJcbmxldCBsYXN0QmFuYW5hc1BlclNlY29uZDogbnVtYmVyID0gMDtcclxuXHJcbi8vIHN0b3JlIHRoZSBtb3VzZSB4eSBpbiBjYXNlIGl0IGdldHMgZXhlY3V0ZWQgZmFzdGVyIHRoYW5cclxuLy8gb25jZSBldmVyeSBmcmFtZSwgd2hpY2ggd291bGQgYmUgdXNlbGVzcyBzaW5jZSBob3ZlciBpc1xyXG4vLyBoYW5kbGVkIG9ubHkgb25jZSBldmVyeSBmcmFtZVxyXG5jYW52YXMub25tb3VzZW1vdmUgPSAoZXY6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgIGxldCBib3VuZHM6IERPTVJlY3QgPSBjYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICBnLm1vdXNlWCA9IGV2LnggLSBib3VuZHMubGVmdDtcclxuICAgIGcubW91c2VZID0gZXYueSAtIGJvdW5kcy50b3A7XHJcbn07XHJcblxyXG4vLyBhc3N1bWUgZm9yIHNpbXBsaWNpdHkgdGhhdCB5b3UgY2FuJ3QgaGF2ZSB0d28gbW91c2Vkb3duXHJcbi8vIGV2ZW50cyB3aXRob3V0IGEgbW91c2V1cFxyXG5jYW52YXMub25tb3VzZWRvd24gPSAoZXY6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgIGxldCBib3VuZHM6IERPTVJlY3QgPSBjYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICBsZXQgbW91c2VYID0gZXYueCAtIGJvdW5kcy5sZWZ0O1xyXG4gICAgbGV0IG1vdXNlWSA9IGV2LnkgLSBib3VuZHMudG9wO1xyXG4gICAgbGV0IGNvbGxpZGVhYmxlOiBDb2xsaWRlYWJsZSA9IGdldENvbGxpZGluZ0VudGl0eShtb3VzZVgsIG1vdXNlWSk7XHJcbiAgICBpZiAoY29sbGlkZWFibGUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGNvbGxpZGVhYmxlLmlzTW91c2VEb3duZWQgPSB0cnVlO1xyXG4gICAgICAgIGN1cnJlbnRNb3VzZURvd25lZCA9IGNvbGxpZGVhYmxlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjdXJyZW50TW91c2VEb3duZWQgPSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNhbnZhcy5vbm1vdXNldXAgPSAoZXY6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgIGxldCBib3VuZHM6IERPTVJlY3QgPSBjYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICBsZXQgbW91c2VYID0gZXYueCAtIGJvdW5kcy5sZWZ0O1xyXG4gICAgbGV0IG1vdXNlWSA9IGV2LnkgLSBib3VuZHMudG9wO1xyXG4gICAgbGV0IGNvbGxpZGVhYmxlOiBDb2xsaWRlYWJsZSA9IGdldENvbGxpZGluZ0VudGl0eShtb3VzZVgsIG1vdXNlWSk7XHJcbiAgICBpZiAoY29sbGlkZWFibGUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGlmIChjb2xsaWRlYWJsZS5pc01vdXNlRG93bmVkKSB7XHJcbiAgICAgICAgICAgIGNvbGxpZGVhYmxlLm9uQ2xpY2soZXYudGltZVN0YW1wKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoY3VycmVudE1vdXNlRG93bmVkICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBjdXJyZW50TW91c2VEb3duZWQuaXNNb3VzZURvd25lZCA9IGZhbHNlO1xyXG4gICAgfVxyXG59XHJcblxyXG5sZXQgcHJldmlvdXNUaW1lTWlsbGlzOiBudW1iZXI7XHJcbmxldCBwcmV2aW91c0hvdmVyZWQ6IENvbGxpZGVhYmxlO1xyXG5sZXQgY3VycmVudE1vdXNlRG93bmVkOiBDb2xsaWRlYWJsZTtcclxubGV0IGxhc3RXb3JkRmluaXNoVGltZU1pbGxpczogbnVtYmVyO1xyXG5cclxud2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShkcmF3KTtcclxuXHJcbmZ1bmN0aW9uIGRyYXcoY3VycmVudFRpbWVNaWxsaXM6IG51bWJlcikge1xyXG4gICAgbGV0IGVsYXBzZWRUaW1lTWlsbGlzOiBudW1iZXIgPSAwO1xyXG4gICAgaWYgKHByZXZpb3VzVGltZU1pbGxpcyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgZWxhcHNlZFRpbWVNaWxsaXMgPSBjdXJyZW50VGltZU1pbGxpcyAtIHByZXZpb3VzVGltZU1pbGxpcztcclxuICAgIH1cclxuXHJcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XHJcbiAgICBjdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xyXG4gICAgY3R4LmZpbGxSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XHJcblxyXG4gICAgaWYgKHByZXZpb3VzSG92ZXJlZCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgcHJldmlvdXNIb3ZlcmVkLmlzSG92ZXJlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2xsaWRlYWJsZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBsZXQgaXNDb2xsaWRpbmcgPSBjb2xsaWRlYWJsZXNbaV0uY29sbGlkZShnLm1vdXNlWCwgZy5tb3VzZVkpO1xyXG4gICAgICAgIGlmIChpc0NvbGxpZGluZykge1xyXG4gICAgICAgICAgICBsZXQgY3VycmVudEhvdmVyZWQgPSBjb2xsaWRlYWJsZXNbaV07XHJcbiAgICAgICAgICAgIGN1cnJlbnRIb3ZlcmVkLmlzSG92ZXJlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHByZXZpb3VzSG92ZXJlZCA9IGN1cnJlbnRIb3ZlcmVkO1xyXG4gICAgICAgICAgICBicmVhazsgLy8gb25seSBvbmUgdGhpbmcgY2FuIGJlIGhvdmVyZWQgb3ZlciBhdCBhIHRpbWVcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZy5sZXR0ZXJzVG9UeXBlUmVtYWluZGVyICs9IGVsYXBzZWRUaW1lTWlsbGlzIC8gMTAwMCAqIGcubGV0dGVyc1BlclNlY29uZDtcclxuICAgIFxyXG4gICAgLy8gTWFrZSBhIGZpbmlzaGVkIHdvcmQgc3RheSBvbiBzY3JlZW4gZm9yIDUwMG1zLCBvciB1bnRpbFxyXG4gICAgLy8gYW5vdGhlciBsZXR0ZXIgaXMgdHlwZWRcclxuICAgIGlmICgoXHJcbiAgICAgICAgICAgIGxhc3RXb3JkRmluaXNoVGltZU1pbGxpcyAhPT0gdW5kZWZpbmVkXHJcbiAgICAgICAgICAgICYmIChjdXJyZW50VGltZU1pbGxpcyAtIGxhc3RXb3JkRmluaXNoVGltZU1pbGxpcykgPiA1MDBcclxuICAgICAgICApIHx8IChcclxuICAgICAgICAgICAgZy5sZXR0ZXJzVG9UeXBlUmVtYWluZGVyID49IDFcclxuICAgICAgICAgICAgJiYgY3VycmVudFN0cmluZy5sZW5ndGggPj0gZy5jdXJyZW50VGFyZ2V0LmxldHRlcnMubGVuZ3RoXHJcbiAgICAgICAgKSkge1xyXG4gICAgICAgIGN1cnJlbnRTdHJpbmcgPSBbXTtcclxuICAgICAgICBsYXN0V29yZEZpbmlzaFRpbWVNaWxsaXMgPSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIEdlbmVyYXRlIHRoZSBuZWVkZWQgY2hhcmFjdGVycyBhbmQgYXdhcmQgYmFuYW5hc1xyXG4gICAgd2hpbGUgKGcubGV0dGVyc1RvVHlwZVJlbWFpbmRlciA+PSAxKSB7XHJcbiAgICAgICAgZy5sZXR0ZXJzVG9UeXBlUmVtYWluZGVyIC09IDE7XHJcbiAgICAgICAgaWYgKGNoYXJhY3RlcnNUb0Nob29zZUZyb20ubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgY2hhcmFjdGVyID0gZ2V0UmFuZG9tQ2hhcmFjdGVyKCk7XHJcbiAgICAgICAgY3VycmVudFN0cmluZy5wdXNoKGNoYXJhY3Rlcik7XHJcbiAgICAgICAgaWYgKGN1cnJlbnRTdHJpbmcubGVuZ3RoID49IGcuY3VycmVudFRhcmdldC5sZXR0ZXJzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBsYXN0V29yZEZpbmlzaFRpbWVNaWxsaXMgPSBjdXJyZW50VGltZU1pbGxpcztcclxuICAgICAgICAgICAgbGV0IG1hdGNoaW5nTGV0dGVyczogbnVtYmVyID0gY291bnRNYXRjaGluZ0xldHRlcnMoXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50U3RyaW5nLCBnLmN1cnJlbnRUYXJnZXQubGV0dGVycyk7XHJcbiAgICAgICAgICAgIGlmIChtYXRjaGluZ0xldHRlcnMgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgYmFuYW5hc1RvQWRkID0gZy5jdXJyZW50VGFyZ2V0LnJld2FyZHNbbWF0Y2hpbmdMZXR0ZXJzIC0gMV07XHJcbiAgICAgICAgICAgICAgICBnLmJhbmFuYXMgKz0gYmFuYW5hc1RvQWRkO1xyXG4gICAgICAgICAgICAgICAgaW5jb21lQWNjdW11bGF0b3IgKz0gYmFuYW5hc1RvQWRkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChnLmxldHRlcnNUb1R5cGVSZW1haW5kZXIgPj0gMSkge1xyXG4gICAgICAgICAgICAgICAgY3VycmVudFN0cmluZyA9IFtdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIERyYXcgdGhlIGN1cnJlbnQgc3RyaW5nIG9uIHNjcmVlblxyXG4gICAgY3R4LnNhdmUoKTtcclxuICAgIGN0eC5maWxsU3R5bGUgPSBcImJsYWNrXCI7XHJcbiAgICBjdHguZm9udCA9IFwiMjBweCBBcmlhbFwiO1xyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGcuY3VycmVudFRhcmdldC5sZXR0ZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgbGV0IGNoYXJhY3Rlcjogc3RyaW5nO1xyXG4gICAgICAgIGlmIChpID49IGN1cnJlbnRTdHJpbmcubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGNoYXJhY3RlciA9IFwiX1wiO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNoYXJhY3RlciA9IGN1cnJlbnRTdHJpbmdbaV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGN0eC5maWxsVGV4dChcclxuICAgICAgICAgICAgY2hhcmFjdGVyLFxyXG4gICAgICAgICAgICAxMDAgKyAyMCAqIGksXHJcbiAgICAgICAgICAgIDIwMFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgICBjdHgucmVzdG9yZSgpO1xyXG5cclxuICAgIC8vIENhbGwgdXBkYXRlIG9uIGV2ZXJ5dGhpbmcganVzdCBiZWZvcmUgZHJhd1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkcmF3YWJsZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICB1cGRhdGVhYmxlc1tpXS51cGRhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBVcGRhdGUgdGhlIGluY29tZSBwZXIgc2Vjb25kIGlmIGl0J3MgdGltZSB0b1xyXG4gICAgbGV0IGVsYXBzZWRTaW5jZUxhc3RJbmNvbWVVcGRhdGUgPSBjdXJyZW50VGltZU1pbGxpcyAtIGxhc3RJbmNvbWVVcGRhdGVUaW1lTWlsbGlzO1xyXG4gICAgaWYgKGVsYXBzZWRTaW5jZUxhc3RJbmNvbWVVcGRhdGUgPj0gbWlsbGlzUGVySW5jb21lVXBkYXRlKSB7XHJcbiAgICAgICAgbGFzdEJhbmFuYXNQZXJTZWNvbmQgPSBpbmNvbWVBY2N1bXVsYXRvciAvIChlbGFwc2VkU2luY2VMYXN0SW5jb21lVXBkYXRlIC8gMTAwMCk7XHJcbiAgICAgICAgaW5jb21lQWNjdW11bGF0b3IgPSAwO1xyXG4gICAgICAgIGxhc3RJbmNvbWVVcGRhdGVUaW1lTWlsbGlzID0gY3VycmVudFRpbWVNaWxsaXM7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRHJhdyB2YWx1ZXMgYXQgdGhlIGVuZCBvZiB0aGUgZnJhbWUgc28gdGhleSdyZSBhcyB1cFxyXG4gICAgLy8gdG8gZGF0ZSBhcyB0aGV5IGNhbiBiZVxyXG4gICAgY3R4LnNhdmUoKTtcclxuICAgIGN0eC5maWxsU3R5bGUgPSBcImJsYWNrXCI7XHJcbiAgICBjdHguZm9udCA9IFwiMjBweCBBcmlhbFwiO1xyXG5cclxuICAgIGN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xyXG4gICAgY3R4LmZpbGxUZXh0KG1vbmtleXMoZy5tb25rZXlzKSwgMTQwLCA4MCk7XHJcbiAgICBjdHguZmlsbFRleHQoYmFuYW5hcyhnLmJhbmFuYXMpLCAxNDAsIDU1KTtcclxuICAgIGN0eC5maWxsVGV4dChiYW5hbmFzUGVyU2Vjb25kKGxhc3RCYW5hbmFzUGVyU2Vjb25kKSwgMTQwLCAzMCk7XHJcblxyXG4gICAgY3R4LnRleHRBbGlnbiA9IFwibGVmdFwiO1xyXG4gICAgY3R4LmZpbGxUZXh0KFwiVGFyZ2V0IFN0cmluZzogXCJcclxuICAgICAgICArIGcuY3VycmVudFRhcmdldC5kaXNwbGF5U3RyaW5nLCAyNTAsIDEyMCk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGcuY3VycmVudFRhcmdldC5yZXdhcmRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgbGV0IGxpbmUgPSAoaSArIDEpICsgXCI6IFwiXHJcbiAgICAgICAgICAgICsgYmFuYW5hcyhnLmN1cnJlbnRUYXJnZXQucmV3YXJkc1tpXSk7XHJcbiAgICAgICAgY3R4LmZpbGxUZXh0KGxpbmUsIDI4MCwgMTQwICsgMjAgKiBpKTtcclxuICAgIH1cclxuXHJcbiAgICBjdHgudGV4dEFsaWduID0gXCJyaWdodFwiO1xyXG4gICAgY3R4LmZpbGxUZXh0KFwiS2V5Ym9hcmQgS2V5czpcIiwgMTYwLCAzMDApO1xyXG5cclxuICAgIGN0eC5yZXN0b3JlKCk7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkcmF3YWJsZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBkcmF3YWJsZXNbaV0uZHJhdyhjdXJyZW50VGltZU1pbGxpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJldmlvdXNUaW1lTWlsbGlzID0gY3VycmVudFRpbWVNaWxsaXM7XHJcbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKGRyYXcpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRDb2xsaWRpbmdFbnRpdHkocG9pbnRYOiBudW1iZXIsIHBvaW50WTogbnVtYmVyKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbGxpZGVhYmxlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGxldCBpc0NvbGxpZGluZyA9IGNvbGxpZGVhYmxlc1tpXS5jb2xsaWRlKGcubW91c2VYLCBnLm1vdXNlWSk7XHJcbiAgICAgICAgaWYgKGlzQ29sbGlkaW5nKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBjb2xsaWRlYWJsZXNbaV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0UmFuZG9tU3RyaW5nKGNoYXJhY3RlcnNUb0Nob29zZUZyb206IHN0cmluZ1tdLCBuOiBudW1iZXIpIHtcclxuICAgIGxldCByYW5kb21OdW1iZXJzID0gZ2V0UmFuZG9tTnVtYmVycyhuKTtcclxuICAgIGxldCBzdHJpbmcgPSBcIlwiO1xyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHJhbmRvbU51bWJlcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBzdHJpbmcgKz0gY2hhcmFjdGVyc1RvQ2hvb3NlRnJvbVtyYW5kb21OdW1iZXJzW2ldXTtcclxuICAgIH1cclxuICAgIHJldHVybiBzdHJpbmc7XHJcbn1cclxuXHJcbi8vIEJ1ZmZlciB0aGUgcmFuZG9tIGNoYXJhY3RlcnMgd2UgZ2V0IGZyb20gY3J5cHRvIHRvIGltcHJvdmVcclxuLy8gdGhlIHNwZWVkLiBBbHNvLCBJIHRlc3RlZCBpdCwgYW5kIGl0J3MgZmFzdGVyIHRoYW4gdXNpbmdcclxuLy8gTWF0aC5yYW5kb20sIGFuZCBob3BlZnVsbHkgaGFzIGJldHRlciByYW5kb21uZXNzXHJcbmxldCBidWZmZXJTaXplID0gMTAwMDA7XHJcbmxldCBudW1iZXJCdWZmZXI6IFVpbnQxNkFycmF5ID0gZ2V0UmFuZG9tTnVtYmVycyhidWZmZXJTaXplKTtcclxubGV0IG51bWJlckJ1ZmZlckluZGV4ID0gLTE7XHJcbmZ1bmN0aW9uIGdldFJhbmRvbUNoYXJhY3RlcigpIHtcclxuICAgIG51bWJlckJ1ZmZlckluZGV4ICs9IDE7XHJcbiAgICBpZiAobnVtYmVyQnVmZmVySW5kZXggPj0gYnVmZmVyU2l6ZSkge1xyXG4gICAgICAgIG51bWJlckJ1ZmZlckluZGV4ID0gMDtcclxuICAgICAgICBudW1iZXJCdWZmZXIgPSBnZXRSYW5kb21OdW1iZXJzKGJ1ZmZlclNpemUpO1xyXG4gICAgfVxyXG4gICAgbGV0IHJhbmRvbU51bWJlciA9IG51bWJlckJ1ZmZlcltudW1iZXJCdWZmZXJJbmRleF07XHJcbiAgICByZXR1cm4gY2hhcmFjdGVyc1RvQ2hvb3NlRnJvbVtyYW5kb21OdW1iZXJdO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRSYW5kb21OdW1iZXJzKG46IG51bWJlcikge1xyXG4gICAgbGV0IHJhbmRvbU51bWJlcnMgPSBuZXcgVWludDE2QXJyYXkobik7XHJcbiAgICByYW5kb21OdW1iZXJzID0gY3J5cHRvLmdldFJhbmRvbVZhbHVlcyhyYW5kb21OdW1iZXJzKTtcclxuICAgIHJldHVybiByYW5kb21OdW1iZXJzO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZ2JTdHJpbmcocmVkOiBudW1iZXIsIGdyZWVuOiBudW1iZXIsIGJsdWU6IG51bWJlcikge1xyXG4gICAgcmV0dXJuIFwicmdiKFwiICsgcmVkICsgXCIsXCIgKyBncmVlbiArIFwiLFwiICsgYmx1ZSArIFwiKVwiO1xyXG59XHJcblxyXG5mdW5jdGlvbiBiYW5hbmFzKG51bWJlcjogbnVtYmVyKSB7XHJcbiAgICBpZiAobnVtYmVyID09PSAxKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bWJlciArIFwiIGJhbmFuYVwiO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gbnVtYmVyICsgXCIgYmFuYW5hc1wiO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBtb25rZXlzKG51bWJlcjogbnVtYmVyKSB7IFxyXG4gICAgaWYgKG51bWJlciA9PT0gMSkge1xyXG4gICAgICAgIHJldHVybiBudW1iZXIgKyBcIiBtb25rZXlcIjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIG51bWJlciArIFwiIG1vbmtleXNcIjtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gYmFuYW5hc1BlclNlY29uZChudW1iZXI6IG51bWJlcikge1xyXG4gICAgbnVtYmVyID0gTWF0aC5yb3VuZChudW1iZXIpO1xyXG4gICAgaWYgKG51bWJlciA9PT0gMSkge1xyXG4gICAgICAgIHJldHVybiBudW1iZXIgKyBcIiBiYW5hbmEgcGVyIHNlY29uZFwiO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gbnVtYmVyICsgXCIgYmFuYW5hcyBwZXIgc2Vjb25kXCI7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNvcnRlZChhcnJheTogYW55W10sIGNvbXBhcmVGbj86IChhOiBhbnksIGI6IGFueSkgPT4gbnVtYmVyKSB7XHJcbiAgICByZXR1cm4gYXJyYXkuc2xpY2UoKS5zb3J0KGNvbXBhcmVGbik7XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9