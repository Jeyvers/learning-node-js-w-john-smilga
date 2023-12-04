const express = require("express");
const app = express();
const people = require("./routes/people");
const auth = require("./routes/auth");
// static assets
app.use(express.static("./methods-public"));

// parse form data with middleware so we can have access to it
// app.use(express.urlencoded({ extended: false })); // for html form method
app.use(express.json());
app.use("/api/people", people);
app.use("/login", auth);

// MVC (Model-View-Controller) is a pattern in software design commonly used to implement user interfaces, data, and controlling logic.
// This is the model

app.listen(4999, (req, res) => {
 console.log("Server listening on port 4999");
});
