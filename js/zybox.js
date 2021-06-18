/*
* 适用于圈x 解锁知音vip  该项目仅用于研究和学习
* @author：shushu789
* */

var body = $response.body;
var url = $request.url;
//const path1 = "/api/tiny-shop/v1/member/member/index";

const path2 = "/api/tiny-shop/v1/site/login";
const path3 = "/api/tiny-shop/v1/live/room/join";

if(url.indexOf(path1)!=-1){
    let obj = JSON.parse(body);
    //obj.data.level = "6";
    //obj.data.is_vip = 1;
    obj.data.member.is_vip = 1;

    obj.data.member.current_level = "6";

    //obj.data.is_adm = 0;
    //obj.data.pid = "625000";
/*
    obj.data.memberLevel.level = "8";
    obj.data.memberLevel.give_vip_time = "10000";
    obj.data.memberLevel.day_long_video = "100";
    obj.data.memberLevel.day_short_video = "100";
    obj.data.memberLevel.updated_at = "1901207013";
    obj.data.memberLevel.day_live_time = "60000";

    obj.data.vip_time = "2539100750";

    // obj.data.stats.day_live_time = 6000;
    // obj.data.stats.day_long_video = 6000;
    // obj.data.stats.day_short_video = 6000;

    obj.data.coupon_num = "10";

    obj.data.memberLevel.created_at = "1901207013";

*/

    body = JSON.stringify(obj);

}

if(url.indexOf(path2)!=-1){
    let obj = JSON.parse(body);
    //obj.data.level = "6";
    obj.data.is_vip = 1;
    obj.data.vip_time = "2539100750";
    body = JSON.stringify(obj);
    obj.data.memberLevel.give_vip_time = "10000";
}
$done(body);
