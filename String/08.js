// Find the longest word in a string

// using split into array
function longestWord(str) {
    let array = str.split(' ')
    let result = ' ';

    for (let i = 0; i < array.length; i++) {
        if (array[i].length > result.length) {
            result = array[i]
        }
    }
    return result;
}

console.log(longestWord('hello world  i  am harshvardhanhggkgghghggg universe into hellofthemultiverse'))


// using simple scratch

function longestWordWithoutSplit(str) {
    let currentWord = ' ';
    let longestWord = ' ';
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== ' ') {
            currentWord += str[i]
        } else {
            if (currentWord.length > longestWord.length) {
                longestWord = currentWord;
            }
            currentWord = '';
        }
    }

    if (currentWord.length > longestWord.length) {
        longestWord = currentWord
    }
    return longestWord;
}

console.log(longestWordWithoutSplit('harsh vardhan bhosale heloiaahdf'))