function calculate() {
    var firstNumber = parseInt(document.getElementById("firstNumber").value);
    var operator = document.getElementById("operator").value;
    var secondNumber = parseInt(document.getElementById("secondNumber").value);

    if (operator == "+") {
        var total = firstNumber + secondNumber;
    }
    else if (operator == "*") {
        var total = firstNumber * secondNumber;
    }
    else if (operator == "-") {
        var total = firstNumber - secondNumber;
    }
    else if (operator == "/") {
        var total = firstNumber / secondNumber;
    }
    else {
        alert("Please enter a valid operator!");
    }
    document.getElementById("result").value = total;
}

//conditional statements
var greet;

if (greet == "morning") {
    console.log("This is morning!");
}
else if (greet == "afternoon") {
    console.log("This is afternoon!");
}
else if (greet == "evening") {
    console.log("This is evening!");
}
else {
    console.log("Night Time!");
}

//array
var greetings = ["Morning", "Afternoon", "Evening"];

console.log(greetings);
console.log(greetings.length);

//to get a specific element of an array
console.log(greetings [0]);

var primeNumber = [1, 3, 5, 7, 9, 12, 15];
console.log(primeNumber[primeNumber.length-1]);

var step = 0;
while (step < primeNumber.length) {
    console.log(primeNumber[step]);
    step = step + 1;
}

var numbers = [1,2,3,4,5,6,7,8,9,10];

var i = 0;
while (i < numbers.length) {
    i = i + 1;
    if (numbers[i] % 2 == 0) {
        console.log(numbers[i] + " is an even number");
    }
    else {
        console.log(numbers[i] + " is not an even number");
    }
    
}

