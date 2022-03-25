// Although this measure of distance is more forgiving than
// counting the number of mismatched characters, it's not
// as intuitive to the player. I don't want to have to explain
// the concept of edit distance to the player.

function levenshteinDistance(s1: string, s2: string) {
    if (s1.length > s2.length) {
        let s3 = s2;
        s2 = s1;
        s1 = s3;
    }
    let distances = range(s1.length + 1);
    for (let index2 = 0; index2 < s2.length; index2++) {
        let char2 = s2.charAt(index2);
        let newDistances = [index2+1];
        for (let index1 = 0; index1 < s1.length; index1++) {
            let char1 = s1.charAt(index1);
            if (char1 === char2) {
                newDistances.push(distances[index1]);
            } else {
                let min = Math.min(
                    distances[index1],
                    distances[index1+1],
                    newDistances[newDistances.length - 1]
                );
                newDistances.push(1 + min);
            }
        }
        distances = newDistances;
    }
    return distances[distances.length - 1];
}

function range(max: number) {
    let range: number[] = [];
    for (let i = 0; i < max; i++) {
        range.push(i);
    }
    return range;
}