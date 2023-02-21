// Making a GET request to the url endpoint
// This url returns a list of posts in JSON format
fetch('https://jsonplaceholder.typicode.com/posts')
/* The fetch() function returns a Promise that resolves to a Response object, 
which contains the response to the HTTP request */
// If response is resolved, run this function to convert response to JSON format
.then(response => response.json())
// log the response data to the console
.then(data => console.log(data))
// If there is an error during fetch, catch it and log it to the console
.catch(error => console.log(error));