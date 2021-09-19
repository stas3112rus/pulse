

$(document).ready(function(){
  // Manage slider
  // Documentation https://kenwheeler.github.io/slick/

    $('.slider__inner').slick({
        dots: false,
        infinite: true,
        speed: 1200,
        adaptiveHeight: false,
        prevArrow: '<button type="button" class="slick-prev"><img src="../img/04-slieder/chevron-left-solid.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../img/04-slieder/chevron-right-solid.svg"></button>',
        responsive: [
            {
              breakpoint: 900,
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
       //End Manage slider

    // Manage Tabs
    // Documantation https://denis-creative.com/jquery-tabs/
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
      $(this)
        .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
        .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });
     // END Manage Tabs
    // Turn content and list
     function ToggleSlide(nameClass){
      $(nameClass).each(function(i){
        $(this).on('click', function(e){
          e.preventDefault();
          $('.catalog__inner-content').eq(i).toggleClass('catalog__inner-content_active');
          $('.catalog__list').eq(i).toggleClass('catalog__list_active');
        });
        
      });
     };
     
     ToggleSlide('.catalog__link');
     ToggleSlide('.catalog__link-back');
     // END Turn content and list

     //Modal windows

     $('[data-modal=consultating]').on('click', function(){
       $('.overlay, #consultating').fadeIn();
     });

     $('.modal__close').on('click', function(){
      $('.overlay, #consultating, #order, thank-you').fadeOut();
     });

     $('.button__catalog').each(function(i){
      $(this).on('click', function(){
        $('#order .modal__desc').text($('.catalog__product-title').eq(i).text());
        $('.overlay, #order').fadeIn();
      });
     });

      //END Modal windows
     
      // Validation Forms
      // Documantation jqueryvalidation.org

    
      function validateForms(forms){
        $(forms).validate({
          rules: {
            name: "required",
            phone: "required",
            email: {
              required: true,
              email: true
            }
          },
          messages: {
            name: "Введите ваше имя",
            phone: "Введите ваше номер телефона",
            email: {
              required: "Введите ваш E-mail",
              email: "Неправильно введен адрес почты"
            }
          },
          errorClass: "invalid"
  
  
        });
      }
      validateForms ('.consultation  form');
      validateForms ('#consultating form');
      validateForms ('#order form');      

      //End validation Forms


      // Mask phone
      // Documantation https://github.com/digitalBush/jquery.maskedinput
     
       
        $(".phone").mask("+7 (999) 999 - 99 - 99");
       
    
      // ENd mask phone


      // SEnd message with php-srcipt
      $('form').submit(function(e) {
        e.preventDefault();
        $.ajax({
            type: "POST",
            url: "mailer/smart.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            $('#consultating, #order').fadeOut();
            $('.overlay, #thanks').fadeIn('slow');

            $('form').trigger('reset');
        });
        return false;
    });
      // END SEnd message with php-srcopt

  });

 

  