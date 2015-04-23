var empty = []
var primes = [2, 3, 5, 7, 11];
var misc = [1.1, true, "a",];

var base = 1024;
var table = [base, base + 1, base + 2, base + 3];

var b = [[1, {x:1, y:2}], [2, {x:3, y:4}]];
var count = [1,,3]; // 3 elements
var undefs = [,,]; // 2 elements

var a = new Array();
var a = new Array(10);

var a = new Array(5, 4, 3, 2, 1, "testing, testing");

a[-1.23] = true; // "-1.23"
a["1000"] = 0; //a[1000]
a[1.000] // a[1]

a = new Array(5); // a.length 5
a = []; // length = 0
a[1000] = 0; // length = 1001

var a1 = [,,,];
var a2 = new Array(3);
0 in a1; // true
0 in a2; // false

var a1 = [,];
var a2 = [undefined];
0 in a1; // false
0 in a2; // true

a = [1, 2, 3, 4, 5];
a.length = 3;
a.length = 0; // 删除所有元素
a.length = 5; // 没有元素了

a = [1, 2, 3];
Object.defineProperty(a, "length", {
    writable: false
});
a.length = 0; // a不会改变

a = [1, 2, 3];
delete a[1];
1 in a // false
a.length // 3

for (var i = 0; i < a.length; i++) {
    if (!a[i]) continue;
    // code
}

for (var i = 0; i < a.length; i++) {
    if (a[i] === undefined) continue;
    // code;
}

for (var i = 0; i < a.length; ++i) {
    if (!(i in a)) continue;
    //
}

for (var index in separseArray) {
    var value = separseArray[index];
    //
}

for (var i in a) {
    if (!a.hasOwnProperty(i)) continue;
    //
}

var data = [1, 2, 3, 4, 5];
var sumOfSquares = 0;
data.forEach(function(x) {
    sumOfSquares += x * x;
});

///////////////////////
join()
var a = [1, 2, 3];
a.join(); // "1,2,3"
a.join(" "); // "1 2 3"
a.join(""); // "123"
var b = new Array(10);
b.join('-'); // "---------"
////////////////////////
reverse()
var a = [1, 2, 3];
a.reverse().join(); // "3,2,1"
////////////////////////
sort()
var a = new Array("banana", "cherry", "apple");
a.sort();
var s = a.join(", "); // s == "apple, banana, cherry"
var a = [33, 4, 1111, 222];
a.sort();
a.sort(function(a, b) {
    return a - b;
});

a.sort(function(a, b) {
    return b - a;
});

a = ['ant', 'Bug', 'cat', 'Dog']
a.sort();
a.sort(function(s, t) {
    var a = s.toLowerCase();
    var b = t.toLowerCase();
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
});
////////////////////////////
concat()
var a = [1, 2, 3];
a.concat(4, 5);
a.concat([4, 5]); // [1, 2, 3, 4, 5]
a.concat([4, 5], [7, 8]);
a.concat(4, [5, [7, 9]]); // [1, 2, 3, 4, 5, [6, 7]]
////////////////////////////
var a = [1, 2, 3, 4, 5];
a.slice(0, 3); // [1, 2, 3]
a.slice(3); // [4, 5]
a.slice(1, -1); // [2, 3, 4]
a.slice(-3, -2); // [3]
/////////////////////////////
splice()
var a = [1, 2, 3, 4, 5, 6, 7, 8];
a.splice(4); // return: [5, 6, 7, 8] a = [1, 2, 3, 4]
a.splice(1, 2); // return: [2, 3] a = [1, 4]
a.splice(1, 1); // [4] a = [1]

var a = [1, 2, 3, 4, 5];
a.splice(2, 0, 'a', 'b'); // return: [] a = [1, 2, 'a', 'b', 3, 4, 5]
a.splice(2, 2, [1, 2], 3); // return: ['a', 'b'] a = [1, 2, [1, 2], 3, 3, 4, 5]
///////////////////////////////
var a = []
a.unshift(1); // [1] return length
a.unshift(22); // [22, 1]
a.shift(); // [1] return 22
a.unshift(3, [3, 4]); // [3, [3, 4], 1]
///////////////////////////////
forEach()
var data = [1, 2, 3, 4, 5]
data.forEach(function(v, i, a) {
    a[i] = v + i;
});
//////////////////////////////
map()
a = [1, 2, 3];
b = a.map(function(x) {
    return x * x;
});
//////////////////////////////
filter()
a = [5, 4, 3, 2, 1]
smallvalues = a.filter(function(x) { return x < 3; }); // [2, 1]
everyother = a.filter(function(x, i) {
    return i % 2 === 0;
}); // [5, 3, 1]

var dense = sparse.filter(function() {
    return true;
});
////////////////////////////////
every some
a = [1, 2, 3, 4, 5];
a.every(function(x) {
    return x < 10;
}); // true

a.every(function(x) {
    return x % 2 === 0;
}); // false

a = [1, 2, 3, 4, 5];
a.some(function(x) {
    return x % 2 === 0;
}); // true

a.some(isNaN); // false
/////////////////////////////////
var a = [1, 2, 3, 4, 5];
var sum = a.reduce(function(x, y) {
    return x + y;
}, 0); // sum

var product = a.reduce(function(x, y) {
    return x * y;
}, 1);

var max = a.reduce(function(x, y) {
    return x > y ? x : y;
});

var a = [2, 3, 4];
var big = a.reduceRight(function(accumulator, value) {
    return Math.pow(value, accumulator);
});

var objects = [{x:1}, {y:2}, {z:3}];
var merged = objects.reduce(union); // {x:1, y:2, z:3}
/////////////////////////////////////////////////////////
indexOf lastIndexOf
a = [0, 1, 2, 1, 0];
a.indexOf(1); // 1
a.lastIndexOf(1); // 3
a.indexOf(3); // -1

function findall(a, x) {
    var results = [],
        len = a.length,
        pos = 0;
    while (pos < len) {
        pos = a.indexOf(x, pos);
        if (pos === -1) break;
        results.push(pos);
        pos = pos + 1;
    }
    return results;
}
//////////////////////////////////////////////////////////
Array.isArray([]); // true
Array.isArray({}); // false
[] instanceof Array; // true
({}) instanceof Array; // false
var isArray = Function.isArray || function(o) {
    return typeof o === "object" &&
        Object.prototype.toString.call(o) === "[object Array]";
};
//////////////////////////////////////////////////////////
var a = {};
var i = 0;
while (i < 10) {
    a[i] = i * i;
    i++;
}
a.length = i;

var total = 0;
for (var j = 0; j < a.length; j++) {
    total += a[j];
}

function isArrayLike(o) {
    return (o &&
        typeof o === "object" &&
        isFinite(o.length) &&
        o.length >= 0 &&
        o.length === Math.floor(o.length) &&
        o.length < 4294967296);
}

var a = {"0": "a", "1": "b", "2": "c", length: 3};
Array.prototype.join.call(a, "+"); // "a+b+c"
Array.prototype.slice.call(a, 0); // ["a", "b", "c"]
Array.prototype.map.call(a, function(x) {
    return x.toUpperCase();
}); // ["A", "B", "C"]

Array.join = Array.join || function(a, sep) {
    return Array.prototype.join.call(a, sep);
};

Array.slice = Array.slice || function(a, from, to) {
    return Array.prototype.slice.call(a, from, to);
};

Array.map = Array.map || function(a, f, thisArg) {
    return Array.prototype.map.call(a, f, thisArg);
};

var s = test;
s.charAt(0);
s[1]

s = "JavaScript";
Array.prototype.join.call(s, " "); // J a v a S c r i p t"
Array.prototype.filter.call(s, function(x) {
    return x.match(/[^aeiou]/);
}).join(""); // "JvScrpt"

