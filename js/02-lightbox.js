import { galleryItems } from './gallery-items.js';

const galleryContainer = document.querySelector(".gallery");

const markup = galleryItems
    .map(item => {
        return `<a class="gallery__item" href="${item.original}">
          <img
            class="gallery__image"
            src="${item.preview}"
            alt="${item.description}"
          />
        </a>`
    })
    .join("");

galleryContainer.insertAdjacentHTML('beforeend', markup);

var lightbox = new SimpleLightbox('.gallery a', { 
    captions: true,
    captionType: 'attr',
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
 });


