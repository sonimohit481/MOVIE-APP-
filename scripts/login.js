document.querySelector("#loginform").addEventListener("submit" , login);

function login(event){
    event.preventDefault();
    
    var logindata;
    if(localStorage.getItem("sign")===null){
        alert("no user exist\nsignup first");
        window.location.href="signup.html"
    }
    else{
        logindata=JSON.parse(localStorage.getItem("sign"));
    }
    
    var email=document.querySelector("#email").value;
    var pass=document.querySelector("#psw").value;
    var flag=0
    logindata.forEach(ele => {
        if(email==ele.email && pass==ele.pass){
            flag=1;
        }
    });
    if(flag==1){
        alert("Log in Sucess \nHappy watcing!");
        window.location.href="index.html"
    }
    else{
        alert("Invalid Credentials");
    }
}