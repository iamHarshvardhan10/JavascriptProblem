// Count the number of char in a string.

// for single word
function countChar(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        count = count + 1
    }
    return count
}


console.log(countChar('Harsh'))

// count the number char in string

function countNumberOfChar(str) {
    let count = 0;
    // let whiteSpaceCount = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {
            // whiteSpaceCount++;
            count++;
        }
    }
    return count;

}

console.log(countNumberOfChar('  Harsh       vardhan'))