let user = prompt(`input the user name:`)
let password;

if(user.trim() === `` || user === `` || user === undefined || user === null){
    user = `Guest`
} else if( user === `codecamp`){
    password = prompt(`Please enter the password: `)
    if (password === `123456`){
        user === `codecamp`
    } else {
        alert(`wrong password!`)
    }
} else {
    user = `Guest`
}
alert(`Welcome ${user}`)