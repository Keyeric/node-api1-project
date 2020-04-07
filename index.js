// console.log("\n === index.js executed!! === \n");
const express = require("express");

const server = express();
server.use(express.json());

const port = 5000;

let users = [
  {
    name: "Pita Paka",
    bio: "The Alter Ego of Spider-Man",
    id: 0,
  },
  {
    name: "Spoida-Mahn",
    bio: "The Alter Ego of Peter Parker",
    id: 1,
  },
];

server.get("/", (req, res) => {
  res.status(200).json(`Ready and waiting!`);
});

server.get("/api/users", (req, res) => {
  res.status(200).json(users);
});

server.get("/api/users/:id", (req, res) => {
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
  console.log(reqBody);

  if (reqBody.name && reqBody.bio) {
    reqBody.id = users.length;
    users.push(reqBody);
    console.log(users);
    res.status(201).json(users);
  } else {
    res
      .status(400)
      .json({ errorMessage: "Please provide name and bio for the user." });
  }
});

server.listen(port, () => {
  console.log(`\n Server listening on port ${port} \n`);
});
