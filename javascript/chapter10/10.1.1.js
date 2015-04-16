if (someNode.nodeType == 1) {
    alert("Node is an element.");
}

if (someNode.nodeType == 1) {
    value = someNode.nodeName;
}

var firstChild = someNode.childNodes[0];
var secondChild = someNode.childNodes.item(1);
var count = someNode.childNodes.length;

var arrayOfNodes = Array.prototype.slice.call(someNode.childNodes, 0);
function convertToArray(nodes) {
    var array = null;
    try {
        array = Array.prototype.slice.call(nodes, 0);
    } catch (ex) {
        array = new Array();
        for (var i = 0, len = nodes.length; i < len; ++i) {
            array.push(nodes[i]);
        }
    }

    return array;
}

var returnNode = someNode.appendChild(newNode);
alert(returnNode == newNode); // true
alert(someNode.lastChild == newNode); // true

var returnNode = someNode.appendChild(someNode.firstChild);
alert(returnNode == someNode.firstChild); // false
alert(returnNode == someNode.lastChild); // true

returnNode = someNode.insertBefore(newNode, null);
alert(newNode == someNode.lastChild); // true

var returnNode = someNode.insertBefore(newNode, someNode.firstChild);
alert(returnNode == newNode); // true
alert(newNode == someNode.firstChild); // true;

returnNode = someNode.insertBefore(newNode, someNode.lastChild);
alert(newNode == someNode.childNodes[someNode.childNodes.length - 2]);

var returnNode = someNode.replace(newNode, someNode.firstChild);

returnNode = someNode.replaceChild(newNode, someNode.lastChild);

var formerFirstChild = someNode.removeChild(someNode.firstChild);

var formerLastChild = someNode.removeChild(someNode.lastChild);

var deepList = myList.cloneNode(true);
alert(deepList.childNodes.length); // 3

var shallowList = myList.cloneNode(false);
alert(shallowList.childNodes.length); // 0
