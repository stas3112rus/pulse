$(document).ready(function(){
    $('.slider__inner').slick({
        dots: false,
        infinite: true,
        speed: 1200,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="../img/04-slieder/chevron-left-solid.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../img/04-slieder/chevron-right-solid.svg"></button>',
        responsive: [
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,             
                dots: true,
                arrows: false
              }
            }
          ]
        
      });
  });