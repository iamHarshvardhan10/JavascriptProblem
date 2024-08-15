// Find the last character in a string that does not repeat.

function lastChar(str) {
    let charMap = {}

    for (let i = 0; i < str.length; i++) {
        let char = str[i]
        if (charMap[char]) {
            charMap[char]++
        }
        else {
            charMap[char] = 1;
        }
    }

    for (let i = str.length - 1; i >= 0; i--) {
        let char = str[i]
        if (charMap[char] === 1) {
            return str[i]
        }
    }
    return null;
}

console.log(lastChar('hello'))