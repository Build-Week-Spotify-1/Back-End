const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const usersRouter = require("./users/users-router");
const authRouter = require("./auth/auth-router");
// const authorize = require("./auth/auth-middleware");

const server = express();

//global middleware
server.use(helmet());
server.use(express.json());
server.use(cors());

server.use("/api/users", usersRouter); //has /api/users and /api/users/:id
server.use("/api/auth", authRouter); //has /api/auth/login and /api/auth/register

server.get("/", (req, res) => {
  res.send({ api: "is running" });
});

module.exports = server;
