// - จงเขียนฟังก์ชัน updateTask(id, newName) เพื่อแก้ไขค่า element ใน tasks ที่มี property ชื่อ id เท่ากับ id โดยแก้ไข name ให้มีค่าเป็น newName
// - execute updateTask(2, 'Travelling')

const tasks = [
    { id: 1, name: 'Fishing' },
    { id: 2, name: 'Shopping' },
    { id: 3, name: 'Swimming' }
  ];

function updateTask(id1, newName){
    let indextask = tasks.findIndex(item=>item.id === +id1)
    console.log(indextask);
    tasks.splice(indextask,1,{ id: id1, name: newName })
    
}
updateTask(2, 'Travelling')
console.log(tasks);