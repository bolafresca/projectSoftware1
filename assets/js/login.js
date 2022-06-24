function Redirect() {
    let itsOk;
    let itsOKadmin;
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
    //segundo
    if (user == "admin" && password == "12345") {
        itsOkadmin = true;
    } else {
        itsOkadmin = false;
    }

    if (itsOkadmin=true) {
        location.href = "admin-menu.html";
    }
    //tercero
    // if (user == "estudiante" && password == "1234") {
    //     itsOk = true;
    // } else {
    //     itsOk = false;
    // }

    // if (itsOk==true) {
    //     location.href = "student-menu.html";
    // }
    
}