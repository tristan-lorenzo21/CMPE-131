// Password protection functionality
var entry;
var pass1 = "cmpe131";

entry = prompt("Enter Password to View Page: ");

while (entry != pass1) {
    alert("Password is incorrect");
    entry = prompt("Enter Password to View Page: ");
};

alert("Password is correct!");
