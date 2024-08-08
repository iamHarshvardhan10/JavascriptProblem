// Reverse a String

// Reversing using function

function strToArrRev(string) {
    return string.split(' ').reverse().join(' ')
}

console.log(strToArrRev('Harshvardhan Pratap Bhosale'))


// reverse string using scratch 

function rerverseString(string) {
    let reversedString = '';
    for (let i = string.length - 1; i >= 0; i--) {
        reversedString = reversedString + string[i]
    }
    return reversedString
}

console.log(rerverseString('Harshvardhan Bhosale'))


