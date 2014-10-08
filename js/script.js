$(window).scroll(function () {
    $("canvas").css(
        "-webkit-transform",
        "translatey(-" + $(window).scrollTop() + "px)");
            showHideCanvas();
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
function showHideCanvas(){
    var h = $('.mynavbar').height();
    var y = $(window).scrollTop();
    if(h <= y){
        $("canvas").show();
    } else {
        $("canvas").hide();
    }
}
$(document).ready(function(){
    $('#blurred').height($('.mynavbar').height());
    
    $('#fadein h1').animate({"opacity":"1"},{duration:800});
    $('#fadein h2').delay(400).animate({"opacity":"1"},{duration:800});
    $('#portfolio').delay(1000).animate({"opacity":"1"},{duration:800});
    //queue html2canvas render
    $('.social-link').delay(1400).fadeIn();


    setTimeout(function(){
        html2canvas($("body"), {
            onrendered: function (canvas) {
                $("#blurred").append(canvas);
                $("canvas").attr("id", "canvas");
                stackBlurCanvasRGB(
                    'canvas',
                0,
                0,
                $("canvas").width(),
                $("canvas").height(),
                20);
                showHideCanvas();
            }
        });
    },1800);
    if($.fn.fitVids != 'undefined'){
        $('body').fitvids();
    }
});
    $(window).load(function(){
        sameHeight('.portfolio-item');
    }); 
