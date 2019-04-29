$(document).ready(function(){
  $('#js-scrollUp').on('click',function(){
    $('html, body').animate({
      scrollTop: 0
    },750);
  });
});


/*        Slick Slider
_______________________________ */

$('#hero__slider').slick({
  autoplay: true,
  autoplaySpeed: 5000,
  dots: true,
  fade: true,
  responsive: [
    {
      breakpoint: 840,
      settings: {
        arrows: false,
        dots: true
      }
    }
  ]
});


$('#js-posts__gallery').slick({
  slidesToShow: 3,
  slidesToScroll: 3,
  responsive: [
    {
      breakpoint: 1195,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});


$('.posts__photo').slick({
  autoplay: true,
  autoplaySpeed: 10000,
  arrows: false,
  fade: true,
  dots: true
});

