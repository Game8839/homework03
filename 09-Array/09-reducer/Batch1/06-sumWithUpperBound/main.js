let str = '31 45 12 67 34 86 23 37 19 41';
let newstr = str.split(` `)
let ans = newstr.reduce((acc,item) => {
    if(item < 40){
        return acc += +item
    } else {
        return acc
    }
}, 0)
console.log(ans)
