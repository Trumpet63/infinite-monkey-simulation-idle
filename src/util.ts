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
