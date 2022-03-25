// TODO:
// Prevent catchup lag after tab-out
// Change/upgrade the target string
// Change the keyboard used to type
// Auto-calculate average bananas per word

import { Button } from "./button";
import { canvas, collideables, ctx, drawables, g, updateables } from "./global";
import { Target } from "./target";
import { Collideable } from "./types";

// let keyboardKeys = [" ", "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
let keyboardKeys = ["A"];
let charactersToChooseFrom: string[];
let randomNumberSize = 65536;
updateCharactersToChooseFrom();

function updateCharactersToChooseFrom() {
    charactersToChooseFrom = [];
    for (let i = 0; i < randomNumberSize; i++) {
        charactersToChooseFrom.push(keyboardKeys[i % keyboardKeys.length]);
    }
}

let currentTarget: Target = new Target(
    ["C", "A", "T"],
    "CAT",
    [1, 8, 40],
    0,
);
let targetString: string[] = ["C", "A", "T"];
let displayTargetString: string = "CAT";
let currentString: string[] = [];

document.body.appendChild(canvas);

let recruitPrice = 10;
let button1 = new Button(
    100,
    100,
    80,
    30,
    "Recruit Monkey " + recruitPrice,
    rgbString(200, 200, 255),
    rgbString(180, 180, 230),
    () => {
        if (button1.isDisabled) {
            return;
        }
        g.monkeys += 1;
        g.lettersPerSecond += 1;
        g.bananas -= recruitPrice;
        recruitPrice += 2;
        button1.text = "Recruit Monkey " + recruitPrice;
    },
    () => {
        if (recruitPrice > g.bananas) {
            button1.isDisabled = true;
        } else {
            button1.isDisabled = false;
        }
    },
);

let button2 = new Button(
    100,
    350,
    80,
    30,
    "Type",
    rgbString(200, 200, 255),
    rgbString(180, 180, 230),
    () => {
        g.lettersToTypeRemainder += 1;
    },
    () => {}
);

let upgradeKeyboardPrice = 100;
let button3 = new Button(
    250,
    400,
    80,
    30,
    "Upgrade Keyboard 100",
    rgbString(200, 200, 255),
    rgbString(180, 180, 230),
    () => {
        if (button3.isDisabled) {
            return;
        }
        g.bananas -= upgradeKeyboardPrice;
        if (keyboardKeys.length === 1) {
            keyboardKeys.push("C");
        } else if (keyboardKeys.length === 2) {
            keyboardKeys.push("T");
        }
        updateCharactersToChooseFrom();
        upgradeKeyboardPrice *= 10;
        if (keyboardKeys.length === 3) {
            upgradeKeyboardPrice = Infinity;
        }
        button3.text = "Upgrade Keyboard " + upgradeKeyboardPrice;
    },
    () => {
        if (upgradeKeyboardPrice > g.bananas) {
            button3.isDisabled = true;
        } else {
            button3.isDisabled = false;
        }
    }
);

// store the mouse xy in case it gets executed faster than
// once every frame, which would be useless since hover is
// handled only once every frame
canvas.onmousemove = (ev: MouseEvent) => {
    let bounds: DOMRect = canvas.getBoundingClientRect();
    g.mouseX = ev.x - bounds.left;
    g.mouseY = ev.y - bounds.top;
};

// assume for simplicity that you can't have two mousedown
// events without a mouseup
canvas.onmousedown = (ev: MouseEvent) => {
    let bounds: DOMRect = canvas.getBoundingClientRect();
    let mouseX = ev.x - bounds.left;
    let mouseY = ev.y - bounds.top;
    let collideable: Collideable = getCollidingEntity(mouseX, mouseY);
    if (collideable !== undefined) {
        collideable.isMouseDowned = true;
        currentMouseDowned = collideable;
    } else {
        currentMouseDowned = undefined;
    }
}

canvas.onmouseup = (ev: MouseEvent) => {
    let bounds: DOMRect = canvas.getBoundingClientRect();
    let mouseX = ev.x - bounds.left;
    let mouseY = ev.y - bounds.top;
    let collideable: Collideable = getCollidingEntity(mouseX, mouseY);
    if (collideable !== undefined) {
        if (collideable.isMouseDowned) {
            collideable.onClick();
        }
    }
    if (currentMouseDowned !== undefined) {
        currentMouseDowned.isMouseDowned = false;
    }
}


let previousTimeMillis: number;
let previousHovered: Collideable;
let currentMouseDowned: Collideable;
let lastWordFinishTimeMillis: number;

window.requestAnimationFrame(draw);

function draw(currentTimeMillis: number) {
    let elapsedTimeMillis: number = 0;
    if (previousTimeMillis !== undefined) {
        elapsedTimeMillis = currentTimeMillis - previousTimeMillis;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    if (previousHovered !== undefined) {
        previousHovered.isHovered = false;
    }
    for (let i = 0; i < collideables.length; i++) {
        let isColliding = collideables[i].collide(g.mouseX, g.mouseY);
        if (isColliding) {
            let currentHovered = collideables[i];
            currentHovered.isHovered = true;
            previousHovered = currentHovered;
            break; // only one thing can be hovered over at a time
        }
    }

    g.lettersToTypeRemainder += elapsedTimeMillis / 1000 * g.lettersPerSecond;
    
    // Make a finished word stay on screen for 500ms, or until
    // another letter is typed
    if ((
            lastWordFinishTimeMillis !== undefined
            && (currentTimeMillis - lastWordFinishTimeMillis) > 500
        ) || (
            g.lettersToTypeRemainder >= 1
            && currentString.length >= targetString.length
        )) {
        currentString = [];
        lastWordFinishTimeMillis = undefined;
    }
    
    // Generate the needed characters and award bananas
    while (g.lettersToTypeRemainder >= 1) {
        g.lettersToTypeRemainder -= 1;
        let character = getRandomCharacter();
        currentString.push(character);
        if (currentString.length >= targetString.length) {
            lastWordFinishTimeMillis = currentTimeMillis;
            let matchingLetters: number = countMatchingLetters(currentString, targetString);
            if (matchingLetters > 0) {
                g.bananas += currentTarget.rewards[matchingLetters - 1];
            }
            if (g.lettersToTypeRemainder >= 1) {
                currentString = [];
            }
        }
    }

    // Draw the current string on screen
    ctx.save();
    ctx.fillStyle = "black";
    ctx.font = "20px Arial";
    for(let i = 0; i < targetString.length; i++) {
        let character: string;
        if (i >= currentString.length) {
            character = "_"
        } else {
            character = currentString[i];
        }
        ctx.fillText(
            character,
            120 + 20 * i,
            200
        );
    }
    ctx.restore();

    // Call update on everything just before draw
    for (let i = 0; i < drawables.length; i++) {
        updateables[i].update();
    }

    // Draw values at the end of the frame so they're as up
    // to date as they can be
    ctx.save();
    ctx.fillStyle = "black";
    ctx.font = "20px Arial";
    ctx.textAlign = "center";
    ctx.fillText(g.lettersPerSecond.toString(), 140, 80);
    ctx.fillText(g.bananas.toString() + " bananas", 140, 55);
    for (let i = 0; i < keyboardKeys.length; i++) {
        ctx.fillText(keyboardKeys[i], 180 + i * 20, 300);
    }
    ctx.textAlign = "left";
    ctx.fillText("Target String: " + displayTargetString, 250, 120);
    for (let i = 0; i < currentTarget.rewards.length; i++) {
        let line = (i + 1) + ": " + currentTarget.rewards[i] + " bananas";
        ctx.fillText(line, 280, 140 + 20 * i);
    }
    ctx.textAlign = "right";
    ctx.fillText("Keyboard Keys:", 160, 300);
    ctx.restore();

    for (let i = 0; i < drawables.length; i++) {
        drawables[i].draw(currentTimeMillis);
    }

    previousTimeMillis = currentTimeMillis;
    window.requestAnimationFrame(draw);
}

function getCollidingEntity(pointX: number, pointY: number) {
    for (let i = 0; i < collideables.length; i++) {
        let isColliding = collideables[i].collide(g.mouseX, g.mouseY);
        if (isColliding) {
            return collideables[i];
        }
    }
    return undefined;
}

function download(filename: string, text: string) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
  
    element.style.display = 'none';
    document.body.appendChild(element);
  
    element.click();
  
    document.body.removeChild(element);
}

function getRandomString(charactersToChooseFrom: string[], n: number) {
    let randomNumbers = getRandomNumbers(n);
    let string = "";
    for(let i = 0; i < randomNumbers.length; i++) {
        string += charactersToChooseFrom[randomNumbers[i]];
    }
    return string;
}

// Buffer the random characters we get from crypto to improve
// the speed. Also, I tested it, and it's faster than using
// Math.random, and hopefully has better randomness
let bufferSize = 10000;
let numberBuffer: Uint16Array = getRandomNumbers(bufferSize);
let numberBufferIndex = -1;
function getRandomCharacter() {
    numberBufferIndex += 1;
    if (numberBufferIndex >= bufferSize) {
        numberBufferIndex = 0;
        numberBuffer = getRandomNumbers(bufferSize);
    }
    let randomNumber = numberBuffer[numberBufferIndex];
    return charactersToChooseFrom[randomNumber];
}

function getRandomNumbers(n: number) {
    let randomNumbers = new Uint16Array(n);
    randomNumbers = crypto.getRandomValues(randomNumbers);
    return randomNumbers;
}

function countMatchingLetters(s1: string[], s2: string[]) {
    let matching = 0;
    let minLength = Math.min(s1.length, s2.length);
    for (let i = 0; i < minLength; i++) {
        if (s1[i] === s2[i]) {
            matching++;
        }
    }
    return matching;
}

function rgbString(red: number, green: number, blue: number) {
    return "rgb(" + red + "," + green + "," + blue + ")";
}
