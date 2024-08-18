//  Find the longest substring with all unique characters.

function longestUniqueSubString(str) {
    let start = 0;
    let maxLength = 0;
    let charMap = new Set();

    for (let end = 0; end < str.length; end++) {
        while (charMap.has(str[end])) {
            charMap.delete(str[start])
            start++
        }
        charMap.add(str[end])
        maxLength = Math.max(maxLength, end - start + 1)
    }
    return maxLength
}

console.log(longestUniqueSubString('abcabcbabc'))
console.log(longestUniqueSubString('pwwkew'))