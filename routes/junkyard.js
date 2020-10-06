// var express = require('express');
// var router = express.Router();
// const fetch = require('node-fetch');
// const axios = require('axios')
// const XMLHttpRequest = require('XMLHttpRequest');


let src="https://code.jquery.com/jquery-3.1.1.js"

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });


router.get('/', async function(req, res, next) {
const getTodos = await
axios.get('https://yts.mx/api/v2/list_movies.json?sort_by=year', {
      timeout: 5000
    })
    .then((data) => {
      const result = data.data
      if (result.status === 'ok')
        return res.render('index', {
          movies: result.data.movies,
          userId: req.session.user.id,
        })
      return res.render('index')
    })
    .catch((error) => res.render('error', { error }))
});












//const fetchMovies = async (req, res)  => {
// let url = "https://yts.mx/api/v2/list_movies.json?sort_by=year";
// fetch(url, {method: "Get"})
//   .then(res => res.json())
//   .then(data => {const result = data.data.movies[0];
//     console.log(result)
//   })
//}
//res.render('index',{ result })

 //const indexGet = async (req, res) => {
  //  await


  // axios.get('https://yts.mx/api/v2/list_movies.json?limit=6')
  //     .then((data) => {
  //       const result = data.data.data
  //       console.log(result)


        // if (result.status === 'ok')
      //     return res.render('index', {
      //       movies: result.data.movies,
      //       userId: req.session.user.id,
      //     })
      //   return res.render('index')
      //  })
      // .catch((error) => res.render('error', { error }))

  //}
  

  
//$.getJSON( "ajax/test.json", function( data ) {
 // var items = [];






// let requestURL = "https://yts.mx/api/v2/list_movies.json?sort_by=year";
// let request = new XMLHttpRequest();
// request.open('GET', requestURL);
// request.responseType = 'json';
// request.send();
// request.onload = function() {
//   const movies = request.response;
//   console.log(movies)
// }

// $.getJSON( "https://yts.mx/api/v2/list_movies.json?sort_by=year", function( data ) {
//   console.log(data)
// });

// function ytsCallback(movieData) {
//   var movies= movieData.movies[0].icon;
//   }


//fetch(input: RequestInfo, init?: RequestInit): Promise<Response>

// method: "Get",
//   headers: {
//     'Content-Type':'application/json'
//   },
//   body: JSON.stringify({
//     movies
//   })

//module.exports = router;
////