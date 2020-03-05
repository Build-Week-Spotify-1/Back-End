exports.seed = function(knex) {
  return knex("users")
    .del()
    .then(function() {
      return knex("favorites").insert([
        {
          id: 1,
          user_id: 1,
          title: "Never Meant",
          artist: "American Football",
          album: "American Football",
          album_art:
            "https://upload.wikimedia.org/wikipedia/en/e/e6/American_football_band_lp_cover.png"
        },
        {
          id: 2,
          user_id: 1,
          title: "The Rip",
          artist: "Portishead",
          album: "Third",
          album_art:
            "https://upload.wikimedia.org/wikipedia/en/9/9d/Portishead_-_Third.png"
        },
        {
          id: 3,
          user_id: 2,
          title: "Supersoaker",
          artist: "Eartheater",
          album: "Trinity",
          album_art:
            "https://media.pitchfork.com/photos/5db4884a0586fb00080dae44/1:1/w_320/Eartheater-Trinity-3000.JPG"
        }
      ]);
    });
};
