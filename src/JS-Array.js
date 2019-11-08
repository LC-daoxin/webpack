let A = [12, 43, 65, 2, 102, 22, 7, 304];
A.sort(function (a, b) {
   return b - a;
});
console.log(A);

let B = [12, 43, 65, 2, 102, 22, 7, 304];
let BArr = B.forEach(function (item, index, Arr) {
    Arr[index] = item * 2;
});
console.log(B);

let C = [12, 43, 65, 2, 102, 22, 7, 304];
let CArr = C.map(function (item, index, Arr) {
    return item + 1;
});
console.log(CArr);

let D = [12, 43, 65, 109, 110, 102, 22, 7, 304];
let DArr = D.filter(function (item, index, Arr) {
    return ( Arr[index] - 10 ) < 100;
});
console.log(DArr);

let E = [12, 43, 65, 109, 110, 102, 22, 7, 304];
let Es = E.every(function (x) {
    return x < 1000
});
console.log(Es);

let F = [12, 43, 65, 109, 110, 102, 22, 7, 304];
let Fs = F.some(function (x) {
    return x > 304
});
console.log(Fs);

