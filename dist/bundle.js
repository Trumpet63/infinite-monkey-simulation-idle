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
    monkeys: 1,
    lettersToTypeRemainder: 0,
    lettersPerSecond: 0,
    mouseX: -1,
    mouseY: -1,
    idCounter: 0,
};


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
/* harmony import */ var _targets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./targets */ "./src/targets.ts");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util */ "./src/util.ts");
// TODO:
// Prevent catchup lag after tab-out
// Add upgrades
// Auto-calculate average bananas per word
// Add save/load/reset
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
var buttonColor = rgbString(200, 200, 255);
var buttonHoverColor = rgbString(180, 180, 230);
// Make buttons out of all possible keyboard keys
// let keyboardKeys = [" ", "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var allKeyboardKeys = ["⎵", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var maxKeyboardKeys = 1;
var _loop_1 = function (i) {
    var key = allKeyboardKeys[i];
    var button = new _button__WEBPACK_IMPORTED_MODULE_0__.Button(40 + 30 * i, 450, 25, 25, key, buttonColor, buttonHoverColor, function () {
        if (button.isDisabled) {
            return;
        }
        createCurrentKeyboardKeyButton(keyboardKeys.length, key);
        keyboardKeys.push(key);
        updateCharactersToChooseFrom();
        currentString = [];
    }, function () {
        if (keyboardKeys.length < maxKeyboardKeys) {
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
var keyboardKeys = ["A"];
var charactersToChooseFrom;
var randomNumberSize = 65536;
updateCharactersToChooseFrom();
var keyboardKeyButtons = [];
createCurrentKeyboardKeyButton(0, keyboardKeys[0]);
// Make a button out of the a keyboard key so you
// can click to remove it from your keyboard.
// i is the index in the keyboardKeys array
// On click it deletes and remakes all the buttons
function createCurrentKeyboardKeyButton(i, key) {
    var button = new _button__WEBPACK_IMPORTED_MODULE_0__.Button(180 + 30 * i, 280, 25, 25, key, buttonColor, buttonHoverColor, function () {
        if (button.isDisabled) {
            return;
        }
        keyboardKeys.splice(i, 1);
        updateCharactersToChooseFrom();
        for (var j = 0; j < keyboardKeyButtons.length; j++) {
            keyboardKeyButtons[j].delete();
        }
        for (var j = 0; j < keyboardKeys.length; j++) {
            var key_1 = keyboardKeys[j];
            createCurrentKeyboardKeyButton(j, key_1);
        }
        currentString = [];
    }, function () { });
    keyboardKeyButtons.push(button);
}
function updateCharactersToChooseFrom() {
    charactersToChooseFrom = [];
    if (keyboardKeys.length === 0) {
        return;
    }
    for (var i = 0; i < randomNumberSize; i++) {
        charactersToChooseFrom.push(keyboardKeys[i % keyboardKeys.length]);
    }
}
var currentTarget = _targets__WEBPACK_IMPORTED_MODULE_2__.targets[0];
var currentString = [];
var targetButtons = [];
var _loop_2 = function (i) {
    var button = new _button__WEBPACK_IMPORTED_MODULE_0__.Button(500, 50 + 35 * i, 80, 30, _targets__WEBPACK_IMPORTED_MODULE_2__.targets[i].displayString + " " + _targets__WEBPACK_IMPORTED_MODULE_2__.targets[i].price, buttonColor, buttonHoverColor, function () {
        if (button.isDisabled) {
            return;
        }
        _global__WEBPACK_IMPORTED_MODULE_1__.g.bananas -= _targets__WEBPACK_IMPORTED_MODULE_2__.targets[i].price;
        // un-disable the current target
        for (var j = 0; j < _targets__WEBPACK_IMPORTED_MODULE_2__.targets.length; j++) {
            if (_targets__WEBPACK_IMPORTED_MODULE_2__.targets[j].displayString === currentTarget.displayString) {
                targetButtons[j].isDisabled = false;
            }
        }
        currentTarget = _targets__WEBPACK_IMPORTED_MODULE_2__.targets[i];
        targetButtons[i].isDisabled = true;
    }, function () {
        if (_targets__WEBPACK_IMPORTED_MODULE_2__.targets[i].price > _global__WEBPACK_IMPORTED_MODULE_1__.g.bananas
            || _targets__WEBPACK_IMPORTED_MODULE_2__.targets[i].displayString === currentTarget.displayString) {
            button.isDisabled = true;
        }
        else {
            button.isDisabled = false;
        }
    });
    targetButtons.push(button);
};
for (var i = 0; i < _targets__WEBPACK_IMPORTED_MODULE_2__.targets.length; i++) {
    _loop_2(i);
}
targetButtons[0].isDisabled = true;
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
    maxKeyboardKeys += 1;
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
        && currentString.length >= currentTarget.letters.length)) {
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
        if (currentString.length >= currentTarget.letters.length) {
            lastWordFinishTimeMillis = currentTimeMillis;
            var matchingLetters = (0,_util__WEBPACK_IMPORTED_MODULE_3__.countMatchingLetters)(currentString, currentTarget.letters);
            if (matchingLetters > 0) {
                _global__WEBPACK_IMPORTED_MODULE_1__.g.bananas += currentTarget.rewards[matchingLetters - 1];
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
    for (var i = 0; i < currentTarget.letters.length; i++) {
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
    _global__WEBPACK_IMPORTED_MODULE_1__.ctx.fillText(_global__WEBPACK_IMPORTED_MODULE_1__.g.lettersPerSecond.toString(), 140, 80);
    _global__WEBPACK_IMPORTED_MODULE_1__.ctx.fillText(_global__WEBPACK_IMPORTED_MODULE_1__.g.bananas.toString() + " bananas", 140, 55);
    _global__WEBPACK_IMPORTED_MODULE_1__.ctx.textAlign = "left";
    _global__WEBPACK_IMPORTED_MODULE_1__.ctx.fillText("Target String: " + currentTarget.displayString, 250, 120);
    for (var i = 0; i < currentTarget.rewards.length; i++) {
        var line = (i + 1) + ": " + currentTarget.rewards[i] + " bananas";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFhLEdBQUcsSUFBSSxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdkMsYUFBYSxHQUFHLE1BQU0sQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDdEQsT0FBTyxhQUFhLENBQUM7QUFDekIsQ0FBQztBQUVELFNBQVMsU0FBUyxDQUFDLEdBQVcsRUFBRSxLQUFhLEVBQUUsSUFBWTtJQUN2RCxPQUFPLE1BQU0sR0FBRyxHQUFHLEdBQUcsR0FBRyxHQUFHLEtBQUssR0FBRyxHQUFHLEdBQUcsSUFBSSxHQUFHLEdBQUcsQ0FBQztBQUN6RCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZXhwb3J0cy8uL3NyYy9idXR0b24udHMiLCJ3ZWJwYWNrOi8vZXhwb3J0cy8uL3NyYy9nbG9iYWwudHMiLCJ3ZWJwYWNrOi8vZXhwb3J0cy8uL3NyYy90YXJnZXQudHMiLCJ3ZWJwYWNrOi8vZXhwb3J0cy8uL3NyYy90YXJnZXRzLnRzIiwid2VicGFjazovL2V4cG9ydHMvLi9zcmMvdXRpbC50cyIsIndlYnBhY2s6Ly9leHBvcnRzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2V4cG9ydHMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2V4cG9ydHMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9leHBvcnRzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXhwb3J0cy8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb2xsaWRlYWJsZXMsIGN0eCwgZHJhd2FibGVzLCBnLCB1cGRhdGVhYmxlcyB9IGZyb20gXCIuL2dsb2JhbFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEJ1dHRvbiB7XHJcbiAgICBwdWJsaWMgaWQ6IG51bWJlcjtcclxuICAgIHB1YmxpYyB0b3BMZWZ0WDogbnVtYmVyO1xyXG4gICAgcHVibGljIHRvcExlZnRZOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgd2lkdGg6IG51bWJlcjtcclxuICAgIHB1YmxpYyBoZWlnaHQ6IG51bWJlcjtcclxuICAgIHB1YmxpYyBib3R0b21SaWdodFg6IG51bWJlcjtcclxuICAgIHB1YmxpYyBib3R0b21SaWdodFk6IG51bWJlcjtcclxuICAgIHB1YmxpYyB0ZXh0OiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgY29sb3I6IHN0cmluZztcclxuICAgIHB1YmxpYyBob3ZlcmVkQ29sb3I6IHN0cmluZztcclxuICAgIHB1YmxpYyBkaXNhYmxlZENvbG9yOiBzdHJpbmcgPSBcImdyYXlcIjtcclxuICAgIHB1YmxpYyBpc0hvdmVyZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHB1YmxpYyBpc0Rpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwdWJsaWMgaXNNb3VzZURvd25lZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHVibGljIG9uQ2xpY2s6IChjdXJyZW50VGltZU1pbGxpcz86IG51bWJlcikgPT4gdm9pZDtcclxuICAgIHB1YmxpYyB1cGRhdGU6ICgpID0+IHZvaWQ7XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHRvcExlZnRYOiBudW1iZXIsXHJcbiAgICAgICAgdG9wTGVmdFk6IG51bWJlcixcclxuICAgICAgICB3aWR0aDogbnVtYmVyLFxyXG4gICAgICAgIGhlaWdodDogbnVtYmVyLFxyXG4gICAgICAgIHRleHQ6IHN0cmluZyxcclxuICAgICAgICBjb2xvcjogc3RyaW5nLFxyXG4gICAgICAgIGhvdmVyZWRDb2xvcjogc3RyaW5nLFxyXG4gICAgICAgIG9uQ2xpY2s6IChjdXJyZW50VGltZU1pbGxpcz86IG51bWJlcikgPT4gdm9pZCxcclxuICAgICAgICB1cGRhdGU6ICgpID0+IHZvaWQsXHJcbiAgICApIHtcclxuICAgICAgICB0aGlzLmlkID0gZy5pZENvdW50ZXI7XHJcbiAgICAgICAgZy5pZENvdW50ZXIgKz0gMTtcclxuICAgICAgICB0aGlzLnRvcExlZnRYID0gdG9wTGVmdFg7XHJcbiAgICAgICAgdGhpcy50b3BMZWZ0WSA9IHRvcExlZnRZO1xyXG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcclxuICAgICAgICB0aGlzLmJvdHRvbVJpZ2h0WCA9IHRvcExlZnRYICsgd2lkdGg7XHJcbiAgICAgICAgdGhpcy5ib3R0b21SaWdodFkgPSB0b3BMZWZ0WSArIGhlaWdodDtcclxuICAgICAgICB0aGlzLnRleHQgPSB0ZXh0O1xyXG4gICAgICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcclxuICAgICAgICB0aGlzLmhvdmVyZWRDb2xvciA9IGhvdmVyZWRDb2xvcjtcclxuICAgICAgICB0aGlzLm9uQ2xpY2sgPSBvbkNsaWNrO1xyXG4gICAgICAgIHRoaXMudXBkYXRlID0gdXBkYXRlO1xyXG5cclxuICAgICAgICBkcmF3YWJsZXMucHVzaCh0aGlzKTtcclxuICAgICAgICBjb2xsaWRlYWJsZXMucHVzaCh0aGlzKTtcclxuICAgICAgICB1cGRhdGVhYmxlcy5wdXNoKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkcmF3KGN1cnJlbnRUaW1lTWlsbGlzOiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgdG9wTGVmdFggPSB0aGlzLnRvcExlZnRYO1xyXG4gICAgICAgIGxldCB0b3BMZWZ0WSA9IHRoaXMudG9wTGVmdFk7XHJcbiAgICAgICAgbGV0IHdpZHRoID0gdGhpcy53aWR0aDtcclxuICAgICAgICBsZXQgaGVpZ2h0ID0gdGhpcy5oZWlnaHQ7XHJcbiAgICAgICAgbGV0IGZvbnRTaXplID0gMTU7XHJcbiAgICAgICAgbGV0IGNvbG9yOiBzdHJpbmc7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNNb3VzZURvd25lZFxyXG4gICAgICAgICAgICAmJiAhdGhpcy5pc0Rpc2FibGVkKSB7XHJcbiAgICAgICAgICAgIGxldCBzaHJpbmsgPSAwLjE7XHJcbiAgICAgICAgICAgIGxldCBzaHJpbmtYID0gd2lkdGggKiBzaHJpbms7XHJcbiAgICAgICAgICAgIGxldCBzaHJpbmtZID0gaGVpZ2h0ICogc2hyaW5rO1xyXG4gICAgICAgICAgICB3aWR0aCAtPSBzaHJpbmtYO1xyXG4gICAgICAgICAgICBoZWlnaHQgLT0gc2hyaW5rWTtcclxuICAgICAgICAgICAgdG9wTGVmdFggKz0gc2hyaW5rWCAvIDI7XHJcbiAgICAgICAgICAgIHRvcExlZnRZICs9IHNocmlua1kgLyAyO1xyXG4gICAgICAgICAgICBmb250U2l6ZSAqPSAoMSAtIHNocmluayk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmlzRGlzYWJsZWQpIHtcclxuICAgICAgICAgICAgY29sb3IgPSB0aGlzLmRpc2FibGVkQ29sb3JcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc0hvdmVyZWQpIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yID0gdGhpcy5jb2xvcjtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yID0gdGhpcy5ob3ZlcmVkQ29sb3I7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGN0eC5zYXZlKCk7XHJcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xyXG4gICAgICAgIGN0eC5mb250ID0gZm9udFNpemUgKyBcInB4IEFyaWFsXCI7XHJcbiAgICAgICAgY3R4LmZpbGxSZWN0KHRvcExlZnRYLCB0b3BMZWZ0WSwgd2lkdGgsIGhlaWdodCk7XHJcbiAgICAgICAgY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XHJcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwiYmxhY2tcIjtcclxuICAgICAgICBjdHguZmlsbFRleHQoXHJcbiAgICAgICAgICAgIHRoaXMudGV4dCxcclxuICAgICAgICAgICAgdG9wTGVmdFggKyB3aWR0aCAvIDIsXHJcbiAgICAgICAgICAgIHRvcExlZnRZICsgaGVpZ2h0IC8gMiArIGZvbnRTaXplIC8gMi40XHJcbiAgICAgICAgKTtcclxuICAgICAgICBjdHgucmVzdG9yZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjb2xsaWRlKHBvaW50WDogbnVtYmVyLCBwb2ludFk6IG51bWJlcikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRvcExlZnRYIDw9IHBvaW50WFxyXG4gICAgICAgICAgICAmJiBwb2ludFggPD0gdGhpcy5ib3R0b21SaWdodFhcclxuICAgICAgICAgICAgJiYgdGhpcy50b3BMZWZ0WSA8PSBwb2ludFlcclxuICAgICAgICAgICAgJiYgcG9pbnRZIDw9IHRoaXMuYm90dG9tUmlnaHRZO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkZWxldGUoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkcmF3YWJsZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKGRyYXdhYmxlc1tpXS5pZCA9PT0gdGhpcy5pZCkge1xyXG4gICAgICAgICAgICAgICAgZHJhd2FibGVzLnNwbGljZShpLCAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbGxpZGVhYmxlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoY29sbGlkZWFibGVzW2ldLmlkID09PSB0aGlzLmlkKSB7XHJcbiAgICAgICAgICAgICAgICBjb2xsaWRlYWJsZXMuc3BsaWNlKGksIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdXBkYXRlYWJsZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHVwZGF0ZWFibGVzW2ldLmlkID09PSB0aGlzLmlkKSB7XHJcbiAgICAgICAgICAgICAgICB1cGRhdGVhYmxlcy5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29sbGlkZWFibGUsIERyYXdhYmxlLCBVcGRhdGVhYmxlIH0gZnJvbSBcIi4vdHlwZXNcIjtcclxuXHJcbmV4cG9ydCBsZXQgd2lkdGg6IG51bWJlciA9IDEwMDA7XHJcbmV4cG9ydCBsZXQgaGVpZ2h0OiBudW1iZXIgPSA3MDA7XHJcbmV4cG9ydCBsZXQgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XHJcbmV4cG9ydCBsZXQgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcclxuY2FudmFzLndpZHRoID0gd2lkdGg7XHJcbmNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XHJcbmN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XHJcbmV4cG9ydCBsZXQgZHJhd2FibGVzOiBEcmF3YWJsZVtdID0gW107XHJcbmV4cG9ydCBsZXQgY29sbGlkZWFibGVzOiBDb2xsaWRlYWJsZVtdID0gW107XHJcbmV4cG9ydCBsZXQgdXBkYXRlYWJsZXM6IFVwZGF0ZWFibGVbXSA9IFtdO1xyXG5cclxuLy8gUHV0IGFueSBnbG9iYWwgdmFyaWFibGVzIHRoYXQgeW91IHdhbnQgdG8gYmUgYWJsZSB0byByZWFzc2lnbiBoZXJlXHJcbmV4cG9ydCBsZXQgZyA9IHtcclxuICAgIGJhbmFuYXM6IDAsXHJcbiAgICBtb25rZXlzOiAxLFxyXG4gICAgbGV0dGVyc1RvVHlwZVJlbWFpbmRlcjogMCxcclxuICAgIGxldHRlcnNQZXJTZWNvbmQ6IDAsXHJcbiAgICBtb3VzZVg6IC0xLFxyXG4gICAgbW91c2VZOiAtMSxcclxuICAgIGlkQ291bnRlcjogMCxcclxufTtcclxuIiwiZXhwb3J0IGNsYXNzIFRhcmdldCB7XHJcbiAgICBwdWJsaWMgbGV0dGVyczogc3RyaW5nW107XHJcbiAgICBwdWJsaWMgZGlzcGxheVN0cmluZzogc3RyaW5nO1xyXG4gICAgcHVibGljIHJld2FyZHM6IG51bWJlcltdO1xyXG4gICAgcHVibGljIHByaWNlOiBudW1iZXI7XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIGxldHRlcnM6IHN0cmluZ1tdLFxyXG4gICAgICAgIGRpc3BsYXlTdHJpbmc6IHN0cmluZyxcclxuICAgICAgICByZXdhcmRzOiBudW1iZXJbXSxcclxuICAgICAgICBwcmljZTogbnVtYmVyLFxyXG4gICAgKSB7XHJcbiAgICAgICAgdGhpcy5sZXR0ZXJzID0gbGV0dGVycztcclxuICAgICAgICB0aGlzLmRpc3BsYXlTdHJpbmcgPSBkaXNwbGF5U3RyaW5nO1xyXG4gICAgICAgIHRoaXMucmV3YXJkcyA9IHJld2FyZHM7XHJcbiAgICAgICAgdGhpcy5wcmljZSA9IHByaWNlO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IFRhcmdldCB9IGZyb20gXCIuL3RhcmdldFwiO1xyXG5cclxuZXhwb3J0IGxldCB0YXJnZXRzOiBUYXJnZXRbXSA9IFtcclxuICAgIG5ldyBUYXJnZXQoXHJcbiAgICAgICAgW1wiQ1wiLCBcIkFcIiwgXCJUXCJdLFxyXG4gICAgICAgIFwiQ0FUXCIsXHJcbiAgICAgICAgWzEsIDgsIDQwXSxcclxuICAgICAgICAwLFxyXG4gICAgKSxcclxuICAgIG5ldyBUYXJnZXQoXHJcbiAgICAgICAgW1wiSFwiLCBcIk9cIiwgXCJPXCIsIFwiVFwiXSxcclxuICAgICAgICBcIkhPT1RcIixcclxuICAgICAgICBbNSwgNSwgMjAsIDQwLCAxMjBdLFxyXG4gICAgICAgIDIwMDAsXHJcbiAgICApLFxyXG4gICAgbmV3IFRhcmdldChcclxuICAgICAgICBbXCJSXCIsIFwiRVwiLCBcIkZcIiwgXCJFXCIsIFwiUlwiLCBcIkVcIiwgXCJFXCJdLFxyXG4gICAgICAgIFwiUkVGRVJFRVwiLFxyXG4gICAgICAgIFs1LCA1LCA1LCAyMCwgNDAwLCAyNDAwLCAxNTAwMF0sXHJcbiAgICAgICAgMzAwMDAsXHJcbiAgICApLFxyXG4gICAgLy8gbmV3IFRhcmdldChcclxuICAgIC8vICAgICBbXSxcclxuICAgIC8vICAgICBcIlwiLFxyXG4gICAgLy8gICAgIFtdLFxyXG4gICAgLy8gICAgIDAsXHJcbiAgICAvLyApLFxyXG5dO1xyXG4iLCJleHBvcnQgZnVuY3Rpb24gY291bnRNYXRjaGluZ0xldHRlcnMoczE6IHN0cmluZ1tdLCBzMjogc3RyaW5nW10pIHtcclxuICAgIGxldCBtYXRjaGluZyA9IDA7XHJcbiAgICBsZXQgbWluTGVuZ3RoID0gTWF0aC5taW4oczEubGVuZ3RoLCBzMi5sZW5ndGgpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtaW5MZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmIChzMVtpXSA9PT0gczJbaV0pIHtcclxuICAgICAgICAgICAgbWF0Y2hpbmcrKztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbWF0Y2hpbmc7XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBUT0RPOlxyXG4vLyBQcmV2ZW50IGNhdGNodXAgbGFnIGFmdGVyIHRhYi1vdXRcclxuLy8gQWRkIHVwZ3JhZGVzXHJcbi8vIEF1dG8tY2FsY3VsYXRlIGF2ZXJhZ2UgYmFuYW5hcyBwZXIgd29yZFxyXG4vLyBBZGQgc2F2ZS9sb2FkL3Jlc2V0XHJcbi8vIGdldCByaWQgb2YgcmVwZWF0cyBvZiBpZiAoYnV0dG9uLmlzRGlzYWJsZWQpIHtyZXR1cm47fVxyXG5cclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIi4vYnV0dG9uXCI7XHJcbmltcG9ydCB7IGNhbnZhcywgY29sbGlkZWFibGVzLCBjdHgsIGRyYXdhYmxlcywgZywgdXBkYXRlYWJsZXMgfSBmcm9tIFwiLi9nbG9iYWxcIjtcclxuaW1wb3J0IHsgVGFyZ2V0IH0gZnJvbSBcIi4vdGFyZ2V0XCI7XHJcbmltcG9ydCB7IHRhcmdldHMgfSBmcm9tIFwiLi90YXJnZXRzXCI7XHJcbmltcG9ydCB7IGRvd25sb2FkLCBnZW5lcmF0ZVBlcm11dGF0aW9ucyB9IGZyb20gXCIuL3Rlc3RfcGVybXV0YXRpb25zXCI7XHJcbmltcG9ydCB7IENvbGxpZGVhYmxlIH0gZnJvbSBcIi4vdHlwZXNcIjtcclxuaW1wb3J0IHsgY291bnRNYXRjaGluZ0xldHRlcnMgfSBmcm9tIFwiLi91dGlsXCI7XHJcblxyXG4vLyBsZXQgcmVwb3J0MSA9IGdlbmVyYXRlUGVybXV0YXRpb25zKFxyXG4vLyAgICAgW1wiSFwiLCBcIk9cIiwgXCJUXCJdLFxyXG4vLyAgICAgW1wiSFwiLCBcIk9cIiwgXCJPXCIsIFwiVFwiXSxcclxuLy8gKTtcclxuLy8gZG93bmxvYWQoXCJob3QtaG9vdC1wZXJtdXRhdGlvbnMuY3N2XCIsIHJlcG9ydDEpO1xyXG5cclxuLy8gbGV0IHJlcG9ydDIgPSBnZW5lcmF0ZVBlcm11dGF0aW9ucyhcclxuLy8gICAgIFtcIkhcIiwgXCJPXCIsIFwiT1wiLCBcIlRcIl0sXHJcbi8vICAgICBbXCJIXCIsIFwiT1wiLCBcIk9cIiwgXCJUXCJdLFxyXG4vLyApO1xyXG4vLyBkb3dubG9hZChcImhvb3QtaG9vdC1wZXJtdXRhdGlvbnMuY3N2XCIsIHJlcG9ydDIpO1xyXG5cclxubGV0IGJ1dHRvbkNvbG9yOiBzdHJpbmcgPSByZ2JTdHJpbmcoMjAwLCAyMDAsIDI1NSk7XHJcbmxldCBidXR0b25Ib3ZlckNvbG9yOiBzdHJpbmcgPSByZ2JTdHJpbmcoMTgwLCAxODAsIDIzMCk7XHJcblxyXG4vLyBNYWtlIGJ1dHRvbnMgb3V0IG9mIGFsbCBwb3NzaWJsZSBrZXlib2FyZCBrZXlzXHJcbi8vIGxldCBrZXlib2FyZEtleXMgPSBbXCIgXCIsIFwiQVwiLFwiQlwiLFwiQ1wiLFwiRFwiLFwiRVwiLFwiRlwiLFwiR1wiLFwiSFwiLFwiSVwiLFwiSlwiLFwiS1wiLFwiTFwiLFwiTVwiLFwiTlwiLFwiT1wiLFwiUFwiLFwiUVwiLFwiUlwiLFwiU1wiLFwiVFwiLFwiVVwiLFwiVlwiLFwiV1wiLFwiWFwiLFwiWVwiLFwiWlwiXTtcclxubGV0IGFsbEtleWJvYXJkS2V5cyA9IFtcIuKOtVwiLCBcIkFcIixcIkJcIixcIkNcIixcIkRcIixcIkVcIixcIkZcIixcIkdcIixcIkhcIixcIklcIixcIkpcIixcIktcIixcIkxcIixcIk1cIixcIk5cIixcIk9cIixcIlBcIixcIlFcIixcIlJcIixcIlNcIixcIlRcIixcIlVcIixcIlZcIixcIldcIixcIlhcIixcIllcIixcIlpcIl07XHJcbmxldCBtYXhLZXlib2FyZEtleXMgPSAxO1xyXG5mb3IgKGxldCBpID0gMDsgaSA8IGFsbEtleWJvYXJkS2V5cy5sZW5ndGg7IGkrKykge1xyXG4gICAgbGV0IGtleSA9IGFsbEtleWJvYXJkS2V5c1tpXTtcclxuICAgIGxldCBidXR0b24gPSBuZXcgQnV0dG9uKFxyXG4gICAgICAgIDQwICsgMzAgKiBpLFxyXG4gICAgICAgIDQ1MCxcclxuICAgICAgICAyNSxcclxuICAgICAgICAyNSxcclxuICAgICAgICBrZXksXHJcbiAgICAgICAgYnV0dG9uQ29sb3IsXHJcbiAgICAgICAgYnV0dG9uSG92ZXJDb2xvcixcclxuICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChidXR0b24uaXNEaXNhYmxlZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNyZWF0ZUN1cnJlbnRLZXlib2FyZEtleUJ1dHRvbihrZXlib2FyZEtleXMubGVuZ3RoLCBrZXkpO1xyXG4gICAgICAgICAgICBrZXlib2FyZEtleXMucHVzaChrZXkpO1xyXG4gICAgICAgICAgICB1cGRhdGVDaGFyYWN0ZXJzVG9DaG9vc2VGcm9tKCk7XHJcbiAgICAgICAgICAgIGN1cnJlbnRTdHJpbmcgPSBbXTtcclxuICAgICAgICB9LFxyXG4gICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKGtleWJvYXJkS2V5cy5sZW5ndGggPCBtYXhLZXlib2FyZEtleXMpIHtcclxuICAgICAgICAgICAgICAgIGJ1dHRvbi5pc0Rpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBidXR0b24uaXNEaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgKTtcclxufVxyXG5cclxubGV0IGtleWJvYXJkS2V5cyA9IFtcIkFcIl07XHJcbmxldCBjaGFyYWN0ZXJzVG9DaG9vc2VGcm9tOiBzdHJpbmdbXTtcclxubGV0IHJhbmRvbU51bWJlclNpemUgPSA2NTUzNjtcclxudXBkYXRlQ2hhcmFjdGVyc1RvQ2hvb3NlRnJvbSgpO1xyXG5sZXQga2V5Ym9hcmRLZXlCdXR0b25zOiBCdXR0b25bXSA9IFtdXHJcbmNyZWF0ZUN1cnJlbnRLZXlib2FyZEtleUJ1dHRvbigwLCBrZXlib2FyZEtleXNbMF0pO1xyXG5cclxuLy8gTWFrZSBhIGJ1dHRvbiBvdXQgb2YgdGhlIGEga2V5Ym9hcmQga2V5IHNvIHlvdVxyXG4vLyBjYW4gY2xpY2sgdG8gcmVtb3ZlIGl0IGZyb20geW91ciBrZXlib2FyZC5cclxuLy8gaSBpcyB0aGUgaW5kZXggaW4gdGhlIGtleWJvYXJkS2V5cyBhcnJheVxyXG4vLyBPbiBjbGljayBpdCBkZWxldGVzIGFuZCByZW1ha2VzIGFsbCB0aGUgYnV0dG9uc1xyXG5mdW5jdGlvbiBjcmVhdGVDdXJyZW50S2V5Ym9hcmRLZXlCdXR0b24oaTogbnVtYmVyLCBrZXk6IHN0cmluZykge1xyXG4gICAgbGV0IGJ1dHRvbiA9IG5ldyBCdXR0b24oXHJcbiAgICAgICAgMTgwICsgMzAgKiBpLFxyXG4gICAgICAgIDI4MCxcclxuICAgICAgICAyNSxcclxuICAgICAgICAyNSxcclxuICAgICAgICBrZXksXHJcbiAgICAgICAgYnV0dG9uQ29sb3IsXHJcbiAgICAgICAgYnV0dG9uSG92ZXJDb2xvcixcclxuICAgICAgICAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChidXR0b24uaXNEaXNhYmxlZCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGtleWJvYXJkS2V5cy5zcGxpY2UoaSwgMSk7XHJcbiAgICAgICAgICAgIHVwZGF0ZUNoYXJhY3RlcnNUb0Nob29zZUZyb20oKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBrZXlib2FyZEtleUJ1dHRvbnMubGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgICAgIGtleWJvYXJkS2V5QnV0dG9uc1tqXS5kZWxldGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGtleWJvYXJkS2V5cy5sZW5ndGg7IGorKykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGtleSA9IGtleWJvYXJkS2V5c1tqXTtcclxuICAgICAgICAgICAgICAgIGNyZWF0ZUN1cnJlbnRLZXlib2FyZEtleUJ1dHRvbihqLCBrZXkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGN1cnJlbnRTdHJpbmcgPSBbXTtcclxuICAgICAgICB9LFxyXG4gICAgICAgICgpID0+IHt9LFxyXG4gICAgKTtcclxuICAgIGtleWJvYXJkS2V5QnV0dG9ucy5wdXNoKGJ1dHRvbik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHVwZGF0ZUNoYXJhY3RlcnNUb0Nob29zZUZyb20oKSB7XHJcbiAgICBjaGFyYWN0ZXJzVG9DaG9vc2VGcm9tID0gW107XHJcbiAgICBpZiAoa2V5Ym9hcmRLZXlzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmFuZG9tTnVtYmVyU2l6ZTsgaSsrKSB7XHJcbiAgICAgICAgY2hhcmFjdGVyc1RvQ2hvb3NlRnJvbS5wdXNoKGtleWJvYXJkS2V5c1tpICUga2V5Ym9hcmRLZXlzLmxlbmd0aF0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5sZXQgY3VycmVudFRhcmdldDogVGFyZ2V0ID0gdGFyZ2V0c1swXTtcclxubGV0IGN1cnJlbnRTdHJpbmc6IHN0cmluZ1tdID0gW107XHJcblxyXG5sZXQgdGFyZ2V0QnV0dG9uczogQnV0dG9uW10gPSBbXTtcclxuZm9yIChsZXQgaSA9IDA7IGkgPCB0YXJnZXRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICBsZXQgYnV0dG9uID0gbmV3IEJ1dHRvbihcclxuICAgICAgICA1MDAsXHJcbiAgICAgICAgNTAgKyAzNSAqIGksXHJcbiAgICAgICAgODAsXHJcbiAgICAgICAgMzAsXHJcbiAgICAgICAgdGFyZ2V0c1tpXS5kaXNwbGF5U3RyaW5nICsgXCIgXCIgKyB0YXJnZXRzW2ldLnByaWNlLFxyXG4gICAgICAgIGJ1dHRvbkNvbG9yLFxyXG4gICAgICAgIGJ1dHRvbkhvdmVyQ29sb3IsXHJcbiAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoYnV0dG9uLmlzRGlzYWJsZWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBnLmJhbmFuYXMgLT0gdGFyZ2V0c1tpXS5wcmljZTtcclxuICAgICAgICAgICAgLy8gdW4tZGlzYWJsZSB0aGUgY3VycmVudCB0YXJnZXRcclxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0YXJnZXRzLmxlbmd0aDsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGFyZ2V0c1tqXS5kaXNwbGF5U3RyaW5nID09PSBjdXJyZW50VGFyZ2V0LmRpc3BsYXlTdHJpbmcpIHtcclxuICAgICAgICAgICAgICAgICAgICB0YXJnZXRCdXR0b25zW2pdLmlzRGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjdXJyZW50VGFyZ2V0ID0gdGFyZ2V0c1tpXTtcclxuICAgICAgICAgICAgdGFyZ2V0QnV0dG9uc1tpXS5pc0Rpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRhcmdldHNbaV0ucHJpY2UgPiBnLmJhbmFuYXNcclxuICAgICAgICAgICAgICAgIHx8IHRhcmdldHNbaV0uZGlzcGxheVN0cmluZyA9PT0gY3VycmVudFRhcmdldC5kaXNwbGF5U3RyaW5nKSB7XHJcbiAgICAgICAgICAgICAgICBidXR0b24uaXNEaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBidXR0b24uaXNEaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICk7XHJcbiAgICB0YXJnZXRCdXR0b25zLnB1c2goYnV0dG9uKTtcclxufVxyXG50YXJnZXRCdXR0b25zWzBdLmlzRGlzYWJsZWQgPSB0cnVlO1xyXG5cclxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjYW52YXMpO1xyXG5cclxubGV0IHJlY3J1aXRQcmljZSA9IDEwO1xyXG5sZXQgYnV0dG9uMSA9IG5ldyBCdXR0b24oXHJcbiAgICAxMDAsXHJcbiAgICAxMDAsXHJcbiAgICA4MCxcclxuICAgIDMwLFxyXG4gICAgXCJSZWNydWl0IE1vbmtleSBcIiArIHJlY3J1aXRQcmljZSxcclxuICAgIGJ1dHRvbkNvbG9yLFxyXG4gICAgYnV0dG9uSG92ZXJDb2xvcixcclxuICAgICgpID0+IHtcclxuICAgICAgICBpZiAoYnV0dG9uMS5pc0Rpc2FibGVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZy5tb25rZXlzICs9IDE7XHJcbiAgICAgICAgZy5sZXR0ZXJzUGVyU2Vjb25kICs9IDE7XHJcbiAgICAgICAgZy5iYW5hbmFzIC09IHJlY3J1aXRQcmljZTtcclxuICAgICAgICByZWNydWl0UHJpY2UgKz0gMjtcclxuICAgICAgICBidXR0b24xLnRleHQgPSBcIlJlY3J1aXQgTW9ua2V5IFwiICsgcmVjcnVpdFByaWNlO1xyXG4gICAgfSxcclxuICAgICgpID0+IHtcclxuICAgICAgICBpZiAocmVjcnVpdFByaWNlID4gZy5iYW5hbmFzKSB7XHJcbiAgICAgICAgICAgIGJ1dHRvbjEuaXNEaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgYnV0dG9uMS5pc0Rpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuKTtcclxuXHJcbmxldCBsYXN0Q2xpY2tlZFRpbWVNaWxsaXM6IG51bWJlcjtcclxubGV0IGJ1dHRvbjIgPSBuZXcgQnV0dG9uKFxyXG4gICAgMTAwLFxyXG4gICAgMzUwLFxyXG4gICAgODAsXHJcbiAgICAzMCxcclxuICAgIFwiVHlwZVwiLFxyXG4gICAgYnV0dG9uQ29sb3IsXHJcbiAgICBidXR0b25Ib3ZlckNvbG9yLFxyXG4gICAgKGN1cnJlbnRUaW1lTWlsbGlzOiBudW1iZXIpID0+IHtcclxuICAgICAgICBpZiAoY3VycmVudFRpbWVNaWxsaXMgIT09IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICAmJiAoY3VycmVudFRpbWVNaWxsaXMgLSBsYXN0Q2xpY2tlZFRpbWVNaWxsaXMpIDwgNTApIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBnLmxldHRlcnNUb1R5cGVSZW1haW5kZXIgKz0gMTtcclxuICAgICAgICBsYXN0Q2xpY2tlZFRpbWVNaWxsaXMgPSBjdXJyZW50VGltZU1pbGxpcztcclxuICAgIH0sXHJcbiAgICAoKSA9PiB7fVxyXG4pO1xyXG5cclxubGV0IHVwZ3JhZGVLZXlib2FyZFByaWNlID0gMTAwO1xyXG5sZXQgYnV0dG9uMyA9IG5ldyBCdXR0b24oXHJcbiAgICAyNTAsXHJcbiAgICA0MDAsXHJcbiAgICA4MCxcclxuICAgIDMwLFxyXG4gICAgXCJVcGdyYWRlIEtleWJvYXJkIDEwMFwiLFxyXG4gICAgYnV0dG9uQ29sb3IsXHJcbiAgICBidXR0b25Ib3ZlckNvbG9yLFxyXG4gICAgKCkgPT4ge1xyXG4gICAgICAgIGlmIChidXR0b24zLmlzRGlzYWJsZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBnLmJhbmFuYXMgLT0gdXBncmFkZUtleWJvYXJkUHJpY2U7XHJcbiAgICAgICAgbWF4S2V5Ym9hcmRLZXlzICs9IDE7XHJcbiAgICAgICAgdXBkYXRlQ2hhcmFjdGVyc1RvQ2hvb3NlRnJvbSgpO1xyXG4gICAgICAgIHVwZ3JhZGVLZXlib2FyZFByaWNlICo9IDEwO1xyXG4gICAgICAgIGJ1dHRvbjMudGV4dCA9IFwiVXBncmFkZSBLZXlib2FyZCBcIiArIHVwZ3JhZGVLZXlib2FyZFByaWNlO1xyXG4gICAgfSxcclxuICAgICgpID0+IHtcclxuICAgICAgICBpZiAodXBncmFkZUtleWJvYXJkUHJpY2UgPiBnLmJhbmFuYXMpIHtcclxuICAgICAgICAgICAgYnV0dG9uMy5pc0Rpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBidXR0b24zLmlzRGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbik7XHJcblxyXG4vLyBzdG9yZSB0aGUgbW91c2UgeHkgaW4gY2FzZSBpdCBnZXRzIGV4ZWN1dGVkIGZhc3RlciB0aGFuXHJcbi8vIG9uY2UgZXZlcnkgZnJhbWUsIHdoaWNoIHdvdWxkIGJlIHVzZWxlc3Mgc2luY2UgaG92ZXIgaXNcclxuLy8gaGFuZGxlZCBvbmx5IG9uY2UgZXZlcnkgZnJhbWVcclxuY2FudmFzLm9ubW91c2Vtb3ZlID0gKGV2OiBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICBsZXQgYm91bmRzOiBET01SZWN0ID0gY2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgZy5tb3VzZVggPSBldi54IC0gYm91bmRzLmxlZnQ7XHJcbiAgICBnLm1vdXNlWSA9IGV2LnkgLSBib3VuZHMudG9wO1xyXG59O1xyXG5cclxuLy8gYXNzdW1lIGZvciBzaW1wbGljaXR5IHRoYXQgeW91IGNhbid0IGhhdmUgdHdvIG1vdXNlZG93blxyXG4vLyBldmVudHMgd2l0aG91dCBhIG1vdXNldXBcclxuY2FudmFzLm9ubW91c2Vkb3duID0gKGV2OiBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICBsZXQgYm91bmRzOiBET01SZWN0ID0gY2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgbGV0IG1vdXNlWCA9IGV2LnggLSBib3VuZHMubGVmdDtcclxuICAgIGxldCBtb3VzZVkgPSBldi55IC0gYm91bmRzLnRvcDtcclxuICAgIGxldCBjb2xsaWRlYWJsZTogQ29sbGlkZWFibGUgPSBnZXRDb2xsaWRpbmdFbnRpdHkobW91c2VYLCBtb3VzZVkpO1xyXG4gICAgaWYgKGNvbGxpZGVhYmxlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBjb2xsaWRlYWJsZS5pc01vdXNlRG93bmVkID0gdHJ1ZTtcclxuICAgICAgICBjdXJyZW50TW91c2VEb3duZWQgPSBjb2xsaWRlYWJsZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY3VycmVudE1vdXNlRG93bmVkID0gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG59XHJcblxyXG5jYW52YXMub25tb3VzZXVwID0gKGV2OiBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICBsZXQgYm91bmRzOiBET01SZWN0ID0gY2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgbGV0IG1vdXNlWCA9IGV2LnggLSBib3VuZHMubGVmdDtcclxuICAgIGxldCBtb3VzZVkgPSBldi55IC0gYm91bmRzLnRvcDtcclxuICAgIGxldCBjb2xsaWRlYWJsZTogQ29sbGlkZWFibGUgPSBnZXRDb2xsaWRpbmdFbnRpdHkobW91c2VYLCBtb3VzZVkpO1xyXG4gICAgaWYgKGNvbGxpZGVhYmxlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBpZiAoY29sbGlkZWFibGUuaXNNb3VzZURvd25lZCkge1xyXG4gICAgICAgICAgICBjb2xsaWRlYWJsZS5vbkNsaWNrKGV2LnRpbWVTdGFtcCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKGN1cnJlbnRNb3VzZURvd25lZCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgY3VycmVudE1vdXNlRG93bmVkLmlzTW91c2VEb3duZWQgPSBmYWxzZTtcclxuICAgIH1cclxufVxyXG5cclxubGV0IHByZXZpb3VzVGltZU1pbGxpczogbnVtYmVyO1xyXG5sZXQgcHJldmlvdXNIb3ZlcmVkOiBDb2xsaWRlYWJsZTtcclxubGV0IGN1cnJlbnRNb3VzZURvd25lZDogQ29sbGlkZWFibGU7XHJcbmxldCBsYXN0V29yZEZpbmlzaFRpbWVNaWxsaXM6IG51bWJlcjtcclxuXHJcbndpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZHJhdyk7XHJcblxyXG5mdW5jdGlvbiBkcmF3KGN1cnJlbnRUaW1lTWlsbGlzOiBudW1iZXIpIHtcclxuICAgIGxldCBlbGFwc2VkVGltZU1pbGxpczogbnVtYmVyID0gMDtcclxuICAgIGlmIChwcmV2aW91c1RpbWVNaWxsaXMgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGVsYXBzZWRUaW1lTWlsbGlzID0gY3VycmVudFRpbWVNaWxsaXMgLSBwcmV2aW91c1RpbWVNaWxsaXM7XHJcbiAgICB9XHJcblxyXG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xyXG4gICAgY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcclxuICAgIGN0eC5maWxsUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xyXG5cclxuICAgIGlmIChwcmV2aW91c0hvdmVyZWQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHByZXZpb3VzSG92ZXJlZC5pc0hvdmVyZWQgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29sbGlkZWFibGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgbGV0IGlzQ29sbGlkaW5nID0gY29sbGlkZWFibGVzW2ldLmNvbGxpZGUoZy5tb3VzZVgsIGcubW91c2VZKTtcclxuICAgICAgICBpZiAoaXNDb2xsaWRpbmcpIHtcclxuICAgICAgICAgICAgbGV0IGN1cnJlbnRIb3ZlcmVkID0gY29sbGlkZWFibGVzW2ldO1xyXG4gICAgICAgICAgICBjdXJyZW50SG92ZXJlZC5pc0hvdmVyZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICBwcmV2aW91c0hvdmVyZWQgPSBjdXJyZW50SG92ZXJlZDtcclxuICAgICAgICAgICAgYnJlYWs7IC8vIG9ubHkgb25lIHRoaW5nIGNhbiBiZSBob3ZlcmVkIG92ZXIgYXQgYSB0aW1lXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGcubGV0dGVyc1RvVHlwZVJlbWFpbmRlciArPSBlbGFwc2VkVGltZU1pbGxpcyAvIDEwMDAgKiBnLmxldHRlcnNQZXJTZWNvbmQ7XHJcbiAgICBcclxuICAgIC8vIE1ha2UgYSBmaW5pc2hlZCB3b3JkIHN0YXkgb24gc2NyZWVuIGZvciA1MDBtcywgb3IgdW50aWxcclxuICAgIC8vIGFub3RoZXIgbGV0dGVyIGlzIHR5cGVkXHJcbiAgICBpZiAoKFxyXG4gICAgICAgICAgICBsYXN0V29yZEZpbmlzaFRpbWVNaWxsaXMgIT09IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICAmJiAoY3VycmVudFRpbWVNaWxsaXMgLSBsYXN0V29yZEZpbmlzaFRpbWVNaWxsaXMpID4gNTAwXHJcbiAgICAgICAgKSB8fCAoXHJcbiAgICAgICAgICAgIGcubGV0dGVyc1RvVHlwZVJlbWFpbmRlciA+PSAxXHJcbiAgICAgICAgICAgICYmIGN1cnJlbnRTdHJpbmcubGVuZ3RoID49IGN1cnJlbnRUYXJnZXQubGV0dGVycy5sZW5ndGhcclxuICAgICAgICApKSB7XHJcbiAgICAgICAgY3VycmVudFN0cmluZyA9IFtdO1xyXG4gICAgICAgIGxhc3RXb3JkRmluaXNoVGltZU1pbGxpcyA9IHVuZGVmaW5lZDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gR2VuZXJhdGUgdGhlIG5lZWRlZCBjaGFyYWN0ZXJzIGFuZCBhd2FyZCBiYW5hbmFzXHJcbiAgICB3aGlsZSAoZy5sZXR0ZXJzVG9UeXBlUmVtYWluZGVyID49IDEpIHtcclxuICAgICAgICBnLmxldHRlcnNUb1R5cGVSZW1haW5kZXIgLT0gMTtcclxuICAgICAgICBpZiAoY2hhcmFjdGVyc1RvQ2hvb3NlRnJvbS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBjaGFyYWN0ZXIgPSBnZXRSYW5kb21DaGFyYWN0ZXIoKTtcclxuICAgICAgICBjdXJyZW50U3RyaW5nLnB1c2goY2hhcmFjdGVyKTtcclxuICAgICAgICBpZiAoY3VycmVudFN0cmluZy5sZW5ndGggPj0gY3VycmVudFRhcmdldC5sZXR0ZXJzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBsYXN0V29yZEZpbmlzaFRpbWVNaWxsaXMgPSBjdXJyZW50VGltZU1pbGxpcztcclxuICAgICAgICAgICAgbGV0IG1hdGNoaW5nTGV0dGVyczogbnVtYmVyID0gY291bnRNYXRjaGluZ0xldHRlcnMoY3VycmVudFN0cmluZywgY3VycmVudFRhcmdldC5sZXR0ZXJzKTtcclxuICAgICAgICAgICAgaWYgKG1hdGNoaW5nTGV0dGVycyA+IDApIHtcclxuICAgICAgICAgICAgICAgIGcuYmFuYW5hcyArPSBjdXJyZW50VGFyZ2V0LnJld2FyZHNbbWF0Y2hpbmdMZXR0ZXJzIC0gMV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGcubGV0dGVyc1RvVHlwZVJlbWFpbmRlciA+PSAxKSB7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50U3RyaW5nID0gW107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRHJhdyB0aGUgY3VycmVudCBzdHJpbmcgb24gc2NyZWVuXHJcbiAgICBjdHguc2F2ZSgpO1xyXG4gICAgY3R4LmZpbGxTdHlsZSA9IFwiYmxhY2tcIjtcclxuICAgIGN0eC5mb250ID0gXCIyMHB4IEFyaWFsXCI7XHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgY3VycmVudFRhcmdldC5sZXR0ZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgbGV0IGNoYXJhY3Rlcjogc3RyaW5nO1xyXG4gICAgICAgIGlmIChpID49IGN1cnJlbnRTdHJpbmcubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGNoYXJhY3RlciA9IFwiX1wiXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY2hhcmFjdGVyID0gY3VycmVudFN0cmluZ1tpXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY3R4LmZpbGxUZXh0KFxyXG4gICAgICAgICAgICBjaGFyYWN0ZXIsXHJcbiAgICAgICAgICAgIDEwMCArIDIwICogaSxcclxuICAgICAgICAgICAgMjAwXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuICAgIGN0eC5yZXN0b3JlKCk7XHJcblxyXG4gICAgLy8gQ2FsbCB1cGRhdGUgb24gZXZlcnl0aGluZyBqdXN0IGJlZm9yZSBkcmF3XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRyYXdhYmxlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHVwZGF0ZWFibGVzW2ldLnVwZGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIERyYXcgdmFsdWVzIGF0IHRoZSBlbmQgb2YgdGhlIGZyYW1lIHNvIHRoZXkncmUgYXMgdXBcclxuICAgIC8vIHRvIGRhdGUgYXMgdGhleSBjYW4gYmVcclxuICAgIGN0eC5zYXZlKCk7XHJcbiAgICBjdHguZmlsbFN0eWxlID0gXCJibGFja1wiO1xyXG4gICAgY3R4LmZvbnQgPSBcIjIwcHggQXJpYWxcIjtcclxuICAgIGN0eC50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xyXG4gICAgY3R4LmZpbGxUZXh0KGcubGV0dGVyc1BlclNlY29uZC50b1N0cmluZygpLCAxNDAsIDgwKTtcclxuICAgIGN0eC5maWxsVGV4dChnLmJhbmFuYXMudG9TdHJpbmcoKSArIFwiIGJhbmFuYXNcIiwgMTQwLCA1NSk7XHJcbiAgICBjdHgudGV4dEFsaWduID0gXCJsZWZ0XCI7XHJcbiAgICBjdHguZmlsbFRleHQoXCJUYXJnZXQgU3RyaW5nOiBcIiArIGN1cnJlbnRUYXJnZXQuZGlzcGxheVN0cmluZywgMjUwLCAxMjApO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjdXJyZW50VGFyZ2V0LnJld2FyZHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBsZXQgbGluZSA9IChpICsgMSkgKyBcIjogXCIgKyBjdXJyZW50VGFyZ2V0LnJld2FyZHNbaV0gKyBcIiBiYW5hbmFzXCI7XHJcbiAgICAgICAgY3R4LmZpbGxUZXh0KGxpbmUsIDI4MCwgMTQwICsgMjAgKiBpKTtcclxuICAgIH1cclxuICAgIGN0eC50ZXh0QWxpZ24gPSBcInJpZ2h0XCI7XHJcbiAgICBjdHguZmlsbFRleHQoXCJLZXlib2FyZCBLZXlzOlwiLCAxNjAsIDMwMCk7XHJcbiAgICBjdHgucmVzdG9yZSgpO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZHJhd2FibGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgZHJhd2FibGVzW2ldLmRyYXcoY3VycmVudFRpbWVNaWxsaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHByZXZpb3VzVGltZU1pbGxpcyA9IGN1cnJlbnRUaW1lTWlsbGlzO1xyXG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShkcmF3KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0Q29sbGlkaW5nRW50aXR5KHBvaW50WDogbnVtYmVyLCBwb2ludFk6IG51bWJlcikge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2xsaWRlYWJsZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBsZXQgaXNDb2xsaWRpbmcgPSBjb2xsaWRlYWJsZXNbaV0uY29sbGlkZShnLm1vdXNlWCwgZy5tb3VzZVkpO1xyXG4gICAgICAgIGlmIChpc0NvbGxpZGluZykge1xyXG4gICAgICAgICAgICByZXR1cm4gY29sbGlkZWFibGVzW2ldO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFJhbmRvbVN0cmluZyhjaGFyYWN0ZXJzVG9DaG9vc2VGcm9tOiBzdHJpbmdbXSwgbjogbnVtYmVyKSB7XHJcbiAgICBsZXQgcmFuZG9tTnVtYmVycyA9IGdldFJhbmRvbU51bWJlcnMobik7XHJcbiAgICBsZXQgc3RyaW5nID0gXCJcIjtcclxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCByYW5kb21OdW1iZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgc3RyaW5nICs9IGNoYXJhY3RlcnNUb0Nob29zZUZyb21bcmFuZG9tTnVtYmVyc1tpXV07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gc3RyaW5nO1xyXG59XHJcblxyXG4vLyBCdWZmZXIgdGhlIHJhbmRvbSBjaGFyYWN0ZXJzIHdlIGdldCBmcm9tIGNyeXB0byB0byBpbXByb3ZlXHJcbi8vIHRoZSBzcGVlZC4gQWxzbywgSSB0ZXN0ZWQgaXQsIGFuZCBpdCdzIGZhc3RlciB0aGFuIHVzaW5nXHJcbi8vIE1hdGgucmFuZG9tLCBhbmQgaG9wZWZ1bGx5IGhhcyBiZXR0ZXIgcmFuZG9tbmVzc1xyXG5sZXQgYnVmZmVyU2l6ZSA9IDEwMDAwO1xyXG5sZXQgbnVtYmVyQnVmZmVyOiBVaW50MTZBcnJheSA9IGdldFJhbmRvbU51bWJlcnMoYnVmZmVyU2l6ZSk7XHJcbmxldCBudW1iZXJCdWZmZXJJbmRleCA9IC0xO1xyXG5mdW5jdGlvbiBnZXRSYW5kb21DaGFyYWN0ZXIoKSB7XHJcbiAgICBudW1iZXJCdWZmZXJJbmRleCArPSAxO1xyXG4gICAgaWYgKG51bWJlckJ1ZmZlckluZGV4ID49IGJ1ZmZlclNpemUpIHtcclxuICAgICAgICBudW1iZXJCdWZmZXJJbmRleCA9IDA7XHJcbiAgICAgICAgbnVtYmVyQnVmZmVyID0gZ2V0UmFuZG9tTnVtYmVycyhidWZmZXJTaXplKTtcclxuICAgIH1cclxuICAgIGxldCByYW5kb21OdW1iZXIgPSBudW1iZXJCdWZmZXJbbnVtYmVyQnVmZmVySW5kZXhdO1xyXG4gICAgcmV0dXJuIGNoYXJhY3RlcnNUb0Nob29zZUZyb21bcmFuZG9tTnVtYmVyXTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0UmFuZG9tTnVtYmVycyhuOiBudW1iZXIpIHtcclxuICAgIGxldCByYW5kb21OdW1iZXJzID0gbmV3IFVpbnQxNkFycmF5KG4pO1xyXG4gICAgcmFuZG9tTnVtYmVycyA9IGNyeXB0by5nZXRSYW5kb21WYWx1ZXMocmFuZG9tTnVtYmVycyk7XHJcbiAgICByZXR1cm4gcmFuZG9tTnVtYmVycztcclxufVxyXG5cclxuZnVuY3Rpb24gcmdiU3RyaW5nKHJlZDogbnVtYmVyLCBncmVlbjogbnVtYmVyLCBibHVlOiBudW1iZXIpIHtcclxuICAgIHJldHVybiBcInJnYihcIiArIHJlZCArIFwiLFwiICsgZ3JlZW4gKyBcIixcIiArIGJsdWUgKyBcIilcIjtcclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=