const db = require("../data/dbConfig");

module.exports = {
  saveSong,
  getSavedSongs,
  removeSong
};

function saveSong(song) {
  return db("favoriteSongs")
    .insert(song)
    .then(ids => {
      const id = ids[0];

      return db("favoriteSongs")
        .where({ id })
        .first()
        .then(song => {
          return song;
        });
    });
}

function getSavedSongs(id) {
  return db("favoriteSongs")
    .select()
    .where({ user_id: id });
}

function removeSong(user_id, id) {
  return db("favoriteSongs")
    .select()
    .where({ user_id, id })
    .limit(1)
    .first()
    .del();
}
