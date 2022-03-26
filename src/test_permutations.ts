import { countMatchingLetters } from "./util";

export function generatePermutations(keyboardKeys: string[], targetString: string[]) {
    let result = "";
    let toProcess: string[][] = [];
    for (let i = 0; i < keyboardKeys.length; i++) {
        toProcess.push([keyboardKeys[i]]);
    }
    while (toProcess.length > 0) {
        let word: string[] = toProcess.pop();
        if (word.length === targetString.length) {
            let numMatches = countMatchingLetters(word, targetString);
            result += word.join("") + "," + numMatches + "\n";
            continue;
        }
        for (let i = 0; i < keyboardKeys.length; i++) {
            let copy: string[] = [];
            for (let j = 0; j < word.length; j++) {
                copy.push(word[j]);
            }
            copy.push(keyboardKeys[i]);
            toProcess.push(copy);
        }
    }
    return result;
}

export function download(filename: string, text: string) {
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);
  
    element.style.display = 'none';
    document.body.appendChild(element);
  
    element.click();
  
    document.body.removeChild(element);
}