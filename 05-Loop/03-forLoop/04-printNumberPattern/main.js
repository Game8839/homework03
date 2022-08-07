let n = prompt(`enter number`);
let p = ``;

for(let i = 0; i < n; i++){
    for(j = 1; j <= i; j++){
        p += j +  ` `;
        console.log(p);
    }
    p += '\n'
}