const alphabets = ['a', 'b', 'a', 'c', 'a', 'd'];
let indexa = [];
let i = 0;

// for (let index in alphabets){
//     if(alphabets[index] === `a`){
//         indexa.push(index)
//     }
// }

// while (alphabets.indexOf(`a`, i) !== -1){
//     indexa.push(alphabets.indexOf(`a`,i))
//     i++;
// }

// alphabets.forEach((item,index)=>{
//     if (item === `a`) {
//         indexa.push(index)
//     }
// })
let foundindex = alphabets.indexOf(`a`);
do{
    foundindex = alphabets.indexOf(`a`,foundindex)
    if(foundindex !== -1){
        indexa.push(foundindex)
        foundindex = alphabets.indexOf(`a`,foundindex+1)
    }

} while(foundindex !== -1)

console.log(indexa)

