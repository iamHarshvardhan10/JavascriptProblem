//1 Create an array with numbers 1 to 10.

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 10, 11, -1]

console.log(arr)


//2 Access the first and last element of an array.

// first elem
console.log(arr[0])

// last elem
console.log(arr[arr.length - 1])

//3 Add elements to the end of an array.
arr.push(11)
console.log(arr)


//4 Add elements to the beginning of an array.
arr.unshift(0)
console.log(arr)

//5 Remove the last element from an array.
const removeLast = arr.pop()
console.log(removeLast)
console.log('after removing last elem', arr)

//6 Remove the first element from an array.
const removeFirst = arr.shift()
console.log(removeFirst)
console.log('after removing first elem', removeFirst)
console.log(arr)

//7 Find the length of an array.

console.log(arr.length)

//8 Iterate through an array and log each element.

for (let i = 0; i < arr.length; i++) {
    console.log(`each element with index ${i} element at ${arr[i]}`)
}

// 9 Use the forEach() method to log each element of an array.

arr.forEach((each, index) => {
    console.log(`element ${each} and at ${index}`)
})


//10 Check if an element exists in an array using includes().

function checkElem(arr, digit) {
    // return arr.includes(digit)

    if (arr.includes(digit)) {
        return true;
    } else {
        return false;
    }
}
console.log(checkElem(arr, 2))


// 11 Use map() to double each element of an array.

const doubleArr = arr.map((elem) => {
    return elem * 2
})

console.log(doubleArr)

// 12 Use filter() to filter out even numbers from an array.

const filterEven = arr.filter((even) => {
    return even % 2 === 0;
})

console.log(filterEven)

// 13 Use reduce() to sum all elements of an array.

const sumAll = arr.reduce((accumulator, current) => {
    return accumulator + current
}, 0)

console.log(sumAll)

// 14 Use find() to find the first element greater than 10.

const findElmGreaterthan10 = arr.find((ele, index) => {
    return ele > 10
})

console.log(findElmGreaterthan10)

// 15 Use some() to check if there’s any element greater than 5.

const someArr = arr.some((ele) => {
    return ele > 5
})

console.log(someArr)

// 16 Use every() to check if all elements are positive.

const everyArr = arr.every((ele) => {
    return ele > 0
})

console.log(everyArr)

// 17 Use sort() to sort an array of numbers in ascending order.

const sortArr = arr.sort((a, b) => {
    return a - b
})

console.log(sortArr)

// 18 Use reverse() to reverse the order of elements in an array.

const reverseArr = arr.reverse()
console.log(reverseArr)

// 19 Use concat() to merge two arrays.
const arr2 = [20, 30, 40]
const mergeArr = arr2.concat(arr)
console.log(mergeArr)

// 20 Use slice() to extract a portion of an array.

function extractPortion(arr, portion) {
    return arr.slice(0, portion)
}
console.log(extractPortion(arr, 4))