let n1 = prompt(`input the number`);

draw(n1)
function draw(n){
    
    let num = ``;
    for (let i = 1; i <= n; i++){
        for(let j = 1; j <= n; j++){
             
            num += j
        }
        num += `\n`
    }
    return console.log(num)
}