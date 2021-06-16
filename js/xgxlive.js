/*  https://api.domain.liuniukeji.heshuangde.com/index.php/App/User/Info

"mobile" : "1-9045956008",
    "no_agents" : 1,
    "sales_page" : "",
    "expired_time" : 0,
    "expired_days" : -1,
*/

var body = $response.body;
var url = $request.url;
const path1 = "/App/User/Info";
if(url.indexOf(path1)!=-1){
  let obj = JSON.parse(body);
  obj.result.mobile = 1-88888;
  obj.result.expired_time = 100;
  obj.result.expired_days" = 100;
  body = JSON.stringify(obj);

}
$done(body);
