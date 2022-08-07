let alphabets = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd'];
// expected result: ['a', 'b', 'c', 'e', 'd']


const arrChar = alphabets.sort()
arrChar


let result = arrChar.reduce((acc,item,index)=>{
    
    if (!acc.includes(item)){
    
         acc.push(item)
    } 
        
    
    return acc
        
},[])
result