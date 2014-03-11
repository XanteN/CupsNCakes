// On window load. This waits until images have loaded which is essential
$(window).load(function(){
  var width = $(window).width();

  if(width >= 767 && !window.is_ie8_or_older){
    $('.bw').hoverizr({
      effect:"grayscale"
    });
  }
    
    $('.flexslider').flexslider({
      animation: "slide"
    });

    //Bind Events
    $('.bw-trigger').hover(function(){
      $(this).closest('.row-fluid').find('.overlayed').mouseover();
    }, function(){
      $(this).closest('.row-fluid').find('.overlayed').mouseout();
    });
 
    /*$("a.transition").click(function(event){
      event.preventDefault();
        linkLocation = this.href;
      $("#main-container").fadeOut(900, redirectPage);      
    });*/

    // Fade in template
    $('#main-container').hide().css('visibility','visible').fadeIn(900);  
});

function redirectPage() {
    window.location = linkLocation;
}