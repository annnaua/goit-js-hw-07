import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery');
const galleryMarkup = createGalleryMarkup(galleryItems);

// GALLERY MARKUP

function createGalleryMarkup(galleryItems) {
	return galleryItems
		.map((properties) => {
			const { preview, original, description } = properties;

			return `<div class="gallery__item">
              <a class="gallery__link" href="large-image.jpg">
                <img
                  class="gallery__image"
                  src="${preview}"
                  data-source="${original}"
                  alt= ${description}
                />
              </a>
            </div>`;
		})
		.join('');
}

gallery.innerHTML = galleryMarkup;

// EVENT LISTENERS

gallery.addEventListener('click', onImageClick);

function onImageClick(e) {
	e.preventDefault();

	if (e.target.nodeName !== 'IMG') {
		return;
	}

	const instance = basicLightbox.create(`
    <img src="${e.target.dataset.source}" width="800" height="600">
  `);

	instance.show();

	gallery.addEventListener('keydown', onEscKeyPress);

	function onEscKeyPress(e) {
		if (e.code === 'Escape') {
			instance.close();
		}
	}
}
