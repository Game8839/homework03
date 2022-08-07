let a = prompt(`Enter your number to check whether the number is a prime number:`);
let isprime = (num) => {
    

    if (num === 0 && num === 1){
        return console.log(`please enter the number more than 1`)
    }
    for (let i = 2; i <= num ; i++ ){
        if (num % i === 0){
            return console.log(`the input number is not a prime number`);

        }
        return console.log(`the input number is a prime number`);
    }
}

isprime(a);

