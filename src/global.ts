import { Collideable, Drawable, Updateable } from "./types";

export let width: number = 1000;
export let height: number = 700;
export let ctx: CanvasRenderingContext2D;
export let canvas = document.createElement("canvas");
canvas.width = width;
canvas.height = height;
ctx = canvas.getContext("2d");
export let drawables: Drawable[] = [];
export let foregroundDrawables: Drawable[] = [];
export let collideables: Collideable[] = [];
export let updateables: Updateable[] = [];
export let playerDictionary = [["C", "A", "T"]];

// Put any global variables that you want to be able to reassign here
export let g = {
    bananas: 0,
    monkeys: 0,
    lettersPerSecond: 0,
    mouseX: -1,
    mouseY: -1,
    idCounter: 0,
    currentTargetIndex: 0,
    keyboardKeys: ["A"],
    maxKeyboardKeys: 1,
    targetOwned: [true],
    additivePercentBonus: 0,
    additiveFlatBonus: 0,
    charactersToChooseFrom: <string[]>[],
    incomeAccumulator: 0,
    textDisplayLetters: 3,
};
