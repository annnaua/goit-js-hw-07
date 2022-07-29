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

			return `
        <a class="gallery__item" href="${original}">
            <img class="gallery__image"
            src="${preview}"
            alt="${description}"  />
        </a>
        `;
		})
		.join('');
}

gallery.innerHTML = galleryMarkup;

// MODAL IMAGE

const galleryModal = new SimpleLightbox('.gallery a', {
	captionsData: 'alt',
	captionDelay: 250,
});
