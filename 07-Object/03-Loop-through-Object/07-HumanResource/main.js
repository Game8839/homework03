const employees = {
    john: { salary: 1000, address: { district: 'Ratchathewi', province: 'Bangkok' } },
    peter: { salary: 1500, address: { district: 'Pathumwan', province: 'Bangkok' } },
    mike: { salary: 800, address: { district: 'Pakkret', province: 'Nonthaburi' } },
    sarah: { salary: 2200, address: { district: 'Sriraja', province: 'Chonburi' } }
  };

//   console.log(employees[`john`])

let in1 = prompt(`Enter the name: `);

function checkinfo(name1){

    
    for(let name2 in employees){

        // alert(name2)
        if (name2 === name1){
            console.log(`${name1} , salary: ${employees[name1].salary}, address : ${employees[name1].address.district} , ${employees[name1].address.province}`)
        }
      
    }
}
checkinfo(in1)