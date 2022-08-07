function Constructor(){
    this.num1 ;
    this.num2 ;
    this.read = function(){

        this.num1 = +prompt(`Input num1`)
        this.num2 = +prompt(`Input num2`)
    }
    this.sum = function(){
        return (this.num1 + this.num2);
    }
    this.mul = function(){
        return (this.num1 * this.num2);
    }
}

let calculator = new Constructor();
calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());
