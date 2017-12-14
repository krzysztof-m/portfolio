import ScrollReveal from 'scrollreveal';

class CustomScrollReveal {
  constructor() {
    this.rightColAnimationOpt = {
      duration: 1000, 
      scale: 1, 
      origin: 'right', 
      distance: '50px', 
      easing: 'ease-out'
    };
    this.leftColAnimationOpt = {
      duration: 1000, 
      delay: 200, 
      scale: 1, 
      origin: 'left', 
      distance: '50px', 
      easing: 'ease-out'
    }
    this.browserAnimationOpt = {
      duration: 1000, 
      scale: 1, 
      origin: 'right', 
      distance: '50px', 
      easing: 'ease-out', 
      beforeReveal: function (domEl) {
        domEl.classList.add('main-hero__image--animate');
      }
    }
    this.scrollRevealInit();
  }
  
  scrollRevealInit() {
    window.sr = ScrollReveal();
    sr.reveal('.row__col-half.image', this.leftColAnimationOpt);
    sr.reveal('.row__col-half.description', this.rightColAnimationOpt);
    sr.reveal('.main-hero__image', this.browserAnimationOpt);
  }
}

export default CustomScrollReveal;

