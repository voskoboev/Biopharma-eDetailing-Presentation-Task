  import Swiper, { Navigation } from 'swiper';

  import 'swiper/css';
  import 'swiper/css/navigation';
  import 'swiper/css/pagination';

  // Swiper.use([Navigation, Pagination]);

  const swiper = new Swiper();

  initSwiper()

  function initSwiper() {
    const slider = document.querySelector('.swiper-container')
  
    Swiper.use([Navigation])
    // Swiper.use([Pagination])

    // eslint-disable-next-line no-unused-vars
    const swiper = new Swiper(slider, {
      speed: 400,
      initialSlide: 0,
      slidesPerView: 1,
      loop: true,
      slideClass: 'swiper-slide',
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets'
      }
    })
  }