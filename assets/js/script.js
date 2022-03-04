// set global variables to be called when creating custom movie images
const posters = document.querySelectorAll(".img");

/* 
backup api keys:
k_wncu636i - backup_burner
k_tgoqrhd7 - Marcus
k_8ges1rmu - Gabby
k_srm6hq6z - Blake
*/

// set global api key and popularmovies variable
let APIKEY = "k_8ges1rmu";
let popularMoviesUrl = `https://imdb-api.com/en/API/MostPopularMovies/${APIKEY}`;


// Fetch imdb api
fetch(popularMoviesUrl, {
  cache: "reload",
})
// returns the api response into JSON
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    let movieData = [];
    // for loop that runs through the first 15 of 100 results ands adds them to the movieData empty array
    for (let i = 0; i < 15; i++) {
      movieData.push(data.items[i]);
    }
    // for each movieData, JS will dynamically create a clickable image with the movie.image from imdb and will push the movieID to the URL
    movieData.forEach((movie, i) => {
      posters[i].innerHTML = `<a href = "./movieInfo.html?id=${movie.id}"><img src="${movie.image}"></a>`;
      // Creates the movie titles h5 tag and appends the full titles to the bottom of each img src
      let movieTitle = document.createElement("h5");
      movieTitle.textContent = movie.fullTitle;
      posters[i].append(movieTitle);
    })
      .catch(function (err) {
        console.error(err);
      });
  });

  // Getting the watchList from local storage
let watchQueue = JSON.parse(localStorage.getItem("movieList"));
// for each item in the watchQueue from watchList, appends a button that can be removed for each of the movies in local storage
for (let i = 0; i < watchQueue.length; i++) {
  $(".watchLater").append("<li>" + '<button type="button" class="clear button alert removeMovie">' + watchQueue[i] + "</button>" + "</li>"
  );
}
// Function that allows the user to remove a specific movie from the watchlist onclick. removes both the button and the item from local storage
function handleDeleteMovie(event) {
  let movieList = JSON.parse(localStorage.getItem("movieList"));
  let movie = event.target.textContent;

  movieList = movieList.filter(function (v) {
    return v !== movie;
  });

  localStorage.setItem("movieList", JSON.stringify(movieList));
  var btnClicked = $(event.target);
  btnClicked.parent("li").remove();
}

// eventHandler for calling handleDeleteMovie Function
$(".watchLater").on("click", ".removeMovie", handleDeleteMovie);
