let str = 'I live in Thailand';
// expected result: {i: 4, l: 2, v: 1, e:1, n: 2, t: 1, h:1, a:2, d:1}

let lowercase = str.toLocaleLowerCase()
const arrChar = lowercase.split(``).sort()
arrChar


let result = arrChar.reduce((acc,item,index)=>{
    if(item.trim() !== ``){
        
        if (!acc[item]){
    
            acc[item] = 1
        } else {
            acc[item] += 1
        }
    
        
    }
    return acc
        
},{})
result