let n = +prompt(`enter the number`)
primenum = ``

function checkprime(num){
    for(let i = 2;i <= num; i++){
        for(let j = 2; j < i; j++){
            console.log(`${i}, ${j}`)

            if(i % j === 0 ){
                break;
            } else{
                primenum += i;
                break;
            }
            // console.log(primenum)
        }
    }
}

checkprime(n);
console.log(primenum)
