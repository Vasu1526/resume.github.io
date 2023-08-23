
$(document).ready(function () {
  $('#fa-bar').click(function () {
    $('#head-nav').toggleClass('active-head-nav');
    $('#fa-bar').toggleClass('bar-rotate')
  });

  $('#menu-1').click(function () {
    $('#dropdown-1').slideToggle();
    $('#dropdown-1').removeClass('dropdown');
    $('#dropdown-1').addClass('dropdown-1');
  });
  $('#menu-2').click(function () {
    $('#dropdown-2').slideToggle();
    $('#dropdown-2').removeClass('dropdown');
    $('#dropdown-2').addClass('dropdown-1');
  });
  $('#menu-3').click(function () {
    $('#dropdown-3').slideToggle();
    $('#dropdown-3').removeClass('dropdown');
    $('#dropdown-3').addClass('dropdown-1');
  });
  $('#menu-4').click(function () {
    $('#dropdown-4').slideToggle();
    $('#dropdown-4').removeClass('dropdown');
    $('#dropdown-4').addClass('dropdown-1');
  });
  $('#menu-5').click(function () {
    $('#dropdown-5').slideToggle();
    $('#dropdown-5').removeClass('dropdown');
    $('#dropdown-5').addClass('dropdown-1');
  });
  $('#menu-7').click(function () {
    $('#dropdown-6').slideToggle();
    $('#dropdown-6').removeClass('dropdown');
    $('#dropdown-6').addClass('dropdown-1');
  });

  $(window).on("load", function () {
    $('.loader').fadeOut(1000);
  });

  $(window).scroll(function () {
    if (scrollY > 100) {
      $('header').addClass('sticky');
      $('.top-btn').fadeIn(1000);
      // $('.top-btn').addClass('top-translate');

    }
    else {
      $('header').removeClass('sticky');
      $('.top-btn').fadeOut(1000);
      // $('.top-btn').removeClass('top-translate');
    }
  });

  $('#top').click(function () {
    $('html').animate({ scrollTop: 0 });
  });

  $('#setting').click(function () {
    $('.color-changer').slideToggle(1000);
  });
  $('#red').click(switchred);
  $('#green').click(switchgreen);
  $('#blue').click(switchblue);

  function switchred() {
    $('body').attr('class', 'red');
  }
  function switchgreen() {
    $('body').attr('class', 'green');
  }
  function switchblue() {
    $('body').attr('class', 'blue');
  }

});