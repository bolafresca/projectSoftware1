function Redirect() {
    let itsOk;
    let user = document.getElementById('user').value;
    let password = document.getElementById('password').value;

    if (user == "estudiante" && password == "1234") {
        itsOk = true;
    } else {
        itsOk = false;
    }

    if (itsOk==true) {
        location.href = "student-menu.html";
    }
}