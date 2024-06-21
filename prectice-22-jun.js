/* print sum of the using fuction curring 
1. sum(1)(2);
2. sum(1)(2)(3)(4)(5)();
3. sum(1,3,4,6)(4,6,7,8)(2,1)();
*/

function sum1(num1) {
  return function (num2) {
    return num1 + num2;
  };
}
console.log(sum1(1)(3)); // 4

function sum2(num1) {
  return function (num2) {
    if (num2) {
      return sum2(num1 + num2);
    }
    return num1;
  };
}

console.log(sum2(2)(3)(4)(5)()); // 14

function sum3(...num1) {
  return function (...num2) {
    if (num2.length === 0) {
      return num1.reduce((acc, curr) => acc + curr, 0);
    }
    return sum3(...num1, ...num2);
  };
}
console.log(sum3(1, 1, 1, 1, 1)(1, 1, 1)(1, 1)()); // 10

/*
print string pattern 
1 -Print count of the char 
2- print first non repeating char 
3- print count of char in the string form.
4- Revese string
5- Print longest string
*/

function printCountcharObj(str) {
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    if (obj[str[i]]) {
      obj[str[i]] += 1;
    } else {
      obj[str[i]] = 1;
    }
  }
  return obj;
}

const input = "This is the javascript program";
console.log(printCountcharObj(input));

function printFirstNonRepeatChar(str) {
  let obj = {};
  for (let i of str) {
    if (obj[i]) {
      obj[i] += 1;
    } else {
      obj[i] = 1;
    }
  }
  for (let j in obj) {
    if (obj[j] === 1) {
      return j;
    }
  }
}

const input1 = "AABBBCDDEFF";
console.log(printFirstNonRepeatChar(input1)); // C

function printCountOfChar(str) {
  let obj = {};
  let result = "";
  for (let i of str) {
    if (obj[i]) {
      obj[i] += 1;
    } else {
      obj[i] = 1;
    }
  }
  for (let key in obj) {
    result += key + obj[key];
  }
  return result;
}

let input2 = "AAAERRB";
console.log(printCountOfChar(input2));

function reverseString(str) {
  let rev = "";
  for (let i = str.length - 1; i >= 0; i--) {
    rev += str[i];
  }
  return rev;
}
console.log(reverseString("Vinay"));

function transformString(str) {
  return str
    .split("")
    .map((elm, index) => {
      let repeat = elm.repeat(index + 1);
      return `${repeat.charAt(0).toUpperCase()}${repeat
        .slice(1)
        .toLowerCase()}`;
    })
    .join("-");
}

console.log(transformString("APPLE")); // A-Pp-Ppp-Llll-Eeeee

function printLongesString(str) {
  let strArr = str.split(" ");
  let result = strArr.sort((a, b) => b.length - a.length);
  return result[0];
}
let input3 = "This the Javascript program";
console.log(printLongesString(input3)); // Javascript

function printLongestSubString(str) {
  const map = {};
  let offset = 0;
  let maxLength = 0;
  for (let i = 0; i < str.length; i++) {
    const value = str[i];
    if (map[value] !== undefined && map[value] >= offset) {
      offset = map[value] + 1;
    }
    map[value] = i;
    maxLength = Math.max(maxLength, i - offset + 1);
  }
  return maxLength;
}

console.log("printLongestSubString =>", printLongestSubString("abcabcbb")); //3

/*
Create program using clouser
*/

const unique = (() => {
  const num = [1, 2, 3, 4, 5, 6, 7, 8];
  const oddNumber = num.filter((num) => num % 2 !== 0);
  let index = 0;
  return () => {
    if (index < oddNumber.length) {
      return oddNumber[index++];
    } else {
      return undefined;
    }
  };
})();
console.log(unique());
console.log(unique());
console.log(unique());
console.log(unique());
