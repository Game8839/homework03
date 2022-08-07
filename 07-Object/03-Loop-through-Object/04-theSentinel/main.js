let a = {};
let myarray = [];

createObjet();
function createObjet(){
    let myprop;
    let myvalue;
    

    // while(true){
    //     myobj = prompt(`Enter the objectname`)
    //     if (myobj === `stop`){break}
        
        while(true){
            myprop = prompt(`Enter the property name`);
            if (myprop === `stop` || myprop.trim() === `` || myprop === null){break}
            myvalue = prompt(`Enter the value of your property`)
            if (myvalue === `stop` || myvalue.trim() === `` || myvalue === null){break}
            a[myprop] = myvalue;
        
        }
        
        
    // }
    // return myobj;
}

// a = createObjet();
console.log(a);
