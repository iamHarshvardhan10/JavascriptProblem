// Convert an array of characters into a string.


function conArrToStr(arr) {
    return arr.join("")
}

console.log(conArrToStr(['h', 'e', 'l', 'l', 'o']))

// another way

function arrToStr(arr){
    let result = ''
    let space = ' '
    for(let i=0; i<arr.length; i++){
        result = result + arr[i] + space
    }
    return result.trim();
}

console.log(arrToStr(['hello','everyone','good','morning']))