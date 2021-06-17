/* iOS tanhua live app to quantunul x js 
^https:\/\/1008610010.laikanshu.top/Member/getUserInfo url 
*/
var body = $response.body;
var url = $request.url;
const path1 = "/Member/getUserInfo";
if(url.indexOf(path1)!=-1){
  let obj = JSON.parse(body);
  obj.data.is_vip = 1;
  obj.data.user_viptime = "2099-01-10 11:11:11";
  obj.data.member_name = "1888888888";
  obj.data.no_agents = 0;
  body = JSON.stringify(obj);

}
$done(body);
