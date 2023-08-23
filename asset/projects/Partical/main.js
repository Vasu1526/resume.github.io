$(document).ready(function () {
   
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
      $(':root').css('background','linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);s')
    }
    function switchgreen() {
      $('body').attr('class', 'green');
    }
    function switchblue() {
      $('body').attr('class', 'blue');
    }
  
  
  
  });
  