let s = 'Hello worlld';
let a = s.split(/l\w/);

let s1 = 'Hello worlld apple';
let a1 = s1.replace(/(\w)\1/g, '@@');

let searchIndex = s1.search(/\s/);

let show = {
    s,
    a,
    s1,
    a1,
    searchIndex
};
export default show