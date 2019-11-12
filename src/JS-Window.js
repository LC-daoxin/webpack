function invoke(f, start, interval, end) {
    if(!start) start = 0;
    if(arguments.length <= 2){
        setTimeout(f, start)
    }else{
        setTimeout(repeat, start);
        function repeat() {
            var h = setInterval(f, interval);
            if(end){
                setTimeout(function () {
                    clearInterval(h);
                }, end)
            }
        }
    }
}
function f() {
    console.log(1)
}
// invoke(f, 2000, 500, 100000);

console.log(document.location);
console.log(window);

/* do {
    var name = prompt("name?");
    var correct = confirm("enterd '"+ name + "'.")
    console.log(correct)
}while(!correct) alert("Hello " + name) */
console.log(parent);
console.log(Element);
console.log(Node);
console.log(Attr);
console.log(HTMLElement);
console.log(HTMLHeadElement);

var c = document.body.childNodes;
var E = document.body.firstElementChild;
var F = document.body.firstChild
var G = document.body.children
console.log(E);
console.log(F);
console.log(G);