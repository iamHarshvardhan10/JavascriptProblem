// Join an array of strings into a single string.

function joinArrayString(arr){
    return arr.join(' ')
}

console.log(joinArrayString(['hello','everyone']))


// using loop

function joinArrayString_1(arr){
    let result = ''
    let space  = ' '
    for(let i=0;i<arr.length;i++){
        result = result + arr[i] + space
    }
    return result
}
console.log(joinArrayString_1(['new','world']))