// Replace a character at a specific index in a string.

function charAtSpecific(str, index, replace) {
    if (index < 0 || index > str.length) {
        return str
    }
    return str.slice(0, index) + replace + str.slice(index + 1)
}

console.log(charAtSpecific('world', 3, 'ha'))


// using loop

function replaceCharAtPos(str, index, replace) {
    let result = ''
    for (let i = 0; i < str.length; i++) {
        if (i === index) {
            result = result + replace
        }
        else {
            result = result + str[i]
        }
    }
    return result;
}
console.log(replaceCharAtPos('hellowordl',5,'hey'))