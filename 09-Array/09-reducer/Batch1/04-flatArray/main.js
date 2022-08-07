let flattened = [
    [0, 1],
    [2, 3],
    [4, 5]
  ];

  let newarr = flattened.reduce((acc,item) => acc.concat(item),[])
  console.log(newarr)