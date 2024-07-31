import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallerySL = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export function renderImages(images, galleryList) {
  const markup = images.hits
    .map(
      image => `
      <li>
        <a class="gallery-link" href=${image.largeImageURL}>
          <img src="${image.webformatURL}" alt="${image.tags}">
          <div>
            <p><span>Likes</span>${image.likes}</p>
            <p><span>Views</span>${image.views}</p>
            <p><span>Comments</span>${image.comments}</p>
            <p><span>Downloads</span>${image.downloads}</p>
          </div>
        </a>
      </li>`
    )
    .join('');

  galleryList.insertAdjacentHTML('beforeend', markup);

  gallerySL.refresh();
}
