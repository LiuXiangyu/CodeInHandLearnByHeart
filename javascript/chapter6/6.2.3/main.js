function Person() {}

Person.prototype.name = "Nicholas";
Person.prototype.age = 29;
Person.prototype.job = "Software Engineer";
Person.prototype.sayName = function() {
    alert(this.name);
};
var person1 = new Person();
person1.sayName(); // "Nicholas"

var person2 = new Person();
person2.sayName(); // "Nicholas"

alert(Person.prototype.isPrototypeOf(person1)); // true
alert(Person.prototype.isPrototypeOf(person2)); // true

alert(Object.getPrototypeOf(person1) == Person.prototype); // true
alert(Object.getPrototypeOf(person1).name); // "Nicholas"

person1.name = "Greg";
alert(person1.name); // "Greg" --来自实例
alert(person2.name); // "Nicholas" --来自原型

delete person1.name;
alert(person1.name); // "Nicholas" -- 来自原型

alert(person1.hasOwnProperty("name")); // false

person1.name = "Greg";
alert(person1.hasOwnProperty("name")); // true

alert("name" in person1); // 总是输出true

/////////////////////////////////////////////////
var person = new Person();
alert(hasPrototypeProperty(person, "name")); // ture
person.name = "Greg";
alert(hasPrototypeProperty(person, "name")); // false
/////////////////////////////////////////////////
var keys = Object.keys(Person.prototype);
alert(keys) // "name, age, job, sayName:

var p1 = new Person();
p1.name = "Rob";
p1.age = 31;
var p1keys =  Object.keys(p1);
alert(p1keys); // "name, age"

/////////////////////////////////////////////////
var keys = Object.getOwnPropertyNames(Person.prototype);
alert(keys); // "constructor, name, age, job, sayName"

/////////////////////////////////////////////////
function Person() {}

Person.prototype = {
    name: "Nicholas",
    age: 29,
    job: "Software Engineer",
    sayName: function() {
        alert(this.name);
    }
};

var friend = new Person();
alert(friend instanceof Object); // true
alert(friend instanceof Person); // true
alert(friend.constructor == Person) // false
alert(friend.constructor == Object) // ture

/////////////////////////////////////////////////
function Person() {}

Person.prototype = {
    constructor: Person,
    name: "Nicholas",
    age: 29,
    job: "Software Engineer",
    sayName: function () {
        alert(this.name);
    }
};

/////////////////////////////////////////////////
var friend = new Person();
Person.prototype.sayHi = function() {
    alert("hi");
};
friend.sayHi(); // "hi" 没有问题

/////////////////////////////////////////////////
function Person() {}

var friend = new Person();

Person.prototype = {
    name: "Nicholas",
    sayName: function () {
        alert(this.name);
    }
};

friend.sayName(); // error
/////////////////////////////////////////////////
alert(typeof Array.prototype.sort); // "function"
alert(typeof String.prototype.substring); // :function"

String.prototype.startsWith = function (text) {
    return this.indexOf(text) == 0;
};

var msg = "Hello world!";
alert(msg.startsWith("Hello")); // true

/////////////////////////////////////////////////
function Person() {}

Person.prototype = {
    constructor: Person,
    name: "Nicholas",
    age: 29,
    job: "Software Engineer",
    friends: ["Shelby", "Court"],
    sayName: function () {
        alert(this.name);
    }
};

var person1 = new Person();
var person2 = new Person();

person1.friends.push("Van");
alert(person1.friends); // "Shelby, Court, Van"
alert(person2.friends); // "Shelby, Court, Van"
alert(person1.friends === person2.friends); // true
/////////////////////////////////////////////////
function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    if (typeof this.sayName != "function") {
        Person.prototype.sayName = function() {
            alert(this.name);
        };
    }
}
/////////////////////////////////////////////////
