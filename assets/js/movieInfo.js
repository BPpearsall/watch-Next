const posters = document.querySelectorAll('.img') 
const titles = document.querySelectorAll('.img')

const movieImgEl = document.querySelector('#movieImg')
const moviePlotEl = document.querySelector('#moviePlot')
const genreEl = document.querySelector('#genre')
const actorsEl = document.querySelector('#actors')
const directorEl = document.querySelector('#director')
const pgRatingEl = document.querySelector('#pg-rating')
const ratingEl = document.querySelector('#rating')
const runtimeEl = document.querySelector('#runtime')
const videoEl = document.querySelector('.ytTrailer')

let YTAPIKEY = "AIzaSyDhAWmGdli7aV1KD7OXlZjAyOvgnzL9RZk"
let queryString = document.location.search;
let movieId = queryString.split('=')[1];
let APIKEY = "k_tgoqrhd7"
let popularMoviesUrl = `https://imdb-api.com/en/API/MostPopularMovies/${APIKEY}`
let titleSearchUrl = `https://imdb-api.com/en/API/Title/${APIKEY}/${movieId}`
let youtubeUrl = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=&key=${YTAPIKEY}`

fetch(youtubeUrl, {

})
.then(function (response) {
    return response.json(); 
})
.then(function (data) {
    console.log(data.items[0].id.videoId)
    videoEl.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${data.items[0].id.videoId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`

})

fetch(titleSearchUrl, {

})
.then(function (response) {
    return response.json();
})
.then(function (data) {
    console.log(data)
    let movieImg = data.image
    movieImgEl.innerHTML = `<img src="${movieImg}">`
    let genre = data.genres
    genreEl.textContent = genre
    let actors = data.stars
    actorsEl.textContent = actors
    let director = data.directors
    directorEl.textContent = director
    let pgRating = data.contentRating
    pgRatingEl.textContent = pgRating
    let rating = data.imDbRating
    ratingEl.textContent = rating
    let runtime = data.runtimeStr
    runtimeEl.textContent = runtime
})
