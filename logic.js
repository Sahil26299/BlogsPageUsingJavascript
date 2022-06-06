
var userData = JSON.parse(localStorage.getItem("users")) !== null ? JSON.parse(localStorage.getItem("users")) : [];
var username = "";
var userlname = "";
var email = "";
var number = "";
var password = "";
var birthDate = "";

function displayErrorfName() {
    username = document.getElementById('fname').value;
    var blank_space = /\s/;
    var cap_letter = /\b[A-Z]/;
    var num = /[0-9]{4,}/;                          // numbers included(atmost 3 digits) but not at first place.
    var spl_char = /[\!\@\#\$\%\£\^\&\*\)\(\+\=\<\>\{\}\,\/\\\?\[\]\:\;\'\"\|\~\`\-\_\.]/g;    
    if (username.length > 0 && username.length < 12 && username.match(cap_letter) && !username.match(num) && !username.match(blank_space) && !username.match(spl_char)) {
        document.getElementById('show_fname_error').innerHTML = '';
        document.getElementById('fname').style.border = '1px solid green';
        return true;
    }
    else {
        document.getElementById('show_fname_error').innerHTML = 'Enter valid first name(First letter must be capital)!';
        document.getElementById('fname').style.border = '1px solid tomato';
        return false;
    }
}

function displayErrorlName() {
    userlname = document.getElementById('lname').value;
    var blank_space = /\s/;
    var cap_letter = /\b[A-Z]/;
    var begining_regexp = /[0-9]/g;                       // numbers included(atmost 3 digits) but not at first place.
    var spl_char = /[\!\@\#\$\%\£\^\&\*\)\(\+\=\<\>\{\}\,\/\\\?\[\]\:\;\'\"\|\~\`\-\_\.]/g;    
    if (userlname.length > 0 && userlname.length < 15 && userlname.match(cap_letter) && !userlname.match(blank_space) && !userlname.match(spl_char) && !userlname.match(begining_regexp)) {
        document.getElementById('show_lname_error').innerHTML = '';
        document.getElementById('lname').style.border = '1px solid green';
        return true;
    }
    else {
        document.getElementById('show_lname_error').innerHTML = 'Enter valid last name(First letter must be capital)!';
        document.getElementById('lname').style.border = '1px solid tomato';
        return false;
    }
}

function displayErrorBirthDate(){
    birthDate = document.getElementById('birthDateInput').value;
    var fullBirthDate = new Date(birthDate);
    var currentDate = new Date();
    if(currentDate.getFullYear() - fullBirthDate.getFullYear() > 100 || currentDate.getFullYear() - fullBirthDate.getFullYear() < 18 || currentDate<fullBirthDate || birthDate == ''){
        document.getElementById('show_dob_error').innerHTML = 'Please enter valid birth date!';
        document.getElementById('dateErrorUL').style.display = 'block';
        document.getElementById('dateErrorUL').style.display = 'block'
        document.getElementById('birthDateInput').style.border = '1px solid tomato';
        return false;
    }
    else{
        document.getElementById('show_dob_error').innerHTML = '';
        document.getElementById('dateErrorUL').style.display = 'none'
        document.getElementById('birthDateInput').style.border = '1px solid green';
        return true;
    }
}

function isEmailValid() {
    email = document.getElementById('email').value.toLowerCase();
    var blank = /\s/;
    if (isValidationEmail(email) && !email.match(blank)) {
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
    //const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // const re = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)([a-z]{2,4})(.[a-z]{2,3})?$/;  
    const re = /^\w+([\.-]?\w+)*@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.){1,2}[a-zA-Z]{2,3}))$/;
    const beg_spl = /^[0-9\!\@\#\$\%\£\^\&\*\)\(\+\=\<\>\{\}\,\/\\\?\[\]\:\;\'\"\|\~\`\-\_\.]/; 
    // const space = /\s/;
    //email name can contain number but should not start with number, number and - can come betn @ and . 
    //numbers cannot appear after . symbol. After . one extension is compulsory and second extension like in or org is optional.
    // After that no . are allowed 
    if (email === "" || email === "undefined") {
        return false;
    }
    // return (re.test(String(email).toLowerCase()) && !beg_num.test(String(email).toLowerCase()));
    return (email.match(re) && !email.match(beg_spl));
    //  && email.match(space));
}

function phoneNumberError() {
    number = document.getElementById('contact').value;
    var reg = /[7-9][0-9]{9}/g;
    // var beginning = /\b\-/;
    //should not accept mobile number starting with 0-6 digits.
    if (number.toString().length == 10 && number.match(reg)) {
        document.getElementById('show_contact_error').innerHTML = '';
        document.getElementById('contact').style.border = '1px solid green';
        return true;
    }
    // else if(number.match(beginning)){
    //     document.getElementById('show_contact_error').innerHTML = 'Enter valid contact!';
    //     document.getElementById('contact').style.border = '1px solid tomato';
    //     return false;
    // }
    else {
        document.getElementById('show_contact_error').innerHTML = 'Enter valid mobile number!';
        document.getElementById('contact').style.border = '1px solid tomato';
        return false;
    } 

}

function displayPasswordError() {
    password = document.getElementById('password').value;
    document.getElementById('ul').style.display = 'block';
    document.getElementById('ul').style.color = 'tomato';
    document.getElementById('password').style.border = '1px solid tomato';
    displayConfirmPasswordError();
    var upper = /[A-Z]/g;
    var lower = /[a-z]/g;
    var digit = /[0-9]/g;
    var blank_space = /\s/g;
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
    if (password.length <= 16) {
        document.getElementById('list_item7').style.color = 'green';
    } else { document.getElementById('list_item7').style.color = 'tomato'; }
    if(password.match(blank_space)){
        document.getElementById('list_item6').style.color = 'tomato';
    }else{
        document.getElementById('list_item6').style.color = 'green';
    }
    if (password.match(upper) && password.match(lower) && password.match(digit) && password.match(spl_char) && password.length >= 8 && password.length <= 16 && !password.match(blank_space)) {
        document.getElementById('ul').style.display = 'none';
        document.getElementById('password').style.border = '1px solid green';
        return true;
    }
    else {
        return false;
    }
}

function showPassword(){
    var typeOfPassword = document.getElementById('password').type;
    if(typeOfPassword=='password'){
        document.getElementById('password').type = 'text';
    }
    else{document.getElementById('password').type = 'password';}
}

var confirmPassword='';
function displayConfirmPasswordError(){
    var confirmPassword = document.getElementById('confirmPassword').value;
    if(confirmPassword=='' || !confirmPassword){
        document.getElementById('confirmPassword').style.border = '1px solid tomato';
        document.getElementById('show_confirm_password_error').innerHTML = 'Please re-enter password!';
        document.getElementById('show_confirm_password_error').style.color = 'tomato';
        return false;
    }
    if(confirmPassword == password){
        document.getElementById('confirmPassword').style.border = '1px solid green';
        document.getElementById('show_confirm_password_error').innerHTML = 'Password Matches!';
        document.getElementById('show_confirm_password_error').style.color = 'green';
        return true;
    }
    else{
        document.getElementById('confirmPassword').style.border = '1px solid tomato';
        document.getElementById('show_confirm_password_error').innerHTML = 'Password does not Match!';
        document.getElementById('show_confirm_password_error').style.color = 'tomato';
        return false;        
    }
}

function showConfirmPassword(){
    var typeOfConfirmPassword = document.getElementById('confirmPassword').type;
    if(typeOfConfirmPassword=='password'){
        document.getElementById('confirmPassword').type = 'text';
    }
    else{document.getElementById('confirmPassword').type = 'password';}
}

function checkBoxValid(){
    var is_checked = document.getElementById('exampleCheck1').checked;
    if(is_checked){
        document.getElementById("exampleCheck1").style.outline = "none";
        return true;
    }
    else{
        document.getElementById("exampleCheck1").style.outline = "2px solid tomato";
        return false;
    }
}


var x = Math.floor(Math.random()*(1000000-100000)+100000);

//---------------------Register Page Validations---------------------//

function validateAll() {
    if (displayErrorfName() && displayErrorlName() && displayErrorBirthDate() && isEmailValid() && phoneNumberError() && displayPasswordError() && displayConfirmPasswordError() && checkBoxValid()) {
        userData.push({ Name: username+" "+userlname, DateOfBirth: birthDate, Email: email, Number: number, Password: password, UniqueID: x});
        localStorage.setItem("users", JSON.stringify(userData));
        document.getElementById('spinner').style.display = "block";
        document.getElementById("snackbar").innerHTML = "Registered Successfully!"
        document.getElementById("snackbar").className = "show";
        setTimeout(() => {
            document.getElementById('spinner').style.display = "none";
            document.getElementById("snackbar").className = "";
        }, 2300);
        setTimeout(() => {
            window.location.href = "signin.html";
            return true;
        }, 3000);
    }
    else {
        displayErrorlName();
        displayErrorBirthDate();
        isEmailValid();
        phoneNumberError();
        displayPasswordError();
        displayConfirmPasswordError();
        checkBoxValid()
        return false;
    }
}

function showPasswordWhileLogin(){
    var typeOfConfirmPassword = document.getElementById('confirmPassword').type;
    if(typeOfConfirmPassword=='password'){
        document.getElementById('confirmPassword').type = 'text';
    }
    else{document.getElementById('confirmPassword').type = 'password';}
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
    var blank = /\s/;
    emailLogin = document.getElementById('emaillogin').value.toLowerCase();
    if (isValidationEmail(emailLogin) && !emailLogin.match(blank)) {
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
                userIDs[2] = userData[i].Name;
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

function showPasswordWhileLogin(){
    var typeOfLoginPassword = document.getElementById('passwordlogin').type;
    if(typeOfLoginPassword=='password'){
        document.getElementById('passwordlogin').type = 'text';
    }
    else{document.getElementById('passwordlogin').type = 'password';}
}
//---x-----x-------x------Login Page Validations----x-------x-------x---//
//---x------x------x------Login Page------x------x-----x----//

//---------------------------Send OTP-----------------------------//
var otpSent = null;
var emailEnteredForPasswordReset = "";
function isResetPasswordEmailValid(){
    emailEnteredForPasswordReset = document.getElementById('emailReset').value.toLowerCase();
    if (isValidationEmail(emailEnteredForPasswordReset)) {
        var flag = 0
        for(i=0; i<userData.length; i++){
            if(userData[i].Email == emailEnteredForPasswordReset){
                flag++;
            }
        }
        if(flag!=0){
            document.getElementById('show_email_error').innerHTML = '';
            document.getElementById('emailReset').style.border = '1px solid green';
            return true;
        }
        else{
            document.getElementById('show_email_error').innerHTML = 'User not found!';
            document.getElementById('emailReset').style.border = '1px solid tomato';
            return false;
        }
    }
    else {
        document.getElementById('show_email_error').innerHTML = 'Please enter the valid email!';
        document.getElementById('emailReset').style.border = '1px solid tomato';
        return false;
    }
}

function sendOTP(){
    otpSent = Math.floor(Math.random()*(1000000-100000)+100000);
    if(isResetPasswordEmailValid()){
            document.getElementById("snackbar").innerHTML = "Otp Sent!"
            document.getElementById("snackbar").className = "show";
        setTimeout(() => {
            document.getElementById("snackbar").className = "";
            document.getElementById('btn').innerHTML = "Re-Send OTP";
            return true;
        }, 2300);
        setTimeout(()=>{
            alert(`Your OTP is ${otpSent}. Please don't share it with anyone.`);
            document.getElementById('ifOTPSent').style.display = 'block';
        }, 2500)

    }
    else{
        return false;
    }
}

var otpEntered = null;
function isOTPValid(){
    otpEntered = document.getElementById('enterOTPField').value;
    if(otpEntered.length!=6){
        document.getElementById('show_OTP_error').innerHTML = 'Please enter 6 digit otp!';
        document.getElementById('show_OTP_error').style.color = 'tomato';
        document.getElementById('enterOTPField').style.border = '1px solid tomato';   
    }
    else{
        document.getElementById('show_OTP_error').style.color = 'green';
        document.getElementById('enterOTPField').style.border = '1px solid green';
        document.getElementById('show_OTP_error').innerHTML = '';
    }
}
var emailPassRes = [];
function submitOTP(){
    if(otpEntered==otpSent){
        emailPassRes = emailEnteredForPasswordReset;
        localStorage.setItem('emailForPasswordReset', JSON.stringify(emailPassRes));
        document.getElementById("snackbar").innerHTML = "Success!"
        document.getElementById("snackbar").className = "show";
        setTimeout(() => {
            document.getElementById("snackbar").className = "";
        }, 2300); 
        setTimeout(() => {
            window.location.href = 'resertpassword.html';
            return true;
        }, 2500);
    }
    else{
        document.getElementById("snackbar").innerHTML = "Invalid OTP!!"
        document.getElementById("snackbar").className = "fail";
        setTimeout(() => {
            document.getElementById("snackbar").className = "";
        }, 2300); 
        return false;
    }
}

var newPassword = "";
function displayResetPasswordError() {
    newPassword = document.getElementById('passwordReset').value;
    document.getElementById('ul').style.display = 'block';
    document.getElementById('ul').style.color = 'tomato';
    document.getElementById('passwordReset').style.border = '1px solid tomato';
    displayConfirmResetPasswordError()
    var upper = /[A-Z]/g;
    var lower = /[a-z]/g;
    var digit = /[0-9]/g;
    var blank_space = /\s/g;
    var spl_char = /[\!\@\#\$\%\^\&\*\)\(\+\=\.\<\>\{\}\,\/\\\?\[\]\:\;\'\"\|\~\`\_\-]/g;
    // let characters = upper.concat(lower, digit, spl_char);
    if (newPassword.match(upper)) {
        document.getElementById('list_item2').style.color = 'green';
    } else { document.getElementById('list_item2').style.color = 'tomato'; }
    if (newPassword.match(lower)) {
        document.getElementById('list_item3').style.color = 'green';
    } else { document.getElementById('list_item3').style.color = 'tomato'; }
    if (newPassword.match(digit)) {
        document.getElementById('list_item4').style.color = 'green';
    } else { document.getElementById('list_item4').style.color = 'tomato'; }
    if (newPassword.match(spl_char)) {
        document.getElementById('list_item5').style.color = 'green';
    } else { document.getElementById('list_item5').style.color = 'tomato'; }
    if (newPassword.length >= 8) {
        document.getElementById('list_item1').style.color = 'green';
    } else { document.getElementById('list_item1').style.color = 'tomato'; }
    if (newPassword.length <= 16) {
        document.getElementById('list_item7').style.color = 'green';
    } else { document.getElementById('list_item7').style.color = 'tomato'; }
    if (newPassword.match(blank_space)) {
        document.getElementById('list_item6').style.color = 'tomato';
    } else { document.getElementById('list_item6').style.color = 'green'; }
    if (newPassword.match(upper) && newPassword.match(lower) && newPassword.match(digit) && newPassword.match(spl_char) && newPassword.length >= 8 && newPassword.length <= 16 && !newPassword.match(blank_space)) {
        document.getElementById('ul').style.display = 'none';
        document.getElementById('passwordReset').style.border = '1px solid green';
        return true;
    }
    else {
        return false;
    }

}
var confirmNewPassword="";
function displayConfirmResetPasswordError(){
    confirmNewPassword = document.getElementById('confirmPasswordReset').value;
    if(confirmNewPassword=='' || !confirmNewPassword){
        document.getElementById('confirmPasswordReset').style.border = '1px solid tomato';
        document.getElementById('show_reset_confirm_password_error').innerHTML = 'Please re-enter password!';
        document.getElementById('show_reset_confirm_password_error').style.color = 'tomato';
        return false;
    }
    if(confirmNewPassword == newPassword){
        document.getElementById('confirmPasswordReset').style.border = '1px solid green';
        document.getElementById('show_reset_confirm_password_error').innerHTML = 'Password Matches!';
        document.getElementById('show_reset_confirm_password_error').style.color = 'green';
        return true;
    }
    else{
        document.getElementById('confirmPasswordReset').style.border = '1px solid tomato';
        document.getElementById('show_reset_confirm_password_error').innerHTML = 'Password does not Match!';
        document.getElementById('show_reset_confirm_password_error').style.color = 'tomato';
        return false;        
    }
}
function showResetPassword(){
    var showResetPass = document.getElementById('passwordReset').type;
    if(showResetPass=='password'){
        document.getElementById('passwordReset').type = 'text';
    }
    else{document.getElementById('passwordReset').type = 'password';}
}
function showResetConfirmPassword(){
    var showResetConfirmPass = document.getElementById('confirmPasswordReset').type;
    if(showResetConfirmPass=='password'){
        document.getElementById('confirmPasswordReset').type = 'text';
    }
    else{document.getElementById('confirmPasswordReset').type = 'password';}
}

function resetPassword(){
    emailEnteredForPasswordReset = JSON.parse(localStorage.getItem('emailForPasswordReset'));
    var resetPasswordEntered = document.getElementById('passwordReset').value;
    if(displayResetPasswordError() && displayConfirmResetPasswordError()){
        for(i=0; i<userData.length; i++){
            if(userData[i].Email==emailEnteredForPasswordReset){
                userData[i].Password = resetPasswordEntered;
                localStorage.setItem('users', JSON.stringify(userData));
                document.getElementById("snackbar").innerHTML = "Password changed successfully!";
                document.getElementById("snackbar").className = "show";
                setTimeout(() => {
                    document.getElementById("snackbar").className = "";
                }, 2300);
                setTimeout(()=>{
                    window.location.href = 'signin.html'
                    return true;
                }, 2500)
            }
        }
    }
    else{
        return false;
    }
}


//---------------------Blog Register Page validations---------------------//
var title = "";
var description = "";
var aName = "";
var date = "";
var img_link = null;

function isBlogTitle() {
    var spl_char = /^[\!\@\#\$\%\£\^\&\*\)\(\+\=\<\>\{\}\,\/\\\?\[\]\:\;\'\"\|\~\`\-\_\.]/g;
    title = document.getElementById('blogTitle').value;
    if (!title) {
        document.getElementById('blogTitle').style.border = '1px solid red';
        document.getElementById('errorTitle').innerHTML = 'Please enter the title of your blog!';
        return false;
    }
    else if(title.match(spl_char)){
        document.getElementById('blogTitle').style.border = '1px solid red';
        document.getElementById('errorTitle').innerHTML = 'Please enter the valid title!';
        return false;
    }
    else {
        document.getElementById('blogTitle').style.border = '1px solid green';
        document.getElementById('errorTitle').innerHTML = '';
        return true;
    }
}

function isBlogDesc() {
    var spl_char = /^[\!\@\#\$\%\£\^\&\*\)\(\+\=\<\>\{\}\,\/\\\?\[\]\:\;\'\"\|\~\`\-\_\.]/g;
    description = document.getElementById('blogDesc').value;
    if (!description) {
        document.getElementById('blogDesc').style.border = '1px solid red';
        document.getElementById('errorDesc').innerHTML = 'Enter the description of your blog!';
        return false;
    }
    else if(description.match(spl_char)){
        document.getElementById('blogDesc').style.border = '1px solid red';
        document.getElementById('errorDesc').innerHTML = 'Enter the valid description';
        return false;
    }
    else {
        document.getElementById('blogDesc').style.border = '1px solid green';
        document.getElementById('errorDesc').innerHTML = '';
        return true;
    }
}

function isAuthorsName() {
    aName = document.getElementById('authorName').value;
    var spl_char = /^[\!\@\#\$\%\£\^\&\*\)\(\+\=\<\>\{\}\,\/\\\?\[\]\:\;\'\"\|\~\`\-\_\.]/g;
    var beg = /\b[0-9]/;
    var space = /\s{3}/;
    if (!aName) {
        document.getElementById('authorName').style.border = '1px solid red';
        document.getElementById('errorAuthorName').innerHTML = "Enter the Author's Name!";
        return false;
    }
    else if(aName.match(spl_char) || aName.match(beg) || aName.match(space)){
        document.getElementById('authorName').style.border = '1px solid red';
        document.getElementById('errorAuthorName').innerHTML = "Enter the valid Author's Name!";
        return false;
    }
    else {
        document.getElementById('authorName').style.border = '1px solid green';
        document.getElementById('errorAuthorName').innerHTML = '';
        return true;
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
    if(userIDs==null){
        document.getElementById("snackbar").innerHTML = "Login to create your own blogs!"
        document.getElementById("snackbar").className = "fail";
        setTimeout(() => {
            document.getElementById("snackbar").className = "";
        }, 2300);
        setTimeout(() => {
            logout();
        }, 2500);
        return false;
    }
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
     localStorage.removeItem('UserID');
     window.location.href = "/signin.html";
 }
 function logInForCreateBlog(){
     var item = JSON.parse(localStorage.getItem('UserID'));
     if(item == null){
        document.getElementById("snackbar").innerHTML = "Login to create your own blogs!"
        document.getElementById("snackbar").className = "fail";
        setTimeout(() => {
            document.getElementById("snackbar").className = "";
        }, 2300);
        setTimeout(() => {
            logout();
        }, 2500);
     }
     else{
         window.location.href = 'blogRegister.html';
     }
 }
