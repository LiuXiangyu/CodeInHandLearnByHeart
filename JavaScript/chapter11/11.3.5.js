<div id="myDiv" data-appId="12345" data-myname="Nicholas"></div>
var div = document.getElementById("myDiv");

var appId = div.dataset.appId;
var myName = div.dataset.myname;

div.dataset.appId = 23456;
