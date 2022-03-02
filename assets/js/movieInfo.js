const posters = document.querySelectorAll('.img') 
const titles = document.querySelectorAll('.img')

console.log(posters)

let APIKEY = "k_srm6hq6z"
https://imdb-api.com/en/API/Title/
let popularMoviesUrl = `https://imdb-api.com/en/API/MostPopularMovies/${APIKEY}`
let titleSearchUrl = `https://imdb-api.com/en/API/Title/${APIKEY}/${movieId}`

var getMovieId = function () {
    // This is coming from the URL search bar in the browser. It is what comes after the `?`.
    var queryString = document.location.search;
    var movieId = queryString.split('=')[1];
    console.log(movieId)

}
  
getMovieId()