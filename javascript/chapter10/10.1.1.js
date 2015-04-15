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
