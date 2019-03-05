//Create an HTTP server on port 3000 -- done
//with a request handler that creates a file named hello-world.txt.
//You will be using the fs module to do this.
//Write the content: "Hello to this great world" to the hello-world.txt file


const http = require('http');
const fs = require('fs');
const port = 3000;

const requestHandler = (request, response) => {
  response.end(`Handling a request on port ${port}`)
};

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
  if (err) {
    return console.log(`You have an error:  ${err}`);
  }

  console.log(`server is listening on ${port}`);
});

fs.writeFile('hello-world.txt', 'Hello to this great world', 'utf8', (err) => {
  if (err) throw err;

  console.log('success')
});
