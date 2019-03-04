//Create an HTTP server on port 3000 -- done
//with a request handler that creates a file named hello-world.txt.
//You will be using the fs module to do this.
//Write the content: "Hello to this great world" to the hello-world.txt file


const http = require('http');
const port = 3000;

//Handles HTTP Requests:
fs.writeFile('hello-world.txt', 'Hello to this great world', 'utf8', (err) => {
  if (err) throw err;

  console.log('success')
});
