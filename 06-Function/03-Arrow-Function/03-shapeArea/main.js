const square = (n) => {
    n ** 2;
  };
  
  console.log(square(7)); // undefined as no return command in {} 

  

  const calcCircleArea = (r) => Math.PI * r ** 2;
  console.log(calcCircleArea(3)); // log 28.27