export type Drawable = {
    id: number,
    draw: (currentTimeMillis: number) => void
};

export type Collideable = {
    id: number,
    collide: (pointX: number, pointY: number) => boolean,
    isHovered: boolean,
    isMouseDowned: boolean,
    onClick: (currentTimeMillis: number) => void,
};

export type Updateable = {
    id: number,
    update: () => void,
};
