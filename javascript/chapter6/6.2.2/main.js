function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = function() {
        alert(this.name);
    };
}

var person1 = new Person("Nicholas", 29, "Software Engineer");
var person2 = new Person("Greg", 27, "Doctor");

alert(person1.constructor == Person); // true
alert(person2.constructor == Person); // true

alert(person1 instanceof Object); // true
alert(person1 instanceof Person); // true


/////////////////////////////////////////////////
// 作为构造函数使用
var person = new Person("Nicholas", 29, "Software Engineer");
person.sayName(); // "Nicholas"

// 作为普通函数使用
Person("Greg", 27, "Doctor"); // 添加到window
window.sayName(); // "Greg"

// 在另一个对象的作用域中调用
var o = new Object();
Person.call(o, "Kristen", 25, "Nurse");
o.sayName(); // "Kristen"
/////////////////////////////////////////////////

function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = new Function("alert(this.name)"); // 与声明函数在逻辑上是等价的
}

alert(person1.sayName == person2.sayName); // false

/////////////////////////////////////////////////

function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = sayName;
}

function sayName() {
    alert(this.name);
}
// 没有封装性
