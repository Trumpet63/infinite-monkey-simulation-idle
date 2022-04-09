import { ctx, drawables, g, updateables } from "./global";
import { countMatchingLetters, getRandomCharacter } from "./util";

export class TextDisplay {
    public x: number;
    public y: number;
    public height: number;
    public id: number;
    public lettersToTypeRemainder: number = 0;
    public lastWordFinishTimeMillis: number;
    public currentString: string[] = [];
    
    // probably this will be the same across all displays
    // so I don't need this variable
    // public lettersPerSecond: number;
    
    public constructor(
        x: number,
        y: number,
        height: number,
    ) {
        this.x = x;
        this.y = y;
        this.height = height;

        this.id = g.idCounter;
        g.idCounter += 1;
        drawables.push(this);
        updateables.push(this);
        // collideables.push(this);
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
        let width = g.currentTarget.letters.length * fontSize;
        ctx.save();
        ctx.strokeStyle = "black";
        ctx.strokeRect(
            this.x,
            this.y,
            width,
            this.height
        );
        ctx.fillStyle = "black";
        ctx.font = fontSize + "px Arial";
        for(let i = 0; i < g.currentTarget.letters.length; i++) {
            let character: string;
            if (i >= currentString.length) {
                character = "_";
            } else {
                character = currentString[i];
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
