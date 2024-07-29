import { fetchImages } from './js/pixabay-api';
import { renderImages } from './js/render-function';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const input = document.querySelector('.input');
const galleryList = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

function handleSubmit(event) {
  event.preventDefault();
  galleryList.innerHTML = '';
  loader.classList.remove('visually-hidden');

  const inputValue = input.value.trim();
  if (inputValue === '') {
    loader.classList.add('visually-hidden');
    return;
  }

  fetchImages(inputValue)
    .then(images => {
      loader.classList.add('visually-hidden');
      if (images.hits.length === 0) {
        iziToast.error({
          maxWidth: '370px',
          position: 'topRight',
          messageColor: 'white',
          backgroundColor: 'red',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
      } else {
        loader.classList.add('visually-hidden');
        renderImages(images, galleryList);
      }
    })
    .catch(error => {
      console.error(error);
    });

  form.reset();
}

form.addEventListener('submit', handleSubmit);
