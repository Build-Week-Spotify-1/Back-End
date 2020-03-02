exports.seed = function(knex) {
  return knex("users").insert([
    {
      username: "testing",
      password: "pass",
      first_name: "test",
      last_name: "ing"
    },
    {
      username: "joe_123",
      password: "word",
      first_name: "tristan",
      last_name: "depew"
    }
  ]);
};
