const express = require("express");
const router = express.Router();

const Favs = require("./favs-model");
const authenticate = require("../auth/auth-middleware");

router.post("/faves", authenticate, (req, res) => {
  const song = req.body; //need to make sure front end can send song (title, artist, name) as req.body TO the specific user
  //   const tokenId = req.decodedToken.subject;
  //   console.log(req.decodedToken.subject);
  //   if (tokenId === song.user_id) {
  Favs.saveSong(song)
    .then(savedSong => {
      res.status(200).json(savedSong);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "Unable to save" });
    });
  //   } else {
  //     return res.status(401).json({ message: "Unauthorized" });
  //   }
});

router.get("/:user_id/faves", (req, res) => {
  const id = req.params.user_id;
  Favs.getSavedSongs(id)
    .then(savedTracks => {
      res.status(200).json(savedTracks);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "Unable to load saved songs" });
    });
});

router.delete("/:user_id/faves/:id", authenticate, (req, res) => {
  const id = req.params.user_id;
  const song = req.params.id;
  Favs.removeSong(id, song)
    .then(deletedSong => {
      console.log(id);
      res.status(200).json({ deleted: deletedSong });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ message: "Unable to delete" });
    });
});

module.exports = router;
