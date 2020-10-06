const axios = require('axios')
  
  
  
  const actionButton = async function (req, res) {
    let url = `https://yts.mx/api/v2/list_movies.json?limit=6`
    if (req.query.action !== null && req.query !== undefined)
      url =`${url}genre=${req.query.action}`
    await axios.get(url)
    .then((anything) => {
      const result = anything.data
        if (result.status === 'ok')
          return res.render('index', {
            movies: result.data.movies,
          })
        return res.render('index')
      })
      .catch((error) => res.render('error', { error }))
    }
  module.exports = { actionButton }