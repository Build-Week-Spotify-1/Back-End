const db = require("../data/dbConfig");

module.exports = {
  saveSong,
  getSavedSongs,
  removeSong
};

function saveSong(song) {
  return db("favorites")
    .insert(song)
    .then(ids => {
      const id = ids[0];

      return db("favorites")
        .where({ id })
        .first()
        .then(song => {
          console.log(song);
          return song;
        });
    });
}

function getSavedSongs(id) {
  return db("favorites")
    .select()
    .where({ user_id: id });
}

function removeSong(user_id, id) {
  return db("favorites")
    .select()
    .where({ user_id, id })
    .limit(1)
    .first()
    .del();
}
