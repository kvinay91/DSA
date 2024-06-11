// using Hasing approach

function findTriplets(a) {
  let n = a.length;
  let found = false;

  for (let i = 0; i < n - 1; i++) {
    let hash = {};
    for (let j = i + 1; j < n; j++) {
      let result = -(a[i] + a[j]);
      if (hash[result]) {
        found = true;
        console.log(hash[result], a[i], a[j]);
      } else {
        hash[a[j]] = a[j];
      }
    }
  }
  if (!found) {
    console.log("Triplets not found!");
  }
}

findTriplets([0, -1, 2, -3, 1]);
