let checkPermission = (role,yes,no) => {
    (role === `admin`)? yes() : no()
}

function adminno(){
    alert(`ACCESS DENY`)
}
let adminyes = () => {
    alert(`ACCESS GRANTED`)
}

let a = prompt(`Enter the username`)
checkPermission(a, adminyes, adminno);