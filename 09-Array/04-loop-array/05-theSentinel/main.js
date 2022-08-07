let myfunc = ()=>{
    let num = +prompt(`Enter the number`);
    let Array = [];
    sum = 0;
    while( num !== null && num !== undefined && isNaN(num) === false){
        Array.push(num)
        num = +prompt(`Enter the number`)

    }

    Array.forEach((item,index,arr)=>{
        sum += item;
    })
    console.log(Array)
    return console.log(sum)
}

myfunc();