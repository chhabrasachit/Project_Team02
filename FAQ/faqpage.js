var clics = 0;

$(document).ready(function() {

  $('.content').hide();

  $('h3').click(function() {

    $(this).next('.content').toggle(function() {

      $(this).next('.content');

    }, function() {

      $(this).next('.content').fadeIn('fast');

    });

    if ($(this).hasClass('cerrar')) {
      $(this).removeClass('cerrar');
    } else {
      $(this).addClass('cerrar');
    };

    if ($('.cerrar').length >= 3) {
      var abiertas = $('.cerrar').length
      console.log(abiertas);
    }
  });	            

}); 
