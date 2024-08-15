// Check if a string contains any digit.

function checkDigit(str) {
    for (let char of str) {
        if (!isNaN(char) && char !== ' ') {
            return true;
        }
    }
    return false;
}

console.log(checkDigit('hello123'))
console.log(checkDigit('hello'))