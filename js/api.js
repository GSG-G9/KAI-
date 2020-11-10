const fetch = (url, callBack) => {
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState == 4) {
      if (xhr.status == 200) {
        callBack(JSON.parse(xhr.responseText));
      } else {
        console.log("error");
      }
    }
  };
  xhr.open("GET", url);
  xhr.send(null);
};

const dataProses = (data) => {
  return data.results.map((item) => ({
    name: item.title,
    image_url: item.image_url,
    description: item.synopsis,
    url: item.url,
    episodes: item.episodes,
    rating: item.score,
  }));
};

const getAnimeData = (search, callBack) => {
  let url = `https://api.jikan.moe/v3/search/anime?q=${search}`;
  fetch(url, (data) => {
    callBack(dataProses(data));
  });
};

