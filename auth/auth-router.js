const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Users = require("../users/users-router");

//endpoint: /api/auth/register
router.post("/register", (req, res) => {
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 8);
  user.password = hash;

  Users.add(user)
    .then(newUser => {
      res.status(201).json(newUser);
    })
    .catch(err => {
      res.status(500).json({ message: "Unable to add user", error: err });
    });
});

//endpoint: /api/auth/login
router.post("/login", (req, res) => {
  let { username, password } = req.body;

  Users.findBy({ username })
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = generateToken(user);
        res.json({
          message: `Hello, ${username}`,
          user_id: user.id,
          token: token
        });
      } else {
        res.status(401).json({ message: "Invalid credentials" });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Unable to login", error: err });
    });
});

function generateToken(user) {
  const payload = {
    subject: user.id,
    username: user.username
  };

  const options = {
    expiresIn: "1h"
  };

  return jwt.sign(payload, jwtSecret, options);
}

module.exports = router;
