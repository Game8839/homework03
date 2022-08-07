let user = prompt(`Enter username`);
let password = prompt(`Enter password`);
if (user === ``){
    alert(`Username is required`)
} else if (password === ``){
    alert(`password is required`)
} else if (user === `admin` && password === `1234` || user === `john` && password === `qwerty`){
    alert(`Hello`);
}
else{
    alert(`invalid user`);
}