$(function(){
    //首页menu点击效果
    $(".header .nav .menu").click(function(){
        $(".header .nav").toggleClass("now");
        $(".header .nav .menu").toggleClass("now");
        $(".header .nav-box .list").toggleClass("now");
    })
    
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


    //当滑到设计故事这里来时执行动画
    //环保列表页
    for(var i = 0;i<$(".pro-list .list li").length;i++){
        $(".pro-list .list li").eq(i).css("transition-delay",i * 0.1+"s");
    }
    $(document).ready(function(){
        var a,b,c,d,e;
        a=$(window).height();
        b = 0;
        d = 0;
        if(a>=d){
            $(".pro-list .list li").each(function(){
                    $(this).addClass('now');
            });

            $(".pro-details .section").eq(0).find(".section1").addClass("animated fadeInRight")
        }
        $(window).scroll(function(){
            b=$(this).scrollTop();
            //文字动画
            $(".envir .section").each(function(){
                c=$(this).find(".envir-text").offset().top;
                if(a+b>c){
                    $(this).find(".envir-text").addClass('animated bounceInRight');
                    $(".envir .section").eq(0).find(".envir-text").removeClass('animated bounceInRight');
                }
                else{
                    $(this).find(".envir-text").removeClass('animated bounceInRight');
                }
            });

            
            $(".pro-list .list li").each(function(){
                d=$(this).offset().top;
                if(a+b>=d){
                    $(this).addClass('now');
                }
                else{
                    $(this).removeClass('now');
                }
            });

            //列表详情页
            $(".pro-details .section").each(function(){
                e=$(this).find("p").offset().top;
                if(a+b>e){
                    $(this).find(".section1").addClass('animated fadeInRight');
                }
                else{
                    $(this).find(".section1").removeClass('animated fadeInRight');
                }
            });

        });
    })
})