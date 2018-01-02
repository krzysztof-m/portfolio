import $ from 'jquery';

class ImagesSlider {
  constructor() {
    const $sliders = $('.slider'),
          self = this;
    
    $sliders.each(function() {
      const $slider = $(this),
            $nextBtn = $slider.find('.slider__btn-previous'),
            $prevBtn = $slider.find('.slider__btn-next');
      let slides = Array.from($slider.find('.slider__slide'));
      
      
      $nextBtn.on('click', () => {
        self.moveNext(slides);
      });
      
      $prevBtn.on('click', () => {
        self.movePrev(slides);
      });
      
    });
  }
  
  moveNext(slides) {
    //add & remove animation classes
    $(slides[1]).removeClass('slider__slide--current').addClass('slider__slide--right');
    $(slides[0]).removeClass('slider__slide--right').addClass('slider__slide--left');
    $(slides[2]).removeClass('slider__slide--left').addClass('slider__slide--current');
    //change array order
    const last = slides.shift();
    slides.push(last);
  }
  
  
  movePrev(slides) {
    //add & remove animation classes
    $(slides[1]).removeClass('slider__slide--current').addClass('slider__slide--left');
    $(slides[0]).removeClass('slider__slide--right').addClass('slider__slide--current');
    $(slides[2]).removeClass('slider__slide--left').addClass('slider__slide--right');
    //change array order
    const last = slides.pop();
    slides.unshift(last);
  }
  
}

export default ImagesSlider;