function arg(x, y) {
    if(arguments.length != 2){
        throw new Error("function arg called with " + arguments.length + " arguments, but it expects 2 argumnet.")
    }
    if(x <= 1) return 1;
    return x * arguments.callee(x - y, y)
}
console.log(arg(10,2));

var scope = "global scope";
function checkscope() {
    var scope = "local scope";
    function f() {
        return scope
    }
    return f;
}
console.log(checkscope()())

uniqueInreger.num = 0;
function uniqueInreger() {
    return uniqueInreger.num++;
}
uniqueInreger();
uniqueInreger();
uniqueInreger();
uniqueInreger();
uniqueInreger();
uniqueInreger();
console.log(uniqueInreger.num);

var uniqueInreger2 = (function () {
   var num = 0;
   return function () {
       return num++;
   }
}());
uniqueInreger2();
uniqueInreger2();
uniqueInreger2();
uniqueInreger2();
console.log(uniqueInreger2());

function check(args) {
    var actual = args.length;
    var expected = args.callee.length;
    if (actual !== expected) {
        throw Error("Expected " + expected + " args; got " + actual);
    }
}
function  f(x, y, z) {
    check(arguments);
    return x + y + z
}
console.log(f(6,5));