//  Remove all white spaces from a string.

function removeAllWhite(str) {
    let result = ''
    for (let i = 0; i<str.length; i++) {
        if (str[i] !== " ") {
            result = result + str[i]
        }
    }
    return result
}

console.log(removeAllWhite('hello worlds and everyone'))