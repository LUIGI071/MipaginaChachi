const images = [
    { src: 'img/descartes2.jpg', name: 'René Descartes' },
    { src: 'img/descartes.jpg', name: 'René Descartes' },
    { src: 'img/descartes3.jpg', name: 'René Descartes' }
];
let currentImageIndex = 0;

const carouselImg = document.getElementById('carouselImg');
const authorName = document.getElementById('authorName');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// Actualiza la imagen y el nombre del autor
function updateImage() {
    carouselImg.src = images[currentImageIndex].src;
    authorName.textContent = images[currentImageIndex].name;
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
