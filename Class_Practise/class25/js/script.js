$(function(){
var navOff = $('.main_menu').offset().top;
$(window).scroll(function(){
    var scrolls = $(this).scrollTop();
    if (scrolls > navOff){
        $('.main_menu').addClass('menu_fix');
    }else{
        $('.main_menu').removeClass('menu_fix')
    }
});
//banner_slider
$('.banner_slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: '<i class="fas fa-chevron-right nxt_arr"></i>',
    prevArrow: '<i class="fas fa-chevron-left prev_arr"></i>',
    dots: true,
  });


});