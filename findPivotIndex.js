const findPivotIndex = (arr) => {
  let totalSum = arr.reduce((acc, curr) => acc + curr, 0);
  let leftSum = 0;

  for (let i = 0; i < arr.length; i++) {
    totalSum -= arr[i];
    console.log("Total sum =>", totalSum);
    if (leftSum === totalSum) {
      return i;
    }
    leftSum += arr[i];
    console.log("letSum", leftSum);
  }
  return -1;
};

const arr = [1, 4, 2, 5, 0];
console.log(findPivotIndex(arr));
// output will be ->  2
