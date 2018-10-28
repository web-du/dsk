$(function(){
    //返回顶部
    $(window).scroll(function () {
        if($(window).scrollTop()>=500) {
            $(".toTop").addClass("now");
        }else {
            $(".toTop").removeClass("now");
        }
    });
    $(".toTop").click(function () { 
        $("html, body").animate({scrollTop: 0}, 300); /* 持续时间为 100ms */
        return false;
    });
})