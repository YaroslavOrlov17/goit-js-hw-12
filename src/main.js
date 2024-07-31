import { fetchImages } from './js/pixabay-api';
import { renderImages } from './js/render-function';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import axios from 'axios';

const form = document.querySelector('.form');
const input = document.querySelector('.input');
const galleryList = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const fetchImagesBtn = document.querySelector('.btn');
let inputValue;
let page = 1;
let limit = 100;
let totalPages = 0;

function handleSubmit(event) {
  event.preventDefault();

  fetchImagesBtn.classList.add('visually-hidden');
  galleryList.innerHTML = '';
  loader.classList.remove('visually-hidden');

  inputValue = input.value.trim();

  if (inputValue === '') {
    loader.classList.add('visually-hidden');
    return;
  }

  page = 1;

  fetchImages(inputValue, page)
    .then(images => {
      totalPages = Math.ceil(images.totalHits / limit);
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
        renderImages(images, galleryList);
        if (page < totalPages) {
          fetchImagesBtn.classList.remove('visually-hidden');
        }
      }
    })
    .catch(error => {
      iziToast.error({
        maxWidth: '370px',
        position: 'topRight',
        messageColor: 'white',
        backgroundColor: 'red',
        message: 'Request feiled. Please try again',
      });
      loader.classList.add('visually-hidden');
    });

  form.reset();
}

async function handleClick(event) {
  page += 1;

  const newPage = await fetchImages(inputValue, page);
  renderImages(newPage, galleryList);

  const firstCard = document.querySelector('.gallery li');
  const cardHeight = firstCard.getBoundingClientRect().height;
  window.scrollBy({
    top: cardHeight * 2,
    behavior: 'smooth',
  });

  if (page >= totalPages) {
    fetchImagesBtn.classList.add('visually-hidden');
    return iziToast.error({
      position: 'topRight',
      message: "We're sorry, there are no more posts to load",
    });
  }
}

form.addEventListener('submit', handleSubmit);
fetchImagesBtn.addEventListener('click', handleClick);
