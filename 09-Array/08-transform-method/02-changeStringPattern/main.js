// จงเขียนฟังก์ชันในการแปลงคำที่อยู่ในรูปแบบ dash-separated เช่น background-color ให้อยู่ในรูปแบบ camelCase เช่น backgroundColor

let str1 = `background-color`;
let myarr = str1.split('-');
myarr
function myfunc(str){
    
    
    let myarr = str.split('-').map((item,index)=>{
        if (index == 0){
            return item
            
        } else {
            let stra = item.slice(0,1).toUpperCase();
            let strb = item.slice(1);
            return stra + strb          
        }
        
    })
    return console.log(myarr.join(``))

}

myfunc(str1)
myfunc(`jkdfh-akjdsfb-asdklfjn`)