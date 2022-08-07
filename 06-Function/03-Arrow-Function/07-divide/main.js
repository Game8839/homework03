let a = +prompt(`Enter your number`);

let check7 = (num) => {
    if (num % 7 === 0){
        return console.log(`Your number is divisible by 7`)
    } 
    return console.log(`Your number is not divisible by 7`)
    
}
check7(a);