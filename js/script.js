$(function () {
    $('#blurred').height($('.mynavbar').height());
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
        }
    });
});

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

window.onresize = function () {
    $("canvas").width($(window).width());
};

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