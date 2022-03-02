const posters = document.querySelectorAll('.img') 
const titles = document.querySelectorAll('.img')
const genreEl = document.querySelector('#genre')
const actorsEl = document.querySelector('#actors')
const directorEl = document.querySelector('#director')
const pgRatingEl = document.querySelector('#pg-rating')
const ratingEl = document.querySelector('#rating')
const runtimeEl = document.querySelector('#runtime')
const videoEl = document.querySelector('.ytTrailer')

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
    videoEl.innerHTML = `<iframe width="560" height="315" src="${vidURL}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`

})

let ytVid = document.createElement("iframe")
ytVid.textContent;


fetch(titleSearchUrl, {

})
.then(function (response) {
    return response.json();
})
.then(function (data) {
    let movieInfo = []
})
