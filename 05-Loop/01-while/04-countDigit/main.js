let num = prompt(`Input number`)
let count = 0

while(num >= 1){
    num /= 10;
    count++;
}

alert(count);