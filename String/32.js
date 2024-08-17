// Convert a string to kebab case.

// using array method

function kebabCase(str) {
    let word = str.split(' ')
    return word.join('-')
}

console.log(kebabCase('hello world'))

// using string and loop concat

function ToKebabCase(str) {
    let result = ''
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ') {
            result = result + '-'
        } else {
            result = result + str[i]
        }
    }
    return result;
}

console.log(ToKebabCase('hello new world'))