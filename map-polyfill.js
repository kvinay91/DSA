const arr = [2, 5, 6, 7, 8];
Array.prototype.myMap = function (cb) {
  let result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(cb(this[i]));
  }
  return result;
};

const result = arr.myMap((elm) => elm * 2);

console.log(result);

// filter method of polyfill

// const res = arr.filter(elm => elm > 2);
// console.log(res);

Array.prototype.myFilter = function (cb) {
  let res = [];
  for (let i = 0; i < this.length; i++) {
    if (cb(this[i])) {
      res.push(this[i]);
    }
  }
  return res;
};

const res = arr.myFilter((elm) => elm > 2);
console.log(res);

// reduce method polyfills

// let response = arr.reduce((acc, curr) => acc + curr, 0);

// console.log(response);

Array.prototype.myReduce = function (cb, initialValue) {
  let acc = initialValue;
  for (let i = 0; i < this.length; i++) {
    acc = acc ? cb(acc, this[i]) : this[i];
  }
  return acc;
};

let response = arr.myReduce((acc, curr) => acc + curr, 0);
console.log(response);
