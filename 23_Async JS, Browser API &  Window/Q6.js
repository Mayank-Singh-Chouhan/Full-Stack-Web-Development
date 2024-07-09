// The localStorage and sessionStorage APIs provide ways to store key-value pairs in
// a web browser, allowing web applications to save data on the client-side.

// localStorage

// Purpose:

// To store data that persists even after the browser is closed and reopened.
// Useful for saving user preferences, settings, or any data that should be 
// available across browser sessions.

// Usage:

// Set Item: localStorage.setItem('key', 'value');
// Get Item: localStorage.getItem('key');
// Remove Item: localStorage.removeItem('key');
// Clear All Items: localStorage.clear();

// Save data to localStorage
localStorage.setItem('username', 'Alice');

// Retrieve data from localStorage
const username = localStorage.getItem('username');
console.log(username); // Outputs: Alice

// Remove data from localStorage
localStorage.removeItem('username');

// Clear all data from localStorage
localStorage.clear();

// sessionStorage

// Purpose:

// To store data that is only available for the duration of the page session (until the browser tab is closed).
// Suitable for temporary data, such as form data that should be cleared once the user leaves the page.

// Usage:

// Set Item: sessionStorage.setItem('key', 'value');
// Get Item: sessionStorage.getItem('key');
// Remove Item: sessionStorage.removeItem('key');
// Clear All Items: sessionStorage.clear();

// Save data to sessionStorage
sessionStorage.setItem('sessionId', '12345');

// Retrieve data from sessionStorage
const sessionId = sessionStorage.getItem('sessionId');
console.log(sessionId); // Outputs: 12345

// Remove data from sessionStorage
sessionStorage.removeItem('sessionId');

// Clear all data from sessionStorage
sessionStorage.clear();


// Key Differences
// Persistence: localStorage persists data indefinitely until explicitly deleted, whereas
//  sessionStorage persists data only for the duration of the page session.

// Scope: localStorage is accessible across different tabs and windows of the same
//  origin, while sessionStorage is limited to the current tab/window.

