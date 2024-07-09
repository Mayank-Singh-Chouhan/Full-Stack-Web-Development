// Same-Origin Policy in AJAX Requests

// Same-Origin Policy (SOP) is a security measure implemented by web browsers to 
// restrict how web pages can make requests to different origins. It prevents a malicious 
// site from reading sensitive data from another
// site via client-side scripts like JavaScript.

// Example of Same-Origin Policy
// If a web page from http://example.com tries to make an AJAX request to http://api.example.com, the browser
//  will block the request because the origins are different (due to the different subdomains).

// Working Around the Same-Origin Policy
// There are several methods to work around the Same-Origin Policy for legitimate purposes:

// Cross-Origin Resource Sharing (CORS)
// JSONP (JSON with Padding)
// Proxy Server


// 1. Cross-Origin Resource Sharing (CORS)
// CORS is a standard that allows servers to specify who can access
// their resources. Servers can use HTTP headers to indicate which 
// origins are permitted to read information.

// 2. JSONP (JSON with Padding)
// JSONP is a technique that bypasses SOP by using <script> tags to 
// request JSON data from another origin.

// 3. Proxy Server
// A proxy server acts as an intermediary for requests from clients 
// eeking resources from other servers. The client makes requests to
//  the proxy, which then forwards them to the target server.
