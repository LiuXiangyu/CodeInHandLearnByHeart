function SuperType(name) {
    this.name = name;
    this.colors = ["red", "blue", "green"];
}

SuperType.prototype.sayName = function() {
    alert(this.name);
}

function SubType(name, age) {
    SubType.call(this, name);
    this.age = age;
}

SubType.prototype = new SuperType();

SubType.prototype.sayName = function() {
    alert(this.age);
}

SubType.prototype = new SuperType();

SubType.prototype.sayAge = function() {
    alert(this.age);
};

var instance1 = new SubType("Nicholas", 29);
instance1.colors.push("black");
alert(instance1.colors);
instance1.sayName();
instance1.sayAge();

var instance2 = new SubType("Greg", 27);
alert(instance2.colors);
instance2.sayName();
instance2.sayAge();
