var userName = null;
var userName2 = "";
var password = null;
var password2 = "";
var uName = "";
var country = "";
var zCode = ""
var eMail = "";
var eMail2 = "";
var gender = "";
var exceptionHandler = '';



function submitHandler() {
    // Checking User Name
    userName = document.getElementById("username").value;
    for (let index = 0; index < userName.length; index++) {
       if(userName.slice(index, index+1)==" " || userName.length > 12 || userName.length < 5 ){
        exceptionHandler = document.getElementById("USERNAME");
        exceptionHandler.innerHTML = "<li>User Name should not contain any spaces</li><li>User Name should be between 5 to 12 characters</li><li>User Name Should Not Contain Special Characters</li>";
        exceptionHandler=null;
           break;
       }
     }
     userName2 = document.getElementById("username").value;
     if(userName2 == ""){
        exceptionHandler = document.getElementById("USERNAME");
        exceptionHandler.innerHTML = "<li>User Name should not contain any spaces</li><li>User Name should be between 5 to 12 characters</li><li>User Name Should Not Contain Special Characters</li>";
        exceptionHandler=null;
     }

    //  Ending check on User Name
    // Performing a check on Password
    password = document.getElementById("password").value;
    for (let index = 0; index < password.length; index++) {
       if(password.slice(index, index+1)==" " || password.length > 12 || password.length < 7){
        exceptionHandler = document.getElementById("PASS");
        exceptionHandler.innerHTML = "<li>password should not contain any spaces</li><li>Password should be between 7 to 12 characters</li>";
        exceptionHandler=null;
           break;
       }
    }
    password2 = document.getElementById("password").value;
       if(password2 == ""){
        exceptionHandler = document.getElementById("PASS");
        exceptionHandler.innerHTML = "<li>password should not contain any spaces</li><li>Password should be between 7 to 12 characters</li>";
        exceptionHandler=null;

       }
    //  ending check upon password
    // Checking Name
    uName = document.getElementById("name").value;
    if(uName == ""){
        exceptionHandler = document.getElementById("NAME");
        exceptionHandler.innerHTML = "<li>Your Name is Required</li>";
        exceptionHandler=null;
    }
// Ending check on name
// checking country
country = document.getElementById("country").value;
if(country == ""){
    exceptionHandler = document.getElementById("COUNTRY");
    exceptionHandler.innerHTML = "<li>Select Your Country</li>";
    exceptionHandler=null;
}
// ending check on country
// Checking Zip Code
zCode = document.getElementById("zipcode").value;
if(zCode == ""){

    exceptionHandler = document.getElementById("ZIPCODE");
    exceptionHandler.innerHTML = "<li>Your Zip Code is Required</li><li>Your Zip Code Must Be a Number</li>";
    exceptionHandler=null;
}
// Ending Check on Zip Code
// Checking Email
eMail= document.getElementById("email").value;
for (let index = 0; index < eMail.length ; index++) {
   if(eMail.slice(index, index+1) !="@"){
    exceptionHandler = document.getElementById("EMAIL");
    exceptionHandler.innerHTML = "<li>Email is not valid</li><li>Email Should be of the format 'abc@example.com'</li>";
    exceptionHandler=null;
     break;
    //  I cannot Understand why this function is not working correctly the length of email is not being calculated
    // please help me out with this
   }
   
 }
 eMail2 = document.getElementById("email").value;
 if(eMail2 == ""){
    exceptionHandler = document.getElementById("EMAIL");
    exceptionHandler.innerHTML = "<li>Email is Required</li>";
    exceptionHandler=null;
}
// ending check on email
}
