
function max(a,b = null,c = null,d = null){
    
    if(a >= b && a >= c && a >= d){
        return a;
    } else if(b >= a && b >= c && b >= d){
        return b;
    } else if(c >= a && c >= b && c >= d){
        return c;
    } else if(d >= a && d >= b && d >= c){
        return d;
    }
}

console.log(max());
console.log(max(2));
console.log(max(3,1));
console.log(max(7,3,9,2));
