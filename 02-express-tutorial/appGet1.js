const express = require("express");
const app = express();

app.get("/", (req, res) => {
 res.status(200).send("Home Page");
});

app.get("/about", (req, res) => {
 res.status(200).send("About page");
});

app.all("*", (req, res) => {
 res.status(404).send("<h1>resource not found</h1>");
});

app.listen(4999, () => {
 console.log("server is listening on port 4999");
});

// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen

// Start at 5.00
