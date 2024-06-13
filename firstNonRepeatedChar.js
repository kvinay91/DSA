// get the first non repeated first charactor

const getNonRepeatedCharFirst = function (str) {
  let charObj = {};
  for (let i of str) {
    if (charObj[i]) {
      charObj[i] += 1;
    } else {
      charObj[i] = 1;
    }
  }
  for (let j of str) {
    if (charObj[j] === 1) {
      return j;
    }
  }
  return null;
};

const str = "bbaccdded";
console.log(getNonRepeatedCharFirst(str));
