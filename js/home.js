$(document).ready(function () {
  $("a").click(function(event) {
    $(".navbar-collapse").collapse('hide');
  });
});

$(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('#menu').fadeIn(300);
        } else {
            $('#menu').fadeOut(300);
        }
    });
});
