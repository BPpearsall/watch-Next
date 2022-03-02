const posters = document.querySelectorAll('.img') 
const titles = document.querySelectorAll('.img')

let ytVid = document.createElement("iframe")
ytVid.textContent;

let APIKEY = "k_tgoqrhd7"
https://imdb-api.com/en/API/Title/
let popularMoviesUrl = `https://imdb-api.com/en/API/MostPopularMovies/${APIKEY}`

let queryString = document.location.search;
let movieId = queryString.split('=')[1];
let APIKEY = "k_srm6hq6z"
let popularMoviesUrl = `https://imdb-api.com/en/API/MostPopularMovies/${APIKEY}`
let titleSearchUrl = `https://imdb-api.com/en/API/Title/${APIKEY}/${movieId}`

fetch(titleSearchUrl, {

})
.then(function (response) {
    return response.json();
})
.then(function (data) {
    console.log(data)
    let movieInfo = []
})
