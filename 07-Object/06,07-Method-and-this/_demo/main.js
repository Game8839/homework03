const user = {
    name: `Game`,
    age: 14,
    increase
}

function increase(){
    this.age++
}
console.log(user.age)
user.increase()
console.log(user.age)