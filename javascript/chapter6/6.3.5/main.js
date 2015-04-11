function object(o) {
    function F() {}
    F.prototype = o;
    return new F();
}

function createAnother(original) {
    var clone = object(original);
    clone.sayHi = function() {
        alert("Hi");
    };
    return clone;
}

var person = {
    name: "Nicholas",
    friends: ["Shelby", "Court", "Van"]
};

var anotherPerson = createAnother(person);
anotherPerson.sayHi();
