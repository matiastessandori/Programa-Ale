document.addEventListener("DOMContentLoaded", function () {
    var myCarousel = new bootstrap.Carousel(document.querySelector("#carouselExample"), {
        interval: 5000, // Cambia de imagen cada 5s (opcional)
        ride: "carousel"
    });
});