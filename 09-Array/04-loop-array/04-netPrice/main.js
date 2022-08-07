const sales = [
    { price: 1000, discount: 0.1 },
    { price: 500, discount: 0.05 },
    { price: 100 }
  ];
  
let netprice ;
let Summary = []
sales.forEach((item,index,arr) => {
    let currentobj = {};
    if(!item.discount){
        netprice = item.price
        

    } else{
        netprice = item.price * (1- item.discount)
        
    }

    currentobj.netprice = netprice
    Summary.push(currentobj);


})


console.log(Summary);