var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get("/shopcartapi",(req,res)=>{
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    let datas = [
      {
            "title":"榴莲味长条泡芙",
            "store":"花少爷的粥（中贸店）中贸广场店",
            "price":300,
            "oriprice":500,
            "pic":"http://p1.meituan.net/xianfu/39a06475fa24f4b58d317918a66d2d0f814382.jpg",
            "qal":1,
            "info":"保",
            "deliveryWrap":"20元起送",
            "distance":"882m",
            "time":"46min",
            "saleNum":"月售1645单",
            "discount":"满49减12，满68减23,满89减30",
            "newCustom":"新用户下单立减17元",
            "score":"4.3"
        },
        {
            "title":"正点手撕鸡饭+无花果瘦肉汤",
            "store":"川渝人家 （华锦店）",
            "price":200,
            "ori":500,
            "pic":"http://p0.meituan.net/xianfu/6e7294b77289ad30990c793a56902d1d130156.jpg",
            "info":"保",
            "deliveryWrap":"蜂鸟专送",
            "distance":"1.89km",
            "time":"32min",
            "saleNum":"月售2110单",
            "discount":"满35减10，满55减17，满99减29，满159减48",
            "newCustom":"新用户下单立减17元",
            "score":"4.3"
        },
        {
            "title":"卤鸭锁骨【大盒】",
            "store":"橙姑娘榴莲千层蛋糕（六里桥店)",
            "price":400,
            "oriprice":500,
            "pic":"http://p1.meituan.net/xianfu/9e4956e5c198657d98956fcc8104788a153982.jpg",
            "qal":1,
            "info":"保",
            "deliveryWrap":"蜂鸟专送",
            "distance":"882m",
            "time":"46min",
            "saleNum":"月售1645单",
            "discount":"满49减12，满68减23,满89减30",
            "newCustom":"新用户下单立减17元",
            "score":"4.5"
        },
        {
            "title":"蓝莓班戟",
            "store":"绿茶餐厅（西安王府井店）",
            "price":600,
            "oriprice":500,
            "pic":"http://p1.meituan.net/xianfu/53aa85e899e2dc4ab7f59a12fcb75aad7947.jpeg",
            "qal":1,
            "info":"保",
            "deliveryWrap":"蜂鸟专送",
            "distance":"882m",
            "time":"46min",
            "saleNum":"月售1489单",
            "discount":"满49减12，满68减23,满89减30",
            "newCustom":"新用户下单立减17元",
            "score":"4.6"
        },
        {
            "title":"抹茶蜜豆千层蛋糕",
            "store":"老狼大盘鸡（建设路店）",
            "price":800,
            "oriprice":500,
            "pic":"http://p0.meituan.net/xianfu/c3f3937b2f104afcbfc7d3457d01779023959.jpg",
            "qal":1,
            "info":"保",
            "deliveryWrap":"蜂鸟专送",
            "distance":"843m",
            "time":"47min",
            "saleNum":"月售3340单",
            "discount":"满35减22",
            "newCustom":"新用户下单立减17元",
            "score":"4.3"
        },
        {
            "title":"(猛料大杯)朗姆葡萄巴旦木",
            "store":"DQ（西安小寨金鹰店)",
            "price":35,
            "oriprice":50,
            "pic":"http://p1.meituan.net/210.0/xianfu/d900f4910c5e05c3197fd241b742ccb323265.jpg",
            "qal":1,
            "info":"保",
            "deliveryWrap":"蜂鸟专送",
            "distance":"843m",
            "time":"47min",
            "saleNum":"月售3340单",
            "discount":"满35减22",
            "newCustom":"新用户下单立减17元",
            "score":"4.3"
        }
   ]
   res.jsonp(datas)
})

module.exports = router;
