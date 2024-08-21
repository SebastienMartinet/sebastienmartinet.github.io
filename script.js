// script.js

document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector('.header');
    const images = [
        '../imgs/header.jpg',
        '../imgs/Output_10_35.svg',
        '../imgs/header_old.jpg'
    ];
    let currentIndex = 0;

    function changeBackgroundImage() {
        currentIndex = (currentIndex + 1) % images.length;
        header.style.backgroundImage = `linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${images[currentIndex]})`;
    }

    // Change image every 5 seconds (5000 milliseconds)
    setInterval(changeBackgroundImage, 5000);
});
