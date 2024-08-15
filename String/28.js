// Replace all whitespace characters with hyphens.

function replaceAllCharHyphens(str) {
    let result = ''
    let space = '-'
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ') {
            result = result + space
        } else {
            result = result + str[i]
        }
    }
    return result
}

console.log(replaceAllCharHyphens('hello everyone'))