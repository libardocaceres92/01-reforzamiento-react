const API_KEY = 'YZQinCoOKN9wZwRwtIPdIArwuU35sCST';
const myReque = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=&rating=g`);

myReque
  .then((response) => response.json())
  .then((data) => {
    const imgUrl = data.data.images.original.url;
    console.log(imgUrl);

    const imgElement = document.createElement('img');
    imgElement.src = imgUrl;
    document.body.appendChild(imgElement);
  })
  .catch((error) => {
    console.log('Error occurred:', error);
  });