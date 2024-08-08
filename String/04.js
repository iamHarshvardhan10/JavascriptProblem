// Remove duplicate characters from a string

function removeDuplicate(str){
    let result='';
    for(let i=0;i<str.length;i++){
        if(result.indexOf(str[i])==-1){
            result+=str[i];

        }
    }
    return result;
}

console.log(removeDuplicate('haarsh'))