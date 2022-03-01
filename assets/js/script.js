
const posters = document.querySelectorAll('.img') 
const titles = document.querySelectorAll('.img')
const ids = document.querySelectorAll('.img')

console.log(posters)

let APIKEY = "k_8ges1rmu"
let popularMoviesUrl = `https://imdb-api.com/en/API/MostPopularMovies/${APIKEY}`
let searchTerm = ""
let titleURL = `https://imdb-api.com/en/API/SearchMovie/${APIKEY}/${searchTerm}`

fetch(popularMoviesUrl, {
  // The browser fetches the resource from the remote server without first looking in the cache.
  // The browser will then update the cache with the downloaded resource.
  cache: 'reload',
})
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
    let movieData = []
    let allMovies = data.items
    
    for (let i = 0; i < 15; i++) {
      movieData.push(data.items[i]);
      
    }

    movieData.forEach((movie, i) => {
      console.log(movie)
      posters[i].innerHTML = `<a href = "./movieInfo.html?id=${movie.id}"><img src="${movie.image}"></a>` 
      let movieTitle = document.createElement('h5')
      movieTitle.textContent = movie.fullTitle
      titles[i].append(movieTitle)
    });
  




  })

  ;

    