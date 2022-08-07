let names = ['Jack', 'John', 'Bill', 'John', 'Rick', 'Bill', 'John'];
// expected result: {Jack: 1, John: 3, Bill: 2, Rick: 1}

let result = names.reduce((acc,item,index)=>{
    if (!acc[item]){

        acc[item] = 1
    } else {
        acc[item] += 1
    }

    
    return acc
},{})
result