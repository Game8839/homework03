const arr = [2, 3, 5, 7, 11];

let squareArr = (array) =>{
    array.forEach((item,index,myarray) => {
        myarray[index] = item **2
        
    });
    return array

}
console.log(

    squareArr(arr) // [4, 9, 25, 49, 121]
)