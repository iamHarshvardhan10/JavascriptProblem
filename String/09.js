// Find the shortest word in a string

// using split array

function shortestWord(str) {
    let words = str.split(' '); // Split the string into an array of words
    let result = words[0]; // Initialize result with the first word
    
    for (let i = 1; i < words.length; i++) { // Start loop from the second word
        if (words[i].length < result.length && words[i].length > 0) {
            result = words[i]; // Update result if the current word is shorter
        }
    }
    
    return result; // Return the shortest word
}

console.log(shortestWord('hello i am b we')); // Output: 'i'
console.log(shortestWord('find the shortest word in this string')); // Output: 'the'
console.log(shortestWord('a quick brown fox jumped over the lazy dog')); // Output: 'a'
