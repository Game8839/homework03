let grade = +prompt("enter grade")

if (grade >= 80){
    alert(`A`)
} else if (grade < 80 && grade >= 70){
    alert(`B`)
} else if (grade < 70 && grade >= 60){
    alert(`C`)
} else if (grade < 60 && grade >= 50){
    alert(`D`)
} else if (grade < 50){
    alert(`F`)
}