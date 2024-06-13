function printLongestSubString(str, k) {
  if (new Set(str).size < k) {
    return "Not found";
  }

  let maxSubstring = "";
  let start = 0;
  let charCount = {};

  for (let end = 0; end < str.length; end++) {
    let endChar = str[end];

    // Add the current character to the charCount dictionary
    if (!charCount[endChar]) {
      charCount[endChar] = 0;
    }
    charCount[endChar]++;

    // Check if unique characters exceed k
    while (Object.keys(charCount).length > k) {
      let startChar = str[start];
      charCount[startChar]--;
      if (charCount[startChar] === 0) {
        delete charCount[startChar];
      }
      start++;
    }

    // If we have exactly k unique characters, check if this is the longest substring
    if (Object.keys(charCount).length === k) {
      let currentSubstring = str.substring(start, end + 1);
      if (currentSubstring.length > maxSubstring.length) {
        maxSubstring = currentSubstring;
      }
    }
  }

  return maxSubstring;
}

// Test cases
console.log(printLongestSubString("aabbcc", 1)); // Output: "aa" (or "bb", or "cc")
console.log(printLongestSubString("aabbcc", 2)); // Output: "aabb" (or "bbcc")
console.log(printLongestSubString("aabbcc", 3)); // Output: "aabbcc"
console.log(printLongestSubString("aaabbb", 3)); // Output: "Not found"
