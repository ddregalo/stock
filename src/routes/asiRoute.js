const Artworks = require('../controllers/asiController');
const addNewArtwork = Artworks.add;
const allArtworks = Artworks.all;
const artworkByTitle = Artworks.byTitle;
const artworkUpdateByTitle = Artworks.update;
const artworkDeleteByTitle = Artworks.delete;

const router = function(app) {
  app.route('/home')
  // get request to send all artworks on the database
  .get(allArtworks)
  // post newArtwork endpoint
  .post(addNewArtwork);

  app.route('/home/:asiTitle')
  // get specific artwork by title
  .get(artworkByTitle)
  // put request to update artwork data
  .put(artworkUpdateByTitle)
  // delete request to delete artwork data
  .delete(artworkDeleteByTitle);
};
module.exports = router;
