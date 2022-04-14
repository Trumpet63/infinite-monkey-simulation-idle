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

// make it so you can't pull two of the same words
// start the game with a random word
// display the player's dictionary to them somehow
// word particle effects?

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

import { Button } from "./button";
import { canvas, collideables, ctx, drawables, g, playerDictionary, updateables } from "./global";
import { eraseSave, loadFromLocalStorage, save } from "./local_storage";
import { download, generatePermutations } from "./test_permutations";
import { alignTextDisplaysToGrid, TextDisplay } from "./text_display";
import { Collideable } from "./types";
import { Upgrade } from "./upgrade";
import { upgrades } from "./upgrades";
import { countMatchingLetters, getRandomCharacter, getRandomInt, rgbString } from "./util";
import { parseWords, toParse } from "./unparsed_words";
import { words } from "./words";

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
        20 + 30 * i,
        550,
        25,
        25,
        key,
        buttonColor,
        buttonHoverColor,
        () => {
            createCurrentKeyboardKeyButton(g.keyboardKeys.length, key);
            g.keyboardKeys.push(key);
            updateCharactersToChooseFrom();

            // not sure if I will want to clear all the current
            // strings when the player changes the keyboard
            // currentString = [];
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

let randomNumberSize = 65536;
updateCharactersToChooseFrom();
let keyboardKeyButtons: Button[] = []

for (let i = 0; i < g.keyboardKeys.length; i++) {
    createCurrentKeyboardKeyButton(i, g.keyboardKeys[i]);
}

document.body.appendChild(canvas);

let recruitPrice = 10 * (g.monkeys + 1) * (g.monkeys + 1);
let button1 = new Button(
    100,
    100,
    80,
    30,
    "Recruit Monkey " + recruitPrice,
    buttonColor,
    buttonHoverColor,
    () => {
        g.monkeys += 1;
        new TextDisplay();
        g.lettersPerSecond = 1;
        g.bananas -= recruitPrice;
        recruitPrice = 10 * (g.monkeys + 1) * (g.monkeys + 1);
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
    480,
    80,
    30,
    "Gather Bananas",
    buttonColor,
    buttonHoverColor,
    (currentTimeMillis: number) => {
        if (currentTimeMillis !== undefined
            && (currentTimeMillis - lastClickedTimeMillis) < 50) {
            return;
        }
        g.bananas += 1;
        lastClickedTimeMillis = currentTimeMillis;
    },
    () => {}
);

let upgradeKeyboardPrice = Math.pow(10, g.maxKeyboardKeys + 1);
let button3 = new Button(
    250,
    480,
    80,
    30,
    "Upgrade Keyboard " + upgradeKeyboardPrice,
    buttonColor,
    buttonHoverColor,
    () => {
        g.bananas -= upgradeKeyboardPrice;
        g.maxKeyboardKeys += 1;
        updateCharactersToChooseFrom();
        upgradeKeyboardPrice = Math.pow(10, g.maxKeyboardKeys + 1);
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

let wordButtons: Button[] = [];
let newWordPrice: number = 1;
let newWordButton: Button = new Button(
    350,
    480,
    80,
    30,
    "Buy New Word " + newWordPrice,
    buttonColor,
    buttonHoverColor,
    () => {
        g.bananas -= newWordPrice;
        newWordPrice = (playerDictionary.length + 1) * (playerDictionary.length + 1);
        newWordButton.text = "Buy New Word " + newWordPrice;
        for (let i = 0; i < 3; i++) {
            let wordIndex: number = getRandomInt(0, words[0].length);
            let word: string = words[0][wordIndex];
            let wordButton: Button = new Button(
                400 + 85 * i,
                445,
                80,
                30,
                word,
                buttonColor,
                buttonHoverColor,
                () => {
                    for (let j = 0; j < wordButtons.length; j++) {
                        wordButtons[j].delete();
                    }
                    wordButtons = [];
                    playerDictionary.push(word.split(""));
                    words[0].splice(wordIndex, 1);
                },
                () => {},
            );
            wordButtons.push(wordButton);
        }
    },
    () => {
        if (newWordPrice > g.bananas
            || wordButtons.length > 0) {
            newWordButton.isDisabled = true;
        } else {
            newWordButton.isDisabled = false;
        }
    }
);

// Comment out the upgrade buttons for now
// let upgradeButtons: Button[] = [];
// createUpgradeButtons();

let lastIncomeUpdateTimeMillis: number = performance.now();
let millisPerIncomeUpdate: number = 2000;
let lastBananasPerSecond: number = 0;

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
        if (collideable.isMouseDowned
            && !collideable.isDisabled) {
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

    // Call update on everything just before draw
    for (let i = 0; i < updateables.length; i++) {
        updateables[i].update(currentTimeMillis, elapsedTimeMillis);
    }

    // Update the income per second if it's time to
    let elapsedSinceLastIncomeUpdate = currentTimeMillis - lastIncomeUpdateTimeMillis;
    if (elapsedSinceLastIncomeUpdate >= millisPerIncomeUpdate) {
        lastBananasPerSecond = g.incomeAccumulator / (elapsedSinceLastIncomeUpdate / 1000);
        g.incomeAccumulator = 0;
        lastIncomeUpdateTimeMillis = currentTimeMillis;
    }

    // Draw values at the end of the frame so they're as up
    // to date as they can be
    ctx.save();
    ctx.fillStyle = "black";
    ctx.font = "20px Arial";

    ctx.textAlign = "center";
    ctx.fillText(bananasPerSecond(lastBananasPerSecond), 140, 30);
    ctx.fillText(bananas(g.bananas), 140, 55);
    ctx.fillText(monkeys(g.monkeys), 140, 80);

    ctx.textAlign = "right";
    ctx.fillText("Keyboard Keys:", 160, 450);

    ctx.restore();

    for (let i = 0; i < drawables.length; i++) {
        drawables[i].draw(currentTimeMillis);
    }

    previousTimeMillis = currentTimeMillis;
    window.requestAnimationFrame(draw);
}

// Make a button out of the a keyboard key so you
// can click to remove it from your keyboard.
// i is the index in the keyboardKeys array
// On click it deletes and remakes all the buttons
function createCurrentKeyboardKeyButton(i: number, key: string) {
    let button = new Button(
        180 + 30 * i,
        430,
        25,
        25,
        key,
        buttonColor,
        buttonHoverColor,
        () => {
            g.keyboardKeys.splice(i, 1);
            updateCharactersToChooseFrom();
            for (let j = 0; j < keyboardKeyButtons.length; j++) {
                keyboardKeyButtons[j].delete();
            }
            for (let j = 0; j < g.keyboardKeys.length; j++) {
                let key = g.keyboardKeys[j];
                createCurrentKeyboardKeyButton(j, key);
            }
            // not sure if I will want to clear all the current
            // strings when the player changes the keyboard
            // currentString = [];
        },
        () => {},
    );
    keyboardKeyButtons.push(button);
}

function updateCharactersToChooseFrom() {
    g.charactersToChooseFrom = [];
    if (g.keyboardKeys.length === 0) {
        return;
    }
    for (let i = 0; i < randomNumberSize; i++) {
        g.charactersToChooseFrom.push(
            g.keyboardKeys[i % g.keyboardKeys.length]
        );
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

function getCollidingEntity(pointX: number, pointY: number) {
    for (let i = 0; i < collideables.length; i++) {
        let isColliding = collideables[i].collide(g.mouseX, g.mouseY);
        if (isColliding) {
            return collideables[i];
        }
    }
    return undefined;
}

function bananas(number: number) {
    number = Math.round(number);
    if (number === 1) {
        return number + " banana";
    } else {
        return number + " bananas";
    }
}

function monkeys(number: number) { 
    if (number === 1) {
        return number + " monkey";
    } else {
        return number + " monkeys";
    }
}

function bananasPerSecond(number: number) {
    number = Math.round(number);
    if (number === 1) {
        return number + " banana per second";
    } else {
        return number + " bananas per second";
    }
}

function sorted(array: any[], compareFn?: (a: any, b: any) => number) {
    return array.slice().sort(compareFn);
}

function roundToNPlaces(x: number, numPlaces: number): number {
    let scale: number = Math.pow(10, numPlaces);
    return Math.round(x * scale) / scale;
}
