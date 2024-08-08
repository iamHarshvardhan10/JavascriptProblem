// Count the number of vowels in a string.

function countVowels(str) {
    let count = 0;
    for (let i = 0; i <= str.length - 1; i++) {
        if (str[i] === 'a' || str[i] === 'i' || str[i] === 'e' || str[i] === 'o' || str[i] === 'u') {
            count = count + 1
        }
    }
    return count
}

console.log(countVowels('aioue'))


// using set

function countVowelSet(str) {
    let count = 0;
    let vowels = new Set(['a', 'i', 'e', 'o', 'u'])
    for (let char of str.toLowerCase()) {
        if (vowels.has(char)) {
            count++;
        }
    }
    return count;
}

console.log(countVowelSet('harshvardhan pratap bhosale'))