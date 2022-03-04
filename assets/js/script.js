const posters = document.querySelectorAll(".img");
const titles = document.querySelectorAll(".img");
const ids = document.querySelectorAll(".img");

let APIKEY = "k_8ges1rmu";
let popularMoviesUrl = `https://imdb-api.com/en/API/MostPopularMovies/${APIKEY}`;

fetch(popularMoviesUrl, {
  cache: "reload",
})
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    let movieData = [];

    for (let i = 0; i < 15; i++) {
      movieData.push(data.items[i]);
    }

    movieData.forEach((movie, i) => {
      posters[
        i
      ].innerHTML = `<a href = "./movieInfo.html?id=${movie.id}"><img src="${movie.image}"></a>`;
      let movieTitle = document.createElement("h5");
      movieTitle.textContent = movie.fullTitle;
      titles[i].append(movieTitle);
    });
  });

let watchQueue = JSON.parse(localStorage.getItem("movieList"));
for (let i = 0; i < watchQueue.length; i++) {
  $(".watchLater").append(
    "<li>" +
      '<button type="button" class="clear button alert removeMovie">' +
      watchQueue[i] +
      "</button>" +
      "</li>"
  );
}

function handleDeleteMovie(event) {
  console.log(event.target);
  let movieList = JSON.parse(localStorage.getItem("movieList"));
  let movie = event.target.textContent;

  movieList = movieList.filter(function (v) {
    return v !== movie;
  });

  localStorage.setItem("movieList", JSON.stringify(movieList));
  var btnClicked = $(event.target);
  btnClicked.parent("li").remove();
}

$(".watchLater").on("click", ".removeMovie", handleDeleteMovie);
