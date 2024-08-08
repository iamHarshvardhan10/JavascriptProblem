// Capitalize the first letter of each word in a string

function capitalizeFirstWord(str) {
    let result = ''
    char = true
    for (let i = 0; i < str.length; i++) {
        if (char && result !== ' ') {
            result = result + str[i].toUpperCase()
            char = false
        } else {
            result += str[i]
        }

        if (str[i] === ' ') {
            char = true
        }
    }
    return result;
}

console.log(capitalizeFirstWord('  hello  word to new begining'))


// using built method

function capitalizeUsingMethod(str){
    return str.split(' ').map((char) => char.charAt(0).toUpperCase() + char.slice(1)).join(' ')
}

console.log(capitalizeUsingMethod(' hello word'))