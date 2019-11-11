var Set = (function invovation() {
    function Set() {
        this.values = {};
        this.n = 0;
        this.add.apply(this.arguments);
    }
    Set.prototype.add = function (value) {
        return value
    };
    return Set
}());
var a = new Set();
console.log(a.add([1]));