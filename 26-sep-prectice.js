// Define an asynchronous function
async function fetchData() {
  try {
    // Simulate a network request using a Promise
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("Data fetched successfully!"), 2000);
    });

    // Use await to wait for the promise to resolve
    let result = await promise;

    // Log the result
    console.log(result);
  } catch (error) {
    // Handle any errors that occur during the async operation
    console.error("Error fetching data:", error);
  }
}

// Call the asynchronous function
fetchData();

// Define another asynchronous function to fetch user data from an API
async function fetchUserData(userId) {
  try {
    // Simulate a network request to fetch user data
    let response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );

    // Check if the response is ok (status code 200-299)
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    // Parse the JSON data from the response
    let userData = await response.json();

    // Log the user data
    console.log(userData);
  } catch (error) {
    // Handle any errors that occur during the async operation
    console.error("Error fetching user data:", error);
  }
}

// Call the function to fetch user data for a specific user
fetchUserData(1);
