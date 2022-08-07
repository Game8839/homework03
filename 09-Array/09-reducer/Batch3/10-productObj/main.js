const products = [
    { id: 1, name: 'Crystal' },
    { id: 4, name: 'Namthip' },
    { id: 5, name: 'Nestle' }
  ];

let result = products.reduce((acc,item,index)=>{
    acc[item.id] = { name : item.name}
    return acc

    }
,{})

console.log(result)