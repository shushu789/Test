var body = $response.body;
var url = $request.url;
const path1 = "/api/tiny-shop/v1/live/room/join";
if(url.indexOf(path1)!=-1){
  let obj = JSON.parse(body);
  obj.code = 200;
  obj.message = "ok";
  obj.err_code = 200;
  obj.surplus_time = 600;

  body = JSON.stringify(obj);

}
$done(body);
