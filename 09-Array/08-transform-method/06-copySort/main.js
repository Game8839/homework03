let arr = ['React', 'Vue', 'Angular'];
let sorted = copySorted(arr);

function copySorted(inputarr){
    let newarr = arr.slice(0)
    console.log(newarr);
    newarr.sort((a,b)=> a < b? 1 :-1)
    
    return newarr
}
console.log(sorted); // Angular, React, Vue
console.log(arr); // React, Vue, Angular (no changes)