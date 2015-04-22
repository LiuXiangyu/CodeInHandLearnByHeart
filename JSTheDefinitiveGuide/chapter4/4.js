var rectangle = {upperLeft: {x: 2, y: 2},
    lowerRight: {x:4, y: 5}};
rectangle['upperLeft']
rectangle.upperLeft
rectangle[upperLeft] // error

var square = {"upperLeft": {x: p.x, y: p.y},
    "lowerRight": {x: p.x + 1, y: p.y + 1}};

true + true // 2
2 + null // 2
2 + undefined // NaN

1 + 2 + " blind mice" // "3 blind mice"
1 + (2 + " blind mice"); // "12 blind mice"

x = "1"
++x // 2
x + 1 // "11"

var point = {x:1, y:1};
"x" in point // true
"z" in point // false
"toString" in point // true

var data = [7, 8, 9];
"0" in data // true
1 in data // true
3 in data // false

var d = new Date();
d instanceof Date; // true
d instanceof Object; // true
d instanceof Number; // false
var a = [1, 2, 3];
a instanceof Array; // true
a instanceof Object; // true
a instanceof RegExp; // false

if (a == b) stop();
(a == b) && stop();

data[i++] *= 2;
data[i++] = data[i++] * 2; // not equal

var geval = eval;
var x = "global", y = "global";
function f() {
    var x = "local";
    eval("x += 'changed';");
    return x;
}
function g() {
    var y = "local";
    eval("y += 'changed';");
    return y;
}
console.log(f(), x);
console.log(g(), y);
