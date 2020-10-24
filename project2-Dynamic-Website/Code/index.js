//get elements 
var Username = document.getElementById('name');
var Email = document.getElementById('email');
document.getElementById('nameValidation').style.display = 'none';
document.getElementById('emailValidation').style.display = 'none';
document.getElementById('numberValidation').style.display = 'none';
document.getElementById('pass1Validation').style.display = 'none';
document.getElementById('pass2Validation').style.display = 'none';
function locStorage1(){
    //username validation
    if(Username.value.length < 3){
    document.getElementById('nameValidation').style.display = 'block';
}
    else {
        document.getElementById('nameValidation').style.display = 'none';
    }
     // Email Validation 
    var mailformat = /^[a-zA-Z0-9.!]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z]+)*$/;
    var inputemail = document.getElementById('email').value;
    if(inputemail.match(mailformat)){
    }
    else {
        document.getElementById('emailValidation').style.display = 'block';
    }
    // Password Validation 
    var password = document.getElementById('pass').value;
    var confirmPassword = document.getElementById('pass2').value;
    if(password.length < 8 || password.length > 32){
        document.getElementById('pass1Validation').style.display = 'block';
    }
    var passformat = ("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])");
    if(password.match(passformat)){
    }
    else {
        document.getElementById('pass1Validation').style.display = 'block';
    }
    if (password === confirmPassword) {
}else{
document.getElementById('pass2Validation').style.display = 'block';
};
    // Phone number Validation 
    var phoneNumber = ("^(?:00|\\+)(?=.*[0-9])(?=.{12,})");
    var usernumber = document.getElementById('phone').value;
    if(usernumber.match(phoneNumber)){
    } else {
        document.getElementById('numberValidation').style.display = 'block';
    }

    //LocalStorage 
    var keyName = Username.value;
    var KeyEmail = Email.value;
    // key usernumber = phone.value
    var keyBirth = document.getElementById('form').value;
    // key password = pass.value
    localStorage.setItem("nameKey", keyName);
    localStorage.setItem("emailKey", KeyEmail);
    localStorage.setItem("phoneKey", usernumber);
    localStorage.setItem("dopKey", keyBirth);
    localStorage.setItem("pass1Key", password);
};

function sesStorage(){
    if(Username.value.length < 3){
        document.getElementById('nameValidation').style.display = 'block';
    }
        else {
            document.getElementById('nameValidation').style.display = 'none';
        }
         // Email Validation 
        var mailformat = /^[a-zA-Z0-9.!]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z]+)*$/;
        var inputemail = document.getElementById('email').value;
        if(inputemail.match(mailformat)){
        }
        else {
            document.getElementById('emailValidation').style.display = 'block';
        }
        // Password Validation 
        var password = document.getElementById('pass').value;
        var confirmPassword = document.getElementById('pass2').value;
        if(password.length < 8 || password.length > 32){
            document.getElementById('pass1Validation').style.display = 'block';
        }
        var passformat = ("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])");
        if(password.match(passformat)){
        }
        else {
            document.getElementById('pass1Validation').style.display = 'block';
        }
        if (password === confirmPassword) {
    }else{
    document.getElementById('pass2Validation').style.display = 'block';
    };
        // Phone number Validation 
        var phoneNumber = ("^(?:00|\\+)(?=.*[0-9])(?=.{12,})");
        var usernumber = document.getElementById('phone').value;
        if(usernumber.match(phoneNumber)){
        } else {
            document.getElementById('numberValidation').style.display = 'block';
        }

        //LocalStorage 
    var keyName = Username.value;
    var KeyEmail = Email.value;
    // key usernumber = phone.value
    var keyBirth = document.getElementById('form').value;
    // key password = pass.value

    sessionStorage.setItem("nameKey", keyName);
    sessionStorage.setItem("emailKey", KeyEmail);
    sessionStorage.setItem("phoneKey", usernumber);
    sessionStorage.setItem("dopKey", keyBirth);
    sessionStorage.setItem("pass1Key", password);

};
//check to enable buttons 
var localBtn = document.getElementById('local');
var sessionBtn = document.getElementById('session');
var CheckBox = document.getElementById('CheckId');
CheckBox.onchange = function(){
    if(this.checked){
        localBtn.disabled = false;
        sessionBtn.disabled = false;
    } else {
        localBtn.disabled = true;
        sessionBtn.disabled = true;
    }
}
var clearBtn = document.getElementById('clear');
var number = document.getElementById('phone');
var password1 = document.getElementById('pass');
var confirmPassword1 = document.getElementById('pass2');
var options = document.querySelectorAll('.myselect option');
clearBtn.onclick = function (){
    Username.value = '';
    Email.value = '';
    number.value = '';
    password1.value = '';
    confirmPassword1.value = '';
for (var i = 0, l = options.length; i < l; i++) {
    options[i].selected = options[i].defaultSelected;
}
};
