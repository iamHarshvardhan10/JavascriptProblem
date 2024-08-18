// Reverse each word in a string while keeping the word order.


// using array 

function reverseWordOrder(str) {
    let words = str.split(' ');
    console.log(words)
    let reversedWords = words.map((word) => word.split("").reverse().join(""));
    console.log(reversedWords)
    return reversedWords.join(" ")
}

console.log(reverseWordOrder('hello world hii good morning'))


// using string concat

function revWord(str) {
    let result = '';
    let word = ''
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ') {
            result = result + word + ' '
            word = ''
        } else {
            word = str[i] + word
        }
    }
    result = result + word

    return result;

}
console.log(revWord('hello world'))