// Check if two strings are anagrams of each other.

function checkAnagrams(str1, str2) {
    // convert into lowercase
    let objChar = {}
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    if (str1.length !== str2.length) {
        return false
    }

    for (let ch of str1) {
        objChar[ch] = (objChar[ch] || 0) + 1;
    }
    // console.log(objChar)
    for (let ch of str2) {
        if (!objChar[ch]) {
            return false
        }
        objChar[ch] -= 1;
    }
    return true;
}

console.log(checkAnagrams('hello', 'hello'))