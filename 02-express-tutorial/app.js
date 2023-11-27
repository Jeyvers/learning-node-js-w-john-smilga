const express = require("express");
const app = express();
let { people } = require("./data");

// static assets
app.use(express.static("./methods-public"));

// parse form data
app.use(express.urlencoded({ extended: false }));

app.get("/api/people", (req, res) => {
 res.status(200).json({ success: true, data: people });
});

app.post("/api/people", (req, res) => {
 const { name } = req.body;
 if (!name) {
  return res
   .status(400)
   .json({ success: false, msg: "please provide name value" });
 }
 res.status(201).json({ success: true, person: name });
});

app.post("/login", (req, res) => {
 const { name } = req.body;
 if (!name) {
  return res
   .status(400)
   .json({ success: false, msg: "please provide name value" });
 }

 res.status(201).json({ success: true, person: name });
});

app.listen(4999, (req, res) => {
 console.log("Server listening on port 4999");
});
