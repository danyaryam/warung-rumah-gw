let index = 0;

function showNextSlide() {
    const slides = document.querySelectorAll('.carousel-item');
    index = (index + 1) % slides.length;
    document.querySelector('.carousel-inner').style.transform = `translateX(-${index * 1200}px)`;
}

setInterval(showNextSlide, 3000); // Change slide every 3 seconds
