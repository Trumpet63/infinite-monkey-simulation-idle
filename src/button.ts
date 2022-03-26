import { collideables, ctx, drawables, g, updateables } from "./global";

export class Button {
    public id: number;
    public topLeftX: number;
    public topLeftY: number;
    public width: number;
    public height: number;
    public bottomRightX: number;
    public bottomRightY: number;
    public text: string;
    public color: string;
    public hoveredColor: string;
    public disabledColor: string = "gray";
    public isHovered: boolean = false;
    public isDisabled: boolean = false;
    public isMouseDowned: boolean = false;
    public onClick: (currentTimeMillis?: number) => void;
    public update: () => void;

    public constructor(
        topLeftX: number,
        topLeftY: number,
        width: number,
        height: number,
        text: string,
        color: string,
        hoveredColor: string,
        onClick: (currentTimeMillis?: number) => void,
        update: () => void,
    ) {
        this.id = g.idCounter;
        g.idCounter += 1;
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

        drawables.push(this);
        collideables.push(this);
        updateables.push(this);
    }

    public draw(currentTimeMillis: number) {
        let topLeftX = this.topLeftX;
        let topLeftY = this.topLeftY;
        let width = this.width;
        let height = this.height;
        let fontSize = 15;
        let color: string;
        if (this.isMouseDowned
            && !this.isDisabled) {
            let shrink = 0.1;
            let shrinkX = width * shrink;
            let shrinkY = height * shrink;
            width -= shrinkX;
            height -= shrinkY;
            topLeftX += shrinkX / 2;
            topLeftY += shrinkY / 2;
            fontSize *= (1 - shrink);
        }
        if (this.isDisabled) {
            color = this.disabledColor
        } else {
            if (this.isHovered) {
                color = this.color;
            } else {
                color = this.hoveredColor;
            }
        }

        ctx.save();
        ctx.fillStyle = color;
        ctx.font = fontSize + "px Arial";
        ctx.fillRect(topLeftX, topLeftY, width, height);
        ctx.textAlign = "center";
        ctx.fillStyle = "black";
        ctx.fillText(
            this.text,
            topLeftX + width / 2,
            topLeftY + height / 2 + fontSize / 2.4
        );
        ctx.restore();
    }

    public collide(pointX: number, pointY: number) {
        return this.topLeftX <= pointX
            && pointX <= this.bottomRightX
            && this.topLeftY <= pointY
            && pointY <= this.bottomRightY;
    }

    public delete() {
        for (let i = 0; i < drawables.length; i++) {
            if (drawables[i].id === this.id) {
                drawables.splice(i, 1);
            }
        }
        for (let i = 0; i < collideables.length; i++) {
            if (collideables[i].id === this.id) {
                collideables.splice(i, 1);
            }
        }
        for (let i = 0; i < updateables.length; i++) {
            if (updateables[i].id === this.id) {
                updateables.splice(i, 1);
            }
        }
    }
}
