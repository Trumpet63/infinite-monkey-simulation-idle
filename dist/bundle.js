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
        || loadedSave.version !== _save_file__WEBPACK_IMPORTED_MODULE_1__.saveFileVersion) {
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
// Add upgrades
// Auto-calculate average bananas per word
// get rid of repeats of if (button.isDisabled) {return;}
// The UI is a complete mess!
// The save should be encrypted
// The erase save button should have a confirmation step
// The erase save button should also reset the game (probably will rename the button)
// The game should auto-save
// There should be an import/export option to let the player back up their save
// You shouldn't have to re-buy previous words
// There are balance issues
// There should be upgrades
// There needs to be something like a bananas per second counter, or something more advanced
// singular "banana" when it's only 1
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
                _global__WEBPACK_IMPORTED_MODULE_1__.g.bananas += _global__WEBPACK_IMPORTED_MODULE_1__.g.currentTarget.rewards[matchingLetters - 1];
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
    // Draw values at the end of the frame so they're as up
    // to date as they can be
    _global__WEBPACK_IMPORTED_MODULE_1__.ctx.save();
    _global__WEBPACK_IMPORTED_MODULE_1__.ctx.fillStyle = "black";
    _global__WEBPACK_IMPORTED_MODULE_1__.ctx.font = "20px Arial";
    _global__WEBPACK_IMPORTED_MODULE_1__.ctx.textAlign = "center";
    _global__WEBPACK_IMPORTED_MODULE_1__.ctx.fillText(monkeys(_global__WEBPACK_IMPORTED_MODULE_1__.g.monkeys), 140, 80);
    _global__WEBPACK_IMPORTED_MODULE_1__.ctx.fillText(bananas(_global__WEBPACK_IMPORTED_MODULE_1__.g.bananas), 140, 55);
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

})();

exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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aUJBQWlCLElBQUksQ0FBQyxDQUFDO0lBQ3ZCLElBQUksaUJBQWlCLElBQUksVUFBVSxFQUFFO1FBQ2pDLGlCQUFpQixHQUFHLENBQUMsQ0FBQztRQUN0QixZQUFZLEdBQUcsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLENBQUM7S0FDL0M7SUFDRCxJQUFJLFlBQVksR0FBRyxZQUFZLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUNuRCxPQUFPLHNCQUFzQixDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQ2hELENBQUM7QUFFRCxTQUFTLGdCQUFnQixDQUFDLENBQVM7SUFDL0IsSUFBSSxhQUFhLEdBQUcsSUFBSSxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdkMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDdEQsT0FBTyxhQUFhLENBQUM7QUFDekIsQ0FBQztBQUVELFNBQVMsU0FBUyxDQUFDLEdBQVcsRUFBRSxLQUFhLEVBQUUsSUFBWTtJQUN2RCxPQUFPLE1BQU0sR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEtBQUssR0FBRyxHQUFHLEdBQUcsSUFBSSxHQUFHLEdBQUcsQ0FBQztBQUN6RCxDQUFDO0FBRUQsU0FBUyxPQUFPLENBQUMsTUFBYztJQUMzQixJQUFJLE1BQU0sS0FBSyxDQUFDLEVBQUU7UUFDZCxPQUFPLE1BQU0sR0FBRyxTQUFTLENBQUM7S0FDN0I7U0FBTTtRQUNILE9BQU8sTUFBTSxHQUFHLFVBQVUsQ0FBQztLQUM5QjtBQUNMLENBQUM7QUFFRCxTQUFTLE9BQU8sQ0FBQyxNQUFjO0lBQzNCLElBQUksTUFBTSxLQUFLLENBQUMsRUFBRTtRQUNkLE9BQU8sTUFBTSxHQUFHLFNBQVMsQ0FBQztLQUM3QjtTQUFNO1FBQ0gsT0FBTyxNQUFNLEdBQUcsVUFBVSxDQUFDO0tBQzlCO0FBQ0wsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4cG9ydHMvLi9zcmMvYnV0dG9uLnRzIiwid2VicGFjazovL2V4cG9ydHMvLi9zcmMvZ2xvYmFsLnRzIiwid2VicGFjazovL2V4cG9ydHMvLi9zcmMvbG9jYWxfc3RvcmFnZS50cyIsIndlYnBhY2s6Ly9leHBvcnRzLy4vc3JjL3NhdmVfZmlsZS50cyIsIndlYnBhY2s6Ly9leHBvcnRzLy4vc3JjL3RhcmdldC50cyIsIndlYnBhY2s6Ly9leHBvcnRzLy4vc3JjL3RhcmdldHMudHMiLCJ3ZWJwYWNrOi8vZXhwb3J0cy8uL3NyYy91dGlsLnRzIiwid2VicGFjazovL2V4cG9ydHMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXhwb3J0cy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhwb3J0cy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4cG9ydHMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leHBvcnRzLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbGxpZGVhYmxlcywgY3R4LCBkcmF3YWJsZXMsIGcsIHVwZGF0ZWFibGVzIH0gZnJvbSBcIi4vZ2xvYmFsXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQnV0dG9uIHtcclxuICAgIHB1YmxpYyBpZDogbnVtYmVyO1xyXG4gICAgcHVibGljIHRvcExlZnRYOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgdG9wTGVmdFk6IG51bWJlcjtcclxuICAgIHB1YmxpYyB3aWR0aDogbnVtYmVyO1xyXG4gICAgcHVibGljIGhlaWdodDogbnVtYmVyO1xyXG4gICAgcHVibGljIGJvdHRvbVJpZ2h0WDogbnVtYmVyO1xyXG4gICAgcHVibGljIGJvdHRvbVJpZ2h0WTogbnVtYmVyO1xyXG4gICAgcHVibGljIHRleHQ6IHN0cmluZztcclxuICAgIHB1YmxpYyBjb2xvcjogc3RyaW5nO1xyXG4gICAgcHVibGljIGhvdmVyZWRDb2xvcjogc3RyaW5nO1xyXG4gICAgcHVibGljIGRpc2FibGVkQ29sb3I6IHN0cmluZyA9IFwiZ3JheVwiO1xyXG4gICAgcHVibGljIGlzSG92ZXJlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHVibGljIGlzRGlzYWJsZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHB1YmxpYyBpc01vdXNlRG93bmVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwdWJsaWMgb25DbGljazogKGN1cnJlbnRUaW1lTWlsbGlzPzogbnVtYmVyKSA9PiB2b2lkO1xyXG4gICAgcHVibGljIHVwZGF0ZTogKCkgPT4gdm9pZDtcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoXHJcbiAgICAgICAgdG9wTGVmdFg6IG51bWJlcixcclxuICAgICAgICB0b3BMZWZ0WTogbnVtYmVyLFxyXG4gICAgICAgIHdpZHRoOiBudW1iZXIsXHJcbiAgICAgICAgaGVpZ2h0OiBudW1iZXIsXHJcbiAgICAgICAgdGV4dDogc3RyaW5nLFxyXG4gICAgICAgIGNvbG9yOiBzdHJpbmcsXHJcbiAgICAgICAgaG92ZXJlZENvbG9yOiBzdHJpbmcsXHJcbiAgICAgICAgb25DbGljazogKGN1cnJlbnRUaW1lTWlsbGlzPzogbnVtYmVyKSA9PiB2b2lkLFxyXG4gICAgICAgIHVwZGF0ZTogKCkgPT4gdm9pZCxcclxuICAgICkge1xyXG4gICAgICAgIHRoaXMuaWQgPSBnLmlkQ291bnRlcjtcclxuICAgICAgICBnLmlkQ291bnRlciArPSAxO1xyXG4gICAgICAgIHRoaXMudG9wTGVmdFggPSB0b3BMZWZ0WDtcclxuICAgICAgICB0aGlzLnRvcExlZnRZID0gdG9wTGVmdFk7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMuYm90dG9tUmlnaHRYID0gdG9wTGVmdFggKyB3aWR0aDtcclxuICAgICAgICB0aGlzLmJvdHRvbVJpZ2h0WSA9IHRvcExlZnRZICsgaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMudGV4dCA9IHRleHQ7XHJcbiAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yO1xyXG4gICAgICAgIHRoaXMuaG92ZXJlZENvbG9yID0gaG92ZXJlZENvbG9yO1xyXG4gICAgICAgIHRoaXMub25DbGljayA9IG9uQ2xpY2s7XHJcbiAgICAgICAgdGhpcy51cGRhdGUgPSB1cGRhdGU7XHJcblxyXG4gICAgICAgIGRyYXdhYmxlcy5wdXNoKHRoaXMpO1xyXG4gICAgICAgIGNvbGxpZGVhYmxlcy5wdXNoKHRoaXMpO1xyXG4gICAgICAgIHVwZGF0ZWFibGVzLnB1c2godGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRyYXcoY3VycmVudFRpbWVNaWxsaXM6IG51bWJlcikge1xyXG4gICAgICAgIGxldCB0b3BMZWZ0WCA9IHRoaXMudG9wTGVmdFg7XHJcbiAgICAgICAgbGV0IHRvcExlZnRZID0gdGhpcy50b3BMZWZ0WTtcclxuICAgICAgICBsZXQgd2lkdGggPSB0aGlzLndpZHRoO1xyXG4gICAgICAgIGxldCBoZWlnaHQgPSB0aGlzLmhlaWdodDtcclxuICAgICAgICBsZXQgZm9udFNpemUgPSAxNTtcclxuICAgICAgICBsZXQgY29sb3I6IHN0cmluZztcclxuICAgICAgICBpZiAodGhpcy5pc01vdXNlRG93bmVkXHJcbiAgICAgICAgICAgICYmICF0aGlzLmlzRGlzYWJsZWQpIHtcclxuICAgICAgICAgICAgbGV0IHNocmluayA9IDAuMTtcclxuICAgICAgICAgICAgbGV0IHNocmlua1ggPSB3aWR0aCAqIHNocmluaztcclxuICAgICAgICAgICAgbGV0IHNocmlua1kgPSBoZWlnaHQgKiBzaHJpbms7XHJcbiAgICAgICAgICAgIHdpZHRoIC09IHNocmlua1g7XHJcbiAgICAgICAgICAgIGhlaWdodCAtPSBzaHJpbmtZO1xyXG4gICAgICAgICAgICB0b3BMZWZ0WCArPSBzaHJpbmtYIC8gMjtcclxuICAgICAgICAgICAgdG9wTGVmdFkgKz0gc2hyaW5rWSAvIDI7XHJcbiAgICAgICAgICAgIGZvbnRTaXplICo9ICgxIC0gc2hyaW5rKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuaXNEaXNhYmxlZCkge1xyXG4gICAgICAgICAgICBjb2xvciA9IHRoaXMuZGlzYWJsZWRDb2xvclxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzSG92ZXJlZCkge1xyXG4gICAgICAgICAgICAgICAgY29sb3IgPSB0aGlzLmNvbG9yO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29sb3IgPSB0aGlzLmhvdmVyZWRDb2xvcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY3R4LnNhdmUoKTtcclxuICAgICAgICBjdHguZmlsbFN0eWxlID0gY29sb3I7XHJcbiAgICAgICAgY3R4LmZvbnQgPSBmb250U2l6ZSArIFwicHggQXJpYWxcIjtcclxuICAgICAgICBjdHguZmlsbFJlY3QodG9wTGVmdFgsIHRvcExlZnRZLCB3aWR0aCwgaGVpZ2h0KTtcclxuICAgICAgICBjdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcclxuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJibGFja1wiO1xyXG4gICAgICAgIGN0eC5maWxsVGV4dChcclxuICAgICAgICAgICAgdGhpcy50ZXh0LFxyXG4gICAgICAgICAgICB0b3BMZWZ0WCArIHdpZHRoIC8gMixcclxuICAgICAgICAgICAgdG9wTGVmdFkgKyBoZWlnaHQgLyAyICsgZm9udFNpemUgLyAyLjRcclxuICAgICAgICApO1xyXG4gICAgICAgIGN0eC5yZXN0b3JlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNvbGxpZGUocG9pbnRYOiBudW1iZXIsIHBvaW50WTogbnVtYmVyKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudG9wTGVmdFggPD0gcG9pbnRYXHJcbiAgICAgICAgICAgICYmIHBvaW50WCA8PSB0aGlzLmJvdHRvbVJpZ2h0WFxyXG4gICAgICAgICAgICAmJiB0aGlzLnRvcExlZnRZIDw9IHBvaW50WVxyXG4gICAgICAgICAgICAmJiBwb2ludFkgPD0gdGhpcy5ib3R0b21SaWdodFk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRlbGV0ZSgpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRyYXdhYmxlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZHJhd2FibGVzW2ldLmlkID09PSB0aGlzLmlkKSB7XHJcbiAgICAgICAgICAgICAgICBkcmF3YWJsZXMuc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29sbGlkZWFibGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChjb2xsaWRlYWJsZXNbaV0uaWQgPT09IHRoaXMuaWQpIHtcclxuICAgICAgICAgICAgICAgIGNvbGxpZGVhYmxlcy5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB1cGRhdGVhYmxlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodXBkYXRlYWJsZXNbaV0uaWQgPT09IHRoaXMuaWQpIHtcclxuICAgICAgICAgICAgICAgIHVwZGF0ZWFibGVzLnNwbGljZShpLCAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyB0YXJnZXRzIH0gZnJvbSBcIi4vdGFyZ2V0c1wiO1xyXG5pbXBvcnQgeyBDb2xsaWRlYWJsZSwgRHJhd2FibGUsIFVwZGF0ZWFibGUgfSBmcm9tIFwiLi90eXBlc1wiO1xyXG5cclxuZXhwb3J0IGxldCB3aWR0aDogbnVtYmVyID0gMTAwMDtcclxuZXhwb3J0IGxldCBoZWlnaHQ6IG51bWJlciA9IDcwMDtcclxuZXhwb3J0IGxldCBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcclxuZXhwb3J0IGxldCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiY2FudmFzXCIpO1xyXG5jYW52YXMud2lkdGggPSB3aWR0aDtcclxuY2FudmFzLmhlaWdodCA9IGhlaWdodDtcclxuY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuZXhwb3J0IGxldCBkcmF3YWJsZXM6IERyYXdhYmxlW10gPSBbXTtcclxuZXhwb3J0IGxldCBjb2xsaWRlYWJsZXM6IENvbGxpZGVhYmxlW10gPSBbXTtcclxuZXhwb3J0IGxldCB1cGRhdGVhYmxlczogVXBkYXRlYWJsZVtdID0gW107XHJcblxyXG4vLyBQdXQgYW55IGdsb2JhbCB2YXJpYWJsZXMgdGhhdCB5b3Ugd2FudCB0byBiZSBhYmxlIHRvIHJlYXNzaWduIGhlcmVcclxuZXhwb3J0IGxldCBnID0ge1xyXG4gICAgYmFuYW5hczogMCxcclxuICAgIG1vbmtleXM6IDAsXHJcbiAgICBsZXR0ZXJzVG9UeXBlUmVtYWluZGVyOiAwLFxyXG4gICAgbGV0dGVyc1BlclNlY29uZDogMCxcclxuICAgIG1vdXNlWDogLTEsXHJcbiAgICBtb3VzZVk6IC0xLFxyXG4gICAgaWRDb3VudGVyOiAwLFxyXG4gICAgY3VycmVudFRhcmdldEluZGV4OiAwLFxyXG4gICAgY3VycmVudFRhcmdldDogdGFyZ2V0c1swXSxcclxuICAgIGtleWJvYXJkS2V5czogW1wiQVwiXSxcclxuICAgIG1heEtleWJvYXJkS2V5czogMSxcclxuICAgIHRhcmdldE93bmVkOiBbdHJ1ZV0sXHJcbn07XHJcblxyXG5mb3IobGV0IGkgPSAxOyBpIDwgdGFyZ2V0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgZy50YXJnZXRPd25lZC5wdXNoKGZhbHNlKTtcclxufVxyXG4iLCJpbXBvcnQgeyBnIH0gZnJvbSBcIi4vZ2xvYmFsXCI7XHJcbmltcG9ydCB7IFNhdmVGaWxlLCBzYXZlRmlsZVZlcnNpb24gfSBmcm9tIFwiLi9zYXZlX2ZpbGVcIjtcclxuaW1wb3J0IHsgdGFyZ2V0cyB9IGZyb20gXCIuL3RhcmdldHNcIjtcclxuXHJcbmxldCBzYXZlS2V5OiBzdHJpbmcgPSBcImluZmluZS1tb25rZXktaWRsZS1nYW1lXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2F2ZSgpIHtcclxuICAgIGxldCBzYXZlRmlsZTogU2F2ZUZpbGUgPSBnZXRTYXZlRmlsZSgpO1xyXG4gICAgbGV0IHNhdmVGaWxlU3RyaW5nOiBzdHJpbmcgPSBKU09OLnN0cmluZ2lmeShzYXZlRmlsZSk7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShzYXZlS2V5LCBzYXZlRmlsZVN0cmluZyk7XHJcbiAgICBjb25zb2xlLmxvZyhcIlNhdmVkIVwiKTtcclxuICAgIGNvbnNvbGUubG9nKHNhdmVGaWxlU3RyaW5nKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0U2F2ZUZpbGUoKTogU2F2ZUZpbGUge1xyXG4gICAgcmV0dXJuIG5ldyBTYXZlRmlsZShcclxuICAgICAgICBnLmJhbmFuYXMsXHJcbiAgICAgICAgZy5tb25rZXlzLFxyXG4gICAgICAgIGcuY3VycmVudFRhcmdldEluZGV4LFxyXG4gICAgICAgIGcua2V5Ym9hcmRLZXlzLFxyXG4gICAgICAgIGcubWF4S2V5Ym9hcmRLZXlzLFxyXG4gICAgICAgIGcudGFyZ2V0T3duZWQsXHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbG9hZEZyb21Mb2NhbFN0b3JhZ2UoKSB7XHJcbiAgICBsZXQgc2F2ZUZpbGVTdHJpbmcgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShzYXZlS2V5KTtcclxuICAgIGlmIChzYXZlRmlsZVN0cmluZyA9PT0gdW5kZWZpbmVkXHJcbiAgICAgICAgfHwgc2F2ZUZpbGVTdHJpbmcgPT09IG51bGwpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiQ291bGQgbm90IGxvYWQgc2F2ZVwiKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiU2F2ZSBmb3VuZFwiLCBzYXZlRmlsZVN0cmluZyk7XHJcbiAgICB9XHJcbiAgICBsb2FkRnJvbVN0cmluZyhzYXZlRmlsZVN0cmluZyk7XHJcbn1cclxuXHJcbi8vIEkgc2hvdWxkIGJlIGFibGUgdG8gY2FsbCB0aGlzIHdoZXRoZXIgSSdtIGxvYWRpbmcgZnJvbVxyXG4vLyBsb2NhbCBzdG9yYWdlIG9yIGZyb20gYSB1c2VyLXByb3ZpZGVkIHNhdmUgaW1wb3J0IHN0cmluZ1xyXG5leHBvcnQgZnVuY3Rpb24gbG9hZEZyb21TdHJpbmcoaW1wb3J0U3RyaW5nOiBzdHJpbmcpIHtcclxuICAgIGxldCBsb2FkZWRTYXZlOiBTYXZlRmlsZSA9IEpTT04ucGFyc2UoaW1wb3J0U3RyaW5nKTtcclxuICAgIGlmIChsb2FkZWRTYXZlID09PSB1bmRlZmluZWRcclxuICAgICAgICB8fCBsb2FkZWRTYXZlLnZlcnNpb24gIT09IHNhdmVGaWxlVmVyc2lvbikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBzYXZlIGZyb20gbG9jYWwgc3RvcmFnZTogVmVyc2lvbiBtaXNtYXRjaFwiKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyhcIkxvYWRlZCBzYXZlXCIpO1xyXG4gICAgY29uc29sZS5sb2cobG9hZGVkU2F2ZSk7XHJcbiAgICBnLmJhbmFuYXMgPSBsb2FkZWRTYXZlLmJhbmFuYXM7XHJcbiAgICBnLm1vbmtleXMgPSBsb2FkZWRTYXZlLm1vbmtleXM7XHJcbiAgICBnLmxldHRlcnNQZXJTZWNvbmQgPSBnLm1vbmtleXM7XHJcbiAgICBnLmN1cnJlbnRUYXJnZXRJbmRleCA9IGxvYWRlZFNhdmUudGFyZ2V0SW5kZXg7XHJcbiAgICBnLmN1cnJlbnRUYXJnZXQgPSB0YXJnZXRzW2xvYWRlZFNhdmUudGFyZ2V0SW5kZXhdO1xyXG4gICAgZy5rZXlib2FyZEtleXMgPSBsb2FkZWRTYXZlLmtleWJvYXJkS2V5cztcclxuICAgIGcubWF4S2V5Ym9hcmRLZXlzID0gbG9hZGVkU2F2ZS5tYXhLZXlib2FyZEtleXM7XHJcbiAgICBnLnRhcmdldE93bmVkID0gbG9hZGVkU2F2ZS50YXJnZXRPd25lZDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGV4cG9ydFNhdmVUb1N0cmluZygpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KGdldFNhdmVGaWxlKCkpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZXJhc2VTYXZlKCkge1xyXG4gICAgY29uc29sZS5sb2coXCJTYXZlIEVyYXNlZCFcIik7XHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShzYXZlS2V5KTtcclxufVxyXG4iLCJleHBvcnQgbGV0IHNhdmVGaWxlVmVyc2lvbjogbnVtYmVyID0gMjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTYXZlRmlsZSB7XHJcbiAgICAvLyBVc2UgdGhlIHZlcnNpb24gbnVtYmVyIHRvIGRldGVjdCBhbmQgaW52YWxpZGF0ZVxyXG4gICAgLy8gb2xkIGFuZCBpbmNvbXBhdGlibGUgc2F2ZSBmaWxlc1xyXG4gICAgcHVibGljIHZlcnNpb246IG51bWJlcjtcclxuXHJcbiAgICBwdWJsaWMgYmFuYW5hczogbnVtYmVyO1xyXG4gICAgcHVibGljIG1vbmtleXM6IG51bWJlcjtcclxuICAgIHB1YmxpYyB0YXJnZXRJbmRleDogbnVtYmVyO1xyXG4gICAgcHVibGljIGtleWJvYXJkS2V5czogc3RyaW5nW107XHJcbiAgICBwdWJsaWMgbWF4S2V5Ym9hcmRLZXlzOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgdGFyZ2V0T3duZWQ6IGJvb2xlYW5bXTtcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoXHJcbiAgICAgICAgYmFuYW5hczogbnVtYmVyLFxyXG4gICAgICAgIG1vbmtleXM6IG51bWJlcixcclxuICAgICAgICB0YXJnZXRJbmRleDogbnVtYmVyLFxyXG4gICAgICAgIGtleWJvYXJkS2V5czogc3RyaW5nW10sXHJcbiAgICAgICAgbWF4S2V5Ym9hcmRLZXlzOiBudW1iZXIsXHJcbiAgICAgICAgdGFyZ2V0T3duZWQ6IGJvb2xlYW5bXSxcclxuICAgICkge1xyXG4gICAgICAgIHRoaXMudmVyc2lvbiA9IHNhdmVGaWxlVmVyc2lvbjtcclxuICAgICAgICB0aGlzLmJhbmFuYXMgPSBiYW5hbmFzO1xyXG4gICAgICAgIHRoaXMubW9ua2V5cyA9IG1vbmtleXM7XHJcbiAgICAgICAgdGhpcy50YXJnZXRJbmRleCA9IHRhcmdldEluZGV4O1xyXG4gICAgICAgIHRoaXMua2V5Ym9hcmRLZXlzID0ga2V5Ym9hcmRLZXlzO1xyXG4gICAgICAgIHRoaXMubWF4S2V5Ym9hcmRLZXlzID0gbWF4S2V5Ym9hcmRLZXlzO1xyXG4gICAgICAgIHRoaXMudGFyZ2V0T3duZWQgPSB0YXJnZXRPd25lZDtcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgY2xhc3MgVGFyZ2V0IHtcclxuICAgIHB1YmxpYyBsZXR0ZXJzOiBzdHJpbmdbXTtcclxuICAgIHB1YmxpYyBkaXNwbGF5U3RyaW5nOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgcmV3YXJkczogbnVtYmVyW107XHJcbiAgICBwdWJsaWMgcHJpY2U6IG51bWJlcjtcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoXHJcbiAgICAgICAgbGV0dGVyczogc3RyaW5nW10sXHJcbiAgICAgICAgZGlzcGxheVN0cmluZzogc3RyaW5nLFxyXG4gICAgICAgIHJld2FyZHM6IG51bWJlcltdLFxyXG4gICAgICAgIHByaWNlOiBudW1iZXIsXHJcbiAgICApIHtcclxuICAgICAgICB0aGlzLmxldHRlcnMgPSBsZXR0ZXJzO1xyXG4gICAgICAgIHRoaXMuZGlzcGxheVN0cmluZyA9IGRpc3BsYXlTdHJpbmc7XHJcbiAgICAgICAgdGhpcy5yZXdhcmRzID0gcmV3YXJkcztcclxuICAgICAgICB0aGlzLnByaWNlID0gcHJpY2U7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgVGFyZ2V0IH0gZnJvbSBcIi4vdGFyZ2V0XCI7XHJcblxyXG5leHBvcnQgbGV0IHRhcmdldHM6IFRhcmdldFtdID0gW1xyXG4gICAgbmV3IFRhcmdldChcclxuICAgICAgICBbXCJDXCIsIFwiQVwiLCBcIlRcIl0sXHJcbiAgICAgICAgXCJDQVRcIixcclxuICAgICAgICBbMSwgOCwgNDBdLFxyXG4gICAgICAgIDAsXHJcbiAgICApLFxyXG4gICAgbmV3IFRhcmdldChcclxuICAgICAgICBbXCJIXCIsIFwiT1wiLCBcIk9cIiwgXCJUXCJdLFxyXG4gICAgICAgIFwiSE9PVFwiLFxyXG4gICAgICAgIFs1LCAxMCwgNDAsIDE4MF0sXHJcbiAgICAgICAgMjAwMCxcclxuICAgICksXHJcbiAgICBuZXcgVGFyZ2V0KFxyXG4gICAgICAgIFtcIlJcIiwgXCJFXCIsIFwiRlwiLCBcIkVcIiwgXCJSXCIsIFwiRVwiLCBcIkVcIl0sXHJcbiAgICAgICAgXCJSRUZFUkVFXCIsXHJcbiAgICAgICAgWzUsIDUsIDUsIDIwLCA0MDAsIDI0MDAsIDE1MDAwXSxcclxuICAgICAgICAzMDAwMCxcclxuICAgICksXHJcbiAgICAvLyBuZXcgVGFyZ2V0KFxyXG4gICAgLy8gICAgIFtdLFxyXG4gICAgLy8gICAgIFwiXCIsXHJcbiAgICAvLyAgICAgW10sXHJcbiAgICAvLyAgICAgMCxcclxuICAgIC8vICksXHJcbl07XHJcbiIsImV4cG9ydCBmdW5jdGlvbiBjb3VudE1hdGNoaW5nTGV0dGVycyhzMTogc3RyaW5nW10sIHMyOiBzdHJpbmdbXSkge1xyXG4gICAgbGV0IG1hdGNoaW5nID0gMDtcclxuICAgIGxldCBtaW5MZW5ndGggPSBNYXRoLm1pbihzMS5sZW5ndGgsIHMyLmxlbmd0aCk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1pbkxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKHMxW2ldID09PSBzMltpXSkge1xyXG4gICAgICAgICAgICBtYXRjaGluZysrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBtYXRjaGluZztcclxufVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIFRPRE86XHJcbi8vIEF1dG8tc2F2ZSBldmVyeSAxMCBzZWNvbmRzXHJcbi8vIE1ha2UgdGhlIGVyYXNlIHNhdmUgYnV0dG9uIHJlc3RhcnQgdGhlIGdhbWUgYXMgd2VsbFxyXG4vLyBQcmV2ZW50IGNhdGNodXAgbGFnIGFmdGVyIHRhYi1vdXRcclxuLy8gQWRkIHVwZ3JhZGVzXHJcbi8vIEF1dG8tY2FsY3VsYXRlIGF2ZXJhZ2UgYmFuYW5hcyBwZXIgd29yZFxyXG4vLyBnZXQgcmlkIG9mIHJlcGVhdHMgb2YgaWYgKGJ1dHRvbi5pc0Rpc2FibGVkKSB7cmV0dXJuO31cclxuIFxyXG4vLyBUaGUgVUkgaXMgYSBjb21wbGV0ZSBtZXNzIVxyXG4vLyBUaGUgc2F2ZSBzaG91bGQgYmUgZW5jcnlwdGVkXHJcbi8vIFRoZSBlcmFzZSBzYXZlIGJ1dHRvbiBzaG91bGQgaGF2ZSBhIGNvbmZpcm1hdGlvbiBzdGVwXHJcbi8vIFRoZSBlcmFzZSBzYXZlIGJ1dHRvbiBzaG91bGQgYWxzbyByZXNldCB0aGUgZ2FtZSAocHJvYmFibHkgd2lsbCByZW5hbWUgdGhlIGJ1dHRvbilcclxuLy8gVGhlIGdhbWUgc2hvdWxkIGF1dG8tc2F2ZVxyXG4vLyBUaGVyZSBzaG91bGQgYmUgYW4gaW1wb3J0L2V4cG9ydCBvcHRpb24gdG8gbGV0IHRoZSBwbGF5ZXIgYmFjayB1cCB0aGVpciBzYXZlXHJcbi8vIFlvdSBzaG91bGRuJ3QgaGF2ZSB0byByZS1idXkgcHJldmlvdXMgd29yZHNcclxuLy8gVGhlcmUgYXJlIGJhbGFuY2UgaXNzdWVzXHJcbi8vIFRoZXJlIHNob3VsZCBiZSB1cGdyYWRlc1xyXG4vLyBUaGVyZSBuZWVkcyB0byBiZSBzb21ldGhpbmcgbGlrZSBhIGJhbmFuYXMgcGVyIHNlY29uZCBjb3VudGVyLCBvciBzb21ldGhpbmcgbW9yZSBhZHZhbmNlZFxyXG4vLyBzaW5ndWxhciBcImJhbmFuYVwiIHdoZW4gaXQncyBvbmx5IDFcclxuLy8gY29tcHJlc3NlZCBub3RhdGlvbiBmb3IgbGFyZ2UgbnVtYmVyc1xyXG5cclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIi4vYnV0dG9uXCI7XHJcbmltcG9ydCB7IGNhbnZhcywgY29sbGlkZWFibGVzLCBjdHgsIGRyYXdhYmxlcywgZywgdXBkYXRlYWJsZXMgfSBmcm9tIFwiLi9nbG9iYWxcIjtcclxuaW1wb3J0IHsgZXJhc2VTYXZlLCBsb2FkRnJvbUxvY2FsU3RvcmFnZSwgc2F2ZSB9IGZyb20gXCIuL2xvY2FsX3N0b3JhZ2VcIjtcclxuaW1wb3J0IHsgdGFyZ2V0cyB9IGZyb20gXCIuL3RhcmdldHNcIjtcclxuaW1wb3J0IHsgZG93bmxvYWQsIGdlbmVyYXRlUGVybXV0YXRpb25zIH0gZnJvbSBcIi4vdGVzdF9wZXJtdXRhdGlvbnNcIjtcclxuaW1wb3J0IHsgQ29sbGlkZWFibGUgfSBmcm9tIFwiLi90eXBlc1wiO1xyXG5pbXBvcnQgeyBjb3VudE1hdGNoaW5nTGV0dGVycyB9IGZyb20gXCIuL3V0aWxcIjtcclxuXHJcbi8vIGxldCByZXBvcnQxID0gZ2VuZXJhdGVQZXJtdXRhdGlvbnMoXHJcbi8vICAgICBbXCJIXCIsIFwiT1wiLCBcIlRcIl0sXHJcbi8vICAgICBbXCJIXCIsIFwiT1wiLCBcIk9cIiwgXCJUXCJdLFxyXG4vLyApO1xyXG4vLyBkb3dubG9hZChcImhvdC1ob290LXBlcm11dGF0aW9ucy5jc3ZcIiwgcmVwb3J0MSk7XHJcblxyXG4vLyBsZXQgcmVwb3J0MiA9IGdlbmVyYXRlUGVybXV0YXRpb25zKFxyXG4vLyAgICAgW1wiSFwiLCBcIk9cIiwgXCJPXCIsIFwiVFwiXSxcclxuLy8gICAgIFtcIkhcIiwgXCJPXCIsIFwiT1wiLCBcIlRcIl0sXHJcbi8vICk7XHJcbi8vIGRvd25sb2FkKFwiaG9vdC1ob290LXBlcm11dGF0aW9ucy5jc3ZcIiwgcmVwb3J0Mik7XHJcblxyXG5sb2FkRnJvbUxvY2FsU3RvcmFnZSgpO1xyXG5cclxubGV0IGJ1dHRvbkNvbG9yOiBzdHJpbmcgPSByZ2JTdHJpbmcoMjAwLCAyMDAsIDI1NSk7XHJcbmxldCBidXR0b25Ib3ZlckNvbG9yOiBzdHJpbmcgPSByZ2JTdHJpbmcoMTgwLCAxODAsIDIzMCk7XHJcbmxldCBlcmFzZUJ1dHRvbkNvbG9yOiBzdHJpbmcgPSByZ2JTdHJpbmcoMjU1LCA1MCwgNTApO1xyXG5sZXQgZXJhc2VCdXR0b25Ib3ZlckNvbG9yOiBzdHJpbmcgPSByZ2JTdHJpbmcoMjI1LCAyMCwgMjApO1xyXG5cclxuLy8gTWFrZSBidXR0b25zIG91dCBvZiBhbGwgcG9zc2libGUga2V5Ym9hcmQga2V5c1xyXG4vLyBsZXQgYWxsS2V5Ym9hcmRLZXlzID0gW1wiIFwiLCBcIkFcIixcIkJcIixcIkNcIixcIkRcIixcIkVcIixcIkZcIixcIkdcIixcIkhcIixcIklcIixcIkpcIixcIktcIixcIkxcIixcIk1cIixcIk5cIixcIk9cIixcIlBcIixcIlFcIixcIlJcIixcIlNcIixcIlRcIixcIlVcIixcIlZcIixcIldcIixcIlhcIixcIllcIixcIlpcIl07XHJcbmxldCBhbGxLZXlib2FyZEtleXMgPSBbXCLijrVcIiwgXCJBXCIsXCJCXCIsXCJDXCIsXCJEXCIsXCJFXCIsXCJGXCIsXCJHXCIsXCJIXCIsXCJJXCIsXCJKXCIsXCJLXCIsXCJMXCIsXCJNXCIsXCJOXCIsXCJPXCIsXCJQXCIsXCJRXCIsXCJSXCIsXCJTXCIsXCJUXCIsXCJVXCIsXCJWXCIsXCJXXCIsXCJYXCIsXCJZXCIsXCJaXCJdO1xyXG5mb3IgKGxldCBpID0gMDsgaSA8IGFsbEtleWJvYXJkS2V5cy5sZW5ndGg7IGkrKykge1xyXG4gICAgbGV0IGtleSA9IGFsbEtleWJvYXJkS2V5c1tpXTtcclxuICAgIGxldCBidXR0b24gPSBuZXcgQnV0dG9uKFxyXG4gICAgICAgIDQwICsgMzAgKiBpLFxyXG4gICAgICAgIDQ1MCxcclxuICAgICAgICAyNSxcclxuICAgICAgICAyNSxcclxuICAgICAgICBrZXksXHJcbiAgICAgICAgYnV0dG9uQ29sb3IsXHJcbiAgICAgICAgYnV0dG9uSG92ZXJDb2xvcixcclxuICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChidXR0b24uaXNEaXNhYmxlZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNyZWF0ZUN1cnJlbnRLZXlib2FyZEtleUJ1dHRvbihnLmtleWJvYXJkS2V5cy5sZW5ndGgsIGtleSk7XHJcbiAgICAgICAgICAgIGcua2V5Ym9hcmRLZXlzLnB1c2goa2V5KTtcclxuICAgICAgICAgICAgdXBkYXRlQ2hhcmFjdGVyc1RvQ2hvb3NlRnJvbSgpO1xyXG4gICAgICAgICAgICBjdXJyZW50U3RyaW5nID0gW107XHJcbiAgICAgICAgfSxcclxuICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChnLmtleWJvYXJkS2V5cy5sZW5ndGggPCBnLm1heEtleWJvYXJkS2V5cykge1xyXG4gICAgICAgICAgICAgICAgYnV0dG9uLmlzRGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGJ1dHRvbi5pc0Rpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICApO1xyXG59XHJcblxyXG5sZXQgY2hhcmFjdGVyc1RvQ2hvb3NlRnJvbTogc3RyaW5nW107XHJcbmxldCByYW5kb21OdW1iZXJTaXplID0gNjU1MzY7XHJcbnVwZGF0ZUNoYXJhY3RlcnNUb0Nob29zZUZyb20oKTtcclxubGV0IGtleWJvYXJkS2V5QnV0dG9uczogQnV0dG9uW10gPSBbXVxyXG5cclxuZm9yIChsZXQgaSA9IDA7IGkgPCBnLmtleWJvYXJkS2V5cy5sZW5ndGg7IGkrKykge1xyXG4gICAgY3JlYXRlQ3VycmVudEtleWJvYXJkS2V5QnV0dG9uKGksIGcua2V5Ym9hcmRLZXlzW2ldKTtcclxufVxyXG5cclxuLy8gTWFrZSBhIGJ1dHRvbiBvdXQgb2YgdGhlIGEga2V5Ym9hcmQga2V5IHNvIHlvdVxyXG4vLyBjYW4gY2xpY2sgdG8gcmVtb3ZlIGl0IGZyb20geW91ciBrZXlib2FyZC5cclxuLy8gaSBpcyB0aGUgaW5kZXggaW4gdGhlIGtleWJvYXJkS2V5cyBhcnJheVxyXG4vLyBPbiBjbGljayBpdCBkZWxldGVzIGFuZCByZW1ha2VzIGFsbCB0aGUgYnV0dG9uc1xyXG5mdW5jdGlvbiBjcmVhdGVDdXJyZW50S2V5Ym9hcmRLZXlCdXR0b24oaTogbnVtYmVyLCBrZXk6IHN0cmluZykge1xyXG4gICAgbGV0IGJ1dHRvbiA9IG5ldyBCdXR0b24oXHJcbiAgICAgICAgMTgwICsgMzAgKiBpLFxyXG4gICAgICAgIDI4MCxcclxuICAgICAgICAyNSxcclxuICAgICAgICAyNSxcclxuICAgICAgICBrZXksXHJcbiAgICAgICAgYnV0dG9uQ29sb3IsXHJcbiAgICAgICAgYnV0dG9uSG92ZXJDb2xvcixcclxuICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChidXR0b24uaXNEaXNhYmxlZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGcua2V5Ym9hcmRLZXlzLnNwbGljZShpLCAxKTtcclxuICAgICAgICAgICAgdXBkYXRlQ2hhcmFjdGVyc1RvQ2hvb3NlRnJvbSgpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGtleWJvYXJkS2V5QnV0dG9ucy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAga2V5Ym9hcmRLZXlCdXR0b25zW2pdLmRlbGV0ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgZy5rZXlib2FyZEtleXMubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBrZXkgPSBnLmtleWJvYXJkS2V5c1tqXTtcclxuICAgICAgICAgICAgICAgIGNyZWF0ZUN1cnJlbnRLZXlib2FyZEtleUJ1dHRvbihqLCBrZXkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGN1cnJlbnRTdHJpbmcgPSBbXTtcclxuICAgICAgICB9LFxyXG4gICAgICAgICgpID0+IHt9LFxyXG4gICAgKTtcclxuICAgIGtleWJvYXJkS2V5QnV0dG9ucy5wdXNoKGJ1dHRvbik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZUNoYXJhY3RlcnNUb0Nob29zZUZyb20oKSB7XHJcbiAgICBjaGFyYWN0ZXJzVG9DaG9vc2VGcm9tID0gW107XHJcbiAgICBpZiAoZy5rZXlib2FyZEtleXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByYW5kb21OdW1iZXJTaXplOyBpKyspIHtcclxuICAgICAgICBjaGFyYWN0ZXJzVG9DaG9vc2VGcm9tLnB1c2goXHJcbiAgICAgICAgICAgIGcua2V5Ym9hcmRLZXlzW2kgJSBnLmtleWJvYXJkS2V5cy5sZW5ndGhdXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxubGV0IGN1cnJlbnRTdHJpbmc6IHN0cmluZ1tdID0gW107XHJcblxyXG5sZXQgdGFyZ2V0QnV0dG9uczogQnV0dG9uW10gPSBbXTtcclxuZm9yIChsZXQgaSA9IDA7IGkgPCB0YXJnZXRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBsZXQgYnV0dG9uVGV4dDogc3RyaW5nID0gdGFyZ2V0c1tpXS5kaXNwbGF5U3RyaW5nO1xyXG4gICAgaWYgKCFnLnRhcmdldE93bmVkW2ldKSB7XHJcbiAgICAgICAgYnV0dG9uVGV4dCArPSBcIiBcIiArIHRhcmdldHNbaV0ucHJpY2U7XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGJ1dHRvbiA9IG5ldyBCdXR0b24oXHJcbiAgICAgICAgNTAwLFxyXG4gICAgICAgIDUwICsgMzUgKiBpLFxyXG4gICAgICAgIDgwLFxyXG4gICAgICAgIDMwLFxyXG4gICAgICAgIGJ1dHRvblRleHQsXHJcbiAgICAgICAgYnV0dG9uQ29sb3IsXHJcbiAgICAgICAgYnV0dG9uSG92ZXJDb2xvcixcclxuICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChidXR0b24uaXNEaXNhYmxlZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghZy50YXJnZXRPd25lZFtpXSkge1xyXG4gICAgICAgICAgICAgICAgZy5iYW5hbmFzIC09IHRhcmdldHNbaV0ucHJpY2U7XHJcbiAgICAgICAgICAgICAgICBidXR0b24udGV4dCA9IHRhcmdldHNbaV0uZGlzcGxheVN0cmluZztcclxuICAgICAgICAgICAgICAgIGcudGFyZ2V0T3duZWRbaV0gPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyB1bi1kaXNhYmxlIHRoZSBjdXJyZW50IHRhcmdldCBvbiBzZWxlY3RpbmcgYSBuZXcgb25lXHJcbiAgICAgICAgICAgIC8vIGZvciAobGV0IGogPSAwOyBqIDwgdGFyZ2V0cy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAvLyAgICAgaWYgKHRhcmdldHNbal0uZGlzcGxheVN0cmluZyA9PT0gZy5jdXJyZW50VGFyZ2V0LmRpc3BsYXlTdHJpbmcpIHtcclxuICAgICAgICAgICAgLy8gICAgICAgICB0YXJnZXRCdXR0b25zW2pdLmlzRGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICAgICAgZy5jdXJyZW50VGFyZ2V0ID0gdGFyZ2V0c1tpXTtcclxuICAgICAgICAgICAgZy5jdXJyZW50VGFyZ2V0SW5kZXggPSBpO1xyXG4gICAgICAgICAgICB0YXJnZXRCdXR0b25zW2ldLmlzRGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0c1tpXS5wcmljZSA+IGcuYmFuYW5hc1xyXG4gICAgICAgICAgICAgICAgICAgICYmICFnLnRhcmdldE93bmVkW2ldXHJcbiAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB8fCB0YXJnZXRzW2ldLmRpc3BsYXlTdHJpbmcgPT09IGcuY3VycmVudFRhcmdldC5kaXNwbGF5U3RyaW5nXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgYnV0dG9uLmlzRGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYnV0dG9uLmlzRGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICApO1xyXG4gICAgdGFyZ2V0QnV0dG9ucy5wdXNoKGJ1dHRvbik7XHJcbn1cclxuXHJcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY2FudmFzKTtcclxuXHJcbmxldCByZWNydWl0UHJpY2UgPSAxMCArIDIgKiBnLm1vbmtleXM7XHJcbmxldCBidXR0b24xID0gbmV3IEJ1dHRvbihcclxuICAgIDEwMCxcclxuICAgIDEwMCxcclxuICAgIDgwLFxyXG4gICAgMzAsXHJcbiAgICBcIlJlY3J1aXQgTW9ua2V5IFwiICsgcmVjcnVpdFByaWNlLFxyXG4gICAgYnV0dG9uQ29sb3IsXHJcbiAgICBidXR0b25Ib3ZlckNvbG9yLFxyXG4gICAgKCkgPT4ge1xyXG4gICAgICAgIGlmIChidXR0b24xLmlzRGlzYWJsZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBnLm1vbmtleXMgKz0gMTtcclxuICAgICAgICBnLmxldHRlcnNQZXJTZWNvbmQgKz0gMTtcclxuICAgICAgICBnLmJhbmFuYXMgLT0gcmVjcnVpdFByaWNlO1xyXG4gICAgICAgIHJlY3J1aXRQcmljZSA9IDEwICsgMiAqIGcubW9ua2V5cztcclxuICAgICAgICBidXR0b24xLnRleHQgPSBcIlJlY3J1aXQgTW9ua2V5IFwiICsgcmVjcnVpdFByaWNlO1xyXG4gICAgfSxcclxuICAgICgpID0+IHtcclxuICAgICAgICBpZiAocmVjcnVpdFByaWNlID4gZy5iYW5hbmFzKSB7XHJcbiAgICAgICAgICAgIGJ1dHRvbjEuaXNEaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYnV0dG9uMS5pc0Rpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuKTtcclxuXHJcbmxldCBsYXN0Q2xpY2tlZFRpbWVNaWxsaXM6IG51bWJlcjtcclxubGV0IGJ1dHRvbjIgPSBuZXcgQnV0dG9uKFxyXG4gICAgMTAwLFxyXG4gICAgMzUwLFxyXG4gICAgODAsXHJcbiAgICAzMCxcclxuICAgIFwiVHlwZVwiLFxyXG4gICAgYnV0dG9uQ29sb3IsXHJcbiAgICBidXR0b25Ib3ZlckNvbG9yLFxyXG4gICAgKGN1cnJlbnRUaW1lTWlsbGlzOiBudW1iZXIpID0+IHtcclxuICAgICAgICBpZiAoY3VycmVudFRpbWVNaWxsaXMgIT09IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICAmJiAoY3VycmVudFRpbWVNaWxsaXMgLSBsYXN0Q2xpY2tlZFRpbWVNaWxsaXMpIDwgNTApIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBnLmxldHRlcnNUb1R5cGVSZW1haW5kZXIgKz0gMTtcclxuICAgICAgICBsYXN0Q2xpY2tlZFRpbWVNaWxsaXMgPSBjdXJyZW50VGltZU1pbGxpcztcclxuICAgIH0sXHJcbiAgICAoKSA9PiB7fVxyXG4pO1xyXG5cclxubGV0IHVwZ3JhZGVLZXlib2FyZFByaWNlID0gTWF0aC5wb3coMTAsIGcubWF4S2V5Ym9hcmRLZXlzICsgMSk7XHJcbmxldCBidXR0b24zID0gbmV3IEJ1dHRvbihcclxuICAgIDI1MCxcclxuICAgIDQwMCxcclxuICAgIDgwLFxyXG4gICAgMzAsXHJcbiAgICBcIlVwZ3JhZGUgS2V5Ym9hcmQgXCIgKyB1cGdyYWRlS2V5Ym9hcmRQcmljZSxcclxuICAgIGJ1dHRvbkNvbG9yLFxyXG4gICAgYnV0dG9uSG92ZXJDb2xvcixcclxuICAgICgpID0+IHtcclxuICAgICAgICBpZiAoYnV0dG9uMy5pc0Rpc2FibGVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZy5iYW5hbmFzIC09IHVwZ3JhZGVLZXlib2FyZFByaWNlO1xyXG4gICAgICAgIGcubWF4S2V5Ym9hcmRLZXlzICs9IDE7XHJcbiAgICAgICAgdXBkYXRlQ2hhcmFjdGVyc1RvQ2hvb3NlRnJvbSgpO1xyXG4gICAgICAgIHVwZ3JhZGVLZXlib2FyZFByaWNlID0gTWF0aC5wb3coMTAsIGcubWF4S2V5Ym9hcmRLZXlzICsgMSk7XHJcbiAgICAgICAgYnV0dG9uMy50ZXh0ID0gXCJVcGdyYWRlIEtleWJvYXJkIFwiICsgdXBncmFkZUtleWJvYXJkUHJpY2U7XHJcbiAgICB9LFxyXG4gICAgKCkgPT4ge1xyXG4gICAgICAgIGlmICh1cGdyYWRlS2V5Ym9hcmRQcmljZSA+IGcuYmFuYW5hcykge1xyXG4gICAgICAgICAgICBidXR0b24zLmlzRGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGJ1dHRvbjMuaXNEaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuKTtcclxuXHJcbmxldCBzYXZlQnV0dG9uOiBCdXR0b24gPSBuZXcgQnV0dG9uKFxyXG4gICAgMTAsXHJcbiAgICA2MDAsXHJcbiAgICAxMDAsXHJcbiAgICAzMCxcclxuICAgIFwiU2F2ZVwiLFxyXG4gICAgYnV0dG9uQ29sb3IsXHJcbiAgICBidXR0b25Ib3ZlckNvbG9yLFxyXG4gICAgKCkgPT4ge3NhdmUoKX0sXHJcbiAgICAoKSA9PiB7fSxcclxuKTtcclxuXHJcbmxldCBlcmFzZUJ1dHRvbjogQnV0dG9uID0gbmV3IEJ1dHRvbihcclxuICAgIDEwLFxyXG4gICAgNjQwLFxyXG4gICAgMTAwLFxyXG4gICAgMzAsXHJcbiAgICBcIkVyYXNlIFNhdmVcIixcclxuICAgIGVyYXNlQnV0dG9uQ29sb3IsXHJcbiAgICBlcmFzZUJ1dHRvbkhvdmVyQ29sb3IsXHJcbiAgICAoKSA9PiB7ZXJhc2VTYXZlKCl9LFxyXG4gICAgKCkgPT4ge30sXHJcbik7XHJcblxyXG4vLyBzdG9yZSB0aGUgbW91c2UgeHkgaW4gY2FzZSBpdCBnZXRzIGV4ZWN1dGVkIGZhc3RlciB0aGFuXHJcbi8vIG9uY2UgZXZlcnkgZnJhbWUsIHdoaWNoIHdvdWxkIGJlIHVzZWxlc3Mgc2luY2UgaG92ZXIgaXNcclxuLy8gaGFuZGxlZCBvbmx5IG9uY2UgZXZlcnkgZnJhbWVcclxuY2FudmFzLm9ubW91c2Vtb3ZlID0gKGV2OiBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICBsZXQgYm91bmRzOiBET01SZWN0ID0gY2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgZy5tb3VzZVggPSBldi54IC0gYm91bmRzLmxlZnQ7XHJcbiAgICBnLm1vdXNlWSA9IGV2LnkgLSBib3VuZHMudG9wO1xyXG59O1xyXG5cclxuLy8gYXNzdW1lIGZvciBzaW1wbGljaXR5IHRoYXQgeW91IGNhbid0IGhhdmUgdHdvIG1vdXNlZG93blxyXG4vLyBldmVudHMgd2l0aG91dCBhIG1vdXNldXBcclxuY2FudmFzLm9ubW91c2Vkb3duID0gKGV2OiBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICBsZXQgYm91bmRzOiBET01SZWN0ID0gY2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgbGV0IG1vdXNlWCA9IGV2LnggLSBib3VuZHMubGVmdDtcclxuICAgIGxldCBtb3VzZVkgPSBldi55IC0gYm91bmRzLnRvcDtcclxuICAgIGxldCBjb2xsaWRlYWJsZTogQ29sbGlkZWFibGUgPSBnZXRDb2xsaWRpbmdFbnRpdHkobW91c2VYLCBtb3VzZVkpO1xyXG4gICAgaWYgKGNvbGxpZGVhYmxlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBjb2xsaWRlYWJsZS5pc01vdXNlRG93bmVkID0gdHJ1ZTtcclxuICAgICAgICBjdXJyZW50TW91c2VEb3duZWQgPSBjb2xsaWRlYWJsZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY3VycmVudE1vdXNlRG93bmVkID0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG59XHJcblxyXG5jYW52YXMub25tb3VzZXVwID0gKGV2OiBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICBsZXQgYm91bmRzOiBET01SZWN0ID0gY2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgbGV0IG1vdXNlWCA9IGV2LnggLSBib3VuZHMubGVmdDtcclxuICAgIGxldCBtb3VzZVkgPSBldi55IC0gYm91bmRzLnRvcDtcclxuICAgIGxldCBjb2xsaWRlYWJsZTogQ29sbGlkZWFibGUgPSBnZXRDb2xsaWRpbmdFbnRpdHkobW91c2VYLCBtb3VzZVkpO1xyXG4gICAgaWYgKGNvbGxpZGVhYmxlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBpZiAoY29sbGlkZWFibGUuaXNNb3VzZURvd25lZCkge1xyXG4gICAgICAgICAgICBjb2xsaWRlYWJsZS5vbkNsaWNrKGV2LnRpbWVTdGFtcCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKGN1cnJlbnRNb3VzZURvd25lZCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgY3VycmVudE1vdXNlRG93bmVkLmlzTW91c2VEb3duZWQgPSBmYWxzZTtcclxuICAgIH1cclxufVxyXG5cclxubGV0IHByZXZpb3VzVGltZU1pbGxpczogbnVtYmVyO1xyXG5sZXQgcHJldmlvdXNIb3ZlcmVkOiBDb2xsaWRlYWJsZTtcclxubGV0IGN1cnJlbnRNb3VzZURvd25lZDogQ29sbGlkZWFibGU7XHJcbmxldCBsYXN0V29yZEZpbmlzaFRpbWVNaWxsaXM6IG51bWJlcjtcclxuXHJcbndpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZHJhdyk7XHJcblxyXG5mdW5jdGlvbiBkcmF3KGN1cnJlbnRUaW1lTWlsbGlzOiBudW1iZXIpIHtcclxuICAgIGxldCBlbGFwc2VkVGltZU1pbGxpczogbnVtYmVyID0gMDtcclxuICAgIGlmIChwcmV2aW91c1RpbWVNaWxsaXMgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGVsYXBzZWRUaW1lTWlsbGlzID0gY3VycmVudFRpbWVNaWxsaXMgLSBwcmV2aW91c1RpbWVNaWxsaXM7XHJcbiAgICB9XHJcblxyXG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xyXG4gICAgY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcclxuICAgIGN0eC5maWxsUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xyXG5cclxuICAgIGlmIChwcmV2aW91c0hvdmVyZWQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHByZXZpb3VzSG92ZXJlZC5pc0hvdmVyZWQgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29sbGlkZWFibGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgbGV0IGlzQ29sbGlkaW5nID0gY29sbGlkZWFibGVzW2ldLmNvbGxpZGUoZy5tb3VzZVgsIGcubW91c2VZKTtcclxuICAgICAgICBpZiAoaXNDb2xsaWRpbmcpIHtcclxuICAgICAgICAgICAgbGV0IGN1cnJlbnRIb3ZlcmVkID0gY29sbGlkZWFibGVzW2ldO1xyXG4gICAgICAgICAgICBjdXJyZW50SG92ZXJlZC5pc0hvdmVyZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICBwcmV2aW91c0hvdmVyZWQgPSBjdXJyZW50SG92ZXJlZDtcclxuICAgICAgICAgICAgYnJlYWs7IC8vIG9ubHkgb25lIHRoaW5nIGNhbiBiZSBob3ZlcmVkIG92ZXIgYXQgYSB0aW1lXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGcubGV0dGVyc1RvVHlwZVJlbWFpbmRlciArPSBlbGFwc2VkVGltZU1pbGxpcyAvIDEwMDAgKiBnLmxldHRlcnNQZXJTZWNvbmQ7XHJcbiAgICBcclxuICAgIC8vIE1ha2UgYSBmaW5pc2hlZCB3b3JkIHN0YXkgb24gc2NyZWVuIGZvciA1MDBtcywgb3IgdW50aWxcclxuICAgIC8vIGFub3RoZXIgbGV0dGVyIGlzIHR5cGVkXHJcbiAgICBpZiAoKFxyXG4gICAgICAgICAgICBsYXN0V29yZEZpbmlzaFRpbWVNaWxsaXMgIT09IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICAmJiAoY3VycmVudFRpbWVNaWxsaXMgLSBsYXN0V29yZEZpbmlzaFRpbWVNaWxsaXMpID4gNTAwXHJcbiAgICAgICAgKSB8fCAoXHJcbiAgICAgICAgICAgIGcubGV0dGVyc1RvVHlwZVJlbWFpbmRlciA+PSAxXHJcbiAgICAgICAgICAgICYmIGN1cnJlbnRTdHJpbmcubGVuZ3RoID49IGcuY3VycmVudFRhcmdldC5sZXR0ZXJzLmxlbmd0aFxyXG4gICAgICAgICkpIHtcclxuICAgICAgICBjdXJyZW50U3RyaW5nID0gW107XHJcbiAgICAgICAgbGFzdFdvcmRGaW5pc2hUaW1lTWlsbGlzID0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyBHZW5lcmF0ZSB0aGUgbmVlZGVkIGNoYXJhY3RlcnMgYW5kIGF3YXJkIGJhbmFuYXNcclxuICAgIHdoaWxlIChnLmxldHRlcnNUb1R5cGVSZW1haW5kZXIgPj0gMSkge1xyXG4gICAgICAgIGcubGV0dGVyc1RvVHlwZVJlbWFpbmRlciAtPSAxO1xyXG4gICAgICAgIGlmIChjaGFyYWN0ZXJzVG9DaG9vc2VGcm9tLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGNoYXJhY3RlciA9IGdldFJhbmRvbUNoYXJhY3RlcigpO1xyXG4gICAgICAgIGN1cnJlbnRTdHJpbmcucHVzaChjaGFyYWN0ZXIpO1xyXG4gICAgICAgIGlmIChjdXJyZW50U3RyaW5nLmxlbmd0aCA+PSBnLmN1cnJlbnRUYXJnZXQubGV0dGVycy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgbGFzdFdvcmRGaW5pc2hUaW1lTWlsbGlzID0gY3VycmVudFRpbWVNaWxsaXM7XHJcbiAgICAgICAgICAgIGxldCBtYXRjaGluZ0xldHRlcnM6IG51bWJlciA9IGNvdW50TWF0Y2hpbmdMZXR0ZXJzKFxyXG4gICAgICAgICAgICAgICAgY3VycmVudFN0cmluZywgZy5jdXJyZW50VGFyZ2V0LmxldHRlcnMpO1xyXG4gICAgICAgICAgICBpZiAobWF0Y2hpbmdMZXR0ZXJzID4gMCkge1xyXG4gICAgICAgICAgICAgICAgZy5iYW5hbmFzICs9IGcuY3VycmVudFRhcmdldC5yZXdhcmRzW21hdGNoaW5nTGV0dGVycyAtIDFdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChnLmxldHRlcnNUb1R5cGVSZW1haW5kZXIgPj0gMSkge1xyXG4gICAgICAgICAgICAgICAgY3VycmVudFN0cmluZyA9IFtdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIERyYXcgdGhlIGN1cnJlbnQgc3RyaW5nIG9uIHNjcmVlblxyXG4gICAgY3R4LnNhdmUoKTtcclxuICAgIGN0eC5maWxsU3R5bGUgPSBcImJsYWNrXCI7XHJcbiAgICBjdHguZm9udCA9IFwiMjBweCBBcmlhbFwiO1xyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGcuY3VycmVudFRhcmdldC5sZXR0ZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgbGV0IGNoYXJhY3Rlcjogc3RyaW5nO1xyXG4gICAgICAgIGlmIChpID49IGN1cnJlbnRTdHJpbmcubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGNoYXJhY3RlciA9IFwiX1wiXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY2hhcmFjdGVyID0gY3VycmVudFN0cmluZ1tpXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY3R4LmZpbGxUZXh0KFxyXG4gICAgICAgICAgICBjaGFyYWN0ZXIsXHJcbiAgICAgICAgICAgIDEwMCArIDIwICogaSxcclxuICAgICAgICAgICAgMjAwXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICAgIGN0eC5yZXN0b3JlKCk7XHJcblxyXG4gICAgLy8gQ2FsbCB1cGRhdGUgb24gZXZlcnl0aGluZyBqdXN0IGJlZm9yZSBkcmF3XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRyYXdhYmxlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHVwZGF0ZWFibGVzW2ldLnVwZGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIERyYXcgdmFsdWVzIGF0IHRoZSBlbmQgb2YgdGhlIGZyYW1lIHNvIHRoZXkncmUgYXMgdXBcclxuICAgIC8vIHRvIGRhdGUgYXMgdGhleSBjYW4gYmVcclxuICAgIGN0eC5zYXZlKCk7XHJcbiAgICBjdHguZmlsbFN0eWxlID0gXCJibGFja1wiO1xyXG4gICAgY3R4LmZvbnQgPSBcIjIwcHggQXJpYWxcIjtcclxuICAgIGN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xyXG4gICAgY3R4LmZpbGxUZXh0KG1vbmtleXMoZy5tb25rZXlzKSwgMTQwLCA4MCk7XHJcbiAgICBjdHguZmlsbFRleHQoYmFuYW5hcyhnLmJhbmFuYXMpLCAxNDAsIDU1KTtcclxuICAgIGN0eC50ZXh0QWxpZ24gPSBcImxlZnRcIjtcclxuICAgIGN0eC5maWxsVGV4dChcIlRhcmdldCBTdHJpbmc6IFwiXHJcbiAgICAgICAgKyBnLmN1cnJlbnRUYXJnZXQuZGlzcGxheVN0cmluZywgMjUwLCAxMjApO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBnLmN1cnJlbnRUYXJnZXQucmV3YXJkcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGxldCBsaW5lID0gKGkgKyAxKSArIFwiOiBcIlxyXG4gICAgICAgICAgICArIGJhbmFuYXMoZy5jdXJyZW50VGFyZ2V0LnJld2FyZHNbaV0pO1xyXG4gICAgICAgIGN0eC5maWxsVGV4dChsaW5lLCAyODAsIDE0MCArIDIwICogaSk7XHJcbiAgICB9XHJcbiAgICBjdHgudGV4dEFsaWduID0gXCJyaWdodFwiO1xyXG4gICAgY3R4LmZpbGxUZXh0KFwiS2V5Ym9hcmQgS2V5czpcIiwgMTYwLCAzMDApO1xyXG4gICAgY3R4LnJlc3RvcmUoKTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRyYXdhYmxlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGRyYXdhYmxlc1tpXS5kcmF3KGN1cnJlbnRUaW1lTWlsbGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwcmV2aW91c1RpbWVNaWxsaXMgPSBjdXJyZW50VGltZU1pbGxpcztcclxuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZHJhdyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldENvbGxpZGluZ0VudGl0eShwb2ludFg6IG51bWJlciwgcG9pbnRZOiBudW1iZXIpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29sbGlkZWFibGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgbGV0IGlzQ29sbGlkaW5nID0gY29sbGlkZWFibGVzW2ldLmNvbGxpZGUoZy5tb3VzZVgsIGcubW91c2VZKTtcclxuICAgICAgICBpZiAoaXNDb2xsaWRpbmcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNvbGxpZGVhYmxlc1tpXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRSYW5kb21TdHJpbmcoY2hhcmFjdGVyc1RvQ2hvb3NlRnJvbTogc3RyaW5nW10sIG46IG51bWJlcikge1xyXG4gICAgbGV0IHJhbmRvbU51bWJlcnMgPSBnZXRSYW5kb21OdW1iZXJzKG4pO1xyXG4gICAgbGV0IHN0cmluZyA9IFwiXCI7XHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgcmFuZG9tTnVtYmVycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHN0cmluZyArPSBjaGFyYWN0ZXJzVG9DaG9vc2VGcm9tW3JhbmRvbU51bWJlcnNbaV1dO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHN0cmluZztcclxufVxyXG5cclxuLy8gQnVmZmVyIHRoZSByYW5kb20gY2hhcmFjdGVycyB3ZSBnZXQgZnJvbSBjcnlwdG8gdG8gaW1wcm92ZVxyXG4vLyB0aGUgc3BlZWQuIEFsc28sIEkgdGVzdGVkIGl0LCBhbmQgaXQncyBmYXN0ZXIgdGhhbiB1c2luZ1xyXG4vLyBNYXRoLnJhbmRvbSwgYW5kIGhvcGVmdWxseSBoYXMgYmV0dGVyIHJhbmRvbW5lc3NcclxubGV0IGJ1ZmZlclNpemUgPSAxMDAwMDtcclxubGV0IG51bWJlckJ1ZmZlcjogVWludDE2QXJyYXkgPSBnZXRSYW5kb21OdW1iZXJzKGJ1ZmZlclNpemUpO1xyXG5sZXQgbnVtYmVyQnVmZmVySW5kZXggPSAtMTtcclxuZnVuY3Rpb24gZ2V0UmFuZG9tQ2hhcmFjdGVyKCkge1xyXG4gICAgbnVtYmVyQnVmZmVySW5kZXggKz0gMTtcclxuICAgIGlmIChudW1iZXJCdWZmZXJJbmRleCA+PSBidWZmZXJTaXplKSB7XHJcbiAgICAgICAgbnVtYmVyQnVmZmVySW5kZXggPSAwO1xyXG4gICAgICAgIG51bWJlckJ1ZmZlciA9IGdldFJhbmRvbU51bWJlcnMoYnVmZmVyU2l6ZSk7XHJcbiAgICB9XHJcbiAgICBsZXQgcmFuZG9tTnVtYmVyID0gbnVtYmVyQnVmZmVyW251bWJlckJ1ZmZlckluZGV4XTtcclxuICAgIHJldHVybiBjaGFyYWN0ZXJzVG9DaG9vc2VGcm9tW3JhbmRvbU51bWJlcl07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFJhbmRvbU51bWJlcnMobjogbnVtYmVyKSB7XHJcbiAgICBsZXQgcmFuZG9tTnVtYmVycyA9IG5ldyBVaW50MTZBcnJheShuKTtcclxuICAgIHJhbmRvbU51bWJlcnMgPSBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKHJhbmRvbU51bWJlcnMpO1xyXG4gICAgcmV0dXJuIHJhbmRvbU51bWJlcnM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJnYlN0cmluZyhyZWQ6IG51bWJlciwgZ3JlZW46IG51bWJlciwgYmx1ZTogbnVtYmVyKSB7XHJcbiAgICByZXR1cm4gXCJyZ2IoXCIgKyByZWQgKyBcIixcIiArIGdyZWVuICsgXCIsXCIgKyBibHVlICsgXCIpXCI7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGJhbmFuYXMobnVtYmVyOiBudW1iZXIpIHtcclxuICAgIGlmIChudW1iZXIgPT09IDEpIHtcclxuICAgICAgICByZXR1cm4gbnVtYmVyICsgXCIgYmFuYW5hXCI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBudW1iZXIgKyBcIiBiYW5hbmFzXCI7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1vbmtleXMobnVtYmVyOiBudW1iZXIpIHsgXHJcbiAgICBpZiAobnVtYmVyID09PSAxKSB7XHJcbiAgICAgICAgcmV0dXJuIG51bWJlciArIFwiIG1vbmtleVwiO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gbnVtYmVyICsgXCIgbW9ua2V5c1wiO1xyXG4gICAgfVxyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==