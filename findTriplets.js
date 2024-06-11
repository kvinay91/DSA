function findTriplets(a) {
  let n = a.length;
  let found = false;

  for (let i = 0; i < n; i++) {
    let x = a[i];
    let j = i + 1;
    let k = n - 1;

    while (j < k) {
      result = x + a[j] + a[k];
      if (result === 0) {
        console.log(a[i], a[j], a[k]);
        found = true;
        j++;
        k--;
      } else if (result > 0) {
        k--;
      } else {
        j++;
      }
    }
  }
  if (!found) {
    console.log("Triplets not found");
  }
}

findTriplets([-3, -1, 0, 1, 2]);
