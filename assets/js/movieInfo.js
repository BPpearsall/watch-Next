const movieNameEl = document.querySelector('#movie-name')
const movieImgEl = document.querySelector('#movieImg')
const moviePlotEl = document.querySelector('#moviePlot')
const genreEl = document.querySelector('#genre')
const actorsEl = document.querySelector('#actors')
const directorEl = document.querySelector('#director')
const pgRatingEl = document.querySelector('#pg-rating')
const ratingEl = document.querySelector('#rating')
const runtimeEl = document.querySelector('#runtime')
const videoEl = document.querySelector('.ytTrailer')

const saveBtn = document.querySelector('.btn')


let queryString = document.location.search;
let movieId = queryString.split('=')[1];
let APIKEY = "k_tgoqrhd7"
let popularMoviesUrl = `https://imdb-api.com/en/API/MostPopularMovies/${APIKEY}`
let titleSearchUrl = `https://imdb-api.com/en/API/Title/${APIKEY}/${movieId}`
let youtubeUrl = `https://www.googleapis.com/youtube/v3/search`

// fetch(youtubeUrl, {

// })
// .then(function (response) {
//     return response.json(); 
// })
// .then(function (data) {
//     videoEl.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`

// })

// let ytVid = document.createElement("iframe")
// ytVid.textContent;


fetch(titleSearchUrl, {

})
.then(function (response) {
    return response.json();
})
.then(function (data) {
    console.log(data)
    if (data.originalTitle === '') {
        let movieName = data.title
        movieNameEl.textContent = movieName
    } else {
        let movieName = data.originalTitle
        movieNameEl.textContent = movieName
    }
    

    if (data.image === null || '') {
        movieImgEl.innerHTML = `<p>No Information Given.</p>`
    } else {
        let movieImg = data.image
        movieImgEl.innerHTML = `<img src="${movieImg}">`    
    }

    if (data.plot === null || '') {
        moviePlotEl.textContent = "No Information Given"
    } else {
        let moviePlot = data.plot
        moviePlotEl.textContent = moviePlot    
    }
    
    if (data.genres === null || '') {
        genre.textContent = "No Information Given."
    } else {
        let genre = data.genres
        genreEl.textContent = genre
    }

    if (data.stars === null || '') {
        actorsEl.textContent = "No Information Given."
    } else {
        let actors = data.stars
        actorsEl.textContent = actors     
    }

    if (data.directors === null || '') {
        directorEl.textContent = "No Information Given."
    } else {
        let director = data.directors
        directorEl.textContent = director
    }

    if (data.contentRating === null || '') {
        pgRatingEl.textContent = "No Information Given."
    } else {
        let pgRating = data.contentRating
        pgRatingEl.textContent = pgRating
    }

    if (data.imDbRating === null || '') {
        ratingEl.textContent = "No Information Given."
    } else {
        let rating = data.imDbRating
        ratingEl.textContent = rating
    }
    
    if (data.runtimeStr === null || '') {
        runtimeEl.textContent = "No Information Given."
    } else {
        let runtime = data.runtimeStr
        runtimeEl.textContent = runtime
    }
    
    saveBtn.addEventListener("click", function(){
        localStorage.setItem("movielist", movieName)
    })
})
