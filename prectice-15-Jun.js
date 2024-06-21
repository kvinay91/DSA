// create polyfill of forEach, map, filter, reduce and bind method.

const arr = [2, 5, 6, 3, 5, 7];

arr.forEach((elm) => console.log(elm));

Array.prototype.myForEach = function (cb) {
  for (let i = 0; i < this.length; i++) {
    cb(this[i], i, this);
  }
};

arr.myForEach((elm, i) => console.log(elm, i));

const result = arr.map((elm) => elm * 3);

console.log(result);

Array.prototype.myMap = function (cb) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(cb(this[i], i));
  }
  return result;
};

const mapResult = arr.myMap((elm) => elm * 4);
console.log(mapResult);

const filterRes = arr.filter((elm) => elm > 3);
console.log(filterRes);

Array.prototype.myFilter = function (cb) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i])) {
      result.push(this[i]);
    }
  }
  return result;
};

const resFilter = arr.myFilter((elm) => elm > 2);
console.log("Polyfill", resFilter);

const reduceRes = arr.reduce((acc, cur) => acc + cur, 0);
console.log(reduceRes);

Array.prototype.myReduce = function (cb, initialValue) {
  let res = initialValue;
  for (let i = 0; i < this.length; i++) {
    res = res ? cb(res, this[i]) : this[i];
  }
  return res;
};
const resReduce = arr.myReduce((acc, cur) => acc + cur, 0);
console.log(resReduce);

const userDetails = {
  fName: "Vinay",
  lName: "Kumar",
};
const printDetails = function (city, state) {
  console.log(`${this.fName} ${this.lName} ${city} ${state}`);
};

const print = printDetails.bind(userDetails);
print();

Function.prototype.MyBind = function (...args) {
  let obj = this;
  let param = args.slice(1);
  return function (...args2) {
    obj.apply(args[0], [...param, ...args2]);
  };
};

const printPoly = printDetails.MyBind(userDetails, "CGT");
printPoly("UP");

// Apple Transform string

const transformString = function (str) {
  return str
    .split("")
    .map((elm, index) => {
      let repeat = elm.repeat(index + 1);
      return `${repeat.charAt(0).toUpperCase()}${repeat
        .slice(1)
        .toLowerCase()}`;
    })
    .join("-");
};

console.log(transformString("Apple"));
