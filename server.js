const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const usersRouter = require("./users/users-router");
const authRouter = require("./auth/auth-router");
const authorize = require("./auth/auth-middleware");

const server = express();

//global middleware
server.use(helmet());
server.use(cors());
server.use(express.json());

server.use("/api/users", usersRouter); //has /api/users and /api/users/:id
server.use("/api/auth", authorize, authRouter); //has /api/auth/login and /api/auth/register

server.get("/", (req, res) => {
  res.json({ api: "is running" });
});

module.exports = server;
