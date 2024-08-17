// Convert a string to snake case.


// using array method

function SnakeCase(str) {
    let word = str.split(' ').join('_')
    return word;

}

console.log(SnakeCase('hello new'))


// using loop and string concatination

function SnakeCaseUsingConcat(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ') {
            result = result + '_'
        } else {
            result = result + str[i]
        }
    }
    return result;
}

console.log(SnakeCaseUsingConcat('snake case using'))