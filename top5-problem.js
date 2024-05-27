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
