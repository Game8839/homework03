let john = { name: 'John', age: 27 };
let jo = { name: 'Jo', age: 21 };
let jin = { name: 'Jin', age: 25 };

let arr = [john, jo, jin];

function getAverageAge(array){
    let sum = array.reduce((acc,item)=> acc + item.age,0)
    return sum / array.length
}
console.log(getAverageAge(arr)); // (27 + 21 + 25) / 3 = 24.33