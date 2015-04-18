UI事件
load
EventUtil.addHandler(window, "load", function(event) {
    alert("Loaded");
});
var image = document.getElementById("myImage");
EventUtil.addHandler(image, "load", function(event) {
    event = EventUtil.getEvent(event);
    alert(EventUtil.getTarget(event).src);
});
unload
abort
error
select
resize
scroll
焦点事件
blur
DOMFocusIn
DOMFocusOut
focus
focusin
focusout
鼠标事件
click
dbclick
mousedown
mousemove
mouseout
mouseover
mouseup
滚轮事件
文本事件
键盘事件
合成事件
变动事件
