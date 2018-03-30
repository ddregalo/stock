const router = function(app) {
  app.route('/home')
  .get(function(req, res){
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
    res.send('DELETErequest sucessful')
  });
};
module.exports = router;
