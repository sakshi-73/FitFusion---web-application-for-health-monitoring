
function auth(){
     var username = document.getElementById("username").value;
     var password = document.getElementById("password").value;
    if(username=="Admin" && password=="admin123"){
         window.location.assign("index.html");
         alert("Login Successfully....");
    }
    else
     {
       alert("Invalid Information");
       return;
      }
 }