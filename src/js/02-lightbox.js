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

			return `<a class="gallery__link" href="${original}">
                <img
                  class="gallery__image"
                  src="${preview}"
                  alt= ${description}
                />`;
		})
		.join('');
}

gallery.innerHTML = galleryMarkup;

// MODAL IMAGE

// const options = {
// 	captionsData: 'alt',
// 	captionDelay: 250,
// };

function openModalImage({ options }) {
	return new SimpleLightbox('.gallery a', options);
}

// openModalImage(options);
openModalImage({
	captionsData: 'alt',
	captionDelay: 250,
});
