const bcrypt = require("bcryptjs");

exports.seed = function(knex) {
  return knex("users").insert([
    {
      username: "testing",
      password: bcrypt.hashSync("pass", 8),
      first_name: "test",
      last_name: "ing"
    },
    {
      username: "joe_123",
      password: bcrypt.hashSync("word", 8),
      first_name: "tristan",
      last_name: "depew"
    }
  ]);
};
