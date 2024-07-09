// Browser APIs provide a way for JavaScript to interact with the browser and the web environment.
//  Here are some commonly used Browser APIs along with brief explanations:

// 1. Document Object Model (DOM) API
// Purpose: Allows scripts to update the content, structure, and style of a document while it is being viewed.
// Key Features:
// Manipulate HTML elements (getElementById, querySelector, createElement).
// Modify element attributes and styles.
// Handle events (e.g., click, submit).

// Example:

const element = document.getElementById('myElement');
element.textContent = 'Hello, World!';


// 2. Fetch API
// Purpose: Provides a modern interface for making HTTP requests to servers.
// Key Features:
// Supports promises for handling asynchronous operations.
// Simplifies making GET, POST, PUT, DELETE requests.

// Example:

fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));

// 3. Geolocation API
// Purpose: Allows web applications to access the geographical location of the user.
// Key Features:
// Get the current position of the user.
// Watch the position as it changes.

// Example:

navigator.geolocation.getCurrentPosition(position => {
    console.log('Latitude:', position.coords.latitude);
    console.log('Longitude:', position.coords.longitude);
});

// 4. Canvas API
// Purpose: Provides a means for drawing graphics via JavaScript and the <canvas> element.
// Key Features:
// Draw shapes, text, images, and other objects.
// Create animations.

// Example:

const canvas = document.getElementById('myCanvas');
const context = canvas.getContext('2d');
context.fillStyle = 'green';
context.fillRect(10, 10, 150, 100);

// 5. Web Storage API

// Purpose: Provides mechanisms to store key-value pairs in a web browser.
// Key Features:
// localStorage for persistent storage that survives browser restarts.
// sessionStorage for storage that lasts only until the page session ends.

// Example:

localStorage.setItem('username', 'Alice');
const username = localStorage.getItem('username');
console.log(username); // Outputs: Alice


// 6. Notification API
// Purpose: Allows web pages to send notifications to the user.
// Key Features:
// Request permission to send notifications.
// Display system notifications.

// Example:

if (Notification.permission === 'granted') {
    new Notification('Hello, World!');
} else if (Notification.permission !== 'denied') {
    Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
            new Notification('Hello, World!');
        }
    });
}