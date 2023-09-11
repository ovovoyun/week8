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
    slidesPerView: "auto",
    direction: "vertical",
    keyboard: {
        enabled: true,
    },
    breakpoints: {
        1200: {
            slidesPerView: 3,
            direction: "horizontal",
        },
        992: {
            slidesPerView: 2,
            direction: "horizontal",
        },
        768: {
            slidesPerView: 1,
            direction: "horizontal",
        },
    },
    scrollbar: {
        el: ".swiper-scrollbar",
        draggable: true, 
    },
});