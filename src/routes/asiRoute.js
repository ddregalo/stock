const Artworks = require('../controllers/asiController');
const addNewArtwork = Artworks.add;
const allArtworks = Artworks.all;
const artworkByTitle = Artworks.byTitle;

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
  .put(function(req, res){
    res.send('PUT request successful')
  })
  // delete request to delete artwork data
  .delete(function(req, res) {
    res.send('DELETE request sucessful')
  });
};
module.exports = router;
