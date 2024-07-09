// XMLHttpRequest Object:

// The XMLHttpRequest (XHR) object is a built-in browser object that allows JavaScript to make HTTP requests 
// to servers. It is the foundation of AJAX (Asynchronous JavaScript and XML), enabling web pages to update
// asynchronously by exchanging data with a web server behind the scenes.

// Create a new XMLHttpRequest object
const xhr = new XMLHttpRequest();

// Configure it: GET-request for the URL /data
xhr.open('GET', 'https://api.example.com/data', true);

// Set up a function to be called when the request is complete
xhr.onload = function() {
    if (xhr.status === 200) { // Check if the request was successful
        const response = JSON.parse(xhr.responseText); // Parse JSON data
        console.log(response); // Process the response data
    } else {
        console.error('Error:', xhr.status); // Handle the error
    }
};

// Send the request to the server
xhr.send();