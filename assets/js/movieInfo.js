const movieNameEl = document.querySelector("#movie-name");
const movieImgEl = document.querySelector("#movieImg");
const moviePlotEl = document.querySelector("#moviePlot");
const genreEl = document.querySelector("#genre");
const actorsEl = document.querySelector("#actors");
const directorEl = document.querySelector("#director");
const pgRatingEl = document.querySelector("#pg-rating");
const ratingEl = document.querySelector("#rating");
const runtimeEl = document.querySelector("#runtime");
const videoEl = document.querySelector(".ytTrailer");
const tabName = document.querySelector(".tabTitle")

// variable for youtube API key
let YTAPIKEY = "AIzaSyDhAWmGdli7aV1KD7OXlZjAyOvgnzL9RZk";
const saveBtn = document.querySelector(".button");
// creates variable to store the name of the movie that the user wants on their list
let watchList = JSON.parse(localStorage.getItem("movieList"))
  ? JSON.parse(localStorage.getItem("movieList"))
  : [];

let queryString = document.location.search;
let movieId = queryString.split("=")[1];
let APIKEY = "k_8ges1rmu";
let popularMoviesUrl = `https://imdb-api.com/en/API/MostPopularMovies/${APIKEY}`;
let titleSearchUrl = `https://imdb-api.com/en/API/Title/${APIKEY}/${movieId}`;

fetch(titleSearchUrl, {})
  .then(function (response) {
    return response.json();
  })
  // function checks to see if title is available other wise it will ues original title
  .then(function (data) {
    if (data.originalTitle === "") {
      let movieName = data.title;
      movieNameGlobal = movieName;
      movieNameEl.textContent = movieName;
      // dynamic title for page
      tabName.textContent= `${movieName} | WatchNext "`
      //some movies had foreign names listed under title and had a second name in original title that was in english
    } else {
      let movieName = data.originalTitle;
      movieNameGlobal = movieName;
      movieNameEl.textContent = movieName;
    }
    // posts information on page, if none is available error msg is shown instead
    if (data.image === null || "") {
      movieImgEl.innerHTML = `<p>No Information Given.</p>`;
    } else {
      let movieImg = data.image;
      movieImgEl.innerHTML = `<img src="${movieImg}">`;
    }

    if (data.plot === null || "") {
      moviePlotEl.textContent = "No Information Given";
    } else {
      let moviePlot = data.plot;
      moviePlotEl.textContent = moviePlot;
    }

    if (data.genres === null || "") {
      genre.textContent = "No Information Given.";
    } else {
      let genre = data.genres;
      genreEl.textContent = genre;
    }

    if (data.stars === null || "") {
      actorsEl.textContent = "No Information Given.";
    } else {
      let actors = data.stars;
      actorsEl.textContent = actors;
    }

    if (data.directors === null || "") {
      directorEl.textContent = "No Information Given.";
    } else {
      let director = data.directors;
      directorEl.textContent = director;
    }

    if (data.contentRating === null || "") {
      pgRatingEl.textContent = "No Information Given.";
    } else {
      let pgRating = data.contentRating;
      pgRatingEl.textContent = pgRating;
    }

    if (data.imDbRating === null || "") {
      ratingEl.textContent = "No Information Given.";
    } else {
      let rating = data.imDbRating;
      ratingEl.textContent = rating;
    }

    if (data.runtimeStr === null || "") {
      runtimeEl.textContent = "No Information Given.";
    } else {
      let runtime = data.runtimeStr;
      runtimeEl.textContent = runtime;
    }
    // button saves movie to the users watch list in local storage.
    saveBtn.addEventListener("click", function () {
      let movieName = movieNameEl.textContent;
      watchList.push(movieName);
      window.localStorage.setItem("movieList", JSON.stringify(watchList));
    });
    let movieNoSpace = movieNameEl.textContent;
    movieNoSpace = movieNoSpace.split(" ").join("");
    // gets trailer from verified channel by using movie title
    let youtubeUrl = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${movieNoSpace}%20trailer=&key=${YTAPIKEY}`;
    fetch(youtubeUrl, {})
      .then(function (response) {
        return response.json();
      })
      // puts the trailer on the page using embed link
      .then(function (data) {
        videoEl.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${data.items[0].id.videoId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
      });
  });
  // code for collapsible menu
let collapsibleMenu = document.getElementsByClassName("collapsible");
let i;

for (i = 0; i < collapsibleMenu.length; i++) {
  collapsibleMenu[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
