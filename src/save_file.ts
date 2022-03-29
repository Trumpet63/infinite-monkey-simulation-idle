export let saveFileVersion: number = 1;

export class SaveFile {
    // Use the version number to detect and invalidate
    // old and incompatible save files
    public version: number;

    public bananas: number;
    public monkeys: number;
    public targetIndex: number;
    public keyboardKeys: string[];
    public maxKeyboardKeys: number;

    public constructor(
        bananas: number,
        monkeys: number,
        targetIndex: number,
        keyboardKeys: string[],
        maxKeyboardKeys: number,
    ) {
        this.version = saveFileVersion;
        this.bananas = bananas;
        this.monkeys = monkeys;
        this.targetIndex = targetIndex;
        this.keyboardKeys = keyboardKeys;
        this.maxKeyboardKeys = maxKeyboardKeys;
    }
}
