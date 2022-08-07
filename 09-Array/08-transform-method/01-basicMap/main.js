// const array = [1, 2, 30, 400];
// // result: [2, 4, 60, 800]
// const result = array.map((item) => {
//     return item * 2;
// })


// const array = [1, 2, 3, 4];
// // result: ["1", "2", "3", "4"]
// const result = array.map((item) => {
//     return `${item} `;
// })

// const array = [1, '1', 2, {}];
// // result: ["number", "string", "number", "object"]
// const result = array.map((item) => {
//     return typeof(item);
// })

// const array = ['apple', 'banana', 'orange'];
// // result: ["APPLE", "BANANA", "ORANGE"]
// const result = array.map((item) => {
//     return item.toUpperCase();
// })

// const array = [1, 3, 4, 5, 6, 7, 8];
// // result: ["odd", "odd", "even", "odd", "even", "odd", "even"]
// const result = array.map((item) => {
//     if (item % 2 === 0){
//         return `even`;
//     } else {return `odd`}
// })

// const array = [1, -3, 2, 8, -4, 5];
// result: [1, 3, 2, 8, 4, 5]
// const result = array.map((item) => {
//     if (item < 0){
//         return -item;
//     } else {return item}
// })




// const array = [0, 5, 10, 7, 6, 5, 0];
// const month = [`Jan`, `Feb`, `Mar`, `Apr`, `May`, `June`,`July`, `Aug`, `Sep`, `Oct`,`Nov`,`Dec`]
// const result = array.map((item) => {
//         return month[item]
//     })



// const array = [1, 16, 81, 256, 625, 1296];
// result: [1, 2, 3, 4, 5, 6]
// const result = array.map((item) => {
//         return item ** (1 / 4)
//     })

// const array = [
//   { name: 'apple', age: 14 },
//   { name: 'banana', age: 18 },
//   { name: 'watermelon', age: 32 }
// ];
// // result: ["apple", "banana", "watermelon"]
// const result = array.map((item) => {
//         return item.name
//     })

// const array = [
//   { name: 'apple', age: 14 },
//   { name: 'banana', age: 18 },
//   { name: 'watermelon', age: 32 }
// ];
// // result: [14, 18, 32]
// const result = array.map((item) => {
//     return item.age
// })

// const array = [
//   { name: 'apple', surname: 'London' },
//   { name: 'banana', surname: 'Bangkok' },
//   { name: 'watermelon', surname: 'Singapore' }
// ];
// // result: ["apple London", "banana Bangkok", "watermelon Singapore"]
// const result = array.map((item) => {
//     return item.name +` `+  item.surname
// })

// const array = [
//   { name: 'apple', birth: '2000-01-01' },
//   { name: 'banana', birth: '1990-10-01' },
//   { name: 'watermelon', birth: '1985-12-01' }
// ];
// // result: [
// //   { name: "apple", birth: "2000-01-01", age: 21 },
// //   { name: "banana", birth: "1990-10-01", age: 31 },
// //   { name: "watermelon", birth: "1985-12-01", age: 36 },
// // ]
// let age;
// let currentyear = 2022;
// const result = array.map((item,index) => {
//     // let newobj = [...array]
//     age = currentyear - item.birth.slice(0,4)
    
//     return {...item,age: age};
// })

const array = [
  { name: 'apple', birth: '2000-01-01' },
  { name: 'banana', birth: '1990-10-10' },
  { name: 'watermelon', birth: '1985-12-30' }
];
// result: [
//     "<tr><td>apple</td><td>01 jan 2000</td></tr>",
//     "<tr><td>banana</td><td>10 oct 1990</td></tr>",
//     "<tr><td>watermelon</td><td>30 dec 1985</td></tr>",
// ]
const result = array.map((item,index) => {
    // let newobj = [...array]
    age = currentyear - item.birth.slice(0,4)
    
    return {...item,age: age};
})


console.log(result)