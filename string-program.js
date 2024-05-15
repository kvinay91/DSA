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
