export default function initSwiper() {
    let swiper = new Swiper('.swiper-container', {
        slidesPerView: 'auto',
        spaceBetween: 48,
        grabCursor: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            type: 'progressbar',
        },
        navigation: {
            nextEl: '.button-next',
            prevEl: '.button-prev',
        },
    });
}
