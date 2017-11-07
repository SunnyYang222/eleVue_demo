
//页面滚动顶部搜索框定位效果
var oTop = $(".search_link").offset().top;
$(window).scroll(function () {
    var wTop = $(this).scrollTop();
    if(wTop>oTop){
        $(".search_link").addClass("fixed");
    }else{
        $(".search_link").removeClass("fixed");
    }

});


// footer点击变换效果
var arrPicBlue=["images/img_yxz/饿了吗优惠券.png","images/img_yxz/find.png","images/img_yxz/dingdan1.png","images/img_yxz/my.png"];
var arrPicGray=["images/img_yxz/饿了吗优惠券1.png","images/img_yxz/finf.png","images/img_yxz/订单.png","images/img_yxz/my1.png"];
$(".footer_list").find(".footer_list_link").eq(0).find(".blueBtn").css("display","block");
$(".footer_list").find(".footer_list_link").eq(0).find(".grayBtn").css("display","none");
$(".footer_list li").click(function () {
    $(".footer_list li").find("p").each(function () {
       $(this).removeClass("active");
    });

    // $(".footer_list li").find("img").each(function (index,domEle) {
    //     $(domEle).attr("src",arrPicGray[index]);
    // });
    $(this).find("p").addClass("active");
    var num = $(this).index();

    // $(".active").siblings("img").attr("src",arrPicBlue[num]);
    $(".footer_list li img").each(function(){
        $(".blueBtn").css("display","none");
        $(".grayBtn").css("display","block");
    });

    $(this).find(".blueBtn").css("display","block");
    $(this).find(".grayBtn").css("display","none");
});



//侧边栏根据scrolltop的出现隐藏
window.onscroll=function(){
    var sTop=document.body.scrollTop || document.documentElement.scrollTop;
    if(sTop<300){
        $(".backTop").css("opacity",0);
    }else{
        $(".backTop").css("opacity",1);
    }

}
//页面回到顶部
$(".backTop").click(function(){
    // var scrollTop = $(window).scrollTop();
    // $("body").animate(
    //     {
    //         scrollTop:0
    //     }
    //     ,400)
    $(window).scrollTop(0);

});