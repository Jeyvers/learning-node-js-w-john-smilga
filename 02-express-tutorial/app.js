const http = require('http');

// createServer creates the server and takes in a callback which will be invoked every single time the user hits the server.
const server = http.createServer((req, res) => {
  // STATUS_CODES
  // MIME_TYPES
  const url = req.url;

  if (url == '/') {
    res.writeHead(200, { 'content-type': 'text/html' });
    res.write('<h1>Home page</h1>');
    res.end();
  } else if (url === '/about') {
    res.writeHead(200, { 'content-type': 'text/html' });
    res.write('<h1>About page</h1>');
    res.end();
  } else {
    res.writeHead(404, { 'content-type': 'text/html' });
    res.write('<h1> page not found</h1>');
    res.end();
  }
});

// you always need to add the response.end()

// A port is a number assigned to uniquely identify a connection endpoint and to direct data to a specific service. There are specific ports for different things.
server.listen(5000);

// Stopped at 4.32.09
