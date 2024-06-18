const carouselInner = document.querySelector('.carousel-inner');
const cards = document.querySelectorAll('.card');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let currentCardIndex = 0;

prevButton.addEventListener('click', () => {
  currentCardIndex--;
  updateCarousel();
});

nextButton.addEventListener('click', () => {
  currentCardIndex++;
  updateCarousel();
});

function updateCarousel() {
  const cardWidth = cards[0].offsetWidth;
  const translateX = currentCardIndex * cardWidth;
  carouselInner.style.transform = `translateX(-${translateX}px)`;
}

updateCarousel();