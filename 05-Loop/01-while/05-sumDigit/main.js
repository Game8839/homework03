let num = +prompt('number')
let sum = 0;

while (num >= 1){
    let remainder = num % 10;
    num = (num - remainder) / 10;
    sum += remainder;
}

alert(sum)
