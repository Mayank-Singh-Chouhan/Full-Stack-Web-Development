// Callbacks vs. Promises: Why Promises are Preferred

// Callbacks and Promises both handle asynchronous operations in JavaScript,
// but Promises offer several advantages that make them the preferred choice for
// managing asynchronous code. Here’s a concise comparison:

// Callbacks
// Definition: Functions passed as arguments to be executed later.

// Example:

function fetchData(callback) {
    setTimeout(() => {
        const data = { name: 'Alice', age: 22 };
        callback(null, data);
    }, 1000);
}

fetchData((error, data) => {
    if (error) {
        console.error('Error:', error);
    } else {
        console.log('Data:', data);
    }
});


// Drawbacks:

// Callback Hell: Nested callbacks make code hard to read and maintain.
// Error Handling: Must handle errors in each callback.
// Inversion of Control: The logic flow is controlled by the callback functions, which
//  can lead to issues with readability and maintainability.


// Promises
// Definition: Objects representing the eventual completion or failure of an asynchronous operation.

function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = { name: 'Alice', age: 22 };
            resolve(data);
        }, 1000);
    });
}

fetchData()
.then(data => {
    console.log('Data:', data);
})
.catch(error => {
    console.error('Error:', error);
});


// Advantages:

// Readability: Promises flatten the code structure, avoiding callback hell.
// Error Handling: Simplified with .catch, handling errors in one place.
// Composability: Easily chain multiple asynchronous operations and use methods like Promise.all and Promise.race


// Promises with async/await

// Using Promises with async/await syntax further enhances clarity and simplicity:


async function fetchData() {
    try {
        const data = await asyncOperation();
        console.log('Data:', data);
    } catch (error) {
        console.error('Error:', error);
    }
}