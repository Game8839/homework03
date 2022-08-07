let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  };

let calSararies = (obj) => {
    let sum = 0;
    for (let n in obj){
        
        sum += obj[n]
    }
    return sum

}

console.log(calSararies(salaries));