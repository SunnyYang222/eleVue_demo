
// footer点击变换效果
var arrPicBlue=["images/dimg/饿了吗优惠券.png","images/dimg/find.png","images/dimg/dingdan1.png","images/dimg/my.png"];
var arrPicGray=["images/dimg/饿了吗优惠券1.png","images/dimg/finf.png","images/dimg/订单.png","images/dimg/my1.png"];
$(".footer_list li").click(function () {
    $(".footer_list li").find("p").each(function () {
       $(this).removeClass("active");
    });

    $(".footer_list li").find("img").each(function (index,domEle) {
        $(domEle).attr("src",arrPicGray[index]);
    });
    $(this).find("p").addClass("active");
    var num = $(this).index();

    $(".active").siblings("img").attr("src",arrPicBlue[num]);
});

