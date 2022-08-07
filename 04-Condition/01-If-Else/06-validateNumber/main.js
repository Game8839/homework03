let num1 = +prompt('Input number a:');
let num2 = +prompt('Input number b:');

if (isNaN(num1) || isNaN(num2)){
    alert(`Invalid Number`)
} else{

    alert(num1 + num2);
}
