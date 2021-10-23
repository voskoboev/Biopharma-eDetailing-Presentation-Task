initHeroSwiper()

function initHeroSwiper() {
  const slider = document.querySelector('.swiper')

  // eslint-disable-next-line no-unused-vars
  const swiper = new Swiper(slider, {
    // modules: [],
    speed: 400,
    initialSlide: 0,
    slidesPerView: 1,
    loop: false,
    slideClass: 'swiper-slide',
    navigation: {
      nextEl: '.main__btn',
      // prevEl: '.swiper-button-prev'
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets'
    }
  })
}

initBrandSwiper()

function initBrandSwiper() {
  const slider1 = document.querySelector('.swiper--brand')

  // eslint-disable-next-line no-unused-vars
  const swiper1 = new Swiper(slider1, {
    speed: 400,
    initialSlide: 0,
    slidesPerView: 1,
    loop: false,
    slideClass: 'brand__slide',
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets'
    },
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    }
  })
}

moveToFirstSlide()

function moveToFirstSlide() {
  const wrapper = document.querySelector('.swiper-wrapper'),
    homeBtn = document.querySelector('.header__nav-img'),
    allSlides = document.querySelectorAll('.swiper-slide'),
    firstSlide = document.querySelector('.swiper-slide--1'),
    secondSlide = document.querySelector('.swiper-slide--2')

  const slideActivationClass = 'swiper-slide-active' // ?

  const clearAncillaryClasses = () => {
    allSlides.forEach(item => {
      item.classList.remove(slideActivationClass)
      item.classList.remove('swiper-slide-prev')
      item.classList.remove('swiper-slide-next')


    })
  }

  const addRelevantClassesAndCSSValues = () => {
    firstSlide.classList.add(slideActivationClass)
    // secondSlide.classList.add('swiper-slide-next')
    wrapper.style.transform = 'translate3d(0px, 0px, 0px)'
    // wrapper.style.transitionDuration = '400ms'
  }

  const moveToSlide = () => {
    clearAncillaryClasses()
    addRelevantClassesAndCSSValues()
  }

  homeBtn.addEventListener('click', moveToSlide)
}


// moveToSecondSlide()

// function moveToSecondSlide() {
//   wrapper = document.querySelector('.swiper-wrapper')
//   firstSlide = document.querySelector('.swiper-slide--1'),
//   secondSlide = document.querySelector('.swiper-slide--2')

// }




// moveBacteria()

function moveBacteria() {

  const bacteriaImg = document.querySelectorAll('.descr__bacterium-img')
  const slide = document.querySelector('.swiper-slide--2')

  const slideActivationClass = 'swiper-slide-active'

  // window.addEventListener('mousemove', () => {

  //   if (slide.classList.contains(slideActivationClass)) {
  //     bacteriaImg.forEach(item => {
  //       item.classList.add('descr__bacterium-img--active')
  //     })
  //   }

  // })

  // const observerOptions = {
  //   // childList: true,
  //   attributes: true,
  //   // subtree: true
  // }
  // const observer = new MutationObserver(() => {
  //   bacteriaImg.forEach(item => {
  //     item.classList.add('descr__bacterium-img--active')
  //   })
  // })
  // observer.observe(slide, observerOptions);


  // console.log(slide.classList.contains(slideActivationClass));

  // if (slide.classList.contains(slideActivationClass)) {

  //   console.log('gf');

  // window.addEventListener('load', () => {

  //   bacteriaImg.forEach(item => {
  //     item.classList.add('descr__bacterium-img--active')
  //   })

  // })

}

enableDescriptionScroll()

function enableDescriptionScroll() {
  const input = document.querySelector('.descr__scroll-input'),
    block = document.querySelector('.descr__text-container-inner'),
    blockHeightInPixels = document.querySelector(
      '.descr__text-container-inner'
    ).clientHeight,
    percentHeight = blockHeightInPixels / 100,
    scrollThumbMitigationCoefficient = 2.1 // Set by visual experience

  const setValueToScroll = () => {
    block.scrollTop =
      (input.value * percentHeight) / scrollThumbMitigationCoefficient
  }

  input.addEventListener('input', setValueToScroll)
}

toggleModal()

function toggleModal() {
  const openBtn = document.querySelector('.brand__btn'),
    closeBtn = document.querySelector('.brand__modal-close'),
    modal = document.querySelector('.brand__modal'),
    activationClass = 'brand__modal--active'

  const openModal = () => {
    modal.classList.add(activationClass)
  }

  const closeModal = () => {
    modal.classList.remove(activationClass)

  }

  openBtn.addEventListener('click', openModal)
  closeBtn.addEventListener('click', closeModal)
}
