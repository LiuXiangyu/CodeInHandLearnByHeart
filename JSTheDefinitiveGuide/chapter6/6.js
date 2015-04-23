var o1 = Object.create({x:1, y:2});
o1.x // 1
o1.hasOwnProperty('x'); // false

var o2 = Object.create(null); // 不继承任何属性和方法
var o3 = Object.create(Object.prototype); // new Object()

function inherit(p) {
    if (p == null) throw TypeError();
    if (Object.create)
        return Object.create(p);
    var t = typeof p;
    if (t !== 'object' && t !== 'function') throw TypeError();
    function f() {};
    f.prototype = p;
    return new f();
}

var o = {x: "don't change this value"};
library_function(inherit(o)); // 防止对o的意外修改

function getValue(portfolio) {
    var total = 0.0;
    for (stock in portfolio) {
        var shares = portfolio[stock];
        var price = getquote(stock);
        total += shares * price;
    }
    return total;
}

var o = {};
o.x = 1;
var p = inherit(o);
p.y = 2;
var q = inherit(p);
q.z = 3;
var s = q.toString();
q.x + q.y // 3

var unitcircle = { r:1 };
var c = inherit(unitcircle);
c.x = 1;
c.y = 1;
c.r = 2;
unitcircle.r; // 1 原型对象没有被修改

book.subtitle; // undefined
book.subtitle.length; // error

var len = book && book.subtitle && book.subtitle.length;

o = {x:1};
delete o.x; // true
delete o.x; // 无意义，返回true
delete o.toString; // 什么也没做， 返回true
delete 1; // 无意义，返回true

// false
delete Object.prototype;
var x = 1;
delete this.x;
function f() {}
delete this.f;

var o = { x:1 };
o.hasOwnProperty('x'); // true
o.hasOwnProperty('y'); // false
o.hasOwnProperty("toString"); // false

var o = inherit({y:2});
o.x = 1;
o.propertyIsEnumerable("x"); // true
o.propertyIsEnumerable("y"); // false
Object.prototype.propertyIsEnumerable("toString"); // false

function extend(o, p) {
    for (prop in p) {
        o[prop] = p[prop];
    }
    return o;
}

function merge(o, p) {
    for (prop in p) {
        if (o.hasOwnProperty(prop)) continue;
        o[prop] = p[prop];
    }
    return o;
}

function restrict(o, p) {
    for (prop in o) {
        if (! (prop in p)) delete o[prop];
    }
    return o;
}

function subtract(o, p) {
    for (prop in p) {
        delete o[prop];
    }
    return o;
}

function union(o, p) {
    return extend(extend({}, o), p);
}

function intersection(o, p) {
    return restrict(extend({}, o), p);
}

function keys(o) {
    if (typeof o !== "object") throw TypeError();
    var result = [];
    for (var prop in o) {
        if (o.hasOwnProperty(prop))
            result.push(prop);
    }
    return result;
}

Object.keys();
Object.getOwnPropertyNames();

var o = {
    data_prop: value,

    get accessor_prop() {},
    set accessor_prop(value) {},
};

var p = {
    x: 1.0,
    y: 1.0,

    get r() { return Math.sqrt(this.x * this.x + this.y * this.y);},
    set r(newvalue) {
        var oldvalue = Math.sqrt(this.x * this.x + this.y * this.y);
        var ratio = newvalue/oldvalue;
        this.x *= ratio;
        this.y *= ratio;
    },
    get theta() { return Math.atan2(this.y, this.x); }
};

Object.getOwnPropertyDescriptor({x:1}, "x");

Object.getOwnPropertyDescriptor(random, "octet");

// undefined
Object.getOwnPropertyDescriptor({}, 'x');
Object.getOwnPropertyDescriptor({}, "toString");

var o = {};
Object.defineProperty(o, "x", {
    value: 1,
    writable: true,
    enumerable: false,
    configurable: true
});

o.x;
Object.keys(o); // []

Object.defineProperty(o, "x", {
    writable: false
});

o.x = 2; // 操作失败
o.x // 1
Object.defineProperty(o, "x", {
    value: 2
});
o.x // 2

Object.defineProperty(o, "x", {
    get: function() {
        return 0;
    }
});
o.x // 0

var p = {x:1};
var o = Object.create(p);
p.isPrototypeOf(o); // true
Object.prototype.isPrototypeOf(o); // true

function classof(o) {
    if (o === null) return "Null";
    if (o === undefined) return "Undefined";
    return Object.prototype.toString.call(o).slice(8, -1);
}
