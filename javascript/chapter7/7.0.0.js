function functionName(arg0, arg1, arg2) {}
alert(functionName.name); // functionname
//////////////////////////////////////////////////////

sayHi();
function sayHi() {
    alert("Hi!");
}
// 函数声明提升
//////////////////////////////////////////////////////
sayHi(); // 错误：函数还不存在
var sayHi = function () {
    alert("Hi!");
}

// 不要这样做

if (condition) {
    function sayHi() {
        alert("Hi!");
    }
} else {
    function sayHi() {
        alert("Yo!");
    }
}

// 可以这样做

var sayHi;
if (condition) {
    sayHi = function() {
        alert("Hi!");
    }
} else {
    sayHi = function() {
        alert("Yo!");
    }
}


//////////////////////////////////////////////////////
function createComparisonFunction(propertyName) {
    return function(object1, object2) {
        var value1 = object1[propertyName];
        var value2 = object2[propertyName];
        if (value1 < value2) {
            return -1;
        } else if (value1 > value2) {
            return 1;
        } else {
            return 0;
        }
    }
}
//////////////////////////////////////////////////////
