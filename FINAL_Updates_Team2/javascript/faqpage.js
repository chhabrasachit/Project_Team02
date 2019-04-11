
//For back button functioning
  function back(){
        window.location.href = "../html/index.html";
    }
    
//Hide the content
  $('.content').hide();

//Click to dropdown
  $('h3').click(function() {
        $(this).next('.content').toggle(function() {
        $(this).next('.content');
    }, function() {
      $(this).next('.content').fadeIn('fast');
    });

//To add class dropdown
    if ($(this).hasClass('dropdown')) {
      $(this).removeClass('dropdown');
    } else {
      $(this).addClass('dropdown');
    };

    if ($('.dropdown').length >= 3) {
      var dropdowncheck = $('.dropdown').length
      //console.log(dropdowncheck);
    }
  });



