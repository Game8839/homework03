// - ให้เขียนโปรแกรมรับค่า 4 ค่าได้แก่ ชื่อสินค้า จำนวนที่ขาย ราคาต่อชิ้น และส่วนลดต่อชิ้นหน่วยเป็นเปอร์เซนต์  
// - นำค่าที่รับมาไปสร้างเป็น object ที่มี key-value ตามค่าที่รับมา ถ้าส่วนลดเป็น 0 หรือไม่มีค่าไม่ต้องสร้าง key-value ที่เก็บส่วนลด  
// - สร้างฟังก์ชันคำนวณราคาที่แท้จริงของ object (ราคาหลังหักส่วนลด)

// let mybasket = {};

function myfunc(){
    let name1;
    let amount;
    let price;
    let discount;
    let mybasket = {};
    do {
        name1 = prompt(`Enter the name of Grocery`);
        if (name1 === `stop` || name1.trim() === `` || name1 === null){break}

        amount = prompt(`Enter amount of grocery`)
        if (amount === `stop` || amount.trim() === `` || amount === null ){break}

        price = prompt(`Enter price of grocery`)
        if (price === `stop` || price.trim() === `` || price === null ){break}
        
        discount = prompt(`Enter discount of grocery`)

        mybasket[name1] = {amount: amount , price : price , discount : discount / 100}

        // if (mybasket[name1].discount === 0 || mybasket[name1].discount === undefined || mybasket[name1].discount === `` || mybasket[name1].discount == null){
        //      mybasket[name1].discount;
        // } 
        
        
        
        
      
        

    } while( true);

    for (let n in mybasket){
        if (n.discount === 0){
            delete n.discount
        }
    }
    return mybasket; 
    // for(let n in mybasket){
    //     if (mybasket[n] > 1) {
    //         console.log(n)
    //         n += `s`
    //     }
    // }
}

let mybasket1 = myfunc();
console.log(mybasket1)

function calrealprice(obj){
    for (let n in obj){
        
        
        let netprice = obj[n].price * obj[n].amount * (1 - obj[n].discount);
        obj[n].netprice1 = netprice;
    }
    return obj;
  
}
let newobj = calrealprice(mybasket1);
console.log(newobj);