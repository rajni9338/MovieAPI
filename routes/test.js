router.post('/', async function(req, res) {
  const { movie_id, rate} = req.body;
  const id = req.session.userID
  var checkMovieID = req.body.movie_id;
  (db.query("SELECT COUNT (*) AS cnt FROM movie WHERE movie_id = ? AND user_id = ?",
   [checkMovieID, req.session.userID], function(err, data) { 
    console.log("the user ID IS!!!!!!!!!" + req.session.userID);
    if(data[0].cnt > 0) {  
      res.render('rate.hbs', {
      message: 'You have already rated this movie!',
      messageClass: 'alert-danger'
  })} else {
      var sql = "INSERT INTO movie SET ?"; 
      await db.query(sql, {user_id: id[0].user_id , movie_id, rate}, function (err, data) {
          if (err) throw err;
              console.log("User dat is inserted successfully ");
          });
          return res.redirect('/') }
  }));       
});