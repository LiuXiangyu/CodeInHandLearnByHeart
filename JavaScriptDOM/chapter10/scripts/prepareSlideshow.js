function prepareSlideshow() {
    if (!document.getElementsByTagName) return false;
    if (!document.getElementById) return false;
    if (!document.getElementById("linklist")) return false;
    if (!document.getElementById("preview")) return false;

    var preview = document.getElementById("preview");
    preview.style.position = "absolute";
    preview.style.left = "0px";
    preview.style.top = "0px";

    var list = document.getElementById("linklist");
    var links = list.getElementsByTagName("a");
    for (var i = 0; i < links.length; ++i) {
        (function (index) {
            links[index].onmouseover = function() {
                moveElement("preview", -100 * (index + 1), 0, 10);
            };
        })(i);
    }
}
addLoadEvent(prepareSlideshow);
