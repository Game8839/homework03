function myrandom(min,max){
    
    let diff = Math.random() * (max - min);
    return (min + diff).toFixed(2)


}

console.log(myrandom(6,90))