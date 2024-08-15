// Find the first character in a string that does not repeat.

function firstChar(str) {
    let objChar = {}
    for (let i = 0; i < str.length; i++) {
        let char = str[i]
        if (objChar[char]) {
            objChar[char]++
        } else {
            objChar[char] = 1;
        }
    }

    for (let i = 0; i < str.length; i++) {
        if (objChar[str[i]] == 1) {
            return str[i];
        }
    }

    return null;
}

console.log(firstChar('helhlo'))