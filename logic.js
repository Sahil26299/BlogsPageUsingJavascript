
var userData = JSON.parse(localStorage.getItem("users")) !== null ? JSON.parse(localStorage.getItem("users")) : [];
var username = "";
var email = "";
var number = "";
var password = "";


function displayErrorName() {
    username = document.getElementById('name').value;
    var num = /[0-9]/g;
    var spl_char = /[\!\@\#\$\%\£\^\&\*\)\(\+\=\.\<\>\{\}\,\/\\\?\[\]\:\;\'\"\|\~\`\_\-]/g;
    if (username.length > 0 && !username.match(num) && !username.match(spl_char)) {
        document.getElementById('show_name_error').innerHTML = '';
        document.getElementById('name').style.border = '1px solid green';
        return true;
    }
    else {
        document.getElementById('show_name_error').innerHTML = 'Enter valid name!';
        document.getElementById('name').style.border = '1px solid tomato';
        return false;
    }
}

function isEmailValid() {
    email = document.getElementById('email').value;
    if (isValidationEmail(email)) {
        for(i=0; i<userData.length; i++){
            if(userData[i].Email != email){
                document.getElementById('show_email_error').innerHTML = '';
                document.getElementById('email').style.border = '1px solid green';
            }
            else{
                document.getElementById('show_email_error').innerHTML = 'User already exists!';
                document.getElementById('email').style.border = '1px solid tomato';
                return false;
            }
        }
        document.getElementById('show_email_error').innerHTML = '';
        document.getElementById('email').style.border = '1px solid green'; 
        return true;
    }
    else {
        document.getElementById('show_email_error').innerHTML = 'Please enter the valid email!';
        document.getElementById('email').style.border = '1px solid tomato';
        return false;
    }
}
function isValidationEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (email === "" || email === "undefined") {
        return false;
    }
    return re.test(String(email).toLowerCase());
}

function phoneNumberError() {
    number = document.getElementById('contact').value;
    if (number.toString().length !== 10) {
        document.getElementById('show_contact_error').innerHTML = 'Enter valid contact!';
        document.getElementById('contact').style.border = '1px solid tomato';
        return false;
    }
    else {
        document.getElementById('show_contact_error').innerHTML = '';
        document.getElementById('contact').style.border = '1px solid green';
        return true;
    } 0.

}

function displayPasswordError() {
    password = document.getElementById('password').value;
    document.getElementById('ul').style.display = 'block';
    document.getElementById('ul').style.color = 'tomato';
    document.getElementById('password').style.border = '1px solid tomato';
    var upper = /[A-Z]/g;
    var lower = /[a-z]/g;
    var digit = /[0-9]/g;
    var spl_char = /[\!\@\#\$\%\^\&\*\)\(\+\=\.\<\>\{\}\,\/\\\?\[\]\:\;\'\"\|\~\`\_\-]/g;
    // let characters = upper.concat(lower, digit, spl_char);
    if (password.match(upper)) {
        document.getElementById('list_item2').style.color = 'green';
    } else { document.getElementById('list_item2').style.color = 'tomato'; }
    if (password.match(lower)) {
        document.getElementById('list_item3').style.color = 'green';
    } else { document.getElementById('list_item3').style.color = 'tomato'; }
    if (password.match(digit)) {
        document.getElementById('list_item4').style.color = 'green';
    } else { document.getElementById('list_item4').style.color = 'tomato'; }
    if (password.match(spl_char)) {
        document.getElementById('list_item5').style.color = 'green';
    } else { document.getElementById('list_item5').style.color = 'tomato'; }
    if (password.length >= 8) {
        document.getElementById('list_item1').style.color = 'green';
    } else { document.getElementById('list_item1').style.color = 'tomato'; }
    if (password.match(upper) && password.match(lower) && password.match(digit) && password.match(spl_char) && password.length >= 8) {
        document.getElementById('ul').style.display = 'none';
        document.getElementById('password').style.border = '1px solid green';
        return true;
    }
    else {
        return false;
    }

}


var x = Math.floor(Math.random()*(1000000-100000)+100000);
//---------------------Register Page Validations---------------------//
function validateAll() {
    if (displayErrorName() && isEmailValid() && phoneNumberError() && displayPasswordError()) {
        userData.push({ Name: username, Email: email, Number: number, Password: password, UniqueID: x});
        localStorage.setItem("users", JSON.stringify(userData));
        document.getElementById('spinner').style.display = "block";
        document.getElementById("snackbar").innerHTML = "Registered Successfully!"
        document.getElementById("snackbar").className = "show";
        setTimeout(() => {
            document.getElementById('spinner').style.display = "none";
            document.getElementById("snackbar").className = "";
        }, 2300);
        setTimeout(() => {
            window.location.href = "/BlogsPageUsingJavascript/signin.html";
            return true;
        }, 3000);
    }
    else {
        isEmailValid();
        phoneNumberError();
        displayPasswordError();
        return false;
    }
}

//-----x-----x-----x------Register Page Validations-------x------x----x----//

//---------------------Login Page---------------------//
var passwordLogin = "";
var emailLogin = "";
function displayLoginPasswordError() {
    passwordLogin = document.getElementById('passwordlogin').value;
    if (passwordLogin == "" || passwordLogin == null) {
        document.getElementById('passwordlogin').style.border = '1px solid tomato';
        document.getElementById('show_password_error').innerHTML = 'Please enter the password!'
        return false;
    }
    else {
        document.getElementById('show_password_error').innerHTML = '';
        document.getElementById('passwordlogin').style.border = '1px solid white';
        return true;
    }
}

function isLoginEmailValid() {
    emailLogin = document.getElementById('emaillogin').value;
    if (isValidationEmail(emailLogin)) {
        document.getElementById('show_email_error').innerHTML = '';
        document.getElementById('emaillogin').style.border = '1px solid white';
        return true;
    }
    else {
        document.getElementById('show_email_error').innerHTML = 'Please enter the email!';
        document.getElementById('emaillogin').style.border = '1px solid tomato';
        return false;
    }
}

//---------------------Lgin Page Validations---------------------//
var userIDs = JSON.parse(localStorage.getItem("UserID"))!=null ? JSON.parse(localStorage.getItem("UserID")) : [];
function validateLogin() {
    if (isLoginEmailValid() && displayLoginPasswordError()) {
        var right_cred = 0;
        for(let i=0; i<userData.length; i++){
            if(userData[i].Email == emailLogin && userData[i].Password == passwordLogin){
                userIDs[0] = userData[i].Email;
                userIDs[1] = userData[i].UniqueID;
                localStorage.setItem("UserID", JSON.stringify(userIDs));
                right_cred++;
            }
        }
        
        if(right_cred!=0){
            document.getElementById('spinner_signin').style.display = "block";
            document.getElementById("snackbar").innerHTML = "Signing In!"
            document.getElementById("snackbar").className = "show";
            setTimeout(() => {
                document.getElementById('spinner_signin').style.display = "none";
                document.getElementById("snackbar").className = "";
            }, 2300);
            setTimeout(() => {

                window.location.href = "./blogs.html";
            return true;
            }, 3000); 
        }
        else{
            document.getElementById("snackbar").innerHTML = "Invalid Credentials!!"
            document.getElementById("snackbar").className = "fail";
            setTimeout(() => {
                document.getElementById("snackbar").className = "";
            }, 2300); 
            return false;
        }
    }
    else {
        isLoginEmailValid();
        displayLoginPasswordError();
    }
}
//---x-----x-------x------Login Page Validations----x-------x-------x---//
//---x------x------x------Login Page------x------x-----x----//


//---------------------Blog Register Page validations---------------------//
var title = "";
var description = "";
var aName = "";
var date = "";
var img_link = null;

function isBlogTitle() {
    title = document.getElementById('blogTitle').value;
    if (!title) {
        document.getElementById('blogTitle').style.border = '1px solid red';
        document.getElementById('errorTitle').innerHTML = 'Please enter the title of your blog!';
        return false;
    }
    else {
        document.getElementById('blogTitle').style.border = '1px solid green';
        document.getElementById('errorTitle').innerHTML = '';
        return true;
    }
}

function isBlogDesc() {
    description = document.getElementById('blogDesc').value;
    if (description) {
        document.getElementById('blogDesc').style.border = '1px solid green';
        document.getElementById('errorDesc').innerHTML = '';
        return true;
    }
    else {
        document.getElementById('blogDesc').style.border = '1px solid red';
        document.getElementById('errorDesc').innerHTML = 'Enter the description of your blog!';
        return false;
    }
}

function isAuthorsName() {
    aName = document.getElementById('authorName').value;
    if (aName) {
        document.getElementById('authorName').style.border = '1px solid green';
        document.getElementById('errorAuthorName').innerHTML = '';
        return true;
    }
    else {
        document.getElementById('authorName').style.border = '1px solid red';
        document.getElementById('errorAuthorName').innerHTML = 'Enter the description of your blog!';
        return false;
    }
}

function isDate() {
    date = document.getElementById('datePosted').value;
    var myDate = new Date(date);
    var currentDate = new Date;
    if (!date) {
        document.getElementById('datePosted').style.border = '1px solid red';
        document.getElementById('errorDate').innerHTML = 'Please enter a date!';
        return false;
    }
    else if(myDate>currentDate){
        document.getElementById('datePosted').style.border = '1px solid red';
        document.getElementById('errorDate').innerHTML = 'Post Date cannot be a future date!';
        return false;
    }
    else {
        document.getElementById('datePosted').style.border = '1px solid green';
        document.getElementById('errorDate').innerHTML = '';
        return true;
    }
}

var img_upload = null;
function isUploaded() {
    img_upload = document.getElementById('upload_btn');
    console.log(img_upload.files[0]==null);
    if(!img_upload.files || !img_upload.files[0])return false;
    var reader = new FileReader();
    reader.addEventListener("load", function(evt){
        img_link = evt.target.result;
    })  
    reader.readAsDataURL(img_upload.files[0]);
    if (img_upload.files[0] == null) {
        console.log(img_upload.files[0]==null);
        document.getElementById('upload_btn').style.border = '1px solid red';
        document.getElementById('errorUpload').innerHTML = 'Please upload a file!';
        return false;
    }
    else {
        document.getElementById('upload_btn').style.border = '1px solid green';
        document.getElementById('errorUpload').innerHTML = '';
        return true;
    }
}

// for (let index = 0; index < userData.length; index++) {
//     var index
// }

var blogData = JSON.parse(localStorage.getItem("blogs")) !== null ? JSON.parse(localStorage.getItem("blogs")) : [];
function registerBlogs() {
    var userId = userIDs[1];         // stores unique id of respective user
    title = document.getElementById('blogTitle').value;
    description = document.getElementById('blogDesc').value;
    aName = document.getElementById('authorName').value;
    date = document.getElementById('datePosted').value;
    if (isBlogTitle() && isBlogDesc() && isAuthorsName() && isDate() && isUploaded()) {
        blogData.push({ Title: title, Description: description, Author: aName, Date:date, Image:img_link, UserID:userId});
        localStorage.setItem("blogs", JSON.stringify(blogData));
        document.getElementById('spinner_blogs').style.display = "block";
            document.getElementById("snackbar").innerHTML = "Creating your blog!"
            document.getElementById("snackbar").className = "show";
            setTimeout(() => {
                document.getElementById('spinner_blogs').style.display = "none";
                document.getElementById("snackbar").className = "";
            }, 2300);
            setTimeout(() => {
                window.location.href = 'blogs.html';
            }, 3000);
        return true;
    }
    else {
        isBlogDesc();
        isAuthorsName();
        isDate();
        isUploaded();
        return false;
    }
}
//----x------x-------x----Blog Register Page validations-----x------x------x----//

 function logout(){
     window.location.href = "/BlogsPageUsingJavascript/signin.html";
 }

