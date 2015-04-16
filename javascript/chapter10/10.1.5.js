<div id="myDiv"><!--A comment--></div>

var div = document.getElementById("myDiv");
var comment = div.firstChild;
alert(comment.data); // "A comment"

var comment = document.createComment("A comment");
