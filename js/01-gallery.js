import { galleryItems } from "./gallery-items.js";
// Change code below this line
import * as basicLightbox from "./basiclightbox.min.js";
console.log(galleryItems);

// const basicLightbox = require("./basiclightbox");

const makeSingleImageMarkup = ({ preview, original, description }, index) => {
	return `<div class="gallery__item">
    <a class="gallery__link" 
        target="_blank"
        rel="noopener noreferrer" 
        href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>
	`;
};
const makeImagesGallery = galleryItems.map(makeSingleImageMarkup).join("");
// console.log(makeImagesGallery);

const galleryEl = document.querySelector(".gallery");
galleryEl.insertAdjacentHTML("afterbegin", makeImagesGallery);
galleryEl.addEventListener("click", OnGalleryClick);

function OnGalleryClick(event) {
	console.log(event.target.dataset.source);
	basicLightbox
		.create(
			`
		<img width="1280" src=${event.target.dataset.source} >
	`
		)
		.show();
}
