const slider = document.querySelector(".slider-container");
let mySwiper;
let state = false;

function mobileSlider() {      
    let tablet = window.matchMedia('(min-width: 768px'); 
    console.log("mobile slider");
    if (!tablet.matches && !state) {
        console.log('Slider ON') 
        mySwiper = new Swiper(slider, {
            slidesPerView: 1,
            spaceBetween: 1,
            loop: true, 
            slideClass: "swiper-slide",
        });
        state = true;
    } else { 
        if (mySwiper) {
            console.log("Destroy")
            mySwiper.destroy()
        } 


mobileSlider();

window.addEventListener("resize", () => {
    mobileSlider();
});




function mobileSlider() {      
    let tablet = window.matchMedia('(min-width: 768px'); 
    console.log("mobile slider");
    if (!tablet.matches && !state) {
        console.log('Slider ON') 
        mySwiper = new Swiper(slider, {
            slidesPerView: 1,
            spaceBetween: 1,
            loop: true, 
            slideClass: "swiper-slide",
        });
        state = true;
    } else { 
        if (mySwiper) {
            console.log("Destroy")
            mySwiper.destroy()
        } 


















/*if (window.innerWidth <= 768) {
    mySwiper = new Swiper(slider, {
    slidesPerView: 1,
    spaceBetween: 16,
    loop: true,
    pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },
})
}*/
