var buttonSubmit = document.querySelector('#button-signup');

var inutName = document.querySelector('#name');
var inutEmail = document.querySelector('#email');
var inutPassWord = document.querySelector('#password');
var inutRepeatPassword = document.querySelector('#repeatPassword');

var innerTextErrorInutName = document.querySelector('.errorName');
var innerTextErrorInutEmail = document.querySelector('.errorEmail');
var innerTextErrorInutPassWord = document.querySelector('.errorPassword');
var innerTextErrorInutRepeatPassword = document.querySelector('.errorRepeatPassword');




var errorName;
var errorEmail;
var errorPassword;
var errorRepeatPassword;

buttonSubmit.addEventListener('click', function() {

    checkValidateName(inutName.value);
    checkValidateEmail(inutEmail.value);
    checkValidatePassWord(inutPassWord.value);
    checkValidateRepeatpassword(inutPassWord.value, inutRepeatPassword.value);
    
    innerTextErrorInutName.innerText = errorName;
    innerTextErrorInutEmail.innerText = errorEmail;
    innerTextErrorInutPassWord.innerText = errorPassword;
    innerTextErrorInutRepeatPassword.innerText = errorRepeatPassword;

    if (!errorName && !errorPassword && !errorRepeatPassword) {
        console.log('đăng ký thành công');
    }

});

function checkValidateName(name) {
    if (name.length < 5 || name == null) {
        errorName = 'Tên phải lớn hơn 5 ký tự';
    } else {
        errorName = null;
    }
}

function checkValidateEmail(email) {
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if (reg.test(email) == false) {
        errorEmail = "Email không hợp lệ"
    } else {
        errorEmail = null;
    }

}

function checkValidatePassWord(password) {
    if (password.length < 8 || password == null) {
        errorPassword = 'Password phải lớn hơn 8 ký tự';
    } else {
        errorPassword = null;
    }
}

function checkValidateRepeatpassword(password, repeatPassword) {
    if (repeatPassword != password || repeatPassword == null) {
        errorRepeatPassword = 'Nhập lại mật khẩu không đúng';
    } else {
        errorRepeatPassword = null;
    }
}