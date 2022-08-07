// - จงเขียนฟังก์ชัน deleteTask(id) เพื่อลบ element ใน tasks ที่มี property ชื่อ id เท่ากับ id 
// - execute deleteTask(1)

const tasks = [
    { id: 1, name: 'Fishing' },
    { id: 2, name: 'Shopping' },
    { id: 3, name: 'Swimming' }
  ];

function deleteTask(id1){
    let indextask = tasks.findIndex(item=>item.id === +id1)
    console.log(indextask);
    tasks.splice(indextask,1)
}
deleteTask(1)
console.log(tasks)