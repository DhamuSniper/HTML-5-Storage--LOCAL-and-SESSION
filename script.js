var signUpform =document.getElementById("signup-form");
var loginform = document.getElementById("login-form");

// below module get the signup data and store it in local storage as KEY-VALUE pair
function signUp(){
    let signupUsername=document.getElementById("signupUsername").value;
    let signupPassword=document.getElementById("signupPassword").value;
    console.log(signupUsername,signupPassword);
    localStorage.setItem("UserName",signupUsername);
    localStorage.setItem("UserPassword",signupPassword);
    alert("You have signed up Successfully");

}

// below module get the login details and compare with local storage credentials and make you to login
function logIn(){
   let loginUsername=document.getElementById("loginUsername").value;
   let loginPassword=document.getElementById("loginPassword").value;
   var userName=localStorage.getItem("UserName");
   var userPassword=localStorage.getItem("UserPassword");
   if(userName==loginUsername){
       if(userPassword==loginPassword){
         alert("Yes! You have logged in Successfully");
       }
       else{
           alert("Incorrect Password!");
       }
   }else{
       alert("Incorrect Username");
   }

}
// below two blocks is for form-toggle operation using JavaScript DOM and EventListeners
document.getElementById("openSignup").addEventListener("click", function(){
    signUpform.style.display = "block";
    loginform.style.display="none";
  });
document.getElementById("openLogin").addEventListener("click", function(){
    signUpform.style.display = "none";
    loginform.style.display="block";
  });

// below module clears down all the localStorage

function clearIt(){
    console.log("cleared");
    localStorage.clear();
}