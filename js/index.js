const searchInput = document.getElementById("search-input");
const animesContainer = document.getElementById("books-container");
const switchToBooksBtn = document.getElementById("switch-to-books");
const switchToAnimeBtn = document.getElementById("switch-to-anime");
const weatherDataContainer = document.getElementById("weather-data-container")
const showWeatherDataBtn = document.getElementById("show-weather-data-btn");

const dataProcessAnime = (data) => {
  return data.results.map((item) => ({
    name: item.title,
    image_url: item.image_url,
    description: item.synopsis,
    url: item.url,
    rating: item.score,
    episodes: item.episodes
  }));
};

const dataProcessBook = (data) => {
  return data.items.map((item) => ({
    name: item.volumeInfo.title,
    image_url: item.volumeInfo.imageLinks.thumbnail,
    description: item.volumeInfo.description.slice(0, 270),
    url: item.volumeInfo.infoLink,
    rating: item.volumeInfo.averageRating,
  }));
};

const getAnimeData = (search = "no game no life", callBack) => {
  search = search ? search : "nogame no life";
  let url = `https://api.jikan.moe/v3/search/anime?q=${search}`;
  fetch(url, (data) => {
    callBack(dataProcessAnime(data));
  });
};

const getBookData = (search, callBack) => {
  search = search ? search : "nogame no life";
  let url = `https://www.googleapis.com/books/v1/volumes?q=${search}`;
  fetch(url, (data) => {
    callBack(dataProcessBook(data));
  });
};


const weatherData = (result) => {
  return {
    name_city: result.name,
    name_country: result.sys.country,
    description: result.weather[0].description,
    icon: result.weather[0].icon,
    wind: result.wind,
    temp: result.main.temp,
    clouds: result.clouds,
    visibility: result.visibility,
    humidity: result.main.humidity,
  };
};

let url = `http://api.openweathermap.org/data/2.5/weather?q=gaza&appid=${api_key} `;

const getWeather = (i) => {
  console.log(i);
}

const singleItemStructure = (response) => {
  const singleAnimeContainer = document.createElement("div");
  singleAnimeContainer.classList.add("single-anime-container")
  const animeImage = document.createElement("img");
  animeImage.src = `${response.image_url}`
  const watchMe = document.createElement("a");
  watchMe.href = response.url;
  const animeTitle = document.createElement("p");
  animeTitle.innerText = response.name
  const singleAnimeInfo = document.createElement("div");
  singleAnimeInfo.classList.add("info")
  const animeEpisodes = document.createElement("p");
  animeEpisodes.innerText = response.episodes ? response.episodes : "";
  const animeRating = document.createElement("p");
  animeRating.innerText = `Rating: ${response.rating ? response.rating : "5"}`
  const animeDescription = document.createElement("p");
  animeDescription.innerText = `Description: ${response.description}`
  singleAnimeInfo.append(animeEpisodes, animeRating, animeDescription);
  watchMe.append(animeImage, singleAnimeInfo)
  singleAnimeContainer.append(watchMe, animeTitle);
  animesContainer.appendChild(singleAnimeContainer)
}

const renderData = (data) => {
  data.forEach(item => {
    singleItemStructure(item)
  });
}


function makeEvent(fun) {
  fun.addEventListener('click', () => {
    makeEmpty()
    getAnimeData(searchInput.value, renderData);
  });
}

const makeEmpty = () => {
  let blockArr = document.querySelectorAll(".single-anime-container")
  blockArr.forEach(item => {
    item.remove()
  })
}

getBookData("no game no life", renderData);
fetch(url, (data) => getWeather(weatherData(data)));
makeEvent(switchToBooksBtn);
makeEvent(switchToAnimeBtn);