const arr = [2, `hi`,5 , `hello`, true, `hi`]

let result = arr.find((item,index,array) =>{
    if(item === `hi`){
        return true
    }
})