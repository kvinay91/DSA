/*
1. sort array (Bubble sort)
2. frequency of the string charector
3. two sum problem with nagitive value
4. string problems - All Programs 
5. Polyfills - forEach, map, filter, reduce.
6. clouser programs without using globle variable

*/

let a = {};
let b = { key: "b" };
let c = { key: "c" };
a[b] = 123;
a[c] = 456;
console.log(a[b]); // 456  - The second assignment overwrites the first one.

const flattenObject = (obj, parentKey = "", result = {}) => {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      let newKey = parentKey ? `${parentKey}.${key}` : key;
      if (typeof obj[key] === "object" && obj[key] !== null) {
        flattenObject(obj[key], newKey, result);
      } else {
        result[newKey] = obj[key];
      }
    }
  }
  return result;
};

const myObj = {
  Key1: "1",
  Key2: {
    a: "2",
    b: "3",
    c: {
      d: "3",
      e: {
        "": "1",
      },
    },
  },
};

const flattened = flattenObject(myObj);
console.log(flattened);
/*
output - 
  {
    Key1: "1",
    Key2.a: "2",
    Key2.b: "3",
    Key2.c.d: "3",
    Key2.c.e.: "1"
  }
  */

// bubble sort
const arr = [4, 11, 7, 8, 30, 1, 9];
const sortArray = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
};
console.log(sortArray(arr)); // [ 1,  4,  7, 8, 9, 11, 30 ];

// remove duplicate

const dupicateArr = [2, 2, 1, 3, 5, 77, 8, 2, 1, 1];
const removeDuplicateArr = (arr) => {
  let uniqueArr = [];
  for (let i = 0; i < arr.length; i++) {
    let foundDuplicate = false;
    for (let j = 0; j < uniqueArr.length; j++) {
      if (arr[i] === uniqueArr[j]) {
        foundDuplicate = true;
        break;
      }
    }
    if (!foundDuplicate) {
      uniqueArr.push(arr[i]);
    }
  }
  return uniqueArr;
};

console.log(removeDuplicateArr(dupicateArr)); // [ 2, 1, 3, 5, 77, 8 ]

const getDuplicateArr = (arr) => {
  let dupArr = [];
  let uniqueArr = [];
  for (let i = 0; i < arr.length; i++) {
    let foundDuplicate = false;
    for (let j = 0; j < uniqueArr.length; j++) {
      if (arr[i] === uniqueArr[j]) {
        foundDuplicate = true;
        if (!dupArr.includes(uniqueArr[j])) dupArr.push(uniqueArr[j]);
      }
    }
    if (!foundDuplicate) {
      uniqueArr.push(arr[i]);
    }
  }
  return dupArr;
};
const duplicArr = [2, 55, 2, 2, 1, 4, 1, 1, 4];
console.log(getDuplicateArr(duplicArr)); // [ 2, 1, 4 ]

// get frequency of the arr
const getArrFrequency = (arr) => {
  let obj = {};
  for (let i of arr) {
    obj[i] = (obj[i] | 0) + 1;
  }
  return obj;
};

console.log(getArrFrequency(duplicArr)); // { '1': 3, '2': 3, '4': 2, '55': 1 }

// program of closure

function outer(num1) {
  function inner(num2) {
    return num1 + num2;
  }
  return inner;
}
const callMehod = outer(10);
console.log(callMehod(20));
console.log(callMehod(10));

// create closure program without using globle variable

const printDetails = (() => {
  let num = [1, 2, 3, 4, 5];
  let oddNumber = num.filter((elm) => elm % 2 !== 0);
  let index = 0;
  return () => (index < oddNumber.length ? oddNumber[index++] : undefined);
})();

console.log(printDetails());
console.log(printDetails());
console.log(printDetails());
console.log(printDetails());

// Flatten Object with another aproch.
const flattenObj = (obj) => {
  let result = {};
  for (let i in obj) {
    if (typeof obj[i] === "object" && !Array.isArray(obj[i])) {
      const temp = flattenObj(obj[i]);
      for (let j in temp) {
        result[i + "." + j] = temp[j];
      }
    } else {
      result[i] = obj[i];
    }
  }
  return result;
};

const myFObj = {
  Key1: "1",
  Key2: {
    a: "2",
    b: "3",
    c: {
      d: "3",
      e: {
        "": "1",
      },
    },
  },
};

const myFlattened = flattenObj(myFObj);
console.log(myFlattened);
/*
{
  Key1: "1",
  Key2.a: "2",
  Key2.b: "3",
  Key2.c.d: "3",
  Key2.c.e.: "1"
}
*/

function myPromiseAll(iterable) {
  return new Promise(function (resolve, reject) {
    if (!Array.isArray(iterable)) {
      return reject(new TypeError("Argument is not iterable"));
    }

    let results = [];

    let remaining = iterable.length;

    if (remaining === 0) {
      resolve(results);
      return;
    }

    function resolver(index) {
      return function (value) {
        results[index] = value;
        remaining -= 1;
        if (remaining === 0) {
          resolve(results);
        }
      };
    }

    function rejector(reson) {
      reject(reson);
    }

    for (let i = 0; i < iterable.length; i++) {
      let promise = iterable[i];
      if (promise && typeof promise.then === "function") {
        promise.then(resolver(i), rejector);
      } else {
        resolver(i)(promise);
      }
    }
  });
}

let promise1 = Promise.resolve(1);
let promise2 = Promise.resolve(2);
let promise3 = new Promise((resolve, reject) => setTimeout(resolve, 100, 3));

myPromiseAll([promise1, promise2, promise3])
  .then((value) => {
    console.log(value);
  })
  .catch((error) => console.log(error));

function oneparam(a) {
  console.log(oneparam.length); // 1 it will give the param count
}
oneparam();

// insert second index of the array newEmployee to employee
// based on the employee we need to sort the age

const employee = [
  { name: "Rohan", age: 35, salary: 500 },
  { name: "John", age: 30, salary: 300 },
  { name: "sahil", age: 29, salary: 200 },
];
const newEmployee = { name: "John", age: 30 };

employee.splice(1, 0, newEmployee);

employee.sort((a, b) => a.age - b.age);

console.log(employee);

let a = [1, 2, 3, 4];

function printWithDelay(value, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log(value);
      resolve();
    }, delay);
  });
}

async function printArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    await printWithDelay(arr[i], i * 1000);
  }
}

printArray(a);
