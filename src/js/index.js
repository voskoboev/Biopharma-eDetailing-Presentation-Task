initHeroSwiper()

function initHeroSwiper() {
  const slider = document.querySelector('.swiper')

  // Swiper.use([Navigation])

  // eslint-disable-next-line no-unused-vars
  const swiper = new Swiper(slider, {
    // modules: [],
    speed: 400,
    initialSlide: 2,
    slidesPerView: 1,
    loop: false,
    slideClass: 'swiper-slide',
    navigation: {
      // nextEl: '.swiper-button-next',
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

  // Swiper.use([Naviga
  // eslint-disable-next-line no-unused-vars
  const swiper1 = new Swiper(slider1, {
    // modules: [],
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

// moveToFirstSlide()

function moveToFirstSlide() {
  const wrapper = document.querySelector('.swiper-wrapper')
  const homeBtn = document.querySelector('.header__nav-link')
  const allSlides = document.querySelectorAll('.swiper-slide')
  const firstSlide = document.querySelector('.swiper-slide--1')
  const secondSlide = document.querySelector('.swiper-slide--2')

  const slideActivationClass = 'swiper-slide-active'

  homeBtn.addEventListener('click', ev => {
    ev.preventDefault()

    allSlides.forEach(item => {
      item.classList.remove(slideActivationClass)
      item.classList.remove('swiper-slide-prev')
      item.classList.remove('swiper-slide-next')
    })

    firstSlide.classList.add(slideActivationClass)
    secondSlide.classList.add('swiper-slide-next')
    wrapper.style.transform = 'translate3d(0px, 0px, 0px)'
    wrapper.style.transitionDuration = '400ms'
  })
}

// moveDecorationElemsOnLoad()

function moveDecorationElemsOnLoad() {

  const bacteriumOne = document.querySelector('.main__bacterium--1')
  const bacteriumTwo = document.querySelector('.main__bacterium--2')
  const bacteriumThree = document.querySelector('.main__bacterium--3')
  const bacteriumFour = document.querySelector('.main__bacterium--4')
  const bacteriumFive = document.querySelector('.main__bacterium--5')
  // const bacteriumSix = document.querySelector('.main__bacterium--6')
  // const bacteriumSeven = document.querySelector('.main__bacterium--7')


  window.addEventListener('load', () => {
    bacteriumOne.classList.add('bacterium__one--active')
    bacteriumTwo.classList.add('bacterium__two--active')
    bacteriumThree.classList.add('bacterium__three--active')
    bacteriumFour.classList.add('bacterium__four--active')
    bacteriumFive.classList.add('bacterium__five--active')
  })

  const moveElems = () => { }
}

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

// enableScroll()

function enableScroll() {

  const input = document.querySelector('.descr__scroll-input')
  const block = document.querySelector('.descr__text-container-inner')

  const blockHeight = document.querySelector('.descr__text-container-inner').clientHeight

  const percentHeight = blockHeight / 100

  input.addEventListener('input', () => {
    block.scrollTop = input.value * percentHeight / 2.1
  })
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

