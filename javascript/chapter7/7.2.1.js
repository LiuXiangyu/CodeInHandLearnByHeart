function createFunctions() {
    var result = new Array();

    for (var i = 0; i < 10; ++i) {
        result[i] = function () {
            return i;
        };
    }

    return result;
}
var arr = createFunctions();
arr[0](); // 10
/////////////////////////////////////////
var a = 0;
function one() {
    for (var i = 0; i < 10; ++i) {
        setTimeout(function() {
            a += i;
        }, 0);
    }
}

function two() {
    alert(a);
}
one();
setTimeout(two, 0); // 100
