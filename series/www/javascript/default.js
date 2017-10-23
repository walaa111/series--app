$(document).ready(function() {   
            var sideslider = $('[data-toggle=collapse-side]');
            var sel = sideslider.attr('data-target');
            var sel2 = sideslider.attr('data-target-2');
            sideslider.click(function(event){
                $(sel).toggleClass('in');
                $(sel2).toggleClass('out');
            });
    
      if( $('.right:empty').length ) {
$('.col-xs-push-8').css("left","0");
$('.right').css("display","none");

       }
        });
        /*
        $(function() {
  $(".footer").click(function (event) {
    $('.side-collapse').css("width","0");

  });


});

        $(function() {
  $('.navbar-toggle').click(function (event) {
    $('.side-collapse').css("width","200");

  });


});
*/