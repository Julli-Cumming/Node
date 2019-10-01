const express = require("express");

const server = express();

server.use(express.json());

// localhost:3000/users/123
//return res.json({ message: `Hello ${nome}` });
//return res.send("Hello World! Bem vindo ao Node.js");
// return res.json({ messagem: "Hello World! Bem vindo ao Node.js" });

//crud - Create(Post), Read(GET), Update(PUT) e Delete(DELETE)

const users = ["Fabio", "Paulo", "Daniel"];

server.get("/users", (req, res) => {
  return res.json(users);
});

server.get("/users/:index", (req, res) => {
  const { index } = req.params;
  return res.json(users[index]);
});

server.post("/users", (req, res) => {
  const { name } = req.body;
  users.push(name);
  return res.json(users);
});

server.put("/users/:index", (req, res) => {
  const { index } = req.params;
  const { name } = req.body;
  users[index] = name;
  return res.json(users);
});

server.delete("/users/:index", (req, res) => {
  const { index } = req.params;
  users.splice(index, 1);
  return res.json(users);
});

server.listen(3000);

// Query params = ? teste=1
// Route params = /users/1
// Request body = { "name": "Julli", "email": "teste@gmail.com"}
