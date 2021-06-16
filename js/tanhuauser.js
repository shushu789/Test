/* iOS tanhua live app to quantunul x js 
^https:\/\/1008610010.laikanshu.top/Member/getUserInfo url 
*/
var body = $response.body;
var url = $request.url;
const path1 = "/Member/getUserInfo";
if(url.indexOf(path1)!=-1){
  let obj = JSON.parse(body);
  obj.data.is_vip = 1;
  body = JSON.stringify(obj);

}
