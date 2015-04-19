图像Ping
var img = new Image();
img.onload = img.onerror = function() {
    alert("Done!");
};
img.src = "http://www.example.com/test?name=Nicholas";

1、只能发送GET请求
2、无法访问服务器的响应文本

JSONP
callback({ "name": "Nicholas" });

http://freegeoip.net/json/?callback=handleResponse
function handleResponse(response) {
    alert("You're at IP address " + response.ip + ", which is in " + response.city + ", " + response.region_name);
}

var script = document.createElement("script");
script.src = "http://freegeoip.net/json/?callback=handleResponse";
document.body.insertBefore(script, document.body.firstChild);
