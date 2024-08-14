// Split a string by a specific delimiter.

function specificDelimiter(str) {
    return str.split(',')
}

console.log(specificDelimiter('hello,hii,hey,welcome'))


// using loop

function splitString(str, delimiter) {
    let result = []
    let temp = ""

    for (let i = 0; i < str.length; i++) {
        if (str[i] === delimiter) {
            result.push(temp);
            temp = ""
        } else {
            temp = temp + str[i]
        }
    }
    result.push(temp)
    return result
}

console.log(splitString('hello,wordl,fheo,fdfh fdhfh',','))