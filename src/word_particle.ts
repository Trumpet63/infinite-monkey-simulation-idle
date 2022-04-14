import { ctx, drawables, g } from "./global";

export class WordParticle {
    public id: number;
    public velocityX: number;
    public velocityY: number;
    public text: string;
    public startX: number;
    public startY: number;
    public animationStartMillis: number;
    public animationEndMillis: number;
    public color: string;

    public constructor(
        text: string,
        color: string,
        startX: number,
        startY: number,
        currentTimeMillis: number,
    ) {
        this.text = text;
        this.color = color;
        this.startX = startX;
        this.startY = startY;
        this.animationStartMillis = currentTimeMillis;
        this.animationEndMillis = currentTimeMillis + 2000;
        let angle = Math.PI * 2 * Math.random();
        this.velocityX = Math.cos(angle) / 20;
        this.velocityY = Math.sin(angle) / 20;

        this.id = g.idCounter;
        g.idCounter += 1;
        drawables.push(this);
    }

    public draw(currentTimeMillis: number) {
        if (currentTimeMillis >= this.animationEndMillis) {
            this.delete();
            return;
        }
        let elapsedTimeMillis = currentTimeMillis - this.animationStartMillis;
        let currentX: number = this.startX + elapsedTimeMillis * this.velocityX;
        let currentY: number = this.startY + elapsedTimeMillis * this.velocityY;
        ctx.save();
        ctx.textAlign = "center";
        ctx.fillStyle = this.color;
        ctx.font = "20px Arial";
        ctx.fillText(this.text, currentX, currentY);
        ctx.restore();
    }

    public delete() {
        for (let i = 0; i < drawables.length; i++) {
            if (drawables[i].id === this.id) {
                drawables.splice(i, 1);
            }
        }
    }
}
