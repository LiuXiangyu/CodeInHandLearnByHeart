function SuperType() {
    this.prototype = true;
}

SuperType.prototype.getSuperValue = function() {
    return this.prototype;
}

function SubType() {
    this.prototype = false;
}

SubType.prototype = new SuperType();

SubType.prototype.getSubValue = function () {
    return this.subproperty;
}

var instance = new SubType();
alert(instance.getSubValue());
////////////////////////////////////////////////////////
function SuperType() {
    this.colors = ["red", "blue", "green"];
}

function SubType() {}

SubType.prototype = new SuperType();
var instance1 = new SubType();
instance1.colors.push("black");
alert(instance1.colors); // "red, blue, green, black"

var instance2 = new SubType();
alert(instance2.colors); // "red, blue, green, black"
