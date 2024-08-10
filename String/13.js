// Find the index of a specific character in a string.

function findSpecificIndex(str,index){
    // Check if the index is within the bounds of the string
    if (index < 0 || index >= str.length) {
        return -1;
    }
    return str[index]
}

console.log(findSpecificIndex('helllo',2))