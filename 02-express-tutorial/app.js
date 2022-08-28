const http = require('http');
const server = http.createServer((req, res) => {
  console.log('user hit the server');
  res.end('home page');
});

// you always need to add the response.end()

// A port is a communication endpoint, there are specific ports for different things.
server.listen(5000);

// Stopped at 4.14.22
// Start at 4.
