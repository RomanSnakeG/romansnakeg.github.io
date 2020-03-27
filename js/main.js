$(document).ready(function(){
    const sliderTop = $("#sliders");
    const sliderMini1 = $("#sliders-mini__carousel--1");
    const sliderMini2 = $("#sliders-mini__carousel--2");

    sliderTop.owlCarousel({
        items: 1,
        dots: true,
        smartSpeed: 2000,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:false,
        loop:true
    });

    sliderTop.owlCarousel();
  
    

    sliderMini1.owlCarousel({
        items:4,
        loop:true,
        dots: false,
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
        responsiveClass: true,
        responsive:{
            0:{
                items:1,
            },
            650: {
                items:2,
            },
            1000: {
                items:3,
            },
            1256: {
                items:4,
            }
        }
    });

    sliderMini2.owlCarousel({
        items:4,
        loop:true,
        dots: false,
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
        responsiveClass: true,
        responsive:{
            0:{
            items:1,
            },
            650:{
                items:2,
            },
            1000:{
                items:3,
            },
            1256: {
                items:4,
            }
        }
    });

    sliderMini1.owlCarousel();
    sliderMini2.owlCarousel();

    $('#sliders_back1').click(function () {

        sliderMini1.trigger('prev.owl.carousel')
    });
    $('#sliders_next1').click(function () {
        sliderMini1.trigger('next.owl.carousel')
    });

    $('#sliders_back2').click(function () {

        sliderMini2.trigger('prev.owl.carousel')
    });
    $('#sliders_next2').click(function () {
        sliderMini2.trigger('next.owl.carousel')
    });

});

let displayNone = document.querySelector('.none');
let headerTopDrop = document.querySelector('.header-top__drop');
let headerTopNavMain = document.querySelector('.header-top__nav--main');
const icon1 = document.querySelector('.icon-1');


$('.header-top__drop').hide();
$('.header-top__drop--right').hide();

headerTopNavMain.addEventListener('mouseup', function() {
    if ($('.header-top__drop').css('display') === 'none') {
        icon1.classList.toggle("open");
        $('.header-top__drop').fadeIn("slow");
    } else if ($('.header-top__drop').css('display') !== 'none') {
        icon1.classList.toggle("open");
        $('.header-top__drop').hide();
    }
    
});

const icons = document.querySelectorAll('.icon');
let headerTopDropRight = document.querySelector('.header-top__drop--right');

icons.forEach (icon => {  
    icon.addEventListener('click', (event) => {
        icon.classList.toggle("open");

        if ($('.header-top__drop--right').css('display') === 'none') {
            $('.header-top__drop--right').slideDown("slow");
        } else if ($('.header-top__drop--right').css('display') !== 'none') {
            $('.header-top__drop--right').slideUp("slow");
        }
    });
});

