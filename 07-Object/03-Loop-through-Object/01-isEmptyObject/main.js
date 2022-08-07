const user = {
    name: `Game`,
    age: 25

};


function isEmptyObject(obj){
    
    for(let n in obj){
        return false
    }
    return true;

}

console.log(isEmptyObject(user))