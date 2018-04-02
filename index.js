const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;
var router = require('./src/routes/asiRoute');

// mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/ASIdb');

// setup body-parser with json
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// connect app with router
router(app);
app.set('views','./views');
app.set('view engine', 'ejs');

// express static setups
app.use(express.static('public/images'));
app.use(express.static('public/styles'));
app.use(express.static('public/scripts'));

app.get('/', function(req, res) {
  res.send(`Node and express running on port ${PORT}`)
});
app.listen(PORT, function() {
  console.log(`Your server is running on port ${PORT}`)
});
