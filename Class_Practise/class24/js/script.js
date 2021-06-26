$(function () {
    var navOff = $('.main_menu').offset().top;

    $(window).scroll(function () {
        var scrolling = $(this).scrollTop();
        if (scrolling > navOff) {
            $('.main_menu').addClass('menu_fix');
        } else {
            $('.main_menu').removeClass('menu_fix')
        }
    });
    // back to top button
    $('.back_to_top').click(function () {
        $('html, body').animate({
            scrollTop: 0,
        }, 1500);
    });
    $(window).scroll(function () {
        var scrolls = $(this).scrollTop();
        if (scrolls > 150) {
            $('.back_to_top').fadeIn();
        } else {
            $('.back_to_top').fadeOut();
        }
    });

    $('.banner_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        speed: 1500,
        nextArrow: '<i class="fas fa-chevron-right nxt_arr"></i>',
        prevArrow: '<i class="fas fa-chevron-left prv_arr"></i>',
    });
});