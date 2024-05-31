// 1 - Palindrome number
// take integer number if found polindrom then retuen true;

const polindromeNumber = function (nums) {
  return nums < 0
    ? false
    : nums == nums.toString().split("").reverse().join("");
};

console.log(polindromeNumber(121));

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

// map and reduce method in java script

const arr = [4, 6, 7, 23, 5];
const result = arr.map((elm) => elm * 2);
console.log(result);
const arraySum = arr.reduce((acc, num) => acc + num, 0);
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
