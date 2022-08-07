let n1 = prompt(`input the number`);

draw(n1)

function draw(n){
    
    let num = ``;
    for (let i = n; i >= 1; i--){
        for(let j = 1; j <= n; j++){
             
            num += i
        }
        num += `\n`
    }
    return console.log(num)
}