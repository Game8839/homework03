function myfunc(num){
    // return num.toFixed(2)

    return (Math.floor(num * 100)/ 100).toFixed(2)
}

let a = prompt(`enter the number`);
console.log(myfunc(a))