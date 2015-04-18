var allCurrentUsernames = document.getElementsByClassName("username current");

var classNames = div.className.split(/\s+/);
var pos = -1,
    i, len;
for ( i = 0, len = classNames.length; i < len; ++i) {
    if (classNames[i] == "user") {
        pos = i;
        break;
    }
}
classNames.splice(i, 1);

div.className = classNames.join(" ");

div.classList.remove("disabled");
div.classList.add("current");
div.classList.toggle("user");
if (div.classList.contains("bd")) {
    //
}

