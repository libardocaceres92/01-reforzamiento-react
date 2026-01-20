import type { GiphyRandomResonse , Gif} from "../data/giphy.response";

const API_KEY = 'YZQinCoOKN9wZwRwtIPdIArwuU35sCST';
const myRequest = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=&rating=g`);

const createImageInsideDOM = (url: string) => {
  const imgElement = document.createElement('img');
  imgElement.src = url;
  document.body.appendChild(imgElement);
}


myRequest
  .then((response) => response.json())
  .then(({data}: GiphyRandomResonse) => {

    const imageUrl = data.images.original.url;

    createImageInsideDOM(imageUrl);
  })
  .catch((error) => {
    console.log('Error occurred:', error);
  });