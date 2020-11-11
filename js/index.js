const searchInput = document.getElementById("search-input");
const animesContainer= document.getElementById("animes-container-removal");
const switchToBooksBtn = document.getElementById("switch-to-books");
const switchToAnimeBtn = document.getElementById("switch-to-anime");
const weatherDataContainer = document.getElementById("weather-data-container")
const showWeatherDataBtn = document.getElementById("show-weather-data-btn")



const singleItemStructure = (response) => { 
  const singleAnimeContainer = document.createElement("div");
  const animeImage = document.createElement("img");
  const singleAnimeInfo = document.createElement("div");
  const animeTitle = document.createElement("p");
  const animeEpisodes = document.createElement("p");
  const animeRating = document.createElement("p");
  const animeDescription = document.createElement("p");
  const watchMe = document.createElement("a");
  watchMe.href = `${response.url}`;
  watchMe.appendChild(animeImage)
  singleAnimeInfo.append(animeTitle, animeEpisodes, animeRating, animeDescription);
  singleAnimeContainer.append(singleAnimeInfo, watchMe);
  animesContainer.appendChild(singleAnimeContainer)
  singleAnimeContainer.classList.add("single-anime-container")
  animeImage.classList.add("book-image");
  animeImage.src=`${response.image_url}` 
  singleAnimeInfo.classList.add("single-anime-info")
  animeTitle.classList.add("anime-title")
  animeTitle.innerText = `${response.name}`
  animeEpisodes.classList.add("anime-episodes")
  animeEpisodes.innerText = `${response.episodes}` 
  animeRating.classList.add("anime-rating")
  animeRating.innerText = `${response.rating}`
  animeDescription.classList.add("anime-description")
  animeDescription.innerText = `${response.description}`
}

const renderData = (data) => {
  data.forEach(item => { 
    singleItemStructure(item)
});
}

const renderAnime = () => {
  getAnimeData("search", renderData);
}
const renderBooks = () => {
  animesContainerRemoval.parentNode.removeChild(animesContainerRemoval);
  getBookData("search", renderData);
}
switchToBooksBtn.addEventListener('click', function() {
  singleAnimeContainer.parentNode.removeChild(singleAnimeContainer);
  renderBooks();
  
});
switchToAnimeBtn.addEventListener('click', function() {
  renderAnime();

  
});


  


// searchInput.addEventListener('keypress', function (e) {
//   let animeName = e.target.value;
//   (e.key === 'Enter') && getAnimeData( animeName, renderAnimes );
  
// });





// const weatherStructure = () => {

// }

// const renderWeatherData = (response) => {} ///////////dom of weather/////////













const dataProcessAnime = (data) => {
    return data.results.map((item) => ({
      name: item.title,
      image_url: item.image_url,
      description: item.synopsis,
      url: item.url,
      episodes: item.episodes,
      rating: item.score,
    }));
  };
  
  const dataProcessBook = (data) => {
    return data.items.map((item) => ({
      name: item.volumeInfo.title,
      image_url: item.volumeInfo.imageLinks.thumbnail,
      description: item.volumeInfo.description,
      url: item.volumeInfo.infoLink,
      rating: item.volumeInfo.averageRating,
    }));
  };
  
  const getAnimeData = (search, callBack) => {
    let url = `https://api.jikan.moe/v3/search/anime?q=${search}`;
    fetch(url, (data) => {
      callBack(dataProcessAnime(data));
    });
  };
  
  const getBookData = (search, callBack) => {
    let url = `https://www.googleapis.com/books/v1/volumes?q=${search}`;
    fetch(url, (data) => {
      callBack(dataProcessBook(data));
    });
  };
  
