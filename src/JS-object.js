function inherit(p) {
    if (p == null) throw TypeError();
    if(Object.create) {
        return Object.create(p);
    }
    var t = typeof p;
    if (t !== "object" && t !== "function") throw TypeError();
    function  f() {};
    f.prototype = p;
    return new f();
}
var o = {};
o.x = 1;
var p = inherit(o);
p.y = 2;
// p.x = 3;
o.x = 4;
o.z = 5;
Object.prototype.w = 6
console.log(p.w);
console.log(o.x);