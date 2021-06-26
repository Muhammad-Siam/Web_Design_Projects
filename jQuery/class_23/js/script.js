$(function(){
    $('.hide').click(function(){
        $('.box').slideUp();
    });
    $('.show').click(function(){
        $('.box').slideDown(700);
    });

    $('.toggle').click(function(){
        $('.box').slideToggle(1000);
    });

    var navOff = $('.main_menu').offset().top;
    $(window).scroll(function(){
       var scrolls = $(this).scrollTop();
       if (scrolls > navOff){
        $('.main_menu').addClass('Menu_FIx');
       }else{
           $('.main_menu').removeClass('Menu_FIx');
       }
    });
});