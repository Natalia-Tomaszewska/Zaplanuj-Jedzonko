document.addEventListener("DOMContentLoaded", function () {

    const track = document.querySelector(".carousel__track");
    const slides = document.querySelectorAll(".carousel__slide");
    const next = document.querySelector(".carousel__next");
    const prev = document.querySelector(".carousel__prev");

    const moveSlide = (currentSlide, targetSlide) => {
        currentSlide.classList.remove("current-slide");
        targetSlide.classList.add("current-slide");
    }
    // moving slides right after clicking next button
    next.addEventListener("click", () => {
        const currentSlide = track.querySelector(".current-slide");
        const nextSlide = currentSlide.nextElementSibling;
        const firstSlide = track.firstElementChild;
        if (!nextSlide) {
            moveSlide(currentSlide, firstSlide);
        } else {
            moveSlide(currentSlide, nextSlide);
        }
    });
    // moving slides left after clicking prev button
    prev.addEventListener("click", () => {
        const currentSlide = track.querySelector(".current-slide");
        const prevSlide = currentSlide.previousElementSibling;
        const lastSlide = track.lastElementChild;
        if (!prevSlide) {
            moveSlide(currentSlide, lastSlide);
        } else {
            moveSlide(currentSlide, prevSlide);
        }
    });
});