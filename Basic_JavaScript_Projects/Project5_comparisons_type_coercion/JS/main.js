function typeofFunc1() {
    var str = typeof "This is a string"  // Getting a data type of a variable with "type of" operator
    document.getElementById("typeof_str").innerHTML = str
}

function typeofFunc2() {
   var num = typeof 67  // Getting a data type of a variable with "type of" operator
    document.getElementById("typeof_num").innerHTML = num
}

function nanFunc() {
    var nan = 0/0  // Getting a NaN value and assingning to variable
    document.getElementById("nan").innerHTML = nan  
}

function truenanFunc() {
    var tru = isNaN("This is a string")  // Getting a true value with "isNaN" function and assingning to variable
    document.getElementById("true_nan").innerHTML = tru  
}

function falsenanFunc() {
    var fal = isNaN("999")  // Getting a false value with "isNaN" function and assingning to variable
    document.getElementById("false_nan").innerHTML = fal  
}

function infFunc() {
    var inf = 33E445  // Getting an infinity value with very big number and assingning to variable
    document.getElementById("inf").innerHTML = inf  
}

function infminFunc() {
    var infmin = -76E814  // Getting an -infinity value with very small number and assingning to variable
    document.getElementById("inf_min").innerHTML = infmin  
}

function boogFunc() {
    var boogr = (39 > 15)  // Getting a boolean "true" condition number and assingning to variable
    document.getElementById("boo_great").innerHTML = boogr
}  

function boolFunc() {
    var boole = (39 < 15)  // Getting a boolean "false" condition number and assingning to variable
    document.getElementById("boo_less").innerHTML = boole
}  

console.log(100 - 33)   // Using console.log method to display math operation in the console

console.log("three" + 19)  // Using console.log method to display type coercion in the console

console.log(5 < 2)  // Displaying false in console using Boolean logic

console.log(17 + 3 == 10 + 10) // Using "==" to make a comparison of data value and display true in console
console.log(0 == 90 - 80)  // Using "==" to make a comparison of data value and display false in console

A = 17  // Assingning variable
B = 17
console.log(A === B)  // Using "===" to make a comparison of data value and type and display true in console (same type and value)
C = 100
D = "hello"
console.log(C === D)  // Using "===" to make a comparison of data value and type and display false in console (different types and value)
E = "50"
F = 50
console.log(E === F)  // Using "===" to make a comparison of data value and type and display false in console (different types)
G = 17
H = 71
console.log(G === H)  // Using "===" to make a comparison of data value and type and display false in console (different value)

console.log(4 > 1 && 8 < 10)  // Using "&&" or AND operator with Boolean logic and display true in console (both are true)
console.log(57 > 101 && 25 < 44)  // Using "&&" or AND operator with Boolean logic and display false in console (one is false)

console.log(21 < 56 || 66 < 40)  // Using "||" or OR operator with Boolean logic and display true in console (one is true)
console.log(77 > 90 || 39 > 99)  // Using "||" or OR operator with Boolean logic and display false in console (both are false)

function nottFunc () {  //Calling function nottFunc()
    document.getElementById("not_t").innerHTML = !(13 + 2 < 11 - 8)  // Using "!" or NOT operator with Boolean logic and display true in console (false comparison + "!")
}

function notfFunc () {  //Calling function notfFunc()
    document.getElementById("not_f").innerHTML = !(22 > 2 - 1)  // Using "!" or NOT operator with Boolean logic and display false in console (true comparison + "!")
}