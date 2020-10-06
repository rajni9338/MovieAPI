const genre = document.getElementById('genre')
const genreForm = document.getElementById('genreForm')
const search = document.getElementById('search')

  //const searchBtn = document.getElementById('search-btn')
  // const select = document.getElementById('select')
genre.addEventListener('change', (e) => {
    console.log(e.target.value)
genreForm.setAttribute('action', `/?genre=${e.target.value}`)
})


formID.addEventListener('submit', (e) => {
  console.log(e)
    console.log(e.value)
searchButton.setAttribute('href', `/?query_term=${e.target.value}`)
})