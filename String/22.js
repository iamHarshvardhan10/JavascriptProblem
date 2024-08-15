// Count the frequency of each word in a string.

function countFre(str) {
    let objChar = {}
    for (let i = 0; i < str.length; i++) {
        if (objChar[str[i]]) {
            objChar[str[i]]++;
        }
        else {
            objChar[str[i]] = 1;
        }
    }
    return objChar;
}

console.log(countFre('hello world'))