const inventory = [
    { name: 'apples', quantity: 2 },
    { name: 'bananas', quantity: 0 },
    { name: 'cherries', quantity: 5 }
  ];

  // let ans = inventory.find(item => item.name === 'cherries');
  let ans = inventory.find(function(item){

    return item.name === 'cherries';
  })
  console.log(ans);