// Find all indices of a specific character in a string.

function findAllIndices(str, char) {
    let indices = []
    for (let i = 0; i < str.length; i++) {
        if (str[i] === char) {
            indices.push(i)
        }
    }
    return indices
}

console.log(findAllIndices('hello','l'))