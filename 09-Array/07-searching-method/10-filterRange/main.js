// จงเขียนฟังก์ชัน filterRange(arr, a, b) เพื่อ return array ที่ประกอบด้วย element ของ arr ที่มีค่าอยู่ระหว่าง a กับ b
let myarray = [2,3,5,6,7,8,5,3,32,2,25,5];
function filterRange(arr, a, b){
    let a1 = [];
    if (a < b) {
        a1 = arr.filter(item => item > a && item < b );
    } else {
        a1 = arr.filter(item => item > b && item < a );
    }
    return a1;
}
       



console.log(filterRange(myarray,6,26))