// Remove all special characters from a string.


function removeSpecialChars(str) {
    let result = ''
    let specialChar = '!@#$%^&*(),.?\":{}|<>'
    for (let i = 0; i < str.length; i++) {
        if (!(specialChar.includes(str[i]))) {
            result = result + str[i]
        }
    }
    return result
}

console.log(removeSpecialChars('hel@l#d$'))