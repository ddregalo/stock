const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ArtworkSchema = new Schema({
  artist: {
    type: String,
    required: 'Enter artist name.'
  },
  artworkImage: {
    type: Array
  },
  artworkTitle: {
    type: String,
    required: 'Enter the artwork title.'
  },
  artworkYear: {
    type: Number,
    required: 'Enter the year the artwork was created.'
  },
  artworkCollection: {
    type: String,
  },
  artworkMedium: {
    type: String,
    required: 'Enter the artwork medium.'
  },
  artworkEdition: {
    type: String,
    required: 'Enter the artwork edition or unique.'
  },
  artworkSigned: {
    type: String,
    required: 'Enter yes or no if the artwork is signed.'
  },
  artworkDimensions: {
    type: Number,
    required: 'Enter artwork price or 0 for not for sale.'
  },
  artworkPrice: {
    type: Number,
    required: 'Enter artwork dimensions (h x w cm).'
  },
  create_date: {
    type: Date,
    default: Date.now
  }
});

module.exports = ArtworkSchema;
