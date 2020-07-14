const slider = document.querySelector(".slider-container");
let mySwiper;


function mobileSlider () {
    if (window.innerWidth < 768 && slider.dataset.mobile == "false") {
       mySwiper = new Swiper(slider, {
           slidesPerView: 1,
           spaceBetween: 16,
           loop: true,
           slideClass: "swiper-slide",
            
       });
        
       slider.dataset.mobile == "true";
    }
    if (window.innerWidth >= 768) {
        slider.dataset.mobile = "false";
        
        mySwiper.destroy();
    }
}

mobileSlider();

window.addEventListener("resize", () => {
    mobileSlider();
});























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
