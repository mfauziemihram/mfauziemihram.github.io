
function calculate(myLocation, myLocation2, myLocation3) {
    var myName = "This is Stackup, at " + myLocation + ", " + myLocation2;
    console.log(myName);
}

calculate("One North", "JTC Launchpad");

function getMyFullName() {
    var firstName = "Stackup";
    var lastName = "One North";
    var fullName = firstName + " " + lastName;
    return fullName;
}

var myFullName = getMyFullName();
console.log(myFullName);

function greet(firstName, lastName, bornYear) {
    var age = 2018 - bornYear;
    var fullGreeting = "Hello, " + firstName + " " + lastName + ", " + age + ".";
    console.log(fullGreeting);
}

greet("Michael", "Jordan", "1960");
greet("Mauro", "Icardi", 1988);
greet("Lionel", "Messi", 1987);

function testMe() {
    alert("Hi you hit the button!");
}