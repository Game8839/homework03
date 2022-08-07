let sum = 0;

// for(let i = 1; i <= 100; i++){
//     sum += i
// }
// console.log(sum);

// for(let i = 1; i <= 100; i++){
//     if(i % 2 === 0){
//         sum += i
//     }
    
// }
// console.log(sum);

// for(let i = 1; i <= 100; i++){
//     if(i % 2 === 1){
//         sum += i
//     }
// }
// console.log(sum);
let sum1 = 0;
let sum2 = 0;

for(let i = 1; i <= 100; i++){
    if(i % 2 === 0){
        sum1 += i ** 2
    } 
    if( i % 3 === 0){

        sum2 += i ** 2
    }  
    
}
console.log(sum);
console.log(` the result of devisible number by 2 - devisible number by 3 ${sum1 - sum2}`);
