/**
 * Created by wanghao on 17/3/4.
 */
// 自己的js脚本


$(function () {
    // console.log(this);
    function resize() {


        $("#main_ad > .carousel-inner > .item").each(function (i, item) {
            // console.log(this);
            // console.log(item);
            // console.log(i);
            // console.log($(item).data("image-sm"));
            // console.log($(item).data("image-lg"));
            // console.log("--------");
            var screenWidth = $(window).width();
            // console.log(screenWidth);
            var isSmallWidth = screenWidth < 768;
            var url = isSmallWidth ? $(item).data("image-sm") : $(item).data("image-lg");
            $(this).css("backgroundImage", url);
            var urls = url.split("'");
            var imgPath = urls[1];
            console.log(imgPath);
            if (isSmallWidth) {
                $(this).html('<img src="' + imgPath + '"/>');
            } else {
                $(this).empty();
            }


        });

        var lis = $(".nav-tabs").children();
        // console.log(2);
        var width = 0;
        lis.each(function (index, li) {
            console.log(li.clientWidth);
            width += li.clientWidth;
        });
        if ($(window).width() -50< width) {

            $(".wrap-xiaowangzi").css("width", width + 20);
            $(".wrap-xiaowangzi").parent().css("overflowX","scroll");
        }
    }



$(window).on("resize", resize).trigger("resize");


$('[data-toggle="tooltip"]').tooltip();


    var zixun = $(".zixun");
$(".news .nav-pills a").on("click",function (e) {
    var value = $(this).data("title");
    zixun.text(value);
});

// console.log("-=-=-=-=-=-=-=-=-=-=-=-=-=");
//     console.log(as);

    var offsetX = 50
    var startX , endX;

var $carousel = $(".carousel");
    $carousel.on("touchstart",function (e) {
        console.log(e.originalEvent.touches[0].clientX);
        startX = e.originalEvent.touches[0].clientX;
    });

    $carousel.on("touchmove",function (e) {
        // console.log(e.originalEvent.touches[0].clientX);
        endX = e.originalEvent.touches[0].clientX;
    });


    $carousel.on("touchend",function (e) {
        // console.log(e.originalEvent.touches[0].clientX);
        console.log(endX);
        if (Math.abs(startX - endX) > offsetX){
            console.log((startX > endX)? "<-":"->");
            $(this).carousel((startX > endX)?"next":"prev");
        }
    });




})
;