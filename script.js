let currentIndex = 0;
const slides = document.querySelectorAll('.carousel-images img');
const totalSlides = slides.length;
const slideInterval = 3000; // Intervalo de 3 segundos para mudança automática

function moveSlide(step) {
    currentIndex = (currentIndex + step + totalSlides) % totalSlides;
    const offset = -currentIndex * 100;
    document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;
}

function autoPlay() {
    moveSlide(1); // Avança para o próximo slide
}

// Inicia o carrossel automático
setInterval(autoPlay, slideInterval);

// Adiciona a funcionalidade dos botões
document.querySelector('.prev').addEventListener('click', () => moveSlide(-1));
document.querySelector('.next').addEventListener('click', () => moveSlide(1));
