var html = document.documentElement;
alert(html === document.childNodes[0]);
alert(html === document.firstChild);

document.title
document.URL
document.domain
document.referrer

var images = document.getElementsByTagName("img");
alert(images.length);
alert(images[0].src);
alert(images.item[0].src);

var myImage = images.namedItem("myImage");
var myImage = images["myImage"];

var allElements = document.getElementsByTagName(*);
