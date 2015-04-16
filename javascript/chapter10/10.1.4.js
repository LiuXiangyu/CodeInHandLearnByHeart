text.appendData(text);
deleteData(offset, count);
insertData(offset, text);
replaceData(offset, count, text);
splitText(offset);
substringData(offset, count);

var textNode = div.firstChild;
div.firstChild.nodeValue = "Some other message";

div.firstChild.nodeValue = "Some <strong>Other</strong> message";

var textNode = document.createTextNode("<strong>Hello</strong> world!");
