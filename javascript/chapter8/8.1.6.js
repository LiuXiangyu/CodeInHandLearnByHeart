setTimeout("alert('Hello world!') ", 1000);
setTimeout(function() {
    alert("Hello world");
}, 1000);
var timeoutId = setTimeout(function() {
    alert("Hello world!");
}, 1000);
clearTimeout(timeoutId);
setInterval(function() {
    alert("Hello world!");
}, 1000);

var num = 0;
var max = 10;
var intervalId = null;

function increamentNumber() {
    num++;

    if (num == max) {
        clearInterval(intervalId);
        console.log("Done");
    }
}
intervalId = setInterval(increamentNumber, 500);
