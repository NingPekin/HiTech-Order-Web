

var attempts = 0;

function registerForm() {
    var firstName = document.forms[0].firstname.value;
    var lastName = document.forms[0].lastname.value;
    var street = document.forms[0].street.value;
    var city = document.forms[0].city.value;
    var postalcode = document.forms[0].postalcode.value;
    var phonenumber = document.forms[0].phonenumber.value;
    var email = document.forms[0].email.value;
    var userName = document.forms[0].username.value;
    var userPassword = document.forms[0].userpassword.value;
    var myDate = new Date();
    myDate.setFullYear(myDate.getFullYear() + 1);
    document.cookie = "firstname=" + encodeURIComponent(firstName) + "; expires=" + myDate.toUTCString();
    document.cookie = "lastname=" + encodeURIComponent(lastName) + "; expires=" + myDate.toUTCString();
    document.cookie = "street number and name=" + encodeURIComponent(street) + "; expires=" + myDate.toUTCString();
    document.cookie = "city=" + encodeURIComponent(city) + "; expires=" + myDate.toUTCString();
    document.cookie = "postalcode=" + encodeURIComponent(postalcode) + "; expires=" + myDate.toUTCString();
    document.cookie = "phonenumber=" + encodeURIComponent(phonenumber) + "; expires=" + myDate.toUTCString();
    document.cookie = "email=" + encodeURIComponent(email) + "; expires=" + myDate.toUTCString();
    document.cookie = "username=" + encodeURIComponent(userName) + "; expires=" + myDate.toUTCString();
    document.cookie = "password=" + encodeURIComponent(userPassword) + "; expires=" + myDate.toUTCString();
    window.alert("Thank you for registering!");
    location.href ="HomePage.html";
}


function checkUser() {
    if (document.cookie.length == 0)
    {
        //if cookie has expired
        location.href = "MemberAccountPage.html";
        attempts == 0;
        return false;
    }
    var savedData = decodeURIComponent(document.cookie);
    var storedName, storedPassword;
    var userName = document.forms[0].username.value;
    var userPassword = document.forms[0].userpassword.value;
    var dataArray = savedData.split("; ");
    for (var i = 0; i < dataArray.length; ++i) {
        if (dataArray[i].substring(0, dataArray[i].indexOf("=")) == "username") {
            storedName = dataArray[i].substring(dataArray[i].indexOf("=") + 1, dataArray[i].length);
        }
        if (dataArray[i].substring(0, dataArray[i].indexOf("=")) == "password") {
            storedPassword = dataArray[i].substring(dataArray[i].indexOf("=") + 1, dataArray[i].length);
        }
    }

    if (userName != "" && userPassword != "")
    {
        //go to the order page 
        if (userName == storedName && userPassword == storedPassword) {
            document.cookie = "login=" + encodeURIComponent("successful");
            attempts == 0;
            location.href = "OrderFormPage.html";
        }
        else {
            attempts++;
            window.alert("Incorrect login or password. You have tried"+attempts+" time(s). It allows you to try only 3 times.");
            //alert(attempts);
            if (attempts == 3) {
                window.alert("LogIn Failed.");
                location.href = "MemberAccountPage.html";
            }
            }
    }
}
