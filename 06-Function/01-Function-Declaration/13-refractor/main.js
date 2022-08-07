// function checkage(age){
//     if ( age > 18){
//         return true;
//     }
//     return confirm(`Did parents allow you?`);
// }

// function checkage(age){
//     let b = age > 18 ? true : confirm(`Did parent allow you?`)
// }

function checkage(age){
    let b = age > 18 || confirm(`Did parent allow you?`);
    return b;
}

let a = prompt(`Enter your age:`);
checkage(a);