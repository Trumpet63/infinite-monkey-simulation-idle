export type Drawable = {
    draw: (currentTimeMillis: number) => void
};

export type Collideable = {
    collide: (pointX: number, pointY: number) => boolean,
    isHovered: boolean,
    isMouseDowned: boolean,
    onClick: () => void,
};

export type Updateable = {
    update: () => void,
};
