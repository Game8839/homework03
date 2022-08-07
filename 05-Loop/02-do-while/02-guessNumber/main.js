
let a = +prompt(`inches:`);
let d; 
do{
    d = +prompt(`Guess my number`);
    if (d < a) {
       alert(`too less`);

    }
    else if (d > a) {
       alert(`too much`);

    }
   else {
       alert(`Right`);
       

    }
} while( d !== a)

