// 1. Two sum problem

var twoSum = function (nums, target) {
  let map = new Map();
  for (let i = 0; i < nums.length; i++) {
    let num1 = nums[i];
    let num2 = target - num1;
    if (map.has(num2)) {
      return [map.get(num2), i];
    }
    map.set(num1, i);
  }
};

console.log(twoSum([2, 4, 5, 6, 7], 11));

// 2. Constaint duplicate found then retrun true ;

const constentDuplicate = function (nums) {
  const set = new Set(nums);
  return set.size != nums.length;

  // approch - 2
  /*
  const map = new Map();
  for (const n of nums) {
    if (map.has(n)) return true;
    map.set(n, true);
  }
  return false;
  */
};
console.log(constentDuplicate([1, 4, 5, 6, 1]));

//  Valid Anagram

var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  const map = new Map();
  for (let c of s) {
    if (map.has(c)) map.set(c, map.get(c) + 1);
    else map.set(c, 1);
  }
  for (let c of t) {
    if (!map.has(c)) return false;
    map.set(c, map.get(c) - 1);
    if (map.get(c) === 0) map.delete(c);
  }
  if (map.size > 0) return false;
  return true;
};

console.log(isAnagram("anagram", "gram"));

// Product of Array Expect self

var productExceptSelf = function (nums) {
  const n = nums.length;
  const output = new Array(n).fill(1);

  let leftProduct = 1;
  for (let i = 0; i < n; i++) {
    output[i] *= leftProduct;
    leftProduct *= nums[i];
  }

  let rightProduct = 1;
  for (let i = n - 1; i >= 0; i--) {
    output[i] *= rightProduct;
    rightProduct *= nums[i];
  }

  return output;
};

console.log(productExceptSelf([1, 2, 3, 4]));

// isPolindrom number

const isPolindrom = function (num) {
  return num < 0 ? false : num === +num.toString().split("").reverse().join("");
};
console.log(isPolindrom(121)); // true

// update String to Apple -> A-Pp-Ppp-Leee-Eeeee

const transformString = (str) => {
  return str
    .split("")
    .map((elm, ind) => {
      const repetedChar = elm.repeat(ind + 1);
      return `${repetedChar.charAt(0).toUpperCase()}${repetedChar
        .slice(1)
        .toLowerCase()}`;
    })
    .join("-");
};
console.log(transformString("Apple"));

// call, bind and apply method

let myname = {
  fname: "Vinay",
  lname: "Kumar",
};
const printFullName = function (homeTown, state, country) {
  console.log(`${this.fname} ${this.lname} ${homeTown} ${state} ${country}`);
};

printFullName.call(myname, "Ghazipur", "UP");

printFullName.apply(myname, ["Ghazipur", "UP"]);

const printName = printFullName.bind(myname, "Ghazipur", "UP");
printName();

// polyfill for bind method

Function.prototype.myBind = function (...args) {
  let obj = this;
  let param = args.slice(1);
  return function (...args2) {
    obj.apply(args[0], [...param, ...args2]);
  };
};

const printName2 = printFullName.myBind(myname, "Delhi");
printName2("India", "Asia");
