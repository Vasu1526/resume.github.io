document.querySelectorAll('#nav-tab>[data-bs-toggle="tab"]').forEach(el => {
  el.addEventListener('shown.bs.tab', () => {
    const target = el.getAttribute('data-bs-target')
    const scrollElem = document.querySelector(`${target} [data-bs-spy="scroll"]`)
    bootstrap.ScrollSpy.getOrCreateInstance(scrollElem).refresh()
  })
})





$(window).scroll(function () {
  if (scrollY > 100) {
    $('.top-btn').fadeIn(1000);
  }
  else {
    $('.top-btn').fadeOut(1000);
  }
});

$('#top').click(function () {
  $('html').animate({ scrollTop: 0 });
});



//---------------------counter js-------------------------------//

$.fn.jQuerySimpleCounter = function (options) {
  var settings = $.extend({
    start: 0,
    end: 100,
    easing: 'swing',
    duration: 400,
    complete: ''
  }, options);

  var thisElement = $(this);

  $({ count: settings.start }).animate({ count: settings.end }, {
    duration: settings.duration,
    easing: settings.easing,
    step: function () {
      var mathCount = Math.ceil(this.count);
      thisElement.text(mathCount);
    },
    complete: settings.complete
  });
};


$('#number1').jQuerySimpleCounter({ end: 12, duration: 3000 });
$('#number2').jQuerySimpleCounter({ end: 27, duration: 3000 });
$('#number3').jQuerySimpleCounter({ end: 211, duration: 3000 });
$('#number4').jQuerySimpleCounter({ end: 24, duration: 3000 });


         //---------------------counter js -------------------------------//





        