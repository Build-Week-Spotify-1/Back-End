const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Users = require("../users/users-model");

//endpoint: /api/auth/register
router.post("/register", (req, res) => {
  let user = req.body;

  if (user.password && user.first_name && user.last_name) {
    Users.add(user)
      .then(newUser => {
        const hash = bcrypt.hashSync(user.password, 8);
        user.password = hash;
        console.log(user.password);
        res.status(201).json(newUser);
      })
      .catch(err => {
        res.status(500).json({ message: "Unable to add user", error: err });
      });
  } else {
    res.status(400).json({ message: "Please complete all fields." });
  }
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
      console.log(err);
      res.status(500).json({ message: "Unable to login", error: err });
    });
});

function generateToken(user) {
  const jwtSecret = process.env.JWT_SECRET || "keep it secret";
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
