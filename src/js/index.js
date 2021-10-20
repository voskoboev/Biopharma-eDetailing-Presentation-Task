initSwiper()

function initSwiper() {
  const slider = document.querySelector('.swiper')

  // Swiper.use([Navigation])

  // eslint-disable-next-line no-unused-vars
  const swiper = new Swiper(slider, {
    // modules: [],
    speed: 400,
    initialSlide: 0,
    slidesPerView: 1,
    loop: false,
    slideClass: 'swiper-slide',
    navigation: {
      // nextEl: '.swiper-button-next',
      nextEl: '.main__btn',
      prevEl: '.swiper-button-prev'
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets'
    }
  })
}

moveDecorationElemsOnLoad()

function moveDecorationElemsOnLoad() {

  const bacteriumOne = document.querySelector('.main__bacterium--1')
  const bacteriumTwo = document.querySelector('.main__bacterium--2')
  const bacteriumThree = document.querySelector('.main__bacterium--3')
  const bacteriumFour = document.querySelector('.main__bacterium--4')
  const bacteriumFive = document.querySelector('.main__bacterium--5')
  const bacteriumSix = document.querySelector('.main__bacterium--6')
  const bacteriumSeven = document.querySelector('.main__bacterium--7')


  window.addEventListener('load', () => {
    bacteriumOne.classList.add('bacterium__one--active')
    bacteriumTwo.classList.add('bacterium__two--active')
    bacteriumThree.classList.add('bacterium__three--active')
    bacteriumFour.classList.add('bacterium__four--active')
    bacteriumFive.classList.add('bacterium__five--active')
  })

  const moveElems = () => { }
}

moveBacteria()

function moveBacteria() {

  const bacteriaImg = document.querySelectorAll('.descr__bacterium-img')
  const slide = document.querySelector('.swiper-slide--2')

  const slideActivationClass = 'swiper-slide-active'

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

  // bacteriaImg.forEach(item => {
  //   item.classList.add('descr__bacterium-img--active')
  // })
  // }


}
