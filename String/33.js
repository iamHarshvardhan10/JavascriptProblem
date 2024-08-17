// Find the middle character of a string.

function middleString(str) {
    let middle = Math.floor(str.length / 2);
    if (str.length % 2 === 0) {
        return str.slice(middle - 1, middle + 1)
    }else{
        return str.slice(middle, middle + 1)
    }
}
console.log(middleString('hello0'))
