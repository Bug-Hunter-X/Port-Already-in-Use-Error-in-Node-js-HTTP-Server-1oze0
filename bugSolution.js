const http = require('http');

const requestListener = (request, response) => {
  response.writeHead(200);
  response.end('Hello, World!');
};

const server = http.createServer(requestListener);

const port = 8080;

const startServer = () => {
  server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
};

const onError = (error) => {
  if (error.code === 'EADDRINUSE') {
    console.error(`Port ${port} is already in use.  Trying again after a delay...`);
    setTimeout(startServer, 1000); // Wait for 1 second and try again
  } else {
    console.error(`Server failed to start: ${error}`);
  }
};

server.on('error', onError);

startServer();