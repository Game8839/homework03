let t = ``
for(let i = 1; i <= 12; i++){
    for(j = 1; j <= 12; j++){
        t += `${i} X ${j} = ${i*j}`;
        console.log(t);
        t += `\n`
    }
    t += '\n'
}