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
console.log(f(6,5,7));

var Person1  = function () {
    this.name = 'dada';
}
var Person2 = function () {
    this.getname = function () {
        console.log(this.name);
    }
    Person1.call(this);//this指向Person2，结果相当于给Person2加了name属性
}
var person = new Person2();
person.getname();       // dada
console.log(person)

function ff(y) {
    return this.x + y
}
var o = { x:1 };
var g = ff.bind(o);
console.log(g(2));


function array(a, n) {
    return Array.prototype.slice.call(a, n || 0)
}
function Left(f /* , ... */) {
    var args = arguments;
    return function () {
        var a = array(arguments);
        a = a.concat(array(args, 1));
        console.log(a);
        return f.apply(this, a);
    }
}
var f1 = function (x, y, z) {
  return console.log(x * (y - z))
};
Left(f1, 2)(3, 4);