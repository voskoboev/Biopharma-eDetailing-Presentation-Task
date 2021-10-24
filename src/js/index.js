/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

initMainSwiper()
initBrandSwiper()

enableDescriptionScroll()
toggleModal()

function initMainSwiper() {
  const slider = document.querySelector('.swiper'),
    heroBtn = document.querySelector('.hero__btn'),
    homeBtn = document.querySelector('.header__nav-img'),
    slidingTime = 500

  const mainSwiper = new Swiper(slider, {
    speed: slidingTime,
    initialSlide: 0,
    slidesPerView: 1,
    resistanceRatio: 0,
    loop: false,
    slideClass: 'swiper-slide'
  })

  const moveToSlide = slideNumber => {
    mainSwiper.slideTo(slideNumber, slidingTime)
  }

  homeBtn.addEventListener('click', moveToSlide.bind(null, 0))
  heroBtn.addEventListener('click', moveToSlide.bind(null, 1))

  const activateBacteriaImgsOnSecondSlide = () => {
    const primaryLoadBacteria = document.querySelectorAll(`
    .bacterium-img--primary-loaded`),
      secondaryLoadBacteria = document.querySelectorAll(`
      .bacterium-img--secondary-loaded`),
      activationClass = 'descr__bacterium-img--active',
      activationTime = 500

    primaryLoadBacteria.forEach(item => {
      item.classList.add(activationClass)
    })

    setTimeout(() => {
      secondaryLoadBacteria.forEach(item => {
        item.classList.add(activationClass)
      })
    }, activationTime)
  }

  mainSwiper.once('slideChange', activateBacteriaImgsOnSecondSlide)
}

function initBrandSwiper() {
  const slider = document.querySelector('.brand__swiper'),
    slidingTime = 400

  const brandSwiper = new Swiper(slider, {
    speed: slidingTime,
    initialSlide: 0,
    slidesPerView: 1,
    loop: false,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    slideClass: 'brand__swiper-slide',
    navigation: {
      prevEl: '.brand__swiper-btn-prev',
      nextEl: '.brand__swiper-btn-next'
    },
    pagination: {
      el: '.brand__swiper-pagination',
      type: 'bullets'
    }
  })
}

function enableDescriptionScroll() {
  const input = document.querySelector('.descr__scroll-input'),
    block = document.querySelector('.descr__text-container-inner'),
    blockHeightInPixels = document.querySelector(
      '.descr__text-container-inner'
    ).clientHeight,
    pixelHeightShareInOnePercent = blockHeightInPixels / 100

  const setValueToScrollMethod = () => {
    block.scrollTop = input.value * pixelHeightShareInOnePercent
  }

  input.addEventListener('input', setValueToScrollMethod)
}

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
