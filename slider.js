const slider = document.querySelector(".slider-container");
let mySwiper;
let state = false;
function mobileSlider() {
    let tablet = window.matchMedia('(min-width: 768px');
    console.log(state);
    if (!tablet.matches) {
        if (!state) {
            state = true;
            console.log('Slider ON')
            mySwiper = new Swiper(slider, {
                slidesPerView: 1,
                spaceBetween: 1,
                loop: true,
                slideClass: "swiper-slide",
            });
        }
    } else {
        if (mySwiper) {
            console.log("Destroy")
            mySwiper.destroy()
            state = false;
        }
    }
}
window.addEventListener('load', mobileSlider);
window.addEventListener("resize", mobileSlider);























