// Allows user to enter password and checks if it is correct or not
var entry;
var pass1 = "cmpe131";

entry = prompt("Enter Password to View Page: ");

while (entry != pass1) {
    alert("Password is incorrect");
    entry = prompt("Enter Password to View Page: ");
};

alert("Password is correct!");
