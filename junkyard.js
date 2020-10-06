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

router.get('/', async function(req, res, next) {
  const getTodos = await
  axios.get('https://yts.mx/api/v2/list_movies.json?sort_by=year', {
      })
      .then(res => console.log(res.data.data))
      .catch(err => console.error(err));
  })
  ;
  


  head
  meta(charset='UTF-8')
  meta(name='viewport', content='width=device-width, initial-scale=1.0')
  meta(http-equiv='X-UA-Compatible', content='ie=edge')
  link(rel='stylesheet', href='https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css', integrity='sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T', crossorigin='anonymous')
  title Axios Crash Course
body
  .container.my-5
    .text-center
      h1.display-4.text-center.mb-3 Axios Crash Course
      button#get.btn.btn-primary.my-3 GET
      button#post.btn.btn-info POST
      button#update.btn.btn-warning PUT/PATCH
      button#delete.btn.btn-danger DELETE
      button#sim.btn.btn-secondary Sim Requests
      button#headers.btn.btn-secondary
        | Custom Headers
      button#transform.btn.btn-secondary
        | Transform
      button#error.btn.btn-secondary
        | Error Handling
      button#cancel.btn.btn-secondary
        | Cancel
    hr
    #res
  script(src='https://cdnjs.cloudflare.com/ajax/libs/axios/0.19.0/axios.min.js')
  script(src='main.js')







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

- for (var i=0; i<movies.length; i++) {
  tr
  td= movies[i].title
    img(src=movies[i].small_cover_image)
    =movies[i].rating
   

- };