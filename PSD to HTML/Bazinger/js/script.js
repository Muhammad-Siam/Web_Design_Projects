$(function(){
    $(window).scroll(function(){
       var scrolls = $(this).scrollTop();
       if (scrolls > 65){
        $('nav').addClass('Menu_FIx');
       }else{
           $('nav').removeClass('Menu_FIx');
       }
    });
});