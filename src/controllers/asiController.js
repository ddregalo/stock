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

const allArtworks = function(req, res) {
  Artwork.find({}, function(err, artwork) {
    if(err) {
      res.send(err);
    }
    res.json(artwork);
  });
};

const artworkByTitle = function(req, res) {
  Artwork.findOne({'artworkTitle': req.params.asiTitle}, function(err, artwork) {
    if(err) {
      res.send(err);
    }
    res.json(artwork);
  });
};

module.exports.add = addNewArtwork;
module.exports.all = allArtworks;
module.exports.byTitle = artworkByTitle;
