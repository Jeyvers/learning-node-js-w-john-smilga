const express = require('express');
const logger = require('./logger');
const authorize = require('./authorize');
const app = express();

// req => middleware => res
// You can stuck a function in between the path and callback function. That function will be the middleware

// Uses the middleware always
// Everthing goes in order in Express
app.use(logger);
// app.use([logger, authorize]);

app.get('/', (req, res) => {
  res.send('Home');
});

app.get('/about', (req, res) => {
  res.send('About');
});

app.get('/api/products', (req, res) => {
  res.send('Products');
});

app.get('/api/items', (req, res) => {
  res.send('Items');
});

app.listen(5000, (req, res) => {
  console.log('Server listening on port 5000');
});
