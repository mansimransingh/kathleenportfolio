$(window).scroll(function () {
    $("canvas").css(
        "-webkit-transform",
        "translatey(-" + $(window).scrollTop() + "px)");
            var h = $('.mynavbar').height();
            var y = $(window).scrollTop();
            if(h <= y){
                $("canvas").show();
            } else {
                $("canvas").hide();
            }
});

$(window).resize(function(){
    $("canvas").width($(window).width());
    sameHeight('.portfolio-item');
    console.log('resize');
});

$(document).bind('touchmove', function () {
    $("canvas").css(
        "-webkit-transform",
        "translatey(-" + $(window).scrollTop() + "px)");
});

$(document).bind('touchend', function () {
    $("canvas").css(
        "-webkit-transform",
        "translatey(-" + $(window).scrollTop() + "px)");
});

 function sameHeight(className){
    $(className).css('height','auto');
    var items = $(className);
    var height = 0;

    $.each(items, function(i,v){
        if($(v).height() > height){
            height = $(v).height();
        }
    });

    $(className).height(height);

};

$(document).ready(function(){
    $('#blurred').height($('.mynavbar').height());
    sameHeight('.portfolio-item');
    $('#fadein h1').animate({"opacity":"1"},{duration:800});
    $('#fadein h2').delay(400).animate({"opacity":"1"},{duration:800});
    $('#portfolio').delay(1000).animate({"opacity":"1"},{duration:800});
});