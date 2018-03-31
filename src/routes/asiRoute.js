const router = function(app) {
  app.route('/home')
  .get(function(req, res){
    console.log(`Request from: ${req.originalUrl}`)
    console.log(`Request type: ${req.method}`)
    res.send('GET request successful')
  })
  .post(function(req, res) {
    res.send('POST request sucessful')
  });

  app.route('/home/:asiId')
  .put(function(req, res){
    res.send('PUT request successful')
  })
  .delete(function(req, res) {
    res.send('DELETE request sucessful')
  });
};
module.exports = router;