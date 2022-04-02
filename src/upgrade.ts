// TODO: make sure that when the game first starts up I can just set the
// level on the upgrade and it will automatically calculate
// the right settings. This way, all I have to put in the save file
// is the level of each upgrade.

// Note: do I plan to have upgrades other than additive or multiplicative
// increases in the bananas per second? If so, I have to make this
// very generic.
export class Upgrade {
    public maxLevel: number;
    public price: number;
    public level: number;
    public text: string;
    public buy: () => void;

    public constructor(
        maxLevel: number,
        price: number,
        text: string,
        buy: () => void,
    ) {
        this.maxLevel = maxLevel;
        this.price = price;
        this.text = text;
        this.level = 0;
        this.buy = buy;
    }
}
