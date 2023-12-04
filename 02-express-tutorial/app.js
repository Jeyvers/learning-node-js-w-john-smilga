const express = require("express");
const app = express();
let { people } = require("./data");

// static assets
app.use(express.static("./methods-public"));

// parse form data with middleware so we can have access to it
// app.use(express.urlencoded({ extended: false })); // for html form method
app.use(express.json());

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

app.post("/api/postman/people", (req, res) => {
 const { name } = req.body;
 if (!name) {
  return res
   .status(400)
   .json({ success: false, msg: "please provide name value" });
 }
 res.status(201).json({ success: true, data: [...people, { name }] });
});

app.post("/login", (req, res) => {
 const { name } = req.body;
 if (name) {
  return res.status(200).send(`Welcome ${name}`);
 }

 res.status(401).send("Please provide credentials");
});

app.put("/api/people/:id", (req, res) => {
 const { id } = req.params;
 const { name } = req.body;
 const person = people.find((person) => person.id === +id);
 if (!person) {
  return res
   .status(404)
   .json({ success: false, msg: `Person ${id} doesn't exist` });
 }
 const newPeople = people.map((person) => {
  if (person.id === +id) {
   person.name = name;
  }
  return person;
 });
 res.status(200).json({ success: true, data: newPeople });
});

app.delete("/api/people/:id", (req, res) => {
 const { id } = req.params;
 const person = people.find((person) => person.id === +id);
 if (!person) {
  return res
   .status(404)
   .json({ success: false, msg: `Person ${id} doesn't exist` });
 }
 const newPeople = people.filter((person) => person.id !== +id);
 res.status(200).json({ success: true, data: newPeople });
});

app.listen(4999, (req, res) => {
 console.log("Server listening on port 4999");
});
