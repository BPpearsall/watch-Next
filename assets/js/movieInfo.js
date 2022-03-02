const posters = document.querySelectorAll('.img') 
const titles = document.querySelectorAll('.img')

console.log(posters)

let queryString = document.location.search;
let movieId = queryString.split('=')[1];
let APIKEY = "k_srm6hq6z"
let popularMoviesUrl = `https://imdb-api.com/en/API/MostPopularMovies/${APIKEY}`
let titleSearchUrl = `https://imdb-api.com/en/API/Title/${APIKEY}/${movieId}`

