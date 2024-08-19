// Count the number of lowercase letters in a string.

function countLowercase(str){
    let count = 0;
    for(let i=0;i<str.length;i++){
        if(str[i] >= 'a' && str[i] <= 'z'){
            count++
        }
    }
    return count;
}

console.log(countLowercase('harshH'))