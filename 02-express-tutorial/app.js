const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Home Page');
});

app.get('/about', (req, res) => {
  res.send('About page');
});

app.listen(5000, () => {
  console.log('server is listening on port 5000');
});

// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen

// Start at 5.00
