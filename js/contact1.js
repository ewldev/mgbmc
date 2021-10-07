//show email and phone number 

const emailAddress = "rochelle@mgbmc.com";
const phoneNumber1 = "+1 416 587 0971";
const phoneNumber2 = "+1 416.587.0971";
const showEmail = document.getElementsByClassName("email")
const showNumber = document.getElementsByClassName("phone");

showEmail[0].innerHTML = `${emailAddress}`;
showEmail[1].innerHTML = `${emailAddress}`;
showEmail[2].innerHTML = `${emailAddress}`;
showNumber[0].innerHTML = `${phoneNumber1}`;
showNumber[1].innerHTML = `${phoneNumber2}`;
showNumber[2].innerHTML = `${phoneNumber1}`;





