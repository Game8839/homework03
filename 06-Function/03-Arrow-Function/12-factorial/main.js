let result = 1;
let fac = (num) => {
    for (i = num; i >= 2; i--){
        result *= i

    }
    return result
}

console.log(fac(4))