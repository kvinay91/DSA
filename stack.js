function Stack() {
  let data = [];
  let length = 0;

  return {
    push: (item) => {
      length++;
      return data.push(item);
    },
    pop: () => {
      if (length <= 0) {
        return null;
      } else {
        length--;
        return data.pop();
      }
    },
    peek: () => {
      if (length <= 0) {
        return null;
      } else {
        return data[length - 1];
      }
    },
    isEmpty: () => {
      return !length;
    },
  };
}

function reverseString(str) {
  let result = "";
  let stack = new Stack();

  let strArr = str.split("");
  strArr.forEach((element) => {
    stack.push(element);
  });

  while (!stack.isEmpty()) {
    result += stack.pop();
  }

  return result;
}

let str = "ABCDEFG";
console.log(reverseString(str)); // output - GFEDCBA
