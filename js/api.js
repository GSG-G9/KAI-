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
        rating: item.volumeInfo.averageRating
    }))
}

const getAnimeData = (search, callBack) => {
  let url = `https://api.jikan.moe/v3/search/anime?q=${search}`;
  fetch(url, (data) => {
    callBack(dataProcessAnime(data));
  });
};


const getBookData = (search, callBack) => {
    let url = `https://www.googleapis.com/books/v1/volumes?q=${search}`
    fetch(url, (data) => {
        callBack(dataProcessBook(data))
    })
}

getBookData("no game no life", (data)=>{
    console.log(data);
    data.forEach(element => {
        console.log(element);
    });
})

