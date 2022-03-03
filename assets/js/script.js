const posters = document.querySelectorAll(".img");
const titles = document.querySelectorAll(".img");
const ids = document.querySelectorAll(".img");

let APIKEY = "k_tgoqrhd7"
let popularMoviesUrl = `https://imdb-api.com/en/API/MostPopularMovies/${APIKEY}`

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
      posters[i].innerHTML = `<a href = "./movieInfo.html?id=${movie.id}"><img src="${movie.image}"></a>`;
      let movieTitle = document.createElement("h5");
      movieTitle.textContent = movie.fullTitle;
      titles[i].append(movieTitle);
      
    });
  });


  let watchQueue = JSON.parse(localStorage.getItem("movieList"))
  for (let i = 0; i < watchQueue.length; i++) {
    $('.watchLater').append('<li>' + '<a class="small button" href="#0">' + watchQueue[i] + '</a>' + '</li>')
  }



