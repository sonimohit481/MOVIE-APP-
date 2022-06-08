document.querySelector("#signupform").addEventListener("submit", signup);
    
var signupdata;
if (localStorage.getItem("sign") === null) {
    signupdata = [];
    // localStorage.setItem("sign",JSON.stringify(signupdata));
} else {
    signupdata = JSON.parse(localStorage.getItem("sign"));
}

function signup(event) {
    event.preventDefault();

    var name = document.querySelector("#name").value;
    var contact = document.querySelector("#no").value;
    var email = document.querySelector("#email").value;
    var pass = document.querySelector("#psw").value;

    if (name.length < 8 && contact.length !== 10 && pass.length < 8) {
        alert("Invalid Credentials");
    } else {
        var flag=true;
        signupdata.forEach((ele) => {
            if (
                name === ele.name ||
                email === ele.email ||
                contact === ele.contact
            ) {
                alert("User Allredy Exist");
                flag=false;
            } 

            });
        }
        if(flag){
            
            var data = {
                name: name,
                contact: contact,
                email: email,
                pass: pass,
            };
            signupdata.push(data);
            localStorage.setItem("sign", JSON.stringify(signupdata));
            alert("Signup Successfuly Done \n Thank You");
            window.location.href="login.html"

        }
        
}
