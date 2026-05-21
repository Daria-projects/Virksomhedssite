// ARRAY MED BILLEDER
const images = ["images/img_index/img_voresudvalg/blaa_buket.webp", "images/img_index/img_voresudvalg/blaabuket_giv.webp", "images/img_index/img_voresudvalg/blaabuket_kvinder.webp"];

// FIND ELEMENTER
const mainImage = document.querySelector(".main-image");
const leftArrow = document.querySelector(".arrow.left");
const rightArrow = document.querySelector(".arrow.right");
const thumbnails = document.querySelectorAll(".thumbnail-row img");

// START BILLEDE
let currentImage = 0;

// FUNKTION TIL AT VISE BILLEDE
function showImage(index) {
  mainImage.src = images[index];

  // Fjerner active fra alle thumbnails
  thumbnails.forEach((img) => img.classList.remove("active"));

  // Tilføjer active til nuværende
  thumbnails[index].classList.add("active");
}

// HØJRE PIL
rightArrow.addEventListener("click", () => {
  currentImage++;

  if (currentImage >= images.length) {
    currentImage = 0;
  }

  showImage(currentImage);
});

// VENSTRE PIL
leftArrow.addEventListener("click", () => {
  currentImage--;

  if (currentImage < 0) {
    currentImage = images.length - 1;
  }

  showImage(currentImage);
});

// KLIK PÅ THUMBNAILS
thumbnails.forEach((thumbnail, index) => {
  thumbnail.addEventListener("click", () => {
    currentImage = index;
    showImage(currentImage);
  });
});

// VIS FØRSTE ACTIVE
showImage(currentImage);
