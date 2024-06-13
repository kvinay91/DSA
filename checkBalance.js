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

function checkBalance(input) {
  let closingBrackets = [")", "]", "}"];
  let inputArr = input.split("");

  let stack = new Stack();
  inputArr.forEach((element) => {
    if (closingBrackets.includes(element)) {
      if (stack.isEmpty()) {
        return "Imbalanceed";
      } else {
        let item = stack.pop();
        switch (element) {
          case "(":
            if (item !== ")") return "Imbalanced";
          case "[":
            if (item !== "]") return "Imbalanced";
          case "{":
            if (item !== "}") return "Imbalanced";
        }
      }
    } else {
      stack.push(element);
    }
  });
  if (!stack.isEmpty()) return "imbalanced";
  return "Balanced";
}

let input = "[()]{}{[()()]()}";
console.log(checkBalance(input));
