var attempts = 0;
var orders="";
var total=0;
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
        location.href = "LoginPage.html";
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
                location.href = "LoginPage.html";
            }
            }
    }
}
function retriveUser() {
    var savedData = decodeURIComponent(document.cookie);
    if (savedData.search("login=successful") == -1)
    {
        location.href = "LoginPage.html";
        return false;
    }

    var dataArray = savedData.split("; ");
    var firstName, lastName;
    for (var i = 0; i < dataArray.length; ++i) {
        if (dataArray[i].substring(0, dataArray[i].indexOf("=")) == "firstname") {
            firstName = dataArray[i].substring(dataArray[i].indexOf("=") + 1, dataArray[i].length);
        }
        if (dataArray[i].substring(0, dataArray[i].indexOf("=")) == "lastname") {
            lastName = dataArray[i].substring(dataArray[i].indexOf("=") + 1, dataArray[i].length);
        }


    }
    var userInfo = firstName + " , " + lastName;
    return userInfo;

}
function validOrder()
{
    valid = true;

    if($('input[type=checkbox]:checked').length == 0)
    {
        alert ( "Please select at least one book" );
        valid = false;
    }

    return valid;
}
function doSubmit()
{
    if(validOrder())
    {
        alert("Your book orders have been submitted.");
        storeOrder();
        localStorage.setItem("total", caltotal());
        document.getElementById("showtotal").innerHTML = "The total amount of your order is :" + caltotal();
        //location.href = "OrderConfirmationPage.html";

    }

}
function caltotal()
{
    total = 0;
    if ($('#chkfweb').is(':checked')) {
        total =total+ 178.55;

    }
    if ($('#chkjavascript').is(':checked')) {

        total = total + 36.99;


    }
    if ($('#chkaweb').is(':checked')) {
        total = total + 36.99;
    }
    if ($('#chkwww').is(':checked')) {
        total = total + 180.70;
    }
    if ($('#chkrweb').is(':checked')) {
        total = total + 45.99;

    }
    return Math.round(total*(1.05+1.09975),2);


}
function storeOrder() {
    if ($('#chkfweb').is(':checked')) {
        //alert("1");
        localStorage.setItem("9780134481265", "Fundamenatals of Web Development, 2/E");

    }
    if ($('#chkjavascript').is(':checked')) {
        localStorage.setItem("9780789758064", "JavaScript Absolute Beginner's Guide of Web Development, 2/E");

    }
    if ($('#chkaweb').is(':checked')) {
        localStorage.setItem("9780134216140", "Adaptive Web Design: Crafting Rich Experiences with Progressive Enhancement, 2/E");
    }
    if ($('#chkwww').is(':checked')) {
        localStorage.setItem("9780133775983", "Programming the World Wide Web,8/E");
    }
    if ($('#chkrweb').is(':checked')) {
        localStorage.setItem("9780672338380", "Responsive Web Design in 24 Hours, Sams Teach YourSelf");

    }

}
function retriveOrder() {
    for (var a in localStorage)
    {
        //alert(a);
        orders=orders+localStorage.getItem(a)+"|";
    }
    return orders;
}


