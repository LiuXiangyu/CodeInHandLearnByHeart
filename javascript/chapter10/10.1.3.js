var div = document.getElementById("myDiv");
div.id = "someOtherId";
div.className = "ft";
div.title = "Some other text";
div.lang = "fr";
div.dir = "rtl";

div.getAttribute(attrName);
div.setAttribute(attrName, attrValue);
div.removeAttribute(attrName);

div.attributes.getNamedItem(name);
div.attributes.removeNamedItem(name);
div.attributes.setNamedItem(node);
