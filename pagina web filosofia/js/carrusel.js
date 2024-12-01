const images = [
  { src: 'img/descartes2.jpg', name: 'René Descartes', link: 'descartes2.html' },
  { src: 'img/descartes.jpg', name: 'René Descartes', link: 'descartes.html' },
  { src: 'img/descartes3.jpg', name: 'René Descartes', link: 'descartes3.html' }
];
let currentImageIndex = 0;

const carouselImg = document.getElementById('carouselImg');
const authorName = document.getElementById('authorName');
const viewMoreLink = document.getElementById('viewMoreLink');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// Actualiza la imagen, el nombre del autor y el enlace "Ver más"
function updateImage() {
  const currentImage = images[currentImageIndex];
  carouselImg.src = currentImage.src;
  authorName.textContent = currentImage.name;
  viewMoreLink.href = currentImage.link; // Actualiza el enlace
  prevBtn.disabled = currentImageIndex === 0;
  nextBtn.disabled = currentImageIndex === images.length - 1;
}

prevBtn.addEventListener('click', () => {
  currentImageIndex--;
  updateImage();
});

nextBtn.addEventListener('click', () => {
  currentImageIndex++;
  updateImage();
});

// Inicializa el carrusel
updateImage();
