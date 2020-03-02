exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("users")
    .truncate()
    .then(function() {
      // Inserts seed entries
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
    });
};
