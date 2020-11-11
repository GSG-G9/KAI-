const searchInput = document.getElementById("search-input");
const animesContainer = document.getElementById("animes-container");
const weatherDataContainer = document.getElementById("weather-data-container")
const showWeatherDataBtn = document.getElementById("show-weather-data-btn")

const singleMovieStructure = (response) => { 
  const singleAnimeContainer = document.createElement("div");
  const animeImage = document.createElement("img");
  const singleAnimeInfo = document.createElement("div");
  const animeTitle = document.createElement("p");
  const animeEpisodes = document.createElement("p");
  const animeRating = document.createElement("p");
  const animeDescription = document.createElement("p");
  const watchMe = document.createElement("a"); ///////////in css: shape it like a button 
  singleAnimeInfo.append(animeTitle, animeEpisodes, animeRating, animeDescription, watchMe);
  singleAnimeContainer.append(singleAnimeInfo, animeImage);
  animesContainer.appendChild(singleAnimeContainer)
  singleAnimeContainer.classList.add("sinle-anime-container")
  animeImage.classList.add("book-image");
  animeImage.src=`${response.image_url}` 
  singleAnimeInfo.classList.add("single-anime-info")
  animeTitle.classList.add("anime-title")
  animeTitle.innerHTML = `${response.name}`
  animeEpisodes.classList.add("anime-episodes")
  animeEpisodes.innerHTML = `${response.episodes}` 
  animeRating.classList.add("anime-rating")
  animeRating.innerHTML = `${response.rating}`
  animeDescription.classList.add("anime-description")
  animeDescription.innerHTML = `${response.description}`
  watchMe.classList.add("watch-me")
  watchMe.href = `${response.url}`;
  watchMe.innerText="WATCH ME!"
}

const renderAnimes = (data) => {
  data.results.forEach(item => { 
    singleMovieStructure(item)
});
}

if(!searchInput.value){
  getAnimeData("search", renderAnimes) /////////////////sercach?
} else {
  // search(searchInput.value, )
  // getAnimeData(searchInput.value, renderAnimes)
}




// const weatherStructure = () => {

// }

// const renderWeatherData = (response) => {} ///////////dom of weather/////////












