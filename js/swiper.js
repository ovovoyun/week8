const swiper = new Swiper('.swiper', {
    autoplay: {
        delay: 5000,
    },
    breakpoints: {
        768: {
            autoplay: {
                enabled: false,
            }
        }
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});

const shareCardSwiper = new Swiper('.shareCardSwiper', {
    spaceBetween: 24,
    slidesPerView: 3,
    // Scrollbar
    scrollbar: {
        el: ".swiper-scrollbar", 
        draggable: true, 
    },
    mousewheel: true,
});