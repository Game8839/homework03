let set = new Set();
set.add(`Thailand`);
set.add(`Japan`);
set.add(`Thailand`);
set.add(`China`);
set.add(`India`);
set.add(`Thailand`);
set.add(`China`);
set.add(`Singapore`);
set.add(`Japan`);
set.delete(`India`);
console.log(set.size);

let arr = [];
for(let country of set){
    console.log(country);
    arr.push(country);
}
console.log(arr)