let arr = [3.24, 2.78, 3.86, 1.37, 0.52];

// let min = arr.reduce((acc,item) => {
//     if(acc >= item) { 
//         return item
//     } else {
//         return acc
//     }}, arr[0])
// console.log(min)

// let max = arr.reduce((acc,item) => {
//     if(acc <= item) { 
//         return item
//     } else {
//         return acc
//     }}, arr[0])
// console.log(max)

let summary = arr.reduce((acc,item) => {
    if(acc.max < item){
        acc.max = item
    }

    if(acc.min > item){
        acc.min = item
    }

    return acc
}, {max: arr[0], min: arr[0]})
summary