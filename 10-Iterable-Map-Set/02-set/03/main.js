const values = [1, 4, 8, 2, 1, 3, 3, 8];

function unique(arr){
    let set = new Set(arr);
    newarr = []
    for(let n of set){
        
        newarr.push(n);
    }
    return newarr;
}
console.log(unique(values)); // [1, 4, 8, 2, 3]