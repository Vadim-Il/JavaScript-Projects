function callLoop() {
  var numb = "";
  var A = 15;
  while (A > 0) {
    //  While A>0 loop will iterate.
    numb += A + "<br>"; //  var numb will decrease every iteration by 1.
    A--;
  }
  document.getElementById("loop").innerHTML = numb;
}

var text = document.getElementById("sentence").innerHTML;
var length = text.length;
document.getElementById("leng").innerHTML = "It's " + length;

var instruments = [
  "Drums",
  "Guitar",
  "Flute",
  "Piano",
  "Violin",
  "Bass",
  "Trumpet",
]; // Create an array "instruments"
var content = ""; //  Create var with empty string
var A;
function for_Loop() {
  for (A = 0; A < instruments.length; A++) {
    //  for loop that iterates through "instruments". It has [starting point], [condition], [increment].
    content += instruments[A] + "<br>"; //  In each iteration the next instrument name is taken.
  }
  document.getElementById("List_of_Instruments").innerHTML = content;
}

function array_Function() {
  var number = []; //  Creating the array with 4 objects
  number[0] = 10;
  number[1] = 100;
  number[2] = 1000;
  number[3] = 10000;
  document.getElementById("array").innerHTML =
    "There is a number in the array and it's " + number[1] + ".";
}

function constantFunction() {
  const car = { make: "Volkswagen", color: "blue", price: "27000£" }; //  Creating an object "car" with properties and values
  car.price = "25000£"; //  Changing the value of property
  (car.transmission = "manual"), //  Add new property with value
    (document.getElementById("constant").innerHTML =
      "This car showroom has a " +
      car.color +
      " " +
      car.make +
      " with " +
      car.transmission +
      " transmission" +
      " which worth " +
      car.price +
      ".");
}

var A = 100; //  Var doesn't have block scope.
console.log(A);
{
  let A = 99; //  Let declare variables that can have block scope.
  console.log(A);
}
console.log(A);

var X = myFunction(70, 10);

function myFunction(a, b) {
  return a / b; //  Stops the function and returns the value.
}
document.getElementById("return").innerHTML = X;

let mobilePhone = {
  //  Created object with properties and a "description" method.
  brand: "Iphone ",
  model: "X ",
  color: "gray ",
  memory: "128gb ",
  description: function () {
    return (
      "I have a " +
      this.color +
      this.brand +
      this.model +
      " with " +
      this.memory +
      " of memory."
    );
  }, //  Returned result with "return" statement and "this"
};
document.getElementById("mobile").innerHTML = mobilePhone.description();

function breakStatement() {
  let text = "";
  for (i = 0; i < 8; i++) {
    //  Creating loop "for" and if statement which stops loop when the condition is true
    if (i === 4) {
      break; //  Break statement stops the loop when i = 4.
    }
    text += i + "<br>";
  }
  document.getElementById("break").innerHTML = text;
}

function continueStatement() {
  let text = "";
  for (j = 0; j < 12; j++) {
    //  Creating loop "for" and if, else if statements which stop loop when the condition is true
    if (j === 2) {
      continue; //  Continue statement breaks one iteration when j = 2.
    } else if (j === 4) {
      continue; //  Continue statement breaks one iteration when j = 4.
    }
    text += j + "<br>";
  }
  document.getElementById("continue").innerHTML = text;
}
