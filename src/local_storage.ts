let saveKey: string = "infine-monkey-idle-game";

function save() {
    localStorage.setItem(saveKey, "test value");
}

function load() {
    let saveData = localStorage.getItem(saveKey);
    if (saveData === undefined) {
        console.log("Could not load save");
    } else {
        console.log("Save found", saveData);
    }
}

// function loadFromString(importString: string) {

// }

// function export(): string {

// }

function deleteSave() {
    localStorage.removeItem(saveKey);
}
