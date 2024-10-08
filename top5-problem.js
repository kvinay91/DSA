// 1 - Palindrome number
// take integer number if found polindrom then retuen true;

const polindromeNumber = function (nums) {
  return nums < 0
    ? false
    : nums == nums.toString().split("").reverse().join("");
};

console.log(polindromeNumber(121));

// remove duplicate item in the array
let arr = [1, 3, 5, 3, 2, 6, 1, 5];
let uniquArr = [];
for (let i = 0; i < arr.length; i++) {
  let isDuplicate = false;
  for (let j = 0; j < uniquArr.length; j++) {
    if (arr[i] === uniquArr[j]) {
      isDuplicate = true;
      break;
    }
  }
  if (!isDuplicate) {
    uniquArr.push(arr[i]);
  }
}
console.log(uniquArr);

// call, bind and apply method in javascript

// approch -1

// let userDetails =  {
//     name:'Vinay Kumar',
//     age:32,
//     designation: 'FE',
//     printDetails: function(){
//         console.log(this.name);
//     }
// }

let userDetails = {
  name: "Vinay Kumar",
  age: 32,
  designation: "FE",
};

const printDetails = function (companyName) {
  console.log(
    `User name is ${this.name} and age is ${this.age} of designation ${this.designation} at ${companyName}`
  );
};

const userDetails1 = {
  name: "User1",
  age: 22,
  designation: "SDE",
};

// method 1
// userDetails.printDetails();
// userDetails.printDetails.call(userDetails1);

// method 2
printDetails.call(userDetails1, "Cleartax");

printDetails.apply(userDetails, ["Oracle"]);

const printInfo = printDetails.bind(userDetails, "Adobe");

printInfo();

// Learn this Keyword

const userInformation = {
  userName: "vinay",
  age: 32,
  Dep: "Supply chain",
  printDetails: function () {
    console.log(this);
    console.log(`${this.userName}`);
  },
};

const testThisConcept = function () {
  console.log(this);
};
testThisConcept();

const testThis = () => console.log(this);
testThis();
userInformation.printDetails();

// function curring

function sum(num1) {
  return function (num2) {
    if (num2) {
      return sum(num1 + num2);
    }
    return num1;
  };
}

console.log("function curring =>", sum(2)(3)(5)());

const sumNum = (...args1) => {
  return (...args2) => {
    if (args2.length === 0) {
      return args1.reduce((acc, agr) => acc + agr, 0);
    }
    return sumNum(...args1, ...args2);
  };
};

console.log(sumNum(2, 4, 5, 6, 7)(3, 5, 6, 7)(2)(3, 5)());

// map and reduce method in java script

const arr2 = [4, 6, 7, 23, 5];
const result = arr2.map((elm) => elm * 2);
console.log(result);
const arraySum = arr2.reduce((acc, num) => acc + num, 0);
console.log(arraySum);

// destructuring

const obj = { fname: "vinay", lname: "kumar" };
const { fname, lname } = obj;
console.log(`${fname} ${lname}`);

// call bind and apply method

/*
const userInfo = {
  empName: "vinay",
  empId: 1001,
  empDept: "Dev",
  printEmpDetails: function () {
    console.log(`${this.empName} ${this.empId} and ${this.empDept}`);
  },
};
userInfo.printEmpDetails();
*/

const userInfo = {
  empName: "vinay",
  empId: 1001,
  empDept: "Dev",
};
function printEmpDetails(state) {
  console.log(
    `${this.empName} ${this.empId} and ${this.empDept} state is ${state}`
  );
}

printEmpDetails.call(userInfo, "BLR");
printEmpDetails.apply(userInfo, ["BLR"]);
const invokeAfter = printEmpDetails.bind(userInfo, "GCT");
invokeAfter();

// write a polyfill of the bind method
const studentMark = [
  { name: "std1", mark: 68 },
  { name: "std1", mark: 78 },
  { name: "std3", mark: 28 },
  { name: "std4", mark: 88 },
  { name: "std5", mark: 56 },
];
function getStudentMaxNumber(studentMark) {
  let max = studentMark[0];
  for (let i = 0; i < studentMark.length; i++) {
    if (studentMark[i].mark > max.mark) {
      max = studentMark[i];
    }
  }
  console.log("student max number", max);
  return max;
}

getStudentMaxNumber(studentMark);

// find two max number

function findMaxTwoNumber(studentMark) {
  studentMark.sort((a, b) => b.mark - a.mark);
  const topTwo = studentMark.slice(0, 2);
  console.log("max two", topTwo);
}

findMaxTwoNumber(studentMark);

// Create a function that finds even numbers in an array, doubles these even numbers, and determines the length of the array without using the built-in length function.

const orginalArr = [10, 48, 39, 100, 99, 8];
let evenArray = [];
let lengthCount = 0;

for (let i = 0; i < orginalArr.length; i++) {
  if (orginalArr[i] % 2 === 0) {
    lengthCount++;
    evenArray.push(orginalArr[i] * 2);
  }
}
console.log(lengthCount);
console.log(evenArray);

// closure program

function outer() {
  let count = 10;
  function inner() {
    console.log(count);
  }
  return inner;
}

const closureExample = outer();
closureExample();

// promise syntex

const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const data = { fname: "viany", lname: "kumar" };
      resolve(data);
      reject(new Error("Getting error"));
    }, 2000);
  });
};
fetchData()
  .then((result) => console.log("result", result))
  .catch((error) => console.error("error", error.message));

const arr1 = ["test"];
const obj1 = {};
obj1.test = "Frontend master";
console.log(arr1);
console.log(obj1[arr1]);
obj1[arr1] = "React";
console.log(obj1.test);

//write a program of the two sum problem

const twoSum = (arr, target) => {
  const map = {};
  for (let i = 0; i < arr.length; i++) {
    const diff = target - arr[i];
    if (map[arr[i]] !== undefined) {
      return [map[arr[i]], i];
    }
    map[diff] = i;
  }
  return [];
};
// console.log(twoSum([2, 7, 11, 15], 9));
// optimise the two sum problem
const twoSumOptimise = (arr, target) => {
  const map = {};
  for (let i = 0; i < arr.length; i++) {
    const diff = target - arr[i];
    if (map[arr[i]] !== undefined) {
      return [map[arr[i]], i];
    }
    map[diff] = i;
  }
  return [];
};
console.log(twoSumOptimise([2, 7, 11, 15], 9));
// give the space and time complexity of the two sum problem
// space complexity is O(n) and time complexity is O(n)

// write the program of find the middle element of the linked list

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
