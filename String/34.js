// Check if a string contains balanced parentheses.

function isBalanced(str) {
  let stack = [];
  let map = {
    '(': ')',
    '{': '}',
    '[': ']'
  };

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    // If the character is an opening bracket, push it to the stack
    if (char === '(' || char === '{' || char === '[') {
      stack.push(char);
    }
    // If the character is a closing bracket, check if it matches the top of the stack
    else if (char === ')' || char === '}' || char === ']') {
      let last = stack.pop();
      
      // If the stack is empty or the brackets don't match, return false
      if (map[last] !== char) {
        return false;
      }
    }
  }

  // If the stack is empty, all brackets are balanced
  return stack.length === 0;
}

// Example usage
console.log(isBalanced("(a + b) * {c + d}")); // true
console.log(isBalanced("(a + b * (c - d)"));  // false

