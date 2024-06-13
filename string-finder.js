const isItemPresent = (item, str) => {
  const itemArray = item.slice("");
  for (let i = 0; i < itemArray.length; i++) {
    if (!str.includes(itemArray[i])) {
      return false;
    }
  }
  return true;
};

const findString = (arr, str) => {
  let longestStr = null;
  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];
    if (isItemPresent(item, str)) {
      if (longestStr) {
        if (longestStr.length < item.length) {
          longestStr = item;
        }
      } else {
        longestStr = item;
      }
    }
  }
  return longestStr;
};

const str1 = ["able", "apple", "monkey", "plea"];
const str2 = "abpcplea";

console.log(findString(str1, str2)); // output - apple
