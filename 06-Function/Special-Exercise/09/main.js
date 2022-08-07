let n1 = prompt(`input the number`);
draw(n1)
function draw(n){
    
    let num = ``;
    let count = 0;
    for (let i = 1; i <= n; i++){      

        count += 2           
        num += count
        num += `\n`
    }
    return console.log(num)
}