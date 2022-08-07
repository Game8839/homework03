let a = +prompt(`enter number1`);
let b = +prompt(`enter number2`);
let c = +prompt(`enter number3`);

let d = '';
let e = '';
let f = '';

if( a >= b && a >= c){
    d = d+a
    if (b > c){
        e = b
        f = c

    } else {
        e = c
        f = b
    }
    
} else if( b >= a && b >= c){
    d = d+b
    if (a >= c){
        e = a;
        f = c

    } else {
        e = c
        f = a
    }
    
} else if( c >= a && c >= b){
    d = d+c
    if (a >= b){
        e = a;
        f = b

    } else {
        e = b
        f = a
    }
    
}
alert(`${d} ${e} ${f}`);