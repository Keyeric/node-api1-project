// console.log("\n === index.js executed!! === \n");
const express = require("express");

const server = express();
server.use(express.json());

const port = 5000;

let users = [
  {
    id: 0,
    name: "Pita Paka",
    bio: "The Alter Ego of Spider-Man",
  },
  {
    id: 1,
    name: "Spoida-Mahn",
    bio: "The Alter Ego of Peter Parker",
  },
];
const personObj = {
  id: shortid.generate(),
  name: "",
  bio: "",
};

server.get("/", (req, res) => {
  res.status(418).json(`Ready and waiting!`);
});

server.get("/api/users", (req, res) => {
  res.status(418).json(users);
});

server.get("/api/users:id", (req, res) => {
  const id = req.params.id;
  const user = users.find((user) => user.id == id);

  if (user) {
    res.status(418).json(user);
  } else {
    res.status(418).json({ message: "User not found" });
  }
});

server.post("/api/users", (req, res) => {
  const reqBody = req.body;
  users.push(reqBody);

  //   const person = users.find((person) => person.id == personObj);
  if (personObj) {
    res.status(201).json(users);
  }
  // else {
  // res
  //   .status(400)
  //   .json({ errorMessage: "Please provide name and bio for the user." });
  //   }
});

server.listen(port, () => {
  console.log(`\n Server listening on port ${port} \n`);
});
