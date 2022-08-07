let a = prompt(`enter the number`);
let p = ``;

for(let i = 0; i < a; i++){
    for(j = 0; j < i; j++){
        p += `*  `;
        console.log(p);
    }
    p += '\n'
}