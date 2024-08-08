// Replace all occurrences of a substring within a string

// using split and join

function replaceAllOccurrence(str, replaceChar, replacementChar) {
    return str.split(replaceChar).join(replacementChar)
}


console.log(replaceAllOccurrence('Hello EveryOne , Hello Good Morning', 'Hello', 'Good'))



// using replaceAll

function replaceAllOcc(str, replace, replacement) {
    return str.replaceAll(replace, replacement)

}

console.log(replaceAllOcc('hello everyone , hello morning', 'hello', 'hey'))