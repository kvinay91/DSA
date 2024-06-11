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
