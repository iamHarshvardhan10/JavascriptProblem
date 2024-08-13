//Create a function that returns the largest number in an array.

function largestNumber(array){
    let maxElm = array[0]
    for(let i=0;i<array.length;i++){
        if(array[i] > maxElm){
            maxElm = array[i]
        }
    }
    return maxElm
}

console.log(largestNumber([10,23,1,0,34,50,100,9]))