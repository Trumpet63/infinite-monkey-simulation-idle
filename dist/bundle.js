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
    return new _save_file__WEBPACK_IMPORTED_MODULE_1__.SaveFile(_global__WEBPACK_IMPORTED_MODULE_0__.g.bananas, _global__WEBPACK_IMPORTED_MODULE_0__.g.monkeys, _global__WEBPACK_IMPORTED_MODULE_0__.g.currentTargetIndex, _global__WEBPACK_IMPORTED_MODULE_0__.g.keyboardKeys, _global__WEBPACK_IMPORTED_MODULE_0__.g.maxKeyboardKeys);
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
var saveFileVersion = 1;
var SaveFile = /** @class */ (function () {
    function SaveFile(bananas, monkeys, targetIndex, keyboardKeys, maxKeyboardKeys) {
        this.version = saveFileVersion;
        this.bananas = bananas;
        this.monkeys = monkeys;
        this.targetIndex = targetIndex;
        this.keyboardKeys = keyboardKeys;
        this.maxKeyboardKeys = maxKeyboardKeys;
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
    new _target__WEBPACK_IMPORTED_MODULE_0__.Target(["H", "O", "O", "T"], "HOOT", [5, 5, 20, 40, 120], 2000),
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
    var button = new _button__WEBPACK_IMPORTED_MODULE_0__.Button(500, 50 + 35 * i, 80, 30, _targets__WEBPACK_IMPORTED_MODULE_3__.targets[i].displayString + " " + _targets__WEBPACK_IMPORTED_MODULE_3__.targets[i].price, buttonColor, buttonHoverColor, function () {
        if (button.isDisabled) {
            return;
        }
        _global__WEBPACK_IMPORTED_MODULE_1__.g.bananas -= _targets__WEBPACK_IMPORTED_MODULE_3__.targets[i].price;
        // un-disable the current target
        for (var j = 0; j < _targets__WEBPACK_IMPORTED_MODULE_3__.targets.length; j++) {
            if (_targets__WEBPACK_IMPORTED_MODULE_3__.targets[j].displayString === _global__WEBPACK_IMPORTED_MODULE_1__.g.currentTarget.displayString) {
                targetButtons[j].isDisabled = false;
            }
        }
        _global__WEBPACK_IMPORTED_MODULE_1__.g.currentTarget = _targets__WEBPACK_IMPORTED_MODULE_3__.targets[i];
        _global__WEBPACK_IMPORTED_MODULE_1__.g.currentTargetIndex = i;
        targetButtons[i].isDisabled = true;
    }, function () {
        if (_targets__WEBPACK_IMPORTED_MODULE_3__.targets[i].price > _global__WEBPACK_IMPORTED_MODULE_1__.g.bananas
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
// targetButtons[0].isDisabled = true;
document.body.appendChild(_global__WEBPACK_IMPORTED_MODULE_1__.canvas);
var recruitPrice = 10;
var button1 = new _button__WEBPACK_IMPORTED_MODULE_0__.Button(100, 100, 80, 30, "Recruit Monkey " + recruitPrice, buttonColor, buttonHoverColor, function () {
    if (button1.isDisabled) {
        return;
    }
    _global__WEBPACK_IMPORTED_MODULE_1__.g.monkeys += 1;
    _global__WEBPACK_IMPORTED_MODULE_1__.g.lettersPerSecond += 1;
    _global__WEBPACK_IMPORTED_MODULE_1__.g.bananas -= recruitPrice;
    recruitPrice += 2;
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
var upgradeKeyboardPrice = 100;
var button3 = new _button__WEBPACK_IMPORTED_MODULE_0__.Button(250, 400, 80, 30, "Upgrade Keyboard 100", buttonColor, buttonHoverColor, function () {
    if (button3.isDisabled) {
        return;
    }
    _global__WEBPACK_IMPORTED_MODULE_1__.g.bananas -= upgradeKeyboardPrice;
    _global__WEBPACK_IMPORTED_MODULE_1__.g.maxKeyboardKeys += 1;
    updateCharactersToChooseFrom();
    upgradeKeyboardPrice *= 10;
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
    _global__WEBPACK_IMPORTED_MODULE_1__.ctx.fillText(_global__WEBPACK_IMPORTED_MODULE_1__.g.monkeys.toString() + " monkeys", 140, 80);
    _global__WEBPACK_IMPORTED_MODULE_1__.ctx.fillText(_global__WEBPACK_IMPORTED_MODULE_1__.g.bananas.toString() + " bananas", 140, 55);
    _global__WEBPACK_IMPORTED_MODULE_1__.ctx.textAlign = "left";
    _global__WEBPACK_IMPORTED_MODULE_1__.ctx.fillText("Target String: "
        + _global__WEBPACK_IMPORTED_MODULE_1__.g.currentTarget.displayString, 250, 120);
    for (var i = 0; i < _global__WEBPACK_IMPORTED_MODULE_1__.g.currentTarget.rewards.length; i++) {
        var line = (i + 1) + ": "
            + _global__WEBPACK_IMPORTED_MODULE_1__.g.currentTarget.rewards[i] + " bananas";
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

})();

exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0QsT0FBTyxNQUFNLENBQUM7QUFDbEIsQ0FBQztBQUVELDZEQUE2RDtBQUM3RCwyREFBMkQ7QUFDM0QsbURBQW1EO0FBQ25ELElBQUksVUFBVSxHQUFHLEtBQUssQ0FBQztBQUN2QixJQUFJLFlBQVksR0FBZ0IsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLENBQUM7QUFDN0QsSUFBSSxpQkFBaUIsR0FBRyxDQUFDLENBQUMsQ0FBQztBQUMzQixTQUFTLGtCQUFrQjtJQUN2QixpQkFBaUIsSUFBSSxDQUFDLENBQUM7SUFDdkIsSUFBSSxpQkFBaUIsSUFBSSxVQUFVLEVBQUU7UUFDakMsaUJBQWlCLEdBQUcsQ0FBQyxDQUFDO1FBQ3RCLFlBQVksR0FBRyxnQkFBZ0IsQ0FBQyxVQUFVLENBQUMsQ0FBQztLQUMvQztJQUNELElBQUksWUFBWSxHQUFHLFlBQVksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0lBQ25ELE9BQU8sc0JBQXNCLENBQUMsWUFBWSxDQUFDLENBQUM7QUFDaEQsQ0FBQztBQUVELFNBQVMsZ0JBQWdCLENBQUMsQ0FBUztJQUMvQixJQUFJLGFBQWEsR0FBRyxJQUFJLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN2QyxhQUFhLEdBQUcsTUFBTSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUN0RCxPQUFPLGFBQWEsQ0FBQztBQUN6QixDQUFDO0FBRUQsU0FBUyxTQUFTLENBQUMsR0FBVyxFQUFFLEtBQWEsRUFBRSxJQUFZO0lBQ3ZELE9BQU8sTUFBTSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsS0FBSyxHQUFHLEdBQUcsR0FBRyxJQUFJLEdBQUcsR0FBRyxDQUFDO0FBQ3pELENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leHBvcnRzLy4vc3JjL2J1dHRvbi50cyIsIndlYnBhY2s6Ly9leHBvcnRzLy4vc3JjL2dsb2JhbC50cyIsIndlYnBhY2s6Ly9leHBvcnRzLy4vc3JjL2xvY2FsX3N0b3JhZ2UudHMiLCJ3ZWJwYWNrOi8vZXhwb3J0cy8uL3NyYy9zYXZlX2ZpbGUudHMiLCJ3ZWJwYWNrOi8vZXhwb3J0cy8uL3NyYy90YXJnZXQudHMiLCJ3ZWJwYWNrOi8vZXhwb3J0cy8uL3NyYy90YXJnZXRzLnRzIiwid2VicGFjazovL2V4cG9ydHMvLi9zcmMvdXRpbC50cyIsIndlYnBhY2s6Ly9leHBvcnRzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2V4cG9ydHMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2V4cG9ydHMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9leHBvcnRzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXhwb3J0cy8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb2xsaWRlYWJsZXMsIGN0eCwgZHJhd2FibGVzLCBnLCB1cGRhdGVhYmxlcyB9IGZyb20gXCIuL2dsb2JhbFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEJ1dHRvbiB7XHJcbiAgICBwdWJsaWMgaWQ6IG51bWJlcjtcclxuICAgIHB1YmxpYyB0b3BMZWZ0WDogbnVtYmVyO1xyXG4gICAgcHVibGljIHRvcExlZnRZOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgd2lkdGg6IG51bWJlcjtcclxuICAgIHB1YmxpYyBoZWlnaHQ6IG51bWJlcjtcclxuICAgIHB1YmxpYyBib3R0b21SaWdodFg6IG51bWJlcjtcclxuICAgIHB1YmxpYyBib3R0b21SaWdodFk6IG51bWJlcjtcclxuICAgIHB1YmxpYyB0ZXh0OiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgY29sb3I6IHN0cmluZztcclxuICAgIHB1YmxpYyBob3ZlcmVkQ29sb3I6IHN0cmluZztcclxuICAgIHB1YmxpYyBkaXNhYmxlZENvbG9yOiBzdHJpbmcgPSBcImdyYXlcIjtcclxuICAgIHB1YmxpYyBpc0hvdmVyZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHB1YmxpYyBpc0Rpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwdWJsaWMgaXNNb3VzZURvd25lZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHVibGljIG9uQ2xpY2s6IChjdXJyZW50VGltZU1pbGxpcz86IG51bWJlcikgPT4gdm9pZDtcclxuICAgIHB1YmxpYyB1cGRhdGU6ICgpID0+IHZvaWQ7XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHRvcExlZnRYOiBudW1iZXIsXHJcbiAgICAgICAgdG9wTGVmdFk6IG51bWJlcixcclxuICAgICAgICB3aWR0aDogbnVtYmVyLFxyXG4gICAgICAgIGhlaWdodDogbnVtYmVyLFxyXG4gICAgICAgIHRleHQ6IHN0cmluZyxcclxuICAgICAgICBjb2xvcjogc3RyaW5nLFxyXG4gICAgICAgIGhvdmVyZWRDb2xvcjogc3RyaW5nLFxyXG4gICAgICAgIG9uQ2xpY2s6IChjdXJyZW50VGltZU1pbGxpcz86IG51bWJlcikgPT4gdm9pZCxcclxuICAgICAgICB1cGRhdGU6ICgpID0+IHZvaWQsXHJcbiAgICApIHtcclxuICAgICAgICB0aGlzLmlkID0gZy5pZENvdW50ZXI7XHJcbiAgICAgICAgZy5pZENvdW50ZXIgKz0gMTtcclxuICAgICAgICB0aGlzLnRvcExlZnRYID0gdG9wTGVmdFg7XHJcbiAgICAgICAgdGhpcy50b3BMZWZ0WSA9IHRvcExlZnRZO1xyXG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcclxuICAgICAgICB0aGlzLmJvdHRvbVJpZ2h0WCA9IHRvcExlZnRYICsgd2lkdGg7XHJcbiAgICAgICAgdGhpcy5ib3R0b21SaWdodFkgPSB0b3BMZWZ0WSArIGhlaWdodDtcclxuICAgICAgICB0aGlzLnRleHQgPSB0ZXh0O1xyXG4gICAgICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcclxuICAgICAgICB0aGlzLmhvdmVyZWRDb2xvciA9IGhvdmVyZWRDb2xvcjtcclxuICAgICAgICB0aGlzLm9uQ2xpY2sgPSBvbkNsaWNrO1xyXG4gICAgICAgIHRoaXMudXBkYXRlID0gdXBkYXRlO1xyXG5cclxuICAgICAgICBkcmF3YWJsZXMucHVzaCh0aGlzKTtcclxuICAgICAgICBjb2xsaWRlYWJsZXMucHVzaCh0aGlzKTtcclxuICAgICAgICB1cGRhdGVhYmxlcy5wdXNoKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkcmF3KGN1cnJlbnRUaW1lTWlsbGlzOiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgdG9wTGVmdFggPSB0aGlzLnRvcExlZnRYO1xyXG4gICAgICAgIGxldCB0b3BMZWZ0WSA9IHRoaXMudG9wTGVmdFk7XHJcbiAgICAgICAgbGV0IHdpZHRoID0gdGhpcy53aWR0aDtcclxuICAgICAgICBsZXQgaGVpZ2h0ID0gdGhpcy5oZWlnaHQ7XHJcbiAgICAgICAgbGV0IGZvbnRTaXplID0gMTU7XHJcbiAgICAgICAgbGV0IGNvbG9yOiBzdHJpbmc7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNNb3VzZURvd25lZFxyXG4gICAgICAgICAgICAmJiAhdGhpcy5pc0Rpc2FibGVkKSB7XHJcbiAgICAgICAgICAgIGxldCBzaHJpbmsgPSAwLjE7XHJcbiAgICAgICAgICAgIGxldCBzaHJpbmtYID0gd2lkdGggKiBzaHJpbms7XHJcbiAgICAgICAgICAgIGxldCBzaHJpbmtZID0gaGVpZ2h0ICogc2hyaW5rO1xyXG4gICAgICAgICAgICB3aWR0aCAtPSBzaHJpbmtYO1xyXG4gICAgICAgICAgICBoZWlnaHQgLT0gc2hyaW5rWTtcclxuICAgICAgICAgICAgdG9wTGVmdFggKz0gc2hyaW5rWCAvIDI7XHJcbiAgICAgICAgICAgIHRvcExlZnRZICs9IHNocmlua1kgLyAyO1xyXG4gICAgICAgICAgICBmb250U2l6ZSAqPSAoMSAtIHNocmluayk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmlzRGlzYWJsZWQpIHtcclxuICAgICAgICAgICAgY29sb3IgPSB0aGlzLmRpc2FibGVkQ29sb3JcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc0hvdmVyZWQpIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yID0gdGhpcy5jb2xvcjtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yID0gdGhpcy5ob3ZlcmVkQ29sb3I7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGN0eC5zYXZlKCk7XHJcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xyXG4gICAgICAgIGN0eC5mb250ID0gZm9udFNpemUgKyBcInB4IEFyaWFsXCI7XHJcbiAgICAgICAgY3R4LmZpbGxSZWN0KHRvcExlZnRYLCB0b3BMZWZ0WSwgd2lkdGgsIGhlaWdodCk7XHJcbiAgICAgICAgY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XHJcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwiYmxhY2tcIjtcclxuICAgICAgICBjdHguZmlsbFRleHQoXHJcbiAgICAgICAgICAgIHRoaXMudGV4dCxcclxuICAgICAgICAgICAgdG9wTGVmdFggKyB3aWR0aCAvIDIsXHJcbiAgICAgICAgICAgIHRvcExlZnRZICsgaGVpZ2h0IC8gMiArIGZvbnRTaXplIC8gMi40XHJcbiAgICAgICAgKTtcclxuICAgICAgICBjdHgucmVzdG9yZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjb2xsaWRlKHBvaW50WDogbnVtYmVyLCBwb2ludFk6IG51bWJlcikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRvcExlZnRYIDw9IHBvaW50WFxyXG4gICAgICAgICAgICAmJiBwb2ludFggPD0gdGhpcy5ib3R0b21SaWdodFhcclxuICAgICAgICAgICAgJiYgdGhpcy50b3BMZWZ0WSA8PSBwb2ludFlcclxuICAgICAgICAgICAgJiYgcG9pbnRZIDw9IHRoaXMuYm90dG9tUmlnaHRZO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkZWxldGUoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkcmF3YWJsZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGRyYXdhYmxlc1tpXS5pZCA9PT0gdGhpcy5pZCkge1xyXG4gICAgICAgICAgICAgICAgZHJhd2FibGVzLnNwbGljZShpLCAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbGxpZGVhYmxlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoY29sbGlkZWFibGVzW2ldLmlkID09PSB0aGlzLmlkKSB7XHJcbiAgICAgICAgICAgICAgICBjb2xsaWRlYWJsZXMuc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdXBkYXRlYWJsZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHVwZGF0ZWFibGVzW2ldLmlkID09PSB0aGlzLmlkKSB7XHJcbiAgICAgICAgICAgICAgICB1cGRhdGVhYmxlcy5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgdGFyZ2V0cyB9IGZyb20gXCIuL3RhcmdldHNcIjtcclxuaW1wb3J0IHsgQ29sbGlkZWFibGUsIERyYXdhYmxlLCBVcGRhdGVhYmxlIH0gZnJvbSBcIi4vdHlwZXNcIjtcclxuXHJcbmV4cG9ydCBsZXQgd2lkdGg6IG51bWJlciA9IDEwMDA7XHJcbmV4cG9ydCBsZXQgaGVpZ2h0OiBudW1iZXIgPSA3MDA7XHJcbmV4cG9ydCBsZXQgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XHJcbmV4cG9ydCBsZXQgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcclxuY2FudmFzLndpZHRoID0gd2lkdGg7XHJcbmNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XHJcbmN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XHJcbmV4cG9ydCBsZXQgZHJhd2FibGVzOiBEcmF3YWJsZVtdID0gW107XHJcbmV4cG9ydCBsZXQgY29sbGlkZWFibGVzOiBDb2xsaWRlYWJsZVtdID0gW107XHJcbmV4cG9ydCBsZXQgdXBkYXRlYWJsZXM6IFVwZGF0ZWFibGVbXSA9IFtdO1xyXG5cclxuLy8gUHV0IGFueSBnbG9iYWwgdmFyaWFibGVzIHRoYXQgeW91IHdhbnQgdG8gYmUgYWJsZSB0byByZWFzc2lnbiBoZXJlXHJcbmV4cG9ydCBsZXQgZyA9IHtcclxuICAgIGJhbmFuYXM6IDAsXHJcbiAgICBtb25rZXlzOiAwLFxyXG4gICAgbGV0dGVyc1RvVHlwZVJlbWFpbmRlcjogMCxcclxuICAgIGxldHRlcnNQZXJTZWNvbmQ6IDAsXHJcbiAgICBtb3VzZVg6IC0xLFxyXG4gICAgbW91c2VZOiAtMSxcclxuICAgIGlkQ291bnRlcjogMCxcclxuICAgIGN1cnJlbnRUYXJnZXRJbmRleDogMCxcclxuICAgIGN1cnJlbnRUYXJnZXQ6IHRhcmdldHNbMF0sXHJcbiAgICBrZXlib2FyZEtleXM6IFtcIkFcIl0sXHJcbiAgICBtYXhLZXlib2FyZEtleXM6IDEsXHJcbn07XHJcbiIsImltcG9ydCB7IGcgfSBmcm9tIFwiLi9nbG9iYWxcIjtcclxuaW1wb3J0IHsgU2F2ZUZpbGUsIHNhdmVGaWxlVmVyc2lvbiB9IGZyb20gXCIuL3NhdmVfZmlsZVwiO1xyXG5pbXBvcnQgeyB0YXJnZXRzIH0gZnJvbSBcIi4vdGFyZ2V0c1wiO1xyXG5cclxubGV0IHNhdmVLZXk6IHN0cmluZyA9IFwiaW5maW5lLW1vbmtleS1pZGxlLWdhbWVcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzYXZlKCkge1xyXG4gICAgbGV0IHNhdmVGaWxlOiBTYXZlRmlsZSA9IGdldFNhdmVGaWxlKCk7XHJcbiAgICBsZXQgc2F2ZUZpbGVTdHJpbmc6IHN0cmluZyA9IEpTT04uc3RyaW5naWZ5KHNhdmVGaWxlKTtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHNhdmVLZXksIHNhdmVGaWxlU3RyaW5nKTtcclxuICAgIGNvbnNvbGUubG9nKFwiU2F2ZWQhXCIpO1xyXG4gICAgY29uc29sZS5sb2coc2F2ZUZpbGVTdHJpbmcpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRTYXZlRmlsZSgpOiBTYXZlRmlsZSB7XHJcbiAgICByZXR1cm4gbmV3IFNhdmVGaWxlKFxyXG4gICAgICAgIGcuYmFuYW5hcyxcclxuICAgICAgICBnLm1vbmtleXMsXHJcbiAgICAgICAgZy5jdXJyZW50VGFyZ2V0SW5kZXgsXHJcbiAgICAgICAgZy5rZXlib2FyZEtleXMsXHJcbiAgICAgICAgZy5tYXhLZXlib2FyZEtleXMsXHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbG9hZEZyb21Mb2NhbFN0b3JhZ2UoKSB7XHJcbiAgICBsZXQgc2F2ZUZpbGVTdHJpbmcgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShzYXZlS2V5KTtcclxuICAgIGlmIChzYXZlRmlsZVN0cmluZyA9PT0gdW5kZWZpbmVkXHJcbiAgICAgICAgfHwgc2F2ZUZpbGVTdHJpbmcgPT09IG51bGwpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiQ291bGQgbm90IGxvYWQgc2F2ZVwiKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiU2F2ZSBmb3VuZFwiLCBzYXZlRmlsZVN0cmluZyk7XHJcbiAgICB9XHJcbiAgICBsb2FkRnJvbVN0cmluZyhzYXZlRmlsZVN0cmluZyk7XHJcbn1cclxuXHJcbi8vIEkgc2hvdWxkIGJlIGFibGUgdG8gY2FsbCB0aGlzIHdoZXRoZXIgSSdtIGxvYWRpbmcgZnJvbVxyXG4vLyBsb2NhbCBzdG9yYWdlIG9yIGZyb20gYSB1c2VyLXByb3ZpZGVkIHNhdmUgaW1wb3J0IHN0cmluZ1xyXG5leHBvcnQgZnVuY3Rpb24gbG9hZEZyb21TdHJpbmcoaW1wb3J0U3RyaW5nOiBzdHJpbmcpIHtcclxuICAgIGxldCBsb2FkZWRTYXZlOiBTYXZlRmlsZSA9IEpTT04ucGFyc2UoaW1wb3J0U3RyaW5nKTtcclxuICAgIGlmIChsb2FkZWRTYXZlID09PSB1bmRlZmluZWRcclxuICAgICAgICB8fCBsb2FkZWRTYXZlLnZlcnNpb24gIT09IHNhdmVGaWxlVmVyc2lvbikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJGYWlsZWQgdG8gbG9hZCBzYXZlIGZyb20gbG9jYWwgc3RvcmFnZTogVmVyc2lvbiBtaXNtYXRjaFwiKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZyhcIkxvYWRlZCBzYXZlXCIpO1xyXG4gICAgY29uc29sZS5sb2cobG9hZGVkU2F2ZSk7XHJcbiAgICBnLmJhbmFuYXMgPSBsb2FkZWRTYXZlLmJhbmFuYXM7XHJcbiAgICBnLm1vbmtleXMgPSBsb2FkZWRTYXZlLm1vbmtleXM7XHJcbiAgICBnLmxldHRlcnNQZXJTZWNvbmQgPSBnLm1vbmtleXM7XHJcbiAgICBnLmN1cnJlbnRUYXJnZXRJbmRleCA9IGxvYWRlZFNhdmUudGFyZ2V0SW5kZXg7XHJcbiAgICBnLmN1cnJlbnRUYXJnZXQgPSB0YXJnZXRzW2xvYWRlZFNhdmUudGFyZ2V0SW5kZXhdO1xyXG4gICAgZy5rZXlib2FyZEtleXMgPSBsb2FkZWRTYXZlLmtleWJvYXJkS2V5cztcclxuICAgIGcubWF4S2V5Ym9hcmRLZXlzID0gbG9hZGVkU2F2ZS5tYXhLZXlib2FyZEtleXM7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBleHBvcnRTYXZlVG9TdHJpbmcoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShnZXRTYXZlRmlsZSgpKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGVyYXNlU2F2ZSgpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiU2F2ZSBFcmFzZWQhXCIpO1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oc2F2ZUtleSk7XHJcbn1cclxuIiwiZXhwb3J0IGxldCBzYXZlRmlsZVZlcnNpb246IG51bWJlciA9IDE7XHJcblxyXG5leHBvcnQgY2xhc3MgU2F2ZUZpbGUge1xyXG4gICAgLy8gVXNlIHRoZSB2ZXJzaW9uIG51bWJlciB0byBkZXRlY3QgYW5kIGludmFsaWRhdGVcclxuICAgIC8vIG9sZCBhbmQgaW5jb21wYXRpYmxlIHNhdmUgZmlsZXNcclxuICAgIHB1YmxpYyB2ZXJzaW9uOiBudW1iZXI7XHJcblxyXG4gICAgcHVibGljIGJhbmFuYXM6IG51bWJlcjtcclxuICAgIHB1YmxpYyBtb25rZXlzOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgdGFyZ2V0SW5kZXg6IG51bWJlcjtcclxuICAgIHB1YmxpYyBrZXlib2FyZEtleXM6IHN0cmluZ1tdO1xyXG4gICAgcHVibGljIG1heEtleWJvYXJkS2V5czogbnVtYmVyO1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihcclxuICAgICAgICBiYW5hbmFzOiBudW1iZXIsXHJcbiAgICAgICAgbW9ua2V5czogbnVtYmVyLFxyXG4gICAgICAgIHRhcmdldEluZGV4OiBudW1iZXIsXHJcbiAgICAgICAga2V5Ym9hcmRLZXlzOiBzdHJpbmdbXSxcclxuICAgICAgICBtYXhLZXlib2FyZEtleXM6IG51bWJlcixcclxuICAgICkge1xyXG4gICAgICAgIHRoaXMudmVyc2lvbiA9IHNhdmVGaWxlVmVyc2lvbjtcclxuICAgICAgICB0aGlzLmJhbmFuYXMgPSBiYW5hbmFzO1xyXG4gICAgICAgIHRoaXMubW9ua2V5cyA9IG1vbmtleXM7XHJcbiAgICAgICAgdGhpcy50YXJnZXRJbmRleCA9IHRhcmdldEluZGV4O1xyXG4gICAgICAgIHRoaXMua2V5Ym9hcmRLZXlzID0ga2V5Ym9hcmRLZXlzO1xyXG4gICAgICAgIHRoaXMubWF4S2V5Ym9hcmRLZXlzID0gbWF4S2V5Ym9hcmRLZXlzO1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBUYXJnZXQge1xyXG4gICAgcHVibGljIGxldHRlcnM6IHN0cmluZ1tdO1xyXG4gICAgcHVibGljIGRpc3BsYXlTdHJpbmc6IHN0cmluZztcclxuICAgIHB1YmxpYyByZXdhcmRzOiBudW1iZXJbXTtcclxuICAgIHB1YmxpYyBwcmljZTogbnVtYmVyO1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihcclxuICAgICAgICBsZXR0ZXJzOiBzdHJpbmdbXSxcclxuICAgICAgICBkaXNwbGF5U3RyaW5nOiBzdHJpbmcsXHJcbiAgICAgICAgcmV3YXJkczogbnVtYmVyW10sXHJcbiAgICAgICAgcHJpY2U6IG51bWJlcixcclxuICAgICkge1xyXG4gICAgICAgIHRoaXMubGV0dGVycyA9IGxldHRlcnM7XHJcbiAgICAgICAgdGhpcy5kaXNwbGF5U3RyaW5nID0gZGlzcGxheVN0cmluZztcclxuICAgICAgICB0aGlzLnJld2FyZHMgPSByZXdhcmRzO1xyXG4gICAgICAgIHRoaXMucHJpY2UgPSBwcmljZTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBUYXJnZXQgfSBmcm9tIFwiLi90YXJnZXRcIjtcclxuXHJcbmV4cG9ydCBsZXQgdGFyZ2V0czogVGFyZ2V0W10gPSBbXHJcbiAgICBuZXcgVGFyZ2V0KFxyXG4gICAgICAgIFtcIkNcIiwgXCJBXCIsIFwiVFwiXSxcclxuICAgICAgICBcIkNBVFwiLFxyXG4gICAgICAgIFsxLCA4LCA0MF0sXHJcbiAgICAgICAgMCxcclxuICAgICksXHJcbiAgICBuZXcgVGFyZ2V0KFxyXG4gICAgICAgIFtcIkhcIiwgXCJPXCIsIFwiT1wiLCBcIlRcIl0sXHJcbiAgICAgICAgXCJIT09UXCIsXHJcbiAgICAgICAgWzUsIDUsIDIwLCA0MCwgMTIwXSxcclxuICAgICAgICAyMDAwLFxyXG4gICAgKSxcclxuICAgIG5ldyBUYXJnZXQoXHJcbiAgICAgICAgW1wiUlwiLCBcIkVcIiwgXCJGXCIsIFwiRVwiLCBcIlJcIiwgXCJFXCIsIFwiRVwiXSxcclxuICAgICAgICBcIlJFRkVSRUVcIixcclxuICAgICAgICBbNSwgNSwgNSwgMjAsIDQwMCwgMjQwMCwgMTUwMDBdLFxyXG4gICAgICAgIDMwMDAwLFxyXG4gICAgKSxcclxuICAgIC8vIG5ldyBUYXJnZXQoXHJcbiAgICAvLyAgICAgW10sXHJcbiAgICAvLyAgICAgXCJcIixcclxuICAgIC8vICAgICBbXSxcclxuICAgIC8vICAgICAwLFxyXG4gICAgLy8gKSxcclxuXTtcclxuIiwiZXhwb3J0IGZ1bmN0aW9uIGNvdW50TWF0Y2hpbmdMZXR0ZXJzKHMxOiBzdHJpbmdbXSwgczI6IHN0cmluZ1tdKSB7XHJcbiAgICBsZXQgbWF0Y2hpbmcgPSAwO1xyXG4gICAgbGV0IG1pbkxlbmd0aCA9IE1hdGgubWluKHMxLmxlbmd0aCwgczIubGVuZ3RoKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWluTGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAoczFbaV0gPT09IHMyW2ldKSB7XHJcbiAgICAgICAgICAgIG1hdGNoaW5nKys7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG1hdGNoaW5nO1xyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gVE9ETzpcclxuLy8gQXV0by1zYXZlIGV2ZXJ5IDEwIHNlY29uZHNcclxuLy8gTWFrZSB0aGUgZXJhc2Ugc2F2ZSBidXR0b24gcmVzdGFydCB0aGUgZ2FtZSBhcyB3ZWxsXHJcbi8vIFByZXZlbnQgY2F0Y2h1cCBsYWcgYWZ0ZXIgdGFiLW91dFxyXG4vLyBBZGQgdXBncmFkZXNcclxuLy8gQXV0by1jYWxjdWxhdGUgYXZlcmFnZSBiYW5hbmFzIHBlciB3b3JkXHJcbi8vIGdldCByaWQgb2YgcmVwZWF0cyBvZiBpZiAoYnV0dG9uLmlzRGlzYWJsZWQpIHtyZXR1cm47fVxyXG5cclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIi4vYnV0dG9uXCI7XHJcbmltcG9ydCB7IGNhbnZhcywgY29sbGlkZWFibGVzLCBjdHgsIGRyYXdhYmxlcywgZywgdXBkYXRlYWJsZXMgfSBmcm9tIFwiLi9nbG9iYWxcIjtcclxuaW1wb3J0IHsgZXJhc2VTYXZlLCBsb2FkRnJvbUxvY2FsU3RvcmFnZSwgc2F2ZSB9IGZyb20gXCIuL2xvY2FsX3N0b3JhZ2VcIjtcclxuaW1wb3J0IHsgdGFyZ2V0cyB9IGZyb20gXCIuL3RhcmdldHNcIjtcclxuaW1wb3J0IHsgZG93bmxvYWQsIGdlbmVyYXRlUGVybXV0YXRpb25zIH0gZnJvbSBcIi4vdGVzdF9wZXJtdXRhdGlvbnNcIjtcclxuaW1wb3J0IHsgQ29sbGlkZWFibGUgfSBmcm9tIFwiLi90eXBlc1wiO1xyXG5pbXBvcnQgeyBjb3VudE1hdGNoaW5nTGV0dGVycyB9IGZyb20gXCIuL3V0aWxcIjtcclxuXHJcbi8vIGxldCByZXBvcnQxID0gZ2VuZXJhdGVQZXJtdXRhdGlvbnMoXHJcbi8vICAgICBbXCJIXCIsIFwiT1wiLCBcIlRcIl0sXHJcbi8vICAgICBbXCJIXCIsIFwiT1wiLCBcIk9cIiwgXCJUXCJdLFxyXG4vLyApO1xyXG4vLyBkb3dubG9hZChcImhvdC1ob290LXBlcm11dGF0aW9ucy5jc3ZcIiwgcmVwb3J0MSk7XHJcblxyXG4vLyBsZXQgcmVwb3J0MiA9IGdlbmVyYXRlUGVybXV0YXRpb25zKFxyXG4vLyAgICAgW1wiSFwiLCBcIk9cIiwgXCJPXCIsIFwiVFwiXSxcclxuLy8gICAgIFtcIkhcIiwgXCJPXCIsIFwiT1wiLCBcIlRcIl0sXHJcbi8vICk7XHJcbi8vIGRvd25sb2FkKFwiaG9vdC1ob290LXBlcm11dGF0aW9ucy5jc3ZcIiwgcmVwb3J0Mik7XHJcblxyXG5sb2FkRnJvbUxvY2FsU3RvcmFnZSgpO1xyXG5cclxubGV0IGJ1dHRvbkNvbG9yOiBzdHJpbmcgPSByZ2JTdHJpbmcoMjAwLCAyMDAsIDI1NSk7XHJcbmxldCBidXR0b25Ib3ZlckNvbG9yOiBzdHJpbmcgPSByZ2JTdHJpbmcoMTgwLCAxODAsIDIzMCk7XHJcbmxldCBlcmFzZUJ1dHRvbkNvbG9yOiBzdHJpbmcgPSByZ2JTdHJpbmcoMjU1LCA1MCwgNTApO1xyXG5sZXQgZXJhc2VCdXR0b25Ib3ZlckNvbG9yOiBzdHJpbmcgPSByZ2JTdHJpbmcoMjI1LCAyMCwgMjApO1xyXG5cclxuLy8gTWFrZSBidXR0b25zIG91dCBvZiBhbGwgcG9zc2libGUga2V5Ym9hcmQga2V5c1xyXG4vLyBsZXQgYWxsS2V5Ym9hcmRLZXlzID0gW1wiIFwiLCBcIkFcIixcIkJcIixcIkNcIixcIkRcIixcIkVcIixcIkZcIixcIkdcIixcIkhcIixcIklcIixcIkpcIixcIktcIixcIkxcIixcIk1cIixcIk5cIixcIk9cIixcIlBcIixcIlFcIixcIlJcIixcIlNcIixcIlRcIixcIlVcIixcIlZcIixcIldcIixcIlhcIixcIllcIixcIlpcIl07XHJcbmxldCBhbGxLZXlib2FyZEtleXMgPSBbXCLijrVcIiwgXCJBXCIsXCJCXCIsXCJDXCIsXCJEXCIsXCJFXCIsXCJGXCIsXCJHXCIsXCJIXCIsXCJJXCIsXCJKXCIsXCJLXCIsXCJMXCIsXCJNXCIsXCJOXCIsXCJPXCIsXCJQXCIsXCJRXCIsXCJSXCIsXCJTXCIsXCJUXCIsXCJVXCIsXCJWXCIsXCJXXCIsXCJYXCIsXCJZXCIsXCJaXCJdO1xyXG5mb3IgKGxldCBpID0gMDsgaSA8IGFsbEtleWJvYXJkS2V5cy5sZW5ndGg7IGkrKykge1xyXG4gICAgbGV0IGtleSA9IGFsbEtleWJvYXJkS2V5c1tpXTtcclxuICAgIGxldCBidXR0b24gPSBuZXcgQnV0dG9uKFxyXG4gICAgICAgIDQwICsgMzAgKiBpLFxyXG4gICAgICAgIDQ1MCxcclxuICAgICAgICAyNSxcclxuICAgICAgICAyNSxcclxuICAgICAgICBrZXksXHJcbiAgICAgICAgYnV0dG9uQ29sb3IsXHJcbiAgICAgICAgYnV0dG9uSG92ZXJDb2xvcixcclxuICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChidXR0b24uaXNEaXNhYmxlZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNyZWF0ZUN1cnJlbnRLZXlib2FyZEtleUJ1dHRvbihnLmtleWJvYXJkS2V5cy5sZW5ndGgsIGtleSk7XHJcbiAgICAgICAgICAgIGcua2V5Ym9hcmRLZXlzLnB1c2goa2V5KTtcclxuICAgICAgICAgICAgdXBkYXRlQ2hhcmFjdGVyc1RvQ2hvb3NlRnJvbSgpO1xyXG4gICAgICAgICAgICBjdXJyZW50U3RyaW5nID0gW107XHJcbiAgICAgICAgfSxcclxuICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChnLmtleWJvYXJkS2V5cy5sZW5ndGggPCBnLm1heEtleWJvYXJkS2V5cykge1xyXG4gICAgICAgICAgICAgICAgYnV0dG9uLmlzRGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGJ1dHRvbi5pc0Rpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICApO1xyXG59XHJcblxyXG5sZXQgY2hhcmFjdGVyc1RvQ2hvb3NlRnJvbTogc3RyaW5nW107XHJcbmxldCByYW5kb21OdW1iZXJTaXplID0gNjU1MzY7XHJcbnVwZGF0ZUNoYXJhY3RlcnNUb0Nob29zZUZyb20oKTtcclxubGV0IGtleWJvYXJkS2V5QnV0dG9uczogQnV0dG9uW10gPSBbXVxyXG5cclxuZm9yIChsZXQgaSA9IDA7IGkgPCBnLmtleWJvYXJkS2V5cy5sZW5ndGg7IGkrKykge1xyXG4gICAgY3JlYXRlQ3VycmVudEtleWJvYXJkS2V5QnV0dG9uKGksIGcua2V5Ym9hcmRLZXlzW2ldKTtcclxufVxyXG5cclxuLy8gTWFrZSBhIGJ1dHRvbiBvdXQgb2YgdGhlIGEga2V5Ym9hcmQga2V5IHNvIHlvdVxyXG4vLyBjYW4gY2xpY2sgdG8gcmVtb3ZlIGl0IGZyb20geW91ciBrZXlib2FyZC5cclxuLy8gaSBpcyB0aGUgaW5kZXggaW4gdGhlIGtleWJvYXJkS2V5cyBhcnJheVxyXG4vLyBPbiBjbGljayBpdCBkZWxldGVzIGFuZCByZW1ha2VzIGFsbCB0aGUgYnV0dG9uc1xyXG5mdW5jdGlvbiBjcmVhdGVDdXJyZW50S2V5Ym9hcmRLZXlCdXR0b24oaTogbnVtYmVyLCBrZXk6IHN0cmluZykge1xyXG4gICAgbGV0IGJ1dHRvbiA9IG5ldyBCdXR0b24oXHJcbiAgICAgICAgMTgwICsgMzAgKiBpLFxyXG4gICAgICAgIDI4MCxcclxuICAgICAgICAyNSxcclxuICAgICAgICAyNSxcclxuICAgICAgICBrZXksXHJcbiAgICAgICAgYnV0dG9uQ29sb3IsXHJcbiAgICAgICAgYnV0dG9uSG92ZXJDb2xvcixcclxuICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChidXR0b24uaXNEaXNhYmxlZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGcua2V5Ym9hcmRLZXlzLnNwbGljZShpLCAxKTtcclxuICAgICAgICAgICAgdXBkYXRlQ2hhcmFjdGVyc1RvQ2hvb3NlRnJvbSgpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGtleWJvYXJkS2V5QnV0dG9ucy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAga2V5Ym9hcmRLZXlCdXR0b25zW2pdLmRlbGV0ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgZy5rZXlib2FyZEtleXMubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGxldCBrZXkgPSBnLmtleWJvYXJkS2V5c1tqXTtcclxuICAgICAgICAgICAgICAgIGNyZWF0ZUN1cnJlbnRLZXlib2FyZEtleUJ1dHRvbihqLCBrZXkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGN1cnJlbnRTdHJpbmcgPSBbXTtcclxuICAgICAgICB9LFxyXG4gICAgICAgICgpID0+IHt9LFxyXG4gICAgKTtcclxuICAgIGtleWJvYXJkS2V5QnV0dG9ucy5wdXNoKGJ1dHRvbik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZUNoYXJhY3RlcnNUb0Nob29zZUZyb20oKSB7XHJcbiAgICBjaGFyYWN0ZXJzVG9DaG9vc2VGcm9tID0gW107XHJcbiAgICBpZiAoZy5rZXlib2FyZEtleXMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCByYW5kb21OdW1iZXJTaXplOyBpKyspIHtcclxuICAgICAgICBjaGFyYWN0ZXJzVG9DaG9vc2VGcm9tLnB1c2goXHJcbiAgICAgICAgICAgIGcua2V5Ym9hcmRLZXlzW2kgJSBnLmtleWJvYXJkS2V5cy5sZW5ndGhdXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG5cclxubGV0IGN1cnJlbnRTdHJpbmc6IHN0cmluZ1tdID0gW107XHJcblxyXG5sZXQgdGFyZ2V0QnV0dG9uczogQnV0dG9uW10gPSBbXTtcclxuZm9yIChsZXQgaSA9IDA7IGkgPCB0YXJnZXRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBsZXQgYnV0dG9uID0gbmV3IEJ1dHRvbihcclxuICAgICAgICA1MDAsXHJcbiAgICAgICAgNTAgKyAzNSAqIGksXHJcbiAgICAgICAgODAsXHJcbiAgICAgICAgMzAsXHJcbiAgICAgICAgdGFyZ2V0c1tpXS5kaXNwbGF5U3RyaW5nICsgXCIgXCIgKyB0YXJnZXRzW2ldLnByaWNlLFxyXG4gICAgICAgIGJ1dHRvbkNvbG9yLFxyXG4gICAgICAgIGJ1dHRvbkhvdmVyQ29sb3IsXHJcbiAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoYnV0dG9uLmlzRGlzYWJsZWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBnLmJhbmFuYXMgLT0gdGFyZ2V0c1tpXS5wcmljZTtcclxuICAgICAgICAgICAgLy8gdW4tZGlzYWJsZSB0aGUgY3VycmVudCB0YXJnZXRcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0YXJnZXRzLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGFyZ2V0c1tqXS5kaXNwbGF5U3RyaW5nID09PSBnLmN1cnJlbnRUYXJnZXQuZGlzcGxheVN0cmluZykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldEJ1dHRvbnNbal0uaXNEaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGcuY3VycmVudFRhcmdldCA9IHRhcmdldHNbaV07XHJcbiAgICAgICAgICAgIGcuY3VycmVudFRhcmdldEluZGV4ID0gaTtcclxuICAgICAgICAgICAgdGFyZ2V0QnV0dG9uc1tpXS5pc0Rpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRhcmdldHNbaV0ucHJpY2UgPiBnLmJhbmFuYXNcclxuICAgICAgICAgICAgICAgIHx8IHRhcmdldHNbaV0uZGlzcGxheVN0cmluZyA9PT0gZy5jdXJyZW50VGFyZ2V0LmRpc3BsYXlTdHJpbmcpIHtcclxuICAgICAgICAgICAgICAgIGJ1dHRvbi5pc0Rpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGJ1dHRvbi5pc0Rpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgKTtcclxuICAgIHRhcmdldEJ1dHRvbnMucHVzaChidXR0b24pO1xyXG59XHJcbi8vIHRhcmdldEJ1dHRvbnNbMF0uaXNEaXNhYmxlZCA9IHRydWU7XHJcblxyXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNhbnZhcyk7XHJcblxyXG5sZXQgcmVjcnVpdFByaWNlID0gMTA7XHJcbmxldCBidXR0b24xID0gbmV3IEJ1dHRvbihcclxuICAgIDEwMCxcclxuICAgIDEwMCxcclxuICAgIDgwLFxyXG4gICAgMzAsXHJcbiAgICBcIlJlY3J1aXQgTW9ua2V5IFwiICsgcmVjcnVpdFByaWNlLFxyXG4gICAgYnV0dG9uQ29sb3IsXHJcbiAgICBidXR0b25Ib3ZlckNvbG9yLFxyXG4gICAgKCkgPT4ge1xyXG4gICAgICAgIGlmIChidXR0b24xLmlzRGlzYWJsZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBnLm1vbmtleXMgKz0gMTtcclxuICAgICAgICBnLmxldHRlcnNQZXJTZWNvbmQgKz0gMTtcclxuICAgICAgICBnLmJhbmFuYXMgLT0gcmVjcnVpdFByaWNlO1xyXG4gICAgICAgIHJlY3J1aXRQcmljZSArPSAyO1xyXG4gICAgICAgIGJ1dHRvbjEudGV4dCA9IFwiUmVjcnVpdCBNb25rZXkgXCIgKyByZWNydWl0UHJpY2U7XHJcbiAgICB9LFxyXG4gICAgKCkgPT4ge1xyXG4gICAgICAgIGlmIChyZWNydWl0UHJpY2UgPiBnLmJhbmFuYXMpIHtcclxuICAgICAgICAgICAgYnV0dG9uMS5pc0Rpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBidXR0b24xLmlzRGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4pO1xyXG5cclxubGV0IGxhc3RDbGlja2VkVGltZU1pbGxpczogbnVtYmVyO1xyXG5sZXQgYnV0dG9uMiA9IG5ldyBCdXR0b24oXHJcbiAgICAxMDAsXHJcbiAgICAzNTAsXHJcbiAgICA4MCxcclxuICAgIDMwLFxyXG4gICAgXCJUeXBlXCIsXHJcbiAgICBidXR0b25Db2xvcixcclxuICAgIGJ1dHRvbkhvdmVyQ29sb3IsXHJcbiAgICAoY3VycmVudFRpbWVNaWxsaXM6IG51bWJlcikgPT4ge1xyXG4gICAgICAgIGlmIChjdXJyZW50VGltZU1pbGxpcyAhPT0gdW5kZWZpbmVkXHJcbiAgICAgICAgICAgICYmIChjdXJyZW50VGltZU1pbGxpcyAtIGxhc3RDbGlja2VkVGltZU1pbGxpcykgPCA1MCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGcubGV0dGVyc1RvVHlwZVJlbWFpbmRlciArPSAxO1xyXG4gICAgICAgIGxhc3RDbGlja2VkVGltZU1pbGxpcyA9IGN1cnJlbnRUaW1lTWlsbGlzO1xyXG4gICAgfSxcclxuICAgICgpID0+IHt9XHJcbik7XHJcblxyXG5sZXQgdXBncmFkZUtleWJvYXJkUHJpY2UgPSAxMDA7XHJcbmxldCBidXR0b24zID0gbmV3IEJ1dHRvbihcclxuICAgIDI1MCxcclxuICAgIDQwMCxcclxuICAgIDgwLFxyXG4gICAgMzAsXHJcbiAgICBcIlVwZ3JhZGUgS2V5Ym9hcmQgMTAwXCIsXHJcbiAgICBidXR0b25Db2xvcixcclxuICAgIGJ1dHRvbkhvdmVyQ29sb3IsXHJcbiAgICAoKSA9PiB7XHJcbiAgICAgICAgaWYgKGJ1dHRvbjMuaXNEaXNhYmxlZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGcuYmFuYW5hcyAtPSB1cGdyYWRlS2V5Ym9hcmRQcmljZTtcclxuICAgICAgICBnLm1heEtleWJvYXJkS2V5cyArPSAxO1xyXG4gICAgICAgIHVwZGF0ZUNoYXJhY3RlcnNUb0Nob29zZUZyb20oKTtcclxuICAgICAgICB1cGdyYWRlS2V5Ym9hcmRQcmljZSAqPSAxMDtcclxuICAgICAgICBidXR0b24zLnRleHQgPSBcIlVwZ3JhZGUgS2V5Ym9hcmQgXCIgKyB1cGdyYWRlS2V5Ym9hcmRQcmljZTtcclxuICAgIH0sXHJcbiAgICAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHVwZ3JhZGVLZXlib2FyZFByaWNlID4gZy5iYW5hbmFzKSB7XHJcbiAgICAgICAgICAgIGJ1dHRvbjMuaXNEaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYnV0dG9uMy5pc0Rpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4pO1xyXG5cclxubGV0IHNhdmVCdXR0b246IEJ1dHRvbiA9IG5ldyBCdXR0b24oXHJcbiAgICAxMCxcclxuICAgIDYwMCxcclxuICAgIDEwMCxcclxuICAgIDMwLFxyXG4gICAgXCJTYXZlXCIsXHJcbiAgICBidXR0b25Db2xvcixcclxuICAgIGJ1dHRvbkhvdmVyQ29sb3IsXHJcbiAgICAoKSA9PiB7c2F2ZSgpfSxcclxuICAgICgpID0+IHt9LFxyXG4pO1xyXG5cclxubGV0IGVyYXNlQnV0dG9uOiBCdXR0b24gPSBuZXcgQnV0dG9uKFxyXG4gICAgMTAsXHJcbiAgICA2NDAsXHJcbiAgICAxMDAsXHJcbiAgICAzMCxcclxuICAgIFwiRXJhc2UgU2F2ZVwiLFxyXG4gICAgZXJhc2VCdXR0b25Db2xvcixcclxuICAgIGVyYXNlQnV0dG9uSG92ZXJDb2xvcixcclxuICAgICgpID0+IHtlcmFzZVNhdmUoKX0sXHJcbiAgICAoKSA9PiB7fSxcclxuKTtcclxuXHJcbi8vIHN0b3JlIHRoZSBtb3VzZSB4eSBpbiBjYXNlIGl0IGdldHMgZXhlY3V0ZWQgZmFzdGVyIHRoYW5cclxuLy8gb25jZSBldmVyeSBmcmFtZSwgd2hpY2ggd291bGQgYmUgdXNlbGVzcyBzaW5jZSBob3ZlciBpc1xyXG4vLyBoYW5kbGVkIG9ubHkgb25jZSBldmVyeSBmcmFtZVxyXG5jYW52YXMub25tb3VzZW1vdmUgPSAoZXY6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgIGxldCBib3VuZHM6IERPTVJlY3QgPSBjYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICBnLm1vdXNlWCA9IGV2LnggLSBib3VuZHMubGVmdDtcclxuICAgIGcubW91c2VZID0gZXYueSAtIGJvdW5kcy50b3A7XHJcbn07XHJcblxyXG4vLyBhc3N1bWUgZm9yIHNpbXBsaWNpdHkgdGhhdCB5b3UgY2FuJ3QgaGF2ZSB0d28gbW91c2Vkb3duXHJcbi8vIGV2ZW50cyB3aXRob3V0IGEgbW91c2V1cFxyXG5jYW52YXMub25tb3VzZWRvd24gPSAoZXY6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgIGxldCBib3VuZHM6IERPTVJlY3QgPSBjYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICBsZXQgbW91c2VYID0gZXYueCAtIGJvdW5kcy5sZWZ0O1xyXG4gICAgbGV0IG1vdXNlWSA9IGV2LnkgLSBib3VuZHMudG9wO1xyXG4gICAgbGV0IGNvbGxpZGVhYmxlOiBDb2xsaWRlYWJsZSA9IGdldENvbGxpZGluZ0VudGl0eShtb3VzZVgsIG1vdXNlWSk7XHJcbiAgICBpZiAoY29sbGlkZWFibGUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGNvbGxpZGVhYmxlLmlzTW91c2VEb3duZWQgPSB0cnVlO1xyXG4gICAgICAgIGN1cnJlbnRNb3VzZURvd25lZCA9IGNvbGxpZGVhYmxlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjdXJyZW50TW91c2VEb3duZWQgPSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNhbnZhcy5vbm1vdXNldXAgPSAoZXY6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgIGxldCBib3VuZHM6IERPTVJlY3QgPSBjYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICBsZXQgbW91c2VYID0gZXYueCAtIGJvdW5kcy5sZWZ0O1xyXG4gICAgbGV0IG1vdXNlWSA9IGV2LnkgLSBib3VuZHMudG9wO1xyXG4gICAgbGV0IGNvbGxpZGVhYmxlOiBDb2xsaWRlYWJsZSA9IGdldENvbGxpZGluZ0VudGl0eShtb3VzZVgsIG1vdXNlWSk7XHJcbiAgICBpZiAoY29sbGlkZWFibGUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGlmIChjb2xsaWRlYWJsZS5pc01vdXNlRG93bmVkKSB7XHJcbiAgICAgICAgICAgIGNvbGxpZGVhYmxlLm9uQ2xpY2soZXYudGltZVN0YW1wKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoY3VycmVudE1vdXNlRG93bmVkICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBjdXJyZW50TW91c2VEb3duZWQuaXNNb3VzZURvd25lZCA9IGZhbHNlO1xyXG4gICAgfVxyXG59XHJcblxyXG5sZXQgcHJldmlvdXNUaW1lTWlsbGlzOiBudW1iZXI7XHJcbmxldCBwcmV2aW91c0hvdmVyZWQ6IENvbGxpZGVhYmxlO1xyXG5sZXQgY3VycmVudE1vdXNlRG93bmVkOiBDb2xsaWRlYWJsZTtcclxubGV0IGxhc3RXb3JkRmluaXNoVGltZU1pbGxpczogbnVtYmVyO1xyXG5cclxud2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShkcmF3KTtcclxuXHJcbmZ1bmN0aW9uIGRyYXcoY3VycmVudFRpbWVNaWxsaXM6IG51bWJlcikge1xyXG4gICAgbGV0IGVsYXBzZWRUaW1lTWlsbGlzOiBudW1iZXIgPSAwO1xyXG4gICAgaWYgKHByZXZpb3VzVGltZU1pbGxpcyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgZWxhcHNlZFRpbWVNaWxsaXMgPSBjdXJyZW50VGltZU1pbGxpcyAtIHByZXZpb3VzVGltZU1pbGxpcztcclxuICAgIH1cclxuXHJcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XHJcbiAgICBjdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xyXG4gICAgY3R4LmZpbGxSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XHJcblxyXG4gICAgaWYgKHByZXZpb3VzSG92ZXJlZCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgcHJldmlvdXNIb3ZlcmVkLmlzSG92ZXJlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2xsaWRlYWJsZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBsZXQgaXNDb2xsaWRpbmcgPSBjb2xsaWRlYWJsZXNbaV0uY29sbGlkZShnLm1vdXNlWCwgZy5tb3VzZVkpO1xyXG4gICAgICAgIGlmIChpc0NvbGxpZGluZykge1xyXG4gICAgICAgICAgICBsZXQgY3VycmVudEhvdmVyZWQgPSBjb2xsaWRlYWJsZXNbaV07XHJcbiAgICAgICAgICAgIGN1cnJlbnRIb3ZlcmVkLmlzSG92ZXJlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHByZXZpb3VzSG92ZXJlZCA9IGN1cnJlbnRIb3ZlcmVkO1xyXG4gICAgICAgICAgICBicmVhazsgLy8gb25seSBvbmUgdGhpbmcgY2FuIGJlIGhvdmVyZWQgb3ZlciBhdCBhIHRpbWVcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZy5sZXR0ZXJzVG9UeXBlUmVtYWluZGVyICs9IGVsYXBzZWRUaW1lTWlsbGlzIC8gMTAwMCAqIGcubGV0dGVyc1BlclNlY29uZDtcclxuICAgIFxyXG4gICAgLy8gTWFrZSBhIGZpbmlzaGVkIHdvcmQgc3RheSBvbiBzY3JlZW4gZm9yIDUwMG1zLCBvciB1bnRpbFxyXG4gICAgLy8gYW5vdGhlciBsZXR0ZXIgaXMgdHlwZWRcclxuICAgIGlmICgoXHJcbiAgICAgICAgICAgIGxhc3RXb3JkRmluaXNoVGltZU1pbGxpcyAhPT0gdW5kZWZpbmVkXHJcbiAgICAgICAgICAgICYmIChjdXJyZW50VGltZU1pbGxpcyAtIGxhc3RXb3JkRmluaXNoVGltZU1pbGxpcykgPiA1MDBcclxuICAgICAgICApIHx8IChcclxuICAgICAgICAgICAgZy5sZXR0ZXJzVG9UeXBlUmVtYWluZGVyID49IDFcclxuICAgICAgICAgICAgJiYgY3VycmVudFN0cmluZy5sZW5ndGggPj0gZy5jdXJyZW50VGFyZ2V0LmxldHRlcnMubGVuZ3RoXHJcbiAgICAgICAgKSkge1xyXG4gICAgICAgIGN1cnJlbnRTdHJpbmcgPSBbXTtcclxuICAgICAgICBsYXN0V29yZEZpbmlzaFRpbWVNaWxsaXMgPSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIEdlbmVyYXRlIHRoZSBuZWVkZWQgY2hhcmFjdGVycyBhbmQgYXdhcmQgYmFuYW5hc1xyXG4gICAgd2hpbGUgKGcubGV0dGVyc1RvVHlwZVJlbWFpbmRlciA+PSAxKSB7XHJcbiAgICAgICAgZy5sZXR0ZXJzVG9UeXBlUmVtYWluZGVyIC09IDE7XHJcbiAgICAgICAgaWYgKGNoYXJhY3RlcnNUb0Nob29zZUZyb20ubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgY2hhcmFjdGVyID0gZ2V0UmFuZG9tQ2hhcmFjdGVyKCk7XHJcbiAgICAgICAgY3VycmVudFN0cmluZy5wdXNoKGNoYXJhY3Rlcik7XHJcbiAgICAgICAgaWYgKGN1cnJlbnRTdHJpbmcubGVuZ3RoID49IGcuY3VycmVudFRhcmdldC5sZXR0ZXJzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBsYXN0V29yZEZpbmlzaFRpbWVNaWxsaXMgPSBjdXJyZW50VGltZU1pbGxpcztcclxuICAgICAgICAgICAgbGV0IG1hdGNoaW5nTGV0dGVyczogbnVtYmVyID0gY291bnRNYXRjaGluZ0xldHRlcnMoXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50U3RyaW5nLCBnLmN1cnJlbnRUYXJnZXQubGV0dGVycyk7XHJcbiAgICAgICAgICAgIGlmIChtYXRjaGluZ0xldHRlcnMgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBnLmJhbmFuYXMgKz0gZy5jdXJyZW50VGFyZ2V0LnJld2FyZHNbbWF0Y2hpbmdMZXR0ZXJzIC0gMV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGcubGV0dGVyc1RvVHlwZVJlbWFpbmRlciA+PSAxKSB7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50U3RyaW5nID0gW107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRHJhdyB0aGUgY3VycmVudCBzdHJpbmcgb24gc2NyZWVuXHJcbiAgICBjdHguc2F2ZSgpO1xyXG4gICAgY3R4LmZpbGxTdHlsZSA9IFwiYmxhY2tcIjtcclxuICAgIGN0eC5mb250ID0gXCIyMHB4IEFyaWFsXCI7XHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgZy5jdXJyZW50VGFyZ2V0LmxldHRlcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBsZXQgY2hhcmFjdGVyOiBzdHJpbmc7XHJcbiAgICAgICAgaWYgKGkgPj0gY3VycmVudFN0cmluZy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgY2hhcmFjdGVyID0gXCJfXCJcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjaGFyYWN0ZXIgPSBjdXJyZW50U3RyaW5nW2ldO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjdHguZmlsbFRleHQoXHJcbiAgICAgICAgICAgIGNoYXJhY3RlcixcclxuICAgICAgICAgICAgMTAwICsgMjAgKiBpLFxyXG4gICAgICAgICAgICAyMDBcclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgY3R4LnJlc3RvcmUoKTtcclxuXHJcbiAgICAvLyBDYWxsIHVwZGF0ZSBvbiBldmVyeXRoaW5nIGp1c3QgYmVmb3JlIGRyYXdcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZHJhd2FibGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgdXBkYXRlYWJsZXNbaV0udXBkYXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRHJhdyB2YWx1ZXMgYXQgdGhlIGVuZCBvZiB0aGUgZnJhbWUgc28gdGhleSdyZSBhcyB1cFxyXG4gICAgLy8gdG8gZGF0ZSBhcyB0aGV5IGNhbiBiZVxyXG4gICAgY3R4LnNhdmUoKTtcclxuICAgIGN0eC5maWxsU3R5bGUgPSBcImJsYWNrXCI7XHJcbiAgICBjdHguZm9udCA9IFwiMjBweCBBcmlhbFwiO1xyXG4gICAgY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XHJcbiAgICBjdHguZmlsbFRleHQoZy5tb25rZXlzLnRvU3RyaW5nKCkgKyBcIiBtb25rZXlzXCIsIDE0MCwgODApO1xyXG4gICAgY3R4LmZpbGxUZXh0KGcuYmFuYW5hcy50b1N0cmluZygpICsgXCIgYmFuYW5hc1wiLCAxNDAsIDU1KTtcclxuICAgIGN0eC50ZXh0QWxpZ24gPSBcImxlZnRcIjtcclxuICAgIGN0eC5maWxsVGV4dChcIlRhcmdldCBTdHJpbmc6IFwiXHJcbiAgICAgICAgKyBnLmN1cnJlbnRUYXJnZXQuZGlzcGxheVN0cmluZywgMjUwLCAxMjApO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBnLmN1cnJlbnRUYXJnZXQucmV3YXJkcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGxldCBsaW5lID0gKGkgKyAxKSArIFwiOiBcIlxyXG4gICAgICAgICAgICArIGcuY3VycmVudFRhcmdldC5yZXdhcmRzW2ldICsgXCIgYmFuYW5hc1wiO1xyXG4gICAgICAgIGN0eC5maWxsVGV4dChsaW5lLCAyODAsIDE0MCArIDIwICogaSk7XHJcbiAgICB9XHJcbiAgICBjdHgudGV4dEFsaWduID0gXCJyaWdodFwiO1xyXG4gICAgY3R4LmZpbGxUZXh0KFwiS2V5Ym9hcmQgS2V5czpcIiwgMTYwLCAzMDApO1xyXG4gICAgY3R4LnJlc3RvcmUoKTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRyYXdhYmxlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGRyYXdhYmxlc1tpXS5kcmF3KGN1cnJlbnRUaW1lTWlsbGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwcmV2aW91c1RpbWVNaWxsaXMgPSBjdXJyZW50VGltZU1pbGxpcztcclxuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZHJhdyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldENvbGxpZGluZ0VudGl0eShwb2ludFg6IG51bWJlciwgcG9pbnRZOiBudW1iZXIpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29sbGlkZWFibGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgbGV0IGlzQ29sbGlkaW5nID0gY29sbGlkZWFibGVzW2ldLmNvbGxpZGUoZy5tb3VzZVgsIGcubW91c2VZKTtcclxuICAgICAgICBpZiAoaXNDb2xsaWRpbmcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNvbGxpZGVhYmxlc1tpXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRSYW5kb21TdHJpbmcoY2hhcmFjdGVyc1RvQ2hvb3NlRnJvbTogc3RyaW5nW10sIG46IG51bWJlcikge1xyXG4gICAgbGV0IHJhbmRvbU51bWJlcnMgPSBnZXRSYW5kb21OdW1iZXJzKG4pO1xyXG4gICAgbGV0IHN0cmluZyA9IFwiXCI7XHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgcmFuZG9tTnVtYmVycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHN0cmluZyArPSBjaGFyYWN0ZXJzVG9DaG9vc2VGcm9tW3JhbmRvbU51bWJlcnNbaV1dO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHN0cmluZztcclxufVxyXG5cclxuLy8gQnVmZmVyIHRoZSByYW5kb20gY2hhcmFjdGVycyB3ZSBnZXQgZnJvbSBjcnlwdG8gdG8gaW1wcm92ZVxyXG4vLyB0aGUgc3BlZWQuIEFsc28sIEkgdGVzdGVkIGl0LCBhbmQgaXQncyBmYXN0ZXIgdGhhbiB1c2luZ1xyXG4vLyBNYXRoLnJhbmRvbSwgYW5kIGhvcGVmdWxseSBoYXMgYmV0dGVyIHJhbmRvbW5lc3NcclxubGV0IGJ1ZmZlclNpemUgPSAxMDAwMDtcclxubGV0IG51bWJlckJ1ZmZlcjogVWludDE2QXJyYXkgPSBnZXRSYW5kb21OdW1iZXJzKGJ1ZmZlclNpemUpO1xyXG5sZXQgbnVtYmVyQnVmZmVySW5kZXggPSAtMTtcclxuZnVuY3Rpb24gZ2V0UmFuZG9tQ2hhcmFjdGVyKCkge1xyXG4gICAgbnVtYmVyQnVmZmVySW5kZXggKz0gMTtcclxuICAgIGlmIChudW1iZXJCdWZmZXJJbmRleCA+PSBidWZmZXJTaXplKSB7XHJcbiAgICAgICAgbnVtYmVyQnVmZmVySW5kZXggPSAwO1xyXG4gICAgICAgIG51bWJlckJ1ZmZlciA9IGdldFJhbmRvbU51bWJlcnMoYnVmZmVyU2l6ZSk7XHJcbiAgICB9XHJcbiAgICBsZXQgcmFuZG9tTnVtYmVyID0gbnVtYmVyQnVmZmVyW251bWJlckJ1ZmZlckluZGV4XTtcclxuICAgIHJldHVybiBjaGFyYWN0ZXJzVG9DaG9vc2VGcm9tW3JhbmRvbU51bWJlcl07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFJhbmRvbU51bWJlcnMobjogbnVtYmVyKSB7XHJcbiAgICBsZXQgcmFuZG9tTnVtYmVycyA9IG5ldyBVaW50MTZBcnJheShuKTtcclxuICAgIHJhbmRvbU51bWJlcnMgPSBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKHJhbmRvbU51bWJlcnMpO1xyXG4gICAgcmV0dXJuIHJhbmRvbU51bWJlcnM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJnYlN0cmluZyhyZWQ6IG51bWJlciwgZ3JlZW46IG51bWJlciwgYmx1ZTogbnVtYmVyKSB7XHJcbiAgICByZXR1cm4gXCJyZ2IoXCIgKyByZWQgKyBcIixcIiArIGdyZWVuICsgXCIsXCIgKyBibHVlICsgXCIpXCI7XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9