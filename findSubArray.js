function findSubArray(arr, sum) {
  let n = arr.length;
  let found = false;
  let total = 0;
  let subArray = [];

  for (let i = 0; i < n; i++) {
    let item = arr[i];
    subArray.push(item);
    total += item;

    if (total === sum) {
      found = true;
      break;
    } else if (total > sum) {
      while (total > sum) {
        let removeItem = subArray.shift();
        total -= removeItem;
      }
      if (total === sum) {
        found = true;
        break;
      }
    }
  }
  if (found) {
    return subArray;
  } else {
    return "Not found !";
  }
}

console.log(findSubArray([1, 4, 20, 3, 10, 5], 33));
// output - [ 20, 3, 10 ]
