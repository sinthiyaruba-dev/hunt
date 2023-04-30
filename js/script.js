
    new VenoBox({
      selector: '.venobox',
    
    });
    // $('.banner-row').slick({
    //   slidesToShow: 1,
    // slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 1000,
    // pauseOnHover:false,
    // poseOnfocus:false,
    // arrows:false,
    // cssEase:'linear',
    // fade: true,
    // })
  
  $(document).ready(function(){
    $('.slider-wrapper').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
        // infinite: true,
        fade: true,
        cssEase: 'linear',
        arrows: true,
        autoplay: true,
        autoplaySpeed: 5000,
        pauseOnHover: true,
        prevArrow: ".right",
        nextArrow: ".left"
      });
  })
  $('.service-slide-wrapper').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    vertical: true,
    arrows: true,
    rows: 0,
    centerMode: true,
    centerPadding: '0px',
    pauseOnHover: true,
    prevArrow: ".slider-bottom-arrow",
    nextArrow: ".slider-top-arrow"
  });
  $('.testimonial-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    vertical: true,
    arrows: true,
    rows: 0,
    centerMode: true,
    centerPadding: '0px',
    prevArrow: ".testimonial-slider-bottom-arrow",
    nextArrow: ".testimonial-slider-top-arrow",
    asNavFor: '.testimonial-text-slider',
  });

  $('.testimonial-text-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    vertical: true,
    arrows: false,
    rows: 0,
    centerMode: true,
    centerPadding: '0px',
    asNavFor: '.testimonial-slider',
  });
  $('.counter').counterUp({
    delay: 10,
    time: 1000
  });
  $('.carding').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    // autoplay: true,
    autoplaySpeed: 1000,
    pauseOnHover:false,
    poseOnfocus:false,
    arrows: true,
  });
  $(function(){
    new VenoBox({
        selector: '.venobox',
        spinner: 'grid',
        titleattr: 'data-title',
        numeration: true,
        infinigall: true,
        share: true,
        autoplay: true,
      });
})
$('.price-plan-slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover: true,
  prevArrow: ".price-slider-right-arrow",
  nextArrow: ".price-slider-left-arrow"
});
$('.counter-slider').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplaySpeed: 2000,
  arrows: false,
  dots: true,
});
// top button js part
$('.scroll-button').on("click",function(){
  $("html,body").animate({scrollTop:0},1000)
})
$(window).scroll(function(){
  var scroll= $(this).scrollTop();
  if (scroll>500){
    $('.scroll-button').fadeIn(500);
  }
  else{
    $('.scroll-button').fadeOut(500);
  }
})
// navbar js part
$(window).scroll(function(){
  if($(window).scrollTop ()> 500){
    $('.menu').addClass('nav-scroll');
  }
  else{
    $('.menu').removeClass('nav-scroll');
  }
})