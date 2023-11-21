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
        }, 1000);

        setTimeout(() => {
          !scrollableWrapper.classList.contains('stage-3') && scrollableWrapper.classList.add('stage-3');
        }, 2000);
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

// Cookies

// Create cookie
function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  let expires = 'expires='+ d.toUTCString();
  document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
}

// Delete cookie
function deleteCookie(cname) {
  const d = new Date();
  d.setTime(d.getTime() + (24*60*60*1000));
  let expires = 'expires='+ d.toUTCString();
  document.cookie = cname + '=;' + expires + ';path=/';
}

// Read cookie
function getCookie(cname) {
  let name = cname + '=';
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
          c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
      }
  }
  return '';
}

// Set cookie consent
function acceptCookieConsent() {
  deleteCookie('user_cookie_consent');
  setCookie('user_cookie_consent', 1, 30);
  cookieModal.classList.remove('active');
}

// modals
let cookie_consent = getCookie('user_cookie_consent');
const cookieModal = document.getElementById('cookieNotice');

if (cookie_consent != '') {
  cookieModal.classList.remove('active');
} else {
  cookieModal.classList.add('active');
}

document.querySelectorAll('.modal-close').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.modal').forEach(modal => {
      modal.classList.remove('active');
    });
  });
});
document.querySelectorAll('.modal-overlay').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.modal').forEach(modal => {
      modal.classList.remove('active');
    });
  });
});

// welcome video
const responsiveVideo =  document.querySelectorAll('.responsive-video');
if (responsiveVideo) {
  function addSourceToVideo(element, src) {
      let source = document.createElement('source');
      source.src = src;
      source.type = 'video/mp4';
      console.log(src);
      element.appendChild(source);

  }

  function whichSizeVideo(element, src) {
    var windowWidth = window.innerWidth ? window.innerWidth : $(window).width();
    if (windowWidth > 767 ) {
      addSourceToVideo( element, src.dataset.desktopVid);
    } else {
      addSourceToVideo(element, src.dataset.mobileVid);
    }
  }

  function videoSize() {
    if (responsiveVideo !== undefined) {
      responsiveVideo.forEach(function(element, index) {
        whichSizeVideo(
          element, //element
          element  //src locations
        );
      });
    }
  }
  videoSize();
}