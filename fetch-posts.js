// Getting all resources
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

// Getting a resource
fetch('https://jsonplaceholder.typicode.com/posts/1')
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.log(error));

// Creating a resource
// Send a POST request to send request body to the url
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));

  // Updating a resource
  fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PUT',
    body: JSON.stringify({
      id: 1,
      title: 'xyz',
      body: 'abc',
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    }
  })
  .then(response => response.json())
  .then(json => console.log(json));

  // Patching a resource
  // PATCH makes partial changes to a resource
  fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'PATCH',
    body: JSON.stringify({
      title: 'zyx',
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
  .then(response => response.json())
  .then(json => console.log(json));

  // Deleting a resource
  fetch('https://jsonplaceholder.typicode.com/posts/1', {
    method: 'DELETE',
  });