const http = require('http');

// createServer creates the server and takes in a callback which will be invoked every single time the user hits the server.
const server = http.createServer((req, res) => {
  console.log('user hit the server');
  res.end('home page');
});

// you always need to add the response.end()

// A port is a number assigned to uniquely identify a connection endpoint and to direct data to a specific service. There are specific ports for different things.
server.listen(5000);

// Stopped at 4.14.22
// Start at 4.
