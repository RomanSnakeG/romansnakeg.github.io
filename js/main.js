$(document).ready(function(){

    let sliderTop = $(".owl-carousel");
    const formInputName = $('.form-input__name'),
          formInputTel = $('.form-input__tel');

    sliderTop.owlCarousel({
        items: 1,
        dots: false,
        smartSpeed: 2000,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:false,
        loop:true
    });

    // $('.slider__controls--left').click(function () {
    //     sliderTop.trigger('prev.owl.carousel')
    // });
    // $('.slider__controls--right').click(function () {
    //     sliderTop.trigger('next.owl.carousel')
    // });
    
    formInputName.tooltip();
    formInputTel.tooltip();

  });

  $(document).ready(function() {
      $("a[href^='#']").click(function () {
        elementClick = $(this).attr("href");
        destination = $(elementClick).offset().top;
        $('html').animate({scrollTop: destination}, 1000);
        return false;
      });
  });

  function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    };
  }

   
 
  
  function initializeClock(id, endtime) {
    var clock = document.getElementById(id);
    var daysSpan = clock.querySelector('.days');
    var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');
   
    function updateClock() {
      var t = getTimeRemaining(endtime);
   
      daysSpan.innerHTML = t.days;
      hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
      minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
      secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
   
      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }
   
    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
  }
   
  var deadline = new Date(Date.parse(new Date()) + 01 * 24 * 60 * 60 * 1000); // for endless timer
  initializeClock('countdown', deadline);