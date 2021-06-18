/*
* 适用于圈x 解锁知音vip  该项目仅用于研究和学习
* @author：shushu789
* */

var body = $response.body;
var url = $request.url;
const path1 = "/api/tiny-shop/v1/member/member/index";
if(url.indexOf(path1)!=-1){
    let obj = JSON.parse(body);
    obj.data.level = "6";
    obj.data.is_vip = 1;
    obj.stats.day_live_time = 6000;
    /*
    obj.stats.day_long_video = 6000;
    obj.stats.day_short_video = 6000;
    obj.vip_time = "2539100750";

    obj.data.coupon_num = "10";
    obj.data.current_level = "6";
    obj.data.account.level = "6"
    obj.role = "10";
    obj.memberLevel.day_long_video = "100"
    obj.memberLevel.day_short_video = "100"
    //obj.memberLevel.updated_at = "1601207013"
    obj.memberLevel.day_live_time = "6000";
    obj.memberLevel.level = "6";
    obj.memberLevel.give_vip_time = "10000"
    //obj.memberLevel.created_at = "1601207013"


    obj.pid = "625000";
     */
    body = JSON.stringify(obj);

}
$done(body);
