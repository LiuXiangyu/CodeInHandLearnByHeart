function factorial(num) {
    if (num <= 1) {
        return 1;
    } else {
        return num * factorial(num - 1);
    }
}
var anotherFactorial = factorial;
factorial = null;
alert(anotherFactorial(4)); // error
/////////////////////////////////////////////////////////
function factorial(num) {
    if (num <= 1) {
        return 1;
    } else {
        return num * arguments.callee(num - 1);
    }
}
var anotherFactorial = factorial;
factorial = null;
alert(anotherFactorial(4)); // 24
////////////////////////////////////////////////////////
var factorial = (function f(num) {
    if (num <= 1) {
        return 1;
    } else {
        return num * f(num - 1);
    }
});
