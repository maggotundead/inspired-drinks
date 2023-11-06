document.querySelector('.burger-btn').addEventListener('click', () => {
    document.querySelector('body').classList.toggle('mobile-menu-open');
});


const blockProduct = document.querySelector('.block-product');
if (blockProduct) {
    const productSwiper = blockProduct.querySelector('.swiper-container');

    new Swiper(productSwiper, {
        direction: 'vertical',
        loop: false,
        effect: 'slide',
        navigation: {
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
        },
    });
}
