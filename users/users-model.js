const db = require("../data/dbConfig");

module.exports = {
  find,
  findBy,
  findById,
  add
};

function find() {
  return db("users").select("id", "username", "password");
}

function findBy(filter) {
  return db("users")
    .where(filter)
    .first();
}

function findById(id) {
  return db("users")
    .where({ id })
    .first()
    .select("id", "username", "password");
}

function addUser(user) {
  return db("users")
    .insert(user)
    .then(ids => {
      const [id] = ids;
      return findById(id);
    });
}
