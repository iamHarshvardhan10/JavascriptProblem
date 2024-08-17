// Convert a string to camel case.


function convertCamelCase(str) {
    let result = '';
    let isUpper = false;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ') {
            isUpper = true;
        } else {
            if (isUpper) {
                result = result + str[i].toUpperCase()
                isUpper = false;
            } else {
                result = result + str[i].toLowerCase()
            }
        }
    }
    return result;
}

console.log(convertCamelCase('hello world everyone present'))


// using array 

function convertToCamelCase(str) {
    let words = str.split(' ');
    for (let i = 1; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1)
    }
    return words.join('')
}

console.log(convertToCamelCase('hello function using loop'))