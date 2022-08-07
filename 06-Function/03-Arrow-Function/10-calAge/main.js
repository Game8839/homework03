let birthdate = 1;
let birthmonth = 1;
let mybirthyear = 1996;

let currentdate = 31;
let currentmonth = 12;
let currentyear = 2020;

let day = 0;
let checkday = (birthyear) => {

    for( i = birthyear ; i <= 2020; i++){
        if ( i % 100 === 0){
            if ( i % 400 === 0){
                day += 366;
            } else day += 365;
    
        }
        else if (i % 4 === 0){
            day += 366;
        } else day += 365;
    
    }
    return day;
}

alert(checkday(mybirthyear));
