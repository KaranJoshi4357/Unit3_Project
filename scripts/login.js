
var UserData=JSON.parse(localStorage.getItem("SignUpData"));

document.getElementById("form").addEventListener("submit",myfunc)

function myfunc(){
    event.preventDefault();
    console.log("yes");
    let email=document.getElementById("Email").value;
    let password=document.getElementById("Password").value;
  
    var user={
           Email:email,
           Password:password
    }
   if(UserData===null){
    alert("Create an Account")
   }
   else{
    var value=false;
    UserData.forEach(element => {
        if(element.userId==user.Email && element.userPd==user.Password){
            value=true;
        }
    });
    if(value){
        alert("Login Successful")
        //here paste the page link to redirect.
    }
    else{
        alert("Email Or Password is Incorrect")
    }
   }
}