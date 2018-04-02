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

const getAllArtworks = function(req, res) {


};

const artworkByTitle = function(req, res) {
  Artwork.findOne({'artworkTitle': req.params.asiTitle}, function(err, artwork) {
    if(err) {
      res.send(err);
    }
    res.json(artwork);
  });
};

const artworkUpdateByTitle = function(req, res) {
  Artwork.findOneAndUpdate({'artworkTitle': req.params.asiTitle}, req.body, {new: true}, function(err, artwork) {
    if(err) {
      res.send(err);
    }
    res.json(artwork);
  });
};

const artworkDeleteByTitle = function(req, res) {
  Artwork.remove({'artworkTitle': req.params.asiTitle}, function(err, artwork) {
    if(err) {
      res.send(err);
    }
    res.json({ message: 'Successfully deleted contact'});
  });
};

module.exports.add = addNewArtwork;
module.exports.all = getAllArtworks;
module.exports.byTitle = artworkByTitle;
module.exports.update = artworkUpdateByTitle;
module.exports.delete = artworkDeleteByTitle;
