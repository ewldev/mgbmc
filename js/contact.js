//show email and phone number 

const emailAddress = "rochelle@mgbmc.com";
const phoneNumber = "+1 416 587 0971";
const showEmail = document.getElementsByClassName("email")
const showNumber = document.getElementsByClassName("phone");

showEmail[0].innerHTML = `${emailAddress}`;
showEmail[1].innerHTML = `${emailAddress}`;
showNumber[0].innerHTML = `${phoneNumber}`;
showNumber[1].innerHTML = `${phoneNumber}`;
