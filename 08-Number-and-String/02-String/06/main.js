function extractCurrencyValue(a,rate){
    let dollar = +a.slice(1);
    let bath = rate * dollar
    return `THB`+ bath
}
console.log(

    extractCurrencyValue('$120', 30)
)