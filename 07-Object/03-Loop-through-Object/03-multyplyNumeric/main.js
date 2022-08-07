// before 
let menu = {
    width: 200,
    height: 300,
    title: 'My menu'
  };
  

let multiplyNumeric = (obj, num) => {
    for(let n in obj){
        if (typeof(obj[n]) == `number`){
            obj[n] *= num
        }
    }
    
}
multiplyNumeric(menu,3);
console.log(menu);
  
  // after call function multiplyNumeric(menu, 3)
//   menu = {
//     width: 600,
//     height: 900,
//     title: 'My menu'
//   };

