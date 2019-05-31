$(function(){
    $('a[href^="#"]').click(function() {
        var href= $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        console.log(target);
        $('body,html').animate({scrollTop:position}, 1200);
        return false;
    });
});