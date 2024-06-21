// get count of the given string characters

const str = "Learn english to become a batter speaker";

let obj = {};

for (let x of str) {
  if (x.trim()) {
    if (obj[x]) {
      obj[x] += 1;
    } else {
      obj[x] = 1;
    }
  }
}
console.log(obj);

// reverse string usign recursion

function revString(str) {
  if (str === "") {
    return "";
  }
  return revString(str.substring(1)) + str.charAt(0);
}
console.log(revString("vinay"));

// fibanacci number -- 0,1,1,2,3,4,5;

function fibRecursion(num) {
  if (num <= 1) {
    return num;
  }
  return fibRecursion(num - 1) + fibRecursion(num - 2);
}
console.log(fibRecursion(3));

// create multiply of the using recursion

function multiply(arr) {
  console.log(arr);
  if (arr <= 0) {
    return 1;
  }
  return arr[arr.length - 1] * multiply(arr.slice(0, arr.length - 1));
}
console.log(multiply([1, 3, 4, 5]));

// create fectorial number usign recursion

function fectRecursion(num) {
  if (num === 0) {
    return 1;
  }
  return num * fectRecursion(num - 1);
}
console.log(fectRecursion(5));

// sort the array using arrow function

const arr = [50, 20, 10, 90, 5];

const sortedArray = arr.sort((a, b) => a - b);

console.log(sortedArray);

// array loop of the orginal property

Array.prototype.extraPrototype = "vinay";
const newArray = [1, 4, 3, 5, 8];
for (let i in newArray) {
  console.log(i); // it's print extra property
  if (newArray.hasOwnProperty(i)) {
    console.log(i); // it's not print the extra property
  }
}

// custom foreach loop - basic implemantion

Array.prototype.customForEachOne = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

// second approch of the custom of the foreach
Array.prototype.customForEachTwo = function (callback, thisCtx) {
  if (typeof callback === "function") {
    throw `not a function`;
  }
  const length = this.length;
  let i = 0;
  while (i < length) {
    if (this.hasOwnProperty) {
      callback.call(thisCtx, this[i], i, this);
    }
    i++;
  }
};

// string program

//let input = 'AAABBCC'
//let output = 'A3B2C2'

function compressString(input) {
  if (input.length === 0) return "";

  let output = "";
  let count = 1;

  for (let i = 1; i < input.length; i++) {
    if (input[i] === input[i - 1]) {
      count++;
    } else {
      output += input[i - 1] + count;
      count = 1;
    }
  }
  return (output += input[input.length - 1] + count);
}

let output = compressString("AAABBCC");
console.log("print =>", output); // Outputs: A3B2C2

// implement word count with another approch

const countChar = (str) => {
  let obj = {};
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (obj[str[i]]) {
      obj[str[i]] += 1;
    } else {
      obj[str[i]] = 1;
    }
  }
  for (let key in obj) {
    result += key + obj[key];
  }
  return result;
};

console.log("countChar =>", countChar("AAABBCC"));
