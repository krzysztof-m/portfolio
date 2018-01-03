import $ from 'jquery';

class Preloader {
  constructor() {
    $(document).ready(() => {
      $('.preloader').delay(700).fadeOut(1000);
    });
  }
}

export default Preloader;