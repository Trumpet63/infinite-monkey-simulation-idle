import { ctx, foregroundDrawables, g, playerDictionary } from "./global";
import { rgbString } from "./util";

export class DictionaryView {
    public id: number;
    public bottomLeftX: number;
    public bottomLeftY: number;
    public backgroundColor: string = rgbString(200, 200, 200);

    public constructor(
        bottomLeftX: number,
        bottomLeftY: number,
    ) {
        this.bottomLeftX = bottomLeftX;
        this.bottomLeftY = bottomLeftY;

        this.id = g.idCounter;
        g.idCounter += 1;
        foregroundDrawables.push(this);
    }

    public draw() {
        let width = 100;
        let heightPerWord = 21;
        let spacing = 5;
        let height = playerDictionary.length * (heightPerWord + spacing) + spacing;
        let x = this.bottomLeftX;
        let y = this.bottomLeftY - height - 10;
        let textX = x + spacing;
        ctx.save();
        ctx.fillStyle = this.backgroundColor;
        ctx.fillRect(x, y, width, height);
        ctx.fillStyle = "black";
        ctx.font = "16px Arial";
        ctx.textAlign = "left";
        for (let i = 0; i < playerDictionary.length; i++) {
            ctx.fillText(
                playerDictionary[i].join(""),
                textX,
                this.bottomLeftY - (heightPerWord + spacing) * i - spacing - 15
            );
        }
        ctx.restore();
    }

    public delete() {
        for (let i = 0; i < foregroundDrawables.length; i++) {
            if (foregroundDrawables[i].id === this.id) {
                foregroundDrawables.splice(i, 1);
            }
        }
    }
}