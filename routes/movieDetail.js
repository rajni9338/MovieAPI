const express = require('express')
const axios = require('axios').default
const router = express.Router()
const db = require('../database.js');
const { NotExtended } = require('http-errors');




/*const detailPage = async function (req, res) {
  const { id } = req.params
  //res.local.id = req.params
  console.log(id)
  //console.log(res.local.id)
  axios
    .get(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    .then((anything) => {
      const result = anything.data.data
      //console.log(result)
      const { movie } = result
      console.log(movie.title)
      if (movie)
        return res.render('movieDetail', {
          result :movie,
        })
      return res.render('movieDetail', { movie: false })
    })
    .catch((error) => res.render('error', { error }))
}*/

const detailPage = async function (req, res) {
  const { id } = req.params
  //res.local.id = req.params
  console.log(id)
  //console.log(res.local.id)
  axios
    .get(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    .then((anything) => {
      const result = anything.data.data
      //console.log(result)
      const { movie } = result
      console.log(movie.title)
      if (movie) {
        //console.log('SELECT AVG(rate) FROM movie WHERE movie_id = ?', [id]);
        var data;
      db.query('SELECT AVG(rate) FROM movie WHERE movie_id = ?', [id], (err, rows) => {
        if (err) throw err
        console.log("the row data is", rows[0]);
        var data = rows[0];
      }) 
        console.log("attempting a global", data)
        return res.render('movieDetail', {
          result :movie, aaaa: 'this is where I want my avg rating displayed',
        })}
      return res.render('movieDetail', { movie: false })
    })
    .catch((error) => res.render('error', { error }))
}


const ratingMovie = async function(req, res) {
  const id = req.session.userID
  const {movie_id, rate} = req.body;
  var checkMovieID = req.body.movie_id;
  await db.query("SELECT COUNT (*) AS cnt FROM movie WHERE movie_id = ? AND user_id = ?" , [checkMovieID, req.session.userID], function(err, data) { 
      console.log("the user ID IS!!!!!!!!! " + req.session.userID);
    if(data[0].cnt > 0) {  
      res.render('movieDetail/', {
        err_message: 'You have already rated this movie!',
        messageClass: 'alert-danger'
      })
    } else {
      var sql = "INSERT INTO movie SET ?";
      db.query(sql, { movie_id, user_id : req.session.userID, rate} , function (err, data) {
        console.log(req.session.userID + ' here')
          if (err) throw err;
              console.log("User data is inserted successfully ");
              // return res.render('movieDetail', {
              //   result: movie,
              //   suc_message: 'Thanks for rating this movie',
              //   messageClass: 'alert-success'
              // })
              
      });
          // res.render('movieDetail/', {
          //   err_message: 'You have already rated this movie!',
          //   messageClass: 'alert-danger'
          // })
    }
    //res.redirect('movieDetail/' + movie_id);
    NotExtended();
  });       
}


router.get('/:id', detailPage)
router.post('/', ratingMovie, detailPage );


module.exports = router;



/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });