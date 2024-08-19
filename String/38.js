// Find the shortest substring that contains all characters of a given set.

function shortestSubstringContainingSet(s, t) {
    const charCount = {};
    
    // Build the target character count from the given set
    for (let char of t) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    
    let required = Object.keys(charCount).length; // Number of unique characters in the set
    let formed = 0; // Number of unique characters that match target count in the window
    
    let left = 0, right = 0;
    let windowCounts = {};
    
    let minLength = Infinity;
    let result = "";

    while (right < s.length) {
        // Add current character to the window
        const char = s[right];
        windowCounts[char] = (windowCounts[char] || 0) + 1;
        
        // Check if the current character satisfies the target requirement
        if (charCount[char] && windowCounts[char] === charCount[char]) {
            formed++;
        }
        
        // While the window is valid, try shrinking it
        while (left <= right && formed === required) {
            // Update the result if this window is smaller than the previous shortest
            if (right - left + 1 < minLength) {
                minLength = right - left + 1;
                result = s.substring(left, right + 1);
            }
            
            // Shrink the window from the left
            const leftChar = s[left];
            windowCounts[leftChar]--;
            if (charCount[leftChar] && windowCounts[leftChar] < charCount[leftChar]) {
                formed--;
            }
            left++;
        }
        
        // Expand the window from the right
        right++;
    }
    
    return result;
}


console.log(shortestSubstringContainingSet('hello everyone welcome to js', 'loj'))