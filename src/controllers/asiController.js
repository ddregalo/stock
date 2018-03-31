const mongoose = require('mongoose');
const ArtworkSchema = require('../models/asiModel');

const Artwork = mongoose.model('Artwork', ArtworkSchema);

const addNewArtwork = function(req, res) {
  let newArtwork = new Artwork(req.body);
  newArtwork.save(function(err, artwork) {
    if (err) {
      res.send(err);
    }
    res.json(artwork);
  });
};

module.exports = addNewArtwork;
