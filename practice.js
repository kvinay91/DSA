// interview program
// 1. get sum of the fuction curring
const sum = (num1) => {
  return (num2) => {
    if (num2) {
      return sum(num1 + num2);
    }
    return num1;
  };
};

console.log(sum(3)(3)(4)());

// second use case of the function curring

const sumNum = (...num1) => {
  return (...num2) => {
    if (num2.length === 0) {
      return num1.reduce((acc, arg) => acc + arg, 0);
    }
    return sumNum(...num1, ...num2);
  };
};

console.log(sumNum(2, 4, 5)(3, 7, 8, 9)(3, 6)());

// return string

const revStr = (str) => {
  let rev = "";
  for (let i = str.length - 1; i >= 0; i--) {
    rev += str[i];
  }
  console.log(rev);
};

revStr("Vinay");

// get count of the string word

const getCountWord = (str) => {
  const wordCount = {};
  for (let i of str) {
    if (wordCount[i]) {
      wordCount[i] += 1;
    } else {
      wordCount[i] = 1;
    }
  }
  return wordCount;
};

const stringWord = "Welcome to the india";
console.log(getCountWord(stringWord));

// remove duplicate number in the array

const removeDuplicate = (arr) => {
  let uniqueArr = [];
  for (let i = 0; i < arr.length; i++) {
    let foundUnique = false;
    for (let j = 0; j < uniqueArr.length; j++) {
      if (arr[i] === uniqueArr[j]) {
        foundUnique = true;
        break;
      }
    }
    if (!foundUnique) {
      uniqueArr.push(arr[i]);
    }
  }
  return uniqueArr;
};

const duplicate = [2, 4, 6, 2, 5, 6, 7, 8];
console.log(removeDuplicate(duplicate));

// call bind and apply method

userInfo = {
  fname: "vinay",
  lname: "kumar",
};

function printDetails(city, country) {
  console.log(`${this.fname} ${this.lname} ${city} ${country}`);
}

printDetails.call(userInfo);
const print = printDetails.bind(userInfo, "BLR");
print();
printDetails.apply(userInfo, ["CGT"]);

// create polyfill of the bind

Function.prototype.Mybind = function (...args) {
  const obj = this;
  const param = args.slice(1);
  return function (...args2) {
    return obj.apply(args[0], [...param, ...args2]);
  };
};

const custmPrint = printDetails.Mybind(userInfo, "MAU");
custmPrint("India");

// print sting this format - Apple => A-Pp-Ppp-Llll-Eeeee

const transformString = (str) => {
  return str
    .split("")
    .map((char, ind) => {
      let repeatedWord = char.repeat(ind + 1);
      return `${repeatedWord.charAt(0).toUpperCase()}${repeatedWord
        .slice(1)
        .toLowerCase()}`;
    })
    .join("-");
};
console.log(transformString("vinay"));

// polyfill of the forEach loop

Function.prototype.myForEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

// find duplicate elment then return true other wise false
// Arr = [1,2,4,5,1]
