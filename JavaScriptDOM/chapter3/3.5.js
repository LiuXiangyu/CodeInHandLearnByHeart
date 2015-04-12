object.getAttribute(attribute);
var paras = document.getElementsByTagName("p");
for (var i = 0; i < paras.length; ++i) {
    var title_text = paras[i].getAttribute("title");
    if (title_text != null) {
        alert(title_text);
    }
}
/////////////////////////////////////////////////////
object.setAttribute(attribute, value);
var shopping = document.getElementById("purchases");
shopping.setAttribute("title", "a list of goods");
