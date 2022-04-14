import { g } from "./global";

export function countMatchingLetters(s1: string[], s2: string[]) {
    let matching = 0;
    let minLength = Math.min(s1.length, s2.length);
    for (let i = 0; i < minLength; i++) {
        if (s1[i] === s2[i]) {
            matching++;
        }
    }
    return matching;
}

// Buffer the random characters we get from crypto to improve
// the speed. Also, I tested it, and it's faster than using
// Math.random, and hopefully has better randomness
let bufferSize = 10000;
let numberBuffer: Uint16Array = getRandomNumbers(bufferSize);
let numberBufferIndex = -1;
export function getRandomCharacter() {
    numberBufferIndex += 1;
    if (numberBufferIndex >= bufferSize) {
        numberBufferIndex = 0;
        numberBuffer = getRandomNumbers(bufferSize);
    }
    let randomNumber = numberBuffer[numberBufferIndex];
    return g.charactersToChooseFrom[randomNumber];
}

export function getRandomNumbers(n: number) {
    let randomNumbers = new Uint16Array(n);
    randomNumbers = crypto.getRandomValues(randomNumbers);
    return randomNumbers;
}

export function rgbString(red: number, green: number, blue: number) {
    return "rgb(" + red + "," + green + "," + blue + ")";
}

// source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
export function getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

export function mapLinear(fromValue: number, fromStart: number, fromEnd: number, toStart: number, toEnd: number) {
    return (fromValue - fromEnd) * (toStart - toEnd) / (fromStart - fromEnd) + toEnd;
}
