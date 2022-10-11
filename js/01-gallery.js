import { galleryItems } from './gallery-items.js';

const galleryContainer = document.querySelector(".gallery");

const markup = galleryItems
    .map(item => {
        return `<div class="gallery__item">
        <a class="gallery__link" href="${item.original}">
          <img
            class="gallery__image"
            src="${item.preview}"
            data-source="${item.original}"
            alt="${item.description}"
          />
        </a>
      </div>`
    })
    .join("");

galleryContainer.insertAdjacentHTML('beforeend', markup);


galleryContainer.addEventListener("click", (event) => {
    event.preventDefault(); 
    if (event.target.nodeName !== "IMG") {
        return
    }
    
    const instance = basicLightbox.create(`
    <img
    class="gallery__image"
    src="${event.target.dataset.source}"
    alt="${event.target.alt}"
  />
    `);
    instance.show();
    window.addEventListener("keydown", (event) => {
        if (event.code === 'Escape') {
            instance.close()
            console.log(event.code);
        } 
    }, {once: true});
});

