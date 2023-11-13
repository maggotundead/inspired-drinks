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
        speed: 800,
        navigation: {
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
        },
    });
}

const blockSustainable = document.querySelector('.block-sustainable');
if (blockSustainable) {
  function Marquee(selector, speed) {
    const parentSelector = document.querySelector(selector);
    const clone = parentSelector.innerHTML;
    const firstElement = parentSelector.children[0];
    let i = 0;
    // console.log(firstElement);
    parentSelector.insertAdjacentHTML('beforeend', clone);
    parentSelector.insertAdjacentHTML('beforeend', clone);

    setInterval(function () {
      firstElement.style.marginLeft = `-${i}px`;
      if (i > firstElement.clientWidth) {
        i = 0;
      }
      i = i + speed;
    }, 0);
  }

  window.addEventListener('load', Marquee('.marquee', 0.8));
}


const blockMinerals = document.querySelector('.block-water-minerals');
if (blockMinerals) {
  const scrollableWrapper = blockMinerals.querySelector('.scrollable-wrapper');

  let blockOffsetTop = blockMinerals.offsetTop;
  let visualInitialOffset = window.outerHeight / 2;
  let visualOffset = window.outerHeight / 4;
  let lastScrollTop = 0;

  window.addEventListener('scroll', function() {
    let st = window.pageYOffset || document.documentElement.scrollTop;

    // console.log(`blockOffsetTop ${blockOffsetTop}, st ${st}, visualOffset ${ visualOffset}`);

    if (st > lastScrollTop) {
      // console.log('down');

      // if ( st > blockOffsetTop - visualInitialOffset ) {
      //   !scrollableWrapper.classList.contains('stage-1') && scrollableWrapper.classList.add('stage-1');
      // }
      // if ( st > blockOffsetTop - visualOffset) {
      //   !scrollableWrapper.classList.contains('stage-2') && scrollableWrapper.classList.add('stage-2');
      // }
      // if ( st > blockOffsetTop ) {
      //   !scrollableWrapper.classList.contains('stage-3') && scrollableWrapper.classList.add('stage-3');
      // }

      if ( st > blockOffsetTop - visualOffset ) {
        !scrollableWrapper.classList.contains('stage-1') && scrollableWrapper.classList.add('stage-1');

        setTimeout(() => {
          !scrollableWrapper.classList.contains('stage-2') && scrollableWrapper.classList.add('stage-2');
        }, 2000);

        setTimeout(() => {
          !scrollableWrapper.classList.contains('stage-3') && scrollableWrapper.classList.add('stage-3');
        }, 4000);
      }
    }
    // else if (st < lastScrollTop) {
    //   // console.log('up');

    //   if ( st < blockOffsetTop - visualInitialOffset  ) {
    //     scrollableWrapper.classList.contains('stage-1') && scrollableWrapper.classList.remove('stage-1');
    //   }
    //   if ( st < blockOffsetTop - visualOffset ) {
    //     scrollableWrapper.classList.contains('stage-2') && scrollableWrapper.classList.remove('stage-2');
    //   }
    //   if ( st < blockOffsetTop ) {
    //     scrollableWrapper.classList.contains('stage-3') && scrollableWrapper.classList.remove('stage-3');
    //   }
    // }

    lastScrollTop = st <= 0 ? 0 : st;
  }, false);
}
