
const posters = document.querySelectorAll('.img')

console.log(posters)

fetch("https://imdb-api.com/en/API/MostPopularMovies/k_tgoqrhd7", {
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
    let allMovies = data.items
    for (let i = 0; i < 15; i++) {
        const movie = allMovies[i];
        posterData.push(movie.image)
        console.log(movie)
        console.log(posterData)

    } 
    posterData.forEach((element, i) => posters[i].innerHTML = `<a href = "./movieInfo.html"><img src="${element}"></a>`) 
  })
    