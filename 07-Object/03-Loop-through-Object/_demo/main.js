function calrealprice(obj){
    for (let n in obj){
        console.log(n.price)
        console.log(n)
        let netprice = n.price * n.amount * (1 - n.discount)
        n.netprice = netprice;
    }
  
}
let newobj = calrealprice({name : {price: 10, discount: 0.1, amount: 2}, gaga : {price: 10, discount: 0.1, amount: 2}});
console.log(newobj);