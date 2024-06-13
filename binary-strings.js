String.prototype.replaceAt = function (index, replacement) {
  return (
    this.substr(0, index) +
    replacement +
    this.substr(index + replacement.length)
  );
};

function printBinaryStrings(str, i) {
  if (i === str.length) {
    console.log(str);
    return;
  }
  if (str[i] === "?") {
    str = str.replaceAt(i, "0");
    printBinaryStrings(str, i + 1);

    str = str.replaceAt(i, "1");
    printBinaryStrings(str, i + 1);

    str.replaceAt(i, "?");
  } else {
    printBinaryStrings(str, i + 1);
  }
}

//printBinaryStrings("1??0?101", 0);
printBinaryStrings("1??", 0);

/*
Input str = "1??"
 
Output: 
        100
        110
        101
        111

Example 2 :
 
Input str = "1??0?101"
 
Output: 
        10000101
        10001101
        10100101
        10101101
        11000101
        11001101
        11100101
        11101101
        
*/
