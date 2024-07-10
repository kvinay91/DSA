const arr = [2, 4, 5, 6, 7];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
{
  let arr1 = [1, 3, 4];
  let arr2 = [4, 5, 6];
  let merged = [].concat(arr1, arr2);
  console.log(merged);
}

{
  let arr1 = [1, 3, 4, 5];
  let str = "Vinay";

  let merged = [].concat(arr1, str);
  console.log(merged);
}
// object destructuring

const employee = {
  id: 7,
  name: "James",
  dept: {
    id: "D001",
    name: "Spy",
    address: {
      street: "30 Wellington square",
      city: "Chelsea",
    },
  },
};

const {
  dept: { address },
} = employee;
const {
  dept: {
    address: { street },
  },
} = employee;

console.log(address, street);

const employee1 = {
  id: 8,
  fname: "Vinay",
  dept: "SE",
};

const age = employee1.age ? employee1.age : 25;

const { fname, age1 = 25 } = employee1;
console.log(fname, age);

const { name, dept, message = `${name} is ${dept}` } = employee;
console.log(message);

const employee2 = {
  id: 8,
  name: "Vinay",
  dept: "SE",
};

const { dept: department } = employee2; // take alias
console.log(department);

//destructure with function object

const userDetails = {
  fname: "vinay",
  age: 30,
  dept: "Desc",
};

function logUserDetails({ fname, age }) {
  console.log(`${fname} is ${age}`);
}

logUserDetails(userDetails);

//looping distructure

// for(let {name, age} of users){
//     console.log(`${name} is ${age}`);
// }

/**
 * Javascript Synchronous
 *
 */
