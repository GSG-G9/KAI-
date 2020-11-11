const fetch = (url, callBack) => {
  let xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState == 4) {
      if (xhr.status == 200) {
        callBack(JSON.parse(xhr.responseText));
      } else {
        handlError(`internal error , ${xhr.status}${xhr.responseText}`);
      }
    }
  };
  xhr.open("GET", url);
  xhr.send(null);
};

function handlError(data) {
  document.getElementById("error").textContent = data;
}

