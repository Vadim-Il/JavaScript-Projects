window.alert("Hello, World!"); // Displays alert window with window.alert() method

var A = "He said:" // Defining a variable and giving it a string value
+ " \"My name is Rob.\""; // Concatenating string using "+" operator
document.write(A); // Displays text which is variable A
window.alert(A); // Displays alert window which is variable A

document.write("<br>"); // Making a break line in HTML document

// 1st option to assign colors to all variables
var food = "fruits", yellow = "lemon", green = "apple", red = "strawberry", orange = "tangerine"; // Defining a variable and giving it a string value
var food = food.fontcolor("pink"); // Using a fontcolor method on variables
var yellow = yellow.fontcolor("yellow");
var green = green.fontcolor("green");
var red = red.fontcolor("red");
var orange = orange.fontcolor("orange");
document.write(food); // Displays text with document.write() method
document.write(yellow);
document.write(green);
document.write(red);
document.write(orange);

document.write("<br>");

// 2nd option (short) to assign colors to all variables
var food = "fruits", yellow = "lemon", green = "apple", red = "strawberry", orange = "tangerine"; // Defining a variable and giving it a string value
document.write(food.fontcolor("pink") + yellow.fontcolor("yellow") + green.fontcolor("green") + red.fontcolor("red") + orange.fontcolor("orange")); // Using a fontcolor method on variables and displaying text with document.write() method

document.write("<br>");

document.write(19-10); // Writes an expression in HTML

document.write("<br>");

function My_First_Function() {                // Defining a function and giving it a name
    var str = "This text is green!";            // Defining a variable and giving it a string value
    var result = str.fontcolor("green");            // Using a fontcolor method on str variable
    document.getElementById("Green_Text").innerHTML = result;          // Putting the value of result into HTML element with "Green_Text" id
}

function New_Event() {
    var str = "This text is in uppercase!"
    var result = str.toLocaleUpperCase()
    document.getElementById("case").innerHTML = result

}