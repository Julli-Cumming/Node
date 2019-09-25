const express = require("express");

const server = express();

// localhost:3000/teste
server.get("/teste", (req, res) => {
  return res.send("Hello World! Bem vindo ao Node.js");
});

server.listen(3000);
