// Find unique characters in a string.

function findUniqueChar(str){
    let objChar = {}
    let conLow = str.toLowerCase()
    for(let i=0; i<conLow.length; i++){
        let char = conLow[i]
        objChar[char] = (objChar[char] || 0)+1;
    }
    let uniqueChar = []
    for(let char in objChar){
        if(objChar[char] === 1){
            uniqueChar.push(char)
        }
    }
    return uniqueChar.join('')
    // console.log(objChar)
}

console.log(findUniqueChar('hello'))