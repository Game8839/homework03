let num;
let average = 0;
let sum = 0;
let count = 0;

do{
    num = +prompt(`Enter the number`);
    count++;
    sum += num;
    average = sum / count;
    console.log(sum);
    console.log(count);
    console.log(average);

} while ( num !== NaN && num !== undefined && num !== null && num >= 0)