const persons = [
    { name: 'John', sex: 'M' },
    { name: 'Jody', sex: 'M' },
    { name: 'Susan', sex: 'F' },
    { name: 'Kate', sex: 'F' },
    { name: 'Sid', sex: 'M' }
  ];

let result = persons.reduce((acc,item)=>{
    if(item.sex === `M`){
        acc.M.push(item.name)
    } else {
        acc.F.push(item.name)
    }
    return acc;
  }, {M: [],F: []})
  // expexted result: { M: ['John', 'Jody', 'Sid'], F: ['Susan', 'Kate'] }
  console.log(result)