// Check if a string contains any special characters.

function checkSpecialChar(str){
    let specialChar = "!@#$%^&*(),.?\":{}|<>"
    for(let char of str){
        if(specialChar.includes(char)){
            return true;
        }
    }
    return false
}

console.log(checkSpecialChar('hello@#$'))