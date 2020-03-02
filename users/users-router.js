const router = require("express").Router();
const authenticate = require("../auth/auth-middleware");
const Users = require("./users-model");

//endpoint: /api/users
router.get("/", authenticate, (req, res) => {
  Users.find()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(err =>
      res
        .status(500)
        .json({ message: "Unable to retreive list of users", error: err })
    );
});

//endpoint: /api/users/:id
router.get("/:id", authenticate, (req, res) => {
  const { id } = req.params;

  Users.findById(id)
    .then(user => {
      if (user) {
        res.json(user);
      } else {
        res.status(404).json({ message: "Unable to find user" });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Unable to retreive user", error: err });
    });
});

module.exports = router;
