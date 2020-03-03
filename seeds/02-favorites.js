exports.seed = function(knex) {
  return knex("favoriteSongs").insert([
    {
      id: 1,
      user_id: 1,
      title: "Never Meant",
      artist: "American Football",
      album: "American Football"
    },
    {
      id: 2,
      user_id: 1,
      title: "The Rip",
      artist: "Portishead",
      album: "Third"
    },
    {
      id: 3,
      user_id: 2,
      title: "Supersoaker",
      artist: "Eartheater",
      album: "Trinity"
    }
  ]);
};
