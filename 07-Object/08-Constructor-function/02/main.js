function Accumulator(startingValue){
    this.num;
    this.currentValue = +startingValue;
    this.read = function(){
        this.num = +prompt(`input the number`)
        this.currentValue += this.num
    }
    this.show = function(){
        alert(this.currentValue)
    }

}

let mynum = new Accumulator(7);
mynum.read();
mynum.show();