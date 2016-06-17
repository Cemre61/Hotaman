$(document).ready(function() {
    
    $(".scrollToTop").css("display", "none");
     
        $(window).scroll(function(){
     
        if ($(this).scrollTop() > 100) {
        $('.scrollToTop').fadeIn(200);
    } else {
        $('.scrollToTop').fadeOut(200);
    }
});
            
 $('.scrollToTop').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });
});