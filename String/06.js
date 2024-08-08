// Convert a string into an array of characters.

function convertStrToArr(str) {
    return str.split('')

}

console.log(convertStrToArr('harsh'))

// using for loop
let str = 'harshvardhan'
const arr = []
for(let i=0;i<str.length;i++){
    arr.push(str[i])
}

console.log(arr)