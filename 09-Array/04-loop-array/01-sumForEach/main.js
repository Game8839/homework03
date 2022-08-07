const array = [29, 17, 13, 47, 23, 31];
let sum = 0;


// for(let i = 0; i < array.length; i++){
//     sum += array[i]
// }

// for(let n in array){
//     sum += array[n]
// }

// for (let n of array){
//     sum += n
// }

array.forEach((item,index,arr) => {
    sum += item
    
})

console.log(sum);