function Redirect() {
    let itsOk;
    let user = document.getElementById('user').value;
    let password = document.getElementById('password').value;

    if (user == "estudianteON" && password == "123456789") {
        itsOk = true;
    } else {
        itsOk = false;
    }

    if (itsOk==true) {
        location.href = "student-menu.html";
    }
}