const express = require('express');
const app = express();
const PORT = 3000;
var router = require('./src/routes/asiRoute');

router(app);

app.get('/', function(req, res) {
  res.send(`Node and express running on port ${PORT}`)
});
app.listen(PORT, function() {
  console.log(`Your server is running on port ${PORT}`)
});
