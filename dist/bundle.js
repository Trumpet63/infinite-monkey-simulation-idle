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
// TODO:
// Upload to Git repo
// Upload as a draft to itch.io
// Share with Stefan
// Prevent catchup lag after tab-out
// Change/upgrade the target string
// Change the keyboard used to type


// let keyboardKeys = [" ", "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var keyboardKeys = ["C", "A", "T"];
var charactersToChooseFrom = [];
var randomNumberSize = 65536;
for (var i = 0; i < randomNumberSize; i++) {
    charactersToChooseFrom.push(keyboardKeys[i % keyboardKeys.length]);
}
var targetString = ["C", "A", "T"];
var currentString = [];
document.body.appendChild(_global__WEBPACK_IMPORTED_MODULE_1__.canvas);
var recruitPrice = 1;
var button1 = new _button__WEBPACK_IMPORTED_MODULE_0__.Button(100, 100, 80, 30, "Recruit Monkey " + recruitPrice, rgbString(200, 200, 255), rgbString(180, 180, 230), function () {
    if (button1.isDisabled) {
        return;
    }
    _global__WEBPACK_IMPORTED_MODULE_1__.g.monkeys += 1;
    _global__WEBPACK_IMPORTED_MODULE_1__.g.lettersPerSecond += 1;
    _global__WEBPACK_IMPORTED_MODULE_1__.g.bananas -= recruitPrice;
    recruitPrice *= 2;
    button1.text = "Recruit Monkey " + recruitPrice;
}, function () {
    if (recruitPrice > _global__WEBPACK_IMPORTED_MODULE_1__.g.bananas) {
        button1.isDisabled = true;
    }
    else {
        button1.isDisabled = false;
    }
});
var button2 = new _button__WEBPACK_IMPORTED_MODULE_0__.Button(100, 400, 80, 30, "Type", rgbString(200, 200, 255), rgbString(180, 180, 230), function () {
    _global__WEBPACK_IMPORTED_MODULE_1__.g.lettersToTypeRemainder += 1;
}, function () { });
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
            if (countMatchingLetters(currentString, targetString) === targetString.length) {
                _global__WEBPACK_IMPORTED_MODULE_1__.g.bananas += 1;
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
    _global__WEBPACK_IMPORTED_MODULE_1__.ctx.fillText(_global__WEBPACK_IMPORTED_MODULE_1__.g.lettersPerSecond.toString(), 140, 80);
    _global__WEBPACK_IMPORTED_MODULE_1__.ctx.fillText(_global__WEBPACK_IMPORTED_MODULE_1__.g.bananas.toString(), 140, 55);
    _global__WEBPACK_IMPORTED_MODULE_1__.ctx.fillText(elapsedTimeMillis.toString(), 0, 20);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QztTQUNkO0tBQ0o7SUFDRCxPQUFPLFFBQVEsQ0FBQztBQUNwQixDQUFDO0FBRUQsU0FBUyxTQUFTLENBQUMsR0FBVyxFQUFFLEtBQWEsRUFBRSxJQUFZO0lBQ3ZELE9BQU8sTUFBTSxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsS0FBSyxHQUFHLEdBQUcsR0FBRyxJQUFJLEdBQUcsR0FBRyxDQUFDO0FBQ3pELENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9leHBvcnRzLy4vc3JjL2J1dHRvbi50cyIsIndlYnBhY2s6Ly9leHBvcnRzLy4vc3JjL2dsb2JhbC50cyIsIndlYnBhY2s6Ly9leHBvcnRzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2V4cG9ydHMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2V4cG9ydHMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9leHBvcnRzL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZXhwb3J0cy8uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb2xsaWRlYWJsZXMsIGN0eCwgZHJhd2FibGVzLCBnLCB1cGRhdGVhYmxlcyB9IGZyb20gXCIuL2dsb2JhbFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEJ1dHRvbiB7XHJcbiAgICBwdWJsaWMgdG9wTGVmdFg6IG51bWJlcjtcclxuICAgIHB1YmxpYyB0b3BMZWZ0WTogbnVtYmVyO1xyXG4gICAgcHVibGljIHdpZHRoOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgaGVpZ2h0OiBudW1iZXI7XHJcbiAgICBwdWJsaWMgYm90dG9tUmlnaHRYOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgYm90dG9tUmlnaHRZOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgdGV4dDogc3RyaW5nO1xyXG4gICAgcHVibGljIGNvbG9yOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgaG92ZXJlZENvbG9yOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgZGlzYWJsZWRDb2xvcjogc3RyaW5nID0gXCJncmF5XCI7XHJcbiAgICBwdWJsaWMgaXNIb3ZlcmVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwdWJsaWMgaXNEaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHVibGljIGlzTW91c2VEb3duZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHB1YmxpYyBvbkNsaWNrOiAoKSA9PiB2b2lkO1xyXG4gICAgcHVibGljIHVwZGF0ZTogKCkgPT4gdm9pZDtcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoXHJcbiAgICAgICAgdG9wTGVmdFg6IG51bWJlcixcclxuICAgICAgICB0b3BMZWZ0WTogbnVtYmVyLFxyXG4gICAgICAgIHdpZHRoOiBudW1iZXIsXHJcbiAgICAgICAgaGVpZ2h0OiBudW1iZXIsXHJcbiAgICAgICAgdGV4dDogc3RyaW5nLFxyXG4gICAgICAgIGNvbG9yOiBzdHJpbmcsXHJcbiAgICAgICAgaG92ZXJlZENvbG9yOiBzdHJpbmcsXHJcbiAgICAgICAgb25DbGljazogKCkgPT4gdm9pZCxcclxuICAgICAgICB1cGRhdGU6ICgpID0+IHZvaWQsXHJcbiAgICApIHtcclxuICAgICAgICB0aGlzLnRvcExlZnRYID0gdG9wTGVmdFg7XHJcbiAgICAgICAgdGhpcy50b3BMZWZ0WSA9IHRvcExlZnRZO1xyXG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcclxuICAgICAgICB0aGlzLmJvdHRvbVJpZ2h0WCA9IHRvcExlZnRYICsgd2lkdGg7XHJcbiAgICAgICAgdGhpcy5ib3R0b21SaWdodFkgPSB0b3BMZWZ0WSArIGhlaWdodDtcclxuICAgICAgICB0aGlzLnRleHQgPSB0ZXh0O1xyXG4gICAgICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcclxuICAgICAgICB0aGlzLmhvdmVyZWRDb2xvciA9IGhvdmVyZWRDb2xvcjtcclxuICAgICAgICB0aGlzLm9uQ2xpY2sgPSBvbkNsaWNrO1xyXG4gICAgICAgIHRoaXMudXBkYXRlID0gdXBkYXRlO1xyXG5cclxuICAgICAgICBkcmF3YWJsZXMucHVzaCh0aGlzKTtcclxuICAgICAgICBjb2xsaWRlYWJsZXMucHVzaCh0aGlzKTtcclxuICAgICAgICB1cGRhdGVhYmxlcy5wdXNoKHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkcmF3KGN1cnJlbnRUaW1lTWlsbGlzOiBudW1iZXIpIHtcclxuICAgICAgICBsZXQgdG9wTGVmdFggPSB0aGlzLnRvcExlZnRYO1xyXG4gICAgICAgIGxldCB0b3BMZWZ0WSA9IHRoaXMudG9wTGVmdFk7XHJcbiAgICAgICAgbGV0IHdpZHRoID0gdGhpcy53aWR0aDtcclxuICAgICAgICBsZXQgaGVpZ2h0ID0gdGhpcy5oZWlnaHQ7XHJcbiAgICAgICAgbGV0IGZvbnRTaXplID0gMTU7XHJcbiAgICAgICAgbGV0IGNvbG9yOiBzdHJpbmc7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNNb3VzZURvd25lZFxyXG4gICAgICAgICAgICAmJiAhdGhpcy5pc0Rpc2FibGVkKSB7XHJcbiAgICAgICAgICAgIGxldCBzaHJpbmsgPSAwLjE7XHJcbiAgICAgICAgICAgIGxldCBzaHJpbmtYID0gd2lkdGggKiBzaHJpbms7XHJcbiAgICAgICAgICAgIGxldCBzaHJpbmtZID0gaGVpZ2h0ICogc2hyaW5rO1xyXG4gICAgICAgICAgICB3aWR0aCAtPSBzaHJpbmtYO1xyXG4gICAgICAgICAgICBoZWlnaHQgLT0gc2hyaW5rWTtcclxuICAgICAgICAgICAgdG9wTGVmdFggKz0gc2hyaW5rWCAvIDI7XHJcbiAgICAgICAgICAgIHRvcExlZnRZICs9IHNocmlua1kgLyAyO1xyXG4gICAgICAgICAgICBmb250U2l6ZSAqPSAoMSAtIHNocmluayk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmlzRGlzYWJsZWQpIHtcclxuICAgICAgICAgICAgY29sb3IgPSB0aGlzLmRpc2FibGVkQ29sb3JcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc0hvdmVyZWQpIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yID0gdGhpcy5jb2xvcjtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yID0gdGhpcy5ob3ZlcmVkQ29sb3I7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGN0eC5zYXZlKCk7XHJcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xyXG4gICAgICAgIGN0eC5mb250ID0gZm9udFNpemUgKyBcInB4IEFyaWFsXCI7XHJcbiAgICAgICAgY3R4LmZpbGxSZWN0KHRvcExlZnRYLCB0b3BMZWZ0WSwgd2lkdGgsIGhlaWdodCk7XHJcbiAgICAgICAgY3R4LnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XHJcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwiYmxhY2tcIjtcclxuICAgICAgICBjdHguZmlsbFRleHQoXHJcbiAgICAgICAgICAgIHRoaXMudGV4dCxcclxuICAgICAgICAgICAgdG9wTGVmdFggKyB3aWR0aCAvIDIsXHJcbiAgICAgICAgICAgIHRvcExlZnRZICsgaGVpZ2h0IC8gMiArIGZvbnRTaXplIC8gMi40XHJcbiAgICAgICAgKTtcclxuICAgICAgICBjdHgucmVzdG9yZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjb2xsaWRlKHBvaW50WDogbnVtYmVyLCBwb2ludFk6IG51bWJlcikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRvcExlZnRYIDw9IHBvaW50WFxyXG4gICAgICAgICAgICAmJiBwb2ludFggPD0gdGhpcy5ib3R0b21SaWdodFhcclxuICAgICAgICAgICAgJiYgdGhpcy50b3BMZWZ0WSA8PSBwb2ludFlcclxuICAgICAgICAgICAgJiYgcG9pbnRZIDw9IHRoaXMuYm90dG9tUmlnaHRZO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IENvbGxpZGVhYmxlLCBEcmF3YWJsZSwgVXBkYXRlYWJsZSB9IGZyb20gXCIuL3R5cGVzXCI7XHJcblxyXG5leHBvcnQgbGV0IHdpZHRoOiBudW1iZXIgPSAxMDAwO1xyXG5leHBvcnQgbGV0IGhlaWdodDogbnVtYmVyID0gNzAwO1xyXG5leHBvcnQgbGV0IGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xyXG5leHBvcnQgbGV0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XHJcbmNhbnZhcy53aWR0aCA9IHdpZHRoO1xyXG5jYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG5jdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xyXG5leHBvcnQgbGV0IGRyYXdhYmxlczogRHJhd2FibGVbXSA9IFtdO1xyXG5leHBvcnQgbGV0IGNvbGxpZGVhYmxlczogQ29sbGlkZWFibGVbXSA9IFtdO1xyXG5leHBvcnQgbGV0IHVwZGF0ZWFibGVzOiBVcGRhdGVhYmxlW10gPSBbXTtcclxuXHJcbi8vIFB1dCBhbnkgZ2xvYmFsIHZhcmlhYmxlcyB0aGF0IHlvdSB3YW50IHRvIGJlIGFibGUgdG8gcmVhc3NpZ24gaGVyZVxyXG5leHBvcnQgbGV0IGcgPSB7XHJcbiAgICBiYW5hbmFzOiAwLFxyXG4gICAgbW9ua2V5czogMSxcclxuICAgIGxldHRlcnNUb1R5cGVSZW1haW5kZXI6IDAsXHJcbiAgICBsZXR0ZXJzUGVyU2Vjb25kOiAwLFxyXG4gICAgbW91c2VYOiAtMSxcclxuICAgIG1vdXNlWTogLTEsXHJcbn07XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gVE9ETzpcclxuLy8gVXBsb2FkIHRvIEdpdCByZXBvXHJcbi8vIFVwbG9hZCBhcyBhIGRyYWZ0IHRvIGl0Y2guaW9cclxuLy8gU2hhcmUgd2l0aCBTdGVmYW5cclxuLy8gUHJldmVudCBjYXRjaHVwIGxhZyBhZnRlciB0YWItb3V0XHJcbi8vIENoYW5nZS91cGdyYWRlIHRoZSB0YXJnZXQgc3RyaW5nXHJcbi8vIENoYW5nZSB0aGUga2V5Ym9hcmQgdXNlZCB0byB0eXBlXHJcblxyXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiLi9idXR0b25cIjtcclxuaW1wb3J0IHsgY2FudmFzLCBjb2xsaWRlYWJsZXMsIGN0eCwgZHJhd2FibGVzLCBnLCB1cGRhdGVhYmxlcyB9IGZyb20gXCIuL2dsb2JhbFwiO1xyXG5pbXBvcnQgeyBDb2xsaWRlYWJsZSB9IGZyb20gXCIuL3R5cGVzXCI7XHJcblxyXG4vLyBsZXQga2V5Ym9hcmRLZXlzID0gW1wiIFwiLCBcIkFcIixcIkJcIixcIkNcIixcIkRcIixcIkVcIixcIkZcIixcIkdcIixcIkhcIixcIklcIixcIkpcIixcIktcIixcIkxcIixcIk1cIixcIk5cIixcIk9cIixcIlBcIixcIlFcIixcIlJcIixcIlNcIixcIlRcIixcIlVcIixcIlZcIixcIldcIixcIlhcIixcIllcIixcIlpcIl07XHJcbmxldCBrZXlib2FyZEtleXMgPSBbXCJDXCIsIFwiQVwiLCBcIlRcIl07XHJcbmxldCBjaGFyYWN0ZXJzVG9DaG9vc2VGcm9tOiBzdHJpbmdbXSA9IFtdO1xyXG5sZXQgcmFuZG9tTnVtYmVyU2l6ZSA9IDY1NTM2O1xyXG5mb3IgKGxldCBpID0gMDsgaSA8IHJhbmRvbU51bWJlclNpemU7IGkrKykge1xyXG4gICAgY2hhcmFjdGVyc1RvQ2hvb3NlRnJvbS5wdXNoKGtleWJvYXJkS2V5c1tpICUga2V5Ym9hcmRLZXlzLmxlbmd0aF0pO1xyXG59XHJcblxyXG5sZXQgdGFyZ2V0U3RyaW5nOiBzdHJpbmdbXSA9IFtcIkNcIiwgXCJBXCIsIFwiVFwiXTtcclxubGV0IGN1cnJlbnRTdHJpbmc6IHN0cmluZ1tdID0gW107XHJcblxyXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNhbnZhcyk7XHJcblxyXG5sZXQgcmVjcnVpdFByaWNlID0gMTtcclxubGV0IGJ1dHRvbjEgPSBuZXcgQnV0dG9uKFxyXG4gICAgMTAwLFxyXG4gICAgMTAwLFxyXG4gICAgODAsXHJcbiAgICAzMCxcclxuICAgIFwiUmVjcnVpdCBNb25rZXkgXCIgKyByZWNydWl0UHJpY2UsXHJcbiAgICByZ2JTdHJpbmcoMjAwLCAyMDAsIDI1NSksXHJcbiAgICByZ2JTdHJpbmcoMTgwLCAxODAsIDIzMCksXHJcbiAgICAoKSA9PiB7XHJcbiAgICAgICAgaWYgKGJ1dHRvbjEuaXNEaXNhYmxlZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGcubW9ua2V5cyArPSAxO1xyXG4gICAgICAgIGcubGV0dGVyc1BlclNlY29uZCArPSAxO1xyXG4gICAgICAgIGcuYmFuYW5hcyAtPSByZWNydWl0UHJpY2U7XHJcbiAgICAgICAgcmVjcnVpdFByaWNlICo9IDI7XHJcbiAgICAgICAgYnV0dG9uMS50ZXh0ID0gXCJSZWNydWl0IE1vbmtleSBcIiArIHJlY3J1aXRQcmljZTtcclxuICAgIH0sXHJcbiAgICAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHJlY3J1aXRQcmljZSA+IGcuYmFuYW5hcykge1xyXG4gICAgICAgICAgICBidXR0b24xLmlzRGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGJ1dHRvbjEuaXNEaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbik7XHJcblxyXG5sZXQgYnV0dG9uMiA9IG5ldyBCdXR0b24oXHJcbiAgICAxMDAsXHJcbiAgICA0MDAsXHJcbiAgICA4MCxcclxuICAgIDMwLFxyXG4gICAgXCJUeXBlXCIsXHJcbiAgICByZ2JTdHJpbmcoMjAwLCAyMDAsIDI1NSksXHJcbiAgICByZ2JTdHJpbmcoMTgwLCAxODAsIDIzMCksXHJcbiAgICAoKSA9PiB7XHJcbiAgICAgICAgZy5sZXR0ZXJzVG9UeXBlUmVtYWluZGVyICs9IDE7XHJcbiAgICB9LFxyXG4gICAgKCkgPT4ge31cclxuKTtcclxuXHJcbi8vIHN0b3JlIHRoZSBtb3VzZSB4eSBpbiBjYXNlIGl0IGdldHMgZXhlY3V0ZWQgZmFzdGVyIHRoYW5cclxuLy8gb25jZSBldmVyeSBmcmFtZSwgd2hpY2ggd291bGQgYmUgdXNlbGVzcyBzaW5jZSBob3ZlciBpc1xyXG4vLyBoYW5kbGVkIG9ubHkgb25jZSBldmVyeSBmcmFtZVxyXG5jYW52YXMub25tb3VzZW1vdmUgPSAoZXY6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgIGxldCBib3VuZHM6IERPTVJlY3QgPSBjYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICBnLm1vdXNlWCA9IGV2LnggLSBib3VuZHMubGVmdDtcclxuICAgIGcubW91c2VZID0gZXYueSAtIGJvdW5kcy50b3A7XHJcbn07XHJcblxyXG4vLyBhc3N1bWUgZm9yIHNpbXBsaWNpdHkgdGhhdCB5b3UgY2FuJ3QgaGF2ZSB0d28gbW91c2Vkb3duXHJcbi8vIGV2ZW50cyB3aXRob3V0IGEgbW91c2V1cFxyXG5jYW52YXMub25tb3VzZWRvd24gPSAoZXY6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgIGxldCBib3VuZHM6IERPTVJlY3QgPSBjYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICBsZXQgbW91c2VYID0gZXYueCAtIGJvdW5kcy5sZWZ0O1xyXG4gICAgbGV0IG1vdXNlWSA9IGV2LnkgLSBib3VuZHMudG9wO1xyXG4gICAgbGV0IGNvbGxpZGVhYmxlOiBDb2xsaWRlYWJsZSA9IGdldENvbGxpZGluZ0VudGl0eShtb3VzZVgsIG1vdXNlWSk7XHJcbiAgICBpZiAoY29sbGlkZWFibGUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGNvbGxpZGVhYmxlLmlzTW91c2VEb3duZWQgPSB0cnVlO1xyXG4gICAgICAgIGN1cnJlbnRNb3VzZURvd25lZCA9IGNvbGxpZGVhYmxlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBjdXJyZW50TW91c2VEb3duZWQgPSB1bmRlZmluZWQ7XHJcbiAgICB9XHJcbn1cclxuXHJcbmNhbnZhcy5vbm1vdXNldXAgPSAoZXY6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgIGxldCBib3VuZHM6IERPTVJlY3QgPSBjYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICBsZXQgbW91c2VYID0gZXYueCAtIGJvdW5kcy5sZWZ0O1xyXG4gICAgbGV0IG1vdXNlWSA9IGV2LnkgLSBib3VuZHMudG9wO1xyXG4gICAgbGV0IGNvbGxpZGVhYmxlOiBDb2xsaWRlYWJsZSA9IGdldENvbGxpZGluZ0VudGl0eShtb3VzZVgsIG1vdXNlWSk7XHJcbiAgICBpZiAoY29sbGlkZWFibGUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGlmIChjb2xsaWRlYWJsZS5pc01vdXNlRG93bmVkKSB7XHJcbiAgICAgICAgICAgIGNvbGxpZGVhYmxlLm9uQ2xpY2soKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoY3VycmVudE1vdXNlRG93bmVkICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBjdXJyZW50TW91c2VEb3duZWQuaXNNb3VzZURvd25lZCA9IGZhbHNlO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxubGV0IHByZXZpb3VzVGltZU1pbGxpczogbnVtYmVyO1xyXG5sZXQgcHJldmlvdXNIb3ZlcmVkOiBDb2xsaWRlYWJsZTtcclxubGV0IGN1cnJlbnRNb3VzZURvd25lZDogQ29sbGlkZWFibGU7XHJcbmxldCBsYXN0V29yZEZpbmlzaFRpbWVNaWxsaXM6IG51bWJlcjtcclxuXHJcbndpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZHJhdyk7XHJcblxyXG5mdW5jdGlvbiBkcmF3KGN1cnJlbnRUaW1lTWlsbGlzOiBudW1iZXIpIHtcclxuICAgIGxldCBlbGFwc2VkVGltZU1pbGxpczogbnVtYmVyID0gMDtcclxuICAgIGlmIChwcmV2aW91c1RpbWVNaWxsaXMgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIGVsYXBzZWRUaW1lTWlsbGlzID0gY3VycmVudFRpbWVNaWxsaXMgLSBwcmV2aW91c1RpbWVNaWxsaXM7XHJcbiAgICB9XHJcblxyXG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xyXG4gICAgY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcclxuICAgIGN0eC5maWxsUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xyXG5cclxuICAgIGlmIChwcmV2aW91c0hvdmVyZWQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHByZXZpb3VzSG92ZXJlZC5pc0hvdmVyZWQgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29sbGlkZWFibGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgbGV0IGlzQ29sbGlkaW5nID0gY29sbGlkZWFibGVzW2ldLmNvbGxpZGUoZy5tb3VzZVgsIGcubW91c2VZKTtcclxuICAgICAgICBpZiAoaXNDb2xsaWRpbmcpIHtcclxuICAgICAgICAgICAgbGV0IGN1cnJlbnRIb3ZlcmVkID0gY29sbGlkZWFibGVzW2ldO1xyXG4gICAgICAgICAgICBjdXJyZW50SG92ZXJlZC5pc0hvdmVyZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICBwcmV2aW91c0hvdmVyZWQgPSBjdXJyZW50SG92ZXJlZDtcclxuICAgICAgICAgICAgYnJlYWs7IC8vIG9ubHkgb25lIHRoaW5nIGNhbiBiZSBob3ZlcmVkIG92ZXIgYXQgYSB0aW1lXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGcubGV0dGVyc1RvVHlwZVJlbWFpbmRlciArPSBlbGFwc2VkVGltZU1pbGxpcyAvIDEwMDAgKiBnLmxldHRlcnNQZXJTZWNvbmQ7XHJcbiAgICBcclxuICAgIC8vIE1ha2UgYSBmaW5pc2hlZCB3b3JkIHN0YXkgb24gc2NyZWVuIGZvciA1MDBtcywgb3IgdW50aWxcclxuICAgIC8vIGFub3RoZXIgbGV0dGVyIGlzIHR5cGVkXHJcbiAgICBpZiAoKFxyXG4gICAgICAgICAgICBsYXN0V29yZEZpbmlzaFRpbWVNaWxsaXMgIT09IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICAmJiAoY3VycmVudFRpbWVNaWxsaXMgLSBsYXN0V29yZEZpbmlzaFRpbWVNaWxsaXMpID4gNTAwXHJcbiAgICAgICAgKSB8fCAoXHJcbiAgICAgICAgICAgIGcubGV0dGVyc1RvVHlwZVJlbWFpbmRlciA+PSAxXHJcbiAgICAgICAgICAgICYmIGN1cnJlbnRTdHJpbmcubGVuZ3RoID49IHRhcmdldFN0cmluZy5sZW5ndGhcclxuICAgICAgICApKSB7XHJcbiAgICAgICAgY3VycmVudFN0cmluZyA9IFtdO1xyXG4gICAgICAgIGxhc3RXb3JkRmluaXNoVGltZU1pbGxpcyA9IHVuZGVmaW5lZDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gR2VuZXJhdGUgdGhlIG5lZWRlZCBjaGFyYWN0ZXJzIGFuZCBhd2FyZCBiYW5hbmFzXHJcbiAgICB3aGlsZSAoZy5sZXR0ZXJzVG9UeXBlUmVtYWluZGVyID49IDEpIHtcclxuICAgICAgICBnLmxldHRlcnNUb1R5cGVSZW1haW5kZXIgLT0gMTtcclxuICAgICAgICBsZXQgY2hhcmFjdGVyID0gZ2V0UmFuZG9tQ2hhcmFjdGVyKCk7XHJcbiAgICAgICAgY3VycmVudFN0cmluZy5wdXNoKGNoYXJhY3Rlcik7XHJcbiAgICAgICAgaWYgKGN1cnJlbnRTdHJpbmcubGVuZ3RoID49IHRhcmdldFN0cmluZy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgbGFzdFdvcmRGaW5pc2hUaW1lTWlsbGlzID0gY3VycmVudFRpbWVNaWxsaXM7XHJcbiAgICAgICAgICAgIGlmIChjb3VudE1hdGNoaW5nTGV0dGVycyhjdXJyZW50U3RyaW5nLCB0YXJnZXRTdHJpbmcpID09PSB0YXJnZXRTdHJpbmcubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBnLmJhbmFuYXMgKz0gMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZy5sZXR0ZXJzVG9UeXBlUmVtYWluZGVyID49IDEpIHtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRTdHJpbmcgPSBbXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBEcmF3IHRoZSBjdXJyZW50IHN0cmluZyBvbiBzY3JlZW5cclxuICAgIGN0eC5zYXZlKCk7XHJcbiAgICBjdHguZmlsbFN0eWxlID0gXCJibGFja1wiO1xyXG4gICAgY3R4LmZvbnQgPSBcIjIwcHggQXJpYWxcIjtcclxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0YXJnZXRTdHJpbmcubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBsZXQgY2hhcmFjdGVyOiBzdHJpbmc7XHJcbiAgICAgICAgaWYgKGkgPj0gY3VycmVudFN0cmluZy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgY2hhcmFjdGVyID0gXCJfXCJcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjaGFyYWN0ZXIgPSBjdXJyZW50U3RyaW5nW2ldO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjdHguZmlsbFRleHQoXHJcbiAgICAgICAgICAgIGNoYXJhY3RlcixcclxuICAgICAgICAgICAgMTIwICsgMjAgKiBpLFxyXG4gICAgICAgICAgICAyMDBcclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gICAgY3R4LnJlc3RvcmUoKTtcclxuXHJcbiAgICAvLyBDYWxsIHVwZGF0ZSBvbiBldmVyeXRoaW5nIGp1c3QgYmVmb3JlIGRyYXdcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZHJhd2FibGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgdXBkYXRlYWJsZXNbaV0udXBkYXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRHJhdyB2YWx1ZXMgYXQgdGhlIGVuZCBvZiB0aGUgZnJhbWUgc28gdGhleSdyZSBhcyB1cFxyXG4gICAgLy8gdG8gZGF0ZSBhcyB0aGV5IGNhbiBiZVxyXG4gICAgY3R4LnNhdmUoKTtcclxuICAgIGN0eC5maWxsU3R5bGUgPSBcImJsYWNrXCI7XHJcbiAgICBjdHguZm9udCA9IFwiMjBweCBBcmlhbFwiO1xyXG4gICAgY3R4LmZpbGxUZXh0KGcubGV0dGVyc1BlclNlY29uZC50b1N0cmluZygpLCAxNDAsIDgwKTtcclxuICAgIGN0eC5maWxsVGV4dChnLmJhbmFuYXMudG9TdHJpbmcoKSwgMTQwLCA1NSk7XHJcbiAgICBjdHguZmlsbFRleHQoZWxhcHNlZFRpbWVNaWxsaXMudG9TdHJpbmcoKSwgMCwgMjApO1xyXG4gICAgY3R4LnJlc3RvcmUoKTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRyYXdhYmxlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGRyYXdhYmxlc1tpXS5kcmF3KGN1cnJlbnRUaW1lTWlsbGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwcmV2aW91c1RpbWVNaWxsaXMgPSBjdXJyZW50VGltZU1pbGxpcztcclxuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZHJhdyk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldENvbGxpZGluZ0VudGl0eShwb2ludFg6IG51bWJlciwgcG9pbnRZOiBudW1iZXIpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29sbGlkZWFibGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgbGV0IGlzQ29sbGlkaW5nID0gY29sbGlkZWFibGVzW2ldLmNvbGxpZGUoZy5tb3VzZVgsIGcubW91c2VZKTtcclxuICAgICAgICBpZiAoaXNDb2xsaWRpbmcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGNvbGxpZGVhYmxlc1tpXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG59XHJcblxyXG5mdW5jdGlvbiBkb3dubG9hZChmaWxlbmFtZTogc3RyaW5nLCB0ZXh0OiBzdHJpbmcpIHtcclxuICAgIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCAnZGF0YTp0ZXh0L3BsYWluO2NoYXJzZXQ9dXRmLTgsJyArIGVuY29kZVVSSUNvbXBvbmVudCh0ZXh0KSk7XHJcbiAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnZG93bmxvYWQnLCBmaWxlbmFtZSk7XHJcbiAgXHJcbiAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xyXG4gIFxyXG4gICAgZWxlbWVudC5jbGljaygpO1xyXG4gIFxyXG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChlbGVtZW50KTtcclxuICB9XHJcblxyXG5mdW5jdGlvbiBnZXRSYW5kb21TdHJpbmcoY2hhcmFjdGVyc1RvQ2hvb3NlRnJvbTogc3RyaW5nW10sIG46IG51bWJlcikge1xyXG4gICAgbGV0IHJhbmRvbU51bWJlcnMgPSBnZXRSYW5kb21OdW1iZXJzKG4pO1xyXG4gICAgbGV0IHN0cmluZyA9IFwiXCI7XHJcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgcmFuZG9tTnVtYmVycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHN0cmluZyArPSBjaGFyYWN0ZXJzVG9DaG9vc2VGcm9tW3JhbmRvbU51bWJlcnNbaV1dO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHN0cmluZztcclxufVxyXG5cclxuLy8gQnVmZmVyIHRoZSByYW5kb20gY2hhcmFjdGVycyB3ZSBnZXQgZnJvbSBjcnlwdG8gdG8gaW1wcm92ZVxyXG4vLyB0aGUgc3BlZWQuIEFsc28sIEkgdGVzdGVkIGl0LCBhbmQgaXQncyBmYXN0ZXIgdGhhbiB1c2luZ1xyXG4vLyBNYXRoLnJhbmRvbSwgYW5kIGhvcGVmdWxseSBoYXMgYmV0dGVyIHJhbmRvbW5lc3NcclxubGV0IGJ1ZmZlclNpemUgPSAxMDAwMDtcclxubGV0IG51bWJlckJ1ZmZlcjogVWludDE2QXJyYXkgPSBnZXRSYW5kb21OdW1iZXJzKGJ1ZmZlclNpemUpO1xyXG5sZXQgbnVtYmVyQnVmZmVySW5kZXggPSAtMTtcclxuZnVuY3Rpb24gZ2V0UmFuZG9tQ2hhcmFjdGVyKCkge1xyXG4gICAgbnVtYmVyQnVmZmVySW5kZXggKz0gMTtcclxuICAgIGlmIChudW1iZXJCdWZmZXJJbmRleCA+PSBidWZmZXJTaXplKSB7XHJcbiAgICAgICAgbnVtYmVyQnVmZmVySW5kZXggPSAwO1xyXG4gICAgICAgIG51bWJlckJ1ZmZlciA9IGdldFJhbmRvbU51bWJlcnMoYnVmZmVyU2l6ZSk7XHJcbiAgICB9XHJcbiAgICBsZXQgcmFuZG9tTnVtYmVyID0gbnVtYmVyQnVmZmVyW251bWJlckJ1ZmZlckluZGV4XTtcclxuICAgIHJldHVybiBjaGFyYWN0ZXJzVG9DaG9vc2VGcm9tW3JhbmRvbU51bWJlcl07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFJhbmRvbU51bWJlcnMobjogbnVtYmVyKSB7XHJcbiAgICBsZXQgcmFuZG9tTnVtYmVycyA9IG5ldyBVaW50MTZBcnJheShuKTtcclxuICAgIHJhbmRvbU51bWJlcnMgPSBjcnlwdG8uZ2V0UmFuZG9tVmFsdWVzKHJhbmRvbU51bWJlcnMpO1xyXG4gICAgcmV0dXJuIHJhbmRvbU51bWJlcnM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvdW50TWF0Y2hpbmdMZXR0ZXJzKHMxOiBzdHJpbmdbXSwgczI6IHN0cmluZ1tdKSB7XHJcbiAgICBsZXQgbWF0Y2hpbmcgPSAwO1xyXG4gICAgbGV0IG1pbkxlbmd0aCA9IE1hdGgubWluKHMxLmxlbmd0aCwgczIubGVuZ3RoKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWluTGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAoczFbaV0gPT09IHMyW2ldKSB7XHJcbiAgICAgICAgICAgIG1hdGNoaW5nKys7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG1hdGNoaW5nO1xyXG59XHJcblxyXG5mdW5jdGlvbiByZ2JTdHJpbmcocmVkOiBudW1iZXIsIGdyZWVuOiBudW1iZXIsIGJsdWU6IG51bWJlcikge1xyXG4gICAgcmV0dXJuIFwicmdiKFwiICsgcmVkICsgXCIsXCIgKyBncmVlbiArIFwiLFwiICsgYmx1ZSArIFwiKVwiO1xyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==