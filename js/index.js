
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
  