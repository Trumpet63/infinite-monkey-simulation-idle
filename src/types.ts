export type Drawable = {
    id: number,
    draw: (currentTimeMillis: number) => void
};

export type Collideable = {
    id: number,
    collide: (pointX: number, pointY: number) => boolean,
    isHovered: boolean,
    isMouseDowned: boolean,
    isDisabled: boolean,
    onClick: (currentTimeMillis: number) => void,
};

export type Updateable = {
    id: number,
    update: (currentTimeMillis: number, elapsedTimeMillis: number) => void,
};
