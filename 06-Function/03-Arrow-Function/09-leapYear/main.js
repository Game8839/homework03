
let leapyear = (year) => {
    if ( year % 100 === 0){
        if ( year % 400 === 0){
            return alert (`${year} is a leap year`);
        } else return alert (`${year} is not a leap year`);

    }
    else if (year % 4 === 0){
        alert (`${year} is a leap year`);
    } else return alert (`${year} is not a leap year`);
}

leapyear(2401);