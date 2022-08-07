const a = [1, 5, 7, 11];
const b = [2, 3, 6];
const Array = a.concat(b)

let clone = (arr) => {
    
    return arr.slice();
}

console.log(clone(Array))