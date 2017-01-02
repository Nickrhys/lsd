$(document).ready(function () {
  $("a").click(function(event) {
    $(".navbar-collapse").collapse('hide');
  });
});

$(document).ready(function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 200) {
            $('#menu').fadeIn(500);
        } else {
            $('#menu').fadeOut(500);
        }
    });
});
