let readMore = document.querySelector(".read-more");
let slides = document.querySelectorAll(".swiper-slide");
let icon = document.querySelector(".read-more__icon");
readMore.addEventListener("click", function() {
    if (readMore.textContent === "Показать всё") {
        for (let i = 0; i < slides.length; i++) {
            slides[i].classList.remove("hidden");
            readMore.textContent = "Скрыть";
        }
    } else {
        for (let i = 6; i < slides.length; i++) {
            slides[i].classList.add("hidden");
            readMore.textContent = "Показать всё";
        }
      }
    icon.classList.toggle("rotate");
});