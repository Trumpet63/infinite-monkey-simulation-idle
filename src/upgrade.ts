// TODO: make sure that when the game first starts up I can just set the
// level on the upgrade and it will automatically calculate
// the right settings. This way, all I have to put in the save file
// is the level of each upgrade.

// Note: do I plan to have upgrades other than additive or multiplicative
// increases in the bananas per second? If so, I have to make this
// very generic.
export class Upgrade {
    public canBuy: boolean;
    public price: number;
    public level: number;

    // not sure this is right, just a placeholder
    public update(level: number) {

    }
}