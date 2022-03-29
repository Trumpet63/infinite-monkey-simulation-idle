// TODO:
// Auto-save every 10 seconds
// Make the erase save button restart the game as well
// Prevent catchup lag after tab-out
// Add upgrades
// Auto-calculate average bananas per word
// get rid of repeats of if (button.isDisabled) {return;}

import { Button } from "./button";
import { canvas, collideables, ctx, drawables, g, updateables } from "./global";
import { eraseSave, loadFromLocalStorage, save } from "./local_storage";
import { targets } from "./targets";
import { download, generatePermutations } from "./test_permutations";
import { Collideable } from "./types";
import { countMatchingLetters } from "./util";

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

loadFromLocalStorage();

let buttonColor: string = rgbString(200, 200, 255);
let buttonHoverColor: string = rgbString(180, 180, 230);
let eraseButtonColor: string = rgbString(255, 50, 50);
let eraseButtonHoverColor: string = rgbString(225, 20, 20);

// Make buttons out of all possible keyboard keys
// let allKeyboardKeys = [" ", "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
let allKeyboardKeys = ["⎵", "A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
for (let i = 0; i < allKeyboardKeys.length; i++) {
    let key = allKeyboardKeys[i];
    let button = new Button(
        40 + 30 * i,
        450,
        25,
        25,
        key,
        buttonColor,
        buttonHoverColor,
        () => {
            if (button.isDisabled) {
                return;
            }
            createCurrentKeyboardKeyButton(g.keyboardKeys.length, key);
            g.keyboardKeys.push(key);
            updateCharactersToChooseFrom();
            currentString = [];
        },
        () => {
            if (g.keyboardKeys.length < g.maxKeyboardKeys) {
                button.isDisabled = false;
            } else {
                button.isDisabled = true;
            }
        },
    );
}

let charactersToChooseFrom: string[];
let randomNumberSize = 65536;
updateCharactersToChooseFrom();
let keyboardKeyButtons: Button[] = []

for (let i = 0; i < g.keyboardKeys.length; i++) {
    createCurrentKeyboardKeyButton(i, g.keyboardKeys[i]);
}

// Make a button out of the a keyboard key so you
// can click to remove it from your keyboard.
// i is the index in the keyboardKeys array
// On click it deletes and remakes all the buttons
function createCurrentKeyboardKeyButton(i: number, key: string) {
    let button = new Button(
        180 + 30 * i,
        280,
        25,
        25,
        key,
        buttonColor,
        buttonHoverColor,
        () => {
            if (button.isDisabled) {
                return;
            }
            g.keyboardKeys.splice(i, 1);
            updateCharactersToChooseFrom();
            for (let j = 0; j < keyboardKeyButtons.length; j++) {
                keyboardKeyButtons[j].delete();
            }
            for (let j = 0; j < g.keyboardKeys.length; j++) {
                let key = g.keyboardKeys[j];
                createCurrentKeyboardKeyButton(j, key);
            }
            currentString = [];
        },
        () => {},
    );
    keyboardKeyButtons.push(button);
}

function updateCharactersToChooseFrom() {
    charactersToChooseFrom = [];
    if (g.keyboardKeys.length === 0) {
        return;
    }
    for (let i = 0; i < randomNumberSize; i++) {
        charactersToChooseFrom.push(
            g.keyboardKeys[i % g.keyboardKeys.length]
        );
    }
}

let currentString: string[] = [];

let targetButtons: Button[] = [];
for (let i = 0; i < targets.length; i++) {
    let button = new Button(
        500,
        50 + 35 * i,
        80,
        30,
        targets[i].displayString + " " + targets[i].price,
        buttonColor,
        buttonHoverColor,
        () => {
            if (button.isDisabled) {
                return;
            }
            g.bananas -= targets[i].price;
            // un-disable the current target
            for (let j = 0; j < targets.length; j++) {
                if (targets[j].displayString === g.currentTarget.displayString) {
                    targetButtons[j].isDisabled = false;
                }
            }
            g.currentTarget = targets[i];
            g.currentTargetIndex = i;
            targetButtons[i].isDisabled = true;
        },
        () => {
            if (targets[i].price > g.bananas
                || targets[i].displayString === g.currentTarget.displayString) {
                button.isDisabled = true;
            } else {
                button.isDisabled = false;
            }
        },
    );
    targetButtons.push(button);
}
// targetButtons[0].isDisabled = true;

document.body.appendChild(canvas);

let recruitPrice = 10;
let button1 = new Button(
    100,
    100,
    80,
    30,
    "Recruit Monkey " + recruitPrice,
    buttonColor,
    buttonHoverColor,
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

let lastClickedTimeMillis: number;
let button2 = new Button(
    100,
    350,
    80,
    30,
    "Type",
    buttonColor,
    buttonHoverColor,
    (currentTimeMillis: number) => {
        if (currentTimeMillis !== undefined
            && (currentTimeMillis - lastClickedTimeMillis) < 50) {
            return;
        }
        g.lettersToTypeRemainder += 1;
        lastClickedTimeMillis = currentTimeMillis;
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
    buttonColor,
    buttonHoverColor,
    () => {
        if (button3.isDisabled) {
            return;
        }
        g.bananas -= upgradeKeyboardPrice;
        g.maxKeyboardKeys += 1;
        updateCharactersToChooseFrom();
        upgradeKeyboardPrice *= 10;
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

let saveButton: Button = new Button(
    10,
    600,
    100,
    30,
    "Save",
    buttonColor,
    buttonHoverColor,
    () => {save()},
    () => {},
);

let eraseButton: Button = new Button(
    10,
    640,
    100,
    30,
    "Erase Save",
    eraseButtonColor,
    eraseButtonHoverColor,
    () => {eraseSave()},
    () => {},
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
            collideable.onClick(ev.timeStamp);
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
            && currentString.length >= g.currentTarget.letters.length
        )) {
        currentString = [];
        lastWordFinishTimeMillis = undefined;
    }
    
    // Generate the needed characters and award bananas
    while (g.lettersToTypeRemainder >= 1) {
        g.lettersToTypeRemainder -= 1;
        if (charactersToChooseFrom.length === 0) {
            continue;
        }
        let character = getRandomCharacter();
        currentString.push(character);
        if (currentString.length >= g.currentTarget.letters.length) {
            lastWordFinishTimeMillis = currentTimeMillis;
            let matchingLetters: number = countMatchingLetters(
                currentString, g.currentTarget.letters);
            if (matchingLetters > 0) {
                g.bananas += g.currentTarget.rewards[matchingLetters - 1];
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
    for(let i = 0; i < g.currentTarget.letters.length; i++) {
        let character: string;
        if (i >= currentString.length) {
            character = "_"
        } else {
            character = currentString[i];
        }
        ctx.fillText(
            character,
            100 + 20 * i,
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
    ctx.fillText(g.monkeys.toString() + " monkeys", 140, 80);
    ctx.fillText(g.bananas.toString() + " bananas", 140, 55);
    ctx.textAlign = "left";
    ctx.fillText("Target String: "
        + g.currentTarget.displayString, 250, 120);
    for (let i = 0; i < g.currentTarget.rewards.length; i++) {
        let line = (i + 1) + ": "
            + g.currentTarget.rewards[i] + " bananas";
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

function rgbString(red: number, green: number, blue: number) {
    return "rgb(" + red + "," + green + "," + blue + ")";
}
