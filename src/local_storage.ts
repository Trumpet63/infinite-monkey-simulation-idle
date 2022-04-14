import { g } from "./global";
import { SaveFile, saveFileVersion } from "./save_file";

let saveKey: string = "infine-monkey-idle-game";

export function save() {
    let saveFile: SaveFile = getSaveFile();
    let saveFileString: string = JSON.stringify(saveFile);
    localStorage.setItem(saveKey, saveFileString);
    console.log("Saved!");
    console.log(saveFileString);
}

function getSaveFile(): SaveFile {
    return new SaveFile(
        g.bananas,
        g.monkeys,
        g.currentTargetIndex,
        g.keyboardKeys,
        g.maxKeyboardKeys,
        g.targetOwned,
    );
}

export function loadFromLocalStorage() {
    let saveFileString = localStorage.getItem(saveKey);
    if (saveFileString === undefined
        || saveFileString === null) {
        console.error("Could not load save");
        return;
    } else {
        console.log("Save found", saveFileString);
    }
    loadFromString(saveFileString);
}

// I should be able to call this whether I'm loading from
// local storage or from a user-provided save import string
export function loadFromString(importString: string) {
    let loadedSave: SaveFile = JSON.parse(importString);
    if (loadedSave === undefined
        || loadedSave === null) {
        console.error("Failed to load save from local storage: JSON parse error");
        return;
    } else if (loadedSave.version !== saveFileVersion) {
        console.error("Failed to load save from local storage: Version mismatch");
        return;
    }
    console.log("Loaded save");
    console.log(loadedSave);
    g.bananas = loadedSave.bananas;
    g.monkeys = loadedSave.monkeys;
    g.lettersPerSecond = g.monkeys;
    g.currentTargetIndex = loadedSave.targetIndex;
    g.keyboardKeys = loadedSave.keyboardKeys;
    g.maxKeyboardKeys = loadedSave.maxKeyboardKeys;
    g.targetOwned = loadedSave.targetOwned;
}

export function exportSaveToString(): string {
    return JSON.stringify(getSaveFile());
}

export function eraseSave() {
    console.log("Save Erased!");
    localStorage.removeItem(saveKey);
}
