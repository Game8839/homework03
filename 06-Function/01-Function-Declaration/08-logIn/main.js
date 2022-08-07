
function login(username,password){
    let a = (username === `admin` && password === `P@ssword`)? alert(`login successful`): alert(`Unsuccessful`);
    return a
}
let a = prompt(`Input username`);
let b = prompt(`Input Password`);
login(a,b);

