var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');
const axios = require('axios');
const bcrypt = require('bcrypt');
const db = require('../database.js');
const routeProtector = require('../routeProtector')

//MOVIE DATABASE//
router.get('/', async function(req, res) {
  axios.get('https://yts.mx/api/v2/list_movies.json?limit=10', {
  })
    .then((anything) => {
    const result = anything.data
      if (result.status === 'ok')
        return res.render('index', {
          movies: result.data.movies,
        })
      return res.render('index')
    })
    .catch((error) => res.render('error', { error }))
  });

router.post('/', async function(req, res) {
  // store all the user input data
  const {genre, q} = req.body;
  console.log(genre, q);
  let url = `https://yts.mx/api/v2/list_movies.json?limit=6&genre=${genre}&query_term=${q}`
  axios.get( url, {})
  .then((anything) => {
  const result = anything.data
    if (result.data.movie_count !== '0'){
      return res.render('index', {
        movies: result.data.movies,
      })
    } else {
    return res.render('index');
    }
    })
  .catch((error) => res.render('error', { error }))
});

//REGISTER PAGE//
router.get('/register', (req, res) => {
  res.render('register.jade');
});

router.post('/register', (req, res) => {
  var { email, firstname, surname, pword, confirmpword } = req.body;
  var checkEmail = req.body.email;

  if (pword === confirmpword) {
    bcrypt.hash(pword, 10, (err, hash) => {
      var pword = hash;
      (db.query('SELECT COUNT(*) AS cnt FROM users WHERE email = ?', checkEmail, (err , data) => {
          if (data[0].cnt > 0){  
                  res.render('register.jade', {
                  err_message: 'This email already exists.',
                  messageClass: 'alert-danger'
              }) 
          } else { var sql = 'INSERT INTO users SET ?';
          db.query(sql, { firstname, surname, email, pword}, function (err, data) { 
            if (err) throw err;
            console.log("form data is inserted successfully "); 
         });
            res.render('login.jade', {
            suc_message: 'Registration Complete. Please login to continue.',
           messageClass: 'alert-success'
           })
          }
      }));})
   } else {
        res.render('register.jade', {
            err_message: 'Password does not match.',
           messageClass: 'alert-danger'
       });
  }});

//LOGIN PAGE//
router.get('/login', function (req, res) {
  res.render('login.jade');
});

router.post('/login', function (req, res) {
  var { email, pword } = req.body;

  if (email && pword) {
    db.query('SELECT * FROM users WHERE email = ?', [email], (err, data) => {
      console.log(err)
      if (err) {
        throw err;
      }
      if (!data[0]) {
        return res.render('login.jade', {
            err_message: 'Incorrect email or password',
            messageClass: 'alert-danger',
          });
        }

    bcrypt.compare(pword, data[0].pword, function (err, result) {
        if (result === false) {
          return res.render('login.jade', {
            err_message: 'Incorrect email or password',
            messageClass: 'alert-danger',
          });}
        
        req.session.email;
        res.redirect('/');
  })
});
}});

//LOGOUT PAGE//
router.get('/logout', function(req, res) {
  if (req.session) {
    req.session.destroy(function(err) {
      if(err) {
        return next(err);
      } else {
        console.log("The session has ended " + req.session);
        return res.redirect('/login');
      }
    });
  }
});


router.get('/', routeProtector)
module.exports = router;
