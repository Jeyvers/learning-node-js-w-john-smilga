const http = require('http');
const server = http.createServer((req, res) => {
  console.log('user hit the server');
});

// A port is a communication endpoint, there are specific ports for different things.
server.listen(5000);
