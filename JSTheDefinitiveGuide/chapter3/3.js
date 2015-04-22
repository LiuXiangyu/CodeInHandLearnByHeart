Math.pow(2, 53); // 2 的53次幂
Math.round(.6); // 四舍五入
Math.ceil(.6); // 向上取整
Math.floor(.6); // 向下取整
Math.abs(-5); // 取整
Math.max(x, y, z);
Math.min(x, y, z);
Math.random(); // 生成一个大于等于零小于1.0的随机数
Math.PI;
Math.E;
Math.sqrt(3);
Math.pow(3, 1/3);
Math.sin(0);
Math.log(10);
Math.log(100)/Math.LN10;
Math.log(512)/Math.LN2;
Math.exp(3);

var x = .3 - .2;
var y = .2 - .1;
x == y; // false

var then = new Date(2011, 0, 1);
var later = new Date(2011, 0, 1, 17, 10, 30);
var now = new Date();
var elapsed = now - then;
later.getFullYear();
later.getMonth();
later.getDate();
later.getDay();
later.getHours();
later.getUTCHours();

var s = "hello, world"
s.charAt(0); // 'h'
s.charAt(s.length - 1) // 'd'
s.substring(1, 4) // "ell"
s.slice(1, 4) // "ell"
s.slice(-3); // "rld"
s.indexOf("l"); // 2
s.lastIndexOf("l"); // 10
s.indexOf("l", 3); // 3
s.split(", "); // ["hello", "world"]
s.replace("h", "H"); // "Hello, world"
s.toUpperCase() // "HELLO, WORLD"

var s = "test";
s.len = 4;
var t = s.len; // undefined

var s = "test", n = 1, b = true;
var S = new String(s);
var N = new Number(n);
var B = = new Boolean(b);
S == s; // true
S === s; // false

var o = { x:1 };
o.x = 2;
o.y = 3;

var a = [1, 2, 3];
a[0] = 0;
a[3] = 4;

var o = {x:1}, p = {x:1};
o == p; // false
o === p; // false
var a = [], b = [];
a == b; // false
a === b; // false

var a = [];
var b = a;
b[0] = 1;
a[0] // 1
a === b; // true

var a = ['a', 'b', 'c'];
var b = [];
for (var i = 0; i < a.length; ++i) {
    b[i] = a[i];
}

function equalArrays(a, b) {
    if (a.length != b.length) return false;
    for (var i = 0; i < a.length; ++i) {
        if (a[i] !== b[i]) return false;
    }
    return true;
}

10 + " objects"; // "10 objects"
"7" * "4" // "28"
"7" + 4 // "74"
var n = 1 - "x"; // NaN
n + " objects" // NaN object"

null == undefined
"0" == 0
0 == false
"0" == false

Number("3"); // 3
String(false); // "false"
Boolean([]) // true
Boolean({}) // true
Boolean(0) // false
Object(3) // new Number(3)


new Object(3) == new Number(3); // false
typeof new Object(3) === typeof new Number(3); // true

x + "" // String(x)
+x // Number(x)
!!x // Boolean(x)

var n = 17;
binary_string = n.toString(2); // "10001"
octal_string = "0" + n.toString(8); // "021"
hex_string = "0x" + n.toString(16); // "0x11"

var n = 123456.789;
n.toFixed(0); // "123457"
n.toFixed(2); // "123456.79"
n.toFixed(5); // "123456.78900"
n.toExponential(1); // "1.2e+5"
n.toExponential(3); // "1.235e+5"
n.toPrecision(4); // "1.235e+5"
n.toPrecision(7); // "123456.8"
n.toPrecision(10); // "123456.7890"

parseInt("3 blind mice"); // 3
parseFloat(" 3.14 meters") // 3.14
parseInt("-12.34"); // -12
parseInt("0xFF"); // 255
parseInt("0xff"); // 255
parseInt("-0XFF"); // -255
parseFloat(".1"); // 0.1
parseInt("0.1"); // 0
parseInt(".1"); // NaN
parseFloat("$72.47"); // NaN

2~36
parseInt("11", 2);
parseInt("ff", 16);
parseInt("zz", 36);
parseInt("077", 8);
parseInt("077", 10);

[1, 2, 3].toString(); // "1,2,3"
(function(x) { f(x); }).toString();

var d = new Date(2010, 0, 1);
d.valueOf();

var now = new Date();
typeof (now + 1) // "string"
typeof (now - 1) // "number"
now == now.toString();
now > (now - 1)

var scope = "global";
function checkscope() {
    var scope = "local";
    return scope;
}
checkscope(); // "local"

///////////////////////////////////////////////
scope = "global";
function checkscope2() {
    scope = "local";
    myscope = "local";
    return [scope, myscope];
}

checkscope2() // ["local", "local"]
scope // "local"
myscope // "local"
//////////////////////////////////////////////
var scope = "global scope";
function checkscope() {
    var scope = "local scope";
    function netsted() {
        var scope = "netsted scope";
        return scope;
    }
    return netsted();
}
checkscope()

/////////////////////////////////////////////////
function test(o) {
    var i = 0;
    if (typeof o == "object") {
        var j = 0;
        for (var k = 0; k < 10; k++) {
            console.log(k);
        }
    }
    console.log(j);
}

var scope = "global";
function f() {
    console.log(scope); // "undefined"
    var scope = "local"; 
    console.log(scope); // "local"
}

///////////////////////////////////////////
var truevar = 1;
fakevar = 2;
this.fakevar2 = 3;
delete truevar // false
delete fakevar // true
delete this.fakevar2 // true
