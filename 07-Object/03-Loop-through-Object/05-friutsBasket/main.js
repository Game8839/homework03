
let myfruitbasket = {};

function addfruit(){
    let myfruit;
    let fruitquantity;
    let fruitbasket = {};
    while(true){
        myfruit = prompt(`Enter the fruit name`);
        if (myfruit === `stop` || myfruit.trim() === `` || myfruit === null){break}
        fruitquantity = prompt(`Enter the quantity of the fruit`)
        if (fruitquantity === `stop` || fruitquantity.trim() === `` || fruitquantity === null){break}
        myfruitbasket[myfruit] = fruitquantity;
    
    }
    for(let n in myfruitbasket){
        if (myfruitbasket[n] > 1) {
            console.log(n)
            n += `s`
        }
    }
    
    

}
addfruit();
console.log(myfruitbasket)