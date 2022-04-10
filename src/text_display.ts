import { ctx, drawables, g, updateables } from "./global";
import { countMatchingLetters, getRandomCharacter, rgbString } from "./util";

let textDisplays: TextDisplay[] = [];
export class TextDisplay {
    public x: number;
    public y: number;
    public height: number;
    public width: number;
    public id: number;
    public lettersToTypeRemainder: number = 0;
    public lastWordFinishTimeMillis: number;
    public currentString: string[] = [];
    public correctColor: string = rgbString(255, 187, 0);
    
    public constructor(
        // x: number,
        // y: number,
        // height: number,
    ) {
        // this.x = x;
        // this.y = y;
        // this.height = height;

        this.id = g.idCounter;
        g.idCounter += 1;
        drawables.push(this);
        updateables.push(this);
        textDisplays.push(this);
        alignTextDisplaysToGrid();
    }

    public update(currentTimeMillis: number, elapsedTimeMillis: number) {
        this.lettersToTypeRemainder += elapsedTimeMillis / 1000 * g.lettersPerSecond;

        // Make a finished word stay on screen for 500ms, or until
        // another letter is typed
        if ((
                this.lastWordFinishTimeMillis !== undefined
                && (currentTimeMillis - this.lastWordFinishTimeMillis) > 500
            ) || (
                this.lettersToTypeRemainder >= 1
                && this.currentString.length >= g.currentTarget.letters.length
            )) {
                this.currentString = [];
            this.lastWordFinishTimeMillis = undefined;
        }
        
        // Generate the needed characters and award bananas
        while (this.lettersToTypeRemainder >= 1) {
            this.lettersToTypeRemainder -= 1;
            if (g.charactersToChooseFrom.length === 0) {
                continue;
            }
            let character = getRandomCharacter();
            this.currentString.push(character);
            if (this.currentString.length >= g.currentTarget.letters.length) {
                this.lastWordFinishTimeMillis = currentTimeMillis;
                let matchingLetters: number = countMatchingLetters(
                    this.currentString, g.currentTarget.letters);
                if (matchingLetters > 0) {
                    let bananasToAdd = (g.currentTarget.rewards[matchingLetters - 1]
                        + g.additiveFlatBonus) * (1 + g.additivePercentBonus);
                    g.bananas += bananasToAdd;
                    g.incomeAccumulator += bananasToAdd;
                }
                if (this.lettersToTypeRemainder >= 1) {
                    this.currentString = [];
                }
            }
        }
    }
    
    public draw() {
        let currentString = this.currentString;
        let fontSize: number = this.height * 4 / 7;
        // let width = g.currentTarget.letters.length * fontSize;
        ctx.save();
        ctx.strokeStyle = "black";
        ctx.strokeRect(
            this.x,
            this.y,
            this.width,
            this.height
        );
        ctx.font = fontSize + "px Arial";
        for(let i = 0; i < g.currentTarget.letters.length; i++) {
            let character: string;
            if (i >= currentString.length) {
                character = "_";
            } else {
                character = currentString[i];
            }
            if (character === "_") {
                ctx.fillStyle = "black";
            } else if (character === g.currentTarget.letters[i]) {
                ctx.fillStyle = this.correctColor;
            } else {
                ctx.fillStyle = "black";
            }
            ctx.fillText(
                character,
                this.x + fontSize * 0.15 + fontSize * i,
                this.y + fontSize * 1.2
            );
        }
        ctx.restore();
    }
}

export function alignTextDisplaysToGrid() {
    let numDisplays = textDisplays.length;
    let xOffset = 30;
    let yOffset = 150;
    let maxWidth = 680;
    let maxHeight = 270;
    let width;
    let numColumns;
    let nonEmptyRows;
    let height = 53;
    do {
        width = g.currentTarget.letters.length * height * 4 / 7;
        numColumns = Math.floor(maxWidth / width);
        nonEmptyRows = Math.ceil(numDisplays / numColumns);
        if (height * nonEmptyRows <= maxHeight) {
            break
        }
        height -= 1;
    } while(true);

    for (let i = 0; i < numDisplays; i++) {
        let row = Math.floor(i / numColumns);
        let column = i % numColumns;
        let x = column * width + xOffset;
        let y = row * height + yOffset;
        textDisplays[i].x = x;
        textDisplays[i].y = y;
        textDisplays[i].height = height;
        textDisplays[i].width = width;
    }
}
