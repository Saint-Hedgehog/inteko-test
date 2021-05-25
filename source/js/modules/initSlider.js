/* global Swiper */

const initSlider = () => {
  const projectsSlider = document.querySelector('.projects__slider');
  const staffSlider = document.querySelector('.staff__slider');
  const offerSlider = document.querySelector('.offer__slider');

  if (projectsSlider) {
    const sliderProjects = new Swiper(projectsSlider, {
      slidesPerView: 1,
      slidesPerGroup: 1,
      speed: 500,
      effect: 'fade',
      autoHeight: true,
      watchSlidesVisibility: true,
      keyboard: {
        enabled: true,
        onlyInViewport: true,
      },
      navigation: {
        clickable: true,
        nextEl: '.projects__button-next',
        prevEl: '.projects__button-prev',
      },
      pagination: {
        el: '.projects__pagination',
        clickable: true,
      },
    });
  }

  if (staffSlider) {
    const sliderStaff = new Swiper(staffSlider, {
      slidesPerView: 1,
      slidesPerGroup: 1,
      speed: 500,
      effect: 'fade',
      autoHeight: true,
      watchSlidesVisibility: true,
      keyboard: {
        enabled: true,
        onlyInViewport: true,
      },
      navigation: {
        clickable: true,
        nextEl: '.staff__button-next',
        prevEl: '.staff__button-prev',
      },
      pagination: {
        el: '.staff__pagination',
        clickable: true,
      },
    });
  }

  if (offerSlider) {
    const sliderOffer = new Swiper(offerSlider, {
      slidesPerView: 1,
      slidesPerGroup: 1,
      speed: 500,
      effect: 'fade',
      autoHeight: true,
      watchSlidesVisibility: true,
      keyboard: {
        enabled: true,
        onlyInViewport: true,
      },
      navigation: {
        clickable: true,
        nextEl: '.offer__button-next',
        prevEl: '.offer__button-prev',
      },
      pagination: {
        el: '.offer__pagination',
        clickable: true,
      },
    });
  }

};

export {initSlider};
