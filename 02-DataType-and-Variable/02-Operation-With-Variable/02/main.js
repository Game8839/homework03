let a = 1;
let b = 2;
let c = a++; //1
let d = ++c; //2
let e = ++d + d++ + d; //3 + 3 + 4

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);