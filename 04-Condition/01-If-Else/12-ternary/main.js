let grade = +prompt("enter grade")
let a = (grade >= 80)? `A`: (grade < 80 && grade >= 70)? `B`: (grade < 70 && grade >= 60)? `C`: (grade < 60 && grade >= 50)? `D`: `F`;
alert(a);