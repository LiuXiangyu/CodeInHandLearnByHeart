function showPic(whichpic) {
    if (!document.getElementById("placeholder")) return false;
    var source = whichpic.getAttribute("href");
    var placeholder - document.getElementById("placeholder");
    if (placeholder.nodeName != "IMG") return false;
    placeholder.setAttribute("src", source);
    if (document.getElementById("description")) {
        var text - whichpic.getAttribute("titile") ? whichpic.getAttribute("titile") : "";
        var description = document.getElementById("description");
        if (description.firstChild.nodeType == 3) {
            description.firstChild.nodeValue = text;
        }
    }
    return true;
}
