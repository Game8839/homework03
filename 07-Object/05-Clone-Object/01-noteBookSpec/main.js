const notebook = {
    brand: 'ASUS',
    model: 'Vivobook D413IA-EB303TS',
    processor: 'AMD Ryzen 7 4700U 3.6GHz',
    graphics: 'Integrated Graphics : AMD Radeon Graphics',
    ram: '8GB DDR4 Onboard',
    storage: '512GB PCIe NVMe M.2 SSD'
  };

let newobj2 = {};

for(let n in notebook){
    newobj2[n] = notebook[n]
};

console.log(newobj2);

//   let newobj1 = Object.assign(notebook);
//   console.log(newobj1)