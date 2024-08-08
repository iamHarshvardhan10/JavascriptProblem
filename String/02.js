// Determine if a given string is a palindrome.

function reverse(str){
    let newStr = '';
    for(let i=0; i<=str.length-1; i++){
        newStr = str[i] + newStr;
    }
    return newStr
}


function isPalindrome(word){
    let lowerWord = word.toLowerCase()
    let reversedWord = reverse(lowerWord);
    if(lowerWord === reversedWord){
        console.log('The word is a palindrome');
    }else{
        console.log('The word is not a palindrome');
    }
}
isPalindrome('Madam')