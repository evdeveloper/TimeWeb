$(document).ready(function () {
    svg4everybody({});


    $('.del').on('click', function(){
        console.log('hello');
        $(this).parent().prev().val(' ');
    })
    
   


    $('.accordion__top').on('click', function(){
        $(this).toggleClass('active').next().slideToggle('300');
        $(this).find('.accordion-top__icon').toggleClass('active');
        $('.accordion__top').not(this).removeClass('active').next().slideUp('300');
        $('.accordion__top').not(this).find('.accordion-top__icon').removeClass('active');
        
         
     });

    $(".works__inner .works__cont-items").not(":first").hide();
	    $(".works__inner .works__tabs .works__tabs-item").on('click', function() {
		$(".works__inner .works__tabs .works__tabs-item").removeClass("active").eq($(this).index()).addClass("active");
		$(".works__inner .works__cont-items").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active");

    $('[data-scroll]').on('click', function(e){
        e.preventDefault();

        var elemId = $(this).data('scroll');
        var elemOffset = $(elemId).offset().top;

        $('html, body').animate({
            scrollTop: elemOffset
        },1000);
    });


    var slider1 = '.people__list';
    $(slider1).slick({
        slidesToScroll: 1,
        slidesToShow: 3,
        infinite: false,
        arrows: true,
        variableWidth: true,
        centerPadding: '50px',
        prevArrow:'.p-arrows__next',
        nextArrow:'.p-arrows__prev',
        dots: false
      
    });

});