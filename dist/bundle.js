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
/* harmony import */ var _target__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./target */ "./src/target.ts");
// TODO:
// Prevent catchup lag after tab-out
// Change/upgrade the target string
// Change the keyboard used to type
// Auto-calculate average bananas per word



// let keyboardKeys = [" ", "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var keyboardKeys = ["A"];
var charactersToChooseFrom;
var randomNumberSize = 65536;
updateCharactersToChooseFrom();
function updateCharactersToChooseFrom() {
    charactersToChooseFrom = [];
    for (var i = 0; i < randomNumberSize; i++) {
        charactersToChooseFrom.push(keyboardKeys[i % keyboardKeys.length]);
    }
}
var currentTarget = new _target__WEBPACK_IMPORTED_MODULE_2__.Target(["C", "A", "T"], "CAT", [1, 8, 40], 0);
var targetString = ["C", "A", "T"];
var displayTargetString = "CAT";
var currentString = [];
document.body.appendChild(_global__WEBPACK_IMPORTED_MODULE_1__.canvas);
var recruitPrice = 10;
var button1 = new _button__WEBPACK_IMPORTED_MODULE_0__.Button(100, 100, 80, 30, "Recruit Monkey " + recruitPrice, rgbString(200, 200, 255), rgbString(180, 180, 230), function () {
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
var button2 = new _button__WEBPACK_IMPORTED_MODULE_0__.Button(100, 350, 80, 30, "Type", rgbString(200, 200, 255), rgbString(180, 180, 230), function () {
    _global__WEBPACK_IMPORTED_MODULE_1__.g.lettersToTypeRemainder += 1;
}, function () { });
var upgradeKeyboardPrice = 100;
var button3 = new _button__WEBPACK_IMPORTED_MODULE_0__.Button(250, 400, 80, 30, "Upgrade Keyboard 100", rgbString(200, 200, 255), rgbString(180, 180, 230), function () {
    if (button3.isDisabled) {
        return;
    }
    _global__WEBPACK_IMPORTED_MODULE_1__.g.bananas -= upgradeKeyboardPrice;
    if (keyboardKeys.length === 1) {
        keyboardKeys.push("C");
    }
    else if (keyboardKeys.length === 2) {
        keyboardKeys.push("T");
    }
    updateCharactersToChooseFrom();
    upgradeKeyboardPrice *= 10;
    if (keyboardKeys.length === 3) {
        upgradeKeyboardPrice = Infinity;
    }
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
            collideable.onClick();
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
        && currentString.length >= targetString.length)) {
        currentString = [];
        lastWordFinishTimeMillis = undefined;
    }
    // Generate the needed characters and award bananas
    while (_global__WEBPACK_IMPORTED_MODULE_1__.g.lettersToTypeRemainder >= 1) {
        _global__WEBPACK_IMPORTED_MODULE_1__.g.lettersToTypeRemainder -= 1;
        var character = getRandomCharacter();
        currentString.push(character);
        if (currentString.length >= targetString.length) {
            lastWordFinishTimeMillis = currentTimeMillis;
            var matchingLetters = countMatchingLetters(currentString, targetString);
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
    for (var i = 0; i < targetString.length; i++) {
        var character = void 0;
        if (i >= currentString.length) {
            character = "_";
        }
        else {
            character = currentString[i];
        }
        _global__WEBPACK_IMPORTED_MODULE_1__.ctx.fillText(character, 120 + 20 * i, 200);
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
    for (var i = 0; i < keyboardKeys.length; i++) {
        _global__WEBPACK_IMPORTED_MODULE_1__.ctx.fillText(keyboardKeys[i], 180 + i * 20, 300);
    }
    _global__WEBPACK_IMPORTED_MODULE_1__.ctx.textAlign = "left";
    _global__WEBPACK_IMPORTED_MODULE_1__.ctx.fillText("Target String: " + displayTargetString, 250, 120);
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
function download(filename, text) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
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
function rgbString(red, green, blue) {
    return "rgb(" + red + "," + green + "," + blue + ")";
}

})();

exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QyxFQUFFLEVBQUU7UUFDaEMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ2pCLFFBQVEsRUFBRSxDQUFDO1NBQ2Q7S0FDSjtJQUNELE9BQU8sUUFBUSxDQUFDO0FBQ3BCLENBQUM7QUFFRCxTQUFTLFNBQVMsQ0FBQyxHQUFXLEVBQUUsS0FBYSxFQUFFLElBQVk7SUFDdkQsT0FBTyxNQUFNLEdBQUcsR0FBRyxHQUFHLEdBQUcsR0FBRyxLQUFLLEdBQUcsR0FBRyxHQUFHLElBQUksR0FBRyxHQUFHLENBQUM7QUFDekQsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2V4cG9ydHMvLi9zcmMvYnV0dG9uLnRzIiwid2VicGFjazovL2V4cG9ydHMvLi9zcmMvZ2xvYmFsLnRzIiwid2VicGFjazovL2V4cG9ydHMvLi9zcmMvdGFyZ2V0LnRzIiwid2VicGFjazovL2V4cG9ydHMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZXhwb3J0cy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZXhwb3J0cy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2V4cG9ydHMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9leHBvcnRzLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbGxpZGVhYmxlcywgY3R4LCBkcmF3YWJsZXMsIGcsIHVwZGF0ZWFibGVzIH0gZnJvbSBcIi4vZ2xvYmFsXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQnV0dG9uIHtcclxuICAgIHB1YmxpYyB0b3BMZWZ0WDogbnVtYmVyO1xyXG4gICAgcHVibGljIHRvcExlZnRZOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgd2lkdGg6IG51bWJlcjtcclxuICAgIHB1YmxpYyBoZWlnaHQ6IG51bWJlcjtcclxuICAgIHB1YmxpYyBib3R0b21SaWdodFg6IG51bWJlcjtcclxuICAgIHB1YmxpYyBib3R0b21SaWdodFk6IG51bWJlcjtcclxuICAgIHB1YmxpYyB0ZXh0OiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgY29sb3I6IHN0cmluZztcclxuICAgIHB1YmxpYyBob3ZlcmVkQ29sb3I6IHN0cmluZztcclxuICAgIHB1YmxpYyBkaXNhYmxlZENvbG9yOiBzdHJpbmcgPSBcImdyYXlcIjtcclxuICAgIHB1YmxpYyBpc0hvdmVyZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHB1YmxpYyBpc0Rpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwdWJsaWMgaXNNb3VzZURvd25lZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHVibGljIG9uQ2xpY2s6ICgpID0+IHZvaWQ7XHJcbiAgICBwdWJsaWMgdXBkYXRlOiAoKSA9PiB2b2lkO1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihcclxuICAgICAgICB0b3BMZWZ0WDogbnVtYmVyLFxyXG4gICAgICAgIHRvcExlZnRZOiBudW1iZXIsXHJcbiAgICAgICAgd2lkdGg6IG51bWJlcixcclxuICAgICAgICBoZWlnaHQ6IG51bWJlcixcclxuICAgICAgICB0ZXh0OiBzdHJpbmcsXHJcbiAgICAgICAgY29sb3I6IHN0cmluZyxcclxuICAgICAgICBob3ZlcmVkQ29sb3I6IHN0cmluZyxcclxuICAgICAgICBvbkNsaWNrOiAoKSA9PiB2b2lkLFxyXG4gICAgICAgIHVwZGF0ZTogKCkgPT4gdm9pZCxcclxuICAgICkge1xyXG4gICAgICAgIHRoaXMudG9wTGVmdFggPSB0b3BMZWZ0WDtcclxuICAgICAgICB0aGlzLnRvcExlZnRZID0gdG9wTGVmdFk7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMuYm90dG9tUmlnaHRYID0gdG9wTGVmdFggKyB3aWR0aDtcclxuICAgICAgICB0aGlzLmJvdHRvbVJpZ2h0WSA9IHRvcExlZnRZICsgaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMudGV4dCA9IHRleHQ7XHJcbiAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yO1xyXG4gICAgICAgIHRoaXMuaG92ZXJlZENvbG9yID0gaG92ZXJlZENvbG9yO1xyXG4gICAgICAgIHRoaXMub25DbGljayA9IG9uQ2xpY2s7XHJcbiAgICAgICAgdGhpcy51cGRhdGUgPSB1cGRhdGU7XHJcblxyXG4gICAgICAgIGRyYXdhYmxlcy5wdXNoKHRoaXMpO1xyXG4gICAgICAgIGNvbGxpZGVhYmxlcy5wdXNoKHRoaXMpO1xyXG4gICAgICAgIHVwZGF0ZWFibGVzLnB1c2godGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRyYXcoY3VycmVudFRpbWVNaWxsaXM6IG51bWJlcikge1xyXG4gICAgICAgIGxldCB0b3BMZWZ0WCA9IHRoaXMudG9wTGVmdFg7XHJcbiAgICAgICAgbGV0IHRvcExlZnRZID0gdGhpcy50b3BMZWZ0WTtcclxuICAgICAgICBsZXQgd2lkdGggPSB0aGlzLndpZHRoO1xyXG4gICAgICAgIGxldCBoZWlnaHQgPSB0aGlzLmhlaWdodDtcclxuICAgICAgICBsZXQgZm9udFNpemUgPSAxNTtcclxuICAgICAgICBsZXQgY29sb3I6IHN0cmluZztcclxuICAgICAgICBpZiAodGhpcy5pc01vdXNlRG93bmVkXHJcbiAgICAgICAgICAgICYmICF0aGlzLmlzRGlzYWJsZWQpIHtcclxuICAgICAgICAgICAgbGV0IHNocmluayA9IDAuMTtcclxuICAgICAgICAgICAgbGV0IHNocmlua1ggPSB3aWR0aCAqIHNocmluaztcclxuICAgICAgICAgICAgbGV0IHNocmlua1kgPSBoZWlnaHQgKiBzaHJpbms7XHJcbiAgICAgICAgICAgIHdpZHRoIC09IHNocmlua1g7XHJcbiAgICAgICAgICAgIGhlaWdodCAtPSBzaHJpbmtZO1xyXG4gICAgICAgICAgICB0b3BMZWZ0WCArPSBzaHJpbmtYIC8gMjtcclxuICAgICAgICAgICAgdG9wTGVmdFkgKz0gc2hyaW5rWSAvIDI7XHJcbiAgICAgICAgICAgIGZvbnRTaXplICo9ICgxIC0gc2hyaW5rKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuaXNEaXNhYmxlZCkge1xyXG4gICAgICAgICAgICBjb2xvciA9IHRoaXMuZGlzYWJsZWRDb2xvclxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzSG92ZXJlZCkge1xyXG4gICAgICAgICAgICAgICAgY29sb3IgPSB0aGlzLmNvbG9yO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29sb3IgPSB0aGlzLmhvdmVyZWRDb2xvcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY3R4LnNhdmUoKTtcclxuICAgICAgICBjdHguZmlsbFN0eWxlID0gY29sb3I7XHJcbiAgICAgICAgY3R4LmZvbnQgPSBmb250U2l6ZSArIFwicHggQXJpYWxcIjtcclxuICAgICAgICBjdHguZmlsbFJlY3QodG9wTGVmdFgsIHRvcExlZnRZLCB3aWR0aCwgaGVpZ2h0KTtcclxuICAgICAgICBjdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcclxuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCJibGFja1wiO1xyXG4gICAgICAgIGN0eC5maWxsVGV4dChcclxuICAgICAgICAgICAgdGhpcy50ZXh0LFxyXG4gICAgICAgICAgICB0b3BMZWZ0WCArIHdpZHRoIC8gMixcclxuICAgICAgICAgICAgdG9wTGVmdFkgKyBoZWlnaHQgLyAyICsgZm9udFNpemUgLyAyLjRcclxuICAgICAgICApO1xyXG4gICAgICAgIGN0eC5yZXN0b3JlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNvbGxpZGUocG9pbnRYOiBudW1iZXIsIHBvaW50WTogbnVtYmVyKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudG9wTGVmdFggPD0gcG9pbnRYXHJcbiAgICAgICAgICAgICYmIHBvaW50WCA8PSB0aGlzLmJvdHRvbVJpZ2h0WFxyXG4gICAgICAgICAgICAmJiB0aGlzLnRvcExlZnRZIDw9IHBvaW50WVxyXG4gICAgICAgICAgICAmJiBwb2ludFkgPD0gdGhpcy5ib3R0b21SaWdodFk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29sbGlkZWFibGUsIERyYXdhYmxlLCBVcGRhdGVhYmxlIH0gZnJvbSBcIi4vdHlwZXNcIjtcclxuXHJcbmV4cG9ydCBsZXQgd2lkdGg6IG51bWJlciA9IDEwMDA7XHJcbmV4cG9ydCBsZXQgaGVpZ2h0OiBudW1iZXIgPSA3MDA7XHJcbmV4cG9ydCBsZXQgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XHJcbmV4cG9ydCBsZXQgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcclxuY2FudmFzLndpZHRoID0gd2lkdGg7XHJcbmNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XHJcbmN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XHJcbmV4cG9ydCBsZXQgZHJhd2FibGVzOiBEcmF3YWJsZVtdID0gW107XHJcbmV4cG9ydCBsZXQgY29sbGlkZWFibGVzOiBDb2xsaWRlYWJsZVtdID0gW107XHJcbmV4cG9ydCBsZXQgdXBkYXRlYWJsZXM6IFVwZGF0ZWFibGVbXSA9IFtdO1xyXG5cclxuLy8gUHV0IGFueSBnbG9iYWwgdmFyaWFibGVzIHRoYXQgeW91IHdhbnQgdG8gYmUgYWJsZSB0byByZWFzc2lnbiBoZXJlXHJcbmV4cG9ydCBsZXQgZyA9IHtcclxuICAgIGJhbmFuYXM6IDAsXHJcbiAgICBtb25rZXlzOiAxLFxyXG4gICAgbGV0dGVyc1RvVHlwZVJlbWFpbmRlcjogMCxcclxuICAgIGxldHRlcnNQZXJTZWNvbmQ6IDAsXHJcbiAgICBtb3VzZVg6IC0xLFxyXG4gICAgbW91c2VZOiAtMSxcclxufTtcclxuIiwiZXhwb3J0IGNsYXNzIFRhcmdldCB7XHJcbiAgICBwdWJsaWMgbGV0dGVyczogc3RyaW5nW107XHJcbiAgICBwdWJsaWMgZGlzcGxheVN0cmluZzogc3RyaW5nO1xyXG4gICAgcHVibGljIHJld2FyZHM6IG51bWJlcltdO1xyXG4gICAgcHVibGljIHByaWNlOiBudW1iZXI7XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIGxldHRlcnM6IHN0cmluZ1tdLFxyXG4gICAgICAgIGRpc3BsYXlTdHJpbmc6IHN0cmluZyxcclxuICAgICAgICByZXdhcmRzOiBudW1iZXJbXSxcclxuICAgICAgICBwcmljZTogbnVtYmVyLFxyXG4gICAgKSB7XHJcbiAgICAgICAgdGhpcy5sZXR0ZXJzID0gbGV0dGVycztcclxuICAgICAgICB0aGlzLmRpc3BsYXlTdHJpbmcgPSBkaXNwbGF5U3RyaW5nO1xyXG4gICAgICAgIHRoaXMucmV3YXJkcyA9IHJld2FyZHM7XHJcbiAgICAgICAgdGhpcy5wcmljZSA9IHByaWNlO1xyXG4gICAgfVxyXG59XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gVE9ETzpcclxuLy8gUHJldmVudCBjYXRjaHVwIGxhZyBhZnRlciB0YWItb3V0XHJcbi8vIENoYW5nZS91cGdyYWRlIHRoZSB0YXJnZXQgc3RyaW5nXHJcbi8vIENoYW5nZSB0aGUga2V5Ym9hcmQgdXNlZCB0byB0eXBlXHJcbi8vIEF1dG8tY2FsY3VsYXRlIGF2ZXJhZ2UgYmFuYW5hcyBwZXIgd29yZFxyXG5cclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIi4vYnV0dG9uXCI7XHJcbmltcG9ydCB7IGNhbnZhcywgY29sbGlkZWFibGVzLCBjdHgsIGRyYXdhYmxlcywgZywgdXBkYXRlYWJsZXMgfSBmcm9tIFwiLi9nbG9iYWxcIjtcclxuaW1wb3J0IHsgVGFyZ2V0IH0gZnJvbSBcIi4vdGFyZ2V0XCI7XHJcbmltcG9ydCB7IENvbGxpZGVhYmxlIH0gZnJvbSBcIi4vdHlwZXNcIjtcclxuXHJcbi8vIGxldCBrZXlib2FyZEtleXMgPSBbXCIgXCIsIFwiQVwiLFwiQlwiLFwiQ1wiLFwiRFwiLFwiRVwiLFwiRlwiLFwiR1wiLFwiSFwiLFwiSVwiLFwiSlwiLFwiS1wiLFwiTFwiLFwiTVwiLFwiTlwiLFwiT1wiLFwiUFwiLFwiUVwiLFwiUlwiLFwiU1wiLFwiVFwiLFwiVVwiLFwiVlwiLFwiV1wiLFwiWFwiLFwiWVwiLFwiWlwiXTtcclxubGV0IGtleWJvYXJkS2V5cyA9IFtcIkFcIl07XHJcbmxldCBjaGFyYWN0ZXJzVG9DaG9vc2VGcm9tOiBzdHJpbmdbXTtcclxubGV0IHJhbmRvbU51bWJlclNpemUgPSA2NTUzNjtcclxudXBkYXRlQ2hhcmFjdGVyc1RvQ2hvb3NlRnJvbSgpO1xyXG5cclxuZnVuY3Rpb24gdXBkYXRlQ2hhcmFjdGVyc1RvQ2hvb3NlRnJvbSgpIHtcclxuICAgIGNoYXJhY3RlcnNUb0Nob29zZUZyb20gPSBbXTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmFuZG9tTnVtYmVyU2l6ZTsgaSsrKSB7XHJcbiAgICAgICAgY2hhcmFjdGVyc1RvQ2hvb3NlRnJvbS5wdXNoKGtleWJvYXJkS2V5c1tpICUga2V5Ym9hcmRLZXlzLmxlbmd0aF0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5sZXQgY3VycmVudFRhcmdldDogVGFyZ2V0ID0gbmV3IFRhcmdldChcclxuICAgIFtcIkNcIiwgXCJBXCIsIFwiVFwiXSxcclxuICAgIFwiQ0FUXCIsXHJcbiAgICBbMSwgOCwgNDBdLFxyXG4gICAgMCxcclxuKTtcclxubGV0IHRhcmdldFN0cmluZzogc3RyaW5nW10gPSBbXCJDXCIsIFwiQVwiLCBcIlRcIl07XHJcbmxldCBkaXNwbGF5VGFyZ2V0U3RyaW5nOiBzdHJpbmcgPSBcIkNBVFwiO1xyXG5sZXQgY3VycmVudFN0cmluZzogc3RyaW5nW10gPSBbXTtcclxuXHJcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY2FudmFzKTtcclxuXHJcbmxldCByZWNydWl0UHJpY2UgPSAxMDtcclxubGV0IGJ1dHRvbjEgPSBuZXcgQnV0dG9uKFxyXG4gICAgMTAwLFxyXG4gICAgMTAwLFxyXG4gICAgODAsXHJcbiAgICAzMCxcclxuICAgIFwiUmVjcnVpdCBNb25rZXkgXCIgKyByZWNydWl0UHJpY2UsXHJcbiAgICByZ2JTdHJpbmcoMjAwLCAyMDAsIDI1NSksXHJcbiAgICByZ2JTdHJpbmcoMTgwLCAxODAsIDIzMCksXHJcbiAgICAoKSA9PiB7XHJcbiAgICAgICAgaWYgKGJ1dHRvbjEuaXNEaXNhYmxlZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGcubW9ua2V5cyArPSAxO1xyXG4gICAgICAgIGcubGV0dGVyc1BlclNlY29uZCArPSAxO1xyXG4gICAgICAgIGcuYmFuYW5hcyAtPSByZWNydWl0UHJpY2U7XHJcbiAgICAgICAgcmVjcnVpdFByaWNlICs9IDI7XHJcbiAgICAgICAgYnV0dG9uMS50ZXh0ID0gXCJSZWNydWl0IE1vbmtleSBcIiArIHJlY3J1aXRQcmljZTtcclxuICAgIH0sXHJcbiAgICAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHJlY3J1aXRQcmljZSA+IGcuYmFuYW5hcykge1xyXG4gICAgICAgICAgICBidXR0b24xLmlzRGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGJ1dHRvbjEuaXNEaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbik7XHJcblxyXG5sZXQgYnV0dG9uMiA9IG5ldyBCdXR0b24oXHJcbiAgICAxMDAsXHJcbiAgICAzNTAsXHJcbiAgICA4MCxcclxuICAgIDMwLFxyXG4gICAgXCJUeXBlXCIsXHJcbiAgICByZ2JTdHJpbmcoMjAwLCAyMDAsIDI1NSksXHJcbiAgICByZ2JTdHJpbmcoMTgwLCAxODAsIDIzMCksXHJcbiAgICAoKSA9PiB7XHJcbiAgICAgICAgZy5sZXR0ZXJzVG9UeXBlUmVtYWluZGVyICs9IDE7XHJcbiAgICB9LFxyXG4gICAgKCkgPT4ge31cclxuKTtcclxuXHJcbmxldCB1cGdyYWRlS2V5Ym9hcmRQcmljZSA9IDEwMDtcclxubGV0IGJ1dHRvbjMgPSBuZXcgQnV0dG9uKFxyXG4gICAgMjUwLFxyXG4gICAgNDAwLFxyXG4gICAgODAsXHJcbiAgICAzMCxcclxuICAgIFwiVXBncmFkZSBLZXlib2FyZCAxMDBcIixcclxuICAgIHJnYlN0cmluZygyMDAsIDIwMCwgMjU1KSxcclxuICAgIHJnYlN0cmluZygxODAsIDE4MCwgMjMwKSxcclxuICAgICgpID0+IHtcclxuICAgICAgICBpZiAoYnV0dG9uMy5pc0Rpc2FibGVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZy5iYW5hbmFzIC09IHVwZ3JhZGVLZXlib2FyZFByaWNlO1xyXG4gICAgICAgIGlmIChrZXlib2FyZEtleXMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgIGtleWJvYXJkS2V5cy5wdXNoKFwiQ1wiKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGtleWJvYXJkS2V5cy5sZW5ndGggPT09IDIpIHtcclxuICAgICAgICAgICAga2V5Ym9hcmRLZXlzLnB1c2goXCJUXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB1cGRhdGVDaGFyYWN0ZXJzVG9DaG9vc2VGcm9tKCk7XHJcbiAgICAgICAgdXBncmFkZUtleWJvYXJkUHJpY2UgKj0gMTA7XHJcbiAgICAgICAgaWYgKGtleWJvYXJkS2V5cy5sZW5ndGggPT09IDMpIHtcclxuICAgICAgICAgICAgdXBncmFkZUtleWJvYXJkUHJpY2UgPSBJbmZpbml0eTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnV0dG9uMy50ZXh0ID0gXCJVcGdyYWRlIEtleWJvYXJkIFwiICsgdXBncmFkZUtleWJvYXJkUHJpY2U7XHJcbiAgICB9LFxyXG4gICAgKCkgPT4ge1xyXG4gICAgICAgIGlmICh1cGdyYWRlS2V5Ym9hcmRQcmljZSA+IGcuYmFuYW5hcykge1xyXG4gICAgICAgICAgICBidXR0b24zLmlzRGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGJ1dHRvbjMuaXNEaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuKTtcclxuXHJcbi8vIHN0b3JlIHRoZSBtb3VzZSB4eSBpbiBjYXNlIGl0IGdldHMgZXhlY3V0ZWQgZmFzdGVyIHRoYW5cclxuLy8gb25jZSBldmVyeSBmcmFtZSwgd2hpY2ggd291bGQgYmUgdXNlbGVzcyBzaW5jZSBob3ZlciBpc1xyXG4vLyBoYW5kbGVkIG9ubHkgb25jZSBldmVyeSBmcmFtZVxyXG5jYW52YXMub25tb3VzZW1vdmUgPSAoZXY6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgIGxldCBib3VuZHM6IERPTVJlY3QgPSBjYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICBnLm1vdXNlWCA9IGV2LnggLSBib3VuZHMubGVmdDtcclxuICAgIGcubW91c2VZID0gZXYueSAtIGJvdW5kcy50b3A7XHJcbn07XHJcblxyXG4vLyBhc3N1bWUgZm9yIHNpbXBsaWNpdHkgdGhhdCB5b3UgY2FuJ3QgaGF2ZSB0d28gbW91c2Vkb3duXHJcbi8vIGV2ZW50cyB3aXRob3V0IGEgbW91c2V1cFxyXG5jYW52YXMub25tb3VzZWRvd24gPSAoZXY6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgIGxldCBib3VuZHM6IERPTVJlY3QgPSBjYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICBsZXQgbW91c2VYID0gZXYueCAtIGJvdW5kcy5sZWZ0O1xyXG4gICAgbGV0IG1vdXNlWSA9IGV2LnkgLSBib3VuZHMudG9wO1xyXG4gICAgbGV0IGNvbGxpZGVhYmxlOiBDb2xsaWRlYWJsZSA9IGdldENvbGxpZGluZ0VudGl0eShtb3VzZVgsIG1vdXNlWSk7XHJcbiAgICBpZiAoY29sbGlkZWFibGUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGNvbGxpZGVhYmxlLmlzTW91c2VEb3duZWQgPSB0cnVlO1xyXG4gICAgICAgIGN1cnJlbnRNb3VzZURvd25lZCA9IGNvbGxpZGVhYmxlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjdXJyZW50TW91c2VEb3duZWQgPSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNhbnZhcy5vbm1vdXNldXAgPSAoZXY6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgIGxldCBib3VuZHM6IERPTVJlY3QgPSBjYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICBsZXQgbW91c2VYID0gZXYueCAtIGJvdW5kcy5sZWZ0O1xyXG4gICAgbGV0IG1vdXNlWSA9IGV2LnkgLSBib3VuZHMudG9wO1xyXG4gICAgbGV0IGNvbGxpZGVhYmxlOiBDb2xsaWRlYWJsZSA9IGdldENvbGxpZGluZ0VudGl0eShtb3VzZVgsIG1vdXNlWSk7XHJcbiAgICBpZiAoY29sbGlkZWFibGUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGlmIChjb2xsaWRlYWJsZS5pc01vdXNlRG93bmVkKSB7XHJcbiAgICAgICAgICAgIGNvbGxpZGVhYmxlLm9uQ2xpY2soKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoY3VycmVudE1vdXNlRG93bmVkICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBjdXJyZW50TW91c2VEb3duZWQuaXNNb3VzZURvd25lZCA9IGZhbHNlO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxubGV0IHByZXZpb3VzVGltZU1pbGxpczogbnVtYmVyO1xyXG5sZXQgcHJldmlvdXNIb3ZlcmVkOiBDb2xsaWRlYWJsZTtcclxubGV0IGN1cnJlbnRNb3VzZURvd25lZDogQ29sbGlkZWFibGU7XHJcbmxldCBsYXN0V29yZEZpbmlzaFRpbWVNaWxsaXM6IG51bWJlcjtcclxuXHJcbndpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZHJhdyk7XHJcblxyXG5mdW5jdGlvbiBkcmF3KGN1cnJlbnRUaW1lTWlsbGlzOiBudW1iZXIpIHtcclxuICAgIGxldCBlbGFwc2VkVGltZU1pbGxpczogbnVtYmVyID0gMDtcclxuICAgIGlmIChwcmV2aW91c1RpbWVNaWxsaXMgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGVsYXBzZWRUaW1lTWlsbGlzID0gY3VycmVudFRpbWVNaWxsaXMgLSBwcmV2aW91c1RpbWVNaWxsaXM7XHJcbiAgICB9XHJcblxyXG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xyXG4gICAgY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcclxuICAgIGN0eC5maWxsUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xyXG5cclxuICAgIGlmIChwcmV2aW91c0hvdmVyZWQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHByZXZpb3VzSG92ZXJlZC5pc0hvdmVyZWQgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29sbGlkZWFibGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgbGV0IGlzQ29sbGlkaW5nID0gY29sbGlkZWFibGVzW2ldLmNvbGxpZGUoZy5tb3VzZVgsIGcubW91c2VZKTtcclxuICAgICAgICBpZiAoaXNDb2xsaWRpbmcpIHtcclxuICAgICAgICAgICAgbGV0IGN1cnJlbnRIb3ZlcmVkID0gY29sbGlkZWFibGVzW2ldO1xyXG4gICAgICAgICAgICBjdXJyZW50SG92ZXJlZC5pc0hvdmVyZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICBwcmV2aW91c0hvdmVyZWQgPSBjdXJyZW50SG92ZXJlZDtcclxuICAgICAgICAgICAgYnJlYWs7IC8vIG9ubHkgb25lIHRoaW5nIGNhbiBiZSBob3ZlcmVkIG92ZXIgYXQgYSB0aW1lXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGcubGV0dGVyc1RvVHlwZVJlbWFpbmRlciArPSBlbGFwc2VkVGltZU1pbGxpcyAvIDEwMDAgKiBnLmxldHRlcnNQZXJTZWNvbmQ7XHJcbiAgICBcclxuICAgIC8vIE1ha2UgYSBmaW5pc2hlZCB3b3JkIHN0YXkgb24gc2NyZWVuIGZvciA1MDBtcywgb3IgdW50aWxcclxuICAgIC8vIGFub3RoZXIgbGV0dGVyIGlzIHR5cGVkXHJcbiAgICBpZiAoKFxyXG4gICAgICAgICAgICBsYXN0V29yZEZpbmlzaFRpbWVNaWxsaXMgIT09IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICAmJiAoY3VycmVudFRpbWVNaWxsaXMgLSBsYXN0V29yZEZpbmlzaFRpbWVNaWxsaXMpID4gNTAwXHJcbiAgICAgICAgKSB8fCAoXHJcbiAgICAgICAgICAgIGcubGV0dGVyc1RvVHlwZVJlbWFpbmRlciA+PSAxXHJcbiAgICAgICAgICAgICYmIGN1cnJlbnRTdHJpbmcubGVuZ3RoID49IHRhcmdldFN0cmluZy5sZW5ndGhcclxuICAgICAgICApKSB7XHJcbiAgICAgICAgY3VycmVudFN0cmluZyA9IFtdO1xyXG4gICAgICAgIGxhc3RXb3JkRmluaXNoVGltZU1pbGxpcyA9IHVuZGVmaW5lZDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gR2VuZXJhdGUgdGhlIG5lZWRlZCBjaGFyYWN0ZXJzIGFuZCBhd2FyZCBiYW5hbmFzXHJcbiAgICB3aGlsZSAoZy5sZXR0ZXJzVG9UeXBlUmVtYWluZGVyID49IDEpIHtcclxuICAgICAgICBnLmxldHRlcnNUb1R5cGVSZW1haW5kZXIgLT0gMTtcclxuICAgICAgICBsZXQgY2hhcmFjdGVyID0gZ2V0UmFuZG9tQ2hhcmFjdGVyKCk7XHJcbiAgICAgICAgY3VycmVudFN0cmluZy5wdXNoKGNoYXJhY3Rlcik7XHJcbiAgICAgICAgaWYgKGN1cnJlbnRTdHJpbmcubGVuZ3RoID49IHRhcmdldFN0cmluZy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgbGFzdFdvcmRGaW5pc2hUaW1lTWlsbGlzID0gY3VycmVudFRpbWVNaWxsaXM7XHJcbiAgICAgICAgICAgIGxldCBtYXRjaGluZ0xldHRlcnM6IG51bWJlciA9IGNvdW50TWF0Y2hpbmdMZXR0ZXJzKGN1cnJlbnRTdHJpbmcsIHRhcmdldFN0cmluZyk7XHJcbiAgICAgICAgICAgIGlmIChtYXRjaGluZ0xldHRlcnMgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBnLmJhbmFuYXMgKz0gY3VycmVudFRhcmdldC5yZXdhcmRzW21hdGNoaW5nTGV0dGVycyAtIDFdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChnLmxldHRlcnNUb1R5cGVSZW1haW5kZXIgPj0gMSkge1xyXG4gICAgICAgICAgICAgICAgY3VycmVudFN0cmluZyA9IFtdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIERyYXcgdGhlIGN1cnJlbnQgc3RyaW5nIG9uIHNjcmVlblxyXG4gICAgY3R4LnNhdmUoKTtcclxuICAgIGN0eC5maWxsU3R5bGUgPSBcImJsYWNrXCI7XHJcbiAgICBjdHguZm9udCA9IFwiMjBweCBBcmlhbFwiO1xyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHRhcmdldFN0cmluZy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGxldCBjaGFyYWN0ZXI6IHN0cmluZztcclxuICAgICAgICBpZiAoaSA+PSBjdXJyZW50U3RyaW5nLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBjaGFyYWN0ZXIgPSBcIl9cIlxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNoYXJhY3RlciA9IGN1cnJlbnRTdHJpbmdbaV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGN0eC5maWxsVGV4dChcclxuICAgICAgICAgICAgY2hhcmFjdGVyLFxyXG4gICAgICAgICAgICAxMjAgKyAyMCAqIGksXHJcbiAgICAgICAgICAgIDIwMFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbiAgICBjdHgucmVzdG9yZSgpO1xyXG5cclxuICAgIC8vIENhbGwgdXBkYXRlIG9uIGV2ZXJ5dGhpbmcganVzdCBiZWZvcmUgZHJhd1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkcmF3YWJsZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICB1cGRhdGVhYmxlc1tpXS51cGRhdGUoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBEcmF3IHZhbHVlcyBhdCB0aGUgZW5kIG9mIHRoZSBmcmFtZSBzbyB0aGV5J3JlIGFzIHVwXHJcbiAgICAvLyB0byBkYXRlIGFzIHRoZXkgY2FuIGJlXHJcbiAgICBjdHguc2F2ZSgpO1xyXG4gICAgY3R4LmZpbGxTdHlsZSA9IFwiYmxhY2tcIjtcclxuICAgIGN0eC5mb250ID0gXCIyMHB4IEFyaWFsXCI7XHJcbiAgICBjdHgudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcclxuICAgIGN0eC5maWxsVGV4dChnLmxldHRlcnNQZXJTZWNvbmQudG9TdHJpbmcoKSwgMTQwLCA4MCk7XHJcbiAgICBjdHguZmlsbFRleHQoZy5iYW5hbmFzLnRvU3RyaW5nKCkgKyBcIiBiYW5hbmFzXCIsIDE0MCwgNTUpO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlib2FyZEtleXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjdHguZmlsbFRleHQoa2V5Ym9hcmRLZXlzW2ldLCAxODAgKyBpICogMjAsIDMwMCk7XHJcbiAgICB9XHJcbiAgICBjdHgudGV4dEFsaWduID0gXCJsZWZ0XCI7XHJcbiAgICBjdHguZmlsbFRleHQoXCJUYXJnZXQgU3RyaW5nOiBcIiArIGRpc3BsYXlUYXJnZXRTdHJpbmcsIDI1MCwgMTIwKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY3VycmVudFRhcmdldC5yZXdhcmRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgbGV0IGxpbmUgPSAoaSArIDEpICsgXCI6IFwiICsgY3VycmVudFRhcmdldC5yZXdhcmRzW2ldICsgXCIgYmFuYW5hc1wiO1xyXG4gICAgICAgIGN0eC5maWxsVGV4dChsaW5lLCAyODAsIDE0MCArIDIwICogaSk7XHJcbiAgICB9XHJcbiAgICBjdHgudGV4dEFsaWduID0gXCJyaWdodFwiO1xyXG4gICAgY3R4LmZpbGxUZXh0KFwiS2V5Ym9hcmQgS2V5czpcIiwgMTYwLCAzMDApO1xyXG4gICAgY3R4LnJlc3RvcmUoKTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRyYXdhYmxlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGRyYXdhYmxlc1tpXS5kcmF3KGN1cnJlbnRUaW1lTWlsbGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwcmV2aW91c1RpbWVNaWxsaXMgPSBjdXJyZW50VGltZU1pbGxpcztcclxuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZHJhdyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldENvbGxpZGluZ0VudGl0eShwb2ludFg6IG51bWJlciwgcG9pbnRZOiBudW1iZXIpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29sbGlkZWFibGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgbGV0IGlzQ29sbGlkaW5nID0gY29sbGlkZWFibGVzW2ldLmNvbGxpZGUoZy5tb3VzZVgsIGcubW91c2VZKTtcclxuICAgICAgICBpZiAoaXNDb2xsaWRpbmcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNvbGxpZGVhYmxlc1tpXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkb3dubG9hZChmaWxlbmFtZTogc3RyaW5nLCB0ZXh0OiBzdHJpbmcpIHtcclxuICAgIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnZGF0YTp0ZXh0L3BsYWluO2NoYXJzZXQ9dXRmLTgsJyArIGVuY29kZVVSSUNvbXBvbmVudCh0ZXh0KSk7XHJcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnZG93bmxvYWQnLCBmaWxlbmFtZSk7XHJcbiAgXHJcbiAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xyXG4gIFxyXG4gICAgZWxlbWVudC5jbGljaygpO1xyXG4gIFxyXG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChlbGVtZW50KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0UmFuZG9tU3RyaW5nKGNoYXJhY3RlcnNUb0Nob29zZUZyb206IHN0cmluZ1tdLCBuOiBudW1iZXIpIHtcclxuICAgIGxldCByYW5kb21OdW1iZXJzID0gZ2V0UmFuZG9tTnVtYmVycyhuKTtcclxuICAgIGxldCBzdHJpbmcgPSBcIlwiO1xyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHJhbmRvbU51bWJlcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBzdHJpbmcgKz0gY2hhcmFjdGVyc1RvQ2hvb3NlRnJvbVtyYW5kb21OdW1iZXJzW2ldXTtcclxuICAgIH1cclxuICAgIHJldHVybiBzdHJpbmc7XHJcbn1cclxuXHJcbi8vIEJ1ZmZlciB0aGUgcmFuZG9tIGNoYXJhY3RlcnMgd2UgZ2V0IGZyb20gY3J5cHRvIHRvIGltcHJvdmVcclxuLy8gdGhlIHNwZWVkLiBBbHNvLCBJIHRlc3RlZCBpdCwgYW5kIGl0J3MgZmFzdGVyIHRoYW4gdXNpbmdcclxuLy8gTWF0aC5yYW5kb20sIGFuZCBob3BlZnVsbHkgaGFzIGJldHRlciByYW5kb21uZXNzXHJcbmxldCBidWZmZXJTaXplID0gMTAwMDA7XHJcbmxldCBudW1iZXJCdWZmZXI6IFVpbnQxNkFycmF5ID0gZ2V0UmFuZG9tTnVtYmVycyhidWZmZXJTaXplKTtcclxubGV0IG51bWJlckJ1ZmZlckluZGV4ID0gLTE7XHJcbmZ1bmN0aW9uIGdldFJhbmRvbUNoYXJhY3RlcigpIHtcclxuICAgIG51bWJlckJ1ZmZlckluZGV4ICs9IDE7XHJcbiAgICBpZiAobnVtYmVyQnVmZmVySW5kZXggPj0gYnVmZmVyU2l6ZSkge1xyXG4gICAgICAgIG51bWJlckJ1ZmZlckluZGV4ID0gMDtcclxuICAgICAgICBudW1iZXJCdWZmZXIgPSBnZXRSYW5kb21OdW1iZXJzKGJ1ZmZlclNpemUpO1xyXG4gICAgfVxyXG4gICAgbGV0IHJhbmRvbU51bWJlciA9IG51bWJlckJ1ZmZlcltudW1iZXJCdWZmZXJJbmRleF07XHJcbiAgICByZXR1cm4gY2hhcmFjdGVyc1RvQ2hvb3NlRnJvbVtyYW5kb21OdW1iZXJdO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRSYW5kb21OdW1iZXJzKG46IG51bWJlcikge1xyXG4gICAgbGV0IHJhbmRvbU51bWJlcnMgPSBuZXcgVWludDE2QXJyYXkobik7XHJcbiAgICByYW5kb21OdW1iZXJzID0gY3J5cHRvLmdldFJhbmRvbVZhbHVlcyhyYW5kb21OdW1iZXJzKTtcclxuICAgIHJldHVybiByYW5kb21OdW1iZXJzO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjb3VudE1hdGNoaW5nTGV0dGVycyhzMTogc3RyaW5nW10sIHMyOiBzdHJpbmdbXSkge1xyXG4gICAgbGV0IG1hdGNoaW5nID0gMDtcclxuICAgIGxldCBtaW5MZW5ndGggPSBNYXRoLm1pbihzMS5sZW5ndGgsIHMyLmxlbmd0aCk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1pbkxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKHMxW2ldID09PSBzMltpXSkge1xyXG4gICAgICAgICAgICBtYXRjaGluZysrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBtYXRjaGluZztcclxufVxyXG5cclxuZnVuY3Rpb24gcmdiU3RyaW5nKHJlZDogbnVtYmVyLCBncmVlbjogbnVtYmVyLCBibHVlOiBudW1iZXIpIHtcclxuICAgIHJldHVybiBcInJnYihcIiArIHJlZCArIFwiLFwiICsgZ3JlZW4gKyBcIixcIiArIGJsdWUgKyBcIilcIjtcclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=