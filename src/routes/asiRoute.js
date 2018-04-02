const mongoose = require('mongoose');
const ArtworkSchema = require('../models/asiModel');
const Artwork = mongoose.model('Artwork', ArtworkSchema);

//const Artwork = require('../controllers/asiController');
const addNewArtwork = Artwork.add;
const getAllArtworks = Artwork.all;
const artworkByTitle = Artwork.byTitle;
const artworkUpdateByTitle = Artwork.update;
const artworkDeleteByTitle = Artwork.delete;


const router = function(app) {
  // end point router for home page
  app.get('/home', function(req, res) {
    res.render('index');
  });
  // get request to send all artworks on the database
  app.get('/artworks/all', function(req, res) {
    Artwork.find({}, function(err, artwork) {
      if(err) {
        res.send(err);
      }
      // responds with a json object of artwork db
      res.send(JSON.stringify(artwork));
    });
  })




  // route for all artworks - not rendered
  // app.route('/home').get(getAllArtworks);
  //
  // app.route('/home/:asiTitle')
  // get specific artwork by title
  // .get(artworkByTitle)
  // put request to update artwork data
  // .put(artworkUpdateByTitle)
  // delete request to delete artwork data
  // .delete(artworkDeleteByTitle);
};
module.exports = router;
