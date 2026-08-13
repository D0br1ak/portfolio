// Бургер
(function () {

  document.addEventListener('click', burgerInit)

  function burgerInit(e) {

    const burgerIcon = e.target.closest('.burger-icon')
    const burgerNavLink = e.target.closest('.nav_link')

    if (!burgerIcon && !burgerNavLink) return
    if (document.documentElement.clientWidth > 768) return

    if (!document.body.classList.contains('body--opened-menu')) {
      document.body.classList.add('body--opened-menu')
    } else (document.body.classList.remove('body--opened-menu'))

  }
  // Slider hero
  const swiper = new Swiper('.hero__slider', {
    slidesPerView: 1,
    spaceBetween: 15,

    navigation: {
      nextEl: '.hero_next',
      prevEl: '.hero_prev',
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },

  });
  // Slider function
  const a = new Swiper('.function__slider', {
    slidesPerView: 1,
    spaceBetween: 15,

    navigation: {
      nextEl: '.function__next',
      prevEl: '.function__prev',
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
breakpoints: {

    1200: {
      slidesPerView: 4,
      spaceBetween: 15
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 15
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 15
    },
    420: {
      slidesPerView: 1,
      spaceBetween: 15
    }
  }
  });
// Slider product
const productSwiper = new Swiper('.product__slider', {
  slidesPerView: 3,
  spaceBetween: 15,
  loop: true,
  navigation: {
    nextEl: '.product__next',
    prevEl: '.product__prev',
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  breakpoints: {
    1024: {
      slidesPerView: 3,
      spaceBetween: 15
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 15
    },
    420: {
      slidesPerView: 1,
      spaceBetween: 15
    }
  }
});

// Gallery visual
const items = document.querySelectorAll('.gallery_item'); 

function revealSequential() {
  items.forEach((el, idx) => {
   
    el.classList.remove('visible');
    
    setTimeout(() => {
      el.classList.add('visible');
    }, idx * 100); 
  });
}
document.addEventListener('DOMContentLoaded', revealSequential);

})()