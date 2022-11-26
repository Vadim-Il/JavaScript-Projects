var A = 1000;  // Create GLOBAL variable

function Deduc_numbers_1() {  // Create deduction function
    document.write(A - 700 + "<br>");
}
function Deduc_numbers_2() {
    document.write(A - 500 + "<br>");
}
Deduc_numbers_1();
Deduc_numbers_2();



function Add_numbers_1() {
    var B = 50;  // Create LOCAL variable
    document.write(30 + B + "<br>");
}
function Add_numbers_2() {
    document.write(10 + B);
}
Add_numbers_1();
Add_numbers_2();



function Add_numbers_3() {
    var C = 60;
    console.log(30 + C);
}
function Add_numbers_4() {  // Intentionally create function with an error
    console.log(10 + C); // Debug with console.log in Chrome Dev Tools
}
Add_numbers_3();
Add_numbers_4();



function get_Date() {
    if (new Date().getHours() > 17) {  // Write If statement that utilizes the new Date().getHours() method
        document.getElementById("Wish").innerHTML = "Have a good evening!";  // Write a document.getElementById() method
    }
}

function get_FullYear() {
    if (new Date().getMonth() > 9) {  // Write If statement that utilizes the new Date().getMonth() method
        document.getElementById("Year").innerHTML = "Christmas is coming!";  // Write a document.getElementById() method
    }
}

function Age_Function() {
    var Age = document.getElementById("Age").value;
    var Vote;
    if (Age >= 18) {
        Vote = "You are old enough to vote!";
    }
    else {
        Vote = "You are not old enough to vote!";
    }
    document.getElementById("How_old_are_you?").innerHTML = Vote;
}

function myAge_Function() {
    var myAge = document.getElementById("myAge").value;  // Creating variable myAge and assigning it with value of users input
    var Guess;
    if (myAge == 27) {
        Guess = "You are right! I'm 27.";  // Assigning value to variable Guess at If statement;
    }
    else {
        Guess = "You are wrong! Try again.";  // Assigning value to variable Guess at Else statement;
    }
    document.getElementById("Guessed_or_not").innerHTML = Guess;  // Put variable Guess in document depending on users input
}

function Time_function() {
    var Time = new Date().getHours();  //  Variable Time equal to current time;
    var Reply;  //  Variable Reply;
    if (Time > 0 == Time < 12) {
        Reply = "It is morning time!";  //  Assigning value to variable Reply if first condition met;
    }
    else if (Time > 12 == Time < 18) {
        Reply = "It is afternoon time.";  //  Assigning value to variable Reply if second condition met;
    }
    else {
        Reply = "It is evening time.";  //  Assigning value to variable Reply if else condition met;
    }
    document.getElementById("Time_of_the_day").innerHTML = Reply;  //Returning variable Reply to the document depending on condition met;
}