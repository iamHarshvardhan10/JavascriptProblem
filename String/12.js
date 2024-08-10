// Count how many times each character appears in a string.

function toCountChar(str) {
    let obj = {}
    for (let i = 0; i < str.length; i++) {
        if (obj[str[i]]) {
            obj[str[i]]++;
        } else {
            obj[str[i]] = 1;
        }
    }
    return obj;

}

console.log(toCountChar('hello worlds is new world'))