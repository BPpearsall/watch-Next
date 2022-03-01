
const posters = document.querySelectorAll('.img') 
const titles = document.querySelectorAll('.img')
const ids = document.querySelectorAll('.img')

console.log(posters)

let APIKEY = "k_srm6hq6z"
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
    let posterData = []
    let titleData = []
    let idData = []
    let allMovies = data.items
    for (let i = 0; i < 15; i++) {
        const movie = allMovies[i];
        posterData.push(movie.image)
    } 
    for (let i = 0; i < 15; i++) {
      const movie = allMovies[i];
      titleData.push(movie.fullTitle)
    }
    for (let i = 0; i < 15; i++) {
      const movie = allMovies[i];
      idData.push(movie.id)
    }
    console.log(idData)
    console.log(titleData)
    console.log(posterData)
    posterData.forEach((element, i) => posters[i].innerHTML = `<a href = "./movieInfo.html?id=${}"><img src="${element}"></a>`) 
    titleData.forEach((element, i) => {
      let movieTitle = document.createElement('h5')
      movieTitle.textContent = element
      titles[i].append(movieTitle)
    });
    idData.forEach((element, i) => {
      let movieId = document.createAttribute('id')
      movieId.textContent = element
      ids[i].append(movieId)
    })
    
    






  });

    