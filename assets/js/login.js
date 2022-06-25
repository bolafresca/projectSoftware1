function Redirect() {
    
    let itsOk;
    let user = document.getElementById('user').value;
    let password = document.getElementById('password').value;

    if (user == "estudiante" && password == "1234") {
        location.href = "student-menu.html";
    } else {
        itsOk = false;
    }

    if (user == "admin" && password == "12345") {
        location.href = "admin-menu.html";
    } else {
        itsOk = false;
    }
    
}