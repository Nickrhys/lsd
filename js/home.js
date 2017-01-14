$(document).ready(function () {
  $("a").click(function(event) {
    $(".navbar-collapse").collapse('hide');
  });
});

$(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('#menu').fadeIn(500);
        } else {
            $('#menu').fadeOut(500);
        }
    });
});

$(document).on('click', 'a', function(event){
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
    }, 800);
});
