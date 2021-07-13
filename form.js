function login() {
    var uname = document.getElementById("username").value;
    var pass = document.getElementById("password").value;

    if (uname == '' || pass == '') {
        alert("login failed plz try again...");
    } else {
        location.assign("page.html");
    }
}