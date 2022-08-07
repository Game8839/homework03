// const array = [9, 17, 23, 5];
// // ค่าที่มากกว่า 10
// let ans = array.filter(function(item){
//     if(item > 10){
//         return true
//     }
//     return false})



// const array = [1, 2, 3, 4];
// // ค่าที่เป็นเลขคี่
// let ans = array.filter(item => item % 2 === 1);


// const array = [1, '1', 2, {}];
// // ค่าที่ประเภทข้อมูลเป็น Number
// let ans = array.filter(item =>typeof(item) === `number`);

// const array = ['apple', 'banana', 'orange', 'pineapple', 'watermeon'];
// // ค่าที่มีตัวอักษรมากกว่า 6 ตัว
// let ans = array.filter(item => item.length > 6);


// const array = [1, -3, 2, 8, -4, 5];
// // ค่าที่เป็นเลขบวก
// let ans = array.filter(item => item > 0);

// const array = [1, 3, 4, 5, 6, 7, 8];
// // ค่าที่หาร 3 ลงตัว
// let ans = array.filter(item => item % 3 === 0);

// const array = ['Elephant', 'Ant', 'Cat', 'Eagle', 'Zebra'];
// // ค่าที่ขึ้นต้นด้วยตัว E
// let ans = array.filter(item => item[0] === `E`);

// const array = ['APPLE', 'oRanGE', 'PEACH', 'PaPAYA'];
// // ค่าที่เป็นตัวพิมพ์ใหญ่ทั้งหมด
// let ans = array.filter(item => item === item.toUpperCase());

// const array = ['Krabi', 'Chonburi', 'Buriram', 'Saraburi','Phrae'];
// // ค่าที่มีคำว่า buri เป็นส่วนประกอบโดยไม่สนใจตัวพิมพ์เล็กหรือตัวพิมพ์ใหญ่
// let ans = array.filter(item => item.toLowerCase().includes(`buri`)); 

// const array = [
//   { name: 'Ben', age: 14 },
//   { name: 'Phil', age: 18 },
//   { name: 'John', age: 32 },
//   { name: 'Ann', age: 16 },
//   { name: 'Paul', age: 24 }
// ];
// // อายุไม่น้อยกว่า 18 
// let ans = array.filter(item => item.age >= 18 );


// const array = [
//   { id: 1, name: 'Pepsi' },
//   { id: 2, name: 'Mirinda' },
//   { id: 3, name: 'Coke' },
//   { id: 4, name: 'Fanta' },
//   { id: 5, name: 'Sprite' }
// ];
// // id ไม่เท่ากับ 4
// let ans = array.filter(item => item.id !== 4 );

// const array = [
//   { name: 'John', birth: '2001-07-31' },
//   { name: 'Jack', birth: '1990-06-24' },
//   { name: 'Jim', birth: '1984-12-13' },
//   { name: 'Jeff', birth: '1996-02-05' },
//   { name: 'Joe', birth: '2002-06-13' }
// ];
// // console.log(array[1].birth.slice(5,7))
// // เกิดเดือน 6
// let ans = array.filter(item => item.birth.slice(5,7) == `06` );

console.log(ans)